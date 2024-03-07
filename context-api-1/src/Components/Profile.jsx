import UserContext from "../context/UserContext";
import { useContext } from "react";

export default function Profile(){
    const {user}=useContext(UserContext);//returns the value prop of the context object

    return (
        <>
            <h2 className="text-center">{(user)?`Welcome ${user.username}`:"Please Login First"}</h2>
        </>
    );
}