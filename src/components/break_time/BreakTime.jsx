import React from 'react'

const BreakTime = ({data, setBreakTime}) => {
    const btnClick = (id) => {
        setBreakTime(id)
    }

  return (
    <div>
          <button onClick={() => btnClick(data.id)} 
          className={data.active ? 'bg-blue-600 w-20 py-2 rounded-md text-white text-lg font-semibold' : 'bg-white w-20 py-2 rounded-md text-lg font-semibold'}
          >{data.time}</button>
    </div>
  )
}

export default BreakTime