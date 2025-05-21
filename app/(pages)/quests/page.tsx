import React from "react";
import Form from "next/form";

const Quests = () => {
  return (
    <div>
      All quests
      <Form action="" className="bg-gray-300 w-1/2 px-24 py-12 flex flex-col gap-5">
        <div className="">
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
        <div className="flex flex-col">
          <label>Repeat</label>
          <select name="repeat" id="">
            <option value="none">None</option>
            <option value="daily">Daily</option>
            <option value="weeky">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>
        <button type="submit" className="bg-white">
          Activate Quest
        </button>
      </Form>
    </div>
  );
};

export default Quests;
