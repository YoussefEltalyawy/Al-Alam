import {
  Flag,
  Trophy,
  Brain,
  Users,
  Medal,
  Target,
  Sparkles,
  Globe2,
} from "lucide-react";

import Header from "./components/Header";

function LandingPage() {
  return (
    <>
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
            <p className="font-semibold opacity-95">
              Can you identify these flags?
            </p>
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
      <section className="py-16 px-8 border-y-4 bg-brandRed border-black">
        <div className="max-w-9xl mx-auto">
          <h3 className="text-4xl font-black mb-12 transform -rotate-1 text-brandBeige">
            WHY PLAY AL-ALAM?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform hover:translate-x-2 hover:-translate-y-2 transition-transform">
              <Users className="h-12 w-12 mb-4 text-brandRed" />
              <h4 className="text-2xl font-black mb-2 text-brandBlue">
                Challenge Friends
              </h4>
              <p className="font-bold text-brandBlue">
                Create private rooms and compete with friends in real-time!
              </p>
            </div>
            <div className="bg-white p-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform hover:translate-x-2 hover:-translate-y-2 transition-transform">
              <Medal className="h-12 w-12 mb-4 text-brandRed" />
              <h4 className="text-2xl font-black mb-2 text-brandBlue">
                Earn Achievements
              </h4>
              <p className="font-bold text-brandBlue">
                Unlock badges as you master different regions and categories!
              </p>
            </div>
            <div className="bg-white p-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform hover:translate-x-2 hover:-translate-y-2 transition-transform">
              <Target className="h-12 w-12 mb-4 text-brandRed" />
              <h4 className="text-2xl font-black mb-2 text-brandBlue">
                Daily Challenges
              </h4>
              <p className="font-bold text-brandBlue">
                New geography puzzles every day to test your skills!
              </p>
            </div>
            <div className="bg-white p-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform hover:translate-x-2 hover:-translate-y-2 transition-transform">
              <Sparkles className="h-12 w-12 mb-4 text-brandRed" />
              <h4 className="text-2xl font-black mb-2 text-brandBlue">
                Learn As You Play
              </h4>
              <p className="font-bold text-brandBlue">
                Discover interesting facts about each country you encounter!
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer className="border-t-4 border-black bg-white py-12 px-4">
        <div className="max-w-9xl mx-8 flex justify-between gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h4 className="flex items-center gap-2 text-xl font-black">
              <Globe2 className="h-6 w-6" />
              AL-ALAM
            </h4>
            <p className="font-bold">Making geography fun since 2024</p>
            <div className="space-y-4">
              <h4 className="text-md font-semibold">Support:</h4>
              talyawy@proton.me
            </div>
          </div>

          {/* Support */}
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-4 border-t-2 border-black text-center font-bold">
          <p>&copy; 2024 AL-ALAM. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
export default LandingPage;
