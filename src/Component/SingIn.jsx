import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { FcGoogle } from 'react-icons/fc';
const SingIn = () => {
    const navigate = useNavigate();
    const { singIn, singInWithGoogle } = useContext(AuthContext);

    const handleSingIn = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        singIn(email, password)
            .then((result) => {
                console.log('log in successfully', result.user)
                e.target.reset();
                navigate('/');
            })
            .catch(error => {
                const errorMessage = error.message;
                console.error(errorMessage);
            })
    }
    const handleSingWithGoogle = () => {
        singInWithGoogle()
            .then(result => {
                console.log('log in successfully', result.user);
                navigate('/');
            })
            .catch(error => {
                const errorMessage = error.message;
                console.error(errorMessage);
            })
    }
    return (
        <div>
            <div className="flex justify-center pt-4">

                <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <form onSubmit={handleSingIn} className="space-y-6">
                        <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h5>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                        </div>
                        <div className="relative">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Create a password</label>
                            <input

                                type="password"
                                name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                        </div>
                        <div className="flex items-start">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                                </div>
                                <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                            </div>
                            <a href="#" className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
                        </div>
                        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                        <div className="flex justify-center">
                            <button onClick={handleSingWithGoogle} className="btn btn-outline"><span className="text-xl"><FcGoogle /></span> Log In With Google</button>
                        </div>
                        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                            Not registered? <Link to='/join' className="text-blue-700 hover:underline dark:text-blue-500">Create account</Link>
                        </div>
                    </form>

                </div>

            </div>
        </div>
    );
};

export default SingIn;