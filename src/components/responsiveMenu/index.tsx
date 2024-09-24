import React, { useState } from "react";
import { NavLink } from "react-router-dom";

// Define the structure for Menu and Submenu items
interface Submenu {
  title: string;
  path?: string;
  submenus?: Submenu[];
}

interface MenuItem {
  title: string;
  submenus?: Submenu[];
}

const ResponsiveMenu: React.FC = () => {
  // Define the type for openMenu state
  const [openMenu, setOpenMenu] = useState<Record<string, boolean>>({});

  // Function to toggle open/close for each menu or submenu
  const toggleMenu = (key: string) => {
    setOpenMenu((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const activeClass = "bg-gray-700 text-white";

  // Demo data structure for multiple levels of nested submenus
  const menuData: MenuItem[] = [
    {
      title: "Menu 1",
      submenus: [
        {
          title: "Submenu 1.1",
          path: "/submenu-1-1",
        },
        {
          title: "Submenu 1.2",
          submenus: [
            { title: "Submenu 1.2.1", path: "/submenu-1-2-1" },
            { title: "Submenu 1.2.2", path: "/submenu-1-2-2" },
          ],
        },
        {
          title: "Submenu 1.3",
          path: "/submenu-1-3",
        },
      ],
    },
    {
      title: "Menu 2",
      submenus: [
        { title: "Submenu 2.1", path: "/submenu-2-1" },
        { title: "Submenu 2.2", path: "/submenu-2-2" },
      ],
    },
    {
      title: "Menu 3",
      submenus: [
        {
          title: "Submenu 3.1",
          submenus: [
            { title: "Submenu 3.1.1", path: "/submenu-3-1-1" },
            { title: "Submenu 3.1.2", path: "/submenu-3-1-2" },
          ],
        },
        { title: "Submenu 3.2", path: "/submenu-3-2" },
      ],
    },
  ];

  // Dynamically calculate inline padding style based on level
  const getPaddingStyle = (level: number): React.CSSProperties => {
    return { paddingLeft: `${1 * (level + 1)}rem` }; // Increase padding by 4rem for each level
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
            <li key={key}>
              {hasSubmenus ? (
                // If submenu has child submenus, use button to toggle submenus
                <>
                  <button
                    className="w-full border-b text-left px-4 py-2 hover:bg-gray-700"
                    style={paddingStyle}
                    onClick={() => toggleMenu(key)}
                  >
                    {submenu.title}
                  </button>
                  {openMenu[key] &&
                    renderSubmenus(submenu.submenus!, key, level + 1)}
                </>
              ) : (
                // If submenu has no children, use NavLink for navigation
                <NavLink
                  to={submenu.path ?? "#"}
                  style={paddingStyle}
                  className={({ isActive }) =>
                    isActive
                      ? `${activeClass} px-4 py-2`
                      : `hover:bg-gray-700 border-b px-4 py-2 w-full`
                  }
                >
                  {submenu.title}
                </NavLink>
              )}
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div className="h-screen w-64 bg-gray text-black">
      <ul className="space-y-2">
        {menuData.map((menu, index) => {
          const key = `menu-${index}`;
          const hasSubmenus = menu.submenus && menu.submenus.length > 0;

          return (
            <li key={key}>
              <button
                className="w-full  text-left border-b px-4 py-2 hover:bg-zinc-50"
                style={getPaddingStyle(0)} // Padding for the first level
                onClick={() => toggleMenu(key)}
              >
                {menu.title}
              </button>
              {openMenu[key] &&
                hasSubmenus &&
                renderSubmenus(menu.submenus!, key, 1)}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ResponsiveMenu;
