async function getLikedPosts(message_id){
  const response = await axios.post(`http://localhost:5000${message_id}`);
  return response.data;
}

$('.messages-like').on('click', '.fa', async function(event){
  event.preventDefault();
  let path = $(event.target).closest('form').attr('action');
  let resp = await getLikedPosts(path);

  if (resp['message']){
    $("#alerts-messages").prepend('<div class="alert alert-success" role="alert">No more likez</div>');

    setTimeout(function(){
      $(".alert").remove();
    }, 2000)
  }

  $(event.target).toggleClass("fa-thumbs-up fa-star");
  $(event.target).closest('button').toggleClass("btn-secondary btn-primary");
})
