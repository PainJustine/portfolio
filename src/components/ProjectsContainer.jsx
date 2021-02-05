import React, { useState } from "react";
import Projects from "./Projects";

function ProjectsContainer() {
  const [projects] = useState({
    name: "",
    comments: "",
  });

  return <Projects projects={projects} />;
}

export default ProjectsContainer;
