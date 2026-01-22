import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import RegionSelector from "@/components/RegionSelector";
import PlayerRankings from "@/components/PlayerRankings";
import CrewLeaderboard from "@/components/CrewLeaderboard";
import FruitTierList from "@/components/FruitTierList";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <RegionSelector />
      <PlayerRankings />
      <CrewLeaderboard />
      <FruitTierList />
      <Footer />
    </div>
  );
};

export default Index;
