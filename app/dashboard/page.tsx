import { currentUser } from "@clerk/nextjs/server";
import {
  Flag,
  Globe,
  DollarSign,
  Target,
  Users,
  Timer,
} from "lucide-react";

async function Dashboard() {
  const user = await currentUser();
  const gameModes = [
    {
      name: "Guess the Flag",
      icon: <Flag className="h-8 w-8 text-brandRed" />,
      players: 428,
      progressColor: "green",
      progressWidth: "65%",
    },
    {
      name: "World Typer",
      icon: <Globe className="h-8 w-8 text-brandRed" />,
      players: 312,
      progressColor: "blue",
      progressWidth: "45%",
    },
    {
      name: "Currency Master",
      icon: <DollarSign className="h-8 w-8 text-brandRed" />,
      players: 156,
      progressColor: "yellow",
      progressWidth: "25%",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Welcome Section */}
      <section className="mt-[80px] mx-[40px]">
        <div>


          {/* Daily Challenge */}
          <div className="p-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8 bg-brandBlue">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-3">
                <Target className="h-8 w-8 text-white" />
                <h2 className="text-2xl font-black text-white">
                  Daily Challenge
                </h2>
              </div>
              <div className="flex items-center gap-2">
                <Timer className="h-6 w-6 text-white" />
                <span className="text-white font-bold">14:32:11</span>
              </div>
            </div>
            <p className="text-white font-bold mb-4">
              Name all European capital cities!
            </p>
            <button className="px-6 py-3 text-white bg-brandRed font-black border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
              PLAY NOW
            </button>
          </div>

          {/* Games Grid */}
          <div className="gamesCardContainer grid grid-cols-1 md:grid-cols-3 gap-6">
            {gameModes.map((gameMode, index) => (
              <div
                key={index}
                className="gameCard bg-white p-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform hover:-rotate-2 transition-transform"
              >
                <div className="flex justify-between items-start mb-4">
                  {gameMode.icon}
                  <span className="text-sm font-bold">
                    🟢 {gameMode.players} Playing
                  </span>
                </div>
                <h3 className="text-xl font-black mb-2">{gameMode.name}</h3>
                <div className="w-full bg-gray-200 h-4 mb-4 border-2 border-black">
                  <div
                    className={`bg-${gameMode.progressColor}-500 h-full`}
                    style={{ width: gameMode.progressWidth }}
                  ></div>
                </div>
                <button className="w-full px-4 py-2 text-white bg-brandRed font-bold border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                  PLAY
                </button>
              </div>
            ))}
          </div>

          {/* Friends Activity */}
          <div className="mt-8 bg-white p-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-3">
                <Users className="h-8 w-8 text-brandBlue" />
                <h2 className="text-2xl font-black">Friends Activity</h2>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-100 border-2 border-black">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-gray-300 rounded-full border-2 border-black"></div>
                  <div>
                    <p className="font-bold">
                      Sarah just beat your high score!
                    </p>
                    <p className="text-sm">Flag Master • 2 min ago</p>
                  </div>
                </div>
                <button className="px-4 py-2 text-white bg-brandRed font-bold border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                  Challenge
                </button>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-100 border-2 border-black">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-gray-300 rounded-full border-2 border-black"></div>
                  <div>
                    <p className="font-bold">Mike completed Daily Challenge!</p>
                    <p className="text-sm">World Quiz • 15 min ago</p>
                  </div>
                </div>
                <button className="px-4 py-2 text-white bg-brandRed font-bold border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                  Challenge
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
