import Book from './task1.model'; 
import mongoose from 'mongoose';

async function updatePricesToIntegers() {
  try {
    // Update all books published after 2020 where the price is a string
    const result = await Book.updateMany(
      { 
        publicationYear: { $gt: 2020 }, 
        price: { $type: "string" } 
      },
      [
        {
          
          $set: { price: { $toInt: "$price" } }
        }
      ]
    );
    
    console.log(`${result.modifiedCount} books were updated.`);
  } catch (error) {
    console.error('Error updating book prices:', error);
  }
}


updatePricesToIntegers();