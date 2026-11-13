import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  MapPin,
  MessageCircle,
  Monitor,
  X,
} from "lucide-react";

export function SchedulingDialog({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [format, setFormat] = useState("Online");
  const number = (import.meta.env.VITE_WHATSAPP_NUMBER ?? "").replace(
    /\D/g,
    "",
  );
  const configured = /^\d{12,15}$/.test(number);
  const message = encodeURIComponent(
    `Olá, Mari! Gostaria de saber os horários e valores para uma consulta ${format.toLowerCase()}.`,
  );

  useEffect(() => {
    const dialog = dialogRef.current;
    if (open) dialog?.showModal();
    else dialog?.close();
    const previous = document.body.style.overflow;
    if (open) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      className="scheduling-dialog"
      onCancel={onClose}
      onClick={(event) => {
        if (event.target === dialogRef.current) onClose();
      }}
      aria-labelledby="schedule-title"
    >
      <AnimatePresence>
        {open && (
          <motion.div
            className="dialog-content"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            <button
              className="dialog-close"
              onClick={onClose}
              aria-label="Fechar agendamento"
            >
              <X size={21} />
            </button>
            <span className="dialog-icon">
              <MessageCircle size={28} />
            </span>
            <h2 id="schedule-title">
              Seu primeiro passo
              <br />
              começa aqui.
            </h2>
            <p>Como você prefere ser atendido?</p>
            <div className="format-options">
              {[
                { name: "Online", icon: Monitor },
                { name: "Presencial", icon: MapPin },
              ].map(({ name, icon: Icon }) => (
                <button
                  className={
                    format === name ? "format-option selected" : "format-option"
                  }
                  key={name}
                  aria-pressed={format === name}
                  onClick={() => setFormat(name)}
                >
                  <Icon size={22} />
                  <span>{name}</span>
                  {format === name && <Check size={16} />}
                </button>
              ))}
            </div>
            {configured ? (
              <>
                <a
                  className="button button-lime dialog-continue"
                  href={`https://wa.me/${number}?text=${message}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Continuar no WhatsApp
                  <ArrowUpRight size={20} />
                </a>
                <small>
                  Converse com a Mari para consultar horários e valores.
                  <br />O agendamento é confirmado pelo WhatsApp.
                </small>
              </>
            ) : (
              <div className="contact-pending" role="status">
                <strong>Agenda em preparação</strong>
                <p>
                  O contato da Mari estará disponível em breve para consultar
                  horários e valores.
                </p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </dialog>
  );
}
