import Chart from "react-apexcharts";

export default function LineGraph(values) {
    let y_data = [];
    let x_data = [];
    const data = values.data;
    for (let i = 0; i < data.length; i++) {
        const date = new Date(data[i].created);
        x_data.push(`${date.getHours()}:${date.getMinutes()}`)
        y_data.push(data[i].download)
    }
    const all = {
      series: [{
          name: "Download Speed",
          data: y_data
      }],
      options: {
        chart: {
          height: 600,
          type: 'line'
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        title: {
          text: 'Download',
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
        }
      },
    };
    return (
      <Chart options={all.options} series={all.series} type="line" height={600} />
    );
}
