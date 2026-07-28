"use client";
import React, { useState, useEffect } from "react";
import RemoveBtn from "./RemoveBtn";
import { FaPenToSquare } from "react-icons/fa6";
import Link from "next/link";
import { ImEyeBlocked } from "react-icons/im";


// const getProfiles = async () => {
//   try {
//     const res = await fetch("http://localhost:3000/api/profiles", {      
//       method: "GET",      
//       cache: "no-store",
//     });
//     
//     if (!res.ok) {
//       throw new Error("Failed to fetch Profile data");
//     }
  
//     return res.json();
//   } catch (error) {
//     console.error("Error fetching profiles:", error);    
//   }
// }

const ProfileList = () => {
  const [profiles, setProfiles] = useState([]);
  useEffect(() => {
    const fetchProfiles = async () => {
      const res = await fetch("http://localhost:3000/api/profiles");
      const data = await res.json();
      setProfiles(data);
    }
     fetchProfiles();
  },[])
  // const {profiles} = await getProfiles();
 
  if (!profiles) {
    return <div>Loading...</div>;
  }
  return (
    <>
    {profiles.map((profile) => (
      <div key={profile._id} className="flex h-[300px] w-auto gap-4 items-center  bg-gray-200 p-4 border border-slate-300 rounded-lg shadow-md  overflow-hidden">
        <div>
          <img className="w-45 h-50 ml-12" src={'/r.jpg'} alt="profileImage"/>
          <h1 className="font-bold text-2xl">{profile.title}</h1>
          <p className="font-bold text-2xl">{profile.name}</p>
          <h2 className="font-bold text-2xl">{profile.income}</h2>
          {/* <p className="font-bold text-2xl">{profile.description}</p> */}
        </div>
        <div className="flex gap-2">
          <RemoveBtn id={profile._id} />
          <Link href={`/updateprofile/${profile._id}`}>
            <FaPenToSquare
              size={14}
              className="w-7 h-7 bg-gray-300 rounded-full"
            />
          </Link>
        </div>
      </div>
      ))}
      <div></div>
    </>
  );
};

export default ProfileList;
