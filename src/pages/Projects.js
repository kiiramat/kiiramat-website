import React from "react";
import TurtleLayout from "../components/TurtleLayout";
import './Projects.css';

function Projects() {
    return (
        <div className="turtle-layout-container">
            <TurtleLayout
                title="Website"
                text="You are on it :D"
                githubHref="https://github.com/kiiramat/kiiramat-website"
            />
            <TurtleLayout
                title="Todo List"
                text="I created this todo list in React because I wanted to reimplement a previous JavaScript project in React"
                githubHref="https://github.com/kiiramat/todoList-react"
                linkHref="https://kiiramat.com/todo/"
            />
            <TurtleLayout
                title="Travel Form"
                text="Implemented while following a Scrimba tutorial to learn React"
                githubHref="https://github.com/kiiramat/travelForm-react"
            />
            <TurtleLayout
                title="Todo List"
                text="I needed a todo list so I implemented one. This was implemented in plain JavaScript so that I could then implement it in React to better understand the differences"
                githubHref="https://github.com/kiiramat/todoList-vanilla-js"
                linkHref="https://kiiramat.com/todoList-vanilla-js/"
            />
            <TurtleLayout
                title="Hangman"
                text="I used to play hangman as a kid, so I thought I could do it in JavaScript"
                githubHref="https://github.com/kiiramat/hangman"
                linkHref="https://kiiramat.com/hangman/"
            />
            <TurtleLayout
                title="HALF"
                text="Everybody has annoying (loving) family members who you only want to contact on their birthday and Christmas. I created HALF (Handling Annoying Loving Family) so that I could automate the messages sent to these family members "
                githubHref="https://github.com/kiiramat/HALF"
            />
            <TurtleLayout
                title="Timer"
                text="I wanted an alarm and a timer where I could customize the alarm tone (with youtube or mp3 links)"
                githubHref="https://github.com/kiiramat/timer"
                linkHref="https://kiiramat.com/timer/"
            />
        </div>
    );
}

export default Projects;