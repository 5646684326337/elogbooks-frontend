(function () {
    'use strict';

    angular
        .module('elogbooks.user')
        .controller('UserListController', ['userCollectionResponse', UserListController]);

    function UserListController(jobCollectionResponse) {
        var vm = this;
        vm.userCollection = userCollectionResponse;
    }
})();
