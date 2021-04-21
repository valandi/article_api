import mongoose from 'mongoose';
import { ArticleSchema } from '../models/articleModel'

// TODO: input validation on JSON, update article, delete article

const Article = mongoose.model('Articles', ArticleSchema);

/**
 * Get all articles
 */
export const getArticles = (request, response) => {
    Article.find({}, (error, article) => {
        if (error) {
            response.send(error);
        }
        response.json(article);
    })
}

/**
 * Get article by id
 */
export const getArticleById = (request, response) => {
    Article.find({id: request.params.id}, (error, article) => {
        if (error) {
            response.send(error);
        }
        response.json(article);
    })
}
/**
 * Add an article
 * TODO: Generate unique canonical url
 */
export const addArticle = (request, response) => {

    let newArticle = new Article(request.body);

    // Add new article to database
    newArticle.save((error, article) => {
        if (error) {
            response.send(error)
        }
        response.json(article)
      })

}
/**
 * Update an existing article
 */

/**
 * Delete article by id
 */


