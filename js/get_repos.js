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
        //url:"https://api.github.com/users/rob-robinson/repos?sort=full_name",
        url:"../data/repos.json",
        type:"GET",
        dataType: 'text'
    })
        .done(function(data){

            data = JSON.parse(data);

            var tbl_buffer = "";

            for(var i=0; i<data.length; i+=1){

                var s = data[i]["full_name"].split('/');

                var created_at = new Date(data[i]["created_at"]);
                var updated_at = new Date(data[i]["updated_at"]);


                tbl_buffer += "<div class=\"portfolio-item panel panel-default\" >" +
                    "<div class=\"panel-heading\"><strong>" + s[1] + "</strong></div>" +
                        '<div class="panel-body">' +
                    "<p>" + (data[i]["description"]==null ? '' : '<blockquote>' + data[i]["description"] + '</blockquote>') + "</p>" +
                    "<b>Created:</b>" + makeFormattedDate(created_at) + ", " +
                    "<b>Last Updated:</b>" + makeFormattedDate(updated_at) + "<br/><br/>" +
                    "<b>Source:</b><p> <a href='"+ data[i]["html_url"] +"'>" + data[i]["html_url"] + "</a></p>" +
                    "<b>Preview:</b><p> <a href='"+"https://" + s[0] + ".github.io/" + s[1]+"'>https://" + s[0] + ".github.io/" + s[1]+"</a></p>" +
                    "</div></div>";
            }

            tbl_buffer += "";

            $("#repos").html(tbl_buffer);

        });
});

/*

 <div class="col-sm-4 portfolio-item">
 <a href="#portfolioModal5" class="portfolio-link" data-toggle="modal">
 <div class="caption">
 <div class="caption-content">
 <i class="fa fa-search-plus fa-3x"></i>
 </div>
 </div>
 <img src="img/portfolio/safe.png" class="img-responsive" alt="">
 </a>
 </div>

 */