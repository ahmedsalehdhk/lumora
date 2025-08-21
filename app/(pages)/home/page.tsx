import React from "react";
import Image from "next/image";
import { prisma } from "@/lib/prisma";
import goku from "@/public/assets/goku.gif";

// Components
import SkillStat from "@/components/SkillStat";
import { Progress } from "@/components/ui/progress";
import Header from "@/components/Header";

const Home = async () => {
  const quests = await prisma.quest.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="flex flex-col h-full">
      <Header />
      <div className="home-content-container flex-1 flex flex-col lg:flex-row gap-3">
        <div className="content-left flex-3 flex flex-col gap-3 order-2 lg:order-1">
          <div className="quote hidden lg:block rounded-sm px-6 py-8 bg-white">
            <h1 className="font-medium">Believe you can and you're halfway there - Theodore Roosevelt</h1>
          </div>
          <div className="flex-1 rounded-sm px-6 py-8 bg-white">
            <h1>Here is a list of your quests</h1>
          </div>
        </div>
        <div className="content-right flex-2 flex flex-col gap-3 order-1 lg:order-2">
          <div className="player-and-stats flex-1 rounded-sm px-6 py-8 flex flex-col justify-between bg-white">
            <div className="">
              <div className="header flex items-center font-bold gap-1.5">
                <h1 className="text-xl">Jennifer</h1>
                <h2 className="px-2 py-0.5 text-xs rounded-sm bg-black text-white">Lvl 95</h2>
              </div>
              <p className="description text-neutral-400 text-sm mb-1">Marketing and sales executive at Alliance Properties Ltd</p>
              <hr className="border-neutral-200 mb-1" />
            </div>
            <div className="image-container h-32 flex justify-center items-center contain p-3">
              {/* <Image src={goku} alt="goku" className="" /> */}
            </div>
            <ul className="stats flex gap-3">
              <div className="col-1 flex-1 space-y-1">
                <SkillStat type="Discipline" exp={69} />
                <SkillStat type="Fitness" exp={89} />
                <SkillStat type="Satisfaction" exp={61} />
              </div>
              <div className="col-2 flex-1 space-y-1">
                <SkillStat type="Creativity" exp={41} />
                <SkillStat type="Intelligence" exp={37} />
                <SkillStat type="Charisma" exp={3} />
              </div>
            </ul>
          </div>
          <div className="exp-bar rounded-sm px-6 py-8 bg-white">
            <h1 className="mb-3">
              Reach level 96 in <span className="font-bold">{100 - 30} EXP</span>
            </h1>
            <div className="flex items-center justify-between gap-1">
              <Progress value={100 - 30} className="h-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
