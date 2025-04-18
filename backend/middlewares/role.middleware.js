const roleMiddleware = (roles) => (req, res, next) => {
  if (!req.user || !roles.includes(req.user.role)) {
    return res.status(403).json({ msg: 'Unauthorized access' });
  }
  next();
};

module.exports = roleMiddleware;
