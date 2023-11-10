import { v4 as uuidv4 } from "uuid";

import CloudWristRestUniverse3in1a from "./images/products/CloudWristRestUniverse3in1a.png";
import CloudWristRestUniverse3in1b from "./images/products/CloudWristRestUniverse3in1b.png";
import CloudWristRestUniverse3in1c from "./images/products/CloudWristRestUniverse3in1c.png";
import CloudWristRestUniverse3in1d from "./images/products/CloudWristRestUniverse3in1d.png";
import CloudWristRestUniverse3in1e from "./images/products/CloudWristRestUniverse3in1e.png";
import keyboardSet4a from "./images/products/keyboardSet4a.png";
import keyboardSet4b from "./images/products/keyboardSet4b.png";
import keyboardSet4c from "./images/products/keyboardSet4c.png";
import keyboardSet4d from "./images/products/keyboardSet4d.png";
import mousePad1a from "./images/products/MousePad1a.png";
import mousePad1b from "./images/products/MousePad1b.png";
import mousePad1c from "./images/products/MousePad1c.png";
import mousePad1d from "./images/products/MousePad1d.png";
import mousePadB1a from "./images/products/MousePadB1a.png";
import mousePadB1b from "./images/products/MousePadB1b.png";
import mousePadB1c from "./images/products/MousePadB1c.png";
import mousePadC1a from "./images/products/MousePadC1a.png";
import mousePadC1b from "./images/products/MousePadC1b.png";
import mousePadC1c from "./images/products/MousePadC1c.png";
import mousePadSet4a from "./images/products/MousePadSet4a.png";
import mousePadSet4b from "./images/products/MousePadSet4b.png";
import mousePadSet4c from "./images/products/MousePadSet4c.png";
import mousePadSet4d from "./images/products/MousePadSet4d.png";
import set1a from "./images/products/Set1a.png";
import set1b from "./images/products/Set1b.png";
import set1c from "./images/products/Set1c.png";
import set1d from "./images/products/Set1d.png";
import set1e from "./images/products/Set1e.png";

