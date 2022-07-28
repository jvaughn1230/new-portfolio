import React from 'react';

import SkillCard from '../Components/SkillCard';

function Skills() {
  return (
    <div className='flex flex-wrap justify-center'>
      <div className='text-4xl w-full justify-self-center'>My Skills</div>
      <SkillCard />
      <SkillCard />
      <SkillCard />
      <SkillCard />
      <SkillCard />
      <SkillCard />
    </div>
  )
}

export default Skills;