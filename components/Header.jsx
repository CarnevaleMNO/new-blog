import { useState, useContext } from "react";
import Link from "next/link";
import { Transition } from "@headlessui/react";

const categories = [
  { name: "webdev", slug: "webdev" },
  { name: "react", slug: "react" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full flex justify-between border-sky-400 py-8">
        <div className="w-8/12">
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl text-white">
              Startup Otaku
            </span>
          </Link>
        </div>
        <div className="hidden md:contents">
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className="mt-3 text-white font-semibold cursor-pointer">
                {category.name}
              </span>
            </Link>
          ))}
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
              <a
                href="#"
                className="hover:bg-gray-700 text-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Startup Otaku
              </a>

              {categories.map((category) => (
                <Link key={category.slug} href={`/category/${category.slug}`}>
                  <span className="text-gray-700 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer">
                    {category.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </Transition>
    </div>
  );
}
