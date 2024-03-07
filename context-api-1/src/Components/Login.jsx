import UserContext from "../context/UserContext.js";
import { useState, useContext } from "react";

export default function Login() {
  const { setUser } = useContext(UserContext);//returns the value prop of the context object
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setUser({ username, password });
  }
  return (
    <>
      <div className="flex justify-center h-60 items-end text-2xl">
        <form onSubmit={handleSubmit} className="space-x-4">
          <input
            type="text"
            placeholder="username"
            name="username"
            className="border border-2 border-slate-500"
            value={username}
            onChange={(e) =>setUsername(e.target.value)}
          />
          <input
            type="text"
            placeholder="password"
            name="password"
            className="border border-2 border-slate-500"
            value={password}
            onChange={(e) =>setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="border border-2 border-slate-500 px-4"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
