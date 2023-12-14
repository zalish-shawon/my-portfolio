/* eslint-disable react/no-unknown-property */
import React from 'react';

const SkillsCard = ({skill}) => {
   
    return (
        <div>
            <div class="w-[380px] lg:w-[180px] h-[150px] p-6  border border-gray-200 rounded-lg shadow-lg bg-[#100B32]">
                    <div className='flex justify-center items-center'>
                    <div>
                        <img className=' w-[85px]' src={skill.icon} alt="" />
                        <h3 className='text-xl text-center text-[#909AB9] font-semibold'>{skill.name}</h3>
                    </div>
                    </div>
                </div>
        </div>
    );
};

export default SkillsCard;