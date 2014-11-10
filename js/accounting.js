$(function(){ 
    Handlebars.registerHelper(popTest, function(population){
        if (population > 5000000){
            return <td class="danger">population</td>
        } else if (population > 100000 && population < 5000000 {
            return <td class="success">population</td>
        }
    });
    
    Handlebars.registerHelper(engTest, function(english){
        if (english == true ) {
            return <span class="glyphicon glyphicon-ok"></span>
        }
    });
});