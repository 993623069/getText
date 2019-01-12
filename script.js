

/**
  2019-01-11 22:23
  dongchaoliang kaifa 录制视频text插件
*/
if(location.href.includes("https://ec.ef.com.cn/school/studyunit#school")){
    var text="";
   $("body").bind("DOMNodeInserted",function(e){
   
       if($(".mejs-subtitles-content")){
            if(!$(".mejs-subtitle-button").hasClass("mejs-subtitles-enabled")){
                 $(".mejs-subtitle-button").click();
                 if(!$(".winBox").hasClass("winBox")){
                      $("body").append("<div class='winBox' style=' width:500px; height: 300px;background: rgba(0,0,0,0);top: 100px;right:10px;z-index: 1000;position: fixed;display: block;border: 1px solid #e9e3e3;padding:10px;overflow: auto;'><div class='textArea'></div><div style='margin-top:20px;'>有问题请联系:Iwen</div></div>")
                 }
                 
              }
                $(".mejs-subtitles-content").bind("DOMNodeInserted",function(e){
                    console.log(e.target.textContent)
                    if(text!=e.target.textContent){
                        text=e.target.textContent;
                        var textList=text.split("] ");
                       $(".textArea").append("<p style='margin:3px;font-size:14px;font-family: sans-serif;'><strong>"+textList[0]+"]</strong>"+textList[1]+"</p>")
                    }
                })
          }
   })

          

         
 

}


  
