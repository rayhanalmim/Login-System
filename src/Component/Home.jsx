import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

const Home = () => {
    const {user} = useContext(AuthContext);

    return (
        <div className="flex justify-center">
            <h3 className="text-xl font-extrabold">Wellcome: {user.email.toUpperCase().split('@')[0]} </h3>
        </div>
    );
};

export default Home;