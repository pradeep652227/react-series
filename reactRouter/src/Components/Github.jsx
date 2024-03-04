import {useLoaderData } from "react-router-dom";

export default function Github() {
  const data=useLoaderData();

  return (
    <>
      <div className="flex items-center p-2">
        <div className="p-4 bg-gray-400 w-2/5 rounded-xl">
          <h1 className="text-center text-2xl">Github Account: {data.login}</h1>
          <img src={data.avatar_url} className="rounded" />
        </div>
      </div>
    </>
  );
}

export const GithubLoader=async ()=>{
  const res=await fetch("https://api.github.com/users/pradeep652227");
  return res.json();
}
