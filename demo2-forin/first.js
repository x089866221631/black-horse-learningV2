var i = 1;
var stu = new Array("人1", "人2", "人3", "人4", "人5", "人6");
var j = 1;
for (var student in stu) {
    document.write(j + "." + stu[student] + "      ");
    if (j % 2 == 0) {
        document.write("</br>");
    }
    j++;
}