
$(document).ready(function()
{
	var urlSearch=window.location.search;
    var char_id=urlSearch.slice(urlSearch.lastIndexOf('?') + 1);
/*
    $.get('https://swapi.dev/api/people/'+char_id, function(data)
         {
          console.log(JSON.stringify(data));
         
                   
                  // window.open(url,'_blank');
                  

          });
    */
    $.ajax
        ({
            type:'GET',
            context:this,
            url: 'https://swapi.dev/api/people/'+char_id,
            success: function(attributes)
            {
            	$('#char_title').empty();
       			 $('#char_title').append(attributes.name);

/*
 "name": "C-3PO", 
            "height": "167", 
            "mass": "75", 
            "hair_color": "n/a", 
            "skin_color": "gold", 
            "eye_color": "yellow", 
            "birth_year": "112BBY", 
            "gender": "n/a", 
*/
       			 
       			 var html="";
                  
                    
                    html+='<div class="panel panel-default col-md-12" >'; //style="border-color:blue"
                    html+='<div class="row">';
                    html+='<div class="col-md-12"> <b>Name:</b> <span  id="name">'+attributes.name+'</div>';
                    html+='</div>';
                     html+='<div class="row">';
                    html+='<div class="col-md-12"> <b>Height:</b> <span  id="height">'+attributes.height+'</div>';
                    html+='</div>';
                     html+='<div class="row">';
                    html+='<div class="col-md-12"> <b>Mass:</b> <span  id="mass">'+attributes.mass+'</div>';
                    html+='</div>';
                     html+='<div class="row">';
                    html+='<div class="col-md-12"> <b>Hair Color:</b> <span  id="hair_color">'+attributes.hair_color+'</div>';
                    html+='</div>';
                     html+='<div class="row">';
                    html+='<div class="col-md-12"> <b>Skin Color:</b> <span  id="skin_color">'+attributes.skin_color+'</div>';
                    html+='</div>';
                     html+='<div class="row">';
                    html+='<div class="col-md-12"> <b>Eye Color:</b> <span  id="eye_color">'+attributes.eye_color+'</div>';
                    html+='</div>';

                    html+='<div class="row">';
                    html+='<div class="col-md-12"> <b>Birth Year:</b> <span  id="birth_year">'+attributes.birth_year+'</div>';
                    html+='</div>';

                    html+='<div class="row">';
                    html+='<div class="col-md-12"> <b>Gender:</b> <span  id="gender">'+attributes.gender+'</div>';
                    html+='</div>';

                  



                   

                    html+='</div>';
                   
    
                    $('#list_attributes').append(html);
            	

            }
        });

})