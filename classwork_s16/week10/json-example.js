$.getJSON("students.json", function( data ) {
    console.log(data);
    for (var i = 0; i < data.students.length; i++) {
        var stu = data.students[i];
        var div = document.createElement("div");
        var name = document.createElement("p");
        var link = document.createElement("p");
        var a = document.createElement("a");
        name.innerHTML = stu.name;
        a.href = stu.url;
        a.innerHTML = stu.title;
        link.appendChild(a);
        div.appendChild(name);
        div.appendChild(link);
        document.body.appendChild(div);
        
    }
});