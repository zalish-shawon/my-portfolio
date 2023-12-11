/* eslint-disable react/no-unknown-property */
import React from 'react';

const SkillsCard = ({skill}) => {
   
    return (
        <div>
            <div class="w-[380px] lg:w-[180px] h-[150px] p-6  border border-gray-200 rounded-lg shadow-lg bg-gray-100">
                    <div className='flex justify-center items-center'>
                    <div>
                        <img className=' w-[65px]' src={skill.icon} alt="" />
                        <h3 className='text-xl mt-2 font-semibold'>{skill.name}</h3>
                    </div>
                    </div>
                </div>
        </div>
    );
};

export default SkillsCard;