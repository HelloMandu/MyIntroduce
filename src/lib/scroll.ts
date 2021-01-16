export function scrolltoLink(link: string): void {
    const scrollTo = document.getElementById(link);
    scrollTo?.scrollIntoView({ behavior: "smooth" });
};