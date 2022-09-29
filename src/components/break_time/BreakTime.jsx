import React, { useEffect } from 'react'
import { breakAddToDB, getBreakInfo } from '../../utils/storage'

const BreakTime = ({data, setBreakId}) => {
    const btnClick = (id) => {
        setBreakId(id)
        breakAddToDB(data.time)
    }

    useEffect(() => {
      const bInfo = getBreakInfo()
      setBreakId(bInfo['breakTime'])
    }, [])

  return (
    <div>
          <button onClick={() => btnClick(data.id)} 
          className={data.active ? 'bg-blue-600 text-white py-2 px-4 rounded-md text-sm 2xl:text-lg 2xl:font-semibold' : 'bg-white py-2 px-4 rounded-md text-sm 2xl:text-lg 2xl:font-semibold'}
          >{data.time}h</button>
    </div>
  )
}

export default BreakTime