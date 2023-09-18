import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const NavBar = () => {
    const [open, setOpen] = useState(false);

    // routes
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '*', name: 'Not Found' },
    ];
      

    return (
        <nav className="text-black px-5 bg-yellow-400">
            <div onClick={() => setOpen(!open)} className="md:hidden text-3xl py-5 md:py-0">
                {
                    open === true ? <AiOutlineClose></AiOutlineClose> : <AiOutlineMenu></AiOutlineMenu>
                }
                
            </div>
            <ul className={`md:flex duration-1000 absolute md:static px-5
            ${open ? 'left-4' : '-left-60'}
             bg-yellow-400 py-5`}>
                {
                    routes.map((route) => <Link  key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;