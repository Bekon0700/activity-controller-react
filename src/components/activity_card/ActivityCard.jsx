import React from 'react'
import { activityAddToDB } from '../../utils/storage'

const ActivityCard = ({data, activityTime, setActivityTime}) => {
    const {title, image, time, timeUnit} = data


    const addToList = (time) => {
        setActivityTime(activityTime + time)
        activityAddToDB(time)
    }

  return (
    <div className='bg-[#F4F3EC] rounded-md p-6 flex flex-col gap-4'>
        <img src={image} alt="" className='h-60 w-full rounded-sm'/>
        <p className='font-bold text-lg lg:text-2xl text-gray-700'>{title}</p>
        <p className='font-semibold text-lg text-gray-800'>Time required: {time} {timeUnit}</p>
        <button onClick={() => addToList(time)} className='bg-blue-600 text-white font-semibold text-xl py-3 rounded-md'>Add to list</button>
    </div>
  )
}

export default ActivityCard