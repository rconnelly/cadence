'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Cadence = new Module('cadence');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Cadence.register(function(app, auth, database) {

    //We enable routing. By default the Package Object is passed to the routes
    Cadence.routes(app, auth, database);

    //We are adding a link to the main menu for all authenticated users
    Cadence.menus.add({
        title: 'cadence example page',
        link: 'cadence example page',
        roles: ['authenticated'],
        menu: 'main'
    });

    /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Cadence.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Cadence.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Cadence.settings(function(err, settings) {
        //you now have the settings object
    });
    */

    return Cadence;
});
