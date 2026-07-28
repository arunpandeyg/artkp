import connectToMongoDB from "@/lib/db/connectToMongoDB";
import Profile from "@/models/profile.model";
import { NextResponse } from "next/server";



export async function PUT(request, { params }) {
  const { id } = params;
  const { 
    image,
    title,
    name,
    email,
    password,
    phoneNumber,
    income,
    description, } = await request.json();
  await connectToMongoDB();
  await Profile.findByIdAndUpdate(id, { 
    image,
    title,
    name,
    email,
    password,
    phoneNumber,
    income,
    description,});
  return NextResponse.json({ message: "Profile updated" }, { status: 200 });
}

export async function PATCH(request, { params }) {
  const { id } = params;
  const { 
    image,
    title,
    name,
    email,
    password,
    phoneNumber,
    income,
    description, } = await request.json();
  await connectToMongoDB();
  await Profile.findByIdAndUpdate(id, { 
    image,
    title,
    name,
    email,
    password,
    phoneNumber,
    income,
    description,});
  return NextResponse.json({ message: "Profile updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectToMongoDB();
  const profile = await Profile.findOne({ _id: id });
  return NextResponse.json({ profile }, { status: 200 });
}

