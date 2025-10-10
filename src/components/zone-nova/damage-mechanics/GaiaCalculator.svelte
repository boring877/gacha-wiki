<script>
  // Props
  export const title = "Gaia HP Calculator";
  export const description = "Calculate Gaia's HP manipulation effects and healing in real-time:";
  export let initialValues = {
    gaiaHP: 10548,
    allyHP: 8000
  };
  export let onUpdate = () => {};
  export let state = initialValues;

  // Reactive state
  $: gaiaHP = state.gaiaHP || initialValues.gaiaHP;
  $: allyHP = state.allyHP || initialValues.allyHP;
  $: motherlyLove = state.motherlyLove !== undefined ? state.motherlyLove : true;
  $: ultimate = state.ultimate !== undefined ? state.ultimate : true;
  $: awakeningVI = state.awakeningVI !== undefined ? state.awakeningVI : false;
  $: teamSkill = state.teamSkill !== undefined ? state.teamSkill : false;

  // Constants
  const MOTHERLY_LOVE_PERCENT = 0.60;
  const ULTIMATE_PERCENT = 0.60;
  const AWAKENING_BONUS_PERCENT = 0.50;
  const EMERGENCY_HEAL_PERCENT = 0.12;
  const CAP_PERCENT = 0.15;

  // Reactive calculations
  $: gaiaFinalHP = teamSkill ? Math.floor(gaiaHP * 1.10) : gaiaHP;
  $: capAmount = Math.floor(gaiaFinalHP * CAP_PERCENT);
  
  $: motherlyLoveIncrease = motherlyLove ? Math.min(Math.floor(allyHP * MOTHERLY_LOVE_PERCENT), capAmount) : 0;
  $: ultimateIncrease = ultimate ? Math.min(Math.floor(allyHP * ULTIMATE_PERCENT), capAmount) : 0;
  
  // Awakening VI only provides bonus if base increase doesn't hit cap
  $: baseIncrease = Math.min(Math.floor(allyHP * MOTHERLY_LOVE_PERCENT), capAmount);
  $: awakeningIncrease = awakeningVI && baseIncrease < capAmount ? 
    Math.min(Math.floor(allyHP * AWAKENING_BONUS_PERCENT), capAmount - baseIncrease) : 0;
  
  $: totalHPIncrease = motherlyLoveIncrease + ultimateIncrease + awakeningIncrease;
  $: allyFinalHP = allyHP + totalHPIncrease;
  $: emergencyHeal = Math.floor(gaiaFinalHP * EMERGENCY_HEAL_PERCENT);
  
  // Team skill healing bonus
  $: healingStacks = teamSkill ? Math.floor(gaiaFinalHP / 5000) : 0;
  $: healingBonus = Math.min(healingStacks * 0.05, 0.30); // Max 30%
  $: finalEmergencyHeal = Math.floor(emergencyHeal * (1 + healingBonus));
  
  // Percentage calculations
  $: hpIncreasePercentage = allyHP > 0 ? (totalHPIncrease / allyHP) * 100 : 0;
  $: isCapped = motherlyLoveIncrease < Math.floor(allyHP * MOTHERLY_LOVE_PERCENT) || 
                   ultimateIncrease < Math.floor(allyHP * ULTIMATE_PERCENT);
  
  // Emit state changes to parent
  $: {
    const currentState = {
      gaiaHP,
      allyHP,
      motherlyLove,
      ultimate,
      awakeningVI,
      teamSkill
    };
    onUpdate(currentState);
  }
  
  // Reactive calculation steps for display
  $: calculationSteps = {
    gaiaFinal: teamSkill ? `${gaiaHP} × 1.10 = ${gaiaFinalHP}` : `${gaiaHP} (no team skill)`,
    motherlyLove: motherlyLove ? 
      `min(${allyHP} × ${MOTHERLY_LOVE_PERCENT}, ${gaiaFinalHP} × ${CAP_PERCENT}) = min(${Math.floor(allyHP * MOTHERLY_LOVE_PERCENT)}, ${capAmount}) = ${motherlyLoveIncrease}` : 
      'Not active',
    ultimate: ultimate ? 
      `min(${allyHP} × ${ULTIMATE_PERCENT}, ${gaiaFinalHP} × ${CAP_PERCENT}) = min(${Math.floor(allyHP * ULTIMATE_PERCENT)}, ${capAmount}) = ${ultimateIncrease}` : 
      'Not active',
    awakening: awakeningVI && baseIncrease < capAmount ? 
      `min(${allyHP} × ${AWAKENING_BONUS_PERCENT}, ${capAmount - baseIncrease}) = ${awakeningIncrease}` : 
      (awakeningVI ? 'No benefit (cap reached)' : 'Not active'),
    totalIncrease: `${motherlyLoveIncrease} + ${ultimateIncrease} + ${awakeningIncrease} = ${totalHPIncrease}`,
    emergencyHeal: `${gaiaFinalHP} × ${EMERGENCY_HEAL_PERCENT} = ${emergencyHeal}`,
    healingBonus: teamSkill ? 
      `${healingStacks} stacks × 5% = ${(healingBonus * 100).toFixed(0)}% bonus` : 
      'No team skill',
    finalHeal: `${emergencyHeal} × ${((1 + healingBonus).toFixed(2))} = ${finalEmergencyHeal}`
  };

  // Input handlers
  function handleGaiaHPInput(e) {
    const newGaiaHP = parseInt(e.target.value) || 0;
    state = { ...state, gaiaHP: newGaiaHP };
    onUpdate(state);
  }

  function handleAllyHPInput(e) {
    const newAllyHP = parseInt(e.target.value) || 0;
    state = { ...state, allyHP: newAllyHP };
    onUpdate(state);
  }
  
  // Toggle handlers
  function toggleMotherlyLove() {
    state = { ...state, motherlyLove: !state.motherlyLove };
    onUpdate(state);
  }
  
  function toggleUltimate() {
    state = { ...state, ultimate: !state.ultimate };
    onUpdate(state);
  }
  
  function toggleAwakeningVI() {
    state = { ...state, awakeningVI: !state.awakeningVI };
    onUpdate(state);
  }
  
  function toggleTeamSkill() {
    state = { ...state, teamSkill: !state.teamSkill };
    onUpdate(state);
  }
