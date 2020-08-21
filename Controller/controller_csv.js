const fs = require('fs');
const j2c = require('json-2-csv');

exports.outputCSV = outputCSV;

async function outputCSV(data, filename) {
  if(!data) {
    console.log("CSV: Empty Data Won't be output");
  }
  if (!fs.existsSync('../output/')) {
    fs.mkdirSync('../output/')
  }
  j2c.json2csv(data, (err, csv) => {
    if (err) {
      console.error(err);
      return;
    }
    fs.writeFileSync('../output/' + filename + '.csv', csv, function (error) {
      console.error(error);
    })
  })
}


/*
let testdata = [{
    title: '懲教人員借調警隊執行防暴工作',
    date: '2019/11/14',
    content: '警務處處長已根據《公安條例》委任一批懲教署人員為特別任務警察，以增加警方人手和力量。該批人員主要負責守衞警務處處長指定的政府處所，執行防暴、處理突發事件等工作。' +
      '　　' +
      '政府回應傳媒查詢時表示，過去多月的動亂持續，規模龐大，在多區同時發生，加上暴力程度嚴重，警方前線人員需要加大支援。經考慮後，當局按《公安條例》第40條的委任機制，安排其他紀律部隊人員分擔或參與部分警務工作。' +
      ' ' +
      '警務處會先以試行形式，安排委任不多於100名懲教人員為特別任務警察。該些人員熟悉使用防暴裝備，在日常工作負責相關職務，並願意擔任特別任務警察。' +
      ' ' +
      '有關人員暫時會由懲教署以非全職形式借調，署方會靈活調配，予以配合。' +
      ' ' +
      '政府表示，為齊心協力共同遏止暴力，各支紀律部隊包括海關、消防處、政府飛行服務隊、入境事務處和懲教署在其分內工作盡最大努力，支持警隊依法止暴制亂。' +
      ' ' +
      '視乎警務處人手需要及社會活動發展，政府不排除日後再委任其他紀律部隊人員為特別任務警察，以分擔警隊壓力。',
    name: 'news_govhk',
    locale: 'HK',
    url: 'https://www.news.gov.hk/chi/2019/11/20191114/20191114_160531_805.html'
  },
  {
    title: '家居照顧隊已安排人手到戶送飯',
    date: '2019/11/14',
    content: '社會福利署表示，全港95支受資助家居照顧服務隊已因應近期社會情況安排人手，為有需要長者提供到戶送飯服務。市民如發覺長者未獲原有送飯服務，可聯絡該署跟進。' +
      ' ' +
      '就網上有關長者送飯服務的呼籲，社署表示已聯絡所有受資助的家居照顧服務隊，查詢其為長者提供到戶送飯服務的情況。資料顯示，各服務隊已因應社會情況，安排人手並採取措施提供相關服務。' +
      ' ' +
      '市民如發覺有長者因近日社會狀況而未獲服務，可致電社署熱線2343 2255。',
    name: 'news_govhk',
    locale: 'HK',
    url: 'https://www.news.gov.hk/chi/2019/11/20191114/20191114_220508_625.html'
  },
  {
    title: '入境處人員與警爭執純屬謠言',
    date: '2019/11/19',
    content: '對於網上有傳聞指入境事務處人員在尖沙咀執行職務期間與警方發生爭執，入境處澄清指純屬謠言。' +
      ' ' +
      '該處表示，雙方人員一直秉持專業態度執行職務，並會繼續互相支持和合作。',
    name: 'news_govhk',
    locale: 'HK',
    url: 'https://www.news.gov.hk/chi/2019/11/20191119/20191119_141924_327.html'
  },
  {
    title: '警方冀以人道方式應對理大事件',
    date: '2019/11/19',
    content: '警察公共關係科總警司郭嘉銓表示，警方希望和平解決理工大學事件，並以靈活、彈性、人道方式處理，此乃警方一直強調的兩大原則。' +
      ' ' +
      '郭嘉銓今日在警方記者會上說，事件發展至今三日，因應校園內有不少未成年人士，警方採取特別安排，對18歲以下、自願離開人士，警方會為其拍照和登記資料，不會即時拘捕，但保留追究權利；18歲或以上人士則會即時被捕。' +
      ' ' +
      '他說，警方一直與理大管理層緊密聯繫，期望他們勸諭校內師生離開，校方最終成功勸諭47名教職員離開校園。警方也協調社會人士，包括數十名校長、教師和社會福利署人員進入理大，陪同校內人士離開，並照顧未成年人士的福利事宜。紅十字會人員也獲安排進入校園照顧傷者。' +
      ' ' +
      '警方特別在鄰近的尖東消防局設立公眾諮詢台，處理家長和教師查詢。' +
      ' ' +
      '截至今日下午3時，約1,100人在理大及附近被捕或登記資料，其中約600人屬自願離開，包括400名成年人和200名未成年人士，大部分並非理大學生。' +
      '  ' +
      '對於有人嘗試從理大行人天橋游繩到路面離開，郭嘉銓說，警方在現場設下多重封鎖線並即時追截，共拘捕37人，包括接應司機。' +
      '  ' +
      '此外，警方前日接獲中文大學保安部報案，稱校園內發生連串刑事毀壞和縱火事件，警方其後在中大搜獲逾3,900枚汽油彈。郭嘉銓指，中大是警方採取行動以來，搜獲最多汽油彈的地點。' +
      ' ' +
      '中大校方也發現危險倉庫被爆竊，失去近100公升具高度腐蝕性的濃硫酸和濃硝酸等化學品。郭嘉銓指，有關化學品可製造汽油彈或作其他非法用途，嚴重危害公眾安全。' +
      ' ' +
      '警方在昨日處理示威行動中，共使用1,458枚催淚彈、1,391枚橡膠彈、325枚布袋彈、265枚海綿彈，其間六名警務人員受傷。',
    name: 'news_govhk',
    locale: 'HK',
    url: 'https://www.news.gov.hk/chi/2019/11/20191119/20191119_173228_948.html'
  }
]
*/