import React from 'react'

const Quests = () => {
  return (
    <div>
      <h1>My Quests</h1>
      <h2>Add new quest</h2>
      <form action="" className="flex flex-col">
        <input type="text" placeholder="Quest Name" />
        <input type="text" placeholder="Quest Description" />
        {/* <input type="text" placeholder="Category" /> */}
        <select name="" id="">
          <option value="">Select Category</option>
          <option value="">Habit</option>
          <option value="">Career</option>
          <option value="">Business</option>
          <option value="">Family</option>
        </select>
        {/* <input type="text" placeholder="Complexity" /> */}
        <select name="" id="">
          <option value="">Select Complexity</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
          <option value="unreal">Unreal</option>
        </select>
        {/* <input type="text" placeholder="Repeat Mode" /> */}
        <select name="" id="">
          <option value="">Select Repeat Mode</option>
          <option value="none">None</option>
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
        <input type="submit" value="Activate Quest!" />
      </form>
    </div>
  )
}

export default Quests
