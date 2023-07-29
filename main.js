const button =document.querySelector('button')
const h1 = document.querySelector('h1')
const p = document.querySelector('p')


button.addEventListener('click' , getQute)

 async function getQute() {
    const response = await  fetch('https://quotable.io/random')
    const data = await response.json()
    const quote = data.content
    const author = data.author
    h1.innerText = quote
    p.innerText = author

}
setInterval(()=>{
    getQute()
},4000)

