// $(".cs1").hover(function() {
//     $(this).onmouseover($(src='images/Curated-Hover.jpg'));
//     $(this).onmouseout($(src='images/cs_Curated Group.jpg'));
// });
// $(".cs2").hover(function() {
//     $(this).onmouseover($(src='images/FCC-Hover.jpg'));
//     $(this).onmouseout($(src='images/cs_FCC Group.jpg'));
// })
// $(".cs3").hover(function() {
//     $(this).onmouseover($(src='images/HouWil-Hover.jpg'));
//     $(this).onmouseout($(src='images/cs_HouWild Group.jpg'));
// })

// $(".cs1").on("mouseover", function() {
//     $(this).mouseover(src='images/Curated-Hover.jpg');
//     $(this).mouseout(src='images/cs_Curated Group.jpg');
// });
// $(".cs2").on(function() {
//     $(this).mouseover(src='images/FCC-Hover.jpg');
//     $(this).mouseout(src='images/cs_FCC Group.jpg');
// })
// $(".cs3").on(function() {
//     $(this).mouseover(src='images/HouWil-Hover.jpg');
//     $(this).mouseout(src='images/cs_HouWild Group.jpg');
// })


// $(".cs1").on("hover", function() {
//     $(this).mouseover(src='images/Curated-Hover.jpg');
//     $(this).mouseout(src='images/cs_Curated Group.jpg');
// });
// $(".cs2").on("hover", function() {
//     $(this).mouseover(src='images/FCC-Hover.jpg');
//     $(this).mouseout(src='images/cs_FCC Group.jpg');
// })
// $(".cs3").on("hover", function() {
//     $(this).mouseover(src='images/HouWil-Hover.jpg');
//     $(this).mouseout(src='images/cs_HouWild Group.jpg');
// })


// $(".workImages").on("hover", function() {
//     $(".cs1").mouseover(src='images/Curated-Hover.jpg');
//     $(".cs1").mouseout(src='images/cs_Curated Group.jpg');
// });
// $(".workImages").on("hover", function() {
//     $(".cs2").mouseover(src='images/FCC-Hover.jpg');
//     $(".cs2").mouseout(src='images/cs_FCC Group.jpg');
// })
// $("workImages").on("hover", function() {
//     $(".cs3").mouseover(src='images/HouWil-Hover.jpg');
//     $(".cs3").mouseout(src='images/cs_HouWild Group.jpg');
// })

var sourceSwap = function () {
    var $this = $(this);
    var newSource = $this.data('alt-src');
    $this.data('alt-src', $this.attr('src'));
    $this.attr('src', newSource);
}

$(function () {
    $('img.cs1').hover(sourceSwap, sourceSwap);
});
$(function () {
    $('img.cs2').hover(sourceSwap, sourceSwap);
});
$(function () {
    $('img.cs3').hover(sourceSwap, sourceSwap);
});