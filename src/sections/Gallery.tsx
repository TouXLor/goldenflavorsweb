import { GALLERY } from "../data/navigation";
import { GALLERY_IMAGE_REGISTRY } from "../data/images";

export function Gallery() {
  return (
    <section className="gallery dark" aria-label="Photo gallery">
      {GALLERY.map((row, r) => (
        <div className="gallery__row" key={r}>
          {row.map((t, i) => (
            <div className="gallery__tile" key={i} style={{ flex: t.flex }}>
              <img
                src={GALLERY_IMAGE_REGISTRY[t.image]}
                alt="Golden Flavors dish"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}
