import { getSiteImage } from "../data/images";
import thailandTemple from "../assets/imgs/thailand-temple.jpg";

export function About() {
  return (
    <section id="about" className="about">
      <h2 className="spaced about__title">About Us</h2>
      <img
        className="about__tall"
        data-speed="0.92"
        src={thailandTemple}
        alt="About Golden Flavors"
        loading="lazy"
      />
      <p className="about__text">
        We are David Lor and Houa Lee, co-founders originally from Laos who
        moved to America and settled in Milwaukee, Wisconsin, in 2004. While
        working regular company jobs, we spent years teaching ourselves culinary
        arts and food techniques through online research and networking. In
        January 2026, we turned our dream into reality by launching our food
        truck, bringing bold flavors and our hard-earned recipes directly to the
        streets of Milwaukee.
      </p>
      <div className="about__side" data-speed="1.08">
        <img
          src={getSiteImage("cyan-truck")}
          alt="Golden Flavors Food Truck"
          loading="lazy"
        />
        <p>
          Let us serve you with passionate love for food. Luxurious, golden
          taste. Every bite a celebration of flavors.
        </p>
      </div>
    </section>
  );
}
