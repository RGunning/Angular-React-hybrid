module.exports = {
  name: 'angular-app',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/angular-app/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
