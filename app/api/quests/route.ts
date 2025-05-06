import { NextRequest, NextResponse } from "next/server";
import { prisma } from '@/prisma/client'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { title, description, category, complexity, repeatMode } = body;

    const newQuest = await prisma.quest.create({
      data: {
        title,
        description,
        category,
        complexity,
        repeatMode,
      },
    });

    return NextResponse.json(newQuest, { status: 201 });
    
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
