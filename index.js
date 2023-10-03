const start = document.getElementById("start_date")
const end = document.getElementById("end_date")

const today = new Date().toISOString().split("T")[0];

// console.log(today);
start.value = today;
start.min = today;

// créons une fonction pour ajouter la date plus 1 jour à l'input End
const tomorrow = ()=>{
    const day = new Date(today)
    // console.log(day);
    day.setDate(day.getDate() + 1)
    let tomorrow = day.toISOString().split("T")[0];
    // console.log(day);
    end.value = tomorrow
    end.min = tomorrow
}
tomorrow()

start.addEventListener("change", (e)=>{
// console.log(e.target.value);
    let day = new Date(e.target.value)
    day.setDate(day.getDate() + 1)
    let tomorrow = day.toISOString().split("T")[0];
    console.log(day);
    console.log(tomorrow);
    end.value = tomorrow
   

 
})
