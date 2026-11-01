"use client";

import { useRef, useState } from "react";

export function PortraitScene() {
  const scene = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(true);
  const [angle, setAngle] = useState(0);
  function reset() {
    scene.current?.style.setProperty("--rx", "0deg");
    scene.current?.style.setProperty("--ry", "0deg");
  }
  return (
    <div className="portrait-experience">
      <div
        className="portrait-stage"
        onPointerMove={(event) => {
          if (
            !enabled ||
            event.pointerType !== "mouse" ||
            window.matchMedia("(prefers-reduced-motion: reduce)").matches
          )
            return;
          const bounds = event.currentTarget.getBoundingClientRect();
          scene.current?.style.setProperty(
            "--ry",
            `${((event.clientX - bounds.left) / bounds.width) * 8 - 4}deg`,
          );
          scene.current?.style.setProperty(
            "--rx",
            `${4 - ((event.clientY - bounds.top) / bounds.height) * 8}deg`,
          );
        }}
        onPointerLeave={reset}
      >
        <div
          className="portrait-scene"
          ref={scene}
          style={{ rotate: `y ${angle}deg` }}
        >
          <div className="portrait-backplate" aria-hidden="true" />
          <figure className="portrait-frame">
            <img
              src="/images/farhan.jpg"
              alt="Muhammad Farhan wearing a navy blue shirt in a garden"
              width="1066"
              height="1600"
              fetchPriority="high"
            />
            <figcaption>
              <span>THE PERSON BEHIND THE PROJECTS</span>
              <strong>Muhammad Farhan</strong>
              <span>Developer / Jambi, Indonesia</span>
            </figcaption>
          </figure>
          <div className="portrait-note" aria-hidden="true">
            A little curiosity.
            <br />A lot of possibility.<span>↗</span>
          </div>
          <div className="portrait-seal" aria-hidden="true">
            <span>DATA</span>✳<span>SYSTEMS</span>
          </div>
        </div>
      </div>
      <div
        className="scene-controls"
        role="group"
        aria-label="Portrait 3D controls"
      >
        <button
          type="button"
          onClick={() => setAngle((a) => Math.max(-12, a - 6))}
          aria-label="Rotate portrait left"
        >
          ↶
        </button>
        <button
          type="button"
          aria-pressed={enabled}
          onClick={() => {
            setEnabled((v) => !v);
            reset();
          }}
        >
          {enabled ? "Motion on" : "Motion off"}
        </button>
        <button
          type="button"
          onClick={() => {
            setAngle(0);
            reset();
          }}
        >
          Reset
        </button>
        <button
          type="button"
          onClick={() => setAngle((a) => Math.min(12, a + 6))}
          aria-label="Rotate portrait right"
        >
          ↷
        </button>
      </div>
    </div>
  );
}
