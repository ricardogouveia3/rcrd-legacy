import { useState } from "react";

function App() {
  const [selectedProject, setSelectedProject] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedProject(event.target.value);
  };

  return (
    <div>
      <header>
        <h1>Exibir Projetos Antigos</h1>
        <label htmlFor="project-select">Selecione o Projeto:</label>
        <select id="project-select" onChange={handleChange}>
          <option value="">-- Selecione --</option>
          <option value="projects/site-v1/index.html">Site V1</option>
          <option value="projects/site-v2/index.html">Site V2</option>
          <option value="projects/site-v3/index.html">Site V3</option>
          <option value="projects/portfolio/index.html">Portfolio</option>
        </select>
      </header>

      {selectedProject && (
        <iframe
          src={selectedProject}
          title="Projeto"
          sandbox="allow-same-origin allow-scripts"
          style={{ width: "100%", height: "80vh", border: "none" }}
          loading="lazy"
        />
      )}
    </div>
  );
}

export default App;
