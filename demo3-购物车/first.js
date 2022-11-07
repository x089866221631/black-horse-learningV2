    var price = new Array(2576.00, 2999.00, 2898.00, 699.00, 599.00, 699.00);
    var result = "";
    var prooduct = new Array("iphone 6 32GB 金色 移动联通电信4G",
        "iphone 6 32GB 红色 移动联通电信4G",
        "iphone 8 32GB 粉色 移动联通电信4G",
        "iphone X 32GB 蓝色 移动联通电信4G",
        "iphone 12 32GB 灰色 移动联通电信4G",
        "iphone 11 32GB 黑色 移动联通电信4G",);
    var isSelected = new Array(0, 0, 0, 0, 0, 0);
    function clearAll() {
        isSelected = [0, 0, 0, 0, 0, 0];
        myForm.sp0.checked = false;
        myForm.sp1.checked = false;
        myForm.sp2.checked = false;
        myForm.sp3.checked = false;
        myForm.sp4.checked = false;
        myForm.sp5.checked = false;
    }
    function checkSelect(number){
        var temp;
        switch (number) {
            case 0:
                temp = myForm.sp0.checked;
                break;
            case 1:
                temp = myForm.sp1.checked;
                break;
            case 2:
                temp = myForm.sp2.checked;
                break;
            case 3:
                temp = myForm.sp3.checked;
                break;
            case 4:
                temp = myForm.sp4.checked;
                break;

            default:
                temp = myForm.sp5.checked;

                break;
    }
    isSelected[number] = (temp) ? 1 : 0;
    }
    function shoppingCart(){
    var selectList = "";
    for (var j = 0; j < prooduct.length; j++){
        if (isSelected[j]) {
            selectList += (j + 1) + "-" + prooduct[j] + ",价值=" + price[j] + "\n";

        }

    }
        var info = (selectList == "") ? "您的购物车为空，请选购！" : selectList;
        alert(info)
    }
    function checkOut(){
        var total=0;
    var count = 0;
    for (var i = 0; i < isSelected.length; i++){
        count += isSelected[i];
    }
    for (var i = 0; i < price.length; i++){
        total = total + price[i] * isSelected[i];
    }
    alert("您选购的" + count + "件商品，总价为：" + total + "\n" + "请去支付");
    }