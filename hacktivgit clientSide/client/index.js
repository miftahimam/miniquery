
    function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    }

    function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    }

    function hacktivGit(){
        $.ajax({
            url:'http://localhost:4000/users',
            method:'GET',
        })
        .done(function(response){
            for(git in response){
                $('ul').append(`<li>${git} : ${response[git]}</li>`)
            }
        })
        .fail(function(jqXHR, textStatus){
            console.log('request failed', textStatus);
            
        })
    }
    function createRepo(){
        event.preventDefault()
        const repoName = $(`#repoName`).val()
    
        $.ajax({
            url : `http://localhost:4000/users`,
            method : 'POST',
            data : { repoName }
        })
        .done(function(response){
            console.log(response);
            $('#git-list').prepend(`<li>${response.repoName}</li>`)
        })
        .fail(function(jqXHR, textStatus){
            console.log('request failed', textStatus);
            
        })
    }
    
    $(document).ready(function(){
        hacktivGit()
        $(`git-form`).submit(function(){
            createRepo()
        })
    })