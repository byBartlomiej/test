document.addEventListener('DOMContentLoaded', () => {
    const scroller = new Scroller('scroller');
    document.addEventListener('wheel', (e) => scroller.scrollPage(e));
});