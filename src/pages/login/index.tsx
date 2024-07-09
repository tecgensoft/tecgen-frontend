import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate()
    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        // Handle form submission logic here
        if (!email || !password) {
            setError('Please fill in both fields');
            return;
        }
        setError('');
        console.log('Form submitted', { email, password });
    };
    return (
        <div style={{height: "calc(100vh - 142px)" }} className='bg-light '>
            <div className='container h-full flex flex-col items-center justify-center '>
                <div className="w-5/12 px-8 py-20 space-y-6 bg-white shadow-lg rounded-lg">
                    <h2 className="text-primary text-2xl font-bold text-center">Login</h2>
                    {error && <div className="text-red-500">{error}</div>}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
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
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
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
