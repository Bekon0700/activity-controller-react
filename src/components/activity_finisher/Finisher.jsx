import React, { useEffect, useState } from 'react'
import {GrLocation} from 'react-icons/gr'
import BreakTime from '../break_time/BreakTime'


const Finisher = ({activityTime}) => {
  const [timeList, setTimeList] = useState([
    {
      id: 1,
      time: 1,
      active: false
    },
    {
      id: 2,
      time: 2,
      active: false
    },
    {
      id: 3,
      time: 3,
      active: false
    },
    {
      id: 4,
      time: 4,
      active: false
    },
  ])

  const [breakTime, setBreakTime] = useState(0)

  useEffect(()=> {
    let pip = [...timeList]
    pip.forEach(el => {
      if(el['id'] === breakTime){
        el['active'] = true
      }else{
        el['active'] = false
      }
    })
    setTimeList(pip)
  }, [breakTime])

  return (
    <div className='flex flex-col gap-8'>
      <div className='text-center flex flex-col gap-2'>
        <p className='text-2xl font-bold text-gray-600'>Emdadul Islam</p>
        <div className='flex justify-center items-center gap-2 text-lg font-semibold text-gray-700'>
          <GrLocation />
          <p>Mohammodpur, Dhaka</p>
        </div>
      </div>
      
      <div className='bg-[#F4F3EC] flex justify-around items-centers px-4 py-3 rounded-md'>
        <div className='flex flex-col gap-2'>
          <p className='text-3xl font-bold'>65<span className='text-xl font-semibold text-gray-500'>kg</span></p>
          <p className='text-xl font-bold text-gray-600'>weigh</p>
        </div>
        <div className='flex flex-col gap-2'>
          <p className='text-3xl font-bold'>5'6"</p>
          <p className='text-xl font-bold text-gray-600'>height</p>
        </div>
        <div className='flex flex-col gap-2'>
          <p className='text-3xl font-bold'>25<span className='text-xl font-semibold text-gray-500'>yrs</span></p>
          <p className='text-xl font-bold text-gray-600'>age</p>
        </div>
      </div>

      <div className='flex flex-col gap-4'>
        <p className='text-lg font-bold text-gray-700'>Add a Break</p>
        <div className='bg-[#F4F3EC] flex justify-around items-centers px-4 py-4 rounded-md'>
            {
              timeList.map(el => <BreakTime key={el.id} data={el} setBreakTime={setBreakTime}/>)
            }
        </div>
      </div>

      <div className='flex flex-col gap-4'>
        <p className='text-lg font-bold text-gray-700'>Activity Details</p>
        <div className='bg-[#F4F3EC] flex justify-between items-centers px-10 py-4 rounded-md'>
            <p className='text-xl font-bold'>Activity Time</p>
            <p className='text-xl font-bold text-gray-600'>{activityTime} Hours</p>
        </div>
        <div className='bg-[#F4F3EC] flex justify-between items-centers px-10 py-4 rounded-md'>
            <p className='text-xl font-bold'>Break Time</p>
            <p className='text-xl font-bold text-gray-600'>
              {breakTime} hours
            </p>
        </div>
      </div>

      <div className='flex justify-center items-center pt-12'>
        <button className='bg-blue-600 text-white font-semibold text-xl py-3 rounded-md w-full'>Activity Completed</button>
      </div>

    </div>
  )
}

export default Finisher