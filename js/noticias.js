$(document).ready(function() {
    // Llamar a la API de noticias de Google
    $.ajax({
      url: "https://newsapi.org/v2/top-headlines?country=us&apiKey=95eb92840bf14ad59fa161f05ad385df",
      method: "GET",
      dataType: "json",
      success: function(data) {
        // Actualizar la sección de noticias con las últimas noticias
        var articles = data.articles;
        var newsHTML = "";
        for (var i = 0; i < articles.length; i++) {
          newsHTML += "<div>";
          newsHTML += "<h3>" + articles[i].title + "</h3>";
          newsHTML += "<p>" + articles[i].description + "</p>";
          newsHTML += "<a href='" + articles[i].url + "' target='_blank'>Leer más</a>";
          newsHTML += "</div>";
        }
        $("#news").html(newsHTML);
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log(textStatus, errorThrown);
      }
    });
  });

  