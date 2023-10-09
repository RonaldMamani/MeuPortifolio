import Contact from "@/components/Contact/Index";
import Footer from "@/components/Footer/Index";
import Habilidades from "@/components/Habilidades/Index";
import Header from "@/components/Header/Index";
import HomePage from "@/components/HomePage/Index";
import Projetos from "@/components/Projetos/Index";
import Sobre from "@/components/Sobre/Index";

export default function Home() {
  return (
    <main className="bg-black">
      <Header />
      <HomePage />
      <Sobre />
      <Habilidades />
      <Projetos />
      <Contact />
      <Footer />
    </main>
  )
}