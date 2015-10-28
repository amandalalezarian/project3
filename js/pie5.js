$(function () {

    $(document).ready(function () {

        // Build the chart
        $('#pie5').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Chronic Lower Respiratory'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            series: [{
                name: "Ethnicity",
                colorByPoint: true,
                data: [{
                    name: "Asian",
                    y: 5.29
                }, {
                    name: "Hispanic",
                    y: 17.10
                }, {
                    name: "Black",
                    y: 22.91
                }, {
                    name: "White",
                    y: 54.70
                }]
            }]
        });
    });
});
