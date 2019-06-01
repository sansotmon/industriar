var ds = new kendo.data.DataSource({
    transport: {
        read: {
        url: "https://findpet.com.co/APIVUE.php?q=getUsers",
        dataType: "json"
            }
        },
    schema: {
        data: "message",
        model: {   
            fields: {
                id: { type: "int" },
                name: { type: "string" },
                email: { type: "string" },
                username: { username: "string" },
                typeUser: { assign: "string" }
            }
        }
    }
});
 
                         
 $("#grid-users").kendoGrid({
          dataSource: ds,
           height: 680,
           pageSize: 10,
           scrollable: {
                       virtual: true
                     },
           columns: [
                            { field:"id", title:"Id", width: 100},
                            { field:"name", title: "Name" },
                            { field:"email", title: "Email" },
                            { field:"username", title: "Username" },
                            { field:"typeUser", title: "Type" }
                             
                        ],
                        
    groupable: false,
        sortable: false,
        pageable: {
            refresh: true,
            pageSizes: false,
            buttonCount: 5
        }
                  });
           