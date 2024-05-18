"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Input from "../../components/UI/Input";
import TextArea from "../../components/UI/TextArea";
import Button from "../../components/UI/Button"

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
    <div className="tw-flex tw-items-center">
    <div className="tw-w-1/3">
    <Image style={{ borderRadius: '7px' }} src="/tt.webp" alt="" class="tw-w-full"  width={300} height={100}/>
    </div>
    <div className="tw-w-2/3"> 
    <form className="tw-max-w-sm tw-mx-auto" onSubmit={handleSubmit}>
     <Input name="Blog Title" value={title} onChange={(e) => setTitle(e.target.value)} />
     <TextArea name="Blog Content" value={content} onChange={(e) => setContent(e.target.value)} />
     <Button name="Add Blog"/>
  </form>
  </div>
  
  </div>
    
   
 
  );

}
