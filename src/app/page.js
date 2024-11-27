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
        <Where lat={41.3696848} lng={2.1409981} />
      </div>
      <footer>
        <Footer />
      </footer>
    </main>
  );
}
