import React from "react";

export default function About() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center ui justify-center">
      <div className="max-w-4xl w-full p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          About tr-Panel
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed mb-4">
          tr-Panel is a web app designed to support technology and operations
          teams by facilitating real-time communication and knowledge sharing.
          Our platform empowers agents, developers, and team members to
          efficiently resolve issues by leveraging past conversations, AI-driven
          recommendations, and expert guidance.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed mb-4">
          With tr-Panel, you can:
        </p>
        <ul className="list-disc list-inside text-lg text-gray-600 mb-6">
          <li>
            Search for solutions from closed case data and previous
            conversations.
          </li>
          <li>Chat with senior team members to get real-time expert advice.</li>
          <li>
            Save and rate solutions to build a growing knowledge base, improving
            accuracy over time.
          </li>
          <li>
            Use AI-powered suggestions to provide the most effective and
            relevant answers to common issues.
          </li>
        </ul>
        <p className="text-lg text-gray-600 leading-relaxed">
          tr-Panel helps streamline your support process and ensures your team
          has quick access to reliable solutions, improving efficiency and
          reducing response times.
        </p>
      </div>
    </div>
  );
}
