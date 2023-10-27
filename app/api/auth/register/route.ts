import {NextResponse} from "next/server";
import {hashPassword} from "@/utils/hashing";
import {prisma} from "@/prisma/client";

export async function POST(request: Request) {
  try {
    const {email, password, passwordConfirmation} = await request.json()

    const existingUser = await prisma.user.findUnique({
      where: {email: email}
    })

    if (existingUser) {
      return NextResponse.json({user: null, status: 'error', message: "Email address already exists!"});
    }

    if (password != passwordConfirmation) {
      return NextResponse.json({user: null, status: 'error', message: "Password confirmation does not match with password"});
    }

    const hashedPassword = await hashPassword(password);

    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword
      }
    })

    return NextResponse.json({user: newUser, status: 'success', message: 'User has been created', description: 'Now you can login to your new account'});
  } catch (e) {
    console.log({e})
  }
}
