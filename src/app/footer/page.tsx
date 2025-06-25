"use client";
import React from "react";
import Image from "next/image";
import {
    Facebook,
    Linkedin,
    Instagram,
    Mail,
} from "lucide-react";

const Footer: React.FC = () => {

        const scrollToTop = () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        };

        return (
            <footer className="bg-black text-white py-10 text-center px-4">
                {/* Back to top */}
                <div className="flex flex-col items-center justify-center mb-6">
                    <button onClick={scrollToTop}>
                        <Image
                            src="/upperarrow.png"
                            alt="Back to Top"
                            width={16}
                            height={16}
                            className="cursor-pointer"
                        />
                    </button>
                    <button
                        onClick={scrollToTop}
                        className="text-sm uppercase tracking-widest hover:underline"
                    >
                        Back to Top
                    </button>
                </div>

                {/* Social Icons */}
                <div className="flex justify-center gap-6 mb-6">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <Facebook className="h-5 w-5 hover:scale-110 transition-transform" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-5 w-5 hover:scale-110 transition-transform" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <Instagram className="h-5 w-5 hover:scale-110 transition-transform" />
                    </a>
                    <a href="mailto:you@example.com">
                        <Mail className="h-5 w-5 hover:scale-110 transition-transform" />
                    </a>
                </div>

                {/* Copyright */}
                <p className="text-xs text-gray-400">
                    ©2025 <span className="font-semibold text-white">Kuhali Paul</span>. All Rights Reserved.
                </p>
            </footer>
        );
    };

    export default Footer;
