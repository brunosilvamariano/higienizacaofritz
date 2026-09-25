import { COMPANY } from "@/config/company";
import { createWhatsappUrl, WHATSAPP_MESSAGES } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/ui/icons";

export function FloatingCta() {
  return (
    <a
      aria-label={`Falar com a ${COMPANY.shortName} pelo WhatsApp`}
      className="floating-cta"
      data-floating-cta=""
      href={createWhatsappUrl(WHATSAPP_MESSAGES.default)}
      rel="noopener noreferrer"
      target="_blank"
      title="Falar pelo WhatsApp"
    >
      <WhatsAppIcon className="floating-cta__whatsapp" />
    </a>
  );
}
