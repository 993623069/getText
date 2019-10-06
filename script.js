

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
                      $("body").append("<div class='winBox' style='width:500px; height: 300px;background: #ffffff;top: 100px;right:10px;z-index: 1000;position: fixed;display: none;border: 1px solid #e9e3e3;padding:10px;overflow: auto;'><div class='g-close' style='position: absolute;right: 0;padding: 2px 5px;margin: -10px 0 0 0;font-size: 16px;font-weight: bold;cursor: pointer;background-color: #e8ebee;'>x</div><div class='textArea'></div><div style='margin-top:20px;'>有问题请联系:Iwen &nbsp;&nbsp;<button class='g-copy' style='background: #a2e3b3;border: 0;padding: 2px 9px;cursor: pointer;'>复制</button></div></div>")
               $('body').append("<div class='g-showCopy' style='position: absolute;z-index: 1000;padding: 14px 7px; right: 0; border-radius: 22px; top: 50%;font-size: 14px;font-weight: 500;cursor: pointer;background-color: #ffffff; border: 1px solid #c4c3c3;'>show</div>")
                  $(".g-close").bind('click',function(){
                      $('.winBox').css({'display':'none'})
                    })
                     $(".g-copy").bind('click',function(){
                          var text = document.getElementsByClassName('textArea')[0];
        if (document.body.createTextRange) {
            var range = document.body.createTextRange();
            range.moveToElementText(text);
            range.select();
        } else if (window.getSelection) {
            var selection = window.getSelection();
            var range = document.createRange();
            range.selectNodeContents(text);
            selection.removeAllRanges();
            selection.addRange(range);
        } else {
            alert("none");
        }
        document.execCommand('Copy','false',null);
                    })
                     $(".g-showCopy").bind('click',function(){
                      $('.winBox').css({'display':'block'})
                    })
                 }
                 
              }
            
                $(".mejs-subtitles-content").bind("DOMNodeInserted",function(e){
                   // console.log(e.target.textContent)
                    if(text!=e.target.textContent){
                        text=e.target.textContent;
                        var textList=text.split("] ");
                       $(".textArea").append("<p style='margin:3px;font-size:14px;font-family: sans-serif;'><strong>"+textList[0]+"]</strong>"+textList[1]+"</p>")
                    }
                })
          }
   })

          

         
 

}


  
