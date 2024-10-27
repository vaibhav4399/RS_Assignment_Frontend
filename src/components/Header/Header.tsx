import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

import "./Header.css";
import { useEffect, useState } from "react";
import { handleResize } from "../../hooks/useHandlers";

library.add(faBars, faXmark);

const Header = () => {

    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        window.addEventListener('resize', () => handleResize(setIsClicked));

        return () => {
            window.removeEventListener('resize', () => handleResize(setIsClicked));
        }

    },[])

    return (
        <header>
            <div className="header-1">
                <div>Help</div>
                <div>Orders & Returns</div>
                <div>Hi Vaibhav2</div>
            </div>

            <div className="header-2">
                <div className="logo_section">
                    <FontAwesomeIcon onClick={() => setIsClicked(!isClicked)} className={`text-xl md:hidden`} icon={isClicked ? faXmark: faBars } />
                    <div className="logo">ECOMMERCE</div>
                </div>
                
                <nav className={isClicked ? "mobile": "desktop"}>
                    <ul>
                        <li>Categories</li>
                        <li>Sale</li>
                        <li>Clearance</li>
                        <li>New Stock</li>
                        <li>Trending</li>
                    </ul>
                </nav>

                <div className="icons">
                    <MagnifyingGlassIcon className="h-6 w-6 text-black" />
                    <ShoppingCartIcon className="h-6 w-6 text-black" />
                </div>
            </div>

        </header>
    )
}

export default Header;