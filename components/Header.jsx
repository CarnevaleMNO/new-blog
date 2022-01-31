import { useState, useContext, useEffect } from "react";
import Link from "next/link";
import { Transition } from "@headlessui/react";
import { getCategories } from "../services";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full flex justify-between border-cyan-500 py-8">
        <div className="w-8/12">
          <Link href="/">
            <span className="transition duration-700 text-center cursor-pointer hover:text-cyan-500 text-4xl font-bold">
              Startup Otaku
            </span>
          </Link>
        </div>
        <div className="hidden md:contents">
          <Link href="/about">
              <span className="cursor-pointer mt-3 font-semibold">About Us</span>
          </Link>
          <Link href="/contact">
              <span className="cursor-pointer mt-3 font-semibold">Contact</span>
          </Link>
          <Link href="/startups">
              <span className="cursor-pointer mt-3 font-semibold">Startups</span>
          </Link>
        </div>
        <div className="flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {!isOpen ? (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      <div className="hidden md:flex md:justify-evenly my-6">
      {categories.map((category) => (
        <Link key={category.slug} href={`/category/${category.slug}`}>
          <span className="cursor-pointer hover:text-cyan-500">
            {category.name}
          </span>
        </Link>
      ))}
      </div>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="md:hidden" id="mobile-menu">
            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="/"
                className="block px-3 py-2 rounded-md text-base font-medium"
              >
                Startup Otaku
              </Link>

               <Link href="/about"><span className="text-gray-700 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer">About Us</span></Link>
               <Link href="/contact"><span className="text-gray-700 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer">Contact Us</span></Link>
            </div>
          </div>
        )}
      </Transition>
    </div>
  );
}
