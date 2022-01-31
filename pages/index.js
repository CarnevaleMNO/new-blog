import Head from "next/head";
import { PostCard, Categories, PostWidget, SearchBar } from "../components";
import { useEffect, useState } from "react";
import { getPosts } from "../services";

export default function Home({ posts }) {
  return (
    <>
      <div className="container mx-auto px-8 mb-8">
        <Head>
          <title>Startup Otaku</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="grid grid-cols-1 lg:grid-cols-12 md:gap-12">
          <div className="lg:col-span-8 col-span-1">
            {posts.map((post) => (
              <PostCard post={post.node} key={post.title} />
            ))}
          </div>
          <div className="lg:col-span-4 col-span-1">
            <div className="lg:sticky relative top-8">
              <PostWidget />
              <SearchBar />
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  console.log(posts)

  return {
    props: { posts },
  };
}


