// adds social class to get social chart
// let element = document.getElementsByClassName("chart-area");
// for(var i = 0; i < element.length; i++)
// {
//     element[i].className += " social";
// }

// bolds the subhead if there is no headline
let subhead = document.getElementsByClassName("chart-subhead"),
    headline = document.getElementById("chart-head");
    if (!headline) {
        for(var i = 0; i < subhead.length; i++) {
            subhead[i].style.fontWeight = "600";
        }       
     }

Highcharts.setOptions({
    lang: {
      thousandsSep: ','
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const myChart = Highcharts.chart('chart-container', {
        chart: {
            type: 'column',
            styledMode: true,
            spacingBottom: 25,
            spacingRight: 100
        }, 
        title: {
            text: null
        },
        series: [{
            name: 'Airfare',
            data: [
                ['Monday, Nov. 25', 288],
                ['Tuesday, Nov. 26', 321],
                ['Wednesday, Nov. 27', 359],
                ['Thursday, Nov. 28', 275]
            ],
        }],
        // for bar charts only
        plotOptions: {
            series: {
                groupPadding: 0.1
            } 
        },
        legend: {
            enabled: false
        },
        xAxis: {
            labels: {
                autoRotation: false,
                style: {
                    // whiteSpace: 'nowrap'
                    textOverflow: 'none'
                },
                formatter: function() {
                    if (this.value !== 'Monday, Nov. 25') {
                        let justDate = (this.value).slice(-2);
                        return justDate;
                    } else {
                        return 'Nov. 25';
                    }
                }
            },
            tickLength: 5,
            type: 'category'
        },
        yAxis: {
            title: false,
            labels: {
                useHTML: true,
                overflow: 'allow'
            },
            max: 600,
            tickAmount: 4
        },
        credits: {
            enabled: false
        },
        tooltip: {
            shadow: false,
            padding: 10,
            valuePrefix: '$'
        },
        responsive: {
            rules: [{
              condition: {
                maxWidth: 500
              },
              chartOptions: {
                chart: {
                  spacingRight: 15
                },
                legend: {
                    align: 'left',
                    x: -18
                }
              }
            }]
        }
    });

    const myChart2 = Highcharts.chart('chart-container-2', {
        chart: {
            type: 'column',
            styledMode: true,
            spacingBottom: 25,
            spacingRight: 100
        }, 
        title: {
            text: null
        },
        series: [{
            name: 'Airfare',
            data: [
                ['Friday, Dec. 20', 496],
                ['Saturday, Dec. 21', 504],
                ['Sunday, Dec. 22', 433],
                ['Monday, Dec. 23', 394],
                ['Tuesday, Dec. 24', 344],
                ['Wednesday, Dec. 25', 358]
            ],
        }],
        // for bar charts only
        plotOptions: {
            series: {
                groupPadding: 0.1,
            } 
        },
        legend: {
            enabled: false
        },
        xAxis: {
            labels: {
                autoRotation: false,
                style: {
                    // whiteSpace: 'nowrap',
                    textOverflow: 'none'
                },
                formatter: function() {
                    if (this.value !== 'Friday, Dec. 20') {
                        let justDate = (this.value).slice(-2);
                        return justDate;
                    } else {
                        return 'Dec. 20';
                    }
                }
            },
            tickLength: 5,
            type: 'category'
        },
        yAxis: {
            title: false,
            labels: {
                useHTML: true,
                overflow: 'allow'
            },
            max: 600,
            tickAmount: 4
        },
        credits: {
            enabled: false
        },
        tooltip: {
            shadow: false,
            padding: 10,
            valuePrefix: '$'
        },
        responsive: {
            rules: [{
              condition: {
                maxWidth: 500
              },
              chartOptions: {
                chart: {
                  spacingRight: 15
                },
                legend: {
                    align: 'left',
                    x: -18
                }
              }
            }]
        }
    });
});