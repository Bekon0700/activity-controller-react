import { useEffect, useState } from "react";

import Activities from './components/activity_showCase/Activities'
import Finisher from './components/activity_finisher/Finisher'

function App() {
  const [activities, setActivities] = useState([])

  useEffect(()=>{
    fetch('activityDB.json')
    .then(res => res.json())
    .then(data =>setActivities(data))
  }, [])

  return (
    <div>
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-9">
          <div className="w-2/3 mx-auto py-12">
            <Activities activities={activities}/>
          </div>
        </div>
        <div className="col-span-12 md:col-span-3">
          <Finisher />
        </div>
      </div>
    </div>
  );
}

export default App;
