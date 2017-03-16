$(document).on('ready', function(){
  selectSport();
  followSport();
})



function selectSport(){
  $('.sports').on('click', function(e){
    e.preventDefault()
    // var par = $(this).parent().parent().children()
    // console.log(par[0])
    var value = $(this).html()
    console.log(this)
    var test = $('#sport-sel').html(value)
  })
}

function followSport(){

  $('.follow-sports').on('submit', function(e){
    e.preventDefault()
    var route = $(this).attr('action')
    var data = $('#sport-sel').find(">:first-child").html()

    $.ajax({
      url: route,
      data: {'sport':data},
      type: 'PUT',
      beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
      success: function(res){
        displayResponse(res)
      },
      error: function(error){
        console.log('error')
      }
    })

  })
}


function displayResponse(response){
  if(response['false'] !== undefined){
    alert(response['false'])
  } else {
    $('.sports-followed').append('<tr class="success"><td>' + response['true'].name + '</td></tr>')
  }
}











