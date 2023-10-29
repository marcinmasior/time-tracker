import {prisma} from "@/prisma/client";
import {NextResponse} from "next/server";
import authOptions from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import getSessionUser from "@/lib/getSessionUser";

export async function GET(request: Request, response: Response) {
  try {
    const currentUser = await getSessionUser();
    if (!currentUser) {
      return NextResponse.json({ records: null, status: 'error', message: 'You are not logged in.' })
    }

    const timeSheets = await prisma.timeSheet.findMany({
      where: {userId: currentUser.id}
    })

    return Response.json({ data: timeSheets, status: 'success' })
  }catch (e) {
    console.log({e})
  }

}

export async function POST(request: Request) {

  try {
    const currentUser = await getSessionUser();
    if (!currentUser) {
      return NextResponse.json({ records: null, status: 'error', message: 'You are not logged in.' })
    }

    const { name } = await request.json();

    const timeSheet = await prisma.timeSheet.create({
      data: { name, userId: currentUser.id }
    })


    return NextResponse.json({ data: timeSheet, status: 'success', message: 'Time Sheet has been created' })
  }catch (e) {
    console.log({e})
  }

}