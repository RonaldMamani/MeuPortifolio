import Contact from "@/components/Contact/Index";
import Footer from "@/components/Footer/Index";
import Header from "@/components/Header/Index";
import HomePage from "@/components/HomePage/Index";
import Sobre from "@/components/Sobre/Index";

export default function Home() {
  return (
    <main className="bg-black">
      <Header />
      <HomePage />
      <Sobre />
      <Contact />
      <Footer />
    </main>
  )
}