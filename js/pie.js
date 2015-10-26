$(function () {

    $(document).ready(function () {

        // Build the chart
        $('#pie').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Diseases of Heart'
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
                    y: 4.84
                }, {
                    name: "Hispanic",
                    y: 13.98,
                    sliced: true,
                    selected: true
                }, {
                    name: "Black",
                    y: 23.49
                }, {
                    name: "White",
                    y: 57.69
                }]
            }]
        });
    });
});
