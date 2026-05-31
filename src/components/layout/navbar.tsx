'use client';
import React, { useState, useEffect } from 'react';

import { ChevronRight, X, Menu } from 'lucide-react';

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
      <div className="mx-auto max-w-5xl flex items-center justify-between gap-4 rounded-full border border-border px-5 py-3" style={{ backgroundColor: '#fafafa' }}>
      {/* Logo */}
      <Logo wrapperClassName="flex shrink-0" />

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

      {/* Desktop right side */}
      <div className="hidden items-center gap-3 md:flex">
        <Button
          size="sm"
          className="rounded-full bg-foreground text-background hover:bg-foreground/85 px-5 text-sm font-semibold"
          asChild
        >
          <a href="/contact">Sign up for free</a>
        </Button>
      </div>

      {/* Mobile right side */}
      <div className="flex items-center gap-3 md:hidden">
        <button
          aria-label="Toggle menu"
          className="text-foreground flex size-8 items-center justify-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          'fixed inset-x-0 top-14 bottom-0 md:hidden transition-all duration-300',
          isMenuOpen ? 'visible opacity-100' : 'invisible opacity-0',
        )}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />
        {/* Drawer panel */}
        <nav
          className={cn(
            'bg-background absolute top-0 right-0 bottom-0 w-[80%] flex flex-col gap-1 border-l p-6 transition-transform duration-300',
            isMenuOpen ? 'translate-x-0' : 'translate-x-full',
          )}
        >
          {ITEMS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={cn(
                'py-3 text-sm text-muted-foreground hover:text-foreground border-b border-border transition-colors',
                pathname === link.href && 'text-foreground font-medium',
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="mt-6">
            <Button
              className="w-full rounded-full bg-foreground text-background hover:bg-foreground/85 font-semibold"
              size="lg"
              asChild
            >
              <a href="/contact">
                Sign up for free <ChevronRight className="size-4" />
              </a>
            </Button>
          </div>
        </nav>
      </div>
      </div>
    </header>
  );
};

export default Navbar;
