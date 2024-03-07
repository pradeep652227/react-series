import "./App.css";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <>
      <h1 className="text-3xl text-center bg-gray-400 px-4 py-2">
        Chai Aur React
      </h1>
      <UserContextProvider>{/*Now, all the children components can accept the values provided by the context provider (directly)*/}
        <Login />
        <Profile />
      </UserContextProvider>
    </>
  );
}

export default App;
