import { useCallback, useState } from 'react';
import cn from 'classnames';
import SectionList from '../../static/data/sections.json';
import { scrolltoLink } from '../../lib/scroll';
import Logo from '../../static/images/logo.png';
import './Header.scss';

interface HamburgerProps {
    onToggle: () => void;
}

function Hamburger({ onToggle }: HamburgerProps) {
    return (
        <div className="hamburger" onClick={onToggle}>
            <div className="bar bar1"></div>
            <div className="bar bar2"></div>
            <div className="bar bar3"></div>
        </div>
    );
}

interface HeaderProps {
    active: boolean;
}

function Header({ active }: HeaderProps) {
    const [activeHamberger, setActiveHamberger] = useState<boolean>(false);
    const toggleHamburger = useCallback(() => setActiveHamberger((state) => !state), []);

    const handleScroll = useCallback((e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        const { link } = e.currentTarget.dataset;
        if (link) {
            scrolltoLink(link);
        }
    }, []);
    return (
        <header id="header" className={cn({ headerActive: active, on: activeHamberger })}>
            <img className="logo" src={Logo} alt="logo" />
            <nav className={cn('nav-container', { on: activeHamberger })}>
                <ul className="navbar-menu">
                    {SectionList.map((navitem, index) => (
                        <li className="navbar-menu-item" data-link={navitem.toLowerCase()} key={index} onClick={handleScroll}>
                            {navitem}
                        </li>
                    ))}
                </ul>
                <Hamburger onToggle={toggleHamburger} />
            </nav>
        </header>
    );
}

export default Header;
