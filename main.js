const ratingCard = document.querySelector('.rating-card')
const thankYouCard = document.querySelector('.thank-you-card')
const submitButton = document.querySelector('.submit-button')
const valueButton = document.querySelectorAll('.value-button')
const ratingValue = document.querySelector('.rating-value')

let rating

valueButton.forEach(button => {
    button.addEventListener('click', (e) => {
        const selectedValue = e.target
        valueButton.forEach(button => {
            button.classList.remove('active')
        });
        selectedValue.classList.add('active')
        rating = selectedValue.innerText
    });
});

submitButton.addEventListener('click', (s) => {
    s.preventDefault()
    if (!rating) {
        alert('Please Select a Rating!')
    } else {
        ratingCard.classList.add('hidden')
        thankYouCard.classList.remove('hidden')
        ratingValue.innerText = rating
    }
})