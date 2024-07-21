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