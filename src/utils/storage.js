const activityAddToDB = (activityTime) => {
    let activityInfo = {}

    const storedInfo = localStorage.getItem('activity-info');
    if(storedInfo){
        activityInfo = JSON.parse(storedInfo);
    }

    const acTime = activityInfo['activityTime']
    if(acTime){
        const newAcTime = acTime + activityTime
        activityInfo['activityTime'] = newAcTime
    }else{
        activityInfo['activityTime'] = activityTime
    }

    localStorage.setItem('activity-info', JSON.stringify(activityInfo));
}
const breakAddToDB = (breakTime) => {
    let breakInfo = {
        breakTime
    }


    localStorage.setItem('break-info', JSON.stringify(breakInfo));
}

 const getActivitityInfo = () => {
    let activityInfo = {}
    const storedInfo = localStorage.getItem('activity-info');
    if(storedInfo){
        activityInfo = JSON.parse(storedInfo);
    }else{
        activityInfo['activityTime'] = 0
    }
    return activityInfo
 }
 const getBreakInfo = () => {
    let breakInfo = {}
    const storedInfo = localStorage.getItem('break-info');
    if(storedInfo){
        breakInfo = JSON.parse(storedInfo);
    }else{
        breakInfo['breakTime'] = 0
    }
    return breakInfo
 }
 const deleteDB = () =>{
    localStorage.removeItem('activity-info');
    localStorage.removeItem('break-info');
}

export {
    activityAddToDB,
    breakAddToDB,
    getActivitityInfo,
    getBreakInfo,
    deleteDB
}