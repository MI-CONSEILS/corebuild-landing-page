import { SiteHeader } from "@/components/layout/SiteHeader";
import { Footer } from "@/components/layout/Footer";
import { StartForm } from "@/components/StartForm";
import { WordReveal } from "@/components/WordReveal";

export default function StartPage() {
  return (
    <>
      <div className="start-page">
        <SiteHeader rootPath="/" />
        <main>
          <section className="start-hero">
            <div className="start-hero__inner">
              <h1
                className="start-hero__title"
                data-word-reveal
                data-word-reveal-speed="fast"
              >
                <WordReveal text="Start a project" />
              </h1>
              <p className="start-hero__sub">
                Tell us about your vision. Fill out the form below and our team
                will get back to you within 24 hours.
              </p>
            </div>
          </section>

          <section className="start-form-section">
            <div className="start-form-section__inner">
              <StartForm />
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
