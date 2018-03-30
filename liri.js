require("dotenv").config()
var keys = require('./keys')
var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify)

function Twitter(key) {

}
var userCommand = process.argv[2]
var userSelection = process.argv[3]

switch (userCommand) {
    case 'my-tweets':

    break
    case 'spotify-this-song':
        if (userSelection === undefined) {
            userSelection = 'The Sign'
        }
        spotify.search({ 
            type: 'track', 
            query: userSelection
        }, 
        function(err, data) {
            if (err) {
                return console.log('Error occurred: ' + err)
            }
            console.log('Artist: ' + data.tracks.items[0].artists[0].name)
            console.log('Song name: ' + data.tracks.items[0].name)
            console.log('Preview link: ' + data.tracks.items[0].external_urls.spotify)
            console.log('Album: ' + data.tracks.items[0].album.name)
        })
    break
    case 'movie-this':

    break
    case 'do-what-it-says':

    break
    default:

}