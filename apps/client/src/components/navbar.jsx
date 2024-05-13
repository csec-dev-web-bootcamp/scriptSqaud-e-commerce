
import Link from "next/link";
import SideCart from "./sidecart";
import Slide from "./slide";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "./ui/menubar";

export default function NavBar() {

  return (
    <Menubar className="p-6">
      <MenubarMenu>
        <MenubarTrigger>
          <Link href="/">Logo</Link>
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="flex-shrink-0 flex items-center">
        
            <input
              type="text"
              placeholder="Search..."
              className="py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-black"
            />
            <select 
            className="text-white hover:bg-gray-700 p-2 rounded-md bg-transparent border-none focus:outline-none" 
            id="category"
        >
            <option value="all">All category</option>
              <option value="electronics">Electronics</option>
              <option value="women-clothing">Women's Clothing</option>
              <option value="men-clothing">Men's Clothing</option>
            </select>
            <button className="ml-2 bg-black text-white px-4 py-2 rounded-md  focus:outline-none ">
              Search
            </button>
            </MenubarTrigger>
        
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Shop</MenubarTrigger>
      </MenubarMenu>

      <MenubarMenu className="ml-6">
        <MenubarTrigger>
          <SideCart />
        </MenubarTrigger>
        <MenubarMenu>
          <MenubarTrigger>
            {" "}
            <Link href="/checkout"> Checkout</Link>
          </MenubarTrigger>
        </MenubarMenu>
      </MenubarMenu>
    </Menubar>
  );
}
