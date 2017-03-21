"use strict";

module.exports = function(req, res, next){

    // User should be login to view settings pages
    if ( !req.user ) {
        return res.redirect_with_session(303, '/');
    }

    // Only Admin or Approver users allowed to deal with some settings pages
    if ( !req.user.is_admin() && !req.user.is_approver() ) {
        return res.redirect_with_session(303, '/');
    }

    next();
};
