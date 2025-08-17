import React from "react";
import { prisma } from "@/lib/prisma";

// Componenets
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import QuestCard from "@/components/QuestCard";
import Header from "@/components/Header";
import NewQuestForm from "@/components/NewQuestForm";

const Quests = async () => {
  const quests = await prisma.quest.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="h-full flex flex-col">
      <Header />
      <div className="flex flex-col flex-1 gap-5">
        <div className="flex-1 flex flex-col gap-3 rounded-lg p-5 md:px-10 md:py-8 bg-white">
          <div className="flex justify-between items-center mb-5">
            <h1 className="text-lg font-medium">All active quests</h1>
            <Dialog>
              <DialogTrigger className="bg-[#D2E5EF] rounded-lg px-4 py-2 font-bold hover:cursor-pointer hover:shadow-sm transition-colors">New Quest</DialogTrigger>
              <DialogContent className="md:px-12 py-12">
                <DialogHeader>
                  <DialogTitle>Found a new conquest?</DialogTitle>
                  <DialogDescription>Log in your quest down below</DialogDescription>
                </DialogHeader>
                <NewQuestForm />
              </DialogContent>
            </Dialog>
          </div>
          <div className="flex flex-col gap-3">
            {quests.map((quest) => (
              <QuestCard key={quest.id} id={quest.id} title={quest.title} category={quest.category} difficulty={quest.difficulty} repeat={quest.repeat} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quests;
