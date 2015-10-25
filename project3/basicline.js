$(function () {
    $('#basicline').highcharts({
        title: {
            text: 'Death Trend',
            x: -20 //center
        },
        subtitle: {
            text: 'Source: Data.Gov',
            x: -20
        },
        xAxis: {
            categories: ['2007', '2008', '2009', '2010', '2011']
        },
        yAxis: {
            title: {
                text: 'Number of Deaths'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: ' Deaths'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'NYC',
            data: [147381, 146625, 143079, 139569, 138207]
        }]
    });
});
