/**
 * Created by qiubeixin on 2017/3/9.
 */
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