import React, { useRef } from 'react';
import AnimatedHeaderSection from '../components/AnimatedHeaderSection';
import { AnimatedTextLines } from '../components/AnimatedTextLines';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const About = () => {
	const text = `Passionate about clean architecture
    I build scalable, high-performance solutions
    from prototype to production`;
	const aboutText = `Obsessed with crafting fast, intuitive, and scalable web applications. I specialize in building pixel-perfect React and Next.js interfaces that balance performance, accessibility, and clean architecture.

Every line of code I write is intentional — focused on maintainability, usability, and real-world impact. From reusable component systems to seamless API integrations, I enjoy turning complex requirements into elegant user experiences.

When I’m not building:

⚡ Refining side projects and experimenting with modern frontend patterns

📚 Strengthening full-stack skills with Node.js, Express, and MongoDB

🧠 Solving DSA problems to sharpen problem-solving and logic

🎧 Exploring design systems, UI trends, and performance optimization`;

	const imgRef = useRef(null);

	useGSAP(() => {
		gsap.to('#about', {
			scale: 0.95,
			scrollTrigger: {
				trigger: '#about',
				start: 'bottom 80%',
				end: 'bottom 20%',
				scrub: true,
				markers: false,
			},
			ease: 'power1.inOut',
		});

		gsap.set(imgRef.current, {
			clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%);',
		});
		gsap.to(imgRef.current, {
			clipPath: 'Polygon(0% 0%, 100% 0%,100% 100%,0% 100%)',
			duration: 2,
			ease: 'power4.out',
			scrollTrigger: { trigger: imgRef.current },
		});
	});

	return (
		<section id="about" className="min-h-screen bg-black rounded-b-4xl">
			<AnimatedHeaderSection
				subTitle={'Cod with purpose, Built to scale'}
				title={'About'}
				text={text}
				textColor={'text-white'}
				withScrollTrigger={true}
			/>
			<div className="flex flex-col items-center justify-between gap-16 px-10 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60">
				<img ref={imgRef} src="images/Personalphoto.jpeg" alt="woman" className="w-md rounded-3xl" />
				<AnimatedTextLines text={aboutText} className={'w-full'} />
			</div>
		</section>
	);
};

export default About;
