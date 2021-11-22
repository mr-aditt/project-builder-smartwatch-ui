window.onload = ()=>{
    daytime();
}

setInterval(function daytime(){
    let today = new Date();
    let day = {
        1: "Monday",
        2: "Tuesday",
        3: "Wednesday",
        4: "Thrusday",
        5: "Friday",
        6: "Saturday",
        7: "Sunday"
    };
    
    document.querySelector("#stime").innerHTML = today.getHours()+":"+today.getMinutes();
    document.querySelector("#time").innerHTML = today.getHours()+":"+today.getMinutes();
    document.querySelector("#day").innerHTML = day[today.getDay()];
}, 1000);