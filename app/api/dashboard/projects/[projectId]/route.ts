import {prisma} from "@/prisma/client";
import {NextResponse} from "next/server";
import getSessionUser from "@/lib/getSessionUser";

export async function GET(request: Request, response: Response) {

  try {
    const currentUser = await getSessionUser();
    if (!currentUser) {
      return NextResponse.json({ records: null, status: 'error', message: 'You are not logged in.' })
    }

    const projectId = request.url.split('projects/')[1];

    const project = await prisma.project.findFirst({
      where: { id: projectId, userId: currentUser.id }
    })

    return Response.json({ data: project, status: 'success' })
  }catch (e) {
    console.log({e})
  }
}


export async function PUT(request: Request, response: Response) {
  try {
    const currentUser = await getSessionUser();
    if (!currentUser) {
      return NextResponse.json({ records: null, status: 'error', message: 'You are not logged in.' })
    }

    const projectId = request.url.split('projects/')[1];

    const { name, active } = await request.json();

    const project = await prisma.project.update({
      where: { id: projectId, userId: currentUser.id },
      data: { name, active },
    })

    return Response.json({ data: project, status: 'success', message: 'Project has been updated.' })
  }catch (e) {
    console.log({e})
  }
}

export async function DELETE(request: Request, response: Response) {
  try {
    const currentUser = await getSessionUser();
    if (!currentUser) {
      return NextResponse.json({ records: null, status: 'error', message: 'You are not logged in.' })
    }

    const projectId = request.url.split('projects/')[1];

    const project = await prisma.project.delete({
      where: { id: projectId, userId: currentUser.id }
    })

    return Response.json({ data: project, status: 'success', message: 'Project has been deleted.' })
  }catch (e) {
    console.log({e})
  }
}