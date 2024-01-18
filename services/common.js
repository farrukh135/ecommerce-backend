const passport = require("passport");

exports.isAuth = (req, res, done) => {
  return passport.authenticate("jwt");
};

exports.sanitizeUser = (user) => {
  return { id: user.id, role: user.role };
};

exports.cookieExtractor = function (req) {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies["jwt"];
  }
  //TODO : this is temporary token for testing without cookie
  // token =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YTdhNWIzOWRjZjczMjkyOWI4M2RiMCIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzA1NDg2NTE1fQ.FVOtTiel7kfFVeKxbTA_Q3Jy79nFbGQkRKneW8Rmy3E";
  return token;
};
