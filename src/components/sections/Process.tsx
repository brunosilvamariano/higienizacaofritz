export function Process() {
  return (
    <section aria-labelledby="processo-title" className="processo" id="processo">
      <div className="processo__inner">
        <header className="processo__header">
          <div>
            <p className="processo__eyebrow">
              <span aria-hidden="true" className="processo__eyebrow-icon">
                <svg aria-hidden="true" viewBox="0 0 24 24">
                  <circle cx="5" cy="12" r="1.5"></circle>
                  <circle cx="12" cy="12" r="1.5"></circle>
                  <circle cx="19" cy="12" r="1.5"></circle>
                  <path d="M6.5 12h4M13.5 12h4"></path>
                </svg>
              </span>
              Nosso processo
            </p>
            <h2 className="processo__title" id="processo-title">
              <span className="processo__title-line">
                Do primeiro contato ao
              </span>
              <strong className="processo__title-line">
                cuidado final.
              </strong>
            </h2>
          </div>
          <p className="processo__lead">
            Da avaliação inicial às orientações após o serviço, cada etapa é explicada de forma clara.
          </p>
        </header>
        <ol aria-label="Etapas do nosso processo" className="processo__steps">
          <li className="processo__step">
            <div className="processo__step-head">
              <span className="processo__number"></span>
              <span aria-hidden="true" className="processo__point"></span>
            </div>
            <div aria-hidden="true" className="processo__icon">
              <svg viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="8.5"></circle>
                <path d="m15.6 8.4-2.1 5.1-5.1 2.1 2.1-5.1 5.1-2.1Z"></path>
                <circle cx="12" cy="12" r="1.1"></circle>
              </svg>
            </div>
            <h3>
              Contato
            </h3>
            <p>
              Você envia fotos, quantidade de peças e localização pelo WhatsApp.
            </p>
          </li>
          <li className="processo__step">
            <div className="processo__step-head">
              <span className="processo__number"></span>
              <span aria-hidden="true" className="processo__point"></span>
            </div>
            <div aria-hidden="true" className="processo__icon">
              <svg viewBox="0 0 24 24">
                <path d="m4.5 19.5 3.7-.8L19 7.9a1.9 1.9 0 0 0 0-2.7l-.2-.2a1.9 1.9 0 0 0-2.7 0L5.3 15.8l-.8 3.7Z"></path>
                <path d="m14.8 6.3 2.9 2.9M6.2 15l2.8 2.8"></path>
              </svg>
            </div>
            <h3>
              Avaliação
            </h3>
            <p>
              Analisamos o tipo de peça, o tecido e o serviço solicitado para alinhar o orçamento.
            </p>
          </li>
          <li className="processo__step">
            <div className="processo__step-head">
              <span className="processo__number"></span>
              <span aria-hidden="true" className="processo__point"></span>
            </div>
            <div aria-hidden="true" className="processo__icon">
              <svg viewBox="0 0 24 24">
                <path d="m8.5 7-5 5 5 5M15.5 7l5 5-5 5M13.5 4l-3 16"></path>
              </svg>
            </div>
            <h3>
              Execução
            </h3>
            <p>
              A higienização ou impermeabilização é realizada conforme as características do material.
            </p>
          </li>
          <li className="processo__step">
            <div className="processo__step-head">
              <span className="processo__number"></span>
              <span aria-hidden="true" className="processo__point"></span>
            </div>
            <div aria-hidden="true" className="processo__icon">
              <svg viewBox="0 0 24 24">
                <path d="M5 19V12M12 19V5M19 19V9"></path>
                <path d="M3.5 19.5h17"></path>
              </svg>
            </div>
            <h3>
              Orientações
            </h3>
            <p>
              Ao final, explicamos as orientações de uso, secagem e conservação indicadas para a peça.
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
}
