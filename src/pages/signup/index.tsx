import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { userSignup } from "../../redux/feature/auth/authSlice";

export default function Signup() {
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [error, setError] = useState("");

    // sign up validation 
    const validate = () => {
        const newErrors: { [key: string]: string } = {};
        if (!formData.firstName) newErrors.firstName = "First name is required";
        if (!formData.lastName) newErrors.lastName = "Last name is required";
        // if (!formData.phone) newErrors.phone = "Phone number is required";
        // if (!formData.email) newErrors.email = "Email is required";
        if (!formData.password) newErrors.password = "Password is required";
        return newErrors;
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
        setErrors({
            ...errors,
            [e.target.id]: "",
        });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        const formObj = {
            username: formData.firstName + formData.lastName,
            first_name: formData.firstName,
            password: formData.password
        }
        dispatch(userSignup(formObj))
        // const resultAction = await dispatch(signup(formData));
        // if (signup.fulfilled.match(resultAction)) {
        //   navigate('/dashboard'); // Redirect after successful signup
        // }
    };
    return (
        <div style={{ height: "calc(100vh - 142px)" }} className="bg-light ">
            <div className="container h-full flex flex-col items-center justify-center ">
                <div className="w-5/12 px-8 py-20 space-y-6 bg-white shadow-lg rounded-lg">
                    <h2 className="text-primary text-2xl font-bold text-center">
                        Signup
                    </h2>
                    {error && <div className="text-red-500">{error}</div>}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="flex gap-3">
                            <div>
                                <label
                                    htmlFor="firstName"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    id="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 mt-1 border border-black-dark rounded-md shadow-sm focus:outline-none focus:ring-black-dim focus:border-black-dark"
                                    placeholder="Enter your first name"
                                />
                                {errors.firstName && (
                                    <div className="text-red-500">
                                        {errors.firstName}
                                    </div>
                                )}
                            </div>
                            <div>
                                <label
                                    htmlFor="lastName"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    id="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 mt-1 border border-black-dark rounded-md shadow-sm focus:outline-none focus:ring-black-dim focus:border-black-dark"
                                    placeholder="Enter your last name"
                                />
                                {errors.lastName && (
                                    <div className="text-red-500">
                                        {errors.lastName}
                                    </div>
                                )}
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="phone"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Phone
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full px-3 py-2 mt-1 border border-black-dark rounded-md shadow-sm focus:outline-none focus:ring-black-dim focus:border-black-dark"
                                placeholder="Enter your phone number"
                            />
                            {errors.phone && (
                                <div className="text-red-500">
                                    {errors.phone}
                                </div>
                            )}
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-3 py-2 mt-1 border border-black-dark rounded-md shadow-sm focus:outline-none focus:ring-black-dim focus:border-black-dark"
                                placeholder="Enter your email"
                            />
                            {errors.email && (
                                <div className="text-red-500">
                                    {errors.email}
                                </div>
                            )}
                        </div>
                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full px-3 py-2 mt-1 border border-black-dark rounded-md shadow-sm focus:outline-none focus:ring-black-dim focus:border-black-dark"
                                placeholder="Enter your password"
                            />
                            {errors.password && (
                                <div className="text-red-500">
                                    {errors.password}
                                </div>
                            )}
                        </div>
                        <button
                            type="submit"
                            className="w-full px-4 py-2 font-bold text-white bg-primary rounded-md hover:bg-[#e42052] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#fa4774]"
                            //   disabled={loading}
                        >
                            {/* {loading ? 'Signing up...' : 'Signup'} */}
                            Signup
                        </button>
                        <div>
                            <p>
                                If you already have an account with us, please
                                login at the
                            </p>
                            <Link
                                to="/auth/login"
                                className="text-orange-400 underline"
                            >
                                Login
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
