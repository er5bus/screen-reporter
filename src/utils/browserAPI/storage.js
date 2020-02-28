const CRITERIA = {
  EQ: "EQUAL",
  NEQ: "NEQUAL",
  LT: "LESS_THAN",
  MT: "MORE_THAN"
}


const ArrayList = function (data = {}) {
  this.data = data || {}
  this.length = Object.keys(data).length || 0
}

ArrayList.prototype = {
  addItem: function (data) {
    this.data[this.length] = data
    this.length++
  },
  setItem: function (data){
    this.data = data
  },
  getItem: function (key) {
    return this.data[key]
  },
  getData: function (){
    return this.data
  },
  findOne: function (criteria) {
    const key = Object.keys(this.data).filter((key) => this.criteriaCallback(criteria)(this.data[key]) ).pop()
    return this.getItem(key)
  },
  update: function (criteria, data) {
    const key = Object.keys(this.data).filter((key) => this.criteriaCallback(criteria)(this.data[key]) ).pop()
    this.data[key] = {...this.data[key], ...data}
    console.log(this.data[key])
  },
  delete: function (criteria) {
    const key = Object.keys(this.data).filter((key) => this.criteriaCallback(criteria)(this.data[key]) ).pop()
    console.log("delete")
    delete this.data[key]
  },
  map: function (callback=f=>f) {
    return Object.keys(this.data).map((object) => callback.apply(this, [object]) )
  },
  criteriaCallback: ({key, operator, value}) => object => {
    if (!object){
      return false
    }
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
}


const chromeStorage = ( function () {

  const browser = chrome.storage.local
  const that = this

  return {
    criteria: CRITERIA,
    createCriteria: function (key, operator, value) {
      return {key, operator, value}
    },
    getItem: ( key, defaultValue = [] ) => new Promise((resolve, reject) => {
      try {
        browser.get(key, (items) => {
          console.log(items)
          resolve((items[key] && JSON.parse(items[key])) || defaultValue)
        })
      }catch(e) {
        reject(e)
      }
    }),
    setItem: (key, value) => new Promise((resolve, reject) => {
      try {
        browser.set({[key]: JSON.stringify(value)}, items => {
          resolve(true)
        })
      }catch(e) {
        reject(e)
      }
    }),
    searchForItem: function (key, criteria, resolve=f=>f, reject=f=>f) {
      console.log(key)
      this.getItem(key)
        .then((items) => {
          console.log(items)
          const itemsArray = new ArrayList(items)
          const item = itemsArray.findOne(criteria)          
          console.log(itemsArray, item)
          resolve(item || null)
        })
        .catch((err) => reject(err))
    },
    updateItem: function (key, updatedItem, criteria, resolve=f=>f, reject=f=>f) {
      this.getItem(key)
        .then((items) => {
          const itemsArray = new ArrayList(items)
          itemsArray.update(criteria, updatedItem)
          console.log(itemsArray)
          this.setItem(key, itemsArray.getData())
            .then((done) => resolve(updatedItem))
            .catch((err) => reject(err))
        })
        .catch((err) => reject(err))
    },
    removItem: function (key, criteria, resolve=f=>f, reject=f=>f) {
      this.getItem(key)
        .then((items) => {
          const itemsArray = new ArrayList(items)
          itemsArray.delete(criteria)
          this.setItem(key, itemsArray.getData())
            .then((done) => resolve(filteredItems) )
            .catch((err) => reject(err))
        })
        .catch((err) => reject(err))
    },
    addItem: function (key, object, resolve=f=>f, reject=f=>f) {
      this.getItem(key)
        .then((items) => {
          const itemsList = new ArrayList(items)
          itemsList.addItem(object)
          this.setItem(key, itemsList.getData())
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
