import React, { useEffect, useRef } from "react";
import { ecosystem } from "../data/siteData";
import { prefersReducedMotion } from "../lib/gsap";

/* WebGL "universe":
   1. Compact particle planet with orbital rings (reduced scale, positioned right on desktop).
   2. Ambient hero particle theme: gentle floating stardust & drifting motes across the hero canvas.
   3. Five brighter nodes on the rings represent the five DMANBRAY ecosystem engines.
   Confined strictly to the hero section. */

const vertexShader = /* glsl */ `
  attribute vec3 aTarget;
  attribute vec3 aScatter;
  attribute float aSeed;
  uniform float uTime;
  uniform float uIntro;
  uniform float uScroll;
  uniform vec2 uMouse;
  uniform float uPixelRatio;
  uniform float uSize;
  varying float vAlpha;
  varying float vAccent;

  float easeOut(float t) { return 1.0 - pow(1.0 - t, 3.0); }

  void main() {
    float t = easeOut(clamp(uIntro * 1.5 - aSeed * 0.5, 0.0, 1.0));
    vec3 pos = mix(aScatter, aTarget, t);

    // Gentle breathing so the form feels alive
    pos += normalize(aTarget + 0.0001) * sin(uTime * 0.7 + aSeed * 40.0) * 0.025;

    // Disperse outward on scroll
    pos = mix(pos, pos * 2.6 + aScatter * 0.35, uScroll);

    vec4 mv = modelViewMatrix * vec4(pos, 1.0);
    vec4 clip = projectionMatrix * mv;

    // Screen-space repulsion around the cursor
    vec2 ndc = clip.xy / clip.w;
    vec2 d = ndc - uMouse;
    float f = smoothstep(0.28, 0.0, length(d));
    clip.xy += normalize(d + 0.0001) * f * 0.09 * clip.w;

    gl_Position = clip;
    gl_PointSize = uSize * uPixelRatio * (0.55 + aSeed * 0.9) / -mv.z;
    vAlpha = (0.25 + 0.75 * aSeed) * (1.0 - uScroll * 0.85) * t;
    vAccent = step(0.9, aSeed);
  }
`;

const fragmentShader = /* glsl */ `
  varying float vAlpha;
  varying float vAccent;
  void main() {
    float d = length(gl_PointCoord - 0.5);
    float a = smoothstep(0.5, 0.0, d);
    vec3 col = mix(vec3(0.94, 0.92, 0.89), vec3(0.32, 0.42, 1.0), vAccent);
    gl_FragColor = vec4(col, a * vAlpha);
  }
`;

/* Ambient stardust vertex & fragment shaders */
const ambientVertexShader = /* glsl */ `
  attribute float aSeed;
  attribute float aBaseAlpha;
  uniform float uTime;
  uniform float uScroll;
  uniform float uPixelRatio;
  varying float vAlpha;
  varying float vType;

  void main() {
    vec3 pos = position;
    // Gentle natural wave motion
    pos.x += sin(uTime * 0.5 + aSeed * 25.0) * 0.12;
    pos.y += cos(uTime * 0.4 + aSeed * 18.0) * 0.09;

    // Scroll dispersal
    pos.y += uScroll * 3.5;

    vec4 mv = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = (14.0 + aSeed * 18.0) * uPixelRatio / -mv.z;
    vAlpha = aBaseAlpha * (0.35 + 0.65 * sin(uTime * 1.2 + aSeed * 12.0)) * (1.0 - uScroll * 0.9);
    vType = aSeed;
  }
`;

const ambientFragmentShader = /* glsl */ `
  varying float vAlpha;
  varying float vType;
  void main() {
    float d = length(gl_PointCoord - 0.5);
    float a = smoothstep(0.5, 0.0, d);
    // Subtle brand-harmonized color palette: warm white, gold, cobalt
    vec3 col = vec3(0.94, 0.92, 0.89);
    if (vType > 0.85) {
      col = vec3(0.85, 0.70, 0.35); // subtle gold
    } else if (vType > 0.65) {
      col = vec3(0.50, 0.60, 1.0);  // subtle cobalt
    }
    gl_FragColor = vec4(col, a * vAlpha * 0.8);
  }
`;

