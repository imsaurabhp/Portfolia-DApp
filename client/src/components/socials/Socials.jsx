import React from 'react'
import LinkedIn from '../../assets/linkedin-icon.png';
import Github from "../../assets/github-mark-white.png";
import Email from "../../assets/gmail-icon.png";
import Resume from "../../assets/resume-icon.png";

const Socials = () => {
    const socials = [
        {
          imageLocation: LinkedIn,
          redirectTo: "https://www.linkedin.com/in/imsaurabhp",
        },
        {
            imageLocation: Email,
            redirectTo: "mailto:someone@example.com",
        },
        {
            imageLocation: Github,
            redirectTo: "https://www.github.com/imsaurabhp",
        },
        {
            imageLocation: Resume,
            redirectTo: "https://flowcv.com/resume/nil1r2s9we",
        }
      ];
    
      const handleSocialClick = (location) => {
        window.open(location, '_blank');
      };
  return (
    <>
        <div name="socials" className="w-full h-[400px] text-gray-300 bg-[#0a192f] z-0">
            <div className="max-w-[1350px] mx-auto p-4 flex flex-col justify-center w-full h-full">

            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">Socials & Resume</p>
                <p className="py-6">// You can contact me on...</p>
            </div>

                <div className='flex flex-row gap-8'>
                    {socials.map((social, index) => (
                        <div key={index} className="group relative overflow-hidden rounded-lg shadow-md cursor-pointer" onClick={()=>handleSocialClick(social.redirectTo)} style={{ zIndex: 0 }}>
                            {/* {console.log(social.imageLocation)} */}
                            <div className='h-10 w-10 bg-cover bg-center sm:h-20 sm:w-20' style={{ backgroundImage: `url(${social.imageLocation})` }}></div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    </>
  )
}

export default Socials