// Select all buttons on the page
const verify = document.querySelector('#verify');
const createStudent = document.querySelector('#createStudent');
const create = document.querySelector('#create');
const verifyMe = document.querySelector('#verifyMe');

verify.addEventListener('click', () => {

})

createStudent.addEventListener('click', () => {
    document.querySelector('.signin').style.display = 'none';
    document.querySelector('.signup').style.display = 'block';
});

create.addEventListener('click', () => {

});

verifyMe.addEventListener('click', () => {
    document.querySelector('.signin').style.display = 'block';
    document.querySelector('.signup').style.display = 'none';
});