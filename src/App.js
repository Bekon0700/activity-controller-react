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
        <div className="col-span-12 lg:col-span-9">
          <div className="w-11/12 mx-auto py-12">
            <Activities activities={activities}/>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-3 border px-6 py-8">
          <Finisher />
        </div>
      </div>
    </div>
  );
}

export default App;
