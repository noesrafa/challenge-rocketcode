const validateFullName = (fName, lName, slName) => {
    if ( fName && lName && slName) {
        return true;
    }
    else return false
}

const validateBirthday = (day, month, year) => {
    if ( day && month && year) {
        return true;
    }
    else return false
}

const validateContact = (email, cellphone) => {
    if ( email && cellphone) {
        return true;
    }
    else return false
}


export {
    validateFullName,
    validateBirthday,
    validateContact,
}