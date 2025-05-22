import React from "react";
import Form from "next/form";
import { prisma } from "@/lib/prisma";
import { Quest } from "@/app/generated/prisma"; //idk if i need this tbh
import { revalidatePath } from "next/cache";
// import { redirect } from "next/dist/server/api-utils";

const Quests = async () => {
  const quests = await prisma.quest.findMany()

  const createPost = async (formData: FormData) => {
    'use server';

    const title = formData.get("title") as string
    const complexity = formData.get("complexity") as string
    const repeat = formData.get("repeat") as string

    await prisma.quest.create({
      data: {
        title,
        complexity, 
        repeat
      }
    })

    revalidatePath("/quests")
    // redirect("/quests");
  }

  return (
    <div>
      All quests
      <Form action={createPost} className="bg-gray-300 w-1/2 px-24 py-12 flex flex-col gap-5">
        <div className="flex flex-col">
          <label>Title</label>
          <input type="text" name="title" />
        </div>
        <div className="flex flex-col">
          <label>Complexity</label>
          <select name="complexity" id="" required>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
            <option value="insane">Insane</option>
          </select>
        </div>
        <div className="flex flex-col mb-5">
          <label>Repeat</label>
          <select name="repeat" id="">
            <option value="none">None</option>
            <option value="daily">Daily</option>
            <option value="weeky">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>
        <button type="submit" className="bg-white py-5">
          Activate Quest
        </button>
      </Form>
      <ul className="all-quests">
        {quests.map((quest: Quest) => {
            return <li>{quest.title}</li>
          })
        }
      </ul>
    </div>
  );
};

export default Quests;
