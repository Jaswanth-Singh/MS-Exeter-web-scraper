const cheerio = require("cheerio");
const got = require("got");

function loadCheerio(link, callBack) {
  got(link)
    .then((result) => {
      const $ = cheerio.load(result.body); //result.body has the HTML of the given link
      callBack($);
    })
    .catch((err) => {
      console.log(err);
    });
}
module.exports = { loadCheerio };
