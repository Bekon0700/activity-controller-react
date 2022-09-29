import React from 'react'
import {GiFireworkRocket} from 'react-icons/gi'
import ActivityCard from '../activity_card/ActivityCard'


const Activities = ({activities}) => {
  return (
    <div>
      <div className='flex items-center gap-4 text-xl md:text-2xl xl:text-4xl text-green-700 font-semibold'>
        <GiFireworkRocket />
        <p>Improve Yourself Workshop</p>
      </div>
      <p className='uppercase text-lg lg:text-xl text-blue-500 font-semibold py-6'>Select your Activities</p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {
          activities.map(el => <ActivityCard key={el.id} data={el}/>)
        }
      </div>
    </div>
  )
}

export default Activities