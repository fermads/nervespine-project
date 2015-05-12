var extend = require('util')._extend;
var BASEPATH = 'web';
var ENVIRONMENT = process.env.ENVIRONMENT || 'prod';

var defaults = {
  build : {
    stamp    : Date.now().toString().substr(0,10),
    content  : BASEPATH,
    markup   : BASEPATH,
    script   : BASEPATH,
    image    : BASEPATH,
    style    : BASEPATH,
    template : BASEPATH
  }
};

var config = {
  local : {
    url : {
      style : 'http://localhost',
      script : 'http://localhost',
      image : 'http://localhost'
    },

    build : extend(defaults.build, {})
  },

  dev : {
    url : {
      style  : '',
      script : '',
      image  : ''
    },

	  build: extend(defaults.build, {})
  },

  qa : {
    url : {
      style  : '',
      script : '',
      image  : ''
    },

	  build: extend(defaults.build, {})
  },

  prod : {
    url : {
      style  : '',
      script : '',
      image  : ''
    },

	  build: extend(defaults.build, {})
  }
};

module.exports = config[ENVIRONMENT];