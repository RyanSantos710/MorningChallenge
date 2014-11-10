$(function(){      
      
    var countryinfo = [
        {"countrycode":"BY", "countryname":"Belarus", "population":"9,685,000", "english":false},
        {"countrycode":"BZ", "countryname":"Belize", "population":"314,522", "english":true},
        {"countrycode":"CA", "countryname":"Canada", "population":"33,670,000", "english":true},
        {"countrycode":"CC", "countryname":"Cocos [Keeling] Islands", "population":"628", "english":true},
        {"countrycode":"CD", "countryname":"Democratic Republic of the Congo", "population":"70,916,439", "english":false},
        {"countrycode":"CF", "countryname":"Central African Republic", "population":"4,844,927", "english":false},
        {"countrycode":"CG", "countryname":"Republic of the Congo", "population":"3,039,126", "english":false},
        {"countrycode":"CH", "countryname":"Switzerland", "population":"7,581,000", "english":false},
    ]; //end of JSON           
        
    var source   = $("#country-template").html();
    var template = Handlebars.compile(source);
    var html    = template({countries: countryinfo});        
    
    
}); //end of function()