document.addEventListener("DOMContentLoaded", () => {
    const heroWrapper = document.getElementById("hero-image-wrapper");
    function handleScroll() {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 0) {
            heroWrapper.classList.add("scrolled");
        } else {
            heroWrapper.classList.remove("scrolled");
        }
    }
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
    };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("is-visible");
                }, 50);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    const animateElements = document.querySelectorAll(".animate-fade-in, .animate-scale-up");
    animateElements.forEach(el => observer.observe(el));
    const carouselContainer = document.getElementById('carousel-container');
    const carouselParent = document.getElementById('carousel-parent');
    if (carouselContainer && carouselParent) {
        const maxHorizontalScroll = carouselContainer.scrollWidth - window.innerWidth;
        const scrollableHeight = carouselParent.offsetHeight - window.innerHeight;
        function updateCarouselScroll() {
            const scrollY = window.scrollY;
            const sectionTop = carouselParent.offsetTop;
            const sectionBottom = sectionTop + scrollableHeight;
            if (scrollY > sectionTop && scrollY < sectionBottom) {
                const progress = (scrollY - sectionTop) / scrollableHeight;
                const translateX = -progress * maxHorizontalScroll;
                carouselContainer.style.transform = `translateX(${translateX}px)`;
            } else if (scrollY <= sectionTop) {
                carouselContainer.style.transform = `translateX(0px)`;
            } else {
                carouselContainer.style.transform = `translateX(${-maxHorizontalScroll}px)`;
            }
        }
        window.addEventListener('scroll', updateCarouselScroll);
        updateCarouselScroll();
    }
});