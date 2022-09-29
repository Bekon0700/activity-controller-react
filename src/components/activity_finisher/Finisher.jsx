import React, { useEffect, useState } from 'react'
import {GrLocation} from 'react-icons/gr'
import BreakTime from '../break_time/BreakTime'


const Finisher = () => {
  const [timeList, setTimeList] = useState([])

  const [breakTime, setBreakTime] = useState()

  const breakList = [
    {
      id: 1,
      time: '10m',
      active: false
    },
    {
      id: 2,
      time: '30m',
      active: false
    },
    {
      id: 3,
      time: '1h',
      active: false
    },
    {
      id: 4,
      time: '3h',
      active: false
    },
  ]
  useEffect(()=> {
    console.log(timeList)
    setTimeList(breakList)
    console.log(timeList)
  }, [])

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

      <div>
        <p>Add a Break</p>
        <div className='bg-[#F4F3EC] flex justify-around items-centers px-4 py-3 rounded-md'>
            {
              timeList.map(el => <BreakTime key={el.id} data={el} setBreakTime={setBreakTime}/>)
            }
        </div>
      </div>

    </div>
  )
}

export default Finisher