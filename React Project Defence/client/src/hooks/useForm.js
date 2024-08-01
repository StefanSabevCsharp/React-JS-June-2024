import { useEffect, useState } from 'react';

function useForm(initialState, submitHandler, options = {reinitialize: false}) {
    const [form, setForm] = useState(initialState);

    useEffect(() => {
        if (options.reinitialize) {
            setForm(initialState);
        }
    }, [initialState,options.reinitialize]);

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