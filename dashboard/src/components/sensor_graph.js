import Chart from "react-apexcharts";

export default function LineGraph(values) {
    let y_data = [];
    let x_data = [];
    const data = values.data;
    var todaysDate = new Date();
    for (let i = 0; i < data.length; i++) {
        x_data.push(data[i].time)
        y_data.push(data[i].temperature)
    }
    const all = {
      series: [{
          name: "Temperature",
          data: y_data
      }],
      options: {
        chart: {
          height: 600,
          type: 'line'
        },
        dataLabels: {
          enabled: true
        },
        stroke: {
          curve: 'straight'
        },
        title: {
          text: 'Temperature',
          align: 'center'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'],
            opacity: 0.5
          },
        },
        xaxis: {
          categories: x_data,
          title: {
            text: 'Time (Hour)'
          }
        }
      },
    };
    return (
      <Chart options={all.options} series={all.series} type="line" height={600} />
    );
}
