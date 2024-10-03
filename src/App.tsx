import { useState } from "react";

function App() {
  const [selectedProject, setSelectedProject] = useState(
    "/projects/empty/index.html"
  );

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedProject(event.target.value);
  };

  return (
    <main className="flex flex-col h-screen">
      <header className="w-full bg-[#4a4a4a] p-4 border-b-2 border-white text-white flex justify-center gap-8 align-middle items-center">
        <h1 className="font-semibold">RCRD Legacy Projects</h1>
        <select
          id="project-select"
          onChange={handleChange}
          className="bg-white text-black focus:outline-none px-4 py-2"
        >
          <option value="" disabled selected>
            -- select a project --
          </option>
          <option value="projects/site-v1/index.html">Site V1</option>
          <option value="projects/site-v2/index.html">Site V2</option>
          <option value="projects/site-v3/index.html">Site V3</option>
          <option value="projects/portfolio/index.html">Portfolio</option>
        </select>
      </header>

      <div className="flex-grow">
        <iframe
          src={selectedProject}
          title="Projeto"
          sandbox="allow-same-origin allow-scripts"
          style={{ width: "100%", height: "100%", border: "none" }}
          loading="eager"
          className="iframeresponsive-iframe"
        />
      </div>
    </main>
  );
}

export default App;
