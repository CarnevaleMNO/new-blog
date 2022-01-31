import Link from "next/link";

export default function PostCard({ post }) {
  let newDate = new Date(post.createdAt).toLocaleDateString();

  return (
    // <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
    //   <div className="relative overflow-hidden shadow-md pb-80 mb-6">
    //     <img
    //       className="object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"
    //       src={post.featuredImage.url}
    //       alt={post.title}
    //     />
    //   </div>
    //   <h1 className="transition duration-700 text-center mb-8 cursor-pointer hover:text-pink-600 text-3xl font-semibold">
    //     <Link href={`/post/${post.slug}`}>{post.title}</Link>
    //   </h1>
    //   <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
    //     <div className="flex items-cetner justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
    //       <img
    //         src={post.author.photo.url}
    //         alt={post.author.name}
    //         width="25px"
    //         className="rounded-full"
    //       />
    //       <p className="inline align-middle text-gray-700 ml-2 mt-1">
    //         {post.author.name}
    //       </p>
    //     </div>
    //     <div className="flex justify-center font-medium text-gray-700">
    //       <FaCalendarAlt className="mt-1" />
    //       <span className="ml-2">{newDate}</span>
    //     </div>
    //   </div>
    //   <p className="text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8">{post.excerpt}</p>
    //   <div className="text-center">
    //     <Link href={`/post/${post.slug}`}>
    //       <span className="transition duration-500 transform hover:-translate-y-1 inline-block bg-pink-600 text-white font-medium rounded-full text-black px-8 py-3 cursor-pointer">Continue Reading...</span>
    //     </Link>
    //   </div>
    // </div>
    <div className="pb-12 mb-8 border-b leading-7">
      <div className="relative mb-6">
        <img
          className="object-top h-full rounded-t-lg mx-auto"
          src={post.featuredImage.url}
          alt={post.title}
        />
      </div>
      <div className="">
      
        <div className="flex items-center mb-8">
        <h1 className="mr-2 text-4xl font-semibold">{post.title}</h1>
          <div className="flex">
            <p className="inline align-middle text-gray-700 mt-3">
              {post.author.name}
            </p>
            <p className="text-gray-700 ml-2 mt-3">{newDate}</p>
          </div>
        </div>
        <p>{post.excerpt}</p>
      </div>
      <div className="">
      <Link href={`/posts/${post.slug}`}>
      <button class="bg-transparent hover:bg-cyan-500 text-cyan-700 font-semibold hover:text-white py-2 px-4 border border-cyan-500 hover:border-transparent rounded my-8">
          Read more...
        </button>
      </Link>
        
      </div>
      <div className="py-2 flex">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #photography
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #travel
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #winter
        </span>
      </div> 
    </div>
  );
}

