
require('express-group-routes')
const express = require('express')
const app = express()
const querystring = require('querystring')
const bodyParser = require('body-parser')
const port = 5000





//controllers
const AuthController = require('./controllers/auth')
const Toonations = require('./controllers/Toonations')
app.use(bodyParser.json())

//middlewares
const { authenticated } = require('./middleware')


app.group("/api/v1", (router) => {

    //auth API
    router.post('/register', AuthController.register)
    router.post('/login', AuthController.login)

    //toons API
    router.get('/webtoons', Toonations.index)
    
    //episodes API
    router.get('/webtoon/:id/episodes', Toonations.episodes)

    //pages API
    router.get('/webtoon/:id/episode/:id_ep', Toonations.pages)

    //pages Favorite
    router.get('/webtoon',authenticated, Toonations.webtoon)

    //my creation webtoons
    router.get('/user/:id/webtoons',authenticated, Toonations.mywebtoons)

    //create my creation webtoons
    router.post('/user/:id/webtoon', authenticated, Toonations.createMywebtoon ) 
    
    //get episode based on my creation webtoons
    router.get('/user/:id/webtoon/:wbToonid/episodes', authenticated, Toonations.myEpisode)

    //update my webtoon creation
    router.put('/user/:id/webtoon/:wbToonid', authenticated, Toonations.editMywebtoon)

    //delete my webtoon creation
    router.delete('/user/:id/webtoon/:wbToonid', authenticated, Toonations.deleteMywebtoon)
 
    //another APIs goes here
})


app.listen(port, () => console.log(`Listening on port ${port}!`))