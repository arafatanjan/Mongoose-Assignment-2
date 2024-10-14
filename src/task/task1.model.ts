import mongoose, { Schema, model, Model } from "mongoose";
import { IBook } from './task1.interface';

const BookSchema: Schema = new Schema({
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    publicationYear: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 5, 
    },
    price: {
      type: Number,
      required: true,
    },
    publisher: {
      name: {
        type: String,
        required: true,
      },
      location: {
        type: String,
        required: true,
      },
    },
    reviews: [
      {
        reviewer: {
          type: String,
          required: true,
        },
        review: {
          type: String,
          required: true,
        },
        rating: {
          type: Number,
          required: true,
          min: 0,
          max: 5, 
        },
      },
    ],
  });
  
  
  const Book = mongoose.model<IBook>('Book', BookSchema);
  
  export default Book;