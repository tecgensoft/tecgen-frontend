import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Message from '../../components/shared/Message';
import RequiredSpan from '../../components/shared/RequiredSpan';
import { userLogin } from '../../redux/feature/auth/authSlice';
import { useAppSelector } from '../../redux/hooks';


interface ILoginForm {
    username: string | null
    email?: string | null
    password: string
}
interface ILoginFormError {
    username: string | null
    email?: string | null
    password: string | null
}

export default function Login() {
    const {error} = useAppSelector(state => state.auth)
    const dispatch = useDispatch()
    // const [error, setError] = useState('');
    // const [userInfoError, setUserInfoError] = useState<ILoginFormError>({
    //     // email: null,
    //     username: null,
    //     password: null,
    // })
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    const [userInfo, setUserInfo] = useState<ILoginForm>({
        // email: '',
        username: "",
        password: '',
    })

    const navigate = useNavigate()

    // handle Change function to take login information
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // login information store in state
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value })

        setErrors({
            ...errors,
            [e.target.id]: "",
        });
    }

    // const validateForm = () => {
    //     const { username, password } = userInfo
    //     // let emailError
    //     let usernameError
    //     let passwordError
    //     // if (email !== '' && email) {
    //     //     emailError = !/^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$/.test(
    //     //         email,
    //     //     )
    //     //         ? 'Invalid e-mail address'
    //     //         : null
    //     // } else {
    //     //     emailError = 'E-mail is required.'
    //     // }
    //     if (password !== '' && password) {
    //         passwordError =
    //             password.length < 1 ? 'Password must be at least 1 characters' : null
    //     } else {
    //         passwordError = 'Password is required.'
    //     }
    //     setUserInfoError({ email: emailError, password: passwordError })

    //     return !emailError && !passwordError
    // }
    const validate = () => {
        const newErrors: { [key: string]: string } = {};
        if (!userInfo.username) newErrors.username = "Username is required";
        if (!userInfo.password) newErrors.password = "Password is required";
        return newErrors;
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        dispatch(userLogin(userInfo))

    };
    return (
        <div style={{ height: "calc(100vh - 142px)" }} className='bg-light '>
            <div className='container h-full flex flex-col items-center justify-center '>
                <div className="w-5/12 px-8 py-20 space-y-6 bg-white shadow-lg rounded-lg">
                    <h2 className="text-primary text-2xl font-bold text-center">Login</h2>
                    {/* {error && <div className="text-red-500">{error}</div>} */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            {/* <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                // value={email}
                                name='email'
                                onChange={handleChange}
                                className="w-full px-3 py-2 mt-1 border border-black-dark rounded-md shadow-sm focus:outline-none  focus:ring-black-dim focus:border-black-dark"
                                required
                                placeholder='Enter your e-mail'
                            /> */}
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Username<RequiredSpan />
                            </label>
                            <input
                                type="text"
                                id="username"
                                // value={email}
                                name='username'
                                onChange={handleChange}
                                className="w-full px-3 py-2 mt-1 border border-black-dark rounded-md shadow-sm focus:outline-none  focus:ring-black-dim focus:border-black-dark"
                                // required
                                placeholder='Enter your e-mail'
                            />
                            {errors.username && (
                                <div className="text-red-500">
                                    {errors.username}
                                </div>
                            )}
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password<RequiredSpan />
                            </label>
                            <input
                                type="password"
                                id="password"
                                name='password'
                                // value={password}
                                onChange={handleChange}
                                className="w-full px-3 py-2 mt-1 border border-black-dark rounded-md shadow-sm focus:outline-none focus:ring-black-dim focus:border-black-dark"
                                // required
                                placeholder='Enter your password'
                            />
                            {errors.password && (
                                <div className="text-red-500">
                                    {errors.password}
                                </div>
                            )}
                        </div>
                        <Message message={error} />
                        {/* {error && <div className="bg-rose-200 text-rose-600 py-2 text-center text-sm rounded-sm ">{error}</div>} */}
                        <button
                            type="submit"
                            className="w-full px-4 py-2 font-bold text-white bg-primary rounded-md hover:bg-[#e42052] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#fa4774]"
                        >
                            Login
                        </button>
                        <div className=''>
                            <p className='text-center my-3'>Don't have an account?</p>
                            {/* <Link to={'/auth/register'} className='text-orange-400 underline'>Signup</Link> */}
                            <button
                                className="w-full px-4 py-2 font-bold text-white bg-link rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#fa4774]"
                                onClick={(e) => {
                                    e.preventDefault()
                                    navigate('/auth/register')
                                }}
                            >
                                Create your account
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
