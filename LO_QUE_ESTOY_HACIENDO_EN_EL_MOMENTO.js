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

// 1 Payer > Index > Manage | Tab Plans (listo)
// 2 Payer > Index > Manage | Tab Attachments (tablaNormal) (1 este me falta porque es la tabla que se crea en attachment a patica)
// 3 Plan Benefits > Plan > Index (listo)
// 4 Plan Benefits > Plan Graoup > Index (listo)
// 5 Member > Index > Manage | Tab Benefit Usage (listo)
// 6 Member > Index > Mangae | Tab Attachments (tablaNormal)
// 7 Vendors > Index > Manage | Tab Attachments (tablaNormal)
// 8 Providers> Index > Manage | Tab Attachments (tablaNormal)
// 9 Claim Search > Index (listo)
// 10 Configuration > System Code (listo)(tablaNormal)(parecida a attachments)(medio resuelta logica que me funciono)
// 11 Configuration > Claim Pend Management > Index (listo)


// 12 Configuration > User Managment > Index (tablaNormal)()revizar no la habia echo


// 13 EDI > Cap Reconciliation > Index > Manage >Tab File List Imported (listo)
// 14 EDI > Trading Partners > Index > Manage > Tab File List Imported / Exported (listo)
// 15 EDI>277U Pending Exports > Index (listo)


// 16 Payment Processing > Run > Index (listo)
// 17 Payment Processing > General Ledger > Vendor Adjustment > Index (listo)
// 18 UM > Index (listo)

// -----------------------------------------------------------------------------------
// 2 Payer > Index > Manage | Tab Attachments (tablaNormal) (1 este me falta porque es la tabla que se crea en attachment a patica)
// 6 Member > Index > Mangae | Tab Attachments (tablaNormal)
// 7 Vendors > Index > Manage | Tab Attachments (tablaNormal)
// 8 Providers> Index > Manage | Tab Attachments (tablaNormal)
// 10 Configuration > System Code (tablaNormal)(parecida a attachments)(medio resuelta logica que me funciono) (1 aparte)
// Configuration > User Managment > Index (tablaNormal) (2 aparte)

// -----------------------------------------------------------------------------------

//  imageNotFoundData(settings, 200, '#Index_Plan');

// la vuelta es que ahora todos los servicios en dev van a estar en next6 solo vana a estar en el formato viejo en master o UAT si quiero correr un servicio actualizado en dev devo hacerlo con el comando indicado ya no con docker con docker solo correre dos servicios indicados 
// mvc en dev tambien hay que correrlo con el comando o eso creo 
// filterDataTable tablas este es el contenedor que busca 
// filter_dataTable contenedor este es el contenedor que oculta 
// data_notfound y esta es la imagen que esta oculta


function imageNotFoundDataTableAttachment(obj = null, contextId = null){
  debugger
  if (obj?.json !== null && obj?.json?.length === 0) {
  $(`${contextId} #attachmentSection table`).addClass('hide');
  $(`${contextId} #attachmentSection .f-r`).addClass('hide');
  $(`${contextId} #attachmentSection .data_notfound`).removeClass('hide');
  }else{
    $(`${contextId} #attachmentSection table`).removeClass('hide');
    $(`${contextId} #attachmentSection .f-r`).removeClass('hide');
    $(`${contextId} #attachmentSection .data_notfound`).addClass('hide');
  }
}

    // tablaNormal
function imageNotFoundDataTableNormal(obj = null, statusRequest = 200, contextId = null ,special=false){
  debugger
  if (obj?.json != null && obj?.json?.data?.length == 0) {
  $('#lookupTableDataTable',$(targetLookupTable.lookupTableDataTable_wrapper)).addClass('hide');
  $('.f-r',$(targetLookupTable.lookupTableDataTable_wrapper)).addClass('hide');
  $(".data_notfound").removeClass('hide');
  }else{
    $('#lookupTableDataTable',$(targetLookupTable.lookupTableDataTable_wrapper)).removeClass('hide');
    $('.f-r',$(targetLookupTable.lookupTableDataTable_wrapper)).removeClass('hide');
    $(".data_notfound",getContext()).addClass('hide');
  }
}

{/* <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 filter_dataTable">
    <div class="table-responsive m-t-20 lookupTableColumnsPartial filterDataTable">
        <table id="lookupTableDataTable" data-url="@Url.Action("DataTableServerSideProcessing","LookupTable")" class="display nowrap table table-hover table-striped" cellspacing="0" width="100%">
            <thead>
            </thead>
            <tbody>
            </tbody>
        </table>
    </div>
    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 m-auto text-center hide data_notfound">
        <h2 class="font-weight-bold title-tabs text-center">There's nothing here...</h2>
        <span class="text-secondary-filter text-center">Data not found</span>
        <img src="/lib/images/NoResultsIllustration.svg" alt="No Results" class="img-responsive w-35 d-block m-auto pt-2">
    </div>
</div> */}