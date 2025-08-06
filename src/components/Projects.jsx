import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-gray-100">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Projects</h2>
        <p className="text-xl text-gray-500">Check out some of my work!</p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
          <h3 className="text-2xl font-semibold">Project 1</h3>
          <p className="mt-2 text-gray-500">Description of project 1 goes here.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
          <h3 className="text-2xl font-semibold">Project 2</h3>
          <p className="mt-2 text-gray-500">Description of project 2 goes here.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
          <h3 className="text-2xl font-semibold">Project 3</h3>
          <p className="mt-2 text-gray-500">Description of project 3 goes here.</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
