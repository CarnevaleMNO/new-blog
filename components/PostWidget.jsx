import { useState, useEffect } from "react";
import Link from "next/link";

import { getRecentPosts, getRelatedPosts } from "../services";

export default function PostWidget({ categories, slug }) {
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (slug) {
      getRelatedPosts(categories, slug).then((result) => setRelated(result));
    } else {
      getRecentPosts().then((result) => setRelated(result));
    }
  }, [slug]);

  console.log(related);

  return (
    <div className="bg-white shadow-lg rounded-lg p-12 mb-12">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        {slug ? "Related Posts" : "Recent Posts"}
      </h3>
      {related.map((post) => (
        <div key={post.title} className="flex items-center w-full mb-4">
          <img
            src={post.featuredImage.url}
            alt={post.title}
            width="60px"
            className="align-middle rounded-full"
          />
          <div className="flex-grow ml-4">
            <p className="text-gray-500 font-xs">
              {new Date(post.createdAt).toLocaleDateString()}
            </p>
            <Link href={`/posts/${post.slug}`} key={post.title} className="text-md">
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
