

$(document).ready(function()

    {
        

     var table = $('#table_characters').DataTable({
            //serverSide: true,
           // iDisplayLength:10,
            //serverSide: true,
            responsive: true,
            "bSort" : false,
         // paging : true,
          //lengthMenu:[[10,25,50,100,30000000],[10,25,50,100,"All"]],
          //pagingType : "full_numbers",
         
           processing : true,
           "language": 
                {          
                   
                     processing: "<b><img src='img/starwars.jpg' class='img-responsive'></img>&nbsp; Loading...</b>" 
                    //starwars.gif
                },
           // autoWidth : true,
            ajax: {
                url: 'https://swapi.dev/api/people',
                dataSrc: 'results',
                data:function(dateParam)
                {
                   
                    },
               
              
                type:'GET'
            },

            columns: [
                

                { data: 'name'},
                { data: 'height'},
                { data: 'mass'},
                 { data: 'hair_color'},
                 { data: 'skin_color'},
                 { data: 'birth_year'},
                 { data: 'gender'},
                 { mData: function btnFavourite(data, type, dataToSet) {
                    return '<i class="heart fa fa-heart-o" style="color:grey"></i>' ;
                    //<span class="glyphicon glyphicon-heart-empty"></span>
                }},

                 

                { mData: function btnMore(data, type, dataToSet) {
                    return '<button type="button" id="btnviewmore" class="btnmore btn-link btn-block btn-flat">'
                   
                    +'  More Details...</button>' ;
                }}

            ],
            'rowCallback': function(row, col, index)
                       {
                        var rowid=index+1;

                            $.get('api/sw/swid/'+rowid, function(data)
                            {
                              // console.log(rowid)
                              console.log(data.length)
                              if(data.length>0)
                              {
                                 $(row).find('td:eq(7)').empty()
                                $(row).find('td:eq(7)').append('<i class="heart fa fa-heart"></i>'); 
                               // $(row).find('td:eq(7)').toggleClass("fa-heart fa-heart-o");

                              }

                            })
                            /*
                            if(col.status== "APPROVED")
                            {
                                $(row).find('td:eq(6)').addClass("label-success");                         
                            }
                            */
                            
                     }
                       
                    

        });
     $(".content-wrapper").on('click','.btnmore', function (elem)
   {
           var index = $('#table_characters tr').index($(this).closest('tr'));
           elem.preventDefault(); 
                   var url="details?"+index;


                  window.location.assign(url,'_blank');
     

           
       });

      $(".content-wrapper").on('click','.heart.fa', function (elem)
   {
           var index = $('#table_characters tr').index($(this).closest('tr'));
     
     
     $.ajax
        ({
            type:'POST',
            url: '/api/sw/swid/'+index,
            context:this,
            

            success: function(characters)
            {
               //console.log("success")
             $(this).toggleClass("fa-heart fa-heart-o");
             table.draw();
              
            },

            error: function(xhr, status, error)
            {
              //table.draw();
              
              alert(xhr.responseJSON.message)
              location.reload()
              
               // console.log(xhr.responseJSON.message);
            }

            });

           
       });
     


      
       
/*
 $(".heart.fa").click(function() {
  $(this).toggleClass("fa-heart fa-heart-o");
});
 */





   });
