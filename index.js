var button = $(".btn");
var input = $("#input");


button.click(function(){
    input.select();
    document.execCommand("copy");

    alert("copyed");
});