function show() {
    for (var i = 0; i <= 9; i++) {
        for (var j = 1; j <= i; j++) {
            document.write(j + "*" + i + "=" + i * j + "   ");
        }
        document.write("<br>")
    }
}