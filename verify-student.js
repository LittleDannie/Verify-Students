// Select all buttons on the page
const verify = document.querySelector('#verify');
const createStudent = document.querySelector('#createStudent');
const create = document.querySelector('#create');
const verifyMe = document.querySelector('#verifyMe');

verify.addEventListener('click', () => {
    // List data of Students
    const nameLibrary = ["Error-Code"];
    const ageLibrary = ["18"];
    const levelLibrary = ["300"];

    // Select all paragraphs field
    const paraName = document.querySelector('.name');
    const paraAge = document.querySelector('.age');
    const paraLevel = document.querySelector('.level');

    //Select all text box
    const name = document.querySelector('#name');
    const age = document.querySelector('#age');
    const level = document.querySelector('#level');
    
    const nameValue = name.value;
    const ageValue = parseFloat(age.value);
    const levelValue = parseFloat(level.value);

    // console.log(nameValue);
    // console.log(ageValue);
    // console.log(levelValue);

    if (!isNaN(nameValue)) {
        errorAlert();
    } else if (isNaN(ageValue)) {
        errorAlert();
    } else if (isNaN(levelValue)) {
        errorAlert();
    } else {
        paraName.textContent = '';
        paraAge.textContent = '';
        paraLevel.textContent = '';
    }
    
    function errorAlert() {
        if (nameValue === "" || nameValue === undefined || nameValue === null) {
            paraName.textContent = 'Please fill in your username!';
        } else if (!isNaN(nameValue)) {
            paraName.textContent = 'Username should begin with letters only!';
        } else {
            paraName.textContent = '';
        }

        if (isNaN(ageValue)) {
            paraAge.textContent = 'age should contain numbers only!';
            console.log(ageValue);
        } else if (ageValue === null || ageValue === undefined) {
            paraAge.textContent = 'please fill in your age!';
        } else {
            paraAge.textContent = '';
        }

        if (isNaN(levelValue)) {
            paraLevel.textContent = 'level should contain numbers only!';
        } else if (levelValue === " " || levelValue === undefined) {
            paraLevel.textContent = 'please fill in your username!';
        } else {
            paraLevel.textContent = '';
        }
    }
})

// createStudent.addEventListener('click', () => {
//     document.querySelector('.signin').style.display = 'none';
//     document.querySelector('.signup').style.display = 'block';
// });

create.addEventListener('click', () => {
    // Select all text field
    const name = document.querySelector('#name');
    const age = document.querySelector('#age');
    const level = document.querySelector('#level');
});

// verifyMe.addEventListener('click', () => {
//     document.querySelector('.signin').style.display = 'block';
//     document.querySelector('.signup').style.display = 'none';
// });