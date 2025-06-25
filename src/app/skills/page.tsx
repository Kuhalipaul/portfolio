"use client";
import React from "react";

type Skill = {
  name: string;
  icon: string;
};

const usingNow: Skill[] = [
  { name: "HTML5", icon: "/html.png" },
  { name: "CSS3", icon: "/css.png" },
  { name: "SASS", icon: "/sass.png" },
  { name: "JavaScript", icon: "/js.png" },
  { name: "React", icon: "/react.png" },
  { name: "Bootstrap", icon: "/bootstrap.png" },
  { name: "Git", icon: "/git.png" },
  { name: "Figma", icon: "/figma.png" },
];

const learning: Skill[] = [
  { name: "Node.js", icon: "/nodejs.png" },
  { name: "MySQL", icon: "/mysql.png" },
  { name: "MongoDB", icon: "/mongodb.png" },
  { name: "TypeScript", icon: "/ts.png" },
];

const SkillsSection: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-100 to-white text-center">
      {/* Title */}
      <div className="inline-block border-5 border-black px-6 py-2 mb-10">
        <h2 className="text-base md:text-lg font-semibold tracking-widest">SKILLS</h2>
      </div>

      {/* Using Now */}
      <div className="mb-12">
        <h3 className="text-md font-semibold tracking-wide mb-6">USING NOW:</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 justify-items-center max-w-4xl mx-auto">
          {usingNow.map((skill, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={skill.icon} alt={skill.name} className="h-12 w-12 mb-2" />
              <p className="text-sm">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Learning */}
      <div className="mb-12">
        <h3 className="text-md font-semibold tracking-wide mb-6">LEARNING:</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 justify-items-center max-w-3xl mx-auto">
          {learning.map((skill, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={skill.icon} alt={skill.name} className="h-12 w-12 mb-2" />
              <p className="text-sm">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Optional: Other Skills */}
      <div>
        <h3 className="text-md font-semibold tracking-wide mb-2">OTHER SKILLS:</h3>
        <p className="text-sm text-gray-500">More coming soon...</p>
      </div>
    </section>
  );
};

export default SkillsSection;
