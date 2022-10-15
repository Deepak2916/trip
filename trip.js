console.log('planning to go to manali');
const readyToGo= async()=>{
const Planing=new Promise((resolve, reject) => {
     setTimeout(()=> resolve('Im ready'),3000)
})
const BuyCar=new Promise((resolve, reject) =>resolve(`car`))

const setDate=new Promise((resolve, reject) =>resolve('date'))
const Bythings=new Promise((resolve, reject) =>resolve('things'))

let readyToGo=await Planing;

let Car=await BuyCar;

console.log(`I will buy ${Car}`)

let Date = await setDate;
console.log(` I'll set ${Date} to go on that day`);


let things=await Bythings;
console.log(` I'll buy required ${things} for trip`)

return readyToGo
}
readyToGo().then((m)=>console.log(`${m} to go`))
