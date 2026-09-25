import { PROCESS_STEPS } from "@/content/process";

function ProcessIcon({ icon }: { icon: (typeof PROCESS_STEPS)[number]["icon"] }) {
  const paths = {
    contact: <><circle cx="12" cy="12" r="8.5" /><path d="m15.6 8.4-2.1 5.1-5.1 2.1 2.1-5.1 5.1-2.1Z" /><circle cx="12" cy="12" r="1.1" /></>,
    evaluation: <><path d="m4.5 19.5 3.7-.8L19 7.9a1.9 1.9 0 0 0 0-2.7l-.2-.2a1.9 1.9 0 0 0-2.7 0L5.3 15.8l-.8 3.7Z" /><path d="m14.8 6.3 2.9 2.9M6.2 15l2.8 2.8" /></>,
    execution: <path d="m8.5 7-5 5 5 5M15.5 7l5 5-5 5M13.5 4l-3 16" />,
    guidance: <><path d="M5 19V12M12 19V5M19 19V9" /><path d="M3.5 19.5h17" /></>,
  };
  return <svg viewBox="0 0 24 24">{paths[icon]}</svg>;
}

export function Process() {
  return (
    <section aria-labelledby="processo-title" className="processo" id="processo">
      <div className="processo__inner">
        <header className="processo__header">
          <div>
            <p className="processo__eyebrow"><span aria-hidden="true" className="processo__eyebrow-icon"><svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="5" cy="12" r="1.5" /><circle cx="12" cy="12" r="1.5" /><circle cx="19" cy="12" r="1.5" /><path d="M6.5 12h4M13.5 12h4" /></svg></span>Nosso processo</p>
            <h2 className="processo__title" id="processo-title"><span className="processo__title-line">Do primeiro contato ao</span><strong className="processo__title-line">cuidado final.</strong></h2>
          </div>
          <p className="processo__lead">Da avaliação inicial às orientações após o serviço, cada etapa é explicada de forma clara.</p>
        </header>
        <ol aria-label="Etapas do nosso processo" className="processo__steps">
          {PROCESS_STEPS.map((step) => (
            <li className="processo__step" key={step.id}>
              <div className="processo__step-head"><span className="processo__number" /><span aria-hidden="true" className="processo__point" /></div>
              <div aria-hidden="true" className="processo__icon"><ProcessIcon icon={step.icon} /></div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
