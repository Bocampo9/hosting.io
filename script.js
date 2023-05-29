$(document).ready(function(){ /* dentro de este codigo va el JQUERY estoy diciendo cuando el documento este listo aplicame la funcion que te voy a decir a continuacion */

/* PRIMERAS PROPIEDADES */
$('#tab-uno').addClass("active"); /* por defecto cuando carga el documento, a tab-1  le agregamos la clase(addClass) active osea quiero que tenga el fondo blanco.*/

/* PROGRAMACION POPUP */
 //$('.popup').delay(4000).fadeIn(500); /* delay(retrasame) este div $(asi se declara) 4000 milisegundos osea 4 segundos y una vez que lo retrasaste, con el . concatenamos otra funcion hacame que aparezca(fadenIn) */

//$('.popup .cerrar').click(function(){ /* aca estamos diciendo cuando haga click en la clase cerrar del div popup ejecuta la siguiente funcion */
//    $('.popup').fadeOut(); /* desaparece(fadeOut) al div popup */
//})


/* PROGRAMACION TABS */

$('#hosting-dos').fadeOut(); /* aca decimos que ambos hosting desaparezcan(fadeOut) */
$('#hosting-tres').fadeOut();

/* TAB UNO */

$('#tab-dos').click(function(){ /* cuando se haga click en tab-2 se va a aplicar la siguiente funcion */
$('#hosting-uno').fadeOut(10); /* desaparece(faceOut) a hosting1 en 10 milisegundos */
$('#hosting-tres').fadeOut(10);/* hosting3 desaparece */
$('#hosting-dos').fadeIn(10); /* aparece(faceIn) hosting2 en 10 milisegundos */
$('#tab-dos').addClass("active"); /* cuando sucede eso a tab-2 le agregamos la clase (addClass) "active que definimos en css" */
$('#tab-uno').removeClass("active"); /* al mismo tiempo tab-1 y tab-3 se le saca la clase(removeClass) active */
$('#tab-tres').removeClass("active");
})

/* TAB DOS */

$('#tab-uno').click(function(){/* cuando se haga click en tab-1 se va a aplicar la siguiente funcion */
    $('#hosting-uno').fadeIn(10); /* aparece hosting-1 en 10 milisengundos */
    $('#hosting-tres').fadeOut(10); /* desaparece hosting 2 y 3 en 10 milisegundos */
    $('#hosting-dos').fadeOut(10);
    $('#tab-dos').removeClass("active");
    $('#tab-uno').addClass("active");
    $('#tab-tres').removeClass("active");
})

/* TAB TRES */

$('#tab-tres').click(function(){/* cuando se haga click en tab-1 se va a aplicar la siguiente funcion */
    $('#hosting-uno').fadeOut(10); /* desaparece hosting-1 en 10 milisengundos */
    $('#hosting-tres').fadeIn(10); /* aparece hosting-3 y 2 en 10 milisegundos */
    $('#hosting-dos').fadeOut(10);
    $('#tab-dos').removeClass("active"); /* sacale la clase active a tab-dos */
    $('#tab-uno').removeClass("active");
    $('#tab-tres').addClass("active");
})

/*  MENU MOBILE */

    $('menu-icon').on('click',function(){ //todo esto se le va a agregar cuando se haga click(es otra manera de escribirlo), en el icono del menu
        $('nav').sliceToggle(); //la propiedad SLICETOGGLE esta compuesta por el sliceDown y sliceUp, es para que aparezca y desaparezca la barra de navegacion.

    })

})

