import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { PrismaClient } from "@prisma/client";
import { authOptions } from "@/app/api/auth/[...nextauth]/route"; // Import your auth options

const prisma = new PrismaClient();

export async function PATCH(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { name } = body;

    if (!name) {
      return NextResponse.json({ message: "Name is required" }, { status: 400 });
    }

    // Update user in database
    const updatedUser = await prisma.user.update({
      where: { email: session.user.email },
      data: { name },
    });

    return NextResponse.json({ 
      message: "Profile updated successfully", 
      user: { name: updatedUser.name, email: updatedUser.email } 
    });

  } catch (error) {
    console.error("Profile update error:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}