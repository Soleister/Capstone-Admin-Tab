import { IoPersonCircleOutline } from "react-icons/io5"; // Importing the icon from react-icons

function CirclePerson() {
  return (
    <div className="flex flex-col items-center mt-4">
      {/* Person Icon */}
      <IoPersonCircleOutline className="text-white text-[100px]" />
      
      {/* Owner Name */}
      <div className="text-white text-sm font-semibold mt-2 mb-5">
        Owner Name
      </div>
    </div>
  );
}

export default CirclePerson;
