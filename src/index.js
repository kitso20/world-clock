function updateTime(){
let southA = document.querySelector(`#africa`)
let SAdate = southA.querySelector(`.date`)
let SAtime = southA.querySelector(`.time`)
let SAlocal = moment.tz(`Africa/Johannesburg`)
SAdate.innerHTML = SAlocal.format(`Do MMMM YYYY`)
SAtime.innerHTML = SAlocal.format(`h:mm:ss [<small>]A[</small>]`)

let southK = document.querySelector(`#koria`)
let SKdate = southK.querySelector(`.date`)
let SKtime = southK.querySelector(`.time`)
let SKlocal = moment.tz(`Asia/Seoul`)
SKdate.innerHTML = SKlocal.format(`Do MMMM YYYY`)
SKtime.innerHTML = SKlocal.format(`h:mm:ss [<small>]A[</small>]`)
}

setInterval(updateTime,1000)
