import React, { useEffect, useState } from 'react'
import {GrLocation} from 'react-icons/gr'
import BreakTime from '../break_time/BreakTime'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { deleteDB } from '../../utils/storage';

const Finisher = ({activityTime, setActivityTime}) => {
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

  const [breakId, setBreakId] = useState(0)

  useEffect(()=> {
    let pip = [...timeList]
    pip.forEach(el => {
      if(el['id'] === breakId){
        el['active'] = true
      }else{
        el['active'] = false
      }
    })
    setTimeList(pip)
  }, [breakId])

  const notify = () => {
    toast("Achievement Unlocked 🎉✨🎉");
    setActivityTime(0)
    setBreakId(0)
    deleteDB()
  }

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
          <p className='text-2xl 2xl:text-3xl font-bold'>65<span className='text-lg 2xl:text-xl font-semibold text-gray-500'>kg</span></p>
          <p className='text-lg 2xl:text-xl font-bold text-gray-600'>weigh</p>
        </div>
        <div className='flex flex-col gap-2'>
          <p className='text-2xl 2xl:text-3xl font-bold'>5'6"</p>
          <p className='text-lg 2xl:text-xl font-bold text-gray-600'>height</p>
        </div>
        <div className='flex flex-col gap-2'>
          <p className='text-2xl 2xl:text-3xl font-bold'>25<span className='text-lg 2xl:text-xl font-semibold text-gray-500'>yrs</span></p>
          <p className='text-lg 2xl:text-xl font-bold text-gray-600'>age</p>
        </div>
      </div>

      <div className='flex flex-col gap-4'>
        <p className='text-lg font-bold text-gray-700'>Add a Break</p>
        <div className='bg-[#F4F3EC] flex justify-around items-centers px-4 py-4 rounded-md'>
            {
              timeList.map(el => <BreakTime key={el.id} data={el} setBreakId={setBreakId}/>)
            }
        </div>
      </div>

      <div className='flex flex-col gap-4'>
        <p className='text-lg font-bold text-gray-700'>Activity Details</p>
        <div className='bg-[#F4F3EC] flex justify-between items-centers px-4 2xl:px-10 py-4 rounded-md text-lg 2xl:text-xl font-bold'>
            <p >Activity Time</p>
            <p className=' text-gray-600'>
              {
                activityTime ? 
                `${activityTime} hours`
                :
                `0 hours`
              }
            </p>
        </div>
        <div className='bg-[#F4F3EC] flex justify-between items-centers px-4 2xl:px-10 py-4 rounded-md text-lg 2xl:text-xl font-bold'>
            <p >Break Time</p>
            <p className=' text-gray-600'>
              {
                timeList[breakId-1]?.time ?
                `${timeList[breakId-1].time} hours`
                :
                `0 hours`
              }
            </p>
        </div>
      </div>

      <div className='flex justify-center items-center pt-12'>
        <button onClick={notify} className='bg-blue-600 text-white font-semibold text-xl py-3 rounded-md w-full'>Activity Completed</button>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>

    </div>
  )
}

export default Finisher