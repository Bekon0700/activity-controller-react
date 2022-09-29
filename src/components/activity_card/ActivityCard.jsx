import React from 'react'
import { activityAddToDB } from '../../utils/storage'

const ActivityCard = ({data, activityTime, setActivityTime}) => {
    const {title, image, time, timeUnit} = data


    const addToList = (time) => {
        setActivityTime(activityTime + time)
        activityAddToDB(time)
    }

  return (
    <div className='bg-[#F4F3EC] rounded-md p-6 flex flex-col justify-between gap-4'>
        <img src={image} alt="" className='h-60 w-full rounded-sm'/>
        <p className='font-bold text-lg lg:text-2xl text-gray-700'>{title}</p>
        <div className='flex flex-col gap-3'>
          <p className='font-semibold text-lg text-gray-800'>Time required: {time} {timeUnit}</p>
          <button onClick={() => addToList(time)} className='bg-blue-600 text-white font-semibold text-xl py-3 w-full rounded-md'>Add to list</button>
        </div>
    </div>
  )
}

export default ActivityCard