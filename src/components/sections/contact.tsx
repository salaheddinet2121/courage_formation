import { Mail, Phone } from 'lucide-react';

export default function ContactPage() {
  return (
    <section className="section-padding container max-w-4xl mx-auto">

      {/* Header */}
      <div className="space-y-3 mb-10">
        <span className="inline-block rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground font-medium border border-secondary">
          Contact
        </span>
        <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl tracking-tight">
          Réservez votre diagnostic gratuit
        </h1>
        <p className="text-muted-foreground text-base max-w-lg">
          Obtenez un plan d'action clair en 15 minutes pour lancer ou développer votre organisme de formation.
        </p>
      </div>

      {/* Booking widget */}
      <div
        className="rounded-2xl overflow-hidden"
        style={{ minHeight: '600px' }}
        dangerouslySetInnerHTML={{
          __html: `
            <iframe
              src="https://api.leadconnectorhq.com/widget/booking/uj4LM4o42B9A8A63hGUI"
              style="width:100%;border:none;overflow:hidden;min-height:600px;"
              scrolling="no"
              id="uj4LM4o42B9A8A63hGUI_contact"
            ></iframe>
            <script src="https://link.msgsndr.com/js/form_embed.js" type="text/javascript"></script>
          `,
        }}
      />

      {/* Contact details */}
      <div className="mt-10 flex flex-wrap gap-6">
        <a href="mailto:contact@go.courageformation.fr" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
          <div className="size-8 rounded-full border border-border flex items-center justify-center shrink-0">
            <Mail className="size-4" />
          </div>
          contact@go.courageformation.fr
        </a>
        <a href="tel:+33615215985" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
          <div className="size-8 rounded-full border border-border flex items-center justify-center shrink-0">
            <Phone className="size-4" />
          </div>
          06 15 21 59 85
        </a>
      </div>

    </section>
  );
}
