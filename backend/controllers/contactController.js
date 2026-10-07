import Contact from "../models/Contact.js";
import {
  sendInquiryToOwner,
  sendConfirmationToClient,
} from "../services/emailService.js";

export const createContact = async (req, res) => {
  try {
    const { name, email, phone, company, projectType, budget, message } =
      req.body;

    const contact = await Contact.create({
      name,
      email,
      phone,
      company,
      projectType,
      budget,
      message,
    });

    // Send email notification to owner rakeyr213@gmail.com
    sendInquiryToOwner({
      name,
      email,
      phone,
      company,
      projectType,
      budget,
      message,
    }).catch((err) => console.error("Error sending owner email:", err.message));

    // Send confirmation to client
    sendConfirmationToClient({
      name,
      email,
      projectType,
    }).catch((err) => console.error("Error sending client confirmation:", err.message));

    res.status(201).json({
      success: true,
      message: "Thank you! Your project inquiry has been received. Our team will contact you shortly.",
      data: {
        id: contact._id,
        name: contact.name,
        email: contact.email,
      },
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((err) => err.message);
      return res.status(400).json({
        success: false,
        message: messages.join(", "),
      });
    }

    console.error("Contact creation error:", error);
    res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again later.",
    });
  }
};

export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: contacts.length,
      data: contacts,
    });
  } catch (error) {
    console.error("Get contacts error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to retrieve contacts.",
    });
  }
};

export const getContactById = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Contact not found.",
      });
    }
    res.status(200).json({
      success: true,
      data: contact,
    });
  } catch (error) {
    console.error("Get contact error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to retrieve contact.",
    });
  }
};

export const updateContactStatus = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true, runValidators: true }
    );
    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Contact not found.",
      });
    }
    res.status(200).json({
      success: true,
      data: contact,
    });
  } catch (error) {
    console.error("Update contact error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to update contact.",
    });
  }
};
