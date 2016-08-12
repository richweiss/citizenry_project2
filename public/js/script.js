function ajaxcall(keyword){
    $.ajax({
      "url":"https://api.whitehouse.gov/v1/petitions.json?limit=3%offset=0&title=" + searchterm,
      "method":"GET",
      "success": function(data){
        console.log(data)
      }
    })
  }

    $('body').on("click", "#submit", function(e){
        e.preventDefault();
        var searchstuff = $('#search-keyword').val()
        ajaxcall(searchstuff)

    });


// $(function(){
//   console.log('alive.')
//   $('.deleteuser').on('click',function(e){
//     e.preventDefault()
//     id = $(this).attr('data-id')
//     div = $(this).parent()
//     $.ajax({
//       "url":"http://localhost:3000/users/"+id,
//       "method":"DELETE",
//       "success":function(){
//         $(div).remove()
//       }
//     })
//   })


//   $('#edituser').on('submit',function(e){
//     console.log('omg you submitted brah')
//     e.preventDefault()

//     id = $(this).attr('data-id')
//     name = $(this).children('#name').val()
//     email = $(this).children('#email').val()
//     password = $(this).children('#password').val()

//     user = {id:id,name:name,email:email,password:password}
//     $.ajax({
//       "url":"http://localhost:3000/users/"+id,
//       "method":"PUT",
//       "data":user,
//       "success": function(data){
//         console.log('ajax call was good bro!')
//       }
//     })
//   })


//   $('#createuser').on('submit',function(e){
//     e.preventDefault()

//     name = $(this).children('#name').val()
//     email = $(this).children('#email').val()
//     password = $(this).children('#password').val()

//     user = {name:name,email:email,password:password}
//     // debugger
//     $.ajax({
//       "url": "http://localhost:3000/users",
//       "method": "POST",
//       "data": user,
//       "success": function(data){
//         console.log('ajax call was good.')
//         window.location.replace("http://localhost:3000/users")
//       }
//     })
//   })


// })


// var wh = require('whitehouse'),
//     whApi = wh.createWhiteHouse()

// whApi.getPetitions(function(output) {
//   var obj = JSON.parse(output)
//   console.log(obj)
// })
