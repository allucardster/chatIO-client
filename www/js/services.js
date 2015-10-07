angular.module('chatIO.services', ['ionic', 'chatIO.config'])
    /*
    .provider('$chatUser', function() {
        this.email;
        this.nick;
        this.avatar;
        this.firstName;
        this.lastName;
    })
    */
    .factory('$chatSocket', function(socketServerUrl) {
        var socket = io(socketServerUrl, {
            transports: [ 'websocket' ]
        });
        return socket;
    })
;