exports.config = {

  assets: {

    js: {
      group1: [
        "js/a.js",
        "js/b.js"
      ]
    },

    css: {
      group2: [
        "css/1.css",
        "css/2.css"
      ]
    }

  },

  helpers: {

    hello: function() {
      return "hello!";
    }

  }

};