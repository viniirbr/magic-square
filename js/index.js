const numbers = document.querySelectorAll('.number_container');

numbers.forEach((number) => {
    number.addEventListener('ondrag', (event) => {
        console.log(event.target);
    })
})