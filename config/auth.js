// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'googleAuth' : {
        'clientID'         : '209831958309-211hfhsu2d3ue7dkocl9bh399sffft4t.apps.googleusercontent.com',
        'clientSecret'     : 'BOBGV-wpYUjBAbzjRfBxbVF3',
        //'callbackURL'      : 'http://localhost/auth/google/callback'
        'callbackURL'      : 'http://localhost:8080/auth/google/callback'
    }

};