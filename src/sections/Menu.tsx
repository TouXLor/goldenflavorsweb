import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { CATEGORIES, type Category } from "../data/menu";
import { getSiteImage } from "../data/images";
import { TABS } from "../data/navigation";
import { scrollToId } from "../utils/scroll";
import type { MouseEvent } from "react";

const go = (id: string) => (e: MouseEvent) => {
  e.preventDefault();
  scrollToId(id);
};

function Row({ id, title, items }: Category) {
  const sortedItems = [...items].sort((a, b) => {
    const popularOrder =
      Number(Boolean(b.popular)) - Number(Boolean(a.popular));
    return popularOrder || a.name.localeCompare(b.name);
  });

  return (
    <div id={id} className="menu__cat">
      <h3>{title}</h3>
      <div
        className="menu__row"
        tabIndex={0}
        aria-label={`${title} items, scrollable`}
      >
        {sortedItems.map((item) => (
          <article className="card" key={item.id}>
            <div className="card__media">
              <img src={item.image} alt={item.name} loading="lazy" />
              {item.popular && (
                <span className="badge">
                  Popular
                  <img
                    src={getSiteImage("popular-star")}
                    alt=""
                    aria-hidden="true"
                  />
                </span>
              )}
            </div>
            <div className="card_title_container">
              <h4>{item.name}</h4>
              <span className="card_price">{item.price}</span>
            </div>
            <p>{item.desc}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

export function Menu() {
  const [active, setActive] = useState(TABS[0].label);

  return (
    <section id="menu" className="menu">
      <div className="menu__header">
        <h2 className="menu__hook">
          Discover Street Food Crafted With Flavor And Fun
        </h2>

        <div className="menu__nav">
          <span className="menu__eyebrow">Our Menu</span>
          <div className="tabs" role="group" aria-label="Jump to menu category">
            {TABS.map((t) => (
              <button
                key={t.label}
                className="tab"
                aria-current={active === t.label}
                onClick={() => {
                  setActive(t.label);
                  scrollToId(t.target);
                }}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {CATEGORIES.map((c) => (
        <Row key={c.id} {...c} />
      ))}
      <div className="menu__cta">
        <span>Hungry?</span>
        <a href="#find" onClick={go("find")} className="btn btn--yellow">
          Find the Truck <ArrowRight size={18} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
