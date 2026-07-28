import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-gray-800 text-white text-lg font-bold  p-4 m-0">
      <Link href={"/"}>
        <h1 className="hover:underline cursor-pointer">Arun Pandey</h1>
      </Link>
      <div className="flex space-x-4">
        <Link className="hover:underline" href={"/"}>Home</Link>
        <Link className="hover:underline" href={"/createprofile"}>Create Profile</Link>
        <Link className="hover:underline" href={"/signin"}>Sign In</Link>
      </div>
    </nav>
  );
};

export default Navbar;
