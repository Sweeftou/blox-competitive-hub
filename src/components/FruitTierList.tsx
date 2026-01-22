import { Star, Zap, Flame, Snowflake, Wind, Skull, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const tiers = [
  {
    tier: "S",
    label: "Meta Defining",
    color: "from-amber-400 to-orange-500",
    borderColor: "border-amber-400/50",
    fruits: [
      { name: "Dragon", type: "Beast", icon: "🐉" },
      { name: "Leopard", type: "Beast", icon: "🐆" },
      { name: "Spirit", type: "Natural", icon: "👻" },
      { name: "Dough", type: "Special", icon: "🍩" },
    ],
  },
  {
    tier: "A",
    label: "Excellent",
    color: "from-purple-400 to-pink-500",
    borderColor: "border-purple-400/50",
    fruits: [
      { name: "Venom", type: "Natural", icon: "☠️" },
      { name: "Control", type: "Special", icon: "🎮" },
      { name: "Buddha", type: "Beast", icon: "☸️" },
      { name: "Phoenix", type: "Beast", icon: "🔥" },
      { name: "Rumble", type: "Elemental", icon: "⚡" },
    ],
  },
  {
    tier: "B",
    label: "Great",
    color: "from-cyan-400 to-blue-500",
    borderColor: "border-cyan-400/50",
    fruits: [
      { name: "Magma", type: "Elemental", icon: "🌋" },
      { name: "Light", type: "Elemental", icon: "💡" },
      { name: "Ice", type: "Elemental", icon: "❄️" },
      { name: "Gravity", type: "Special", icon: "🪐" },
      { name: "Shadow", type: "Natural", icon: "🌑" },
    ],
  },
  {
    tier: "C",
    label: "Solid",
    color: "from-green-400 to-emerald-500",
    borderColor: "border-green-400/50",
    fruits: [
      { name: "Dark", type: "Elemental", icon: "⬛" },
      { name: "String", type: "Special", icon: "🧵" },
      { name: "Sand", type: "Elemental", icon: "🏜️" },
      { name: "Quake", type: "Natural", icon: "💢" },
    ],
  },
];

const FruitTierList = () => {
  return (
    <section id="fruits" className="py-20 relative">
      <div className="absolute inset-0 bg-grid opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-8 h-8 text-primary" />
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-glow">
              Fruit Tier List
            </h2>
          </div>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Community-voted competitive tier rankings for PvP battles
          </p>
          <div className="inline-flex items-center gap-2 mt-4 text-sm text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
            Updated for Season 12
          </div>
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          {tiers.map((tier, tierIndex) => (
            <div
              key={tier.tier}
              className={cn(
                "glass rounded-2xl p-6 border animate-fade-in",
                tier.borderColor
              )}
              style={{ animationDelay: `${tierIndex * 0.1}s` }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                {/* Tier Badge */}
                <div className={cn(
                  "w-20 h-20 rounded-xl bg-gradient-to-br flex items-center justify-center font-display font-black text-4xl text-background shrink-0",
                  tier.color
                )}>
                  {tier.tier}
                </div>

                {/* Tier Info & Fruits */}
                <div className="flex-1">
                  <div className="font-display text-sm uppercase tracking-wider text-muted-foreground mb-3">
                    {tier.label}
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    {tier.fruits.map((fruit, fruitIndex) => (
                      <div
                        key={fruit.name}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted/50 border border-border/50 hover:border-primary/30 transition-all cursor-pointer group hover:scale-105"
                      >
                        <span className="text-2xl group-hover:scale-110 transition-transform">
                          {fruit.icon}
                        </span>
                        <div>
                          <div className="font-display font-semibold text-sm">
                            {fruit.name}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {fruit.type}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-sm text-muted-foreground mt-8 max-w-xl mx-auto">
          Rankings are based on competitive viability and community consensus. 
          All fruits can be effective in skilled hands!
        </p>
      </div>
    </section>
  );
};

export default FruitTierList;
