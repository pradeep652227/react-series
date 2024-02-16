/* eslint-disable react/prop-types */

export default function Card(props) {
    console.log(props);
  return (
    <>
      <div className="relative h-[400px] w-[300px] rounded-md">
        <img
          src={props.srcData}
          alt={props.altData}
          className={props.classData}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-left">
          <h1 className="text-lg font-semibold text-white">{props.username}</h1>
          <p className="mt-2 text-sm text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            debitis?
          </p>
          <button className="text-black mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
            View Profile →
          </button>
        </div>
      </div>
    </>
  );
}
