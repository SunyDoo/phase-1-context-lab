/* Your Code Here */
const createEmployeeRecord =function (array){
    return{
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    } 
}

const createEmployeeRecords = function(employeeArr){
    return employeeArr.map(rec=>createEmployeeRecord(rec))     
} 

const createTimeInEvent = function (stamp){
    let timeIn= {
        type:"TimeIn",
        hour: parseInt(stamp.split(' ')[1]),
        date: stamp.split(' ')[0]
    }
    this.timeInEvents.push(timeIn)
    return this    
}

const createTimeOutEvent= function(stamp){ 
    let timeOut= {
        type:"TimeOut",
        hour: parseInt(stamp.split(' ')[1]),
        date: stamp.split(' ')[0]
    }
    this.timeOutEvents.push(timeOut)
    return this    
}


const hoursWorkedOnDate= function(string){ 
    let timeIn = this.timeInEvents.find(event=>{
        return event.date===string
    }).hour
    let timeOut = this.timeOutEvents.find(event=>{
        return event.date===string
    }).hour
    let hours= (timeOut-timeIn)/100
    return hours        
}

const wagesEarnedOnDate= function(date){
    return hoursWorkedOnDate.call(this, date)*this.payPerHour       
}
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */




const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

const findEmployeeByFirstName = function(employeeArr,string){
    let employee = employeeArr.find(event=>event.firstName === string)
    return employee
}

const calculatePayroll = function(array){
    return array.reduce((total, record)=>{
        return total + allWagesFor.call(record)
    }, 0)    
}
