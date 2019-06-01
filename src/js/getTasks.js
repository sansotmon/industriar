var ds = new kendo.data.DataSource({
    transport: {
        read: {
        url: "https://findpet.com.co/APIVUE.php?q=getTasks",
        dataType: "json"
            }
        },
    schema: {
        data: "message",
        model: {   
            fields: {
                id: { type: "int" },
                name: { type: "string" },
                type: { type: "string" },
                dateTask: { dateTask: "date" },
                assign: { assign: "string" },
                status: { status: "string" },
            }
        }
    }
});
 
                         
 $("#grid").kendoGrid({
          dataSource: ds,
           height: 680,
           pageSize: 10,
           scrollable: {
                       virtual: true
                     },
           columns: [
                            { field:"id", title:"Id", width: 80},
                            { field:"name", title: "Name" },
                            { field:"type", title: "Type" },
                            { field:"dateTask", title: "Date init" },
                            { field:"assign", title: "Assign" },
                            { field:"status", title: "Status" }
                             
                        ],
                        
    groupable: false,
        sortable: false,
        pageable: {
            refresh: true,
            pageSizes: false,
            buttonCount: 5
        }
                  });
           