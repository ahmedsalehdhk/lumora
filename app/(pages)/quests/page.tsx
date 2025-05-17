import React from "react";
import Form from "next/form";

const Quests = () => {
  return (
    <div>
      All quests
      <Form action="" className="bg-gray-300 w-1/2 px-24 py-12 flex flex-col gap-5">
        <input type="text" name="title" placeholder="Title" />
        <input type="text" name="description" placeholder="Description" />
        <select name="complexity" id="">
          <option value="">Complexity</option>
          <option value="">Easy</option>
          <option value="">Medium</option>
          <option value="">Hard</option>
          <option value="">Insane</option>
        </select>
        <select name="repeat" id="">
          <option value="">None</option>
          <option value="">Daily</option>
          <option value="">Weekly</option>
          <option value="">Monthly</option>
          <option value="">Yearly</option>
        </select>
        <button type="submit" className="bg-white">
          Activate Quest
        </button>
      </Form>
    </div>
  );
};

export default Quests;
