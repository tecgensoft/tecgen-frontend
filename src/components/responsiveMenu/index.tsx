import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { menuData } from "./data";
import { FiX } from "react-icons/fi"; // Close icon
import { GoPlus } from "react-icons/go";
import { RiSubtractLine } from "react-icons/ri";

// Define the structure for Menu and Submenu items
interface Submenu {
  title: string;
  path?: string;
  submenus?: Submenu[];
}

const ResponsiveSideBarMenu: React.FC = ({ isMenuOpen, toggleSidebar }) => {
  const [openMenu, setOpenMenu] = useState<Record<string, boolean>>({});

  // Function to toggle open/close for each menu or submenu
  const toggleMenu = (key: string) => {
    setOpenMenu((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  // Toggle sidebar visibility

  const activeClass = "text-red-500"; // Update the active class to match the red color from the image

  // Dynamically calculate inline padding style based on level
  const getPaddingStyle = (level: number): React.CSSProperties => {
    return { paddingLeft: `${1 * (level + 1)}rem` }; // Adjust padding for nested levels
  };

  // Recursive function to render nested menus
  const renderSubmenus = (
    submenus: Submenu[],
    parentKey: string,
    level: number
  ): JSX.Element => {
    return (
      <ul className="space-y-1">
        {submenus.map((submenu, subIndex) => {
          const key = `${parentKey}-${subIndex}`;
          const hasSubmenus = submenu.submenus && submenu.submenus.length > 0;
          const paddingStyle = getPaddingStyle(level); // Get padding style based on the level

          return (
            <li
              key={key}
              className="border-b border-zinc-200 last:border-none" // Add a bottom border except for the last item
            >
              {hasSubmenus ? (
                <>
                  <button
                    className="w-full flex justify-between text-left px-4 py-2 hover:bg-gray-100"
                    style={paddingStyle}
                    onClick={() => toggleMenu(key)}
                  >
                    <span>{submenu.title}</span>
                    <span>
                      {openMenu[key] ? (
                        <RiSubtractLine className="text-2xl text-gray" />
                      ) : (
                        <GoPlus className="text-2xl text-gray" />
                      )}
                    </span>
                  </button>
                  {openMenu[key] &&
                    renderSubmenus(submenu.submenus!, key, level + 1)}
                </>
              ) : (
                <NavLink
                  to={submenu.path ?? "#"}
                  style={paddingStyle}
                  className={({ isActive }) =>
                    isActive
                      ? `${activeClass} px-4 py-2 w-full flex justify-between`
                      : `hover:bg-gray-100 px-4 py-2 w-full flex justify-between`
                  }
                >
                  <span>{submenu.title}</span>
                </NavLink>
              )}
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <>
      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 "
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed overflow-y-scroll z-[9999999]  top-0 left-0 h-full w-64 bg-white  transform text-black ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out shadow-lg`}
      >
        {/* Close button */}
        <div className="flex justify-end p-4">
          <button onClick={toggleSidebar}>
            <FiX className="text-2xl" />
          </button>
        </div>

        {/* Sidebar content */}
        <nav className=" space-y-4  ">
          <ul className="space-y-2">
            {menuData.map((menu, index) => {
              const key = `menu-${index}`;
              const hasSubmenus = menu.submenus && menu.submenus.length > 0;

              return (
                <li
                  key={key}
                  className="border-b border-zinc-200 last:border-none" // Add a bottom border except for the last item
                >
                  <button
                    className="w-full flex justify-between text-left px-4 py-2 hover:bg-gray-100"
                    style={getPaddingStyle(0)} // Padding for the first level
                    onClick={() => toggleMenu(key)}
                  >
                    <span>{menu.title}</span>
                    <span>
                      {openMenu[key] ? (
                        <RiSubtractLine className="text-2xl text-gray" />
                      ) : (
                        <GoPlus className="text-2xl text-gray" />
                      )}
                    </span>
                  </button>
                  {openMenu[key] &&
                    hasSubmenus &&
                    renderSubmenus(menu.submenus!, key, 1)}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Burger menu button */}
    </>
  );
};

export default ResponsiveSideBarMenu;
