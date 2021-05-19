$(document).ready(function() {

  // Slider

  /* Esta funcion consiste en localizar donde se encuentra el usuario y en
  funcion a eso poder realizar unas funciones u otras.
  el Window.location para seleccionar el html de cada uno y con el href
  sumarle junto con el indexof el nombre de la pagina donde queremmos que
  el codigo se ejecute. el > -1 no entiendo para que sirve me parece que
  podria funcionar quitandolo...
  Aunque este codigo se solucionaria creando otras carpetas y agregandolas
  en los html que son necesarias, eso seria una buena practica */
  if (window.location.href.indexOf('index') > -1) {
    $('.bxslider').bxSlider({
      mode: 'fade',
      captions: true,
      slideWidth: 1200,
      /* Le añado un auto slicer para hacerlo mas bonito */
      auto: true,
      pause: 4000,
      pager: false,
    });
  }

  // Posts
  if (window.location.href.indexOf('index') > -1) {
    var posts = [{
        title: 'Prueba de titulo 1',
        date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent placerat, turpis a elementum posuere, metus magna sodales velit, ac vehicula quam leo sed sem. Nullam vel dignissim sapien. Phasellus sit amet erat mattis elit porttitor dictum id nec nulla. Mauris sit amet orci vitae nisl hendrerit consequat et eget dui. Curabitur fermentum sollicitudin nunc. Ut faucibus ante rhoncus mauris aliquam, ac tincidunt erat viverra. Vestibulum nunc dolor, mollis et semper in, tristique sit amet orci. Pellentesque in pellentesque erat, ac interdum justo. Nullam at metus molestie, sagittis orci ut, tincidunt tellus. Integer scelerisque facilisis luctus. Proin sed arcu sed est egestas commodo. Pellentesque id urna sit amet purus aliquam porttitor ac eget orci. Morbi vestibulum arcu et nisi euismod laoreet. Duis rhoncus pretium ex id aliquam.'
      },
      {
        title: 'Prueba de titulo 2',
        date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent placerat, turpis a elementum posuere, metus magna sodales velit, ac vehicula quam leo sed sem. Nullam vel dignissim sapien. Phasellus sit amet erat mattis elit porttitor dictum id nec nulla. Mauris sit amet orci vitae nisl hendrerit consequat et eget dui. Curabitur fermentum sollicitudin nunc. Ut faucibus ante rhoncus mauris aliquam, ac tincidunt erat viverra. Vestibulum nunc dolor, mollis et semper in, tristique sit amet orci. Pellentesque in pellentesque erat, ac interdum justo. Nullam at metus molestie, sagittis orci ut, tincidunt tellus. Integer scelerisque facilisis luctus. Proin sed arcu sed est egestas commodo. Pellentesque id urna sit amet purus aliquam porttitor ac eget orci. Morbi vestibulum arcu et nisi euismod laoreet. Duis rhoncus pretium ex id aliquam.'
      },
      {
        title: 'Prueba de titulo 3',
        date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent placerat, turpis a elementum posuere, metus magna sodales velit, ac vehicula quam leo sed sem. Nullam vel dignissim sapien. Phasellus sit amet erat mattis elit porttitor dictum id nec nulla. Mauris sit amet orci vitae nisl hendrerit consequat et eget dui. Curabitur fermentum sollicitudin nunc. Ut faucibus ante rhoncus mauris aliquam, ac tincidunt erat viverra. Vestibulum nunc dolor, mollis et semper in, tristique sit amet orci. Pellentesque in pellentesque erat, ac interdum justo. Nullam at metus molestie, sagittis orci ut, tincidunt tellus. Integer scelerisque facilisis luctus. Proin sed arcu sed est egestas commodo. Pellentesque id urna sit amet purus aliquam porttitor ac eget orci. Morbi vestibulum arcu et nisi euismod laoreet. Duis rhoncus pretium ex id aliquam.'
      },
      {
        title: 'Prueba de titulo 4',
        date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent placerat, turpis a elementum posuere, metus magna sodales velit, ac vehicula quam leo sed sem. Nullam vel dignissim sapien. Phasellus sit amet erat mattis elit porttitor dictum id nec nulla. Mauris sit amet orci vitae nisl hendrerit consequat et eget dui. Curabitur fermentum sollicitudin nunc. Ut faucibus ante rhoncus mauris aliquam, ac tincidunt erat viverra. Vestibulum nunc dolor, mollis et semper in, tristique sit amet orci. Pellentesque in pellentesque erat, ac interdum justo. Nullam at metus molestie, sagittis orci ut, tincidunt tellus. Integer scelerisque facilisis luctus. Proin sed arcu sed est egestas commodo. Pellentesque id urna sit amet purus aliquam porttitor ac eget orci. Morbi vestibulum arcu et nisi euismod laoreet. Duis rhoncus pretium ex id aliquam.'
      },
      {
        title: 'Prueba de titulo 5',
        date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent placerat, turpis a elementum posuere, metus magna sodales velit, ac vehicula quam leo sed sem. Nullam vel dignissim sapien. Phasellus sit amet erat mattis elit porttitor dictum id nec nulla. Mauris sit amet orci vitae nisl hendrerit consequat et eget dui. Curabitur fermentum sollicitudin nunc. Ut faucibus ante rhoncus mauris aliquam, ac tincidunt erat viverra. Vestibulum nunc dolor, mollis et semper in, tristique sit amet orci. Pellentesque in pellentesque erat, ac interdum justo. Nullam at metus molestie, sagittis orci ut, tincidunt tellus. Integer scelerisque facilisis luctus. Proin sed arcu sed est egestas commodo. Pellentesque id urna sit amet purus aliquam porttitor ac eget orci. Morbi vestibulum arcu et nisi euismod laoreet. Duis rhoncus pretium ex id aliquam.'
      }
    ];


    /* Quiero entender esto pero me resulta bastante dificil
    estoy haciendo un for each elemento pero no entiendo por que
    ni para que tampoco entiendo bien la funcion y porque se pone
    cada cosa como esta entonces asi me voy a seguir equivocando
    si no lo consigo entender

    Vale mas o menos entiendo como lo esta creando, coge los elementos
    de arriba y con las comillas cursivas creo que es capaz de crear ese
    texto HTML e insertarlo con la linea de mas abajo,
    le suma a '#posts' lo que he creado */

    posts.forEach((item, index) => {
      var post = `
				<article class="post">
					<br>
					<h2>${item.title}</h2>
					<!-- Puede ser un parrafo 'p' o un 'span' -->
					<span class="date">${item.date}</span>
					<p>
						${item.content}
					</p>
					<a href="#" class="button-more">Leer más</a>
				</article>
				<br>
			`;

      $("#posts").append(post);
    });
  }

  // Selector para los diferentes temas
  var theme = $("#theme");

  $("#to-green").click(function() {
    theme.attr('href', 'css/green.css');
  });

  $("#to-red").click(function() {
    theme.attr('href', 'css/red.css');
  });

  $("#to-blue").click(function() {
    theme.attr('href', 'css/blue.css');
  });

  $(".subir").click(function(e) {
    e.preventDefault();

    $('html, body').animate({
      scrollTop: 0
    }, 500);

    return false;
  });

  /* Guardar los datos del formulario  */
  $("#login form").submit(function() {
    var nombre = $("#nombre").val();

    localStorage.setItem('usuario', nombre);
  });

  var nombre = localStorage.getItem('usuario');

  if (nombre != null && nombre != "undefined") {
    var about_formulario = $("#about p");

    about_formulario.html('<br><strong>Bienvenido ' + nombre + '</strong><br>');
    about_formulario.append("<a href='#' id='logout'>Cerrar sesión</a>");

    $("#login").hide();

    $("#logout").click(function() {
      // limpia lo que hay dentro del localStorage
      localStorage.clear();
      /* En las clases me pedia que pusiese 'window.reload()' pero daba un
      error diciendo que eso no es ningnuna function he buscado por internet
      y me salia que probase con location reload y asi parece que funciona
      perfectamente. */
      location.reload();
    });

  }

  // Acordeon
  if (window.location.href.indexOf('about') > -1) {
    $("#acordeon").accordion();
  }

  // Reloj
  if (window.location.href.indexOf('reloj') > -1) {
    /* Esta es la funcion 'setInterval' para que podamos refresh la pantalla cada cierto
    tiempo, el que yo le indique */
    setInterval(function() {
      /* Lo que me estaba fallando fue no guardar el moment... en una variable
      y despues pasarselo con el html. Lo demas estaba bien ya que yo tambien
      estaba selecciando el div pero pasandoselo direcatamente lo que me daba
      error en la consola */
      var reloj = moment().format("h:mm:ss");
      $("#reloj").html(reloj);
    }, 1000);

  }

  // Validation
  if (window.location.href.indexOf('contact') > -1) {

    $("form input[name='date']").datepicker({
      dateFormat: 'dd-mm-yy'
    });

    $.validate({
      lang: 'es'
    });
  }

});
