const verifyAdmin = (request, response, next) => {
  if (request.user.role === 'admin') {
    next();
  } else {
    res.json({ message: "Vous n'êtes pas admin", error: true });
  }
};

module.exports = verifyAdmin;