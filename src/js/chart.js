function createChart() {
        $("#chart").kendoChart({
            theme: $(document).data("kendoSkin") || "default",
            dataSource: {
                transport: {
                    read: {
                        url: "https://findpet.com.co/APIVUE.php?q=countTask",
                        dataType: "json"
                    }
                }
            },
            title: {
                text: "Summary tasks"
            },
            legend: {
                position: "top"
            },
            seriesColors: ["#1D71FF"],
            seriesDefaults: {
                type: "column"
            },
            series: //USE A TEMPLATE HERE SO FOR EACH NAME IN THE JSON A SERIES IS CREATED.
            [{
                field: "value",
             }
                  ],
            categoryAxis: {
                    categories: ['Approved task', 'Canceled task', 'Created task', 'Pending task'],
                    line: {
                        visible: false
                    }
                },
            valueAxis: {
                    labels: {
                        format: "{0}"
                    },
                    line: {
                        visible: false
                    },
                    axisCrossingValue: 0
                },
            tooltip: {
                visible: true,
                format: "{0:N3}"
            }
        });
    }
    $(document).ready(function() {
        setTimeout(function() {
            createChart();


            // Initialize the chart with a delay to make sure
            // the initial animation is visible
        }, 400);
    });
           