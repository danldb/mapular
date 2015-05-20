exports.config = {
  specs: ['*Spec.js'],
  capabilities: {
    'browserName': 'chrome'
  },
  allScriptsTimeout: 30000,
  rootElement: 'html',
  baseUrl: 'http://localhost:3000/',
  seleniumAddress: 'http://localhost:4444/wd/hub'
}