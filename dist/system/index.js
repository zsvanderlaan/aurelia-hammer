System.register([], function (_export) {
  'use strict';

  _export('configure', configure);

  function configure(frameworkConfig) {
    frameworkConfig.globalResources('./swipe');
  }

  return {
    setters: [],
    execute: function () {}
  };
});