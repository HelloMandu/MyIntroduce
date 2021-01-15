import { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import Logo from '../../static/images/logo.png';
import './Header.scss';

function Hamburger() {
    return (
        <div className="hamburger">
            <div className="bar bar1"></div>
            <div className="bar bar2"></div>
            <div className="bar bar3"></div>
        </div>
    );
}

const navList: string[] = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

function Header() {
    const [headerActive, setHeaderActive] = useState<boolean>(false);
    const headerRef = useRef<HTMLElement>(null);
    useEffect(() => {
        const headerHeight: number | undefined = headerRef.current?.getBoundingClientRect().height;
        function handleHeaderScroll() {
            if (headerHeight) {
                if (window.scrollY > headerHeight) {
                    setHeaderActive(true);
                } else {
                    setHeaderActive(false);
                }
            }
        }
        window.addEventListener('scroll', () => {handleHeaderScroll()});
        return window.removeEventListener('scroll', () => {handleHeaderScroll()});
    }, []);
    return (
        <header id="header" className={cn({ headerActive })} ref={headerRef}>
            <img className="logo" src={Logo} alt="logo" />
            <nav className="nav-container">
                <ul className="navbar-menu">
                    {navList.map((navitem, index) => (
                        <li className="navbar-menu-item" data-link={navitem.toLowerCase()} key={index}>
                            {navitem}
                        </li>
                    ))}
                </ul>
                <Hamburger />
            </nav>
        </header>
    );
}

export default Header;
