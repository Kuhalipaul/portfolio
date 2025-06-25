"use client";
import React from "react";
import Image from "next/image";


const services = [
    {
        title: "DESIGN",
        description:
            "I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.",
        icon: `/design.png`,
    },
    {
        title: "DEVELOPMENT",
        description:
            "I can develop the site based on your needs and suggestions. I can also develop the site from scratch and consult you during the job.",
        icon: `/maintanance.png`,
    },
    {
        title: "MAINTENANCE",
        description:
            "I can maintain the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.",
        icon: `/development.png`,
    },
];

const AboutSection: React.FC = () => {
    return (
        <section>
            {/* About Me */}
            <div
                className="bg-cover bg-center bg-no-repeat min-h-screen flex flex-col justify-center items-center text-center px-4"
                style={{
                    backgroundImage: `url('/images/about-bg.png')`,
                }}
            >
                <div className="border-5 border-black px-6 py-2 mb-6">
                    <h2 className="text-base md:text-lg font-semibold tracking-widest">
                        ABOUT ME
                    </h2>
                </div>

                <p className="max-w-xl text-sm md:text-base text-gray-800 mb-8">
                    Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius finibus.
                    Sed ornare sit amet lorem sed viverra. In vel urna quis libero viverra facilisis ut ac est.
                </p>

                <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-4 px-6 py-2 text-black text-sm tracking-wider hover:bg-black hover:text-white transition-all"
                >
                    <span className="text-lg font-light">|</span>
                    <span className="font-semibold">EXPLORE</span>
                    <span className="text-lg font-light">|</span>
                </button>


                {/* Decorative Image Underline */}
                <div className="mt-4">
                    <Image
                        src="/separatorBlack.png"
                        alt="Separator"
                        width={100}
                        height={10}
                        className="mx-auto"
                    />
                </div>
            </div>

            {/* Services Section */}
            <div className="bg-[#f8f8f8] py-16 px-6 text-center">
                {/* Top Row: DESIGN & DEVELOPMENT */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {services.slice(0, 2).map((service, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <Image
                                src={service.icon}
                                alt={service.title}
                                width={50}
                                height={50}
                                className="mb-4 opacity-20"
                            />
                            <h3 className="text-sm font-semibold tracking-widest mb-2 uppercase">
                                {service.title}
                            </h3>
                            <p className="text-xs text-gray-600 max-w-xs leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Second Row: MAINTENANCE */}
                <div className="flex justify-center mt-12">
                    <div className="flex flex-col items-center">
                        <Image
                            src={services[2].icon}
                            alt={services[2].title}
                            width={50}
                            height={50}
                            className="mb-4 opacity-20"
                        />
                        <h3 className="text-sm font-semibold tracking-widest mb-2 uppercase">
                            {services[2].title}
                        </h3>
                        <p className="text-xs text-gray-600 max-w-xs leading-relaxed">
                            {services[2].description}
                        </p>
                    </div>
                </div>

                {/* Decorative Image Underline */}
                <div className="mt-12">
                    <Image
                        src="/separatorBlack.png"
                        alt="Separator"
                        width={100}
                        height={10}
                        className="mx-auto"
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