</script>

<section class="zn-cf-calculator">
  <h3>Gaia Setup</h3>
  <p>Configure Gaia's HP and abilities:</p>
    
  <div class="zn-cf-input-group">
    <label for="gaiaHP">Gaia's Base HP:</label>
    <input 
      type="number" 
      id="gaiaHP" 
      value={gaiaHP}
      min="1" 
      on:input={handleGaiaHPInput}
      aria-label="Gaia's base HP"
      placeholder="Enter Gaia's base HP"
    />
  </div>

  <div class="zn-cf-input-group">
    <label for="allyHP">Ally's Base HP:</label>
    <input
      type="number"
      id="allyHP"
      value={allyHP}
      min="1"
      on:input={handleAllyHPInput}
      aria-label="Ally's base HP"
      placeholder="Enter ally's base HP"
    />
  </div>

  <h4>Active Abilities:</h4>
  <div class="ability-toggles">
    <label class="ability-toggle">
      <input 
        type="checkbox" 
        checked={motherlyLove}
        on:change={toggleMotherlyLove}
      />
      <div class="ability-content">
        <span class="ability-name">Motherly Love</span>
        <span class="ability-desc">+60% HP increase</span>
      </div>
    </label>
    
    <label class="ability-toggle">
      <input 
        type="checkbox" 
        checked={ultimate}
        on:change={toggleUltimate}
      />
      <div class="ability-content">
        <span class="ability-name">Ultimate</span>
        <span class="ability-desc">+60% HP increase</span>
      </div>
    </label>
    
    <label class="ability-toggle">
      <input 
        type="checkbox" 
        checked={awakeningVI}
        on:change={toggleAwakeningVI}
      />
      <div class="ability-content">
        <span class="ability-name">Awakening VI</span>
        <span class="ability-desc">+50% bonus HP</span>
      </div>
    </label>
    
    <label class="ability-toggle">
      <input 
        type="checkbox" 
        checked={teamSkill}
        on:change={toggleTeamSkill}
      />
      <div class="ability-content">
        <span class="ability-name">Team Skill</span>
        <span class="ability-desc">+10% HP, +healing</span>
      </div>
    </label>
  </div>

  <h3>Calculation Results</h3>
  
  <div class="zn-cf-result-item">
    <span class="zn-cf-result-label">Gaia Final HP:</span>
    <span class="zn-cf-final-damage">{gaiaFinalHP.toLocaleString()}</span>
  </div>
  
  <div class="zn-cf-result-item">
    <span class="zn-cf-result-label">Ally Final HP:</span>
    <span class="zn-cf-final-damage">{allyFinalHP.toLocaleString()}</span>
  </div>
  
  <div class="zn-cf-result-item">
    <span class="zn-cf-result-label">HP Increase:</span>
    <span class="zn-cf-percentage">+{totalHPIncrease.toLocaleString()} (+{hpIncreasePercentage.toFixed(1)}%)</span>
  </div>
  
  <div class="zn-cf-result-item">
    <span class="zn-cf-result-label">Emergency Heal:</span>
    <span class="zn-cf-percentage">{finalEmergencyHeal.toLocaleString()}</span>
  </div>
  
  {#if teamSkill}
    <div class="zn-cf-result-item">
      <span class="zn-cf-result-label">Healing Bonus:</span>
      <span class="zn-cf-percentage">+{(healingBonus * 100).toFixed(0)}%</span>
    </div>
  {/if}
  
  {#if isCapped}
    <div class="cap-warning">
      <span class="cap-text">15% cap active - total HP increase capped at 15% of Gaia's HP</span>
    </div>
  {/if}
  
  <h4>Step-by-Step Calculation:</h4>
  <div class="zn-cf-calculation-box">
    <div class="calc-step">
      <div class="step-title">Gaia Final HP</div>
      <div class="step-calc">{calculationSteps.gaiaFinal}</div>
    </div>
    
    <div class="calc-step">
      <div class="step-title">Motherly Love</div>
      <div class="step-calc">{calculationSteps.motherlyLove}</div>
    </div>
    
    <div class="calc-step">
      <div class="step-title">Ultimate</div>
      <div class="step-calc">{calculationSteps.ultimate}</div>
    </div>
    
    <div class="calc-step">
      <div class="step-title">Awakening VI</div>
      <div class="step-calc">{calculationSteps.awakening}</div>
    </div>
    
    <div class="calc-step">
      <div class="step-title">Total HP Increase</div>
      <div class="step-calc">{calculationSteps.totalIncrease}</div>
    </div>
    
    <div class="calc-step">
      <div class="step-title">Emergency Heal</div>
      <div class="step-calc">{calculationSteps.emergencyHeal}</div>
    </div>
    
    <div class="calc-step">
      <div class="step-title">Healing Bonus</div>
      <div class="step-calc">{calculationSteps.healingBonus}</div>
    </div>
    
    <div class="final-result">
      Total HP Increase: {totalHPIncrease.toLocaleString()} (capped at 15% of Gaia's HP)<br>
      Emergency Healing: {finalEmergencyHeal.toLocaleString()}
    </div>
  </div>
  
</section>
