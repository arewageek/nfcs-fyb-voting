"use client";

import prisma from "@/lib/prisma";

export type AwardType = {
  id: string;
  name: string;
  isValid: boolean;
};

export async function getListOfAwards(): Promise<
  AwardType[] | "errorOccurred"
> {
  try {
    const awards = await prisma.awards.findMany();

    return awards;
  } catch (e) {
    console.log(e);
    return "errorOccurred";
  }
}

export async function updateAward({
  id,
  isValid,
  name,
}: {
  id: string;
  isValid: boolean;
  name: string;
}): Promise<"success" | "awardNotExist" | "unknownError"> {
  try {
    const requestedAward = await prisma.awards.findUnique({ where: { id } });

    if (requestedAward?.isValid) {
      await prisma.awards.update({ where: { id }, data: { isValid, name } });
      return "success";
    }
    return "awardNotExist";
  } catch (e) {
    console.log(e);
    return "unknownError";
  }
}

export async function removeAward({
  id,
}: {
  id: string;
}): Promise<"success" | "unknownError"> {
  try {
    await prisma.awards.delete({ where: { id } });

    return "success";
  } catch (e) {
    console.log(e);
    return "unknownError";
  }
}

export async function createAward({
  name,
}: {
  name: string;
}): Promise<"success" | "unknownError"> {
  try {
    await prisma.awards.create({
      data: {
        name,
        isValid: true,
      },
    });

    return "success";
  } catch (error) {
    console.log(error);
    return "unknownError";
  }
}
