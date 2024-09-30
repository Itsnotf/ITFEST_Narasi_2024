import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";

export default function Nav(props) {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        "Beranda",
        "Komunitas",
        "Cerita",
    ];

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} className={`font-jost transition-all duration-500 ease-in-out w-0 h-[60px] bg-white rounded-full ${props.isScrolled ? 'w-0' : 'md:w-[40%]'
                        }`}>
            <NavbarContent >
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden bg-white w-[50px] h-[50px] rounded-full z-50"
                />
            </NavbarContent>

            <NavbarContent className={`hidden md:flex gap-4 md:gap-5 lg:gap-20 transition-all duration-300 ${props.isScrolled ? 'opacity-0' : 'opacity-100'
                            }`} justify="center">
                <NavbarItem isActive>
                    <Link className="text-blue-500" href="#" aria-current="page" >
                        Beranda
                    </Link>
                </NavbarItem>
                <NavbarItem >
                    <Link href="komunitas" className="text-[#949494]" >
                        Komunitas
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className="text-[#949494]" href="#">
                        Cerita
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent>
            </NavbarContent>

            <NavbarMenu className="z-30 top-0">
                <div className="mt-24">
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            className={`w-full m-2 ${index === 0 ? "text-blue-500" :   "text-[#949494]"}`}
                            href="#"
                            size="lg"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
                </div>
            </NavbarMenu>
        </Navbar>
    );
}
