import {
  Globe,
  Flag,
  Trophy,
  Brain,
  LogIn,
  User,
  Users,
  Medal,
  Target,
  Sparkles,
} from "lucide-react";

import Header from "./components/Header";

function LandingPage() {
  return (
    <>
      <Header />
      <section className="text-center px-4 relative">
        <h2 className="text-6xl font-black mb-4 transform -rotate-1 text-brandBlue">
          EXPLORE THE WORLD
          <br />
          <span className="text-brandRed">THROUGH PLAY!</span>
        </h2>
        <p className="text-2xl font-normal mb-8 transform rotate-1">
          Test your geography knowledge & become a world master
        </p>
        <button className="px-8 py-4 text-2xl font-bold bg-brandRed text-brandBeige border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all transform -rotate-2">
          PLAY NOW!
        </button>
      </section>

      {/* Game Modes */}
      <div className="max-w-8xl mx-auto px-8 py-12 mt-[80px]">
        <h3 className="text-4xl font-black mb-4 transform rotate-1 text-brandBlue">
          GAME MODES
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border-4 bg-brandRed text-brandBeige border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform hover:-rotate-2 transition-transform">
            <Flag className="h-16 w-16 text-brandBeige mb-4" />
            <h4 className="text-2xl font-bold mb-2">Guess the Flag</h4>
            <p className="font-semibold opacity-95">Can you identify these flags?</p>
          </div>
          <div className="p-6 border-4 text-brandBlue border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform hover:rotate-2 transition-transform">
            <Brain className="h-16 w-16 mb-4" />
            <h4 className="text-2xl font-bold mb-2">World Quiz</h4>
            <p className="font-semibold opacity-95">Name all countries!</p>
          </div>
          <div className="p-6 border-4 bg-brandBlue text-brandBeige border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform hover:-rotate-2 transition-transform">
            <Trophy className="h-16 w-16 mb-4" />
            <h4 className="text-2xl font-bold mb-2">Currency Master</h4>
            <p className="font-semibold opacity-95">Match money to nations!</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default LandingPage;
