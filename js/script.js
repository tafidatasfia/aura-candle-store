/* =========================================
   AURA — INTERACTIONS
   ========================================= */

const flame = document.querySelector("#flame");
const mouseGlow = document.querySelector(".mouse-glow");

document.addEventListener("mousemove", (event) => {

    const mouseX = event.clientX;
    const mouseY = event.clientY;

    /* -------------------------
       MOUSE GLOW
    ------------------------- */

    mouseGlow.style.left = `${mouseX}px`;
    mouseGlow.style.top = `${mouseY}px`;


    /* -------------------------
       FLAME MOVEMENT
    ------------------------- */

    const flameRect = flame.getBoundingClientRect();

    const flameCenter =
        flameRect.left + flameRect.width / 2;

    const distance =
        mouseX - flameCenter;

    const rotation =
        Math.max(-25, Math.min(25, distance / 10));

    flame.style.transform =
        `translateX(-50%) rotate(${rotation}deg)`;

});