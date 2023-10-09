import Footer from "@/components/Footer/Index";
import Header from "@/components/Header/Index";
import HomePage from "@/components/HomePage/Index";

export default function Home() {
  return (
    <main className="bg-black">
      <Header />
      <HomePage />
      <Footer />
    </main>
  )
}