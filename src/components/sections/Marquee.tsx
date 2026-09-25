import { Fragment } from "react";
import { MARQUEE_SERVICES, MARQUEE_STATEMENTS } from "@/content/marquee";

function ManifestoGroup({ hidden = false }: { hidden?: boolean }) {
  return (
    <div aria-hidden={hidden || undefined} className="marquee__group">
      {MARQUEE_STATEMENTS.map((item) => (
        <Fragment key={item.emphasis}>
          <p className="marquee__statement">{item.text} <span>{item.emphasis}</span></p>
          <span aria-hidden="true" className="marquee__spark" />
        </Fragment>
      ))}
    </div>
  );
}

function ServicesGroup({ hidden = false }: { hidden?: boolean }) {
  return (
    <div aria-hidden={hidden || undefined} className="marquee__group marquee__group--services">
      {MARQUEE_SERVICES.map((service) => (
        <Fragment key={service}>
          <span>{service}</span>
          <i aria-hidden="true" />
        </Fragment>
      ))}
    </div>
  );
}

export function Marquee() {
  return (
    <section aria-label="Manifesto e competências" className="marquee">
      <div className="marquee__viewport marquee__viewport--manifesto">
        <div className="marquee__track marquee__track--manifesto">
          <ManifestoGroup />
          <ManifestoGroup hidden />
        </div>
      </div>
      <div className="marquee__viewport marquee__viewport--services">
        <div className="marquee__track marquee__track--services">
          <ServicesGroup />
          <ServicesGroup hidden />
        </div>
      </div>
    </section>
  );
}
