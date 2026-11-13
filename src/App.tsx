import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import {
  About,
  Areas,
  Benefits,
  BookingBanner,
  Difference,
  FAQ,
  Footer,
  Problem,
  Process,
  Testimonials,
} from "./components/Sections";
import { SchedulingDialog } from "./components/SchedulingDialog";

export default function App() {
  const [scheduleOpen, setScheduleOpen] = useState(false);
  const openSchedule = () => setScheduleOpen(true);
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Header onSchedule={openSchedule} />
      <main id="conteudo">
        <Hero onSchedule={openSchedule} />
        <Areas onSchedule={openSchedule} />
        <Problem />
        <About onSchedule={openSchedule} />
        <Process />
        <Benefits />
        <Difference onSchedule={openSchedule} />
        <Testimonials />
        <BookingBanner onSchedule={openSchedule} />
        <FAQ />
      </main>
      <Footer onSchedule={openSchedule} />
      <button
        className="floating-contact"
        aria-label="Agendar consulta e conversar com a Mari"
        onClick={openSchedule}
      >
        <MessageCircle size={24} />
      </button>
      <SchedulingDialog
        open={scheduleOpen}
        onClose={() => setScheduleOpen(false)}
      />
    </>
  );
}
