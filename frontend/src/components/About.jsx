import React from 'react';

export default function About() {
    return (
        <div className="flex flex-col items-center p-4">
            <div className="max-w-4xl w-11/12 mt-20 overflow-hidden rounded-lg shadow-lg border border-gray-200">
                <div className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
                        {/* Image */}
                        <img
                            src="formywebsite.jpeg" // Replace with your actual image path
                            alt="About Image"
                            className="w-48 h-48 object-cover rounded mb-4 md:mb-0"
                        />

                        {/* Text Content */}
                        <div className="text-center md:text-left">
                            <h1 className="text-3xl font-bold mb-4">My name is Eric Chang</h1>
                            <p className="text-lg mb-4">
                                I'm looking for an internship at a company and I'm a first-year student.
                                <br /> Getting an internship will give me a huge advantage later on.
                            </p>
                            <p className="text-lg mb-4">
                                I really hope I can become successful later on.
                            </p>
                            {/* LinkedIn Button */}
                            <a
                                href="https://www.linkedin.com/in/eric-chang12/" // Replace with your actual LinkedIn profile URL
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-blue-600 text-white text-lg font-medium py-2 px-4 rounded hover:bg-blue-700"
                            >
                                Visit My LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
