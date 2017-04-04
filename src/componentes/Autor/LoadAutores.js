import $ from 'jquery';

export default class LoadAutores {
    
    load () {
        var result;
        $.ajax({
            url:"http://localhost:8080/api/autores",
            dataType: 'json',
            async: false,
            success:function(response){    
                result = response;
            }
        });
        return result;
    }
}