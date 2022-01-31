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
            <TurtleLayout
                title="HALF"
                text="Everybody has annoying (loving) family members who you only want to contact on their birthday and Christmas. I created HALF (Handling Annoying Loving Family) so that I could automate the messages sent to these family members "
                githubHref="https://github.com/kiiramat/HALF"
            />
        </div>
    );
}

export default Projects;