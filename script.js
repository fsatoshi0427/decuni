/* 晩御飯おいしかった。ということで、コードがこちら。*/

window.onload=function(){
    document.write(decode());
};

function decode(){
    const unicode=location.hash.replace(/^#/,"");
    return unicode.replace(/\\u.{4}/ig,function(match){return String.fromCharCode(match.replace('\\u', '0x'))});
}