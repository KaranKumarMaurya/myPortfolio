'use client'; // Mark as Client Component

import { personalData } from "@/utils/data/personal-data";
import BlogCard from "../components/homepage/blog/blog-card";
import { useState, useEffect } from "react";

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(
          `https://dev.to/api/articles/latest?username=${personalData.devUsername}`
        );

        if (!res.ok) {
          throw new Error(`Failed to fetch blogs: ${res.status}`);
        }

        const data = await res.json();
        setBlogs(data.filter(blog => blog?.cover_image));
      } catch (err) {
        console.error("Error fetching blogs:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []); // Empty dependency array means this runs once on mount

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-white">Loading blogs...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-red-500">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="py-8">
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-2xl rounded-md">
            All Blogs
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      {blogs.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10">
          {blogs.map((blog, i) => (
            <BlogCard blog={blog} key={`${blog.id}-${i}`} />
          ))}
        </div>
      ) : (
        <div className="text-center text-white text-lg py-12">
          No blogs found. Check back later!
        </div>
      )}
    </div>
  );
}