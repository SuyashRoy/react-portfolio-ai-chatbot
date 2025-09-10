import React from "react";

const Hero = () => {
  return (
    <section id="home" className="bg-black text-white h-screen flex items-center justify-center text-center">
      <div className="max-w-2xl px-4">
        <h2 className="text-5xl font-bold">Hi, I'm Suyash Roy</h2>
        <p className="mt-4 text-xl">I'm a passionate Computer Science graduate student at USC, experienced in enterprise software development!</p>
        <button className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition duration-300">See My Work</button>
      </div>
    </section>
  );
};

export default Hero;