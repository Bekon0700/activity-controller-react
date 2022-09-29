import { useEffect, useState } from "react";

import Activities from './components/activity_showCase/Activities'
import Finisher from './components/activity_finisher/Finisher'

function App() {
  const [activities, setActivities] = useState([])
  const [activityTime, setActivityTime] = useState(0)

  useEffect(()=>{
    fetch('activityDB.json')
    .then(res => res.json())
    .then(data =>setActivities(data))
  }, [])
  console.log(activityTime)
  return (
    <div>
      <div className="grid grid-cols-12">
        <div className="col-span-12 lg:col-span-9">
          <div className="w-11/12 mx-auto py-12">
            <Activities activities={activities} activityTime={activityTime} setActivityTime={setActivityTime}/>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-3 bg-[#e3f7ff] px-6 pt-14">
          <Finisher activityTime={activityTime}/>
        </div>
      </div>
    </div>
  );
}

export default App;
