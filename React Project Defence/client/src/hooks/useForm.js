import { useState } from 'react';

function useForm(initialState) {
    const [form, setForm] = useState(initialState);

    const changeHandler = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    return {
        form,
        changeHandler
    }
}

export default useForm;