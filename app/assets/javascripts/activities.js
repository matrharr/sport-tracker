$(document).on('ready', function(){
  selectSportz()
  submitActivity()
})


function selectSportz(){
  $('.sportz').on('click', function(e){
    e.preventDefault()
    var value = $(this).html()
    var test = $('#sport-cel').html(value)
  })
}

function submitActivity(){
  $('.record-activity').on('submit', function(e){
    e.preventDefault()
    var route = $(this).attr('action')
    var sport = $('#sport-cel').find(">:first-child").html()
    var date = $(':nth-child(3)', this).val() 
    var duration = $(':nth-child(4)', this).val()
    var data = {'sport': sport, 'date': date, 'duration': duration}
    $.ajax({
      url: route,
      type: 'POST',
      data: data,
      beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
      success: function(res){
        displayActivity()
      },
      error: function(e){
        console.log(e)
      }
    })
  })
}

function displayActivity(){
  alert('Congrats on the great workout! Keep it up!')
}