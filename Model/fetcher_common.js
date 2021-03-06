const Scraper = require("../web_scraper");
const debug = require('debug')('fetcher:index')

class fetcher_common {
  /**
   * 
   * @param {Object} sitemap 
   * @param {number} delay 
   * @param {number} pageLoaddedlay 
   * @param {String} name 
   */
  constructor(sitemap, delay, pageLoaddedlay, name, browser = 'headless') {
    this.sitemap = sitemap;
    this.delay = delay;
    this.pageLoaddelay = pageLoaddedlay;
    this.name = name;
    this.browser = browser
    this.resultQueue = []
  }
  /**
   * 
   *  url 可是string 亦可 array 
   */
  updateStartURL(url) {
    this.sitemap.startUrl = url;
  }
  async run() {
    console.info("Pending Url To Fetcher")
    console.info('\x1B[32m%s\x1B[0m', this.sitemap.startUrl + "\n")
    if (this.sitemap.startUrl == []) {
      throw ('Empty URL!');
    }
    console.info("fetching " + this.name);
    try {
      const results = await Scraper(this.sitemap, {
        delay: this.delay,
        pageLoaddelay: this.pageLoaddelay,
        browser: this.browser
      })
      debug("Fetcher_common result: %O", results);
      return results;
    } catch (error) {
      console.log("Occured Error when fetching %s", this.name);
      console.error(error);
      return undefined;
    }
  }
}
module.exports = fetcher_common;