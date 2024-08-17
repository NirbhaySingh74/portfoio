import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
        <p className="text-lg md:text-xl mb-6">
          I'm Nirbhay, a passionate Full Stack Developer with a strong
          background in building dynamic and responsive web applications. I have
          experience in creating full-stack applications using modern
          technologies and frameworks, and I'm always eager to learn and adapt
          to new challenges.
        </p>
        <p className="text-lg md:text-xl">
          With a focus on clean, maintainable code and user-centric design, I
          strive to deliver high-quality solutions that solve real-world
          problems. Let's connect and explore how we can collaborate on exciting
          projects!
        </p>
      </div>
    </section>
  );
};

export default About;
