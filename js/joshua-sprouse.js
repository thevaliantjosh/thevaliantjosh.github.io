$(function(){
    // alert("Hello, and Welcome to the Portfolio!");
    /*Want to Manipulate sidebar-row-icon/sidebar-column-icon to collapse
    * the sidebar when clicked.
    * I also want the dots to shrink from 9 to 4 when collapsed.
    * After collapsed, the dots will expand from 4 to 9
    * The intention is to show the user that this icon is used to collapse the menu
    *
    *  */
    $('#sidebar-icon').on("click", function(){
        // alert("You clicked me!");//this works
        $('.sidebar-container-icon').toggleClass("sidebar-container-icon-shrink");
        $('.siebar-row-icon').toggleClass("sidebar-row-icon-shrink");
        $('.sidebar-column-icon').toggleClass("sidebar-column-icon-shrink");
        $('#circle3, #circle6').toggle("drop", {direction: "left"}, "fast");
        $('#circle7, #circle8').toggle("drop", {direction: "up" }, "fast");
        $('#circle9').toggle("drop", {direction: "left"}, "fast")
        $('.sidebar').toggleClass("sidebar-shrink", 500, "linear");
        $('.sidebar-container').toggle("fade");

    })
})

//Adding some comments to see if pushing to GitHUb Still works

