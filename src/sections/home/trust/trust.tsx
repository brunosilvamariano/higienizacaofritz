import { EnvironmentIcon } from './environment-icon';
const environments = [
  { kind: 'cozinha', label: 'Cozinhas' },
  { kind: 'quarto', label: 'Quartos' },
  { kind: 'sala', label: 'Salas' },
  { kind: 'banheiro', label: 'Banheiros' },
  { kind: 'escritorio', label: 'Home office' },
  { kind: 'armario', label: 'Armários' },
] as const;
import './trust.css';
export function Trust() {
  return (
    <section
      className="trust"
      id="marcas"
      aria-label="Ambientes com móveis planejados"
    >
      <div className="trust-grid">
        <div className="trust-ticker" aria-hidden="true">
          <div>
            {[0, 1, 2].map((n) => (
              <span key={n}>
                Seu espaço, bem pensado <i>✳</i>
              </span>
            ))}
          </div>
        </div>
        <div className="trust-quote">
          <blockquote data-text-anim="">
            Mais espaço para o que faz parte da sua vida. Móveis que organizam,
            acolhem e acompanham sua rotina.
          </blockquote>
          <p>
            <strong>O olhar da Traço</strong>
            <br />
            Planejamento para o seu jeito de morar
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
