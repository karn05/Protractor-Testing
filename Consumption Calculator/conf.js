exports.config = {
  
  capabilities: {
    'browserName': 'chrome'
  },
  framework: 'jasmine', jasmineNodeOpts: {
      defaultTimeoutInterval: 20000
  },
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec.js']

   
};