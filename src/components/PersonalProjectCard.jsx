import React from 'react'

export const PersonalProjectCard = ({title, stack, about}) => {
  console.log(title)
  return (
    <div className='flex flex-row'>

      {/* Left */}
      <div>
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
      <div>
        {/* Image(s) / 3d laptop */}
        <div>mock up area</div>
      </div>

      
      
    </div>
  );
};