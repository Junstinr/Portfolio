import { gsap } from "gsap";

const card = document.getElementById('card');

gsap.to(card, {rotate: 360, duration: 1});

const intro = document.getElementById('intro');

gsap.to(intro, {rotate: 360, duration: 1});