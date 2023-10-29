import {prisma} from "@/prisma/client";
import {NextResponse} from "next/server";
import authOptions from "@/lib/authOptions";
import { getServerSession } from "next-auth";

export async function GET(request: Request, response: Response) {

  try {
    const session = await getServerSession(authOptions)

    if (!session) {
      return NextResponse.json({ records: null, status: 'error', message: 'You are not logged in.' })
    }

    const currentUser = session.user;

    if (!currentUser) {
      return NextResponse.json({ records: null, status: 'error', message: 'You are not logged in.' })
    }

    const timeSheetId = request.url.split('timesheets/')[1];

    const timeSheet = await prisma.timeSheet.findFirst({
      where: { id: timeSheetId, userId: currentUser.id }
    })

    return Response.json({ data: timeSheet, status: 'success' })
  }catch (e) {
    console.log({e})
  }
}


export async function PUT(request: Request, response: Response) {
  try {
    const session = await getServerSession(authOptions)

    if (!session) {
      return NextResponse.json({ records: null, status: 'error', message: 'You are not logged in.' })
    }

    const currentUser = session.user;

    if (!currentUser) {
      return NextResponse.json({ records: null, status: 'error', message: 'You are not logged in.' })
    }

    const timeSheetId = request.url.split('timesheets/')[1];

    const { name } = await request.json();

    const timeSheet = await prisma.timeSheet.update({
      where: { id: timeSheetId, userId: currentUser.id },
      data: { name: name, },
    })

    return Response.json({ data: timeSheet, status: 'success', message: 'Time Sheet has been updated.' })
  }catch (e) {
    console.log({e})
  }
}

export async function DELETE(request: Request, response: Response) {
  try {
    const session = await getServerSession(authOptions)

    if (!session) {
      return NextResponse.json({ records: null, status: 'error', message: 'You are not logged in.' })
    }

    const currentUser = session.user;

    if (!currentUser) {
      return NextResponse.json({ records: null, status: 'error', message: 'You are not logged in.' })
    }

    const timeSheetId = request.url.split('timesheets/')[1];

    const timeSheet = await prisma.timeSheet.delete({
      where: { id: timeSheetId, userId: currentUser.id }
    })

    return Response.json({ data: timeSheet, status: 'success', message: 'Time Sheet has been deleted.' })
  }catch (e) {
    console.log({e})
  }
}