<script>
  import { onMount } from 'svelte';
  
  // Props for chart configuration
  export let gaiaHP = 10548;
  export let allyHP = 8000;
  export let motherlyLove = true;
  export let ultimate = true;
  export let awakeningVI = false;
  export let teamSkill = false;
  
  let Chart;
  let chart;
  let chartContainer;
  
  // Constants for calculations
  const MOTHERLY_LOVE_PERCENT = 0.60;
  const ULTIMATE_PERCENT = 0.60;
  const AWAKENING_BONUS_PERCENT = 0.50;
  const CAP_PERCENT = 0.15;
  const EMERGENCY_HEAL_PERCENT = 0.12;
  
  // Reactive calculations
  $: gaiaFinalHP = teamSkill ? Math.floor(gaiaHP * 1.10) : gaiaHP;
  $: capAmount = Math.floor(gaiaFinalHP * CAP_PERCENT);
  $: baseIncrease = Math.min(Math.floor(allyHP * MOTHERLY_LOVE_PERCENT), capAmount);
  $: awakeningIncrease = awakeningVI && baseIncrease < capAmount ? 
    Math.min(Math.floor(allyHP * AWAKENING_BONUS_PERCENT), capAmount - baseIncrease) : 0;
  $: ultimateIncrease = ultimate ? Math.min(Math.floor(allyHP * ULTIMATE_PERCENT), capAmount) : 0;
  $: totalHPIncrease = motherlyLove ? Math.min(Math.floor(allyHP * MOTHERLY_LOVE_PERCENT), capAmount) : 0;
  
  // Initialize chart when component mounts
  onMount(async () => {
    // Dynamic import Chart.js only when component loads
    Chart = (await import('chart.js/auto')).default;
    initializeChart();
  });
  
  // Update chart when props change
  $: if (Chart && chart) {
    updateChart();
  }
  
  function initializeChart() {
    if (!chartContainer || !Chart) return;
    
    const ctx = chartContainer.getContext('2d');
    const chartData = generateChartData();
    
    chart = new Chart(ctx, {
      type: 'line',
      data: chartData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
          mode: 'index',
          intersect: false,
        },
        plugins: {
          title: {
            display: true,
            text: 'How Gaia\'s HP Affects the 15% Cap',
            color: '#ffffff',
            font: {
              size: 16,
              weight: 'bold'
            }
          },
          legend: {
            display: true,
            position: 'top',
            labels: {
              color: '#b3b3b3',
              usePointStyle: true,
              padding: 20
            }
          },
          tooltip: {
            backgroundColor: 'rgba(26, 26, 26, 0.9)',
            titleColor: '#ffb74d',
            bodyColor: '#ffffff',
            borderColor: '#ffb74d',
            borderWidth: 1,
            callbacks: {
              label: function(context) {
                const label = context.dataset.label || '';
                const value = context.parsed.y;
                if (label.includes('Current Selection')) {
                  const currentCap = Math.floor(gaiaFinalHP * CAP_PERCENT);
                  return `${label}: ${value.toLocaleString()} HP (Cap: ${currentCap.toLocaleString()})`;
                }
                return `${label}: ${value.toLocaleString()} HP`;
              }
            }
          }
        },
        scales: {
          x: {
            display: true,
            title: {
              display: true,
              text: 'Ally Base HP',
              color: '#b3b3b3'
            },
            ticks: {
              color: '#999999',
              maxTicksLimit: 8 // Fewer ticks for cleaner look
            },
            grid: {
              color: 'rgba(255, 255, 255, 0.1)'
            }
          },
          y: {
            display: true,
            title: {
              display: true,
              text: 'HP Increase',
              color: '#b3b3b3'
            },
            ticks: {
              color: '#999999',
              callback: function(value) {
                return value.toLocaleString();
              },
              maxTicksLimit: 6 // Fewer ticks for cleaner look
            },
            grid: {
              color: 'rgba(255, 255, 255, 0.1)'
            }
          }
        }
      }
    });
  }
  
  function generateChartData() {
    // Generate data showing how different Gaia HP levels affect the cap
    // Only show current Gaia HP - no confusing reference lines
    const referenceLevels = [gaiaFinalHP];
    
    // Calculate dynamic ranges based on allyHP and reference levels
    const maxAllyHP = Math.max(allyHP + 2000, 12000); // Ensure we show current ally HP + buffer
    const maxCapAmount = Math.max(...referenceLevels.map(hp => Math.floor(hp * CAP_PERCENT)));
    
    const datasets = [];
    
    // Generate dynamic data points based on current ally HP
    const stepSize = 1000;
    const labels = [];
    for (let hp = 0; hp <= maxAllyHP; hp += stepSize) {
      labels.push(hp.toString());
    }
    
    // Add line for current Gaia HP level only
    referenceLevels.forEach((gaiaHp, index) => {
      const actualData = [];
      const capForThisGaia = Math.floor(gaiaHp * CAP_PERCENT);
      
      for (let i = 0; i < labels.length; i++) {
        const allyHp = parseInt(labels[i]);
        const theoretical = Math.floor(allyHp * MOTHERLY_LOVE_PERCENT);
        const actual = Math.min(theoretical, capForThisGaia);
        actualData.push(actual);
      }
      
      datasets.push({
        label: `Current Gaia: ${gaiaHp.toLocaleString()} HP (15% Cap: ${capForThisGaia.toLocaleString()} HP)`,
        data: actualData,
        borderColor: '#ffb74d',
        backgroundColor: 'rgba(255, 183, 77, 0.2)',
        borderWidth: 3,
        pointRadius: 0,
        fill: false,
        tension: 0.1
      });
    });
    
    // Add current ally HP point
    const currentAllyHP = allyHP;
    const capForCurrentGaia = Math.floor(gaiaFinalHP * CAP_PERCENT);
    const currentIncrease = Math.min(Math.floor(currentAllyHP * MOTHERLY_LOVE_PERCENT), capForCurrentGaia);
    
    // Find the index for current ally HP in the labels array
    const currentAllyHPIndex = Math.min(Math.floor(currentAllyHP / 1000), labels.length - 1);
    const currentSelectionData = new Array(labels.length).fill(null);
    currentSelectionData[currentAllyHPIndex] = currentIncrease;
    
    datasets.push({
      label: 'Current Selection',
      data: currentSelectionData,
      borderColor: '#ffffff',
      backgroundColor: '#ffffff',
      borderWidth: 0,
      pointRadius: 8,
      pointHoverRadius: 10,
      showLine: false
    });
    
    return {
      labels: labels,
      datasets: datasets
    };
  }
  
  function updateChart() {
    if (!chart || !Chart) return;
    
    const chartData = generateChartData();
    chart.data = chartData;
    chart.options.plugins.title.text = `How Gaia's HP Affects the 15% Cap (Current Gaia: ${gaiaFinalHP.toLocaleString()} HP)`;
    chart.update('none'); // Update without animation for better performance
  }
