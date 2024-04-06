import { gsap } from 'gsap';

const card = document.getElementById('card');

console.log("Before animation");
gsap.to(card, { rotate: 360, duration: 1 });
console.log("After animation");


const intro = document.getElementById('intro');

gsap.to(intro, {rotate: 360, duration: 1});