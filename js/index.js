	$(function(){
		var doll = new Array();  //先声明一维
		var city = new Array();  //先声明一维
		doll[0]=1;
		doll[1]=1;
		doll[2]=1;
		doll[3]=1;
		doll[4]=1;
		city[1]="Auckland";
		city[2]="Wellington";
		city[3]="Christchurch";
		city[4]="Queenstown";

		var audio1=$("#audio1")[0];
		var audio2=$("#audio2")[0];
		var audio3=$("#audio3")[0];
var curPage="index";
var curCity=parseInt(1);
var left=0;
var btnsShow=false;
audio3.play();
function goPage($page){
		 $.getJSON("http://liuxin.lxliu.cn/tcpPush/getWeather?city="+curCity,
			function(data){
			$("#cur_temp").text(data.temp)
			$("#max_temp").text(data.tempMx)
 			});
	$("body").removeClass("body1");
	$("body").addClass("body2");
	audio1.play();
	curCity=parseInt($page);
	$(".cityImage").attr("src","images/city"+curCity+".gif");
	$(".weatherImg").attr("src","images/weather"+curCity+".png");
	$("#indexPage").fadeOut(300, function(){
		$("#cityPage").fadeIn(300);
	})
}
jQuery(document).on('click', ".map a", function() {
	 goPage($(this).attr("data-id"))
 });
jQuery(document).on('click', "#img-btn", function(e) {
	if (e && e.stopPropagation) {//非IE浏览器 
　　e.stopPropagation(); 
} 
else {//IE浏览器 
window.event.cancelBubble = true; 
}
audio1.play();
	$("#showBtn").fadeOut(300, function(){
		btnsShow=true;
		$("#footer-btns").fadeIn(300);
	})
 });
jQuery(document).on('click', "body", function() {
	if(btnsShow){
			$("#footer-btns").fadeOut(300, function(){
		btnsShow=false;
		$("#showBtn").fadeIn(300);
	})
	}
 });
jQuery(document).on('swipeleft', "#footer-btns", function(e) {
		if (e && e.stopPropagation) {//非IE浏览器 
　　e.stopPropagation(); 
} 
else {//IE浏览器 
window.event.cancelBubble = true; 
}
	if(left==160){
		return false;
	}
	else{
		left+=80;
	$("#footer-btns").css({ position: "relative" }); //让这个元素绝对定位 
	$("#footer-btns").animate({ left: "-=80px" }, 1000); 
	}



 });
$("#footer-btns").on("swiperight", function(e){
		if (e && e.stopPropagation) {//非IE浏览器 
　　e.stopPropagation(); 
} 
else {//IE浏览器 
window.event.cancelBubble = true; 
}
	if(left==0){
		return false;
	}
	else{
		left-=80;
	$("#footer-btns").css({ position: "relative" }); //让这个元素绝对定位 
	$("#footer-btns").animate({ left: "+=80px" }, 1000); 
}
 });
jQuery(document).on('swipeleft', "#cityPage", function() {
		if(curCity==4){
				return ;
		}else{
			curCity=curCity+1;
					 $.getJSON("http://liuxin.lxliu.cn/tcpPush/getWeather?city="+curCity,
			function(data){
			$("#cur_temp").text(data.temp)
			$("#max_temp").text(data.tempMx)
 			});

			$(".city-title-img").attr("src","images/Doll "+doll[curCity]+".png");
			audio2.play();
			$(this).animate({
				left:-150,
				opacity:0
			},200,"linear",function(){
				$(".cityImage").attr("src","images/city"+curCity+".gif");
				$(".weatherImg").attr("src","images/weather"+curCity+".png");
			}).animate({left:150},0).animate({
				left:0,
				opacity:1
			},200,"linear");
		}

 });
jQuery(document).on('swiperight', "#cityPage", function() {
		if(curCity==1){
				return ;
		}else{
			curCity=curCity-1;
					 $.getJSON("http://liuxin.lxliu.cn/tcpPush/getWeather?city="+curCity,
			function(data){
			$("#cur_temp").text(data.temp)
			$("#max_temp").text(data.tempMx)
 			});
			audio2.play();

	$(".city-title-img").attr("src","images/Doll "+doll[curCity]+".png");



			$(this).animate({
				left:150,
				opacity:0
			},200,"linear",function(){
				$(".cityImage").attr("src","images/city"+curCity+".gif");
				$(".weatherImg").attr("src","images/weather"+curCity+".png");
			}).animate({left:-150},20).animate({
				left:0,
				opacity:1
			},200,"linear");
		}

 });
	jQuery(document).on('swiperight', ".data-cityName", function() {
		

				if(curCity==1){
				return ;
		}else{
	$("#cityPage").trigger("swiperight");
		$(".data-cityName").text(city[curCity])
			$(this).animate({
				left:150,
				opacity:0
			},200,"linear",function(){
				$(".cityImage").attr("src","images/city"+curCity+".gif");
				$(".weatherImg").attr("src","images/weather"+curCity+".png");
			}).animate({left:-150},20).animate({
				left:0,
				opacity:1
			},200,"linear");
		}
	 });
jQuery(document).on('swipeleft', ".data-cityName", function() {

	if(curCity==4){
				return ;
		}else{
			$("#cityPage").trigger("swipeleft");
		$(".data-cityName").text(city[curCity])
			$(this).animate({
				left:-150,
				opacity:0
			},200,"linear",function(){
				$(".cityImage").attr("src","images/city"+curCity+".gif");
				$(".weatherImg").attr("src","images/weather"+curCity+".png");
			}).animate({left:150},0).animate({
				left:0,
				opacity:1
			},200,"linear");
		}
	 });




/*选娃娃了*/
jQuery(document).on('click', "#footer-btns img", function(e) {
			if (e && e.stopPropagation) {//非IE浏览器 
　　e.stopPropagation(); 
} 
else {//IE浏览器 
window.event.cancelBubble = true; 
}

	var id=parseInt($(this).attr("data-id"));
	doll[curCity]=id;
	
	audio1.play();
	$(".city-title-img").attr("src","images/Doll "+id+".png");
 });


jQuery(document).on('click', ".city-title-img", function() {
	$(".data-cityName").text(city[curCity])
	  $(".showDollDate").slideDown(1000);
 });
	})

jQuery(document).on('click', ".date-list", function() {
	 $(".showDollDate").slideUp(1000);



	  });