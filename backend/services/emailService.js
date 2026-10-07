import nodemailer from "nodemailer";

// Create transporter function
const createTransporter = () => {
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;

  if (user && pass && pass !== "your_gmail_app_password_here") {
    // If Gmail service or SMTP configured
    if (process.env.EMAIL_SERVICE === "gmail" || !process.env.SMTP_HOST) {
      return nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: user,
          pass: pass,
        },
      });
    }

    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: user,
        pass: pass,
      },
    });
  }

  return null;
};

/**
 * Send inquiry notification to business owner
 */
export const sendInquiryToOwner = async (inquiryData) => {
  const ownerEmail = process.env.OWNER_EMAIL || "rakeyr213@gmail.com";
  const transporter = createTransporter();

  const { name, email, phone, company, projectType, budget, message } = inquiryData;

  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0e1013; color: #f1f5f9; margin: 0; padding: 24px; }
          .container { max-width: 620px; margin: 0 auto; background: #16181b; border: 1px solid #33383f; border-radius: 14px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
          .header { background: linear-gradient(135deg, #1d4ed8 0%, #0f172a 100%); padding: 28px; text-align: center; border-bottom: 2px solid #3b82f6; }
          .header h1 { margin: 0; font-size: 22px; color: #ffffff; letter-spacing: 0.5px; }
          .header p { margin: 6px 0 0; font-size: 13px; color: #93c5fd; }
          .content { padding: 28px; }
          .badge { display: inline-block; padding: 6px 14px; background: rgba(59, 130, 246, 0.15); border: 1px solid #3b82f6; color: #60a5fa; border-radius: 9999px; font-size: 12px; font-weight: 600; text-transform: uppercase; margin-bottom: 20px; }
          .info-table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
          .info-table td { padding: 10px 14px; border-bottom: 1px solid #23272e; font-size: 14px; }
          .label { color: #94a3b8; font-weight: 600; width: 130px; }
          .value { color: #f8fafc; }
          .message-box { background: #0f1114; border: 1px solid #282c34; border-radius: 10px; padding: 18px; margin-top: 10px; line-height: 1.6; color: #e2e8f0; font-size: 14px; white-space: pre-wrap; }
          .reply-btn { display: inline-block; background: #2563eb; color: #ffffff !important; padding: 12px 26px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px; margin-top: 24px; }
          .footer { padding: 18px 28px; background: #121316; border-top: 1px solid #23272e; text-align: center; font-size: 12px; color: #64748b; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🚀 New Project Inquiry Received</h1>
            <p>DMANBRAY Innovations • Lead Notification</p>
          </div>
          <div class="content">
            <span class="badge">${projectType || "General Inquiry"}</span>

            <table class="info-table">
              <tr>
                <td class="label">Client Name:</td>
                <td class="value"><strong>${name}</strong></td>
              </tr>
              <tr>
                <td class="label">Email Address:</td>
                <td class="value"><a href="mailto:${email}" style="color: #60a5fa; text-decoration: none;">${email}</a></td>
              </tr>
              <tr>
                <td class="label">Phone:</td>
                <td class="value">${phone || "Not provided"}</td>
              </tr>
              <tr>
                <td class="label">Company / Org:</td>
                <td class="value">${company || "Not provided"}</td>
              </tr>
              <tr>
                <td class="label">Project Type:</td>
                <td class="value"><strong>${projectType}</strong></td>
              </tr>
              <tr>
                <td class="label">Budget Range:</td>
                <td class="value">${budget || "Not specified"}</td>
              </tr>
            </table>

            <div style="margin-top: 16px;">
              <strong style="color: #cbd5e1; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Client Message:</strong>
              <div class="message-box">${message}</div>
            </div>

            <div style="text-align: center;">
              <a href="mailto:${email}?subject=Re:%20Project%20Inquiry%20-%20DMANBRAY%20Innovations" class="reply-btn">
                ✉️ Reply to ${name}
              </a>
            </div>
          </div>
          <div class="footer">
            Received via DMANBRAY Innovations website inquiry system.
          </div>
        </div>
      </body>
    </html>
  `;

  // Forward to Formspree for immediate delivery to rakeyr213@gmail.com
  const formspreeEndpoint =
    process.env.FORMSPREE_ENDPOINT || "https://formspree.io/f/mljgjjvn";

  if (formspreeEndpoint) {
    try {
      const formspreeRes = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `🚀 [New Inquiry] ${projectType} from ${name}`,
          name,
          email,
          phone: phone || "Not provided",
          company: company || "Not provided",
          projectType,
          budget: budget || "Not specified",
          message,
        }),
      });

      if (formspreeRes.ok) {
        console.log(`✅ [Formspree] Project inquiry forwarded directly to ${ownerEmail}`);
      } else {
        console.warn("⚠️ [Formspree] Forward failed with status:", formspreeRes.status);
      }
    } catch (fsErr) {
      console.warn("⚠️ [Formspree] Error:", fsErr.message);
    }
  }

  if (!transporter) {
    console.log(`ℹ️ [Email Dispatch] Inquiry notification processed for ${ownerEmail}`);
    return { sent: true, provider: "formspree" };
  }

  const mailOptions = {
    from: `"DMANBRAY Innovations Inquiries" <${process.env.EMAIL_USER}>`,
    to: ownerEmail,
    replyTo: email,
    subject: `🚀 [New Inquiry] ${projectType} from ${name}`,
    html: htmlContent,
    text: `New Project Inquiry\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || "N/A"}\nCompany: ${company || "N/A"}\nProject: ${projectType}\nBudget: ${budget || "N/A"}\n\nMessage:\n${message}`,
  };

  const info = await transporter.sendMail(mailOptions);
  console.log(`✅ [Nodemailer] Project inquiry email delivered to ${ownerEmail}:`, info.messageId);
  return { sent: true, messageId: info.messageId, provider: "nodemailer" };
};

/**
 * Send acknowledgment email to client
 */
export const sendConfirmationToClient = async (inquiryData) => {
  const transporter = createTransporter();
  if (!transporter) return { sent: false };

  const { name, email, projectType } = inquiryData;

  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <body style="font-family: sans-serif; background-color: #0e1013; color: #f1f5f9; padding: 24px;">
        <div style="max-width: 580px; margin: 0 auto; background: #16181b; border: 1px solid #33383f; border-radius: 12px; padding: 28px;">
          <h2 style="color: #60a5fa; margin-top: 0;">Thank You for Reaching Out!</h2>
          <p>Hi ${name},</p>
          <p>We have successfully received your project inquiry regarding <strong>${projectType}</strong>.</p>
          <p>Our engineering and solutions team is reviewing your requirements and will get back to you within 24 hours.</p>
          <p style="margin-top: 24px; color: #94a3b8; font-size: 13px;">Warm regards,<br><strong style="color: #f8fafc;">DMANBRAY Innovations Team</strong><br>Pathway to Transform Your Career & Business</p>
        </div>
      </body>
    </html>
  `;

  try {
    await transporter.sendMail({
      from: `"DMANBRAY Innovations" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `We've received your project inquiry | DMANBRAY Innovations`,
      html: htmlContent,
    });
  } catch (err) {
    console.warn("Could not send client confirmation email:", err.message);
  }
};
