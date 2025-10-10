<script>
  import { GAMES } from '../../../consts';

  // Props
  export let title = "Damage Calculator";
  export let description = "Use this calculator to test the Zone Nova damage formula with your own values:";
  export let showFormula = true;
  export let initialValues = {
    attack: 1000,
    defense: GAMES.ZONE_NOVA.DAMAGE_K_VALUE,
    damageReduction: 0
  };

  // Reactive state
  let attack = initialValues.attack;
  let defense = initialValues.defense;
  let damageReduction = initialValues.damageReduction;

  // Constants
  const K = GAMES.ZONE_NOVA.DAMAGE_K_VALUE;

  // Reactive calculations
  $: baseDamage = attack > 0 ? (attack * K) / (defense + K) : 0;
  $: finalDamage = baseDamage * (1 - damageReduction / 100);
  $: percentage = attack > 0 ? (finalDamage / attack) * 100 : 0;
  $: isValidInput = attack > 0;

  // Reactive calculation steps for display
  $: calculationSteps = isValidInput ? {
    step1: `(${attack} × ${K}) / (${defense} + ${K})`,
    step2: `${(attack * K).toFixed(0)} / ${(defense + K).toFixed(2)}`,
    step3: `${baseDamage.toFixed(2)} × (1 - ${damageReduction}%)`,
    step4: `${baseDamage.toFixed(2)} × ${(1 - damageReduction / 100).toFixed(2)}`,
    fullCalculation: `Step 1: (${attack} × ${K}) = ${(attack * K).toFixed(0)}\nStep 2: (${defense} + ${K}) = ${(defense + K).toFixed(2)}\nStep 3: ${(attack * K).toFixed(0)} ÷ ${(defense + K).toFixed(2)} = ${baseDamage.toFixed(2)} (base damage)\nStep 4: ${baseDamage.toFixed(2)} × (1 - ${damageReduction}%) = ${baseDamage.toFixed(2)} × ${(1 - damageReduction / 100).toFixed(2)} = ${finalDamage.toFixed(2)} (final damage)`
  } : null;

  // Input handlers
  function handleAttackInput(e) {
    attack = parseFloat(e.target.value) || 0;
  }

  function handleDefenseInput(e) {
    defense = parseFloat(e.target.value) || 0;
  }

  function handleDamageReductionInput(e) {
    damageReduction = parseFloat(e.target.value) || 0;
  }
</script>

<div class="zn-cf-calculator-content">
  <h2>{title}</h2>
  <p>{description}</p>

  <div class="zn-cf-calculator-layout">
    <!-- Left Side - Calculator Inputs -->
    <div class="zn-cf-inputs-section">
      <h3>Damage Calculator</h3>
      <p>Enter your values to calculate damage:</p>
      
      <div class="zn-cf-input-group">
        <label for="attack">Enemy Attack:</label>
        <input 
          type="number" 
          id="attack" 
          bind:value={attack}
          min="1" 
          on:input={handleAttackInput}
          aria-label="Enemy attack value"
          placeholder="Enter enemy attack power"
        />
      </div>

      <div class="zn-cf-input-group">
        <label for="defense">Your Defense:</label>
        <input
          type="number"
          id="defense"
          bind:value={defense}
          min="0"
          step="0.01"
          on:input={handleDefenseInput}
          aria-label="Your defense value"
          placeholder="Enter your defense stat"
        />
      </div>

      <div class="zn-cf-input-group">
        <label for="damageReduction">Damage Reduction (%):</label>
        <input
          type="number"
          id="damageReduction"
          bind:value={damageReduction}
          min="0"
          max="100"
          on:input={handleDamageReductionInput}
          aria-label="Damage reduction percentage"
          placeholder="Enter damage reduction %"
        />
      </div>
    </div>

    <!-- Right Side - Results -->
    <div class="zn-cf-results-container">
      <div class="zn-cf-result" id="result">
        <h3>Calculation Results</h3>
        
        {#if isValidInput}
          <div class="zn-cf-result-item">
            <span class="zn-cf-result-label">Final Damage:</span>
            <span class="zn-cf-final-damage">{finalDamage.toFixed(2)}</span>
          </div>
          
          <div class="zn-cf-result-item">
            <span class="zn-cf-result-label">Damage Taken:</span>
            <span class="zn-cf-percentage">{percentage.toFixed(2)}%</span>
          </div>
          
          {#if calculationSteps}
            <div class="zn-cf-calculation-steps">
              <h4>Step-by-Step Calculation:</h4>
              <div class="zn-cf-calculation-box">
                <pre>{calculationSteps.fullCalculation}</pre>
              </div>
            </div>
          {/if}
        {:else}
          <div class="zn-cf-result-item">
            <span class="zn-cf-result-label">Status:</span>
            <span class="zn-cf-final-damage">Enter valid attack value</span>
          </div>
          
          <div class="zn-cf-result-item">
            <span class="zn-cf-result-label">Damage Taken:</span>
            <span class="zn-cf-percentage">0%</span>
          </div>
          
          <div class="zn-cf-calculation-steps">
            <h4>Calculation:</h4>
            <div class="zn-cf-calculation-box">
              <pre>Please enter valid inputs to see calculation steps</pre>
            </div>
          </div>
        {/if}
      </div>
    </div>
  </div>

  {#if showFormula}
    <div class="zn-cf-formula-box">
      <h3>Zone Nova Damage Formula</h3>
      <p><strong>Final Damage = (Attack × K) / (Defense + K) × (1 - Damage Reduction%)</strong></p>
      <p><em>K = {K} (Defense Coefficient)</em></p>
    </div>
  {/if}
</div>
