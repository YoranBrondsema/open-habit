/* jshint node: true */

module.exports = function(deployTarget) {
  var ENV = {
    build: {}
    // include other plugin configuration that applies to all deploy targets here
  };

  if (deployTarget === 'development') {
    ENV.build.environment = 'development';
    // configure other plugins for development deploy target here
  }

  if (deployTarget === 'staging') {
    ENV.build.environment = 'production';
    // configure other plugins for staging deploy target here
  }

  if (deployTarget === 'production') {
    ENV.build.environment = 'production';
    // configure other plugins for production deploy target here
  }

  // Default (https://github.com/ember-cli-deploy/ember-cli-deploy-s3#filepattern) with 'json'
  var extensionsToUploadToS3 = [
    'js', 'css',
    'png', 'gif', 'ico', 'jpg',
    'xml', 'txt',
    'svg', 'eot', 'ttf', 'woff', 'woff2',
    'json'
  ];
  var filePattern = `**/*.{${extensionsToUploadToS3.join(',')}}`;

  // Manifest
  ENV.manifest = {
    filePattern: filePattern
  };

  // s3
  ENV.s3 = {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    bucket: process.env.AWS_BUCKET,
    region: process.env.AWS_REGION,
    filePattern: filePattern
  };

  // s3-index
  ENV['s3-index'] = {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    bucket: process.env.AWS_BUCKET,
    region: process.env.AWS_REGION,
    allowOverwrite: true
  };

  // Pipeline
  ENV.pipeline = {
    activateOnDeploy: true
  };

  // Note: if you need to build some configuration asynchronously, you can return
  // a promise that resolves with the ENV object instead of returning the
  // ENV object synchronously.
  return ENV;
};
