import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Stack } from "./components/stack";
import { Work } from "./components/work";
import { Manifesto } from "./components/manifesto";
import { Services } from "./components/services";
import { Process } from "./components/process";
import { About } from "./components/about";
import { Faq } from "./components/faq";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Stack />
      <Work />
      <Manifesto />
      <Services />
      <Process />
      <About />
      <Faq />
      <Contact />
      <Footer />
    </main>
  );
}
