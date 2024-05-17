import connectMongoDB from "../../../libs/mongodb";
import Blog from "../../../models/blog";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { title, content} = await request.json();
  await connectMongoDB();
  await Blog.create({ title, content });
  return NextResponse.json({ message: "Blog Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const Blogs = await Blog.find();
  return NextResponse.json({ Blogs });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Blog.findByIdAndDelete(id);
  return NextResponse.json({ message: "Blog deleted" }, { status: 200 });
}
