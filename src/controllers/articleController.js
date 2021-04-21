import mongoose from 'mongoose';
import { ArticleSchema } from '../models/articleModel'

const Article = mongoose.model('Articles', ArticleSchema);

/**
 * Get all articles
 */
export const getArticles = (req, res) => {
    Article.find({}, (err, article) => {
        if (err) {
            res.send(err);
        }
        res.json(article);
    })
}

/**
 * Get article by id
 */
export const getArticleById = (req, res) => {
    Article.find(
        {id: req.params.articleId}
    ).then(
        (err, article) => {
            if (err) {
                res.send(err);
            }
            res.json(article);
        }
    )
}
/**
 * Add an article if the id does not already exist. 
 * Update an existing article if id already exists.
 */
export const addArticle = async (req, res) => {

    let newArticle = new Article(req.body);

    if (newArticle.id == undefined) {
        res.send("Article must have an id");
        return;
    }

    // Check to see if article is already in db
    // If article exists, then update the existing article
    // Else, generate a new canonical url and 
    const articleExists = await Article.exists({id: newArticle.id});

    if (articleExists) {
        Article.findOneAndUpdate(
            {id: newArticle.id},
            req.body,
            { new: true, useFindAndModify:false },
            (err, article) => {
                if (err) { 
                    res.send(error);
                }
                res.json(article);
            }
        )
    } else {
        newArticle.canonical_url = get_url(newArticle);
        newArticle.save((err, article) => {
            if (err) {
                res.send(error);
            }
            res.json(article);
        })
    }
}

/**
 * Delete article by id
 */
 export const deleteArticle = (req,res) => {
    Article.deleteOne(
        { id: req.params.articleId }, 
        (err, article) => {
            if (err) {
                res.send(err)
            }
            res.json({message: "successfully deleted article"})
        }
    )
  }


const get_url = (newArticle) => {
  let title_value = newArticle.title;
  let urlized_title = title_value.replace(/\s+/g, '-').toLowerCase();
  var today = new Date();
  var year = today.getFullYear();
  var month = today.getMonth() + 1;

  return "/culture/archive/" + year + "/" + month + "/" + urlized_title + "/" + newArticle._id;
}