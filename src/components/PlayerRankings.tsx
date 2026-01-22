import { useState } from "react";
import { Trophy, Medal, Crown, TrendingUp, TrendingDown, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const tabs = [
  { id: "alltime", label: "All-Time PR" },
  { id: "monthly", label: "Monthly PR" },
  { id: "wins", label: "Most Wins" },
];

const mockPlayers = [
  { rank: 1, name: "DragonSlayer99", crew: "Sea Kings", pr: 2847, wins: 342, change: 2, avatar: "🐉" },
  { rank: 2, name: "FruitMaster_X", crew: "Phoenix Fleet", pr: 2756, wins: 318, change: -1, avatar: "🍎" },
  { rank: 3, name: "ShadowPirate", crew: "Dark Tide", pr: 2698, wins: 295, change: 1, avatar: "👤" },
  { rank: 4, name: "LightningStrike", crew: "Storm Riders", pr: 2654, wins: 287, change: 0, avatar: "⚡" },
  { rank: 5, name: "CrimsonBlade", crew: "Blood Moon", pr: 2601, wins: 276, change: 3, avatar: "🗡️" },
  { rank: 6, name: "OceanKing", crew: "Tidal Wave", pr: 2589, wins: 268, change: -2, avatar: "🌊" },
  { rank: 7, name: "FireFist_Ace", crew: "Flame Corps", pr: 2534, wins: 254, change: 1, avatar: "🔥" },
  { rank: 8, name: "IceQueen", crew: "Frost Legion", pr: 2498, wins: 241, change: -1, avatar: "❄️" },
  { rank: 9, name: "ThunderGod", crew: "Lightning Strike", pr: 2467, wins: 232, change: 0, avatar: "⛈️" },
  { rank: 10, name: "DarkPhoenix", crew: "Rebirth", pr: 2445, wins: 228, change: 4, avatar: "🔮" },
];

const getRankIcon = (rank: number) => {
  switch (rank) {
    case 1:
      return <Crown className="w-5 h-5 text-amber-400" />;
    case 2:
      return <Medal className="w-5 h-5 text-gray-300" />;
    case 3:
      return <Medal className="w-5 h-5 text-amber-600" />;
    default:
      return <span className="font-display font-bold text-muted-foreground">#{rank}</span>;
  }
};

const getRankStyle = (rank: number) => {
  switch (rank) {
    case 1:
      return "neon-border-gold bg-gradient-to-r from-amber-500/10 to-orange-500/10";
    case 2:
      return "border-gray-400/30 bg-gray-500/5";
    case 3:
      return "border-amber-700/30 bg-amber-800/5";
    default:
      return "border-border/50 hover:border-primary/30";
  }
};

const ChangeIndicator = ({ change }: { change: number }) => {
  if (change > 0) {
    return (
      <div className="flex items-center gap-1 text-neon-green text-sm">
        <TrendingUp className="w-3 h-3" />
        <span>+{change}</span>
      </div>
    );
  }
  if (change < 0) {
    return (
      <div className="flex items-center gap-1 text-neon-red text-sm">
        <TrendingDown className="w-3 h-3" />
        <span>{change}</span>
      </div>
    );
  }
  return <Minus className="w-3 h-3 text-muted-foreground" />;
};

const PlayerRankings = () => {
  const [activeTab, setActiveTab] = useState("alltime");

  return (
    <section id="rankings" className="py-20 relative">
      <div className="absolute inset-0 bg-grid opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Trophy className="w-8 h-8 text-accent" />
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-glow-gold">
              Player Rankings
            </h2>
          </div>
          <p className="text-muted-foreground max-w-xl mx-auto">
            The most skilled warriors across all seas. Climb the ranks and prove your worth.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex gap-1 p-1 glass rounded-lg">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "px-6 py-2 rounded-md font-display text-sm uppercase tracking-wider transition-all",
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground shadow-[0_0_20px_hsl(var(--primary)/0.4)]"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Rankings Table */}
        <div className="max-w-4xl mx-auto space-y-3">
          {mockPlayers.map((player, index) => (
            <div
              key={player.name}
              className={cn(
                "glass rounded-xl p-4 flex items-center gap-4 border transition-all duration-300 hover:scale-[1.02] cursor-pointer animate-fade-in",
                getRankStyle(player.rank)
              )}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Rank */}
              <div className="w-12 h-12 rounded-lg bg-muted/50 flex items-center justify-center">
                {getRankIcon(player.rank)}
              </div>

              {/* Avatar */}
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-2xl border border-primary/30">
                {player.avatar}
              </div>

              {/* Player Info */}
              <div className="flex-1 min-w-0">
                <div className="font-display font-bold text-lg truncate">
                  {player.name}
                </div>
                <div className="text-sm text-muted-foreground truncate">
                  {player.crew}
                </div>
              </div>

              {/* Stats */}
              <div className="hidden sm:flex items-center gap-8">
                <div className="text-center">
                  <div className="font-display font-bold text-xl text-primary">
                    {player.pr.toLocaleString()}
                  </div>
                  <div className="text-xs text-muted-foreground uppercase">PR</div>
                </div>
                <div className="text-center">
                  <div className="font-display font-bold text-xl text-accent">
                    {player.wins}
                  </div>
                  <div className="text-xs text-muted-foreground uppercase">Wins</div>
                </div>
              </div>

              {/* Change */}
              <div className="w-16 flex justify-end">
                <ChangeIndicator change={player.change} />
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-8">
          <button className="text-primary hover:text-primary/80 font-display uppercase tracking-wider text-sm transition-colors">
            View Full Leaderboard →
          </button>
        </div>
      </div>
    </section>
  );
};

export default PlayerRankings;
