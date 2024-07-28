import { useState } from 'react';

function useForm(initialState,submitHandler) {
    const [form, setForm] = useState(initialState);

    const changeHandler = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }
    const onSubmit = (e) => {
        e.preventDefault();

        submitHandler(form);
        setForm(initialState);
    }
    const setFormState = (newState) => {
        setForm(newState);
    }
    return {
        form,
        changeHandler,
        onSubmit,
        setFormState
    }
}

export default useForm;