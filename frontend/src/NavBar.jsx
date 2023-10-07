import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger} from "@nextui-org/react";
import { Link as DeafultLink } from 'react-router-dom'
import React from "react";
import './NavBar.css'
import './Root.css'
import Filter from "./components/ui/Filter";

export default function Navbars(){
    return (
        <main className="dark text-foreground bg-background">
        <div className="customNavBar">
        <Navbar shouldHideOnScroll>
            
        <NavbarBrand >
        <p className="font-bold text-inherit">CarVendr</p>
        </NavbarBrand>
        <NavbarContent className="hidden md:flex gap-4" justify="space-between">
        <NavbarItem className="position-relative">
            <Filter />
        </NavbarItem>
        <NavbarItem>
        <DeafultLink className='defaultlink' to={{pathname: '/home'}}>
            Home
            </DeafultLink>
        </NavbarItem>
        <NavbarItem isActive>
            <Link href="#" aria-current="page">
            About
            </Link>
        </NavbarItem>
        <NavbarItem>
            <Link color="foreground" href="#">
            Contact
            </Link>
        </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
                <Dropdown>
                    <DropdownTrigger>
                        <Button
                            as={Link}
                            color="default"
                            href="#"
                            variant="light"
                            >
                            <li><a href="#">Account</a></li>
                            </Button>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Static Actions">
                        <DropdownItem key="randoItem1">My Account</DropdownItem>
                        <DropdownItem key="randoItem2">My Posts</DropdownItem>
                        <DropdownItem key="sign-out">Sign Out!</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
        </NavbarItem>
        <NavbarItem>
            <Dropdown>
                <DropdownTrigger>
            <Button as={Link} color="default" href="#" variant="light">
            Sign out
            </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
                        <DropdownItem key="sign-out">Are you sure you want to sign out?</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
        </NavbarItem>
        </NavbarContent>
        </Navbar>
        </div>
        </main>
    );
}
