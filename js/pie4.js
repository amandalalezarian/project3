$(function () {

    $(document).ready(function () {

        // Build the chart
        $('#pie4').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Diabetes Mellitus'
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
                    y: 6.17
                }, {
                    name: "Hispanic",
                    y: 24.11
                }, {
                    name: "Black",
                    y: 39.95
                }, {
                    name: "White",
                    y: 29.78
                }]
            }]
        });
    });
});
