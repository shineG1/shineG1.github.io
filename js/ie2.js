const ver = navigator.userAgent;
console.log(ver);

const isIE = /trident/i.test(ver);
console.log(isIE);

if(isIE){
  alert("익스플로러 브라우저로 접속하셨네요. 이 웹 페이지는 익스플로러를 지원하지 않습니다. 다른 브라우저로 접속해주세요.")
}

$(document).ready(function($) {
  $(".scroll_move").click(function(event){
      console.log(".scroll_move");         
      event.preventDefault();
      $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
  });

});





// $(document).ready(function(){
//   $('#pop_bt').click(function(){
//     $('#pop').show(); 
//   });
//   $('#close').click(function(){
//     $('#pop').hide();
//   });



// var $layerPopup = $("#pop_bt");
// var left = ($(window).scrollLeft() + ($(window).width() - $layerPopup.width()) / 2);
// var top = ($(window).scrollTop() + ($(window).height() - $layerPopup.height()) / 2 );
// $layerPopup.css({ "left": left, "top":top, "position": "absolute" });
// $("body").css("position", "relative").append($layerPopup); 
// });



$(document).ready(function(){
        
  $("#pop_bt").click(function(event){  //팝업 Open 버튼 클릭 시 

       $("#pop").css({
          "top": (($(window).height()-$("#pop").outerHeight())/2+$(window).scrollTop())+"px",
          "left": (($(window).width()-$("#pop").outerWidth())/2+$(window).scrollLeft())+"px"
          //팝업창을 가운데로 띄우기 위해 현재 화면의 가운데 값과 스크롤 값을 계산하여 팝업창 CSS 설정
       
       }); 
      
      $("#popup_mask").css("display","block"); //팝업 뒷배경 display block
      $("#pop").css("display","block"); //팝업창 display block
      
      $("body").css("overflow","hidden");//body 스크롤바 없애기
  });
  
  $("#close").click(function(event){
      $("#popup_mask").css("display","none"); //팝업창 뒷배경 display none
      $("#pop").css("display","none"); //팝업창 display none
      $("body").css("overflow","auto");//body 스크롤바 생성
  });


});
