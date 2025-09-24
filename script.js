function jing(){
  var op = document.getElementById("op");
  var build ="";
  var wei = document.getElementById("wei").value;



     $.ajaxSetup({async: false});
    var roy = $.getJSON(`https://api.themoviedb.org/3/search/movie?api_key=88892ad80656f3a2257a48524e58c860&query=${wei}`).responseJSON;

    
  for(var i = 0; i<roy.results.length; i++){
    var name = roy.results[i].original_title;
    var dis = roy.results[i].overview;
    var date = roy.results[i].release_date;
    var pic = roy.results[i].poster_path;

    build += `<div class="cards">`;
    build += `<h2> ${name} </h2>`;
    build += `<h3> Released on : ${date} </h3> <hr>`;
    build += `<img src="https://image.tmdb.org/t/p/w185${pic}"><br>`;
    build += `<h3> ${dis} </h3>`;
    build += `</div>`;

  }





op.innerHTML = build;
}
