import { INFO } from "./data/info";

export default function PrivacyPolicy() {
  return (
    <main
      className="menu"
      style={{ paddingTop: "calc(var(--nav-height) + 2rem)" }}
    >
      <article className="container">
        <header>
          <h1 className="menu__hook">Privacy Policy</h1>
          <p>
            <strong>Effective date:</strong> November 22, 2026
          </p>
          <p>
            Golden Flavors is a food truck based in Milwaukee, Wisconsin. This
            policy explains what information we collect through our website, how
            we use it, and the choices you have.
          </p>
        </header>

        <section>
          <h3>Information We Collect</h3>
          <p>When you submit our contact form, we collect:</p>
          <ul>
            <li>Your full name</li>
            <li>Your email address</li>
            <li>Your phone number</li>
          </ul>
          <p>
            We only collect what you choose to send us through the form. We
            don&apos;t ask for payment information, and we don&apos;t sell
            anything through this website at this time.
          </p>
        </section>

        <section>
          <h3>How We Use Your Information</h3>
          <p>We use the information you send us to:</p>
          <ul>
            <li>Reply to your message or inquiry</li>
            <li>
              Follow up about catering, events, or questions you asked about
            </li>
          </ul>
          <p>
            We don&apos;t use your information for anything else without asking
            you first.
          </p>
        </section>

        <section>
          <h3>Sharing Your Information</h3>
          <p>We do not sell, rent, or trade your personal information.</p>
          <p>
            We may use trusted service providers to run our website and receive
            form messages, such as our website host and email service. They only
            handle your information to help us operate the site and are not
            allowed to use it for their own purposes.
          </p>
          <p>We may also share information if the law requires it.</p>
        </section>

        <section>
          <h3>How Long We Keep Your Information</h3>
          <p>
            We keep your contact form messages only as long as we need them to
            respond to you and manage our business. If you want us to delete
            your information sooner, just ask.
          </p>
        </section>

        <section>
          <h3>Your Choices</h3>
          <p>You can contact us at any time to:</p>
          <ul>
            <li>Ask what information we have about you</li>
            <li>Correct your information</li>
            <li>Delete your information</li>
          </ul>
          <p>
            Email us at <a href={`mailto:${INFO.email}`}>{INFO.email}</a> and
            we&apos;ll take care of it.
          </p>
        </section>

        <section>
          <h3>Security</h3>
          <p>
            We take reasonable steps to protect the information you send us. No
            website or online system is completely secure, so we can&apos;t
            promise absolute security.
          </p>
        </section>

        <section>
          <h3>Children&apos;s Privacy</h3>
          <p>
            Our website is not directed at children under 13, and we do not
            knowingly collect personal information from them. If you believe a
            child has sent us information, contact us and we&apos;ll delete it.
          </p>
        </section>

        <section>
          <h3>Changes to This Policy</h3>
          <p>
            We may update this policy from time to time. When we do, we&apos;ll
            change the effective date at the top of this page.
          </p>
        </section>

        <a href="/" className="btn btn--yellow">
          Back to home
        </a>
      </article>
    </main>
  );
}
