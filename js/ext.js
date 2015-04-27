var menuRight = document.getElementById( 'cbp-spmenu-s2' ),
    showRight = document.getElementById( 'showRight' ),
    body = document.body;

var tabNi = document.getElementById('tabNi');
var tabDy = document.getElementById('tabDy');

$("#tabNi").click(function(){
    $("#tabDy").removeClass("activeTab");
    $("#tabNi").addClass("activeTab");
    $("#fire").addClass("activeFire");
    $("#fire").removeClass("passiveFire");
    $("#circle").removeClass("activeCircle");
    $("#circle").addClass("passiveCircle");
});

$("#tabDy").click(function(){
    $("#tabNi").removeClass("activeTab");
    $("#tabDy").addClass("activeTab");
    $("#fire").removeClass("activeFire");
    $("#fire").addClass("passiveFire");
    $("#circle").addClass("activeCircle");
    $("#circle").removeClass("passiveCircle");
});

showRight.onclick = function() {
    classie.toggle( this, 'active' );
    classie.toggle( menuRight, 'cbp-spmenu-open' );
    disableOther( 'showRight' );
};

function disableOther( button ) {
    if( button !== 'showRight' ) {
        classie.toggle( showRight, 'disabled' );
    }
}


  $('ul.tabs').each(function(){
    // For each set of tabs, we want to keep track of
    // which tab is active and it's associated content
    var $active, $content, $links = $(this).find('a');

    // If the location.hash matches one of the links, use that as the active tab.
    // If no match is found, use the first link as the initial active tab.
    $active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
    $active.addClass('active');

    $content = $($active[0].hash);

    // Hide the remaining content
    $links.not($active).each(function () {
      $(this.hash).hide();
    });

    // Bind the click event handler
    $(this).on('click', 'a', function(e){
      // Make the old tab inactive.
      $active.removeClass('active');
      $content.hide();

      // Update the variables with the new link and content
      $active = $(this);
      $content = $(this.hash);

      // Make the tab active.
      $active.addClass('active');
      $content.show();

      // Prevent the anchor's default click action
      e.preventDefault();
    });
  });