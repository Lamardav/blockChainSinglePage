export default (function (): unknown {
    const fontSize = 16;

    const widthDesktop = 1440;
    const widthLaptop = 1280;
    const widthTablet = 958;
    const widthMobileL = 600;
    const widthMobileS = 360;

    const resizeEvt =
    "orientationchange" in window ? "orientationchange" : "resize";
    const recalc = function () {
        const appWidth = window.innerWidth;
        if (!appWidth) {
            return;
        }

        if (appWidth >= widthLaptop && appWidth < widthDesktop) {
            document.documentElement.style.fontSize = `${fontSize * (appWidth / widthDesktop)}px`;
        } else if (appWidth >= widthTablet && appWidth < widthLaptop) {
            document.documentElement.style.fontSize = `${fontSize * (appWidth / widthTablet)}px`;
        } else if (appWidth >= widthMobileL && appWidth < widthTablet) {
            document.documentElement.style.fontSize = `${fontSize * (appWidth / widthMobileL)}px`;
        } else if (appWidth < widthMobileL) {
            document.documentElement.style.fontSize = `${fontSize * (appWidth / widthMobileS)}px`;
        } else {
            document.documentElement.style.fontSize = `${fontSize}px`;
        }
    };


    if (!document.addEventListener) return;
    window.addEventListener(resizeEvt, recalc, false);
    document.addEventListener("DOMContentLoaded", recalc, false);
})();
