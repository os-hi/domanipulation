const container = document.createElement('div')


// logo for display toggle
const logo = document.createElement('img')

// component for the counter button
let counter = document.getElementById('counter')
let count = 0
const button1 = document.createElement('button')
button1.value = `clicked ${count} times`
button1.id = "counter"
counter?.addEventListener("click", ()=>{
    count++ 
})

// component for the toggle button 
let toggleLogo = document.getElementById('toggle')
const button2 = document.createElement('button')
button2.innerText= 'toggle'
button2.id = 'toggle'
toggleLogo?.addEventListener("click",() => {
    logo.toggleAttribute('hidden')
})

// component for the password form
const passwordForm = document.createElement('form')
const passwordInput = document.createElement('input')
passwordForm.appendChild(passwordInput)
passwordInput.type = "password"

// component for checkbox
const checkedBox = document.getElementById('checked')
const checkBox = document.createElement('input')
checkBox.type = "checkbox"
checkBox.id = "checked"
checkedBox?.addEventListener("click", ()=>{
    passwordInput.type = "text"
})

// append the components to container
container.appendChild(button1)
container.appendChild(button2)
container.appendChild(passwordForm)