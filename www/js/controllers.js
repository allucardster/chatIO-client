angular.module('chatIO.controllers', ['ionic', 'chatIO.services'])
.controller('ChatController', function ($scope, $chatSocket) {
    'use strict';
    $scope.currentMsg = '';
    $scope.messages = [];

    var sendMessage = function(msg) {
        $scope.messages.push(msg);
        $chatSocket.emit('new_message', msg);
    };

    $scope.sendMessage = function() {
        sendMessage($scope.currentMsg);
        $scope.currentMsg = '';
    };

    $chatSocket.on('incoming_message', function (msg) {
        $scope.$apply(function() {
            $scope.messages.push(msg);
        });
    });
})
;