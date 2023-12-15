import React, { useEffect, useState } from "react";
import Working from "../../assets/workImg.jpg";

const Projects = ({state}) => {

  const [projects, setProjects] = useState("")

  useEffect(() =>{
    const { contract } = state;
    
    const projectDetails = async() => {
      const projectsList = await contract.methods.allProjects().call();
      let newProjectsList = [];
      for(let i = 0; i < projectsList.length; i++)
      {
        if(projectsList[i].title != ""){
          newProjectsList.push(projectsList[i]);
        }
      }
      setProjects(newProjectsList)
      
    }
    contract && projectDetails();
  }, [state]);

  return (
    <>
      <div name="projects" className="w-full min-h-screen md:min-h-screen text-gray-300 bg-[#0a192f] z-0">
        <div className="max-w-[1350px] mx-auto p-4 flex flex-col justify-center w-full h-full">

          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">Projects</p>
            <p className="py-6">// Check out some of my recent projects</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            {projects !== "" && projects.map((project, index) => (
              <div key={index} onClick={()=>{window.location.href = `https://www.github.com/imsaurabhp/${project.githubLink}`}} className="group relative overflow-hidden rounded-lg shadow-md cursor-pointer" style={{ zIndex: 0 }}>
                <img className="h-48 bg-cover bg-center transition-opacity duration-300 opacity-100 group-hover:opacity-50" src={`https://gateway.pinata.cloud/ipfs/${project.imgLink}`} alt="Project Image" />
                <div className="card-footer absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-50 text-white">
                  <h2 className="text-center">{project.title}</h2>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
};

export default Projects;
