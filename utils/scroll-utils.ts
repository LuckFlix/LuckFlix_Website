export function smoothScrollTo(elementId: string): void {
    const element = document.getElementById(elementId);
    if (!element) return;

    const offsetTop = element.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
    });
}
