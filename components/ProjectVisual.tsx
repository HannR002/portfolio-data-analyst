import type { Project } from "../data/portfolio";

// Abstract project artwork, not a screenshot or a representation of live data.
export function ProjectVisual({ kind }: { kind: Project["visual"] }) {
  return (
    <div className={`project-visual visual-${kind}`} aria-hidden="true">
      <div className="visual-grid" />
      {kind === "spatial" ? (
        <>
          <div className="map-layer layer-one" />
          <div className="map-layer layer-two" />
          <div className="map-layer layer-three" />
          <div className="map-point point-one" />
          <div className="map-point point-two" />
          <span className="visual-caption">LAYERS / CONTEXT / INSIGHT</span>
        </>
      ) : kind === "campus" ? (
        <>
          <div className="mini-window">
            <div className="window-dots">
              <i />
              <i />
              <i />
            </div>
            <div className="listing-shapes">
              <i />
              <i />
              <i />
            </div>
            <div className="window-line" />
            <div className="window-line short" />
          </div>
          <span className="visual-chip">A clearer handover</span>
          <span className="visual-caption">DISCOVER / MEET / CONFIRM</span>
        </>
      ) : (
        <>
          <div className="flower">
            <i />
            <i />
            <i />
            <i />
            <i />
            <span />
          </div>
          <div className="florist-ring" />
          <span className="visual-chip">Thoughtfully arranged</span>
          <span className="visual-caption">CATALOG / CUSTOMIZE / INQUIRE</span>
        </>
      )}
    </div>
  );
}
