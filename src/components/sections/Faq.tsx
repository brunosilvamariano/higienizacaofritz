export function Faq() {
  return (
    <section aria-labelledby="faq-title" className="faq" data-faq="" id="faq">
      <div className="faq__inner">
        <div className="faq__layout">
          <div className="faq__intro">
            <p className="faq__eyebrow">
              <span aria-hidden="true" className="faq__eyebrow-icon">
                <svg aria-hidden="true" viewBox="0 0 24 24">
                  <path d="M7 8.5A5 5 0 0 1 12 4a5 5 0 0 1 5 5c0 3.7-5 3.4-5 6.3"></path>
                  <path d="M12 19h.01"></path>
                </svg>
              </span>
              FAQ
            </p>
            <h2 className="faq__title" id="faq-title">
              Dúvidas sobre
              <strong>
                serviços e agendamento.
              </strong>
            </h2>
            <p className="faq__lead">
              Reunimos as perguntas mais frequentes para deixar o próximo passo mais claro.
                  Se ainda ficar alguma dúvida, fale conosco diretamente.
            </p>
            <a className="hero-cta hero-cta--primary faq__cta faq__cta--desktop" href="https://wa.me/5547999051278?text=Ol%C3%A1%21%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20higieniza%C3%A7%C3%A3o%20ou%20impermeabiliza%C3%A7%C3%A3o%20de%20estofados." rel="noopener noreferrer" target="_blank">
              <span aria-hidden="true" className="hero-cta__icon">
                <svg aria-hidden="true" viewBox="0 0 24 24">
                  <path d="M20 11.6a8 8 0 0 1-11.8 7L4 20l1.5-4A8 8 0 1 1 20 11.6Z"></path>
                  <path d="M8.4 8.2c.2-.5.5-.5.8-.5h.5c.2 0 .4 0 .6.5l.8 1.9c.1.3.1.5-.1.7l-.6.8c-.2.2-.3.4-.1.7.5 1 1.3 1.8 2.3 2.3.3.2.5.1.7-.1l.8-1c.2-.3.5-.3.8-.2l1.8.8c.3.1.5.3.5.5 0 .3-.1 1.4-.7 2-.6.7-1.6 1-2.6.8-1.4-.2-3.2-1.1-4.8-2.6-1.9-1.8-3.1-4-3.2-5.3 0-.5.1-1 .3-1.3Z"></path>
                </svg>
              </span>
              <span className="hero-cta__label">
                Falar no WhatsApp
              </span>
              <span aria-hidden="true" className="hero-cta__arrow">
                <svg aria-hidden="true" viewBox="0 0 24 24">
                  <path d="M6 12h11"></path>
                  <path d="m13.5 8.5 3.5 3.5-3.5 3.5"></path>
                </svg>
              </span>
            </a>
          </div>
          <div className="faq__questions">
            <div className="faq__list">
              <article className="faq-item">
                <h3 className="faq-item__heading">
                  <button aria-controls="faq-answer-1" aria-expanded="true" className="faq-item__toggle" data-faq-toggle="" id="faq-question-1" type="button">
                    <span className="faq-item__number"></span>
                    <span className="faq-item__question">
                      Vocês atendem em Joinville?
                    </span>
                    <span aria-hidden="true" className="faq-item__icon"></span>
                  </button>
                </h3>
                <div aria-labelledby="faq-question-1" className="faq-item__answer" id="faq-answer-1" role="region">
                  <div>
                    <p>
                      Sim. A Fritz está localizada em Joinville, Santa Catarina. Para confirmar atendimento no seu endereço, fale diretamente pelo WhatsApp.
                    </p>
                  </div>
                </div>
              </article>
              <article className="faq-item">
                <h3 className="faq-item__heading">
                  <button aria-controls="faq-answer-2" aria-expanded="true" className="faq-item__toggle" data-faq-toggle="" id="faq-question-2" type="button">
                    <span className="faq-item__number"></span>
                    <span className="faq-item__question">
                      Qual a diferença entre higienização e impermeabilização?
                    </span>
                    <span aria-hidden="true" className="faq-item__icon"></span>
                  </button>
                </h3>
                <div aria-labelledby="faq-question-2" className="faq-item__answer" id="faq-answer-2" role="region">
                  <div>
                    <p>
                      A higienização é voltada à limpeza do estofado. A impermeabilização aplica uma proteção ao tecido para ajudar a reduzir a absorção imediata de líquidos.
                    </p>
                  </div>
                </div>
              </article>
              <article className="faq-item">
                <h3 className="faq-item__heading">
                  <button aria-controls="faq-answer-3" aria-expanded="true" className="faq-item__toggle" data-faq-toggle="" id="faq-question-3" type="button">
                    <span className="faq-item__number"></span>
                    <span className="faq-item__question">
                      Posso enviar fotos do estofado pelo WhatsApp?
                    </span>
                    <span aria-hidden="true" className="faq-item__icon"></span>
                  </button>
                </h3>
                <div aria-labelledby="faq-question-3" className="faq-item__answer" id="faq-answer-3" role="region">
                  <div>
                    <p>
                      Sim. Fotos ajudam a identificar a peça e facilitam a conversa inicial sobre o serviço e o orçamento.
                    </p>
                  </div>
                </div>
              </article>
              <article className="faq-item">
                <h3 className="faq-item__heading">
                  <button aria-controls="faq-answer-4" aria-expanded="true" className="faq-item__toggle" data-faq-toggle="" id="faq-question-4" type="button">
                    <span className="faq-item__number"></span>
                    <span className="faq-item__question">
                      Quanto tempo o serviço leva?
                    </span>
                    <span aria-hidden="true" className="faq-item__icon"></span>
                  </button>
                </h3>
                <div aria-labelledby="faq-question-4" className="faq-item__answer" id="faq-answer-4" role="region">
                  <div>
                    <p>
                      O prazo varia conforme a peça e o serviço. Envie fotos, a quantidade de itens e o tipo de cuidado desejado para solicitar uma estimativa antes de agendar.
                    </p>
                  </div>
                </div>
              </article>
              <article className="faq-item">
                <h3 className="faq-item__heading">
                  <button aria-controls="faq-answer-5" aria-expanded="true" className="faq-item__toggle" data-faq-toggle="" id="faq-question-5" type="button">
                    <span className="faq-item__number"></span>
                    <span className="faq-item__question">
                      Depois da higienização, quando posso usar o estofado?
                    </span>
                    <span aria-hidden="true" className="faq-item__icon"></span>
                  </button>
                </h3>
                <div aria-labelledby="faq-question-5" className="faq-item__answer" id="faq-answer-5" role="region">
                  <div>
                    <p>
                      O tempo de secagem pode variar conforme tecido, clima, ventilação e condições do ambiente. A orientação adequada é passada no atendimento.
                    </p>
                  </div>
                </div>
              </article>
              <article className="faq-item">
                <h3 className="faq-item__heading">
                  <button aria-controls="faq-answer-6" aria-expanded="true" className="faq-item__toggle" data-faq-toggle="" id="faq-question-6" type="button">
                    <span className="faq-item__number"></span>
                    <span className="faq-item__question">
                      Como encontro a Fritz?
                    </span>
                    <span aria-hidden="true" className="faq-item__icon"></span>
                  </button>
                </h3>
                <div aria-labelledby="faq-question-6" className="faq-item__answer" id="faq-answer-6" role="region">
                  <div>
                    <p>
                      A Fritz fica na Rua Octacílio José de Souza, 25, Jarivatuba, Joinville - SC. O link de localização do site abre o endereço diretamente no Google Maps.
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
          <a aria-label="Falar com a Fritz pelo WhatsApp" className="hero-cta hero-cta--primary faq__cta faq__cta--mobile" href="https://wa.me/5547999051278?text=Ol%C3%A1%21%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20higieniza%C3%A7%C3%A3o%20ou%20impermeabiliza%C3%A7%C3%A3o%20de%20estofados." rel="noopener noreferrer" target="_blank">
            <span aria-hidden="true" className="hero-cta__icon">
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <path d="M20 11.6a8 8 0 0 1-11.8 7L4 20l1.5-4A8 8 0 1 1 20 11.6Z"></path>
                <path d="M8.4 8.2c.2-.5.5-.5.8-.5h.5c.2 0 .4 0 .6.5l.8 1.9c.1.3.1.5-.1.7l-.6.8c-.2.2-.3.4-.1.7.5 1 1.3 1.8 2.3 2.3.3.2.5.1.7-.1l.8-1c.2-.3.5-.3.8-.2l1.8.8c.3.1.5.3.5.5 0 .3-.1 1.4-.7 2-.6.7-1.6 1-2.6.8-1.4-.2-3.2-1.1-4.8-2.6-1.9-1.8-3.1-4-3.2-5.3 0-.5.1-1 .3-1.3Z"></path>
              </svg>
            </span>
            <span className="hero-cta__label">
              Falar no WhatsApp
            </span>
            <span aria-hidden="true" className="hero-cta__arrow">
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <path d="M6 12h11"></path>
                <path d="m13.5 8.5 3.5 3.5-3.5 3.5"></path>
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
