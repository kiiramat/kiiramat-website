import React from "react";
import TurtleLayout from "../components/TurtleLayout";
import './Projects.css'

function Projects() {
    return (
        <div className="turtle-layout-container">
            <TurtleLayout title="Project 1" text="Hello this is a project that I did" />
            <TurtleLayout title="Project 1" text="Hello this is a project that I did" />
        </div>
    );
}

export default Projects;