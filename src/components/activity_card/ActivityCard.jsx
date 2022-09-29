import React from 'react'

const ActivityCard = ({data}) => {
    const {title, image, time, timeUnit} = data
    
  return (
    <div className='bg-green-200 rounded-md p-4'>
        <img src={image} alt="" className='h-72 w-full'/>
        <p>{title}</p>
        <p>Time required: {time} {timeUnit}</p>
        <button>Add to list</button>
    </div>
  )
}

export default ActivityCard