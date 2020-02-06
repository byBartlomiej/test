document.addEventListener('DOMContentLoaded', () => {

    const page = document.getElementById("scroller");
    const sections = document.querySelectorAll("section");
    let sectionIndex = 0;
    let isThrottled = false;

    document.addEventListener('mousewheel', (e) => {
        if (isThrottled) return;
        isThrottled = true;
        setTimeout(() => isThrottled = false, 300);
        const direction = e.wheelDelta < 0 ? 1 : -1;
        if (direction === 1 && sectionIndex === sections.length - 1) return;
        else if (direction === -1 && sectionIndex === 0) return;
        sectionIndex += direction;
        sections[sectionIndex].scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    })
})
