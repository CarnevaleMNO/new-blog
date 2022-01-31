import {FaSearch} from "react-icons/fa"

export default function SearchBar() {
  return (
    <div className="flex items-center justify-center mb-12">
    <div className="flex border-2 rounded">
        <input type="text" className="px-4 py-2 w-full outline-none" placeholder="Search..." />
        <button className="flex items-center justify-center px-4 border-l">
            <FaSearch className="text-gray-600" />
        </button>
    </div>
</div>
  );
}
