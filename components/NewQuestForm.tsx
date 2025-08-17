import React from "react";
import Form from "next/form";

// Actions
import { createQuest } from "@/app/actions/createQuest";

// Components
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const NewQuestForm = () => {
  return (
    <div className="flex flex-col justify-center bg-white">
      {/* <h1 className="text-xl font-bold">Found a new conquest?</h1>
      <p className="text-neutral-400 text-sm mb-3">Log in your quests down below</p>
      <hr className="mb-8 border-neutral-200" /> */}
      {/* FORM */}
      <Form action={createQuest} className="">
        <div className="title-content mb-5">
          <Label htmlFor="title" className="mb-2">
            Title
          </Label>
          <Input name="title" />
        </div>
        <div className="category-content mb-5">
          <Label htmlFor="title" className="mb-2">
            Category
          </Label>
          <Select name="category">
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="LEARNING">Learning</SelectItem>
              <SelectItem value="FITNESS">Fitness</SelectItem>
              <SelectItem value="SELFCARE">Seflcare</SelectItem>
              <SelectItem value="SOCIAL">Social</SelectItem>
              <SelectItem value="FINANCE">Finance</SelectItem>
              <SelectItem value="CAREER">Career</SelectItem>
              <SelectItem value="CREATIVITY">Creativity</SelectItem>
              <SelectItem value="PRODUCTIVITY">Productivity</SelectItem>
              <SelectItem value="MISCELLANEOUS">Miscellaneous</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="difficulty-content mb-5">
          <Label htmlFor="title" className="mb-2">
            Complexity
          </Label>
          <Select name="difficulty">
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a difficulty" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="SIMPLE">Simple</SelectItem>
              <SelectItem value="EASY">Easy</SelectItem>
              <SelectItem value="MODERATE">Morderate</SelectItem>
              <SelectItem value="HARD">Hard</SelectItem>
              <SelectItem value="INSANE">Insane</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="repeat-content mb-8">
          <Label htmlFor="title" className="mb-2">
            Repeat
          </Label>
          <Select name="repeat">
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select when to repeat" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="NEVER">Never</SelectItem>
              <SelectItem value="DAILY">Daily</SelectItem>
              <SelectItem value="WEEKLY">Weekly</SelectItem>
              <SelectItem value="MONTHLY">Monthly</SelectItem>
              <SelectItem value="YEARLY">Yearly</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button variant="default" type="submit" className="w-full">
          Activate Quest
        </Button>
      </Form>
    </div>
  );
};

export default NewQuestForm;