</script>

<div class="gaia-cap-chart-container">
  <div class="chart-header">
    <h3>HP Cap Visualization</h3>
    <p>Shows how higher Gaia HP increases the 15% cap, allowing allies to get more HP increase</p>
  </div>
  <div class="chart-wrapper">
    <canvas bind:this={chartContainer}></canvas>
  </div>
  <div class="chart-insights">
    <div class="insight-item">
      <span class="insight-label">Current Cap:</span>
      <span class="insight-value">{capAmount.toLocaleString()} HP</span>
    </div>
    <div class="insight-item">
      <span class="insight-label">Current Increase:</span>
      <span class="insight-value">
        {totalHPIncrease.toLocaleString()} HP 
        <span class="percentage">({((totalHPIncrease / allyHP) * 100).toFixed(1)}%)</span>
      </span>
    </div>
    <div class="insight-item">
      <span class="insight-label">Ally HP + HP Increase:</span>
      <span class="insight-value">
        {(allyHP + totalHPIncrease).toLocaleString()} HP
      </span>
    </div>
    <div class="insight-item">
      <span class="insight-label">% of Ally Max HP:</span>
      <span class="insight-value">
        {((totalHPIncrease / allyHP) * 100).toFixed(1)}%
      </span>
    </div>
    <div class="insight-item">
      <span class="insight-label">Cap Status:</span>
      <span class="insight-value {totalHPIncrease < Math.floor(allyHP * MOTHERLY_LOVE_PERCENT) ? 'capped' : 'not-capped'}">
        {totalHPIncrease < Math.floor(allyHP * MOTHERLY_LOVE_PERCENT) ? '15% Cap Active' : 'No Cap'}
      </span>
    </div>
  </div>
</div>
