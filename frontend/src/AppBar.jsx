import React, { useState } from "react";
import './AppBar.css'
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Button } from "@nextui-org/react";


export default function AppBar() {

return (
    <>
//     <header className="app-bar">
//         <nav className="app-nav">
//             <ul>
//                 <Button
                variant="Light"
                >
                    <li><a className="elements"href="#">Home</a></li>
                </Button>
                <Button
                variant="Bordered"
                >
                    <li><a href="#">About</a></li>
                </Button>
                <Button
                variant="Bordered"
                >
                    <li><a href="#">Contact</a></li>
                </Button>
                <Dropdown>
                    <DropdownTrigger>
                        <Button
                            variant="Bordered"
                            >
                            <li><a href="#">Account</a></li>
                            </Button>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Static Actions">
                        <DropdownItem key="sign-in">Sign Out!</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </ul>
        </nav>
    </header>

</>);
}