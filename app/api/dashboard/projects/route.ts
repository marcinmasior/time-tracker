import {prisma} from "@/prisma/client";
import {NextResponse} from "next/server";
import getSessionUser from "@/lib/getSessionUser";

export async function GET(request: Request, response: Response) {
  try {
    const currentUser = await getSessionUser();
    if (!currentUser) {
      return NextResponse.json({ records: null, status: 'error', message: 'You are not logged in.' })
    }

    const projects = await prisma.project.findMany({
      where: {userId: currentUser.id}
    })

    return Response.json({ data: projects, status: 'success' })
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

    const { name, active } = await request.json();

    const project = await prisma.project.create({
      data: { name, active, userId: currentUser.id }
    })


    return NextResponse.json({ data: project, status: 'success', message: 'Project has been created' })
  }catch (e) {
    console.log({e})
  }

}