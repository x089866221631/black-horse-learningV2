function $(id) {
    return document.getElementById(id);
}

function changeImage() {
    var index = $("game").selectedIndex; //获取下拉框中的选项
    $("show").src = $("game").options[index].value; //更换图片
}