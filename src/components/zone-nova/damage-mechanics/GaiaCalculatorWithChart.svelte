<script>
  import GaiaCalculatorSvelte from './GaiaCalculator.svelte';
  import GaiaCapChartSvelte from './GaiaCapChart.svelte';
  
  // Shared reactive state - using store-like pattern
  let state = {
    gaiaHP: 10548,
    allyHP: 8000,
    motherlyLove: true,
    ultimate: true,
    awakeningVI: false,
    teamSkill: false
  };
  
  // Function to update state from calculator
  function updateState(newState) {
    console.log('State update:', newState); // Debug log
    state = { ...state, ...newState };
  }
  
  // Make individual variables reactive from state
  $: gaiaHP = state.gaiaHP;
  $: allyHP = state.allyHP;
  $: motherlyLove = state.motherlyLove;
  $: ultimate = state.ultimate;
  $: awakeningVI = state.awakeningVI;
  $: teamSkill = state.teamSkill;
</script>

<div class="gaia-calculator-chart-container">
  <!-- Calculator Section -->
  <div class="calculator-section">
    <GaiaCalculatorSvelte 
      bind:state={state}
      onUpdate={updateState}
    />
  </div>
  
  <!-- Chart Section -->
  <div class="chart-section">
    <GaiaCapChartSvelte 
      {gaiaHP}
      {allyHP}
      {motherlyLove}
      {ultimate}
      {awakeningVI}
      {teamSkill}
    />
  </div>
</div>

<style>
  .gaia-calculator-chart-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  
  .calculator-section {
    order: 1;
  }
  
  .chart-section {
    order: 2;
  }
</style>
