"use client";

import React from "react";
import { QuestCategory, QuestDifficulty, QuestRepeat } from "@prisma/client";
import Image from "next/image";

// Components
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

type QuestCardProps = {
  id: string;
  title: string;
  category: QuestCategory;
  difficulty: QuestDifficulty;
  repeat: QuestRepeat;
};

const QuestCard = ({ id, title, category, difficulty, repeat }: QuestCardProps) => {
  const categoryImages: Record<string, string> = {
    LEARNING: "/assets/questCard/brain.png",
    FITNESS: "/assets/questCard/running.png",
    SELFCARE: "/assets/questCard/self-love.png",
    SOCIAL: "/assets/questCard/high-five.png",
    FINANCE: "/assets/questCard/money.png",
    CAREER: "/assets/questCard/career-path.png",
    CREATIVITY: "/assets/questCard/art.png",
    PRODUCTIVITY: "/assets/questCard/productivity.png",
    MISCELLANEOUS: "/assets/questCard/cubes.png",
  };
  const imageSrc = categoryImages[category] ?? "/assets/questCard/cubes.png";

  let repeatMsg = "";
  switch (repeat) {
    case "NEVER":
      repeatMsg = "Just this once";
      break;
    case "DAILY":
      repeatMsg = "Everyday";
      break;
    case "WEEKLY":
      repeatMsg = "Every week";
      break;
    case "MONTHLY":
      repeatMsg = "Every month";
      break;
    case "YEARLY":
      repeatMsg = "Once every year";
      break;
    default:
      repeatMsg = "No Match";
      break;
  }

  const handleTaskComplete = () => {
    console.log("Task completed");
  };

  const handleTaskAbandon = () => {
    console.log("Task Abandoned");
  };

  return (
    <div className="flex items-center gap-5 px-3 py-4 rounded-xl border border-transparent hover:border-neutral-200 transition-all">
      <div className="image-container p-2 rounded-lg bg-neutral-100">
        <Image height={32} width={32} src={imageSrc} alt={category} />
      </div>
      <div className="content flex-1 flex justify-between items-start">
        <div className="content-left">
          <h1 className="font-medium capitalize text-">{title}</h1>
          <p className="capitalize text-sm text-neutral-400">{repeatMsg}</p>
        </div>
        <div className="content-right">
          <DropdownMenu>
            <DropdownMenuTrigger className="text-3xl leading-1">...</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Quest done?</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleTaskComplete}>Complete</DropdownMenuItem>
              <DropdownMenuItem onClick={handleTaskAbandon}>Abandon</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default QuestCard;
