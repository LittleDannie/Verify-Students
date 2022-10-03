// Select all buttons on the page
const verify = document.querySelector('#verify');
const createStudent = document.querySelector('#createStudent');
const create = document.querySelector('#create');
const verifyMe = document.querySelector('#verifyMe');

// Select displayMessage tag
const displayMessage = document.querySelector('#displayMessage');
const displayMessage2 = document.querySelector('#displayMessage2');

// Data of Students
const nameLibrary = ["Error-Code"];
const ageLibrary = ["18"];
const levelLibrary = ["300"];

// Verify button
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

    // Verify if input matches
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

    // Check for the length of the inputs
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
            checkRangeAndDigits();
        }

        function nameCheck() {
            if (nameValueLength < 3) {
                paraName.textContent = 'Username should not be less than "3" characters!';
                document.querySelector('#displayMessage').style.border = "none";
                document.querySelector('#displayMessage').style.padding = "0";
                document.querySelector('#displayMessage').style.marginTop = "0";
                document.querySelector('#displayMessage').style.marginBottom = "0";
                displayMessage.textContent = '';
            } else if (nameValueLength > 12) {
                paraName.textContent = 'Username should not be more than "12" characters';
                document.querySelector('#displayMessage').style.border = "none";
                document.querySelector('#displayMessage').style.padding = "0";
                document.querySelector('#displayMessage').style.marginTop = "0";
                document.querySelector('#displayMessage').style.marginBottom = "0";
                displayMessage.textContent = '';
            } else {
                check1 = true;
            }
        }

        function ageCheck() {
            if (ageValueLength !== 2) {
                    paraAge.textContent = 'Age should not be more or less than 2 characters';
                    document.querySelector('#displayMessage').style.border = "none";
                    document.querySelector('#displayMessage').style.padding = "0";
                    document.querySelector('#displayMessage').style.marginTop = "0";
                    document.querySelector('#displayMessage').style.marginBottom = "0";
                    displayMessage.textContent = '';
            } else {
                check2 = true;
            }
        }

        function levelCheck() {
            if (levelValueLength !== 3) {
                paraLevel.textContent = 'Level should not be more or less than 3 characters';
                document.querySelector('#displayMessage').style.border = "none";
                document.querySelector('#displayMessage').style.padding = "0";
                document.querySelector('#displayMessage').style.marginTop = "0";
                document.querySelector('#displayMessage').style.marginBottom = "0";
                displayMessage.textContent = '';
            } else {
                check3 = true;
            }
        }
    }

    // Check age range and level digits
    function checkRangeAndDigits() {
        const ageRange = Number(ageValue);
        const levelDigits = String(levelValue);
        const digitTwo = levelDigits[1];
        const digitThree = levelDigits[2];
        let rangeCheck = false;
        let digitsCheck = false;
        ageRangeCheck();
        levelDigitCheck();

        if (rangeCheck && digitsCheck) {
            checkForSpace();
        }

        function ageRangeCheck() {
            if (ageRange < 16) {
                paraAge.textContent = 'You must be up to 16 years to be a student';
                document.querySelector('#displayMessage').style.border = "none";
                document.querySelector('#displayMessage').style.padding = "0";
                document.querySelector('#displayMessage').style.marginTop = "0";
                document.querySelector('#displayMessage').style.marginBottom = "0";
                displayMessage.textContent = '';
            } else if (ageRange > 90) {
                paraAge.textContent = 'Sorry! you are too old to be a student';
                document.querySelector('#displayMessage').style.border = "none";
                document.querySelector('#displayMessage').style.padding = "0";
                document.querySelector('#displayMessage').style.marginTop = "0";
                document.querySelector('#displayMessage').style.marginBottom = "0";
                displayMessage.textContent = '';
            } else {
                return rangeCheck = true;
            }
        }

        function levelDigitCheck() {
            if (Number(digitTwo) !== 0) {
                paraLevel.textContent = 'Second digit must be "0"!';
                document.querySelector('#displayMessage').style.border = "none";
                document.querySelector('#displayMessage').style.padding = "0";
                document.querySelector('#displayMessage').style.marginTop = "0";
                document.querySelector('#displayMessage').style.marginBottom = "0";
                displayMessage.textContent = '';
            } else if (Number(digitThree) !== 0) {
                paraLevel.textContent = 'Third digit must be "0"!';
                document.querySelector('#displayMessage').style.border = "none";
                document.querySelector('#displayMessage').style.padding = "0";
                document.querySelector('#displayMessage').style.marginTop = "0";
                document.querySelector('#displayMessage').style.marginBottom = "0";
                displayMessage.textContent = '';
            } else {
                return digitsCheck = true;
            }
        }
    }

    // Check for space in Username input
    function checkForSpace() {
        const spaceCheck = nameValue[0];

        if (spaceCheck === ' ') {
            paraName.textContent = 'Username must not begin with "space"';
            document.querySelector('#displayMessage').style.border = "none";
            document.querySelector('#displayMessage').style.padding = "0";
            document.querySelector('#displayMessage').style.marginTop = "0";
            document.querySelector('#displayMessage').style.marginBottom = "0";
            displayMessage.textContent = '';
        } else {
            checkRecords();
        }
    }

    // Check nameLibrary, ageLibrary and levelLibrary if info provided matches
    function checkRecords() {
        const nameIndex = nameLibrary.indexOf(String(nameValue));
        if (nameIndex >= 0) {
            checkAgeWithIndex();
        } else {
            document.querySelector('#displayMessage').style.border = "2px solid red";
            document.querySelector('#displayMessage').style.color = "red";
            document.querySelector('#displayMessage').style.padding = "10px";
            document.querySelector('#displayMessage').style.marginTop = "20px";
            document.querySelector('#displayMessage').style.marginBottom = "-10px";
            displayMessage.textContent = 'No record found! Please create a student record!';
        }

        function checkAgeWithIndex() {
            if (Number(ageLibrary[nameIndex]) === Number(ageValue)) {
                checkLevelWithIndex();
            } else {
                document.querySelector('#displayMessage').style.border = "2px solid red";
                document.querySelector('#displayMessage').style.color = "red";
                document.querySelector('#displayMessage').style.padding = "10px";
                document.querySelector('#displayMessage').style.marginTop = "20px";
                document.querySelector('#displayMessage').style.marginBottom = "-10px";
                displayMessage.textContent = 'No record found! Please create a student record!';
            }
        }

        function checkLevelWithIndex() {
            if (Number(levelLibrary[nameIndex]) === Number(levelValue)) {
                document.querySelector('#displayMessage').style.border = "2px solid lime";
                document.querySelector('#displayMessage').style.color = "lime";
                document.querySelector('#displayMessage').style.padding = "10px";
                document.querySelector('#displayMessage').style.marginTop = "20px";
                document.querySelector('#displayMessage').style.marginBottom = "-10px";
                displayMessage.textContent = 'You are a Student. Congrats!!!';
            } else {
                document.querySelector('#displayMessage').style.border = "2px solid red";
                document.querySelector('#displayMessage').style.color = "red";
                document.querySelector('#displayMessage').style.padding = "10px";
                document.querySelector('#displayMessage').style.marginTop = "20px";
                document.querySelector('#displayMessage').style.marginBottom = "-10px";
                displayMessage.textContent = 'No record found! Please create a student record!';
            }
        }
    }
    
    // Validates characters and outputs error message
    function errorAlert() {
        if (nameValue === "" || nameValue === undefined || nameValue === null) {
            paraName.textContent = 'Please fill in your username!';
            document.querySelector('#displayMessage').style.border = "none";
            document.querySelector('#displayMessage').style.padding = "0";
            document.querySelector('#displayMessage').style.marginTop = "0";
            document.querySelector('#displayMessage').style.marginBottom = "0";
            displayMessage.textContent = '';
        } else if (!isNaN(nameValue)) {
            paraName.textContent = 'Username should begin with letters only!';
            document.querySelector('#displayMessage').style.border = "none";
            document.querySelector('#displayMessage').style.padding = "0";
            document.querySelector('#displayMessage').style.marginTop = "0";
            document.querySelector('#displayMessage').style.marginBottom = "0";
            displayMessage.textContent = '';
        } else {
            paraName.textContent = '';
            document.querySelector('#displayMessage').style.border = "none";
            document.querySelector('#displayMessage').style.padding = "0";
            document.querySelector('#displayMessage').style.marginTop = "0";
            document.querySelector('#displayMessage').style.marginBottom = "0";
            displayMessage.textContent = '';
        }

        if (isNaN(ageValue)) {
            paraAge.textContent = 'age should contain numbers only!';
            document.querySelector('#displayMessage').style.border = "none";
            document.querySelector('#displayMessage').style.padding = "0";
            document.querySelector('#displayMessage').style.marginTop = "0";
            document.querySelector('#displayMessage').style.marginBottom = "0";
            displayMessage.textContent = '';
        } else if (ageValue === null || ageValue === undefined) {
            paraAge.textContent = 'please fill in your age!';
            document.querySelector('#displayMessage').style.border = "none";
            document.querySelector('#displayMessage').style.padding = "0";
            document.querySelector('#displayMessage').style.marginTop = "0";
            document.querySelector('#displayMessage').style.marginBottom = "0";
            displayMessage.textContent = '';
        } else {
            paraAge.textContent = '';
            document.querySelector('#displayMessage').style.border = "none";
            document.querySelector('#displayMessage').style.padding = "0";
            document.querySelector('#displayMessage').style.marginTop = "0";
            document.querySelector('#displayMessage').style.marginBottom = "0";
            displayMessage.textContent = '';
        }

        if (isNaN(levelValue)) {
            paraLevel.textContent = 'level should contain numbers only!';
            document.querySelector('#displayMessage').style.border = "none";
            document.querySelector('#displayMessage').style.padding = "0";
            document.querySelector('#displayMessage').style.marginTop = "0";
            document.querySelector('#displayMessage').style.marginBottom = "0";
            displayMessage.textContent = '';
        } else if (levelValue === " " || levelValue === undefined) {
            paraLevel.textContent = 'please fill in your username!';
            document.querySelector('#displayMessage').style.border = "none";
            document.querySelector('#displayMessage').style.padding = "0";
            document.querySelector('#displayMessage').style.marginTop = "0";
            document.querySelector('#displayMessage').style.marginBottom = "0";
            displayMessage.textContent = '';
        } else {
            paraLevel.textContent = '';
            document.querySelector('#displayMessage').style.border = "none";
            document.querySelector('#displayMessage').style.padding = "0";
            document.querySelector('#displayMessage').style.marginTop = "0";
            document.querySelector('#displayMessage').style.marginBottom = "0";
            displayMessage.textContent = '';
        }
    }
})

