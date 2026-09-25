import { MAPS_URL, SERVICE_AREAS } from "@/config/site";

export function HeroLocation() {
  return (
    <div className="hero__location" aria-label="Localização e áreas atendidas">
      <a
        className="hero__location-map"
        href={MAPS_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir o endereço da Fritz no Google Maps"
        title="Abrir no Google Maps"
      >
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <path d="M18.5 9.7c0 4.3-6.5 9.1-6.5 9.1S5.5 14 5.5 9.7a6.5 6.5 0 1 1 13 0Z"></path>
          <circle cx="12" cy="9.7" r="1.8"></circle>
        </svg>
      </a>

      <div className="hero__location-copy">
        <strong>Joinville — SC</strong>

        <details className="hero__areas-collapse">
          <summary className="hero__areas-summary">
            <span>{SERVICE_AREAS.length} cidades atendidas</span>
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <path d="m7 9.5 5 5 5-5"></path>
            </svg>
          </summary>

          <div className="hero__areas-panel">
            <p className="hero__areas-title">Áreas atendidas</p>
            <ul aria-label="Cidades atendidas pela Fritz">
              {SERVICE_AREAS.map((city) => (
                <li key={city}>
                  <span aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <path d="m5.5 12.5 4 4 9-9"></path>
                    </svg>
                  </span>
                  {city} — SC
                </li>
              ))}
            </ul>
          </div>
        </details>
      </div>
    </div>
  );
}
