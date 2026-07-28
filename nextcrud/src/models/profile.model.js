import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: false,
  },
  title: {
    type: String,
    required: false,
  },
  description:{
    type: String,
    required: false,
  },
  income: {
    type: String,
    required: false,
  },  
  image: {
    type: String,
    required: true,
  }
}, { timestamps: true });

const Profile = mongoose.models.Profile || mongoose.model('Profile', profileSchema);
export default Profile;