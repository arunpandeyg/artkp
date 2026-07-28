import UpdateProfileForm from '@/components/UpdateProfileForm'
import React from 'react'


const getProfileById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/profiles/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch profile data");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const UpdateProfile =async ({ params }) => {
  const { id } = params;
  const { profile } = await getProfileById(id);
  const {image, title, name, email, password, phoneNumber, income, description } = profile;
  return (
    <div>
        <UpdateProfileForm  id={id} image={image} title={title} name={name} email={email} password={password} phoneNumber={phoneNumber} income={income} description={description}/>
      
    </div>
  )
}

export default UpdateProfile
