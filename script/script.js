translate1=$('.comp1').width();
translate2=$('.comp1').width();
$('.next').click(function() {
	if(translate1==3*translate2){
		translate1=0
	}
	$('.comp').css({
		transform: 'translateX(-'+translate1+'px)',
		transition:'1s all ease'
	});
	translate1+=translate2
});

$('.prev').click(function() {
	translate1-=2*translate2
	if(translate1==-translate2){
		translate1=2*translate2
	}
	$('.comp').css({
		transform: 'translateX(-'+translate1 +'px)',
		transition:'300ms all ease'
	});
	translate1+=translate2
});

translate3=$('.slide1').width();
translate4=$('.slide1').width();



$('.next1').click(function() {
	if(translate3==3*translate4){
		translate3=0
	}
	$('.slide').css({
		transform: 'translateX(-'+translate3+'px)',
		transition:'1s all ease'
	});
	translate3+=translate4
});

$('.prev1').click(function() {
	translate3-=2*translate4
	if(translate3==-translate4){
		translate3=2*translate4
	}
	$('.slide').css({
		transform: 'translateX(-'+translate3 +'px)',
		transition:'300ms all ease'
	});
	translate3+=translate4
});


















 i=0
var text=[' Amazing Template','Awesome Features', 'Creative Design'];
var func=function(){
	$('.content span').html(text[i]).fadeToggle(2000)
	i++;
   if(i==3){
   	i=0;
   }
}
setInterval(func,2000)
 


$(window).scroll(function() {
	// console.log($(window).scrollTop())
	for (var i = 0; i < $('section').length;i++) {
		var ofset =$('section').eq(i).offset().top
		var height=$('section').eq(i).height()
		if($(window).scrollTop()>ofset && $(window).scrollTop()<(ofset+height)){
			$('.navspec li').removeClass('active')
			$('.navspec li').eq(i).addClass('active')
		}
		if($(window).scrollTop()>440){
	$('.tr').css({
		transform: 'translateY(0)',
		opacity: 1
	});

}
if($(window).scrollTop()>2470){
	$('.photo').css({
		transform: 'translateY(0)',
		opacity: 1
	});

}
if($(window).scrollTop()>10092){
	
var widFooter=$('.penig').width()
$('.penig').css({
	transform:'scale(2.2)',
	transition: '500ms all ease'
});
}
	}
if($(window).scrollTop()>6182 && $(window).scrollTop()<6200) {
		count=0
var set4=setInterval(
	function(){
	$('.prog').eq(0).css({
	width: count+'%'
	});
	count++
	if(count > 100){
		clearInterval(set4)
	}
	},1)
count2=0
var set5=setInterval(
	function(){
	$('.prog').eq(1).css({
	width: count2+'%'
	});
	count2++
	if(count2 > 70){
		clearInterval(set5)
	}
	},1)
count3=0
var set6=setInterval(
	function(){
	$('.prog').eq(2).css({
	width: count3+'%'
	});
	count3++
	if(count3 > 90){
		clearInterval(set6)
	}
	},1)

	}
})




$('.navspec li ').click(function() {
	$('.navspec li ').removeClass('active')
	$(this).addClass('active')
	var off=$(this).attr('href')
	var top=$(off).offset().top;
	$('html,body').animate({
		scrollTop:top+1
	}, 1000)
});
k=0;
k1=0;
k2=0
var set=setInterval(function(){
$('.timer:eq(0)').html(k)
k++
if(k>1200 ){
	clearInterval(set)
}
},0.5)


var set1=setInterval(function(){
$('.timer:eq(1)').html(k1)
k1++
if(k1>578 ){
	clearInterval(set1)
}
},8)


var set2=setInterval(function(){
$('.timer:eq(2)').html(k2)
k2+=12
if(k2==12480){
	k2+=9
}
if(k2>12489){
	clearInterval(set2)
}
},0)

$('.penig,.enig').click(function() {
	$('body,html').animate({
		scrollTop:0
	}, 2000)
});

$( window ).load(function() {
$('.loader').css({
	display:'none'
})
clearInterval(set3)
$('section').fadeIn(500)
});


r=0;
var set3=setInterval(function(){
function fun(){
	$('.loader').css({
	'transform':'rotate('+r+'deg)'
})
	r+=2
}
fun()
},0.5)


	$('.workimg img').eq(0).hover(function(){
	$(this).css({
		transform: 'scale(1.1)'
	})
	$('.view').eq(0).css({
		display: 'block'
	});
},function(){
	$(this).css({
		transform: 'scale(1)'
	})
	$('.view').eq(0).css({
		display: 'none'
	});
})
	$('.workimg img').eq(1).hover(function(){
	$(this).css({
		transform: 'scale(1.1)'
	})
	$('.view').eq(1).css({
		display: 'block'
	});
},function(){
	$(this).css({
		transform: 'scale(1)'
	})
	$('.view').eq(1).css({
		display: 'none'
	});
})
	$('.workimg img').eq(2).hover(function(){
	$(this).css({
		transform: 'scale(1.1)'
	})
	$('.view').eq(2).css({
		display: 'block'
	});
},function(){
	$(this).css({
		transform: 'scale(1)'
	})
	$('.view').eq(2).css({
		display: 'none'
	});
})
	$('.workimg img').eq(3).hover(function(){
	$(this).css({
		transform: 'scale(1.1)'
	})
	$('.view').eq(3).css({
		display: 'block'
	});
},function(){
	$(this).css({
		transform: 'scale(1)'
	})
	$('.view').eq(3).css({
		display: 'none'
	});
})
	$('.workimg img').eq(4).hover(function(){
	$(this).css({
		transform: 'scale(1.1)'
	})
	$('.view').eq(4).css({
		display: 'block'
	});
},function(){
	$(this).css({
		transform: 'scale(1)'
	})
	$('.view').eq(4).css({
		display: 'none'
	});
})
$('.workimg img').eq(5).hover(function(){
	$(this).css({
		transform: 'scale(1.1)'
	})
	$('.view').eq(5).css({
		display: 'block'
	});
},function(){
	$(this).css({
		transform: 'scale(1)'
	})
	$('.view').eq(5).css({
		display: 'none'
	});
})






var comphotowid=$('.comphoto').width()
var set7=setInterval(function(){
	if(comphotowid==4047){
	comphotowid=0
}
if(comphotowid==1349){
	$('.slidedisk').removeClass('active1')
	$('.slidedisk').eq(1).addClass('active1')
}
if(comphotowid==2698){
	$('.slidedisk').removeClass('active1')
	$('.slidedisk').eq(2).addClass('active1')
}
if(comphotowid==0){
	$('.slidedisk').removeClass('active1')
	$('.slidedisk').eq(0).addClass('active1')
}
$('.rotate').css({
	transform: 'translate(-'+comphotowid+'px)',
	transition:'1s all ease'
});
comphotowid+=1349
console.log(comphotowid)
},2000)





t=0
$('.slidedisk').click(function() {
	clearInterval(set7)
	$('.slidedisk').removeClass('active1')
	$(this).addClass('active1')
});

$('.slidedisk').eq(0).click(function(event) {
	$('.rotate').css({
	transform: 'translate(0)',
	transition:'1s all ease'
});
});
$('.slidedisk').eq(1).click(function(event) {
	$('.rotate').css({
	transform: 'translate(-1349px)',
	transition:'1s all ease'
});
});
$('.slidedisk').eq(2).click(function(event) {
	$('.rotate').css({
	transform: 'translate(-2698px)',
	transition:'1s all ease'
});
});
