/* eslint-disable react/no-unknown-property */
import React, { useEffect, useState } from 'react';
import { GiSkills } from "react-icons/gi";
import SkillsCard from './SkillsCard';


const Skills = () => {
    const [skills, setSkills] = useState([])

    useEffect(()=>{
        fetch('/skills.json')
        .then(res => res.json())
        .then(data => {
            setSkills(data)
        })
    },[])

    return (
        <div className='max-w-[78%] mx-auto pt-2 pb-2'>
            <div className="flex justify-center gap-3 items-center mt-12">
                <GiSkills className="text-4xl"></GiSkills>
                <h1 className="font-bold text-4xl">Skills &  <span className="text-[#018DB0]"> Abilities</span></h1>

            </div>
            <div className='mb-10 mt-8 grid grid-cols-1 lg:grid-cols-5 gap-4'>

                {
                    skills.map(skill => <SkillsCard key={skill.id} skill={skill}></SkillsCard>)
                }

                
            </div>
        </div>
    );
};

export default Skills;