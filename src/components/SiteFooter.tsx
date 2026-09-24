export function SiteFooter() {
  return (
    <footer aria-label="Rodapé do site" className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__content">
          <a aria-label="Fritz Higienização — voltar ao início" className="site-footer__brand" href="#inicio">
            <img alt="" height="28" src="/assets/brand/fritz-mark.png" width="28" />
            <span>
              Fritz Higienização
            </span>
          </a>
          <nav aria-label="Navegação principal do rodapé" className="site-footer__links">
            <ul>
              <li>
                <a href="#inicio">
                  Início
                </a>
              </li>
              <li>
                <a href="#atendimento">
                  Atendimentos
                </a>
              </li>
              <li>
                <a href="#faq">
                  FAQ
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#sobre">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#galeria">
                  Resultados
                </a>
              </li>
              <li>
                <a href="#contato">
                  Contato
                </a>
              </li>
            </ul>
          </nav>
          <nav aria-label="Redes sociais e contato" className="site-footer__social">
            <ul>
              <li>
                <a className="site-footer__social-link site-footer__social-link--instagram" aria-label="Abrir Instagram da Fritz Higienização" href="https://www.instagram.com/higienizacaofritz/" rel="noopener noreferrer" target="_blank">
                  <svg aria-hidden="true" viewBox="0 0 24 24">
                    <rect height="18" rx="5" width="18" x="3" y="3"></rect>
                    <circle cx="12" cy="12" r="4"></circle>
                    <circle className="social-link__dot" cx="17.5" cy="6.5" r="1"></circle>
                  </svg>
                  <span className="visually-hidden">
                    Instagram
                  </span>
                </a>
              </li>
              <li>
                <a className="site-footer__social-link site-footer__social-link--whatsapp" href="https://wa.me/5547999051278?text=Ol%C3%A1%21%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20higieniza%C3%A7%C3%A3o%20ou%20impermeabiliza%C3%A7%C3%A3o%20de%20estofados." rel="noopener noreferrer" target="_blank">
                  <svg aria-hidden="true" className="hero-cta__whatsapp" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.198.297-.767.967-.94 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.496.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.009-.372-.011-.57-.011-.198 0-.52.074-.792.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.693.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.05 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.981.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.002-5.45 4.437-9.884 9.888-9.884a9.82 9.82 0 0 1 6.988 2.897 9.825 9.825 0 0 1 2.893 6.99c-.003 5.45-4.437 9.89-9.885 9.89m8.413-18.297A11.815 11.815 0 0 0 12.055 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.88 11.88 0 0 0 5.688 1.448h.005c6.559 0 11.894-5.335 11.897-11.893a11.821 11.821 0 0 0-3.489-8.413Z"></path>
                  </svg>
                  <span className="visually-hidden">
                    WhatsApp
                  </span>
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a className="site-footer__social-link site-footer__social-link--location" aria-label="Abrir localização da Fritz no Google Maps" href="https://www.google.com/maps/search/?api=1&amp;query=Higieniza%C3%A7%C3%A3o%20e%20Impermeabiliza%C3%A7%C3%A3o%20Fritz%2C%20R.%20Octac%C3%ADlio%20Jos%C3%A9%20de%20Souza%2C%2025%20-%20Jarivatuba%2C%20Joinville%20-%20SC%2C%2089230-435" rel="noopener noreferrer" target="_blank">
                  <svg aria-hidden="true" viewBox="0 0 24 24">
                    <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"></path>
                    <circle cx="12" cy="10" r="2.5"></circle>
                  </svg>
                  <span className="visually-hidden">
                    Localização no Google Maps
                  </span>
                </a>
              </li>
            </ul>
          </nav>
          <div className="site-footer__legal">
            <p>
              ©
              <span data-current-year="">
                2026
              </span>
              Fritz Higienização e Impermeabilização
            </p>
            <p>
              Todos os direitos reservados.
            </p>
            <a aria-label="Site de Bruno Mariano, desenvolvedor do projeto" className="developer-credit" href="https://brunomarianosilva.com.br/" rel="noopener noreferrer" target="_blank">
              <span>
                Desenvolvido com
              </span>
              <svg aria-hidden="true" className="developer-credit__heart" viewBox="0 0 24 24">
                <path d="M20.8 4.7a5.5 5.5 0 0 0-7.8 0L12 5.8l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.5a5.5 5.5 0 0 0 0-7.8Z"></path>
              </svg>
              <span>
                por
                <strong>
                  Bruno Mariano
                </strong>
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
