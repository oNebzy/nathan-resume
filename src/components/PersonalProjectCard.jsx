import React from 'react'

export const PersonalProjectCard = ({title, stack, about}) => {
  console.log(title)
  return (
    <div className='grid grid-cols-2'>

      {/* Left */}
      <div className='col-span-1'>
        {/* title */}
        <div>
          {title}
        </div>

        {/* Stack */}
        <div>
          {stack}
        </div>

        {/* About */}
        <div>
          {about}
        </div>
      </div>
      
      {/* Right */}
      <div className='col-span-1'>
        {/* Image(s) / 3d laptop */}
        <div>mock up area</div>
      </div>

      
      
    </div>
  );
};