// Shared Chart.js configuration for all Horizon Walker characters

export const horizonWalkerChartConfig = {
  type: 'radar',
  options: {
    responsive: true,
    maintainAspectRatio: false,
    animation: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false }
    },
    scales: {
      r: {
        beginAtZero: true,
        max: 25,
        ticks: { display: false },
        grid: { color: 'rgba(232, 165, 71, 0.2)' },
        angleLines: { color: 'rgba(232, 165, 71, 0.3)' },
        pointLabels: {
          color: '#e8a547',
          font: { size: 11, weight: '600' }
        }
      }
    }
  }
};