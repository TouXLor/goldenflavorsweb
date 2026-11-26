import type { MouseEvent } from "react";
// 1. Import your site image getter from your data folder
import { getSiteImage } from "../data/images";
import { scrollToId } from "../utils/scroll";

const go = (id: string) => (e: MouseEvent) => {
  e.preventDefault();
  scrollToId(id);
};

export function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__left_content">
        <h1 className="hero__title">
          <span className="line">
            <span>CRAVE-WORTHY</span>
          </span>
          <span className="line">
            <span>ASIAN FUSION</span>
          </span>
          <span className="line">
            <span>STREET FOOD</span>
          </span>
        </h1>
        <p className="hero__sub">
          From giant sushi burritos to crispy Korean corndogs, discover your
          next favorite bite in the Milwaukee Area.
        </p>
        <div className="hero__cta">
          <a href="#find" onClick={go("find")} className="btn btn--navy">
            Where To Find Us
          </a>
          <a href="#menu" onClick={go("menu")} className="btn btn--ghost">
            See Menu
          </a>
        </div>
      </div>
      <div className="hero__right_content">
        {" "}
        {/* 2. Call getSiteImage with your exact union keys */}
        <img
          src={getSiteImage("hero-bg-circle")}
          alt="Hero Background Circle"
          className="bg_circle"
          fetchPriority="high"
        />
        <img
          className="hero__img"
          src={getSiteImage("hero-sushi-platter")}
          alt="Sushi roll platter"
        />
      </div>
    </section>
  );
}
