import React from 'react'
import {GrLocation} from 'react-icons/gr'


const Finisher = () => {
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
        <button className='bg-white p-3 rounded-sm text-lg font-semibold'>10min</button>
      </div>
      </div>

    </div>
  )
}

export default Finisher