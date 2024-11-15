import React from 'react';

// Sample data for projects
const projects = [
    {
        title: 'Personal Website',
        description: 'This is my personal website, where I will put information about myself, such as my LinkedIn profile and my hobbies',
        imageSrc: 'https://via.placeholder.com/300',
    },
    {
        title: 'Project Two',
        description: 'This is a brief description of Project Two. It highlights the key aspects and achievements of the project.',
        imageSrc: 'https://via.placeholder.com/300',
    },
    {
        title: 'Project Three',
        description: 'This is a brief description of Project Three. It outlines the scope and impact of the project.',
        imageSrc: 'https://via.placeholder.com/300',
    },
];

export default function Projects() {
    return (
        <div className="flex flex-col items-center p-4 mt-10">
            {/* Heading */}
            <h1 className="text-4xl font-bold mb-6">Projects</h1>
            
            {/* Project Cards Container */}
            <div className="flex flex-wrap justify-center gap-6">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="border border-gray-200 rounded-lg shadow-md p-4 max-w-xs w-full mb-4"
                    >
                        {/* Project Image */}
                        <img
                            src={project.imageSrc}
                            alt={`${project.title} Image`}
                            className="rounded-md mb-4 w-full h-48 object-cover"
                        />
                        
                        {/* Project Title */}
                        <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                        
                        {/* Project Description */}
                        <p className="text-gray-700">{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
