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

    if (validator.isEmail(form.email) === false) {
        errors.email = 'Invalid email';
    }
    if (validator.isEmpty(form.email)) {
        errors.email = 'Email is required';
    }
    if (validator.isEmpty(form.password)) {
        errors.password = 'Password is required';
    }
    if (validator.isEmpty(form.rePassword)) {
        errors.rePassword = 'Re-enter password';
    }
    if (form.password !== form.rePassword) {
        errors.rePassword = 'Passwords do not match';
    }
    return errors;
}

export const isValidLogin = (form) => {
    let errors = {};

    if (validator.isEmail(form.email) === false) {
        errors.email = 'Invalid email';
    }
    if (validator.isEmpty(form.email)) {
        errors.email = 'Email is required';
    }
    if (validator.isEmpty(form.password)) {
        errors.password = 'Password is required';
    }
    return errors;
}

export const isValidCreateClothes = (form) => {
    let errors = {};

    if (validator.isEmpty(form.title)) {
        errors.title = 'Title is required';
    }
    if (validator.isLength(form.title, { min: 3 }) === false) {
        errors.title = 'Title must be at least 3 characters';
    }
    if (validator.isEmpty(form.imageUrl)) {
        errors.imageUrl = 'Image URL is required';
    }
    if (validator.isURL(form.imageUrl) === false) {
        errors.imageUrl = 'Invalid Image URL';
    }
    if (validator.isEmpty(form.price)) {
        errors.price = 'Price is required';
    }
    if (validator.isNumeric(form.price) === false) {
        errors.price = 'Price must be a number';
    }
    if (form.price <= 0) {
        errors.price = 'Price must be a positive number';
    }

    if (validator.isEmpty(form.description)) {
        errors.description = 'Description is required';
    }
    if (validator.isLength(form.description, { min: 10 }) === false) {
        errors.description = 'Description must be at least 10 characters';
    }

    return errors;
}




const imageMimeTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/svg+xml'];

export const isImageUrl = async (url) => {
    // Validate URL format
    if (!validator.isURL(url)) {
        return false;
    }

    try {
        // Fetch the URL and check content type
        const response = await fetch(url, { method: 'HEAD' }); // HEAD request to only fetch headers
        const contentType = response.headers.get('Content-Type');

        // Check if the content type matches an image MIME type
        return imageMimeTypes.includes(contentType);
    } catch (error) {
        // Handle errors (e.g., network issues)
        console.error('Error checking URL:', error);
        return false;
    }
}
