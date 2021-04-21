import { getArticles, addArticle, getArticleById, deleteArticle } from "../controllers/articleController.js";

const routes = (app) => {
    app.route('/articles')
       .get(getArticles)
       .post(addArticle);

    app.route('/articles/:articleId')
       .get(getArticleById)
       .delete(deleteArticle);
}

export default routes;