import { COMPANY } from "@/config/company";
import { FAQ_ITEMS } from "@/content/faq";
import { createWhatsappUrl, WHATSAPP_MESSAGES } from "@/lib/whatsapp";

function FaqCta({ mobile = false }: { mobile?: boolean }) {
  return (
    <a
      aria-label={mobile ? `Falar com a ${COMPANY.brandName} pelo WhatsApp` : undefined}
      className={`hero-cta hero-cta--primary faq__cta faq__cta--${mobile ? "mobile" : "desktop"}`}
      href={createWhatsappUrl(WHATSAPP_MESSAGES.default)}
      rel="noopener noreferrer"
      target="_blank"
    >
      <span aria-hidden="true" className="hero-cta__icon">
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <path d="M20 11.6a8 8 0 0 1-11.8 7L4 20l1.5-4A8 8 0 1 1 20 11.6Z" />
          <path d="M8.4 8.2c.2-.5.5-.5.8-.5h.5c.2 0 .4 0 .6.5l.8 1.9c.1.3.1.5-.1.7l-.6.8c-.2.2-.3.4-.1.7.5 1 1.3 1.8 2.3 2.3.3.2.5.1.7-.1l.8-1c.2-.3.5-.3.8-.2l1.8.8c.3.1.5.3.5.5 0 .3-.1 1.4-.7 2-.6.7-1.6 1-2.6.8-1.4-.2-3.2-1.1-4.8-2.6-1.9-1.8-3.1-4-3.2-5.3 0-.5.1-1 .3-1.3Z" />
        </svg>
      </span>
      <span className="hero-cta__label">Falar no WhatsApp</span>
      <span aria-hidden="true" className="hero-cta__arrow"><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M6 12h11" /><path d="m13.5 8.5 3.5 3.5-3.5 3.5" /></svg></span>
    </a>
  );
}

export function Faq() {
  return (
    <section aria-labelledby="faq-title" className="faq" data-faq="" id="faq">
      <div className="faq__inner">
        <div className="faq__layout">
          <div className="faq__intro">
            <p className="faq__eyebrow"><span aria-hidden="true" className="faq__eyebrow-icon"><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M7 8.5A5 5 0 0 1 12 4a5 5 0 0 1 5 5c0 3.7-5 3.4-5 6.3" /><path d="M12 19h.01" /></svg></span>FAQ</p>
            <h2 className="faq__title" id="faq-title">Dúvidas sobre <strong>serviços e agendamento.</strong></h2>
            <p className="faq__lead">Reunimos as perguntas mais frequentes para deixar o próximo passo mais claro. Se ainda ficar alguma dúvida, fale conosco diretamente.</p>
            <FaqCta />
          </div>
          <div className="faq__questions">
            <div className="faq__list">
              {FAQ_ITEMS.map((item, index) => {
                const questionId = `faq-question-${index + 1}`;
                const answerId = `faq-answer-${index + 1}`;
                return (
                  <article className="faq-item" key={item.id}>
                    <h3 className="faq-item__heading">
                      <button aria-controls={answerId} aria-expanded="true" className="faq-item__toggle" data-faq-toggle="" id={questionId} type="button">
                        <span className="faq-item__number" />
                        <span className="faq-item__question">{item.question}</span>
                        <span aria-hidden="true" className="faq-item__icon" />
                      </button>
                    </h3>
                    <div aria-labelledby={questionId} className="faq-item__answer" id={answerId} role="region"><div><p>{item.answer}</p></div></div>
                  </article>
                );
              })}
            </div>
          </div>
          <FaqCta mobile />
        </div>
      </div>
    </section>
  );
}
