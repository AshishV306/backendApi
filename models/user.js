import express from "express";
import mongoose from "mongoose";

  //Defining Schema
  const UserSchema = new mongoose.Schema({
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
        select: false,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
  });
  
  //Creating colecction named userdetail
 const User = mongoose.model("userdetail", UserSchema);

 export default User;