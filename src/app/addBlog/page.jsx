"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !content) {
      alert("Title and content  are required.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/blogs", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, content}),
      });

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to create a blog");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Title"
      />

      <input
        onChange={(e) => setContent(e.target.value)}
        value={content}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Blog Content"
      />

      <button
        type="submit"
        className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
      >
        Add Blog
      </button>
    </form>
  );
}
