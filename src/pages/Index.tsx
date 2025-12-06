import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import UseCasesSection from "@/components/UseCasesSection";
import ChatDemo from "@/components/ChatDemo";
import BusinessModelSection from "@/components/BusinessModelSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <UseCasesSection />
        <ChatDemo />
        <BusinessModelSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
