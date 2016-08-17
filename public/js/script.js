$(document).ready(function(){

//This Saves Searches
function saveSearch(keyword){
      var search = {data: keyword}
      $.ajax({
      "url": "/searches",
      "method":"POST",
      "data": search,
      "success": function(data){
        // save search to db
        console.log(data);
      },
      error: function(){
        console.log('nope');
      }
    }); // ends ajax call
}
//This GETS/PULLS my SEARCH DATA
function ajaxcall(keyword){
    $.ajax({
      "url":"https://api.whitehouse.gov/v1/petitions.json?limit=3%offset=0&title=" + keyword,
      "method":"GET",
      "success": function(data){
        // save search to db
        saveSearch(keyword)
        console.log(data);
      },
      error: function(){
        console.log('nope');
      }
    }); // ends ajax call
  }

// This takes the text entered into search field box and passes to AJAX
    $('body').on("click", "#submit", function(e){
        e.preventDefault();
        var searchstuff = $('#search-keyword').val();
        console.log(searchstuff);
        ajaxcall(searchstuff)
    });



// $('.deleteuser').on('click',function(e){
//     e.preventDefault()
//     id = $(this).attr('data-id')
//     div = $(this).parent()
//     $.ajax({
//       "url":"users/new",
//       "method":"DELETE",
//       "success":function(){
//         $(div).remove()
//       }
//     })
//   })

//   $('#edituser').on('submit',function(e){
//     console.log('edit user worked')
//     e.preventDefault()

//     id = $(this).attr('data-id')
//     name = $(this).children('#name').val()
//     email = $(this).children('#email').val()
//     password = $(this).children('#password').val()

//     user = {id:id,name:name,email:email,password:password}
//     $.ajax({
//       "url":"/users/new",
//       "method":"PUT",
//       "data":user,
//       "success": function(data){
//         console.log('successfully put')
//       }
//     })
//   });


//   $('#createuser').on('submit',function(e){
//     e.preventDefault()

//     name = $(this).children('#name').val()
//     email = $(this).children('#email').val()
//     password = $(this).children('#password').val()

//     user = {name:name,email:email,password:password}

//     $.ajax({
//       "url": "users/create",
//       "method": "POST",
//       "data": user,
//       "success": function(data){
//         console.log('worked')
//         window.location.replace("users/create")
//       }
//     })
//   });

//     $.ajax({
//       "url": "sessions/create",
//       "method": "POST",
//       "data": user,
//       "success": function(data){
//         console.log('worked')
//         window.location.replace("users/create")
//       }
//     })
//   });

// var wh = require('whitehouse'),
//     whApi = wh.createWhiteHouse()

// whApi.getPetitions(function(output) {
//   var obj = JSON.parse(output)
//   console.log(obj)
// })

  });
