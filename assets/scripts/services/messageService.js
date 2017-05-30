

angular.module('chattyApp')
  .service('messageService', function ( $http ) {

      this.getMessages = function () {
        return $http.get('/messages').then(function(response){
        })
      }

      this.addMessage = function ( message ) {
        return $http.post('/messages', { message: message });
      }

  });
