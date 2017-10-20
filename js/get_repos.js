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

                tbl_buffer +=

                "<div class=\"container\" >" +

                    "<div class='col-lg-6 col-md-6 col-sm-6' style=\"min-height:330px; font-size:75%; vertical-align: top;\">" +

                    "<h4>" + s[1] + "</h4>" +

                    "<img style='width:100%; height:auto;'src='./img/portfolio/"+data[i]["thumb"]+"'></img>" +

                    "</div>" +

                    "<div class='col-lg-6 col-md-6 col-sm-6'>" +
                    "<p style=\"min-height:2px;\">" + (data[i]["description"]==null ? '<br />' : '<blockquote>' + data[i]["description"] + '</blockquote>') + "</p>" +


                    "<h6>Created:</h6><p>" + makeFormattedDate(created_at) + "</p>" +
                    "<h6>Last Updated:</h6><p>" + makeFormattedDate(updated_at) + "</p>" +

                    "<a style='width:100%;' class='btn btn-primary' href='"+ data[i]["html_url"] +"'>Source:</a>" +
                    "<br />" +
                    "<br />" +
                    "<a style='width:100%;' class='btn btn-primary' href='"+"https://" + s[0] + ".github.io/" + s[1]+"'>Preview</a>" +



                "</div>" +
                "</div><div style='border-top:2px solid #ccc; margin-top:80px;' class='container'></div>";
            }



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
