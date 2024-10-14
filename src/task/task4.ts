
import mongoose, { Schema, Document } from 'mongoose';


interface IBook extends Document {
  title: string;
  author: string[];
  genre: string;
  publicationYear: number;
  rating: number;
  price: number;
  featured: string; 
}


const BookSchema: Schema = new Schema({
  title: { type: String, required: true },
  author: [{ type: String, required: true }],
  genre: { type: String, required: true },
  publicationYear: { type: Number, required: true },
  rating: { type: Number, required: true, min: 0, max: 5 },
  price: { type: Number, required: true }
});


BookSchema.statics.findFeaturedBooks = async function (): Promise<IBook[]> {
 
  const featuredBooks = await this.find({ rating: { $gte: 4 } });


  const categorizedBooks = featuredBooks.map((book: IBook) => {
    if (book.rating >= 4.5) {
      book.featured = 'BestSeller';
    } else {
      book.featured = 'Popular';
    }
    return book;
  });

  return categorizedBooks;
};


  