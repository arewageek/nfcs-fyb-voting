"use server";

import prisma from "@/lib/prisma";

export type Nomination = {
  id: string;
  candidateId: string;
  name: string;
  award: string;
  votes: number;
};

export async function nominateCandidate({
  id,
  name,
  award,
  votes,
}: {
  id: string;
  name: string;
  award: string;
  votes: number;
}): Promise<
  | "candidateNominated"
  | "newNominationCreated"
  | "unknownError"
  | "invalidAward"
  | "candidateNotFound"
> {
  try {
    const candidate = await prisma.candidates.findFirst({
      where: { candidateId: id, award },
    });

    if (!candidate || candidate.votes < 1) {
      // candidate had not previously been nominated
      await prisma.candidates.create({
        data: { candidateId: id, award, name, votes },
      });
    }

    await prisma.candidates.update({
      where: { id: candidate?.id },
      data: { votes: candidate?.votes! + votes },
    });

    return "candidateNominated";
  } catch (e) {
    console.log(e);
    return "unknownError";
  }
}

export async function getAllNominations(): Promise<
  Nomination[] | "unknownError"
> {
  try {
    const allNominations = await prisma.candidates.findMany();
    return allNominations;
  } catch (e) {
    console.log(e);
    return "unknownError";
  }
}

export async function getNominationsByUser({
  userId,
}: {
  userId: string;
}): Promise<"candidateNotExist" | "noNominationYet" | Nomination> {
  const user = await prisma.fybs.findUnique({ where: { id: userId } });
  if (!user) return "candidateNotExist";

  const candidateData = await prisma.candidates.findFirst({
    where: { candidateId: userId },
  });

  if (!candidateData) return "noNominationYet";
  return candidateData;
}

export async function getNominationsByCategory({
  category,
}: {
  category: string;
}): Promise<
  | "noNominationsInCategory"
  | "categoryDoesNotEist"
  | "unknownError"
  | Nomination[]
> {
  try {
    const categoryExist = await prisma.awards.findFirst({
      where: { name: category },
    });
    if (!categoryExist) return "categoryDoesNotEist";

    const nominationsForCategory = await prisma.candidates.findMany({
      where: { award: category },
    });
    if (nominateCandidate.length < 1) return "noNominationsInCategory";

    return nominationsForCategory;
  } catch (e) {
    console.log(e);
    return "unknownError";
  }
}
