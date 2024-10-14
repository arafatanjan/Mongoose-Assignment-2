import Book from './task1.model'; 

const books = await Book.find({ genre: 'Fantasy' });