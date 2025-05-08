"use client"

import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const QuestContext = createContext();

export function QuestProvider({ children }) {
    const [quests, setQuests] = useState([]);

    const fetchQuests = async () => {
        const res = await axios.get("/api/quests");
        setQuests(res.data);
      };

    const addQuest = async (data) => {
        const res = await axios.post("/api/quests", data);
        await fetchQuests();
        return res;
      };

      useEffect(() => {
        fetchQuests();
      }, []);

      return (
        <QuestContext.Provider value={{ quests, addQuest }}>
          {children}
        </QuestContext.Provider>
      );
}

export const useQuests = () => useContext(QuestContext);