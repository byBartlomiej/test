document.addEventListener('DOMContentLoaded', () => {
    const scroller = new Scroller('scroller');
    document.addEventListener('wheel', (e) => scroller.scrollPage(e));

    document.addEventListener('swipeUp', () => scroller.scrollDirection(1))
    document.addEventListener('swipeDown', () => scroller.scrollDirection(-1))
});