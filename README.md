## Getting Started
Clone the repository:
```
git clone https://github.com/valandi/article_api/
```

### Prerequisites

#### MongoDB
The project uses MongoDB as a database. If you are on Mac and using Homebrew package manager the installation is as simple as `brew install mongodb`.
Otherwise, please consult MongoDB docs: `https://docs.mongodb.com/manual/administration/install-community/`

### Docker
Check out Docker's readme for installation instructions. 
https://github.com/wsargent/docker-cheat-sheet/blob/master/README.md#installation

### Run the Application

#### Start your mongod database:

On most systems, you can simply run:
```
sudo service mongod start
```

If you happen to be using WSL for windows (like the author), do the following instead:
```
sudo /etc/init.d/mongod start
```

#### Run the app
Navigate to the root folder. Run the following
```
docker build -t <build_name> .
docker run -dp 2814:2814 <build_name>
```

Try sending a GET request to ```http://localhost:2814/articles/```
If you see a blank collection, congrats! You are all set up. 

### API Endpoints

#### Get all articles
Send a GET request to ```/articles```

#### Add a new article or update an existing one
Send a POST request to ```/articles```
Include JSON to define the new article (id and title are required)

#### Get article by id
Send a GET request to ```/articles/<article_id>```, replace ```article_id``` with the id

#### Delete article by id
Send a DELETE request to ```/articles/<article_id>```, replace ```article_id``` with the id

### Article Schema 

| Field       | Type | Required? |
| ----------- | ----------- | --------- |
| id | String  | true  |
| title | String  | true |
| published_date | Date | false |
| dek | String | false |
| slug | String | false |
| canonical_url | String | false |
| word_count | String | false |
| tags | String | false |
| embeds | String | false |
| lead_art | String | false |
| authors | [id: String, slug: String] | false |


