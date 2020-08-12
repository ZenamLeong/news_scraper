const fetcher = require('./fetcher_news_via_search_engine');

module.exports = news_wanbao;

class news_wanbao extends fetcher {
  constructor(delay, pageLoaddelay) {
    super({
        "_id": "news_wanbao",
        "startUrl": [],
        "selectors": [{
          "id": "title",
          "type": "SelectorText",
          "parentSelectors": ["_root"],
          "selector": "h1",
          "multiple": false,
          "regex": "",
          "delay": 0
        }, {
          "id": "date",
          "type": "SelectorText",
          "parentSelectors": ["_root"],
          "selector": "span.datestamp",
          "multiple": false,
          "regex": "",
          "delay": 0
        }, {
          "id": "content",
          "type": "SelectorText",
          "parentSelectors": ["_root"],
          "selector": "div.content-body",
          "multiple": false,
          "regex": "",
          "delay": 0
        }]
      },
      delay,
      pageLoaddelay,
      'news_wanbao',
      'SG',
      'www.wanbao.com.sg',
      'duckduckgo');
  }
}