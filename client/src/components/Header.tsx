import React from "react";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full p-4 flex justify-between items-center">
      <div className="text-3xl font-bold cursor-pointer">
        <Link to="/">QueryQuest</Link>
      </div>
      <div>
        <NavigationMenu>
          <NavigationMenuList className="flex gap-4 text-lg">
            <NavigationMenuLink asChild>
              <Link
                to="/problems"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
              >
                Problems
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                to="/about"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
              >
                About
              </Link>
            </NavigationMenuLink>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="w-8 h-8 rounded-full bg-gray-800"></div>
    </div>
  );
};

export default Header;
