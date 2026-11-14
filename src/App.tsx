import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { Route, Routes } from "react-router";
import { Terms } from "./pages/Terms";
import { RouteNavigation } from "./components/RouteNavigation";
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
      <RouteNavigation />
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Header onSchedule={openSchedule} />
      <Routes>
        <Route
          path="/"
          element={
            <main id="conteudo" tabIndex={-1}>
              <title>Mari Nutricionista | Nutrição que cabe na sua vida</title>
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
          }
        />
        <Route path="/termos" element={<Terms onContact={openSchedule} />} />
        <Route
          path="*"
          element={
            <main
              id="conteudo"
              tabIndex={-1}
              className="container legal-not-found"
            >
              <title>Página não encontrada | Mari Nutricionista</title>
              <h1>Página não encontrada</h1>
              <p>
                Use o menu para voltar ao início e conhecer o acompanhamento.
              </p>
            </main>
          }
        />
      </Routes>
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
