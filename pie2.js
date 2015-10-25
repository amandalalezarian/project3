$(function () {

    $(document).ready(function () {

        // Build the chart
        $('#pie2').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Malignant Neoplasms'
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
                    y: 7.01
                }, {
                    name: "Hispanic",
                    y: 16.34,
                    sliced: true,
                    selected: true
                }, {
                    name: "Black",
                    y: 25.39
                }, {
                    name: "White",
                    y: 51.26
                }]
            }]
        });
    });
});
