"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Input from "./UI/Input";
import TextArea from "./UI/TextArea";
import Button from "./UI/Button"
import Image from "next/image";

export default function EditTopicForm({ id, title, content }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newContent, setNewContent] = useState(content);
  const [error, setError] = useState(null); // State to hold error

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
      setError(error.message); // Set error state with error message
    }
  };
 
  return (
    <div className="tw-flex tw-items-center">
    <div className="tw-w-1/3">
    <Image style={{ borderRadius: '7px' }} src="/tt.webp" alt="" class="tw-w-full"  width={300} height={100}/>
    </div>
    <div className="tw-w-2/3"> 
    <form className="tw-max-w-sm tw-mx-auto" onSubmit={handleSubmit}>
     <Input name="Blog Title" value={title} onChange={(e) => setTitle(e.target.value)} />
     <TextArea name="Blog Content" value={content} onChange={(e) => setContent(e.target.value)} />
     <Button name="Add Blog"/>
     {error && <p className="error-message">{error}</p>}
  </form>
  </div>
  
  </div>
    
    



  );
}
