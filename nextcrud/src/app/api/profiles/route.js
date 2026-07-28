import connectToMongoDB from "@/lib/db/connectToMongoDB.js";
import Profile from "@/models/profile.model.js";

export async function POST(request) {
  const {
    image,
    title,
    name,
    email,
    password,
    phoneNumber,
    income,
    description,
  } = await request.json();
  await connectToMongoDB();
  await Profile.create({
    image,
    title,
    name,
    email,
    password,
    phoneNumber,
    income,
    description,
  });
  return new Response("Profile created successfully", { status: 201 });
}
export async function GET(request) {
  await connectToMongoDB();
  const profiles = await Profile.find();
  return new Response(JSON.stringify(profiles), { status: 200 });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectToMongoDB();
  await Profile.findByIdAndDelete(id);
  return new Response("Profile deleted successfully", { status: 200 });
}

