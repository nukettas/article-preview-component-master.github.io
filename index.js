$(function () {
    $('[data-bs-toggle="popover"]').popover({
        html: true,
        content: function(){
            var content = 
            $(this.attr("data-bs-content"));
            $(content).children(".popover-body").html();
            return content;
        }
    });
  });

 