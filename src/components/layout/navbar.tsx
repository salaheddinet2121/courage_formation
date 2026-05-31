'use client';
import React, { useState, useEffect } from 'react';

import { X, Menu, CalendarCheck } from 'lucide-react';

import { Button } from '@/components/ui/button';
import Logo from '@/components/ui/logo';
import { cn } from '@/lib/utils';

const ITEMS = [
  { label: 'Services', href: '/services' },
  { label: 'Formations', href: '/formations' },
  { label: 'Incubateur', href: '/incubateur' },
  { label: 'Blog', href: '/blog' },
  { label: 'Resources', href: '/resources' },
  { label: 'A propos', href: '/about' },
];

const Navbar = ({ currentPage }: { currentPage: string }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = currentPage?.replace(/\/$/, '');

  useEffect(() => {
    document.documentElement.style.overflow = isMenuOpen ? 'hidden' : '';
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <header className="relative z-50 w-full px-4 pt-4 md:pt-6">
      <div className="mx-auto max-w-5xl relative flex items-center justify-between gap-4 rounded-full border border-border px-5 py-3" style={{ backgroundColor: '#fafafa' }}>

        {/* Mobile hamburger — left */}
        <button
          aria-label="Ouvrir le menu"
          className="text-foreground flex size-8 items-center justify-center md:hidden shrink-0"
          onClick={() => setIsMenuOpen(true)}
        >
          <Menu className="size-5" />
        </button>

        {/* Logo — centered on mobile, left on desktop */}
        <a href="/" className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 flex shrink-0 items-center">
          <img src="/layout/logo.svg" alt="Courage Formation" class="block md:hidden h-8 w-auto" />
          <img src="/layout/full_logo.svg" alt="Courage Formation" class="hidden md:block h-9 w-auto" />
        </a>

        {/* Desktop nav — centered */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-7 text-sm text-muted-foreground">
            {ITEMS.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={cn(
                    'transition-colors hover:text-foreground',
                    pathname === item.href && 'text-foreground font-medium',
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <Button
            size="sm"
            className="rounded-full bg-foreground text-background hover:bg-foreground/85 px-5 text-sm font-semibold gap-2"
            asChild
          >
            <a href="/contact">
              <CalendarCheck className="size-4" />
              Diagnostic gratuit
            </a>
          </Button>
        </div>

        {/* Mobile CTA — right */}
        <div className="flex items-center md:hidden">
          <Button
            size="sm"
            className="rounded-full bg-foreground text-background hover:bg-foreground/85 px-4 text-xs font-semibold gap-1.5"
            asChild
          >
            <a href="/contact">
              <CalendarCheck className="size-3.5" />
              Réserver
            </a>
          </Button>
        </div>

      </div>

      {/* Mobile drawer — outside the pill */}
      <div
        className={cn(
          'fixed inset-0 z-100 md:hidden transition-all duration-300',
          isMenuOpen ? 'visible' : 'invisible',
        )}
      >
        {/* Backdrop */}
        <div
          className={cn(
            'absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300',
            isMenuOpen ? 'opacity-100' : 'opacity-0',
          )}
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Drawer panel — slides from left */}
        <nav
          className={cn(
            'absolute top-0 left-0 bottom-0 w-[80%] max-w-xs bg-background flex flex-col border-r border-border transition-transform duration-300',
            isMenuOpen ? 'translate-x-0' : '-translate-x-full',
          )}
        >
          {/* Drawer header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-border">
            <Logo wrapperClassName="flex" className="w-32 h-8" />
            <button
              aria-label="Fermer le menu"
              className="flex size-8 items-center justify-center rounded-full hover:bg-muted transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <X className="size-4" />
            </button>
          </div>

          {/* Nav links */}
          <div className="flex flex-col flex-1 px-4 py-4 overflow-y-auto">
            {ITEMS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={cn(
                  'py-3 px-2 text-sm text-muted-foreground hover:text-foreground border-b border-border transition-colors',
                  pathname === link.href && 'text-foreground font-medium',
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="px-4 py-6 border-t border-border">
            <Button
              className="w-full rounded-full bg-foreground text-background hover:bg-foreground/85 font-semibold gap-2"
              size="lg"
              asChild
            >
              <a href="/contact" onClick={() => setIsMenuOpen(false)}>
                <CalendarCheck className="size-4" />
                Réserver un diagnostic gratuit
              </a>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
