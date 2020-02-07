class Swiper {
    constructor() {
        this.initialX = null;
        this.initialY = null;
        document.addEventListener('touchstart', this.startTouch);
        document.addEventListener('touchmove', this.startMove);
    }

    startTouch(e) {
        e.preventDefult();
        this.initialX = e.touches[0].clientX;
        this.initialY = e.touches[0].clientY;
    }
    startTouch(e) {
        if (!this.initialX || !this.initialY) return;
        const currentX = e.touches[0].clientX;
        const currentY = e.touches[0].clientY;

        const diffX = this.initialX - currentX;
        const diffy = this.initialY - currentY;

    }
}
new Swiper();