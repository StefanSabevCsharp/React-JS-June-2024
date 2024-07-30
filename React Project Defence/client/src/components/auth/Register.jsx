import { useContext , useState , useEffect} from "react"; 

import { Link, useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { useRegister } from "../../hooks/useAuth";
import AuthContext from "../../context/authContext";
import formValidator, { isValidRegistration } from "../../../validations/formValidator";
import ErrorMessage from "../error/ErrorMessage";
import { setUserData } from "../../dataService/userData";

export default function Register() {
    const authContext = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState("");

    const initialValues = {
        email: "",
        password: "",
        rePassword: ""
    }
    const submitHandler = async (form) => {
        const errors = isValidRegistration(form);
        if (Object.keys(errors).length > 0) {
            return setError(Object.values(errors).join(", "));
        }
        try {
            const userData = await useRegister(form);
            authContext.changeState(userData);
            setUserData(userData);
            navigate("/");
        } catch (err) {
            setError(err.message);
        }

    }

    const { form, changeHandler, onSubmit } = useForm(initialValues, submitHandler);

    useEffect(() => {
        if (error) {
            const timer = setTimeout(() => {
                setError("");
            }, 3000); 

            return () => clearTimeout(timer);
        }
    }, [error]);

    return (
        <>
            <div className="relative isolate px-6 pt-14 lg:px-8">
                <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">

                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Register new account
                        </h2>
                    </div>
                    {error && <ErrorMessage error={error} />}
                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form method="POST" className="space-y-6" onSubmit={onSubmit}>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={form.email}
                                        onChange={changeHandler}
                                        required
                                        autoComplete="email"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                        Password
                                    </label>

                                </div>
                                <div className="mt-2">
                                    <input
                                        name="password"
                                        type="password"
                                        value={form.password}
                                        onChange={changeHandler}
                                        required
                                        autoComplete="current-password"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div><div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                        Repeat Password
                                    </label>

                                </div>
                                <div className="mt-2">
                                    <input

                                        name="rePassword"
                                        type="password"
                                        value={form.rePassword}
                                        onChange={changeHandler}
                                        required
                                        autoComplete="current-password"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Sign in
                                </button>
                            </div>
                        </form>

                        <p className="mt-10 text-center text-sm text-gray-500">
                            Already a member?{' '}
                            <Link
                                to="/login"
                                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                            > Sign in here
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
