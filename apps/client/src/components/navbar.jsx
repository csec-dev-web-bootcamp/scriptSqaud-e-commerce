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
    <Menubar className="p-10">
      <MenubarMenu>
        <MenubarTrigger>
          <Link href="/"> Home</Link>
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Shop</MenubarTrigger>
      </MenubarMenu>

      <MenubarMenu className="ml-10">
        <MenubarTrigger>
          <SideCart />
        </MenubarTrigger>
        <MenubarMenu>
          <MenubarTrigger>Check Out</MenubarTrigger>
          
        </MenubarMenu>
      </MenubarMenu>
    </Menubar>
  );
}
