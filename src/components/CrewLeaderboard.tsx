import { Swords, Users, Trophy, Star, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

const mockCrews = [
  { rank: 1, name: "Sea Kings", tag: "SKG", members: 48, avgPr: 2156, wins: 1247, logo: "👑" },
  { rank: 2, name: "Phoenix Fleet", tag: "PHX", members: 45, avgPr: 2089, wins: 1189, logo: "🔥" },
  { rank: 3, name: "Dark Tide", tag: "DTD", members: 50, avgPr: 2034, wins: 1156, logo: "🌑" },
  { rank: 4, name: "Storm Riders", tag: "STR", members: 42, avgPr: 1987, wins: 1098, logo: "⚡" },
  { rank: 5, name: "Blood Moon", tag: "BLM", members: 47, avgPr: 1945, wins: 1034, logo: "🌙" },
  { rank: 6, name: "Tidal Wave", tag: "TWV", members: 44, avgPr: 1912, wins: 987, logo: "🌊" },
];

const CrewLeaderboard = () => {
  return (
    <section id="crews" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Swords className="w-8 h-8 text-secondary" />
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-glow-magenta">
              Top Crews
            </h2>
          </div>
          <p className="text-muted-foreground max-w-xl mx-auto">
            The most dominant crews ruling the competitive seas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {mockCrews.map((crew, index) => (
            <div
              key={crew.name}
              className={cn(
                "glass rounded-2xl p-6 border transition-all duration-300 hover:scale-105 cursor-pointer group animate-fade-in relative overflow-hidden",
                crew.rank === 1
                  ? "neon-border-gold"
                  : crew.rank === 2
                  ? "border-gray-400/30"
                  : crew.rank === 3
                  ? "border-amber-700/30"
                  : "border-border/50 hover:border-secondary/30"
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Rank Badge */}
              <div className={cn(
                "absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center font-display font-bold",
                crew.rank === 1 ? "bg-gradient-to-br from-amber-400 to-orange-500 text-background" :
                crew.rank === 2 ? "bg-gradient-to-br from-gray-300 to-gray-400 text-background" :
                crew.rank === 3 ? "bg-gradient-to-br from-amber-600 to-amber-800 text-background" :
                "bg-muted text-muted-foreground"
              )}>
                #{crew.rank}
              </div>

              {/* Crew Logo & Name */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center text-4xl border border-secondary/30 group-hover:scale-110 transition-transform">
                  {crew.logo}
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl">{crew.name}</h3>
                  <div className="text-sm text-muted-foreground font-display">[{crew.tag}]</div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="text-center p-3 rounded-lg bg-muted/30">
                  <Users className="w-4 h-4 mx-auto mb-1 text-muted-foreground" />
                  <div className="font-display font-bold">{crew.members}</div>
                  <div className="text-xs text-muted-foreground">Members</div>
                </div>
                <div className="text-center p-3 rounded-lg bg-muted/30">
                  <Star className="w-4 h-4 mx-auto mb-1 text-primary" />
                  <div className="font-display font-bold text-primary">{crew.avgPr}</div>
                  <div className="text-xs text-muted-foreground">Avg PR</div>
                </div>
                <div className="text-center p-3 rounded-lg bg-muted/30">
                  <Trophy className="w-4 h-4 mx-auto mb-1 text-accent" />
                  <div className="font-display font-bold text-accent">{crew.wins}</div>
                  <div className="text-xs text-muted-foreground">Wins</div>
                </div>
              </div>

              {/* View Profile */}
              <button className="w-full py-2 text-center text-sm text-secondary hover:text-secondary/80 font-display uppercase tracking-wider transition-colors flex items-center justify-center gap-2 group-hover:gap-3">
                <Shield className="w-4 h-4" />
                View Crew Profile
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CrewLeaderboard;
