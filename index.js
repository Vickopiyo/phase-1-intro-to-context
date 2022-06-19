// Your code here
function createEmployeeRecord(employee){
    return {
        firstName :employee[0],
        familyName :employee[1],
        title :employee[2],
        payPerHour:employee[3],
        timeInEvents : [],
        timeOutEvents :[]
    }
}
function createEmployeeRecords(records){
    return records.map(worker=>createEmployeeRecord(worker))

}
function createTimeInEvent(array,dateObj){
    let year = dateObj.slice(0,10);
    let hour = dateObj.slice(-4)
    const time ={
        type:"TimeIn",
        date :year,
        hour:parseInt(hour)
    }
    let updateRecord = createEmployeeRecord(array);
    updateRecord.timeInEvents.push(time)

    return updateRecord;

}
function createTimeOutEvent(employee,dateObj){
    let year = dateObj.slice(0,10);
    let hour = dateObj.slice(-4)
    employee.timeOutEvents.push({
        type:"TimeOut",
        date :year,
        hour:parseInt(hour)
    })
    

    return employee;

}
const hoursWorkedOnDate = (employee, findDate) => {
    let setDate = employee.timeInEvents.find(variab => {
        return variab.date === findDate
    })
    let outDate = employee.timeInEvents.find(variable=> {
        return variable.date === findDate
    })

    return (outDate.hour - setDate.hour) / 100
  }


