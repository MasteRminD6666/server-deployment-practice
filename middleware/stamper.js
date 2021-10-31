
'use strict';

module.exports = (req, res, next) => {

  req.timestamp = new Date();
  let count  = 0
  if (req) {
      req.numberOfRequests =count + 1 ;

  } 
  next();
};