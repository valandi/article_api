import mongoose from 'mongoose';

export const ArticleSchema = new mongoose.Schema({
   
    // Primary Key
    id: {
      type: String,
      required: "ID is required"
    },
  
    slug: {
      type: String
    },
  
    title: {
      type:String
    },
  
    dek: {
      type: String
    },
  
    published_date: {
      type: Date,
      default: Date.now
    },
  
    canonical_url: {
      type: String
    },
  
    word_count: {
      type: String
    },
  
    tags: {
      type: String
    },
  
    embeds: {
      type: String
    },
  
    lead_art: {
      id: String,
      type: String
    },
  
    authors: 
      [ 
        {
        id: String,
        slug: String
        }
      ]
  }, {strict: false})