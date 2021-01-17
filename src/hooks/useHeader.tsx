import { useEffect, useMemo, useState, useCallback, useRef } from 'react';
import Sections from '../static/data/sections.json';

export function useHeaderActive(): boolean {
    const [headerActive, setHeaderActive] = useState<boolean>(false);
    useEffect(() => {
        const header = document.getElementById('header');
        const headerHeight = header?.getBoundingClientRect().height;
        function handleHeaderScroll() {
            if (headerHeight) {
                if (window.scrollY > headerHeight) {
                    setHeaderActive(true);
                } else {
                    setHeaderActive(false);
                }
            }
        }
        window.addEventListener('scroll', () => handleHeaderScroll());
        return window.removeEventListener('scroll', () => handleHeaderScroll());
    }, []);
    return headerActive;
}

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
};
const sections = Sections.map((section) => section.toLocaleLowerCase());

export function useHeaderScroll(): void {
    const navList = useRef<NodeListOf<Element> | null>(null);
    const sectionList = useRef<HTMLElement[]>([]);
    const selectedNavItem = useRef<Element | null>(null);

    const activeNavItem = (selected: Element) => {
        selectedNavItem.current?.classList.remove('active');
        selectedNavItem.current = selected;
        selectedNavItem.current?.classList.add('active');
    };

    const callback = useCallback((entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
            const { isIntersecting, intersectionRatio, boundingClientRect } = entry;
            if (!isIntersecting && intersectionRatio > 0) {
                const { id } = entry.target;
                const index = sections.indexOf(id);
                const selectedNavIndex: number = boundingClientRect.y < 0 ? index + 1 : index - 1;
                if (navList.current) {
                    activeNavItem(navList.current[selectedNavIndex]);
                }
            }
        });
    }, []);

    const observer = useMemo(() => new IntersectionObserver(callback, options), [callback]);

    useEffect(() => {
        navList.current = document.querySelectorAll('.navbar-menu-item');
        sections.forEach((section) => {
            const sectionElement = document.getElementById(section);
            if (sectionElement) {
                sectionList.current.push(sectionElement);
            }
        });
        selectedNavItem.current = navList.current[0];
        sectionList.current.forEach((section) => observer.observe(section));
    }, [observer]);

    useEffect(() => {
        const scrollController = () => {
            if (window.scrollY === 0) {
                selectedNavItem.current?.classList.remove('active');
            }
        };
        window.addEventListener('scroll', () => scrollController());
        return window.removeEventListener('scroll', () => scrollController());
    }, []);
}
