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
    return {
        form,
        changeHandler,
        onSubmit
    }
}

export default useForm;