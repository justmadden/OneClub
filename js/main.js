$(document).ready(function () {
      $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
      slidesToShow:3,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      vertical:true,
      centerMode: true,
      focusOnSelect: true
    });

    $(".quantity-minus").click(function () {
      var quantity=$(".quantity-number").text();
      if(quantity>1)
      {
        $(".quantity-number").text(--quantity);
      }
    });
    $(".quantity-plus").click(function () {
      var quantity=$(".quantity-number").text();
      if(quantity<50)
      {
        $(".quantity-number").text(++quantity);
      }
    });
    
    $(function(){
      $(".custom-radio").click(function() {
          switch ($("input[name=test]:checked").val()) {
            case "1":
              $("#color").text(" Серый")
              break;
            case "2":
              $("#color").text(" Синий")
              break;
            case "3":
              $("#color").text(" Желтый")
              break;
            case "4":
              $("#color").text(" Красный")
              break;
            case "5":
              $("#color").text(" Зеленый")
              break;
            default:
          }
      });
    });

});
