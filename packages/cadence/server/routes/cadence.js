'use strict';

// The Package is past automatically as first parameter
module.exports = function(Cadence, app, auth, database) {

    app.get('/cadence/example/anyone', function(req, res, next) {
        res.send('Anyone can access this');
    });

    app.get('/cadence/example/auth', auth.requiresLogin, function(req, res, next) {
        res.send('Only authenticated users can access this');
    });

    app.get('/cadence/example/admin', auth.requiresAdmin, function(req, res, next) {
        res.send('Only users with Admin role can access this');
    });

    app.get('/cadence/example/render', function(req, res, next) {
        Cadence.render('index', {
            package: 'cadence'
        }, function(err, html) {
            //Rendering a view from the Package server/views
            res.send(html);
        });
    });
};
