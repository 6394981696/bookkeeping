const en = require('../locales/en.json');
const hi = require('../locales/hi.json');

const i18nMiddleware = (req, res, next) => {
  const lang = req.headers['accept-language'] || 'en';
  req.t = (key) => {
    if (lang === 'hi') return hi[key] || key;
    return en[key] || key;
  };
  next();
};

module.exports = i18nMiddleware;