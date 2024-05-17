"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditTopicForm({ id, title, content }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newContent, setNewContent] = useState(content);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/blogs/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newContent }),
      });

      if (!res.ok) {
        throw new Error("Failed to update blog");
      }

      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Blog Title"
      />

      <input
        onChange={(e) => setNewContent(e.target.value)}
        value={newContent}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Blog Content"
      />

      <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
        Update Blog
      </button>
    </form>
  );
}
