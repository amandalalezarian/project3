$(function () {

    $(document).ready(function () {

        // Build the chart
        $('#pie3').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Influenza & Pneumonia'
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
                    y: 7.02
                }, {
                    name: "Hispanic",
                    y: 17.90
                }, {
                    name: "Black",
                    y: 21.88
                }, {
                    name: "White",
                    y: 53.19
                }]
            }]
        });
    });
});
