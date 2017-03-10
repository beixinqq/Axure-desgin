
//显示与隐藏
function querySelectorAll(name){
    return document.querySelectorAll(name);
}
var contentIcon=querySelectorAll('.content-padded-bgwhite .icon-down');
var contentSelect=querySelectorAll('.content-padded1');
var titleName=querySelectorAll('.content-padded-bgwhite .title-name');

function content(n) {
    for(var i=0;i<titleName.length;i++){
        contentIcon[i].className='icon icon-down';
        contentSelect[i].style.display='none';
    }
    contentSelect[n].style.display='block';
    contentIcon[n].className='icon icon-up'
    
}
for (var i = 0; i < titleName.length; i++) {
    titleName[i].onclick = (function (i) {
        return function () {
            content(i);
        }
    })(i);
}

//获取验证码 倒计时30秒
var wait=30;
function time(o){
    if(wait==0){
        o.innerHTML='获取验证码';
        wait=30;
    }else{
        o.innerHTML=wait+'后再次发送';
        wait--;
        setTimeout(function () {
            time(o);
        },1000)
    }
}
document.querySelector('#wait').onclick=function(){time(this);}