/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Message from "../../components/shared/Message";
import RequiredSpan from "../../components/shared/RequiredSpan";
import { userSignup } from "../../redux/feature/auth/authSlice";
import { useAppSelector } from "../../redux/hooks";

export default function SignUp() {
  const dispatch = useDispatch();
  const { message, loading } = useAppSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    username: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  // const [error, setError] = useState("");

  // sign up validation
  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (!formData.username) newErrors.username = "Username is required";
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
    const formObj: any = {
      username: formData.username,
      first_name: formData.firstName,
      last_name: formData.lastName,
      password: formData.password,
      email: formData.email,
    };
    if (formData.phone) {
      formObj.contact_number = formData.phone;
    }
    dispatch(userSignup(formObj));
    // const resultAction = await dispatch(signup(formData));
    // if (signup.fulfilled.match(resultAction)) {
    //   navigate('/dashboard'); // Redirect after successful signup
    // }
  };
  return (
    <div className="bg-light py-10">
      <div className="container ">
        <div className="w-5/12 px-8 py-20 space-y-6 bg-white shadow-lg rounded-lg mx-auto">
          <h2 className="text-primary text-2xl font-bold text-center">
            Signup
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex gap-3">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name
                  <RequiredSpan />
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
                  <div className="text-red-500">{errors.firstName}</div>
                )}
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name
                  <RequiredSpan />
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
                  <div className="text-red-500">{errors.lastName}</div>
                )}
              </div>
            </div>
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username
                <RequiredSpan />
              </label>
              <input
                type="text"
                id="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full px-3 py-2 mt-1 border border-black-dark rounded-md shadow-sm focus:outline-none focus:ring-black-dim focus:border-black-dark"
                placeholder="Enter your user name"
              />
              {errors.username && (
                <div className="text-red-500">{errors.username}</div>
              )}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
                <RequiredSpan />
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
                <div className="text-red-500">{errors.email}</div>
              )}
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
                <div className="text-red-500">{errors.phone}</div>
              )}
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
                <RequiredSpan />
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
                <div className="text-red-500">{errors.password}</div>
              )}
            </div>
            <Message message={message || ""} />
            {/* {message && <div className="bg-rose-200 text-rose-600 py-1 text-center text-sm rounded-sm ">{message}</div>} */}
            <button
              type="submit"
              className="w-full px-4 py-2 font-bold text-white bg-primary rounded-md hover:bg-[#e42052] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#fa4774]"
              disabled={loading}
            >
              Signup
            </button>
            <div>
              <p>If you already have an account with us, please login at the</p>
              <Link to="/auth/login" className="text-orange-400 underline">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
