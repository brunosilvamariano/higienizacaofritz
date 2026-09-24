export function Sidebar() {
  return (
    <aside aria-label="Navegação principal" className="sidebar" id="sidebar">
      <div className="sidebar__top">
        <a aria-label="Fritz Higienização — início" className="brand" href="#inicio">
          <img alt="" className="brand__mark" height="32" src="/assets/brand/fritz-mark.png" width="32" />
          <span className="brand__name">
            Fritz
          </span>
        </a>
        <button aria-controls="sidebar" aria-expanded="true" aria-label="Recolher menu lateral" className="icon-button sidebar__toggle" data-sidebar-toggle="" type="button">
          <svg aria-hidden="true" className="sidebar__toggle-desktop-icon" viewBox="0 0 24 24">
            <path d="m14 7-5 5 5 5"></path>
            <path d="M19 5v14"></path>
          </svg>
          <span aria-hidden="true" className="sidebar__toggle-mobile-glyph"></span>
        </button>
      </div>
      <nav aria-label="Seções do site" className="sidebar__nav">
        <ul className="nav-list">
          <li>
            <a aria-current="location" className="nav-item is-active" data-tooltip="Início" href="#inicio">
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <path d="m3 11 9-8 9 8"></path>
                <path d="M5 10v10h14V10"></path>
                <path d="M9 20v-6h6v6"></path>
              </svg>
              <span className="nav-item__label">
                Início
              </span>
            </a>
          </li>
          <li>
            <a className="nav-item" data-tooltip="Sobre" href="#sobre">
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <circle cx="12" cy="8" r="4"></circle>
                <path d="M4.5 21a7.5 7.5 0 0 1 15 0"></path>
              </svg>
              <span className="nav-item__label">
                Sobre
              </span>
            </a>
          </li>
          <li>
            <a className="nav-item" data-tooltip="Atendimento" href="#atendimento">
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <path d="M4 13a8 8 0 0 1 16 0"></path>
                <path d="M4 13v4a2 2 0 0 0 2 2h1v-7H6a2 2 0 0 0-2 1Z"></path>
                <path d="M20 13v4a2 2 0 0 1-2 2h-1v-7h1a2 2 0 0 1 2 1Z"></path>
                <path d="M17 19c0 1.1-.9 2-2 2h-3"></path>
              </svg>
              <span className="nav-item__label">
                Atendimento
              </span>
            </a>
          </li>
          <li>
            <a className="nav-item" data-tooltip="Processo" href="#processo">
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <circle cx="5" cy="12" r="1.5"></circle>
                <circle cx="12" cy="12" r="1.5"></circle>
                <circle cx="19" cy="12" r="1.5"></circle>
                <path d="M6.5 12h4M13.5 12h4"></path>
              </svg>
              <span className="nav-item__label">
                Processo
              </span>
            </a>
          </li>
          <li>
            <a className="nav-item" data-tooltip="Resultados" href="#galeria">
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <rect height="16" rx="2" width="18" x="3" y="4"></rect>
                <circle cx="9" cy="9" r="2"></circle>
                <path d="m21 15-5-5L5 20"></path>
              </svg>
              <span className="nav-item__label">
                Resultados
              </span>
            </a>
          </li>
          <li>
            <a className="nav-item" data-tooltip="FAQ" href="#faq">
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="9"></circle>
                <path d="M9.8 9a2.5 2.5 0 1 1 3.95 2.04c-1.08.8-1.75 1.2-1.75 2.46"></path>
                <path d="M12 17h.01"></path>
              </svg>
              <span className="nav-item__label">
                FAQ
              </span>
            </a>
          </li>
          <li>
            <a className="nav-item" data-tooltip="Contato" href="#contato">
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <rect height="14" rx="2" width="18" x="3" y="5"></rect>
                <path d="m4 7 8 6 8-6"></path>
              </svg>
              <span className="nav-item__label">
                Contato
              </span>
            </a>
          </li>
        </ul>
      </nav>
      <div className="sidebar__bottom">
        <div aria-hidden="true" className="sidebar__divider"></div>
        <a aria-label="Solicitar orçamento com a Fritz pelo WhatsApp" className="profile profile--cta" data-tooltip="Orçamento — Fritz" href="https://wa.me/5547999051278?text=Ol%C3%A1%21%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento." rel="noopener noreferrer" target="_blank">
          <span aria-hidden="true" className="profile__avatar profile__avatar--whatsapp">
            <svg viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.198.297-.767.967-.94 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.496.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.009-.372-.011-.57-.011-.198 0-.52.074-.792.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.693.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.05 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.981.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.002-5.45 4.437-9.884 9.888-9.884a9.82 9.82 0 0 1 6.988 2.897 9.825 9.825 0 0 1 2.893 6.99c-.003 5.45-4.437 9.89-9.885 9.89m8.413-18.297A11.815 11.815 0 0 0 12.055 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.88 11.88 0 0 0 5.688 1.448h.005c6.559 0 11.894-5.335 11.897-11.893a11.821 11.821 0 0 0-3.489-8.413Z"></path>
            </svg>
          </span>
          <span className="profile__copy">
            <strong>
              Solicitar orçamento
            </strong>
            <small>
              Fritz Higienização
            </small>
          </span>
          <svg aria-hidden="true" className="profile__more profile__more--arrow" viewBox="0 0 24 24">
            <path d="M5 12h14"></path>
            <path d="m14 7 5 5-5 5"></path>
          </svg>
        </a>
        <div aria-label="Links rápidos" className="sidebar__socials">
          <span className="sidebar__socials-label">
            Links rápidos
          </span>
          <div className="sidebar__socials-list">
            <a aria-label="Abrir Instagram da Fritz Higienização" className="social-link social-link--instagram" data-tooltip="Instagram" href="https://www.instagram.com/higienizacaofritz/" rel="noopener noreferrer" target="_blank">
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <rect height="18" rx="5" width="18" x="3" y="3"></rect>
                <circle cx="12" cy="12" r="4"></circle>
                <circle className="social-link__dot" cx="17.5" cy="6.5" r="1"></circle>
              </svg>
            </a>
            <a aria-label="Abrir localização da Fritz no Google Maps" className="social-link social-link--location" data-tooltip="Localização" href="https://www.google.com/maps/search/?api=1&amp;query=Higieniza%C3%A7%C3%A3o%20e%20Impermeabiliza%C3%A7%C3%A3o%20Fritz%2C%20R.%20Octac%C3%ADlio%20Jos%C3%A9%20de%20Souza%2C%2025%20-%20Jarivatuba%2C%20Joinville%20-%20SC%2C%2089230-435" rel="noopener noreferrer" target="_blank">
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"></path>
                <circle cx="12" cy="10" r="2.5"></circle>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}
