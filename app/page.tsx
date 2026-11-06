import ConceptBar from "@/components/ConceptBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyPavblu from "@/components/WhyPavblu";
import SafetyTabs from "@/components/SafetyTabs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ConceptBar />
      <Header />
      <main>
        <Hero />
        <WhyPavblu />
        <SafetyTabs />
      </main>
      <Footer />
    </>
  );
}
