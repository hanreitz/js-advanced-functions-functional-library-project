const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      const newCollection = Object.values(collection)
      for (let i = 0; i < newCollection.length; i++) {
        callback(newCollection[i])
      }
      return collection
    },

    map: function(collection, callback) {
      const newCollection = Object.values(collection)
      const returnCollection = []
      for (let i = 0; i < newCollection.length; i++) {
        returnCollection.push(callback(newCollection[i]))
      }
      return returnCollection
    },

    reduce: function(collection, callback, acc) {
      let newCollection = collection.slice()
      let total = acc
      if (!acc) {
        total = newCollection[0]
        newCollection = collection.slice(1)
      }
      for (let i = 0; i < newCollection.length; i++) {
        total = callback(total, newCollection[i], newCollection)
      }
      return total
    },

    find: function(collection, predicate) {
      const newCollection = Object.values(collection)
      for (let i = 0; i < newCollection.length; i++) {
        if (predicate(newCollection[i])) {
          return newCollection[i]
        }
      }
      return undefined
    },

    filter: function(collection, predicate) {
      const newCollection = Object.values(collection)
      let returnArray = []
      for (let i = 0; i < newCollection.length; i++) {
        if (predicate(newCollection[i])) {
          returnArray.push(newCollection[i])
        }
      }
      return returnArray
    },

    size: function (collection) {
      return Object.values(collection).length
    },

    first: function(array, n) {
      if (n) {
        return array.slice(0,n)
      } else {
        return array.slice(0)[0]
      }
    },

    last: function(array, n) {
      if (n) {
        return array.slice(array.length - n)
      } else {
        return array.slice(array.length - 1)[0]
      }
    },

    compact: function(array) {
      const newArray = []
      for (let i = 0; i < array.length; i++) {
        if (array[i]) {
          newArray.push(array[i])
        }
      }
      return newArray
    },

    sortBy: function(array, callback) {
      let newArray = [...array]
      return newArray.sort(function(a,b) {
        return callback(a) - callback(b)
      })
    },

    peel: function (returnArray, origArray) {
      for (let el of origArray) {
        returnArray.push(el)
      }
    },

    flatten: function(array, shallow, newArray = []) {
      if (!Array.isArray(array)) {
        return newArray.push(array)
      } 
      if (shallow) {
        for (let e of array) {
          if (Array.isArray(e)) {
            this.peel(newArray, e)
          } else {
            newArray.push(e)
          }
        }
      } else {
        for (let e of array) {
          this.flatten(e, false, newArray)
        }
      }
      return newArray
    },

    uniq: function(array, isSorted = false, callback) {
      let newArray = []
      if (isSorted) {
        for (let i = 0; i < array.length; i++) {
          if (array[i] != array[i-1]) {
            newArray.push(array[i])
          }
        }
      } else if (!callback) {
        for (let i = 0; i < array.length; i++) {
          if (!newArray.find(e => e === array[i])) {
            newArray.push(array[i])
          }
        }
      } else {
        const modifiedVals = new Set()
        const uniqVals = new Set()
        for (let val of array) {
          const moddedVal = callback(val)
          if (!modifiedVals.has(moddedVal)) {
            modifiedVals.add(moddedVal)
            uniqVals.add(val)
          }
        }

        newArray = Array.from(uniqVals)
      }
      return newArray
    },

    keys: function(object) {
      const newArray = []
      for (const e in object) {
        newArray.push(e)
      }
      return newArray
    },

    values: function(object) {
      const newArray = []
      for (const e in object) {
        newArray.push(object[e])
      }
      return newArray
    },

    functions: function(object) {
      const funcArray = []
      for (const e in object) {
        if (typeof object[e] === 'function') {
          funcArray.push(e)
        }
      }
      return funcArray.sort(function(a,b) {
        return a - b
      })
    }

  }
})()

fi.libraryMethod()