const HeroScene = ({ scrollRef, className = "" }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    let disposed = false;
    let cleanup = () => { };

    import("three").then((THREE) => {
      if (disposed || !mountRef.current) return;
      const mount = mountRef.current;
      const reduce = prefersReducedMotion();
      const mobile = window.innerWidth < 768;

      const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true, powerPreference: "high-performance" });
      const dpr = Math.min(window.devicePixelRatio, 2);
      renderer.setPixelRatio(dpr);
      renderer.setSize(mount.clientWidth, mount.clientHeight);
      mount.appendChild(renderer.domElement);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(42, mount.clientWidth / mount.clientHeight, 0.1, 100);
      camera.position.set(0, 0, mobile ? 8.8 : 7.2);

      /* ═══════════════════ 1. COMPACT 3D PARTICLE PLANET & RINGS ═══════════════════ */
      const world = new THREE.Group();
      world.rotation.x = 0.35;

      // Positioned cleanly within the right-hand canvas area
      const worldScale = mobile ? 0.48 : 0.64;
      world.scale.set(worldScale, worldScale, worldScale);
      world.position.set(mobile ? 0 : 0.35, mobile ? -0.25 : 0.05, 0);
      scene.add(world);

      const count = mobile ? 3800 : 7500;
      const target = new Float32Array(count * 3);
      const scatter = new Float32Array(count * 3);
      const seed = new Float32Array(count);
      const golden = Math.PI * (3 - Math.sqrt(5));
      const sphereCount = Math.floor(count * 0.62);

      for (let i = 0; i < count; i++) {
        let x, y, z;
        if (i < sphereCount) {
          const yy = 1 - (i / (sphereCount - 1)) * 2;
          const r = Math.sqrt(1 - yy * yy);
          const th = golden * i;
          const radius = 1.55 + (Math.random() - 0.5) * 0.08;
          x = Math.cos(th) * r * radius;
          y = yy * radius;
          z = Math.sin(th) * r * radius;
        } else {
          const ring = i % 2;
          const a = Math.random() * Math.PI * 2;
          const radius = (ring ? 2.45 : 3.05) + (Math.random() - 0.5) * (ring ? 0.22 : 0.12);
          const tilt = ring ? 0.18 : -0.32;
          x = Math.cos(a) * radius;
          y = Math.sin(a) * radius * Math.sin(tilt) + (Math.random() - 0.5) * 0.04;
          z = Math.sin(a) * radius * Math.cos(tilt);
        }
        target.set([x, y, z], i * 3);
        const s = 7 + Math.random() * 6;
        const u = Math.random() * Math.PI * 2;
        const v = Math.acos(2 * Math.random() - 1);
        scatter.set([s * Math.sin(v) * Math.cos(u), s * Math.sin(v) * Math.sin(u), s * Math.cos(v)], i * 3);
        seed[i] = Math.random();
      }

      const geo = new THREE.BufferGeometry();
      geo.setAttribute("position", new THREE.BufferAttribute(target, 3));
      geo.setAttribute("aTarget", new THREE.BufferAttribute(target, 3));
      geo.setAttribute("aScatter", new THREE.BufferAttribute(scatter, 3));
      geo.setAttribute("aSeed", new THREE.BufferAttribute(seed, 1));

      const uniforms = {
        uTime: { value: 0 },
        uIntro: { value: reduce ? 1 : 0 },
        uScroll: { value: 0 },
        uMouse: { value: new THREE.Vector2(9, 9) },
        uPixelRatio: { value: dpr },
        uSize: { value: mobile ? 26 : 32 }, // Balanced particle point size
      };
      const mat = new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      });
      world.add(new THREE.Points(geo, mat));

      /* ---- Ecosystem nodes on the rings ---- */
      const nodeGroup = new THREE.Group();
      world.add(nodeGroup);
      const lineMat = new THREE.LineBasicMaterial({ color: 0x8091ff, transparent: true, opacity: 0 });
      const nodeMats = [];
      ecosystem.forEach((v, i) => {
        const a = (i / ecosystem.length) * Math.PI * 2 + 0.4;
        const radius = i % 2 ? 2.45 : 3.05;
        const tilt = i % 2 ? 0.18 : -0.32;
        const p = new THREE.Vector3(Math.cos(a) * radius, Math.sin(a) * radius * Math.sin(tilt), Math.sin(a) * radius * Math.cos(tilt));
        const m = new THREE.MeshBasicMaterial({ color: new THREE.Color(v.signal), transparent: true, opacity: 0 });
        nodeMats.push(m);
        const node = new THREE.Mesh(new THREE.SphereGeometry(0.06, 16, 16), m);
        node.position.copy(p);
        const halo = new THREE.Mesh(
          new THREE.RingGeometry(0.12, 0.135, 48),
          new THREE.MeshBasicMaterial({ color: new THREE.Color(v.signal), transparent: true, opacity: 0, side: THREE.DoubleSide })
        );
        nodeMats.push(halo.material);
        halo.position.copy(p);
        halo.userData.billboard = true;
        nodeGroup.add(node, halo);
        const lg = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0, 0), p]);
        nodeGroup.add(new THREE.Line(lg, lineMat));
      });

      /* ═══════════════════ 2. AMBIENT HERO PARTICLE THEME ═══════════════════ */
      const ambientCount = mobile ? 450 : 1100;
      const ambientPositions = new Float32Array(ambientCount * 3);
      const ambientVelocities = new Float32Array(ambientCount * 3);
      const ambientSeeds = new Float32Array(ambientCount);
      const ambientAlphas = new Float32Array(ambientCount);

      for (let i = 0; i < ambientCount; i++) {
        ambientPositions[i * 3] = (Math.random() - 0.5) * 28;
        ambientPositions[i * 3 + 1] = (Math.random() - 0.5) * 18;
        ambientPositions[i * 3 + 2] = (Math.random() - 0.5) * 14 - 1.5;

        ambientVelocities[i * 3] = (Math.random() - 0.5) * 0.003;
        ambientVelocities[i * 3 + 1] = 0.002 + Math.random() * 0.004; // Gentle upward drift
        ambientVelocities[i * 3 + 2] = (Math.random() - 0.5) * 0.002;

        ambientSeeds[i] = Math.random();
        ambientAlphas[i] = 0.25 + Math.random() * 0.65;
      }

      const ambientGeo = new THREE.BufferGeometry();
      ambientGeo.setAttribute("position", new THREE.BufferAttribute(ambientPositions, 3));
      ambientGeo.setAttribute("aSeed", new THREE.BufferAttribute(ambientSeeds, 1));
      ambientGeo.setAttribute("aBaseAlpha", new THREE.BufferAttribute(ambientAlphas, 1));

      const ambientUniforms = {
        uTime: { value: 0 },
        uScroll: { value: 0 },
        uPixelRatio: { value: dpr },
      };

      const ambientMat = new THREE.ShaderMaterial({
        vertexShader: ambientVertexShader,
        fragmentShader: ambientFragmentShader,
        uniforms: ambientUniforms,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      });

      const ambientPoints = new THREE.Points(ambientGeo, ambientMat);
      scene.add(ambientPoints);

      /* ═══════════════════ 3. INTERACTION & EVENTS ═══════════════════ */
      const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
      const onPointer = (e) => {
        const rect = mount.getBoundingClientRect();
        const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        const ny = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
        mouse.tx = nx;
        mouse.ty = ny;
        uniforms.uMouse.value.set(nx, ny);
      };
      const onLeave = () => uniforms.uMouse.value.set(9, 9);
      if (!mobile) {
        window.addEventListener("pointermove", onPointer, { passive: true });
        document.documentElement.addEventListener("pointerleave", onLeave);
      }

      const onResize = () => {
        const w = mount.clientWidth;
        const h = mount.clientHeight;
        renderer.setSize(w, h);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
      };
      window.addEventListener("resize", onResize);

      let visible = true;
      const io = new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting;
      });
      io.observe(mount);

      const clock = new THREE.Clock();
      let raf = 0;
      const introStart = performance.now() + 250;

      const frame = () => {
        raf = requestAnimationFrame(frame);
        if (!visible || document.hidden) return;
        const elapsed = clock.getElapsedTime();
        uniforms.uTime.value = elapsed;
        ambientUniforms.uTime.value = elapsed;

        if (!reduce) {
          const intro = Math.min(Math.max((performance.now() - introStart) / 2600, 0), 1);
          uniforms.uIntro.value = intro;
          nodeMats.forEach((m, i) => {
            m.opacity = Math.min(Math.max((intro - 0.55) * 2.2, 0), 1) * (i % 2 ? 0.55 : 1);
          });
          lineMat.opacity = Math.min(Math.max((intro - 0.7) * 1.2, 0), 0.35);

          world.rotation.y += 0.0018;
          mouse.x += (mouse.tx - mouse.x) * 0.04;
          mouse.y += (mouse.ty - mouse.y) * 0.04;
          world.rotation.x = 0.35 - mouse.y * 0.15;
          world.rotation.z = mouse.x * 0.06;

          // Drift ambient particles gently upward
          const posAttr = ambientGeo.attributes.position;
          const posArr = posAttr.array;
          for (let i = 0; i < ambientCount; i++) {
            posArr[i * 3] += ambientVelocities[i * 3];
            posArr[i * 3 + 1] += ambientVelocities[i * 3 + 1];
            posArr[i * 3 + 2] += ambientVelocities[i * 3 + 2];

            if (posArr[i * 3 + 1] > 9.0) {
              posArr[i * 3 + 1] = -9.0;
              posArr[i * 3] = (Math.random() - 0.5) * 28;
            }
          }
          posAttr.needsUpdate = true;
        } else {
          nodeMats.forEach((m) => (m.opacity = 1));
          lineMat.opacity = 0.35;
        }

        const s = scrollRef?.current ?? 0;
        uniforms.uScroll.value = s;
        ambientUniforms.uScroll.value = s;
        camera.position.z = (mobile ? 8.8 : 7.2) - s * 2.2;
        nodeGroup.children.forEach((c) => {
          if (c.userData.billboard) c.quaternion.copy(camera.quaternion);
        });

        renderer.render(scene, camera);
      };

      if (reduce) {
        renderer.render(scene, camera);
        uniforms.uIntro.value = 1;
        frame();
      } else {
        frame();
      }

      cleanup = () => {
        cancelAnimationFrame(raf);
        io.disconnect();
        window.removeEventListener("pointermove", onPointer);
        document.documentElement.removeEventListener("pointerleave", onLeave);
        window.removeEventListener("resize", onResize);
        scene.traverse((o) => {
          o.geometry?.dispose?.();
          o.material?.dispose?.();
        });
        renderer.dispose();
        renderer.domElement.remove();
      };
    });

    return () => {
      disposed = true;
      cleanup();
    };
  }, [scrollRef]);

  return <div ref={mountRef} className={className} aria-hidden="true" />;
};

export default HeroScene;
