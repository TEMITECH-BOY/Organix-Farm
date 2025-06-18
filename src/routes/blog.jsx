import React from "react";
import { blogData } from "../Utils/data";
import { CgProfile } from "react-icons/cg";
import { BiCommentEdit } from "react-icons/bi";

const Blog = () => {
  return (
    <section className="w-full py-20 px-4 bg-white">
      {/* Header */}
      <div className="w-full max-w-4xl mx-auto text-center mb-10">
        <h1 className="text-xs text-green-300 mb-2">-Read Our Blog-</h1>
        <h2 className="text-lg md:text-xl text-green-700 mb-3">
          Our Latest Post
        </h2>
        <p className="text-sm text-gray-500">
          The liber tempor cum soluta nobis eleifend option congue doming quod
          mazim
        </p>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {blogData.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-md overflow-hidden"
          >
            <img
              src={item.image}
              alt="blog"
              className="w-full h-48 object-cover"
            />
            <div className="p-4 flex flex-col gap-2">
              <h3 className="text-sm text-green-800 font-semibold">
                {item.description}
              </h3>
              <div className="flex flex-wrap items-center text-gray-500 text-xs gap-3">
                <span>{item.date}</span>
                <span className="flex items-center gap-1">
                  <CgProfile />
                  {item.help}
                </span>
                <span className="flex items-center gap-1">
                  <BiCommentEdit />
                  {item.comments}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
