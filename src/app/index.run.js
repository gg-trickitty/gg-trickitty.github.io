(function() {
  'use strict';

  angular
    .module('ggTrickittyGithubIo')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
