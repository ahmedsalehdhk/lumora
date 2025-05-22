// this file is for generating only one instance of the prisma client
// import { PrismaClient } from "@prisma/client";
import { PrismaClient } from "@/app/generated/prisma";


const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;