// Select all buttons on the page
const verify = document.querySelector('#verify');
const createStudent = document.querySelector('#createStudent');
const create = document.querySelector('#create');
const verifyMe = document.querySelector('#verifyMe');

// Data of Students
const nameLibrary = ["Error-Code"];
const ageLibrary = ["18"];
const levelLibrary = ["300"];

verify.addEventListener('click', () => {
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
        checkLength();
    }
    
    function checkLength() {
        nameValueLength = nameValue.length;
        ageValueLength = String(ageValue).length;
        levelValueLength = String(levelValue).length;
        let check1 = false;
        let check2 = false;
        let check3 = false;
        nameCheck();
        ageCheck();
        levelCheck();

        if (check1 === true && check2 === true && check3 === true) {
            checkRecords();
        }

        function nameCheck() {
            if (nameValueLength < 3) {
                paraName.textContent = 'Username should not be less than "3" characters!';
            } else if (nameValueLength > 12) {
                paraName.textContent = 'Username should not be more than "12" characters'
            } else {
                check1 = true;
            }
        }

        function ageCheck() {
            if (ageValueLength !== 2) {
                    paraAge.textContent = 'Age should not be more or less than 2 characters';
            } else {
                check2 = true;
            }
        }

        function levelCheck() {
            if (levelValueLength !== 3) {
                paraLevel.textContent = 'Level should not be more or less than 3 characters';
            } else {
                check3 = true;
            }
        }
    }

    // Check nameLibrary, ageLibrary and levelLibrary if info provided matches
    function checkRecords() {
            const nameIndex = nameLibrary.indexOf(String(nameValue));
            if (nameIndex >= 0) {
                checkAgeWithIndex();
            } else {
                alert('No record found! Please create a student account!');
            }

            function checkAgeWithIndex() {
                if (Number(ageLibrary[nameIndex]) === Number(ageValue)) {
                    checkLevelWithIndex();
                } else {
                    alert('No record found! Please create a student account!');
                }
            }

            function checkLevelWithIndex() {
                if (Number(levelLibrary[nameIndex]) === Number(levelValue)) {
                    alert('You are a Student. Congrats!!!');
                } else {
                    alert('No record found! Please create a student account!');
                }
            }
    }
    
    // Validates characters and outputs error message
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

createStudent.addEventListener('click', () => {
    // Switches "become a student?" page
    document.querySelector('.signin').style.display = 'none';
    document.querySelector('.signup').style.display = 'block';
});

create.addEventListener('click', () => {
    // Select all text field
    const name = document.querySelector('#name');
    const age = document.querySelector('#age');
    const level = document.querySelector('#level');
});

verifyMe.addEventListener('click', () => {
    // Switches to "are you a student?"" page
    document.querySelector('.signin').style.display = 'block';
    document.querySelector('.signup').style.display = 'none';
});