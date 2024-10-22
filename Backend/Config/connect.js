import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://nugrahasetio6:WnYYx8nZL7CgRaCS@rayzen7.qztrk.mongodb.net/?retryWrites=true&w=majority&appName=Rayzen7");
    console.log("Connection to MongoDB was successful");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
  }
};

export default connectDB;