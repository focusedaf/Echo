import {Link} from "react-router-dom";


const Navbar = () => {
  return (
    <div className="backdrop-blur-sm bg-white/50 flex justify-center items-center gap-5 border">
      {/* pre-login nav bar */}
      <div className="flex gap-10 md:hidden p-4 ">
        <Link className="font-semibold text-xl">Echo</Link>
        <ul className="flex gap-6 text-xl font-semibold">
          <li>Home</li>
          <li>About</li>
          <li>Progress Tracker</li>
          <li>Predict</li>
        </ul>
      </div>
      {/* post login navbar */}
      <div className="sticky  top-0 bottom-0 left-0 right-0 z-50 bg-amber-500 bg-opacity-50 p-4">
        <ul className="flex gap-6 text-xl font-semibold">
          <li>Home</li>
          <li>About</li>
          <li>Progress Tracker</li>
          <li>Predict</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
