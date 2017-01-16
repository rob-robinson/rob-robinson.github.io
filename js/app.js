$(document).ready(function(){

function makeFormattedDate(date){

    return date.getFullYear() + 
            "/" + 
            (date.getMonth() < 9 ? "0" + (date.getMonth()+1) : date.getMonth()) + 
            "/" + 
            (date.getDate() < 9 ? "0" + (date.getDate()+1) : date.getDate())
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
                "<h2>" + s[1] + "</h2>" +
                "<p>" + data[i]["description"] + "</p>" +
                "<h4>Created:</h4><p> " + makeFormattedDate(created_at) + "</p>" +
                "<h4>Last Updated:</h4><p> " + makeFormattedDate(updated_at) + "</p>" +
                "<h4>Source:</h4><p> <a href='"+ data[i]["html_url"] +"'>" + data[i]["html_url"] + "</a></p>" +
                "<h4>Preview:</h4><p> <a href='"+"https://" + s[0] + ".github.io/" + s[1]+"'>https://" + s[0] + ".github.io/" + s[1]+"</a></p>" +
                "</li>";
        }

        tbl_buffer += "</ul>";

        $("#repos").html(tbl_buffer);

    });
});

