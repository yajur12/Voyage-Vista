import jwt from "jsonwebtoken";
//  JWTs are commonly used for user authentication and authorization in web applications.


// verifyToken function: This is a middleware function that checks if the user has a valid JWT token in the cookies of the request.
// req.cookies.accessToken: The token is expected to be in the accessToken cookie sent by the client. 
// This is where the user's authentication token will be stored after login.
export const verifyToken = (req, res, next) => {
  const token = req.cookies.accessToken;

  if (!token) {
    return res
      .status(401) // not authorized
      .json({ success: false, message: "You're not authorize" });
  }

  // if token is exist then verify the token
  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) {
      return res
        .status(401)
        .json({ success: false, message: "token is invalid" });
    }
    req.user = user;
    next(); // don't forget to call next
  });
};

export const verifyUser = (req, res, next) => {
  verifyToken(req, res, next, () => { // Calling verifyToken: This function first calls verifyToken to ensure the user is authenticated.
    if (req.user.id === req.params.id || req.user.role === "admin") {
      next();
    } else {
      return res
        .status(401)
        .json({ success: false, message: "You are not authenticated" });
    }
  });
};
export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.role === "admin") {
      next();
    } else {
      return res
        .status(401)
        .json({ success: false, message: "You are not authorize" });
    }
  });
};



// verifyToken: This middleware checks if the user has a valid JWT token in their cookies. If the token is valid, it adds the user information to the request and lets the request proceed.
// verifyUser: This middleware checks if the authenticated user is trying to access their own data or has an admin role. It extends verifyToken by adding authorization logic based on the user's ID and role.
// verifyAdmin: This middleware checks if the authenticated user is an admin. It uses verifyToken and adds authorization logic based on the user's role being "admin".