import { useState, useEffect } from "react";

interface DropdownComponentProps {
  title: string;
  subTitle: string;
}

export const DropdownComponent = ({
  title,
  subTitle,
}: DropdownComponentProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target instanceof Node)) {
        return;
      }
      const dropdown = document.getElementById("dropdown");
      if (dropdown && !dropdown.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" id="dropdown">
      <button
        className=" transition duration-300 bg-none hover:bg-gray-100
        text-lg text-gray-800 font-semibold py-2 px-2 rounded-md focus:outline-none "
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        {title}
      </button>
      {dropdownOpen && (
        <div className="absolute mt-2 left-0 z-50 w-48 rounded-md bg-white">
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
          >
            {subTitle}
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
          >
            Action 2
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
          >
            Action 3
          </a>
        </div>
      )}
    </div>
  );
};
