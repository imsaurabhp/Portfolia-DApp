import React, { useEffect, useState } from 'react'

const Experience = ({state}) => {
    const [exps, setExps] = useState("");

    useEffect(() => {
        const { contract } = state;
        // console.log(contract)
        const experienceDetails = async() => {
            const expList = await contract.methods.allExperiences().call();
            let newExpsList = [];
            for(let i = expList.length - 1; i >= 0 ; i--)
            {
                if(expList[i].title != ""){
                    newExpsList.push(expList[i]);
                }
            }
            setExps(newExpsList)
            }
        contract && experienceDetails();
    }, [state])

  return (
    <> 
    <div name="experience" className='w-full max-h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>

            <div className='max-w-[1350px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Experience</p>
                </div>
                <div></div>
            </div>

            {exps !== "" && exps.map((exp, index) => (
                <div key={index} className='flex flex-row mb-10'>
                    <div className='max-w-[1350px] w-full sm:grid grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-2xl font-bold '>
                            <p>{exp.title}</p>
                            <p className='font-light text-sm'>{exp.company}</p>
                            <p className='font-light text-sm'>{exp.duration}</p>
                        </div>
                        <div className='text-justify pt-1.5'>{exp.shortDesc}</div>
                    </div>
                </div>
            ))}
            
        </div>
    </div>
    </>
  )
}

export default Experience