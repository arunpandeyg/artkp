"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const CreateProfile = () => {

  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [income, setIncome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  

  const router = useRouter();

   const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image ||!title || !name || !income || !email || !password || !phoneNumber) {
      alert("All fields are required.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/profiles", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({image, title, name, income, email, password , phoneNumber}),
      });

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to create a profile");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}  className='flex flex-col  w-1/3 mx-auto gap-4 border border-slate-500  rounded-lg shadow-md p-4'>
        
      <h1 className='text-xl font-bold mt-1 text-center text-gray-600'>Create Profile</h1>
        <div>
            <label className='text-bold text-xl' htmlFor="profileImage">Profile Image</label>
            <input onChange={(e) => setImage(e.target.value)}
        value={image} className='border border-slate-500 px-8 py-1 rounded-lg w-full' type="file" id="profileImage" name="profileImage" />
        </div>
        <div>
            <label className='text-bold text-xl' htmlFor="profileTitle">Profile Title</label>
            <input onChange={(e) => setTitle(e.target.value)}
        value={title} className='border border-slate-500 px-8 py-1 rounded-lg w-full' type="text" id="profileTitle" name="profileTitle" />
        </div>
        <div>
            <label className='text-bold text-xl' htmlFor="profileName">Profile Name</label>
            <input onChange={(e) => setName(e.target.value)}
        value={name} className='border border-slate-500 px-8 py-1 rounded-lg w-full' type="text" id="profileName" name="profileName" />
        </div>
        <div>
            <label className='text-bold text-xl' htmlFor="profileIncome">Profile Income</label>
            <input onChange={(e) => setIncome(e.target.value)}
        value={income} className='border border-slate-500 px-8 py-1 rounded-lg w-full' type="text" id="profileIncome" name="profileIncome" />
        </div>
        <div>
            <label className='text-bold text-xl' htmlFor="profileEmail">Profile Email</label>
            <input onChange={(e) => setEmail(e.target.value)}
        value={email} className='border border-slate-500 px-8 py-1 rounded-lg w-full' type="email" id="profileEmail" name="profileEmail" />
        </div>
        <div>
            <label className='text-bold text-xl' htmlFor="profilePassword">Profile Password</label>
            <input onChange={(e) => setPassword(e.target.value)}
        value={password} className='border border-slate-500 px-8 py-1 rounded-lg w-full' type="password" id="profilePassword" name="profilePassword" />
        </div>
        <div>
            <label className='text-bold text-xl' htmlFor="profilePhoneNumber">Profile PhoneNumber</label>
            <input onChange={(e) => setPhoneNumber(e.target.value)}
        value={phoneNumber} className='border border-slate-500 px-8 py-1 rounded-lg w-full' type="text" id="profilePhoneNumber" name="profilePhoneNumber" />
        </div>
        {/* <div>
            <label className='text-bold text-xl' htmlFor="profileDescription">Profile Description</label>
            <textarea onChange={(e) => setDescription(e.target.value)}
        value={description} className='border border-slate-500 rounded-lg  w-full' id="profileDescription" name="profileDescription"></textarea>
        </div> */}
        <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 rounded-lg px-4 rounded focus:outline-none focus:shadow-outline w-full text-center'>Create Profile</button>
    </form>
  )
}

export default CreateProfile
