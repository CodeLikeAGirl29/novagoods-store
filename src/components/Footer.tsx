import { Zap } from 'lucide-react';
import { RiFacebookLine, RiGithubLine, RiLinkedinLine } from "react-icons/ri";

import { Link } from 'react-router-dom';

const footerLinks = {
  Product: [
    { label: 'Shop', href: '/shop' },
    { label: 'Collections', href: '/collections' },
    { label: 'New Arrivals', href: '/shop' },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Careers', href: '/about' },
    { label: 'Press', href: '/about' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/about' },
    { label: 'Terms of Service', href: '/about' },
    { label: 'Cookie Policy', href: '/about' },
  ],
};

const socials = [
  { icon: RiGithubLine, label: 'GitHub', href: 'https://github.com/codelikeagirl29' },
  { icon: RiLinkedinLine, label: 'LinkedIn', href: 'https://linkedin.com/in/lindsey-howard' },
  { icon: RiFacebookLine, label: 'Facebook', href: 'https://www.facebook.com/codelikeagirl91' },
];

export default function Footer() {
  return (
    <footer className="bg-[hsl(var(--nova-surface))] border-t border-[hsl(var(--nova-border))]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2 w-fit focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--nova-blue))] rounded-md">
              <Zap size={20} className="text-[hsl(var(--nova-blue))]" />
              <span className="font-heading text-xl font-bold text-[hsl(var(--nova-text))]">
                Nova<span className="text-[hsl(var(--nova-blue))]">Goods</span>
              </span>
            </Link>
            <p className="text-sm text-[hsl(var(--nova-muted))] leading-relaxed max-w-xs">
              Defining the new standard for modern living by offering high-quality essentials designed to elevate your daily routine
            </p>
            <div className="flex items-center gap-3 pt-2">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="p-2 rounded-lg border border-[hsl(var(--nova-border))] text-[hsl(var(--nova-muted))] hover:text-[hsl(var(--nova-blue))] hover:border-[hsl(var(--nova-blue))]/40 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--nova-blue))]"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group} className="space-y-4">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-[hsl(var(--nova-blue))]">
                {group}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-[hsl(var(--nova-muted))] hover:text-[hsl(var(--nova-text))] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--nova-blue))] rounded-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Sub-footer */}
      <div className="border-t border-[hsl(var(--nova-border))]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[hsl(var(--nova-muted))]">
            &copy; 2026 NovaGoods. All rights reserved. | Made by lindseykdev
          </p>
          <div className="flex items-center gap-6">
            <Link to="/about" className="text-xs text-[hsl(var(--nova-muted))] hover:text-[hsl(var(--nova-text))] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--nova-blue))] rounded-sm">
              Terms
            </Link>
            <Link to="/about" className="text-xs text-[hsl(var(--nova-muted))] hover:text-[hsl(var(--nova-text))] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--nova-blue))] rounded-sm">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}