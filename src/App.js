import { useEffect, useState } from "react";

function App() {
  const [activities, setActivities] = useState([])
  useEffect(()=>{
    console.log(154)
    fetch('activityDB.json')
    .then(res => res.json())
    .then(data =>setActivities(data))
  }, [])
  return (
    <div className="App">
    </div>
  );
}

export default App;
