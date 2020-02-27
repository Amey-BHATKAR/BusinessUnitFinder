'use strict';
module.exports = {
    controller: require('../controllers/controller'),

    routeApp: function(app) {
        // signing up a user
        app.route('/signup')
            .get(this.controller.signUp.bind(this.controller))
            .post(this.controller.signUp.bind(this.controller));

    }
};