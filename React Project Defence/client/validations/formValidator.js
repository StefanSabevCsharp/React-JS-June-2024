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
    if(validator.isLength(form.email,{min:10}) === false){
        errors.email = 'Email must be at least 10 characters';
    }
    if(validator.isLength(form.password,{min:3}) === false){
        errors.password = 'Password must be at least 3 characters';
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




const imageMimeTypes = [
    'image/jpeg',       
    'image/png',        
    'image/gif',       
    'image/webp',       
    'image/svg+xml',    
    'image/bmp',        
    'image/tiff',       
    'image/x-icon',    
    'image/vnd.microsoft.icon', 
    'image/heif',      
    'image/heic',       
    'image/avif'        
  ];

export const isImageUrl = async (url) => {
 
    if (!validator.isURL(url)) {
        return false;
    }

    try {
        const response = await fetch(url, { method: 'HEAD' }); 
        const contentType = response.headers.get('Content-Type');

        return imageMimeTypes.includes(contentType);
    } catch (error) {
        
        return false;
    }
}
