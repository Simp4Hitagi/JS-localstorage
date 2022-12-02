let people = [];
// submit
let submit = document.querySelector('#submit');
let display = document.querySelector('#display')

// add eventlistener
submit.addEventListener('click', (e)=>{
    e.preventDefault();
    let fName = document.querySelector('#fname').value;
    let surname = document.querySelector('#surname').value;
    let email = document.querySelector('#email').value;

    // push an object into an array
    people.push(
        {
            fName,
            surname,
            email
        }
    )
    console.table(people);
    // ===Local storage===
    localStorage.setItem('data', JSON.stringify(people));
})

// Display
display.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log(
        JSON.parse(localStorage.getItem('data'))
    );
})
