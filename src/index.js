function updateTime(){
let southA = document.querySelector(`#africa`)
if (southA){
let SAdate = southA.querySelector(`.date`)
let SAtime = southA.querySelector(`.time`)
let SAlocal = moment.tz(`Africa/Johannesburg`)
SAdate.innerHTML = SAlocal.format(`Do MMMM YYYY`)
SAtime.innerHTML = SAlocal.format(`h:mm:ss [<small>]A[</small>]`)}

let southK = document.querySelector(`#koria`)
if (southK){
let SKdate = southK.querySelector(`.date`)
let SKtime = southK.querySelector(`.time`)
let SKlocal = moment.tz(`Asia/Seoul`)
SKdate.innerHTML = SKlocal.format(`Do MMMM YYYY`)
SKtime.innerHTML = SKlocal.format(`h:mm:ss [<small>]A[</small>]`)
}}
function changecity(event){
    let cities = document.querySelector(`#cities`)
    let zone = event.target.value
    let newCity = zone.replace("_"," ").split("/")[1]

    let newDate = moment.tz(zone).format(`Do MMMM YYYY`)
    let newtime = moment.tz(zone).format(`h:mm:ss [<small>]A[</small>]`)
    cities.innerHTML = `<div class="city" id="koria">
    <div><h2>${newCity}</h2>
    <div class="date">${newDate}</div></div>
    <div class="time">${newtime}</div></div>`
    
}

setInterval(updateTime,1000)

let select = document.querySelector(`#city`)
select.addEventListener("change",changecity)
