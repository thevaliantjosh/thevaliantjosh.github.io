$(function(){
    // alert("Hello, and Welcome to the Portfolio!");
    /*Want to Manipulate sidebar-row-icon/sidebar-column-icon to collapse
    * the sidebar when clicked.
    * I also want the dots to shrink from 9 to 4 when collapsed.
    * After collapsed, the dots will expand from 4 to 9
    * The intention is to show the user that this icon is used to collapse the menu
    *
    *  */

    $('.sidebar-row-icon').hover(function(){
        $()
        $('#circle3, #circle6, #circle7, #circle8, #circle9').toggle("fade");
    })

})