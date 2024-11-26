import "../styles/page.css";
import Presentation from "@/components/Presentation";
import Personal from "@/components/Personal";
import Footer from "@/components/Footer";
import Reviews from "@/components/Reviews";
import Where from "@/components/Where";

export default function Home() {
  return (
    <main>
      <Presentation />
      <div className="vector-bg">
        <Personal />
        <Reviews />
        <Where />
      </div>
      <footer>
        <Footer />
      </footer>
    </main>
  );
}
