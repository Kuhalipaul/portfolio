"use client";
import React from "react";

const ITBerriesSection: React.FC = () => {
  return (
    <section className="bg-black text-white py-16 px-4 md:px-20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-xl font-semibold tracking-widest mb-4">IT BERRIES</h2>
        <p className="text-gray-300 mb-8 leading-relaxed text-sm md:text-base">
          Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem
          varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna
          quis libero viverra facilisis ut ac est. Nulla commodo, eros a
          elementum faucibus, lacus odio rutrum augue, in semper sem magna
          tellus. Etiam erat eros, suscipit ac tempor a, dictum sit amet est.
          Nullam egestas nisi eget enim gravida facilisis. Pellentesque
          lobortis varius turpis vel pharetra. Ut ante justo, consequat vitae
          elementum tempor, accumsan nec eros.
        </p>

        <button className="relative inline-flex items-center justify-center gap-3 px-6 py-2 text-white text-sm transition-all duration-300 hover:bg-white hover:text-black">
          <span className="text-lg">|</span>
          <span className="tracking-wide">READ MORE</span>
          <span className="text-lg">|</span>
        </button>
      </div>

      {/* Faded IT icon - optional and stylized */}
      <div className="absolute right-0 bottom-0 opacity-5 text-[15rem] md:text-[20rem] font-extrabold text-white leading-none select-none pointer-events-none pr-10">
        IT
      </div>
    </section>
  );
};

export default ITBerriesSection;
