$(document).ready(function(){

    $.ajax({
        url:"https://api.github.com/users/rob-robinson/repos?sort=updated",
        type:"GET",
        dataType: 'text'
    })
    .done(function(data){

        data = JSON.parse(data);

        var tbl_buffer = "<ul class='list-group'>";



        for(var i=0; i<data.length; i+=1){

            var s = data[i]["full_name"].split('/');


            tbl_buffer += "<li class=\"list-group-item\">" +
                "<h3>" + data[i]["full_name"] + "</h3>" +
                "<p>" + data[i]["description"] + "</p>" +
                "<p>Created: " + data[i]["created_at"] + "</p>" +
                "<p>Last Updated: " + data[i]["updated_at"] + "</p>" +
                "<p>Source: <a href='"+ data[i]["html_url"] +"'>" + data[i]["html_url"] + "</a></p>" +
                "<p>Preview: <a href='"+"https://" + s[0] + ".github.io/" + s[1]+"'>https://" + s[0] + ".github.io/" + s[1]+"</a></p>" +
                "</li>"
            ;
        }

        tbl_buffer += "</ul>";

        $("#repos").html(tbl_buffer);



    });

});

