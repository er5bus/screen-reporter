const chromeStorage = ( function () {

  const browser = chrome.storage.local
  const that = this

  const CRITERIA = {
    EQ: "EQUAL",
    NEQ: "NEQUAL",
    LT: "LESS_THAN",
    MT: "MORE_THAN"
  }

  const searchCriteriaCallback = ({key, operator, value}) => object => {
    switch (operator) {
      case CRITERIA.EQ:
        return object[key] === value
      case CRITERIA.NEQ:
        return object[key] !== value
      case CRITERIA.LT:
        return object[key] <= value
      case CRITERIA.MT:
        return object[key] >= value
      default:
        throw Error("Not valid operator")
    }
  }

  return {
    criteria: CRITERIA,
    createCriteria: function (key, operator, value) {
      return {key, operator, value}
    },
    getItem: ( key, defaultValue = [] ) => new Promise((resolve, reject) => {
      try {
        browser.get(key, (items) => {
          resolve(items[key] || defaultValue)
        })
      }catch(e) {
        reject(e)
      }
    }),
    setItem: (key, value) => new Promise((resolve, reject) => {
      try {
        browser.set({[key]: value}, items => {
          resolve(true)
        })
      }catch(e) {
        reject(e)
      }
    }),
    searchForItem: function (key, criteria, resolve=f=>f, reject=f=>f) {
      this.getItem(key)
        .then((items) => resolve((items||[]).filter(searchCriteriaCallback(criteria))))
        .catch((err) => reject(err))
    },
    removeItem: function (key, criteria, resolve=f=>f, reject=f=>f) {
      this.searchForItem(key, criteria)
        .then((filteredItems) => {
          this.setItem(key, filteredItems)
        })
        .catch((err) => reject(err))
    },
    addItem: function (key, object, resolve=f=>f, reject=f=>f) {
      this.getItem(key)
        .then((items) => {
          const newItems = (items||[]).concat([object])
          this.setItem(key, newItems)
            .then((res) => resolve(res))
            .catch((err) => reject(err))
        })
    },
    onChange: function (callback) {
      browser.storage.onChanged.addListener(callback)
    }
  }
}())


export default chromeStorage
