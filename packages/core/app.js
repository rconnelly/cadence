'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Core = new Module('core');
//var AutoIncrement = require('mongoose-auto-increment');
/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Core.register(function(app, auth, database) {

    //We enable routing. By default the Package Object is passed to the routes
    Core.routes(app, auth, database);

    //AutoIncrement.initialize(database);

    /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Core.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Core.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Core.settings(function(err, settings) {
        //you now have the settings object
    });
    */

    return Core;
});