export const Products = () => {
  return [
    {
      name: "Keyboard Pad- Regulus",
      price: 24.99,
      id: "keyboardset-4",
      sales: 45,
      stock: 50,
      image: {
        mainImage: keyboardSet4a,
        imgB: keyboardSet4b,
        imgC: keyboardSet4c,
        imgD: keyboardSet4d,
      },
      description: {
        p1: "Step into the realm of limitless imagination with our FAMTERz Keyboard Pad, a celestial bridge to enhance your digital journey. Like the stars above, our keyboard pad is designed to shine brightly in your workspace. Crafted from waterproof PU Leather and adorned with memory foam, it's not just an accessory; it's a cosmic canvas for your daily endeavors.",
        p2: "🚀 Dive into the Universe of Comfort and Efficiency: Designed to be waterproof, this keyboard pad guards against the spills and splashes of life, keeping your workspace pristine. The luxurious PU Leather caresses your wrists, offering a tactile experience that's simply out of this world. With the memory foam beneath, each keystroke feels like a journey through the stars, making your work both efficient and comfortable.",
        p3: "🌠 Your Gateway to Productivity: Just as constellations guide explorers through the night sky, our Keyboard Pad navigates your path to creativity. It's more than a desk accessory; it's a testament to the FAMTERz commitment to blending technology with the awe of the universe. Your ideas flow seamlessly as you type, and your workspace becomes a portal to endless possibilities.",
        p4: "Immerse yourself in the art of working and dreaming with FAMTERz Keyboard Pad. It's an invitation to join our cosmic expedition, where your digital world transforms into a canvas of the cosmos. Welcome to the universe at your fingertips.",
      },
    },
    {
      name: "Mouse Pad- Nebula",
      price: 14.99,
      id: "mouse-pad-1",
      sales: 38,
      stock: 50,
      image: {
        mainImage: mousePad1a,
        imgB: mousePad1b,
        imgC: mousePad1c,
        imgD: mousePad1d,
      },
      description: {
        p1: "Imagine your workspace as a portal to the stars, where every click and scroll takes you on an interstellar adventure. FAMTERz proudly presents our Waterproof PU Leather Mouse Pad, a masterpiece that aligns seamlessly with our cosmic vision.",
        p2: "Made with the precision of stargazers and the comfort of memory foam, our mouse pad offers more than just a surface—it offers a gateway to explore the digital universe. The waterproof design ensures your desk remains unscathed as you navigate through galaxies of work and play.",
        p3: "Feel the cosmos under your fingertips as you experience the ethereal blend of technology and the awe-inspiring universe. FAMTERz Mouse Pad isn't just an accessory; it's an invitation to dream, create, and immerse yourself in the infinite. Welcome to your universe at your fingertips.🌠",
      },
    },
    {
      name: "Mouse Pad- Rastaban",
      price: 14.99,
      id: "mouse-pad-b1",
      sales: 23,
      stock: 50,
      image: {
        mainImage: mousePadB1a,
        imgB: mousePadB1b,
        imgC: mousePadB1c,
      },
      description: {
        p1: "Imagine your workspace as a portal to the stars, where every click and scroll takes you on an interstellar adventure. FAMTERz proudly presents our Waterproof PU Leather Mouse Pad, a masterpiece that aligns seamlessly with our cosmic vision.",
        p2: "Made with the precision of stargazers and the comfort of memory foam, our mouse pad offers more than just a surface—it offers a gateway to explore the digital universe. The waterproof design ensures your desk remains unscathed as you navigate through galaxies of work and play.",
        p3: "Feel the cosmos under your fingertips as you experience the ethereal blend of technology and the awe-inspiring universe. FAMTERz Mouse Pad isn't just an accessory; it's an invitation to dream, create, and immerse yourself in the infinite. Welcome to your universe at your fingertips.🌠",
      },
    },
    {
      name: "Mouse Pad- Aludra",
      price: 14.99,
      id: "mouse-pad-c1",
      sales: 67,
      stock: 50,
      image: {
        mainImage: mousePadC1a,
        imgB: mousePadC1b,
        imgC: mousePadC1c,
      },
      description: {
        p1: "Imagine your workspace as a portal to the stars, where every click and scroll takes you on an interstellar adventure. FAMTERz proudly presents our Waterproof PU Leather Mouse Pad, a masterpiece that aligns seamlessly with our cosmic vision.",
        p2: "Made with the precision of stargazers and the comfort of memory foam, our mouse pad offers more than just a surface—it offers a gateway to explore the digital universe. The waterproof design ensures your desk remains unscathed as you navigate through galaxies of work and play.",
        p3: "Feel the cosmos under your fingertips as you experience the ethereal blend of technology and the awe-inspiring universe. FAMTERz Mouse Pad isn't just an accessory; it's an invitation to dream, create, and immerse yourself in the infinite. Welcome to your universe at your fingertips.🌠",
      },
    },
    {
      name: "4 Set Mouse Pad- Avior",
      price: 32.99,
      id: "mouse-pad-set4",
      sales: 10,
      stock: 50,
      image: {
        mainImage: mousePadSet4a,
        imgB: mousePadSet4b,
        imgC: mousePadSet4c,
        imgD: mousePadSet4d,
      },
      description: {
        p1: "In the vast expanse of your digital universe, FAMTERz presents a stellar offering—the Mouse Pad 4 Set. These aren't just mouse pads; they're portals to an astral adventure, where technology meets the cosmos. Crafted with precision and passion, each pad is a masterpiece of innovation, just as Chris, our visionary founder, envisioned.",
        p2: "🚀 Boundless Exploration: These waterproof mouse pads, made with PU leather and memory foam, are more than just accessories; they're your guide to a seamless journey through the digital galaxies. As you glide your mouse across, you'll feel the celestial grandeur beneath your fingertips, reminding you that the universe is always at your side.",
        p3: "🌠 Elegance Meets Functionality: We've merged the elegance of the cosmos with the practicality of everyday work and play. Each pad not only protects your desk but elevates your workspace, immersing you in the universe's boundless wonder with every click and scroll.",
        p4: "🪐 A Universe Awaits: Whether you're a stargazer at heart or a digital explorer, the FAMTERz Mouse Pad 4 Set is your ticket to a cosmic adventure. Bring the stars closer as you work and play, and let these waterproof, PU leather, and memory foam pads transform your desk into a canvas of the cosmos. Welcome to a universe at your fingertips, where the ordinary becomes extraordinary.",
      },
    },
    {
      name: "3 Set Universe- Atlas",
      price: 39.99,
      id: "set-1",
      sales: 98,
      stock: 50,
      image: {
        mainImage: set1a,
        imgB: set1b,
        imgC: set1c,
        imgD: set1d,
        imgE: set1e,
      },
      description: {
        p1: "Introducing our exquisite Keyboard Pad, Mouse Pad, and Coaster, where innovation meets the stars. Crafted with the same dedication and love for the universe that ignited FAMTERz's inception, these celestial companions are not just accessories; they're portals to your very own cosmic realm.",
        p2: "🚀 Keyboard Pad: As you lay your fingers on this keyboard pad, you're not just typing; you're commanding the galaxies. Our waterproof, PU leather creation, infused with memory foam, offers comfort beyond the ordinary. It's your personal bridge to explore new dimensions of creativity.",
        p3: "🌠 Mouse Pad: Designed to let your mouse glide through the cosmos, our mouse pad is a masterpiece in itself. Made with waterproof PU leather and featuring memory foam, it's your guide to seamless navigation. Immerse yourself in the universe of work and play with every click.",
        p4: "🪐 Coaster: Every sip becomes an astronomical experience when your drink rests on our coaster. Crafted with the same waterproof, PU leather, and memory foam, it protects your desk while adding a touch of the cosmos to your coffee breaks.",
        p5: "These accessories are not just products; they're an extension of FAMTERz's vision. They're the constellations that light up your workspace, reminding you that the universe is always within reach. Explore the infinite while you work and play, and let FAMTERz elevate the way you interact with your digital world. Welcome to the universe at your fingertips.",
      },
    },
    {
      name: "3 in 1 Cloud Wrist Rest- Universe",
      price: 39.99,
      id: "cloudwristrestuniverse-3in1",
      sales: 198,
      stock: 50,
      image: {
        mainImage: CloudWristRestUniverse3in1a,
        imgB: CloudWristRestUniverse3in1b,
        imgC: CloudWristRestUniverse3in1c,
        imgD: CloudWristRestUniverse3in1d,
        imgE: CloudWristRestUniverse3in1e,
      },
      description: {
        p1: "Are you looking for a cute wrist rest that elevates both your style and comfort while working or gaming?",
        p2: "Whether you're working, studying, or immersed in intense gaming, the Famterz set of cloud wrist rest keyboard and mouse pad plus coaster with extraordinary celestial design that combines style and functionality creates a uniquely comfortable and captivating typing or gaming environment.",
        p3: "This heavenly trio is designed to transform your desk into a cosmic wonderland while ensuring maximum comfort, durability, and support.",
        p4: "PRODUCT SPECIFICATIONS:",
        p5: "✅ 3-IN-1 PACK: Keyboard pad, mouse pad, coaster",
        p6: "✅ MATERIAL: Made with PU leather, foamed cotton, cushioned core; cloud universe design",
        p7: "✅ Mouse Pad Size: 10.4x9.8 inches",
        p8: "✅ Keyboard Pad Size: 16.9x4.3 inches",
        p9: "✅ Coaster Size: 5.5x3.5 inches",
        p10: "✅ Anti-Slip base",
        p11: "✅ Waterproof",
        p12: "Enjoy comfortable typing and gaming experiences with this soft and durable cloud wrist rest for keyboard and mouse. Sink into the cloud-soft comfort of the cushioned core, embracing your wrists and palms with a gentle touch.",
        p13: "Your focus stays uninterrupted, thanks to the reliable grip of this cloud wrist rest pad. Your cloud mouse pad and keyboard wrist rest remain protected, spotless, and resilient, making them a practical choice for any workspace",
        p14: "Whether you're typing away or diving into an intense gaming marathon, this desk wrist rest or gaming wrist rest remains resilient. The Famterz cloud computer wrist rest is made of premium PU leather and cushioned with foamed cotton, and it is built to withstand even the most intense typing or gaming sessions.",
        p15: "Discover a world of celestial comfort and style, and bring a touch of the cosmos into your typing or gaming journey with Famterz.",
      },
    },
  ];
};
