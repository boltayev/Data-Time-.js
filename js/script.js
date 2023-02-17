const input = document.querySelector('#inp_one')
const convert = document.querySelector(".btn_one")


const big_num = document.querySelector(".big_num")
const time = document.querySelector('.time')
const btn_two = document.querySelector('.btn_two')

const second2 = document.querySelector('.second2')
const third3 = document.querySelector('.third3')

const delet = document.querySelector('.top_block')

const inp = document.querySelector('.inp')


function error(){
    convert.addEventListener('click', () =>{

    second2.innerText = new Date (+input.value).toUTCString()
    third3.innerText = new Date (+input.value)


    delet.classList.remove('hidden')
    })
}
error()


function sayHello() {
    let dd = Date.parse(new Date())/1000
    big_num.innerText =  dd
}

setInterval(() =>{
    const time = document.querySelector('.time')
    let date = new Date()
    let hours = date.getHours()
    let minuts = date.getMinutes();
    let seconds = date.getSeconds();

    if(minuts < 10){
        minuts = '0' + minuts
    }
    if(seconds< 10){
        seconds = '0' + seconds
    }
    time.textContent =  `${hours} : ${minuts} : ${seconds } PM` 
    sayHello()
},1000)





const convert3 = document.querySelector('.btn_three')

const year1 = document.querySelector('.year1')
const month1 = document.querySelector('.month1')
const day1 = document.querySelector('.day1')
const hour1 = document.querySelector('.hour1')
const min1 = document.querySelector('.min1')
const sec1 = document.querySelector('.sec1')

const import1 = document.querySelector('.import1')
const import2 = document.querySelector('.import2')
const import3 = document.querySelector('.import3')


convert3.addEventListener('click', () =>{
    let qq1 = year1.value
    let qq2 = month1.value
    let qq3 = day1.value
    let qq4 = hour1.value
    let qq5 = min1.value
    let qq6 = sec1.value

    let s = new Date(qq1,qq2,qq3,qq4,qq5,qq6);
    let ms = Date.parse(s);
    let l = new Date(qq1,qq2,qq3,qq4,qq5,qq6).toUTCString()

    import1.innerText = ms

    import2.innerText = l
    import3.innerText = s

})


let newDate = new Date (2022, 03 , 03).setTime
console.log(newDate)


