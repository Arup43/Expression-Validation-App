let button = document.querySelector('#btn')

button.addEventListener('click', validate)

function validate(e){
    let expression = e.target.textContent.trim()
    let input
    switch (expression) {
        case 'Email':
            input = prompt('Enter your Email: ')
            while(input===''){
                input = prompt('Enter your Email: ')
            }
            if(input !== null) {
                validateEmail(input)
            }
            break
        case 'Phone Number':
            input = prompt('Enter your Phone Number: ')
            while(input===''){
                input = prompt('Enter your Phone Number: ')
            }
            if(input !== null) {
                validatePhoneNumber(input)
            }
            break
        case 'Post Code':
            input = prompt('Enter your Post Code: ')
            while(input===''){
                input = prompt('Enter your Post Code: ')
            }
            if(input !== null) {
                validatePostCode(input)
            }
            break
    }
    e.preventDefault()
}

function validateEmail(email){
    let re = /^([A-Za-z0-9]\.?)+[^\.]@([A-Za-z0-9]\.?)+[^\.]$/
    showResult(re.test(email))
}

function validatePhoneNumber(phoneNumber) {
    let re = /^(\+)?(88)?01[0-9]{9}$/
    showResult(re.test(phoneNumber))
}

function validatePostCode(postCode){
    let re = /^[0-9]{4}$/
    showResult(re.test(postCode))
}

function showResult(result){
    let div = document.createElement('div')
    if(result){
        div.className = 'success'
        div.appendChild(document.createTextNode('The given Expression is valid!'))
    }
    else{
        div.className = 'error'
        div.appendChild(document.createTextNode('The given Expression is invalid!'))
    }
    let container = document.querySelector('.container')
    container.appendChild(div)
    setTimeout(() => {
        div.remove()
    }, 2000)
}