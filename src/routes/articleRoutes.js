const routes = (app) => {
    app.route('/articles')
       .get((request, response) => response.send('Successful GET request. :D'))
}

export default routes;