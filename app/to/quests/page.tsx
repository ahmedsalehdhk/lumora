"use client"

import React, { useState } from 'react'
import axios from "axios"

const Quests = () => {

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    complexity: "",
    repeatMode: "none"
  })

  // create new quest function
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const res = await axios.post("/api/quests", formData)
      alert('Quest activated!')
    } catch (error) {
      console.log('Error creating quest', error)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({...formData, [e.target.name]: e.target.value})
    console.log(formData)
  }

  return (
    <div>
      <h1>My Quests</h1>
      <h2>Add new quest</h2>
      <form onSubmit={handleSubmit} className="flex flex-col p-2">
        <label>Title</label>
        <input type="text" name="title" value={formData.title} required onChange={handleChange} />
        <label>Description</label>
        <input type="text" name="description" value={formData.description} onChange={handleChange} />
        <label>Complexity</label>
        <select name="category" value={formData.category} onChange={handleChange}>
          <option value="fitness">Fitness</option>
          <option value="learning">Learning</option>
          <option value="productivity">Productivity</option>
          <option value="finance">Finance</option>
          <option value="career">Career</option>
          <option value="chores">Chores</option>
          <option value="fun">Fun</option>
          <option value="travel">Travel</option>
          <option value="self-Care">Self-Care</option>
          <option value="habits">Habits</option>
        </select>
        <label>Complexity</label>
        <select name="complexity" value={formData.complexity} onChange={handleChange}>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
          <option value="unreal">Unreal</option>
        </select>
        <label>Repeat</label>
        <select name="repeatMode" value={formData.repeatMode} onChange={handleChange}>
          <option value="none">None</option>
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
        <button type='submit'>Activate Quest!</button>
      </form>
    </div>
  )
}

export default Quests
