var wnd, detailsTemplate;
			
	$(document).ready(function () {
		$("#grid").kendoGrid({
			dataSource: {
				data: products,
				batch: true,
				schema: {
					model: {
						fields: {
							ProductID: { type: "string", editable: false },
							Nombres: { type: "string" },
							Tipo: { type: "string", editable: false },
							FechaSolicitud: { type: "date", editable: false },
							AsignadoA: { type: "string" }
						}
					}
				},
				pageSize: 5
			},
			height: 620,
			scrollable: true,
			sortable: false,
			filterable: false,
			pageable: {
				input: true,
				numeric: false
			},					
			columns: [
				{ field: "ProductID", title: "ID", width: "80px" },
				{ field: "Nombres", title: "Nombre", width: "130px" },
				{ field: "Tipo", title: "Tipo", width: "130px" },
				{ field: "FechaSolicitud", title: "Fecha solicitud", format: "{0: dd/MM/yyyy 'a las' hh:mm:ss tt}", width: "180px" },
				{ field: "AsignadoA", title: "Asignado A", width: "180px" },
				{
					template: "<div id='example' role='application'>" +
						"<div id='tshirt-view' class='demo-section k-content'>" +
						"<select id='state' placeholder='Seleccione...' style='width: 100%;' >" +
						"<option>Pending</option>" +
						"<option>Approved</option>" +
						"<option>Canceled</option>" +
						"<option>Created</option>" +
						"</select>" +
						"</div>",
					field: "Estado",							
					width: 150
				}, 
				{
					command: [
					{							
						text: "Detalles", 
						click: showDetails
					}], 
					title: " ",							
					width: "180px"							
				}
			]					
		});

		 wnd = $("#details")
                .kendoWindow({
                    title: "Informaci\u00f3n de tarea",
                    modal: true,
                    visible: false,
                    resizable: false,
					width: 300							
                }).data("kendoWindow");

            detailsTemplate = kendo.template($("#template").html());					
	});
	
	function showDetails(e) {
        e.preventDefault();

        var dataItem = this.dataItem($(e.currentTarget).closest("tr"));
        wnd.content(detailsTemplate(dataItem));
        wnd.center().open();
    }
    