// Framer Variants
const fade =  {
    start: {opacity: 0},
    animate: {opacity: 1, transition: {duration:2}},
    exit: {opacity: 0, transition: 1}
};
const zoomingIn = {
    start: {scale: 1},
    animate: {scale: 1.08, transition: {yoyo: Infinity, duration: 0.3}},
    exit: {scale: 1.5}
}

export {zoomingIn, fade}