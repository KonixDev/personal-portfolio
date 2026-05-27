import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Stack } from "./components/stack";
import { Work } from "./components/work";
import { Services } from "./components/services";
import { Included } from "./components/included";
import { Process } from "./components/process";
import { Pricing } from "./components/pricing";
import { Faq } from "./components/faq";
import { Contact } from "./components/contact";
import { Marquee } from "./components/marquee";
import { Footer } from "./components/footer";
import { FooterReveal } from "./components/footer-reveal";
import { OrganizationJsonLd, LocalBusinessJsonLd, FaqJsonLd } from "./components/json-ld";
import { faqs } from "@/lib/site-config";

export default function Page() {
  return (
    <FooterReveal
      main={
        <>
          <OrganizationJsonLd />
          <LocalBusinessJsonLd />
          <FaqJsonLd items={faqs.map(f => ({ q: f.q, a: f.a }))} />
          <Header />
          <Hero />
          <div className="divider" />
          <Stack />
          <div className="divider" />
          <Services />
          <div className="divider" />
          <Work />
          <div className="divider" />
          <Included />
          <div className="divider" />
          <Process />
          <div className="divider" />
          <Pricing />
          <div className="divider" />
          <Faq />
          <div className="divider" />
          <Contact />
          <Marquee />
        </>
      }
      footer={<Footer />}
    />
  );
}
