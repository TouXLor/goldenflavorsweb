import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { useGSAP } from "@gsap/react";
import { About } from "./sections/About";
import { FindUs } from "./sections/FindUs";
import { Footer } from "./sections/Footer";
import { Gallery } from "./sections/Gallery";
import { Hero } from "./sections/Hero";
import { Marquee } from "./sections/Marquee";
import { Menu } from "./sections/Menu";
import { Nav } from "./sections/Nav";
import PrivacyPolicy from "./privacyPolicy";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function App() {
  if (window.location.pathname.replace(/\/+$/, "") === "/privacy") {
    return (
      <>
        <Nav isHomePage={false} />
        <PrivacyPolicy />
        <Footer />
      </>
    );
  }

  return <HomePage />;
}

function HomePage() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      const lenis = new Lenis({
        duration: 1.2,
        smoothWheel: true,
        wheelMultiplier: 0.9,
        gestureOrientation: "vertical",
        touchMultiplier: 1.1,
      });

      const win = window as Window & { __lenis?: Lenis };
      win.__lenis = lenis;
      lenis.on("scroll", ScrollTrigger.update);

      const onTicker = (time: number) => lenis.raf(time * 1000);
      gsap.ticker.add(onTicker);
      gsap.ticker.lagSmoothing(0);

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap
          .timeline({ defaults: { ease: "power3.out" } })
          .from(".hero__blob", { scale: 0.6, opacity: 0, duration: 1.1 }, 0)
          .from(
            ".hero__img",
            { xPercent: 20, opacity: 0, rotate: 6, duration: 1.1 },
            0.15,
          )
          .from(
            ".hero__title .line > span",
            { yPercent: 110, duration: 0.9, stagger: 0.12 },
            0.1,
          )
          .from(
            [".hero__sub", ".hero__cta"],
            { y: 20, opacity: 0, duration: 0.6, stagger: 0.1 },
            0.7,
          );

        gsap.to(".marquee__track", {
          xPercent: -25,
          ease: "none",
          duration: 14,
          repeat: -1,
        });

        const path =
          root.current?.querySelector<SVGPathElement>(".arrow__path");
        if (path) {
          const len = path.getTotalLength();
          gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
          gsap.from(".arrow text", {
            opacity: 0,
            duration: 0.8,
            scrollTrigger: { trigger: ".arrow", start: "top 85%" },
          });
          gsap.to(path, {
            strokeDashoffset: 0,
            duration: 1.6,
            ease: "power2.inOut",
            scrollTrigger: { trigger: ".arrow", start: "top 85%" },
          });
        }

        gsap.utils.toArray<HTMLElement>(".menu__row").forEach((row) =>
          gsap.fromTo(
            row.querySelectorAll<HTMLElement>(".card"),
            {
              x: -48,
              y: 28,
              opacity: 0,
              force3D: true,
            },
            {
              x: 0,
              y: 0,
              opacity: 1,
              duration: 1,
              stagger: { each: 0.1, from: "start" },
              ease: "power3.out",
              overwrite: "auto",
              clearProps: "transform,opacity",
              scrollTrigger: {
                trigger: row,
                start: "top 84%",
                once: true,
                toggleActions: "play none none none",
              },
            },
          ),
        );

        gsap.fromTo(
          ".gallery__tile",
          {
            clipPath: "inset(0 0 100% 0)",
            y: 16,
            force3D: true,
          },
          {
            clipPath: "inset(0 0 0% 0)",
            y: 0,
            duration: 2.4,
            stagger: 0.12,
            ease: "power2.inOut",
            clearProps: "transform",
            scrollTrigger: {
              trigger: ".gallery",
              start: "top 75%",
              once: true,
              toggleActions: "play none none none",
            },
          },
        );

      });

      return () => {
        mm.revert();
        lenis.destroy();
        gsap.ticker.remove(onTicker);
        delete (window as Window & { __lenis?: Lenis }).__lenis;
      };
    },
    { scope: root },
  );

  return (
    <div ref={root}>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <FindUs />
        <Menu />
        <Gallery />
        <About />
      </main>
      <Footer />
    </div>
  );
}