// Create Student Account button
createStudent.addEventListener('click', () => {
    // Switches "become a student?" page
    document.querySelector('.signin').style.display = 'none';
    document.querySelector('.signup').style.display = 'block';
});

// Create button
create.addEventListener('click', () => {
    // Select all paragraphs field
    const paraName2 = document.querySelector('.name2');
    const paraAge2 = document.querySelector('.age2');
    const paraLevel2 = document.querySelector('.level2');

    //Select all text box
    const name2 = document.querySelector('#name2');
    const age2 = document.querySelector('#age2');
    const level2 = document.querySelector('#level2');
    
    const nameValue2 = name2.value;
    const ageValue2 = parseFloat(age2.value);
    const levelValue2 = parseFloat(level2.value);

    // Verify if input matches
    if (!isNaN(nameValue2)) {
        errorAlert2();
    } else if (isNaN(ageValue2)) {
        errorAlert2();
    } else if (isNaN(levelValue2)) {
        errorAlert2();
    } else {
        paraName2.textContent = '';
        paraAge2.textContent = '';
        paraLevel2.textContent = '';
        checkLength2();
    }
    
    // Check for the length of the inputs
    function checkLength2() {
        nameValueLength2 = nameValue2.length;
        ageValueLength2 = String(ageValue2).length;
        levelValueLength2 = String(levelValue2).length;
        let check12 = false;
        let check22 = false;
        let check32 = false;
        nameCheck2();
        ageCheck2();
        levelCheck2();

        if (check12 === true && check22 === true && check32 === true) {
            checkRangeAndDigits2();
        }

        function nameCheck2() {
            if (nameValueLength2 < 3) {
                paraName2.textContent = 'Username should not be less than "3" characters!';
                document.querySelector('#displayMessage2').style.border = "none";
                document.querySelector('#displayMessage2').style.padding = "0";
                document.querySelector('#displayMessage2').style.marginTop = "0";
                document.querySelector('#displayMessage2').style.marginBottom = "0";
                displayMessage2.textContent = '';
            } else if (nameValueLength2 > 12) {
                paraName2.textContent = 'Username should not be more than "12" characters';
                document.querySelector('#displayMessage2').style.border = "none";
                document.querySelector('#displayMessage2').style.padding = "0";
                document.querySelector('#displayMessage2').style.marginTop = "0";
                document.querySelector('#displayMessage2').style.marginBottom = "0";
                displayMessage2.textContent = '';
            } else {
                check12 = true;
            }
        }

        function ageCheck2() {
            if (ageValueLength2 !== 2) {
                    paraAge2.textContent = 'Age should not be more or less than 2 characters';
                    document.querySelector('#displayMessage2').style.border = "none";
                    document.querySelector('#displayMessage2').style.padding = "0";
                    document.querySelector('#displayMessage2').style.marginTop = "0";
                    document.querySelector('#displayMessage2').style.marginBottom = "0";
                    displayMessage2.textContent = '';
            } else {
                check22 = true;
            }
        }

        function levelCheck2() {
            if (levelValueLength2 !== 3) {
                paraLevel2.textContent = 'Level should not be more or less than 3 characters';
                document.querySelector('#displayMessage2').style.border = "none";
                document.querySelector('#displayMessage2').style.padding = "0";
                document.querySelector('#displayMessage2').style.marginTop = "0";
                document.querySelector('#displayMessage2').style.marginBottom = "0";
                displayMessage2.textContent = '';
            } else {
                check32 = true;
            }
        }
    }

    // Check age range and level digits
    function checkRangeAndDigits2() {
        const ageRange2 = Number(ageValue2);
        const levelDigits2 = String(levelValue2);
        const digitTwo2 = levelDigits2[1];
        const digitThree2 = levelDigits2[2];
        let rangeCheck2 = false;
        let digitsCheck2 = false;
        ageRangeCheck2();
        levelDigitCheck2();

        if (rangeCheck2 && digitsCheck2) {
            checkForSpace2();
        }

        function ageRangeCheck2() {
            if (ageRange2 < 16) {
                paraAge2.textContent = 'You must be up to 16 years to be a student';
                document.querySelector('#displayMessage2').style.border = "none";
                document.querySelector('#displayMessage2').style.padding = "0";
                document.querySelector('#displayMessage2').style.marginTop = "0";
                document.querySelector('#displayMessage2').style.marginBottom = "";
                displayMessage2.textContent = '';
            } else if (ageRange2 > 90) {
                paraAge2.textContent = 'Sorry! you are too old to be a student';
                document.querySelector('#displayMessage2').style.border = "none";
                document.querySelector('#displayMessage2').style.padding = "0";
                document.querySelector('#displayMessage2').style.marginTop = "0";
                document.querySelector('#displayMessage2').style.marginBottom = "";
                displayMessage2.textContent = '';
            } else {
                return rangeCheck2 = true;
            }
        }

        function levelDigitCheck2() {
            if (Number(digitTwo2) !== 0) {
                paraLevel2.textContent = 'Second digit must be "0"!';
                document.querySelector('#displayMessage2').style.border = "none";
                document.querySelector('#displayMessage2').style.padding = "0";
                document.querySelector('#displayMessage2').style.marginTop = "0";
                document.querySelector('#displayMessage2').style.marginBottom = "";
                displayMessage2.textContent = '';
            } else if (Number(digitThree2) !== 0) {
                paraLevel2.textContent = 'Third digit must be "0"!';
                document.querySelector('#displayMessage2').style.border = "none";
                document.querySelector('#displayMessage2').style.padding = "0";
                document.querySelector('#displayMessage2').style.marginTop = "0";
                document.querySelector('#displayMessage2').style.marginBottom = "";
                displayMessage2.textContent = '';
            } else {
                return digitsCheck2 = true;
            }
        }
    }

    // Check for space in Username input
    function checkForSpace2() {
        const spaceCheck = nameValue2[0];

        if (spaceCheck === ' ') {
            paraName2.textContent = 'Username must not begin with "space"';
            document.querySelector('#displayMessage2').style.border = "none";
            document.querySelector('#displayMessage2').style.padding = "0";
            document.querySelector('#displayMessage2').style.marginTop = "0";
            document.querySelector('#displayMessage2').style.marginBottom = "";
            displayMessage2.textContent = '';
        } else {
            storeRecord();
        }
    }

    // Store record in Library arrays
    function storeRecord() {
        const matchName = nameLibrary.indexOf(String(nameValue2));
        const matchAge = ageLibrary[matchName];
        const matchLevel = levelLibrary[matchName];
        // const matchAgeIndex = ageLibrary.indexOf(String(matchAge));
        // const matchLevelIndex = levelLibrary.indexOf(String(matchLevel));
        
        if ((matchName >= 0) && (matchAge === String(ageValue2)) && (matchLevel === String(levelValue2))) {
            document.querySelector('#displayMessage2').style.border = "2px solid red";
            document.querySelector('#displayMessage2').style.color = "red";
            document.querySelector('#displayMessage2').style.padding = "10px";
            document.querySelector('#displayMessage2').style.marginTop = "20px";
            document.querySelector('#displayMessage2').style.marginBottom = "-10px";
            displayMessage2.textContent = 'Error!!! Record already exists, please verify if you are a student';
        } else if (matchName >= 0) {
            paraName2.textContent = 'Username already exists!';
            document.querySelector('#displayMessage2').style.border = "none";
            document.querySelector('#displayMessage2').style.padding = "0";
            document.querySelector('#displayMessage2').style.marginTop = "0";
            document.querySelector('#displayMessage2').style.marginBottom = "";
            displayMessage2.textContent = '';
        } else {
            nameLibrary.push(String(nameValue2));
            ageLibrary.push(String(ageValue2));
            levelLibrary.push(String(levelValue2));
            document.querySelector('#displayMessage2').style.border = "2px solid lime";
            document.querySelector('#displayMessage2').style.color = "lime";
            document.querySelector('#displayMessage2').style.padding = "10px";
            document.querySelector('#displayMessage2').style.marginTop = "20px";
            document.querySelector('#displayMessage2').style.marginBottom = "-10px";
            displayMessage2.textContent = 'Success!!! Record created and updated';
        }
    }

     // Validates characters and outputs error message
     function errorAlert2() {
        if (nameValue2 === "" || nameValue2 === undefined || nameValue2 === null) {
            paraName2.textContent = 'Please fill in your username!';
            document.querySelector('#displayMessage2').style.border = "none";
            document.querySelector('#displayMessage2').style.padding = "0";
            document.querySelector('#displayMessage2').style.marginTop = "0";
            document.querySelector('#displayMessage2').style.marginBottom = "0";
            displayMessage2.textContent = '';
        } else if (!isNaN(nameValue2)) {
            paraName2.textContent = 'Username should begin with letters only!';
            document.querySelector('#displayMessage2').style.border = "none";
            document.querySelector('#displayMessage2').style.padding = "0";
            document.querySelector('#displayMessage2').style.marginTop = "0";
            document.querySelector('#displayMessage2').style.marginBottom = "0";
            displayMessage2.textContent = '';
        } else {
            paraName2.textContent = '';
            document.querySelector('#displayMessage2').style.border = "none";
            document.querySelector('#displayMessage2').style.padding = "0";
            document.querySelector('#displayMessage2').style.marginTop = "0";
            document.querySelector('#displayMessage2').style.marginBottom = "0";
            displayMessage2.textContent = '';
        }

        if (isNaN(ageValue2)) {
            paraAge2.textContent = 'age should contain numbers only!';
            document.querySelector('#displayMessage2').style.border = "none";
            document.querySelector('#displayMessage2').style.padding = "0";
            document.querySelector('#displayMessage2').style.marginTop = "0";
            document.querySelector('#displayMessage2').style.marginBottom = "0";
            displayMessage2.textContent = '';
        } else if (ageValue2 === null || ageValue2 === undefined) {
            paraAge2.textContent = 'please fill in your age!';
            document.querySelector('#displayMessage2').style.border = "none";
            document.querySelector('#displayMessage2').style.padding = "0";
            document.querySelector('#displayMessage2').style.marginTop = "0";
            document.querySelector('#displayMessage2').style.marginBottom = "0";
            displayMessage2.textContent = '';
        } else {
            paraAge2.textContent = '';
            document.querySelector('#displayMessage2').style.border = "none";
            document.querySelector('#displayMessage2').style.padding = "0";
            document.querySelector('#displayMessage2').style.marginTop = "0";
            document.querySelector('#displayMessage2').style.marginBottom = "0";
            displayMessage2.textContent = '';
        }

        if (isNaN(levelValue2)) {
            paraLevel2.textContent = 'level should contain numbers only!';
            document.querySelector('#displayMessage2').style.border = "none";
            document.querySelector('#displayMessage2').style.padding = "0";
            document.querySelector('#displayMessage2').style.marginTop = "0";
            document.querySelector('#displayMessage2').style.marginBottom = "0";
            displayMessage2.textContent = '';
        } else if (levelValue2 === " " || levelValue2 === undefined) {
            paraLevel2.textContent = 'please fill in your username!';
            document.querySelector('#displayMessage2').style.border = "none";
            document.querySelector('#displayMessage2').style.padding = "0";
            document.querySelector('#displayMessage2').style.marginTop = "0";
            document.querySelector('#displayMessage2').style.marginBottom = "0";
            displayMessage2.textContent = '';
        } else {
            paraLevel2.textContent = '';
            document.querySelector('#displayMessage2').style.border = "none";
            document.querySelector('#displayMessage2').style.padding = "0";
            document.querySelector('#displayMessage2').style.marginTop = "0";
            document.querySelector('#displayMessage2').style.marginBottom = "0";
            displayMessage2.textContent = '';
        }
    }
});

// Verify Me button
verifyMe.addEventListener('click', () => {
    // Switches to "are you a student?"" page
    document.querySelector('.signin').style.display = 'block';
    document.querySelector('.signup').style.display = 'none';
});