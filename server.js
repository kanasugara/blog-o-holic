import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import morgan from "morgan";  

import { serverPort } from './server/config.json';

import * as db from './server/utils/DataBaseUtils';

// Initialization of express application
const app = express();

app.use(express.static(__dirname + '/app')); 

// Set up connection of database
db.setUpConnection();

// Using bodyParser middleware
app.use( bodyParser.json() );

// Allow requests from any origin
app.use(cors({ origin: '*' }));

// Using morgan middleware for logging all requests
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.render('app/index.html');
});


// RESTful api handlers
app.get('/home', (req, res) => {
    db.listPosts().then(data => res.send(data));
});
app.get('/posts/:id', (req, res) => {
    db.listOnePost(req.params.id).then(data => res.send(data));
});

app.post('/home', (req, res) => {
    db.createPost(req.body).then(data => res.send(data));
});

app.delete('/posts/:id', (req, res) => {
    db.deletePost(req.params.id).then(data => res.send(data));
});

const server = app.listen(serverPort, () => {
    console.log(`Server is up and running on port ${serverPort}`);
});