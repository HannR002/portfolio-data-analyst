import type { Project } from "../data/portfolio";
import { FaBookOpen, FaBuilding, FaPaw, FaRegFileAlt } from "react-icons/fa";

// Original illustrative compositions; no product screenshots or live metrics.
export function ProjectVisual({ kind }: { kind: Project["visual"] }) {
  return (
    <div className={`project-visual visual-${kind}`} aria-hidden="true">
      <span className="art-label">
        {kind === "spatial"
          ? "P4I / SPATIAL INTELLIGENCE"
          : kind === "inventory"
            ? "NGA / INVENTRA"
            : kind === "campus"
              ? "KAMPUSHUB / CAMPUS EXCHANGE"
              : kind === "florist"
                ? "NGA / FLORIST"
                : kind === "publisher"
                  ? "P4I / DIGITAL LIBRARY"
                  : kind === "platform"
                    ? "P4I / CORPORATE HUB"
                    : kind === "journal"
                      ? "OJS / JOURNAL DEVELOPMENT"
                      : "MY CAT / CONNECT & PLAY"}
      </span>
      {kind === "spatial" ? (
        <>
          <svg className="contour-map" viewBox="0 0 600 400" fill="none">
            <g stroke="currentColor" strokeWidth="1.2">
              {Array.from({ length: 13 }, (_, i) => (
                <path
                  key={i}
                  d={`M ${-90 + i * 18} 400 C ${-130 + i * 28} ${190 - i * 9}, ${470 - i * 24} ${310 - i * 13}, ${350 + i * 23} -40`}
                />
              ))}
              {Array.from({ length: 6 }, (_, i) => (
                <ellipse
                  key={i}
                  cx="426"
                  cy="234"
                  rx={26 + i * 25}
                  ry={18 + i * 19}
                  transform="rotate(-24 426 234)"
                />
              ))}
            </g>
            <path
              d="M 100 300 Q 230 250 270 180 T 480 130"
              stroke="#c6ff64"
              strokeWidth="2"
              strokeDasharray="6 7"
            />
            <circle cx="270" cy="180" r="7" fill="#c6ff64" />
            <circle cx="480" cy="130" r="5" fill="#c6ff64" />
          </svg>
          <div className="map-title">
            A new
            <br />
            <em>perspective.</em>
          </div>
          <div className="map-coordinates">
            EXPLORE THE LAYERS
            <br />
            <span>CONTEXT → ANALYSIS → INSIGHT</span>
          </div>
          <span className="map-cross cross-one">+</span>
          <span className="map-cross cross-two">+</span>
        </>
      ) : kind === "inventory" ? (
        <>
          <div className="inventory-window">
            <div className="window-bar">
              <span className="window-dots">
                <i />
                <i />
                <i />
              </span>
              <span>INVENTRA / WORKSPACE</span>
              <span>↗</span>
            </div>
            <div className="inventory-body">
              <div className="inventory-rail">
                <b>N.</b>
                <i />
                <i />
                <i />
                <i />
              </div>
              <div className="inventory-main">
                <div className="inventory-title">
                  Everything.
                  <br />
                  <strong>Accounted for.</strong>
                </div>
                <div className="inventory-flow">
                  <span>Receive</span>
                  <i>→</i>
                  <span>Track</span>
                  <i>→</i>
                  <span>Reconcile</span>
                </div>
                <div className="inventory-rows">
                  {[
                    "Consumable stock",
                    "Serialized assets",
                    "Warehouse movements",
                  ].map((x, i) => (
                    <div key={x}>
                      <span className="row-symbol">{["◈", "▧", "⇄"][i]}</span>
                      <span>{x}</span>
                      <span className="row-line" />
                      <span>↗</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : kind === "campus" ? (
        <>
          <div className="campus-word">
            Meet.
            <br />
            <em>Exchange.</em>
            <br />
            Connect.
          </div>
          <div className="meetup-ticket">
            <span>CAMPUS SAFE ZONE</span>
            <strong>It’s a match. ↗</strong>
            <div>
              Discover <i>→</i> Meet <i>→</i> Confirm
            </div>
            <span className="ticket-line" />
          </div>
        </>
      ) : kind === "florist" ? (
        <>
          <div className="florist-ring" />
          <div className="flower">
            {Array.from({ length: 6 }, (_, i) => (
              <i key={i} style={{ rotate: `${i * 60}deg` }} />
            ))}
            <span />
          </div>
          <div className="florist-word">
            A little
            <br />
            <em>something lovely.</em>
          </div>
        </>
      ) : kind === "publisher" ? (
        <>
          <div className="book-stack">
            <div className="book-back" />
            <div className="book-cover">
              <span>P4I / COLLECTION</span>
              <strong>
                Ideas
                <br />
                deserve
                <br />
                <em>readers.</em>
              </strong>
              <FaBookOpen />
              <span>DIGITAL LIBRARY & PUBLISHING</span>
            </div>
          </div>
          <span className="publisher-side">DISCOVER. READ. PUBLISH.</span>
        </>
      ) : (
        <>
          <div className="abstract-orbit orbit-one" />
          <div className="abstract-orbit orbit-two" />
          <div className="project-emblem">
            {kind === "platform" ? (
              <FaBuilding />
            ) : kind === "journal" ? (
              <FaRegFileAlt />
            ) : (
              <FaPaw />
            )}
          </div>
          <div className="emblem-title">
            {kind === "platform" ? (
              <>
                One place.
                <br />
                <em>Many possibilities.</em>
              </>
            ) : kind === "journal" ? (
              <>
                Knowledge,
                <br />
                <em>in circulation.</em>
              </>
            ) : (
              <>
                Small moments.
                <br />
                <em>Closer connections.</em>
              </>
            )}
          </div>
        </>
      )}
      <span className="visual-caption">ILLUSTRATIVE CONCEPT / 2026</span>
    </div>
  );
}
