import NavBar from "../components/NavBar";
import Features from "../components/Features";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-600 to-gray-900 text-white">
      <NavBar />
      <div className="container mx-auto">
        <Features />
      </div>
    </div>
  );
}
