'use strict'

const lastfm = require('./lastfm')
const users = require('./users')

/**
 * Returns an array with limit top tracks of each favourite artist
 * of the User with username.
 * 
 * @param {String} username 
 * @param {Number} limit 
 * @param {function(Error, Array)} cb 
 */
function getTopTracks(username, limit, cb) {
    users.getUser(username, (err, user)=>{
        if(err) return cb(err)
        let topTracks=[]
        let count=0
        user.artists.forEach(artist=>{
            lastfm.getTopTracks(artist, (err, tracks)=>{
                if(err) return cb(err)
                topTracks=topTracks.concat(tracks.slice(0, limit))
                count++
                if(count==user.artists.length)
                    cb(null, topTracks)
            })
            
        })
        
    })
}

module.exports = {
    getTopTracks
}