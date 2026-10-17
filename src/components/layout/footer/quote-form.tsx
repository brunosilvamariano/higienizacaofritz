'use client';
import { useState, type FormEvent } from 'react';
import { contactFormUrl } from '@/config/contact';
import { HoverLabel } from '@/components/ui/hover-label';
export function QuoteForm() {
  const [complete, setComplete] = useState(false);
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const url = contactFormUrl(new FormData(e.currentTarget), 'quote');
    window.open(url, '_blank', 'noopener,noreferrer');
    setComplete(true);
  }
  return (
    <div className="footer-newsletter">
      <h2>Converse com a Fritz</h2>
      <form onSubmit={submit}>
        <label className="tw:sr-only" htmlFor="newsletter-message">
          Sua observação ou dúvida
        </label>
        <input
          id="newsletter-message"
          name="message"
          type="text"
          placeholder="Sua observação ou dúvida"
          maxLength={500}
        />
        <button type="submit" className="pill-link">
          <HoverLabel variant="primary">Pedir orçamento</HoverLabel>
        </button>
      </form>
      <small className="demo-note">
        Escreva um pedido ou dúvida breve. O texto vai junto pelo WhatsApp.
      </small>
      {complete && (
        <p role="status">
          Sua conversa foi preparada no WhatsApp. Confirme o envio da mensagem.
        </p>
      )}
    </div>
  );
}
