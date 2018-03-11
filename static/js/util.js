app.service('util_svc', function() {
  this.generateUUID = function() {
    // unique ID generator modified to create ids 30 characters long
    // from http://stackoverflow.com/a/2117523
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxx'.replace(/[xy]/g, function(c) {
      var r = ((d + Math.random() * 16) % 16) | 0;
      d = Math.floor(d / 16);
      return (c == 'x' ? r : (r & 0x7) | 0x8).toString(16);
    });
    return uuid;
  };
});
