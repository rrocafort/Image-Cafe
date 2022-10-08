$('#fetch').on('click',function(){
    var userInput = $('#userInput').val();
    console.log(userInput);
    $.ajax({
        url: `https://api.giphy.com/v1/gifs/search?api_key=Lub7MmeHO52T5aVFbQ3OPrjQjjUua3Rl&q=${userInput}&limit=30&offset=0&rating=g&lang=en`,
        dataType: 'JSON',
        type: 'GET',
        data: {userInput:userInput},
        cache: false,
        success: function(data){
           $.each(data.data,function(index,value){
            //console.log(data);
            //let gifTitle = data.data[index].title
            //console.log(gifTitle)
          

            console.log(value);
            console.log(value.title)
            console.log(value.url)

           })

        }, error:function() {
            console.log("We could not find it")
        }
    })
    

})
