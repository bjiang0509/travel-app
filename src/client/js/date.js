//calculate number of days between date 1 and date2
const dateProcess = (date1, date2) => {
    let date3= new Date(date1);
    let date4 = new Date(date2);
    let dateDiff = date4 - date3;
    let dateDiffInDays = Math.ceil(dateDiff / (1000 * 60 * 60 * 24));
    return dateDiffInDays;
}

//date range picker function
const dateControl = () => {
    let start = document.querySelector('#start');
    let end = document.querySelector('#end');
    let today = new Date();
    let mm = today.getMonth() + 1;
    let dd = today.getDate();
    let yyyy = today.getFullYear();
    if(mm < 10){
        mm = '0' + mm.toString();
    }
    if(dd < 10){
        dd = '0'+ mm.toString();
    }
    today = `${yyyy}-${mm}-${dd}`
    start.setAttribute("min", today);
    end.setAttribute("min", today);
    
    let sixteenDaysLater = new Date();
    let dd2 = sixteenDaysLater.getDate(), 
    mm2 = sixteenDaysLater.getMonth()+1, yy2 = sixteenDaysLater.getFullYear();
    let dateRange = dd2+16;
    let daysInMonth = calDaysInMonth(mm2, yy2);
    if(dateRange > daysInMonth){
        mm2 += 1;
        if(mm2 > 12){
            mm2 = 1;
            dd2 = 1;
            yy2 += 1;
        }else{
            dd2 = dateRange - daysInMonth;
        }
    }
    if(mm2 < 10){
        mm2 = '0' + mm2.toString();
    }
    if(dd2 < 10){
        dd2 = '0'+ dd2.toString();
    }
    let maxDate = `${yy2}-${mm2}-${dd2}`

    start.setAttribute("max", maxDate);
    end.setAttribute("max", maxDate);
}

//calculates the number of days in the month
const calDaysInMonth = (mm, yy) => {
    return new Date(yy, mm, 0).getDate();
}
export {dateProcess, dateControl}
