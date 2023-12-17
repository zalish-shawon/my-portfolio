/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import React from 'react';
import { motion } from 'framer-motion';


const SkillsCard = ({skill}) => {
   
    return (
        <motion.div whileHover={{ scale: 1.1 }}>
            <div class="w-[300px] lg:w-[180px] h-[150px] p-6  border border-gray-200 rounded-lg shadow-lg bg-[#100B32]">
                    <div className='flex justify-center items-center'>
                    <div>
                        <img className=' w-[85px]' src={skill.icon} alt="" />
                        <h3 className='text-xl text-center text-[#909AB9] font-semibold'>{skill.name}</h3>
                    </div>
                    </div>
                </div>
        </motion.div>
    );
};

export default SkillsCard;