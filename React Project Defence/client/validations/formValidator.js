import validator from "validator";


export default function formValidator(form) {

    let errors = {};

        if (validator.isEmpty(form.title)) {
            errors.title = 'Title is required';
        }

        if (validator.isEmpty(form.imageUrl)) {
            errors.imageUrl = 'Image URL is required';
        } else if (!validator.isURL(form.imageUrl)) {
            errors.imageUrl = 'Invalid Image URL';
        }

        if (validator.isEmpty(form.price)) {
            errors.price = 'Price is required';
        } else if (!validator.isNumeric(form.price)) {
            errors.price = 'Price must be a number';
        }

        if (validator.isEmpty(form.description)) {
            errors.description = 'Description is required';
        }


    return errors;

}

export const isValidRegistration = (form) => {
    let errors = {};

    if(validator.isEmail(form.email) === false){
        errors.email = 'Invalid email';
    }
    if(validator.isEmpty(form.email)){
        errors.email = 'Email is required';
    }
    if(validator.isEmpty(form.password)){
        errors.password = 'Password is required';
    }
    if(validator.isEmpty(form.rePassword)){
        errors.rePassword = 'Re-enter password';
    }
    if(form.password !== form.rePassword){
        errors.rePassword = 'Passwords do not match';
    }
    return errors;
}

export const isValidLogin = (form) => {
    let errors = {};

    if(validator.isEmail(form.email) === false){
        errors.email = 'Invalid email';
    }
    if(validator.isEmpty(form.email)){
        errors.email = 'Email is required';
    }
    if(validator.isEmpty(form.password)){
        errors.password = 'Password is required';
    }
    return errors;
}