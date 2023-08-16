import React from 'react'
import Chart from 'react-apexcharts'

const VitalsReview = () => {

  const VitalData = {
          
    series: [{
      name: 'Temperature',
      data: [44, 55, 57, 56]
    }, {
      name: 'Pressure',
      data: [76.0, 85.0, 101.3, 98.4]
    }, {
      name: 'Weight',
      data: [70.0, 46.0, 80.3, 78.4]
    }],
    options: {
      chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded'
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr'],
      },
      yaxis: {
        title: {
          text: '(reading)'
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val
          }
        }
      }
    },

  }

  return (
    <div className="VitalsReview">
      <Chart options={VitalData.options} series={VitalData.series} type='bar' height={350} />
    </div>
  )
}

export default VitalsReview