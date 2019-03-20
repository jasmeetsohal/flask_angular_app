(function($) {
      
    var app = $.sammy('#main', function() {
  
      this.get('#/', function(context) {
          $.ajax({
          url: 'https://flask-crud-app.glitch.me/read',
          dataType: 'json',
          success: function(items) {
            $.each(items, function(i, item) {
              context.log(item.title, '-', item.artist);
            });
          }
        });
      });
  
    });
  
    $(function() {
      app.run('#/');
    });
  
  })(jQuery);