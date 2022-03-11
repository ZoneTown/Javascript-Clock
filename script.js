function showDate(){
    var date= new Date();
    var hour=date.getHours();
    var minute=date.getMinutes();
    var second=date.getSeconds();
    var year=date.getFullYear();
    var month=date.getMonth();
    var day=date.getDay();
    var session="AM";


    if(month==0){month="January"};
    if(month==1){month="February"};
    if(month==2){month="March"};
    if(month==3){month="April"};
    if(month==4){month="May"};
    if(month==5){month="June"};
    if(month==6){month="July"};
    if(month==7){month="August"};
    if(month==8){month="September"};
    if(month==9){month="October"};
    if(month==10){month="November"};
    if(month==11){month="December"};

    if(day==0){day="Sunday"};
    if(day==1){day="Monday"};
    if(day==2){day="Tuesday"};
    if(day==3){day="Wednesday"};
    if(day==4){day="Thursday"};
    if(day==5){day="Friday"};
    if(day==6){day="Saturday"};

    document.getElementById("myDay").innerHTML=day+", "+month+", "+year;

    // Time Logic
    if(hour>=12){
        session="PM"
    }
    if(hour==0){
        hour=12;
    }
    if(hour>12){
        hour-=12;
    }

    hour=(hour<10)?"0"+hour:hour;
    minute=(minute<10)?"0"+minute:minute;
    second=(second<10)?"0"+second:second;

    let time=`${hour}:${minute}:${second} ${session}`;

    document.getElementById('myClock').innerHTML=time;

    setTimeout(showDate,1000);
}

showDate();