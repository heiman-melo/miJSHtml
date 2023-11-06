// -----------------------------------------------------------------------
// 1) next.js  aprender a manejarlo
// 2) NextAuth.js  es una biblioteca que se usara para la autenticacion o logeo --------------------------------------------------------------------------------------------(si)

// 3) TS typeScript para el tipado fuerte ----------------------------------------------------------------------------------------------------------------------------------(si)
// 4) Ant Design esto es para la maquetacion parecido a material ui --------------------------------------------------------------------------------------------------------(si)

// 5) i18next  es la forma de crear archivos json entre otros y de guardar texto que se podra traducir a cualquier idioma facilmente ---------------------------------------(si)
// 6) React Query sirve para guardar en cache las peticiones a un api esto ayuda a no llenar tanto la memoria del navegador y obtimizar la vuelta --------------------------(si)

// 7) React Hook Form para validar formularios -----------------------------------------------------------------------------------------------------------------------------(si) 
// 8) YUP  validador de formulario -----------------------------------------------------------------------------------------------------------------------------------------(si) 

// next.js, NextAuth.js, TS, i18next, Ant Design, i18next, React Query, React Hook, YUP 

// ___________________________________________________________________________________________________________________________________________________________________________________________________________________
// @if (ViewData["DateRangeDecisionFilter"] != null && (bool)ViewData["DateRangeDecisionFilter"] == true)
// {
//     <div data-type="DateRangeDecisionFilter" class="singleAdvancedFiltersChild dateDecision form-group input-group contentFilter mb-2 col-md-4">
//         <label class="w-100" for="daterangeDecisionfrom">@(ViewData["DateRangeDecisionLabel"] != null ? ViewData["DateRangeDecisionLabel"] : "")</label>
//         <div class="input-daterange input-group controls">
//             <input type="text" class="form-control datepicker" id="daterangeDecisionFrom" data-position="from" data-target="daterangeDecisionFrom">
//             <div class="input-group-append"><span class="input-group-text bg-default">To</span></div>
//             <input type="text" class="form-control datepicker lastinput" id="daterangeDecisionTo" data-position="to" data-target="daterangeDecisionTo">
//         </div>
//     </div>
// }

// ViewData["DateRangeDecisionFilter"] = true;
// ViewData["DateRangeDecisionLabel"] = "DOS Decision";


// targetDateRangeDecisionFromFilterValue:'#daterangeDecisionFrom',
// targetDateRangeDecisionToFilterValue:'#daterangeDecisionTo',
// d.dateRangeDecisionFrom = $(stg.targetDateRangeDecisionFromFilterValue, container).val();
// d.dateRangeDecisionTo = $(stg.targetDateRangeDecisionToFilterValue, container).val();


// {/* estos son los nuevos rangos */}
// Payer 835 Payment Date
// Payer Billing Date
// Claim DOS Range
// __________________________________________________________________________________________________________________________________________
// -son tres plantillas
// -lo unico que tengo que hacer es cambiarles un texto que se vea de la misma manera y donde se va a gregar algo de forma dinamica colocar unas llaves sobre el texto corrido sin etiquetas ni nada 
// -cada archivo nombrarlo con respecto a lo que dice cada texto ahorito miro que nombre es el que va a llevar cada archivo y listo  
// -el boton Ver detalle 
// - los titulos ya me dicen que es lo que hay que hacer

// -----------------------------------------------------anlizando la tarea de fernando 8506--------------------------------------------------

// let algo ={
// "Total de solicitudes"              :"es un recuento de todas las entradas en ClaimManagementRequestClaim para la solicitud",
// "Éxito"                             :"es el recuento de las entradas en ClaimManagementRequestClaim para la solicitud con un RequestResults de ,Éxito, - Por cierto, este literal debería ser ,Éxito",
// "Fallida "                          :"es un recuento de las entradas en ClaimManagementRequestClaim para la solicitud con un RequestResults que empieza por Fallida",
// "Sin procesar"                      :"es el recuento de entradas en ClaimManagementRequestClaim para la solicitud con un RequestResults nulo",
// }

// -----------------nelumbo----------------------------------------------------------------------------------------------------------------------------
// -las chingadas plantillas 
// - leer el documento y mirar la domumentacion de como se agrega esa verga de forma dinamica 
// - que las variables no pueden tener mas de dos pisos _
// las preguntas son dinamicas tambien en variables
// las respuestas son dinamicas con variables 


// {{#if MAYOR}}
// <strong>{{NOMBRE}}</strong>
// {{else}}
// {{NOMBRE}}
// {{/if}}