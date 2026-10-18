import { FritzIcon, type FritzIconName } from '@/components/ui/fritz-icon';
import './service-marquee.css';

const services: { label: string; icon: FritzIconName }[] = [
  { label: 'Higienização de estofados', icon: 'sofa' },
  { label: 'Higienização de colchões', icon: 'bed-flat' },
  { label: 'Higienização de tapetes', icon: 'rug' },
  { label: 'Impermeabilização', icon: 'shield-droplet' },
];

export function ServiceMarquee() {
  return (
    <section className="service-marquee" aria-label="Serviços do Fritz">
      <div className="service-marquee-crossing">
        <div
          className="service-marquee-window"
          data-lane="0"
          aria-hidden="true"
        />
        <div className="service-marquee-window" data-lane="1">
          <div className="service-marquee-track">
            {[0, 1].map((copy) => (
              <div
                className="service-marquee-group"
                key={copy}
                aria-hidden={copy === 1 ? true : undefined}
              >
                {services.map((item) => (
                  <span key={item.icon} className="service-marquee-item">
                    <span className="service-marquee-symbol" aria-hidden="true">
                      <FritzIcon name={item.icon} />
                    </span>
                    <span className="service-marquee-name">{item.label}</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
