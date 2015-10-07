angular.module('chatIO', ['ionic', 'chatIO.config', 'chatIO.controllers', 'chatIO.services'])
.run(function($ionicPlatform, $state) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default
        // (remove this to show the accessory bar above the keyboard 
        // for form inputs)
        if(window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if(window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})

.config(function ($stateProvider, $urlRouterProvider) {
    'use strict';
    $stateProvider
        .state('chat',{
            url:'/chat',
            controller:'ChatController',
            templateUrl:'views/chat.html'
        })
    ;
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/chat');
});
