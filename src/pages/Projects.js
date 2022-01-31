import React from "react";
import TurtleLayout from "../components/TurtleLayout";
import './Projects.css';

function Projects() {
    return (
        <div className="turtle-layout-container">
            <TurtleLayout
                title="Timer"
                text="I wanted an alarm and a timer where I could customize the alarm tone (with youtube or mp3 links)"
                githubHref="https://github.com/kiiramat/timer"
                linkHref="https://kiiramat.com/timer/"
            />
            <TurtleLayout title="Project 1" text="Hello this is a project that I did" />
        </div>
    );
}

export default Projects;