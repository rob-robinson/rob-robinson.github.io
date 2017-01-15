$(document).ready(function(){

function makeFormattedDate(date){

    return date.getFullYear() + 
            "/" + 
            (date.getMonth() < 10 ? "0" + date.getMonth() : date.getMonth()) + 
            "/" + 
            (date.getDate() < 10 ? "0" + date.getDate() : date.getDate())
            ;

}

    $.ajax({
        url:"https://api.github.com/users/rob-robinson/repos?sort=full_name",
        type:"GET",
        dataType: 'text'
    })
    .done(function(data){

        data = JSON.parse(data);

        var tbl_buffer = "<ul class='list-group'>";

        for(var i=0; i<data.length; i+=1){

            var s = data[i]["full_name"].split('/');

            var created_at = new Date(data[i]["created_at"]);
            var updated_at = new Date(data[i]["updated_at"]);

            tbl_buffer += "<li class=\"list-group-item\">" +
                "<h3>" + data[i]["full_name"] + "</h3>" +
                "<p>" + data[i]["description"] + "</p>" +
                "<p>Created: " + makeFormattedDate(created_at) + "</p>" +
                "<p>Last Updated: " + makeFormattedDate(updated_at) + "</p>" +
                "<p>Source: <a href='"+ data[i]["html_url"] +"'>" + data[i]["html_url"] + "</a></p>" +
                "<p>Preview: <a href='"+"https://" + s[0] + ".github.io/" + s[1]+"'>https://" + s[0] + ".github.io/" + s[1]+"</a></p>" +
                "</li>";
        }

        tbl_buffer += "</ul>";

        $("#repos").html(tbl_buffer);

    });
});

