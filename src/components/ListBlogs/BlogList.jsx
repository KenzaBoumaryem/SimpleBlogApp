"use client";
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import RemoveBtn from "../RemoveBtn";
import Image from "next/image";
import { HiPencilAlt } from "react-icons/hi";
import styles from "./BlogList.module.css"
import  Pagination  from "../Pagination/Pagination";

const getBlogs = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/blogs", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch blogs");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading blogs: ", error);
  }
};
const searchByTitle = async (title) => {
  try {
    const res = await fetch(`http://localhost:3000/api/blogs?title=${title}`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error('Failed to search blogs');
    }

    return res.json();
  } catch (error) {
    console.log('Error searching blogs: ', error);
  }
};

export default function BlogsList() {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalBlogs, setTotalBlogs] = useState(0);
  const [searchQuery, setSearchQuery] = useState(''); 
  const perPage = 6; // adjusting number pages to 6

  useEffect(() => {
    const fetchBlogs = async () => {
      const { Blogs } = await (searchQuery ? searchByTitle(searchQuery) : getBlogs());
      setBlogs(Blogs);
      setTotalBlogs(Blogs.length); 
    };
    fetchBlogs();
  }, [currentPage, searchQuery]); // Including searchQuery in the dependency array

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const indexOfLastPost = currentPage * perPage;
  const indexOfFirstPost = indexOfLastPost - perPage;
  const currentBlogs = blogs.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <>
     <div className={styles.container}>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image style={{ borderRadius: '7px' }} src="/why-blog.webp" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Explore fascinating blogs and discover a world of ideas and insights.</h1>
          <p className={styles.postDesc}>
          Discover people's blogs and explore a world of ideas and insights.
        Connect with creators, share your thoughts, and engage with a community
        passionate about diverse topics and perspectives.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
      <div>
      <h4 className={`${styles.SectionTitle} tw-text-2xl tw-font-bold tw-text-center tw-dark:text-white`}>Posts</h4>
     
      <form className="tw-max-w-md tw-mx-auto">
    <label for="default-search" className="tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 tw-sr-only dark:tw-text-white">Search</label>
    <div className="tw-relative">
        <div className="tw-absolute tw-inset-y-0 tw-start-0 tw-flex tw-items-center tw-ps-3 tw-pointer-events-none">
            <svg className="tw-w-4 tw-h-4 tw-text-gray-500 dark:tw-text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input value={searchQuery}
            onChange={handleSearchInputChange} type="search" id="default-search" className="tw-block tw-w-full tw-p-4 tw-ps-10 tw-text-sm tw-text-gray-900 tw-border tw-border-gray-300 tw-rounded-lg tw-bg-gray-50 focus:tw-ring-blue-500 focus:tw-border-blue-500 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-blue-500 dark:focus:tw-border-blue-500" placeholder="Search Mockups, Logos..." required />
        <button type="submit" className="tw-text-white tw-absolute tw-end-2.5 tw-bottom-2.5 tw-bg-blue-700 tw-hover:bg-blue-800 tw-focus:tw-ring-4 tw-focus:tw-outline-none tw-focus:tw-ring-blue-300 tw-font-medium tw-rounded-lg tw-text-sm tw-px-4 tw-py-2 dark:tw-bg-blue-600 dark:hover:bg-blue-700 dark:focus:tw-ring-blue-800">Search</button>
    </div>
</form>
</div>
      <div className={styles.blogContainer}>
        {currentBlogs.map((t) => (
          <div key={t._id} className={styles.blogItem}>
           <div class="tw-max-w-sm tw-rounded tw-overflow-hidden tw-shadow-lg">
              <Image class="tw-w-full" src="/why-blog.webp" alt="" width={300} height={300} />
              <div class="tw-px-6 tw-py-4">
              <div class="tw-font-bold tw-text-xl tw-mb-2">{t.title}</div>
              </div>
              <div class="tw-flex tw-items-center tw-space-x-4">
              <Link href={`/viewBlog/${t._id}`}>     
    <button type="button" data-drawer-target="drawer-read-product-advanced" data-drawer-show="drawer-read-product-advanced" aria-controls="drawer-read-product-advanced" class="tw-py-2 tw-px-3 tw-flex tw-items-center tw-text-sm tw-font-medium tw-text-center tw-text-gray-900 tw-focus:outline-none tw-bg-white tw-rounded-lg tw-border tw-border-gray-200 tw-hover:bg-gray-100 tw-hover:text-primary-700 tw-focus:z-10 tw-focus:ring-4 tw-focus:ring-gray-200 tw-dark:focus:ring-gray-700 tw-dark:bg-gray-800 tw-dark:text-gray-400 tw-dark:border-gray-600 tw-dark:hover:text-white tw-dark:hover:bg-gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="tw-w-4 tw-h-4 tw-mr-2 tw--ml-0.5">
            <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" />
        </svg>
        Preview
    </button>
    </Link>
    <RemoveBtn id={t._id} />
    <Link href={`/editBlog/${t._id}`}>
    <HiPencilAlt size={24} />
    </Link>


 </div>
</div>
           
           

          </div>
        ))}
    
      
</div>


      <Pagination
        pageNumber={currentPage}
        setPageNumber={setCurrentPage}
        totalItem={totalBlogs}
        perPage={perPage}
        showItem={5}
      />
      </div>
    </>
  );
}

