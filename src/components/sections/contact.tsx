import { CalendarCheck, Mail, Phone, Clock } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const TRUST = [
  { icon: <CalendarCheck className="size-4 shrink-0" />, text: 'Diagnostic gratuit en 15 min' },
  { icon: <Clock className="size-4 shrink-0" />, text: 'Réponse sous 24h' },
  { icon: <Mail className="size-4 shrink-0" />, text: 'Sans engagement' },
];

export default function ContactPage() {
  return (
    <section className="section-padding container max-w-5xl mx-auto">

      {/* Header */}
      <div className="space-y-3 mb-12">
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

      <div className="grid grid-cols-1 md:grid-cols-5 gap-10">

        {/* Left — info */}
        <div className="md:col-span-2 space-y-8">

          {/* Trust points */}
          <div className="space-y-3">
            {TRUST.map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="size-8 rounded-full bg-muted flex items-center justify-center shrink-0 text-foreground">
                  {item.icon}
                </div>
                {item.text}
              </div>
            ))}
          </div>

          <div className="border-t border-border" />

          {/* Contact details */}
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Nous joindre</p>
            <a href="mailto:contact@courageformation.fr" className="flex items-center gap-3 text-sm hover:text-accent transition-colors">
              <div className="size-8 rounded-full border border-border flex items-center justify-center shrink-0">
                <Mail className="size-4 text-muted-foreground" />
              </div>
              contact@courageformation.fr
            </a>
            <a href="tel:+33600000000" className="flex items-center gap-3 text-sm hover:text-accent transition-colors">
              <div className="size-8 rounded-full border border-border flex items-center justify-center shrink-0">
                <Phone className="size-4 text-muted-foreground" />
              </div>
              +33 6 00 00 00 00
            </a>
          </div>

        </div>

        {/* Right — form */}
        <div className="md:col-span-3 rounded-2xl border border-border p-8 space-y-6" style={{ backgroundColor: '#fafafa' }}>
          <div className="space-y-1">
            <h2 className="text-lg font-bold">Envoyez-nous un message</h2>
            <p className="text-sm text-muted-foreground">Nous vous répondons sous 24h.</p>
          </div>

          <form className="flex flex-col gap-5">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="firstname" className="text-xs font-medium">Prénom</Label>
                <Input type="text" id="firstname" placeholder="Jean" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="lastname" className="text-xs font-medium">Nom</Label>
                <Input type="text" id="lastname" placeholder="Dupont" />
              </div>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="email" className="text-xs font-medium">Email</Label>
              <Input type="email" id="email" placeholder="jean@exemple.fr" />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="phone" className="text-xs font-medium">Téléphone (optionnel)</Label>
              <Input type="tel" id="phone" placeholder="+33 6 00 00 00 00" />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="message" className="text-xs font-medium">Votre situation</Label>
              <Textarea
                placeholder="Décrivez votre projet : vous souhaitez créer un OF, obtenir Qualiopi, générer des leads..."
                id="message"
                className="min-h-[120px] resize-none"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-7 py-3 text-sm font-semibold text-background hover:bg-foreground/85 transition-colors w-full"
            >
              <CalendarCheck className="size-4" />
              Réserver mon diagnostic gratuit
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
