import React from "react";
import { Link } from "react-router-dom";
import { ReactTerminal } from "react-terminal";

const Developer = () => {
  const commands = {
    whoami: "Saksham Srivastava",
    greet: () => "Hello there! Welcome to my terminal.",
    skills: (
      <div>
        My skills include React, JavaScript, Next JS, CSS, Node.js, and more.
        <Link to="https://github.com/saksham-1612">
          Checkout my GitHub profile for details.
        </Link>
      </div>
    ),
    project: (
      <Link to="https://github.com/saksham-1612">
        Checkout my latest project on GitHub: https://github.com/saksham-1612
      </Link>
    ),
    contact: (
      <div>
        Feel free to reach out at{" "}
        <a href="mailto:saksham16dec@gmail.com">saksham16dec@gmail.com</a>.
      </div>
    ),
    help: (
      <div>
        Available commands:
        <br />
        whoami
        <br />
        greet
        <br />
        skills
        <br />
        project
        <br />
        contact
        <br />
        echo
        <br />
        help
        <br />
        ls
        <br />
        pwd
        <br />
        clear
      </div>
    ),
    clear: () => window.location.reload(false),
    date: () => new Date().toLocaleString(),
    echo: (args) => `${args}`,
    ls: () => "file1.txt file2.txt folder",
    pwd: () => "/home/saksham",
  };

  return (
    <div className="max-container h-[100vh]">
      <ReactTerminal
        commands={commands}
        themes={{
          darkTheme: {
            themeBGColor: "#272B36",
            themeToolbarColor: "#DBDBDB",
            themeColor: "#FFFEFC",
            themePromptColor: "#a917a8",
          },
        }}
        welcomeMessage={
          "Welcome to Saksham's Developer Terminal \n Type 'help' for a list of commands.\n"
        }
        theme="darkTheme"
      />
    </div>
  );
};

export default Developer;
