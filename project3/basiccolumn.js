$(function () {
    $('#basiccolumn').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Top 5 Causes of Death'
        },
        subtitle: {
            text: 'Source: Data.Gov'
        },
        xAxis: {
            categories: [
                '2007',
                '2008',
                '2009',
                '2010',
                '2011'
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: '% of Deaths'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Diseases of Heart',
            data: [43.14, 42.80, 41.52, 38.02, 36.30]

        }, {
            name: 'Malignant Neoplasms',
            data: [26.67, 26.39, 27.39, 28.37, 28.95]

        }, {
            name: 'Influenza & Pneumonia',
            data: [4.52, 5.64, 4.69, 5.25, 5.35]

        }, {
            name: 'Diabetes Mellitus',
            data: [3.12, 3.31, 3.52, 3.63, 3.77]

        }, {
            name: 'Chronic Lower Respiratory',
            data: [2.87, 3.25, 3.17, 3.64, 3.82]

        }]
    });
});
