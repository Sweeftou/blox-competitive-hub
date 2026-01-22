import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Trophy, Users, Swords, Star, Globe } from "lucide-react";

const navItems = [
  { label: "Players", icon: Users, href: "#players" },
  { label: "Crews", icon: Swords, href: "#crews" },
  { label: "Rankings", icon: Trophy, href: "#rankings" },
  { label: "Fruits", icon: Star, href: "#fruits" },
  { label: "Regions", icon: Globe, href: "#regions" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-[0_0_20px_hsl(var(--primary)/0.5)] group-hover:shadow-[0_0_30px_hsl(var(--primary)/0.7)] transition-all">
              <Trophy className="w-5 h-5 text-background" />
            </div>
            <div>
              <span className="font-display font-bold text-lg text-glow tracking-wider">BFC</span>
              <span className="hidden sm:block text-xs text-muted-foreground uppercase tracking-widest">Competitive</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-2 px-4 py-2 text-muted-foreground hover:text-primary transition-colors font-display text-sm uppercase tracking-wider group"
              >
                <item.icon className="w-4 h-4 group-hover:text-primary transition-colors" />
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="outline" size="sm">
              Discord
            </Button>
            <Button variant="neon" size="sm">
              Join Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-3 px-4 py-3 text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors font-display text-sm uppercase tracking-wider"
                onClick={() => setIsOpen(false)}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </a>
            ))}
            <div className="flex gap-3 px-4 pt-4">
              <Button variant="outline" size="sm" className="flex-1">
                Discord
              </Button>
              <Button variant="neon" size="sm" className="flex-1">
                Join Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
