import { getArticles, addArticle } from "../controllers/articleController.js";

const routes = (app) => {
    app.route('/articles')
       .get(getArticles)
       .post(addArticle);
}

export default routes;