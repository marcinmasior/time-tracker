import {prisma} from "@/prisma/client";
import {NextResponse} from "next/server";
import authOptions from "@/lib/authOptions";
import { getServerSession } from "next-auth";

export async function GET(request: Request, response: Response) {
  try {
    const timeSheetId = request.url.split('timesheets/')[1];

    const session = await getServerSession(authOptions)

    if (!session) {
      return NextResponse.json({ records: null, status: 'error', message: 'AA You are not logged in.' })
    }

    const currentUser = session.user;

    if (!currentUser) {
      return NextResponse.json({ records: null, status: 'error', message: 'You are not logged in.' })
    }

    const timeSheet = await prisma.timeSheet.findFirst({
      where: { id: timeSheetId, userId: currentUser.id }
    })

    return Response.json({ data: timeSheet, status: 'success' })
  }catch (e) {
    console.log({e})
  }

}