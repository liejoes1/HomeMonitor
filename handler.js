'use strict';
var webGetter = require('./webgetter');

module.exports.hello = async (event, context) => {
  console.log('awd')
  return {
    statusCode: 200,
    body: JSON.stringify({     
      message: 'Go Serverless v1.0! Your function executed successfully!' + webGetter.add(4, 5)
      // Get Data from monit 
    }),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

