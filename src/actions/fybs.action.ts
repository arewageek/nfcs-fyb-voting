" use server";

import prisma from "@/lib/prisma";

export type Fybs = {
  id: string;
  name: string;
  email: string;
  nickname: string;
  phone: string;
};

export async function allFybs(): Promise<
  Fybs[] | "unknownError" | "noProfile"
> {
  try {
    const fybs = await prisma.fybs.findMany();
    if (!fybs) return "noProfile";
    return fybs;
  } catch (error) {
    console.log(error);
    return "unknownError";
  }
}

export async function createFyb({
  name,
  email,
  phone,
  nickname,
}: Omit<Fybs, "id">): Promise<"success" | "unknownError"> {
  try {
    await prisma.fybs.create({ data: { name, email, phone, nickname } });
    return "success";
  } catch (e) {
    console.log(e);
    return "unknownError";
  }
}

export async function updateProfile({
  name,
  email,
  phone,
  nickname,
}: Omit<Fybs, "id">): Promise<"success" | "unknownError"> {
  try {
    const user = await prisma.fybs.findFirst({ where: { email } });

    await prisma.fybs.update({
      where: { id: user?.id },
      data: { name, email, phone, nickname },
    });

    return "success";
  } catch (e) {
    console.log(e);
    return "unknownError";
  }
}
