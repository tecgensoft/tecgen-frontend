import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userLogin } from '../../redux/feature/auth/authSlice';


interface ILoginForm {
    email: string
    password: string
}
interface ILoginFormError {
    email: string | null
    password: string | null
}

export default function Login() {
    const dispatch = useDispatch()
    // const [error, setError] = useState('');
    const [userInfoError, setUserInfoError] = useState<ILoginFormError>({
        email: null,
        password: null,
    })

    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    const [userInfo, setUserInfo] = useState<ILoginForm>({
        email: '',
        password: '',
    })

    const navigate = useNavigate()

    // handle Change function to take login information
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // login information store in state
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
    }

    const validateForm = () => {
        const { email, password } = userInfo
        let emailError
        let passwordError
        if (email !== '' && email) {
            emailError = !/^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$/.test(
                email,
            )
                ? 'Invalid e-mail address'
                : null
        } else {
            emailError = 'E-mail is required.'
        }
        if (password !== '' && password) {
            passwordError =
                password.length < 1 ? 'Password must be at least 1 characters' : null
        } else {
            passwordError = 'Password is required.'
        }
        setUserInfoError({ email: emailError, password: passwordError })

        return !emailError && !passwordError
    }


    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        if (validateForm()) {
            dispatch(userLogin(userInfo))
        }

    };
    return (
        <div style={{ height: "calc(100vh - 142px)" }} className='bg-light '>
            <div className='container h-full flex flex-col items-center justify-center '>
                <div className="w-5/12 px-8 py-20 space-y-6 bg-white shadow-lg rounded-lg">
                    <h2 className="text-primary text-2xl font-bold text-center">Login</h2>
                    {/* {error && <div className="text-red-500">{error}</div>} */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                // value={email}
                                name='email'
                                onChange={handleChange}
                                className="w-full px-3 py-2 mt-1 border border-gray rounded-md shadow-sm focus:outline-none  focus:ring-black-dim focus:border-black-dark"
                                required
                                placeholder='Enter your e-mail'
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name='password'
                                value={password}
                                onChange={handleChange}
                                className="w-full px-3 py-2 mt-1 border border-gray rounded-md shadow-sm focus:outline-none focus:ring-black-dim focus:border-black-dark"
                                required
                                placeholder='Enter your password'
                            />
                        </div>
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
