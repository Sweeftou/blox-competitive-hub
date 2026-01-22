import { useState } from "react";
import { cn } from "@/lib/utils";

const regions = [
  { id: "global", name: "Global", flag: "🌍", players: 50000 },
  { id: "na", name: "North America", flag: "🇺🇸", players: 15000 },
  { id: "eu", name: "Europe", flag: "🇪🇺", players: 12000 },
  { id: "asia", name: "Asia", flag: "🌏", players: 10000 },
  { id: "oceania", name: "Oceania", flag: "🇦🇺", players: 5000 },
  { id: "sa", name: "South America", flag: "🇧🇷", players: 4000 },
  { id: "cis", name: "CIS", flag: "🇷🇺", players: 3000 },
  { id: "africa", name: "Africa", flag: "🌍", players: 1000 },
];

interface RegionSelectorProps {
  onRegionChange?: (regionId: string) => void;
}

const RegionSelector = ({ onRegionChange }: RegionSelectorProps) => {
  const [selectedRegion, setSelectedRegion] = useState("global");

  const handleRegionChange = (regionId: string) => {
    setSelectedRegion(regionId);
    onRegionChange?.(regionId);
  };

  return (
    <section id="regions" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-glow mb-4">
            Select Your Region
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Compete against players from your region or challenge warriors worldwide
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {regions.map((region) => (
            <button
              key={region.id}
              onClick={() => handleRegionChange(region.id)}
              className={cn(
                "p-4 rounded-xl transition-all duration-300 group",
                selectedRegion === region.id
                  ? "glass neon-border bg-primary/10"
                  : "glass hover:bg-muted/50 border border-transparent hover:border-primary/30"
              )}
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                {region.flag}
              </div>
              <div className="font-display text-xs uppercase tracking-wider truncate">
                {region.name}
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                {region.players.toLocaleString()}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RegionSelector;
