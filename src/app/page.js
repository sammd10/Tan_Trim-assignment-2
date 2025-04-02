import HomePage from "./components/Home/page";
import Navbar from "./components/Navbar/page";
import About from "./components/About/page";

export default function Home() {
  return (
    <div className="container">
      <Navbar />
      <HomePage />
    </div>
  );
}
