import React from 'react'

const UpdateProfileForm = () => {
  return (
     <form className='flex flex-col  w-1/3 mx-auto gap-4 border border-slate-500  rounded-lg shadow-md p-4'>
        
      <h1 className='text-xl font-bold mt-1 text-center text-gray-600'>Update Profile</h1>
        <div>
            <label className='text-bold text-xl' htmlFor="profileImage">Profile Image</label>
            <input className='border border-slate-500 px-8 py-1 rounded-lg w-full' type="file" id="profileImage" name="profileImage" />
        </div>
        <div>
            <label className='text-bold text-xl' htmlFor="profileTitle">Profile Title</label>
            <input className='border border-slate-500 px-8 py-1 rounded-lg w-full' type="text" id="profileTitle" name="profileTitle" />
        </div>
        <div>
            <label className='text-bold text-xl' htmlFor="profileName">Profile Name</label>
            <input className='border border-slate-500 px-8 py-1 rounded-lg w-full' type="text" id="profileName" name="profileName" />
        </div>
        <div>
            <label className='text-bold text-xl' htmlFor="profileIncome">Profile Income</label>
            <input className='border border-slate-500 px-8 py-1 rounded-lg w-full' type="text" id="profileIncome" name="profileIncome" />
        </div>
        <div>
            <label className='text-bold text-xl' htmlFor="profileDescription">Profile Description</label>
            <textarea className='border border-slate-500 rounded-lg  w-full' id="profileDescription" name="profileDescription"></textarea>
        </div>
        <button type="submit" className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-1 rounded-lg px-4 rounded focus:outline-none focus:shadow-outline w-full text-center'>Update Profile</button>
    </form>
  )
}

export default UpdateProfileForm
