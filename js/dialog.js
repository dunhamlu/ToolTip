function Dialog(opt){
   var defaults={
   	   title:"消息",
   	   msg:"",
   	   btn:["确定，取消"],
   	   callback1:null,
   	   callback2:null
   }

   var s=$.extend({},defaults,opt);

   // 扩展默认值
   var html='<div class="mask"></div>'
            +'<div class="alert_box">'
                +'<div class="alert_msg">'+s.msg+'</div>'
                +'<div class="alert_btn"></div>'
            +'</div>';
    $(html).appendTo($("body"));

    // 渲染按钮
    if(s.btn.length==0) return;
    var btnHtml="";
    for(var i=0,len=s.btn.length;i<len;i++){
       btnHtml+='<div id="btn'+i+'">'+s.btn[i]+'</div>';
    }
    $(btnHtml).appendTo($(".alert_btn"));

    // 第一个按钮
    $("#btn0").on("click",function(){
    	s.callback1 && s.callback1.call(this);
    	close();
    })

    // 第二个按钮
    $("#btn1").on("click",close);

    function close(){
    	$(".mask").remove();
    	$(".alert_box").remove();
    }
}

$.dialog=function(opt){
   new Dialog(opt);
}