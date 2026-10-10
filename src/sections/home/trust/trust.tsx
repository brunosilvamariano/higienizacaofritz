import { EnvironmentIcon } from './environment-icon';
const environments = [
  { kind: 'sofa', label: 'Sofás' },
  { kind: 'colchao', label: 'Colchões' },
  { kind: 'poltrona', label: 'Poltronas' },
  { kind: 'tapete', label: 'Tapetes' },
  { kind: 'cadeira', label: 'Cadeiras' },
  { kind: 'protecao', label: 'Proteção' },
] as const;
import './trust.css';
export function Trust() {
  return (
    <section
      className="trust"
      id="marcas"
      aria-label="Obrigado por escolher a Fritz"
    >
      <div className="trust-grid">
        <div className="trust-ticker" aria-hidden="true">
          <div>
            {[0, 1, 2].map((n) => (
              <span key={n}>
                Obrigado pela confiança <i>✳</i>
              </span>
            ))}
          </div>
        </div>
        <div className="trust-quote">
          <blockquote data-text-anim="">
            Obrigado por escolher a Fritz para cuidar dos seus estofados. Sua
            confiança faz parte de cada atendimento.
          </blockquote>
          <p>
            <strong>Com carinho, equipe Fritz</strong>
            <br />
            Higienização e impermeabilização
          </p>
        </div>
        {environments.map((environment, index) => (
          <div
            className={`trust-logo trust-logo-${index}`}
            key={environment.kind}
          >
            <EnvironmentIcon kind={environment.kind} />
            <span>{environment.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
