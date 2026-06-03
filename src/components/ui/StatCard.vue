<template>
  <div class="stat-card" :class="{ 'stat-card--light': light }">
    <span class="stat-card__icon">{{ icon }}</span>
    <div class="stat-card__value">{{ displayValue }}{{ suffix }}</div>
    <div class="stat-card__label">{{ label }}</div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'

const props = defineProps({
  icon: { type: String, default: '📊' },
  value: { type: Number, default: 0 },
  label: { type: String, default: '' },
  suffix: { type: String, default: '+' },
  light: { type: Boolean, default: false }
})

const displayValue = ref(0)

function animateCount() {
  const target = props.value
  const duration = 2000
  const startTime = performance.now()

  function update(currentTime) {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3)
    displayValue.value = Math.floor(eased * target)

    if (progress < 1) {
      requestAnimationFrame(update)
    }
  }

  requestAnimationFrame(update)
}

onMounted(() => {
  animateCount()
})

watch(() => props.value, () => {
  animateCount()
})
</script>

<style scoped>
.stat-card {
  text-align: center;
  padding: var(--space-xl) var(--space-lg);
}

.stat-card__icon {
  font-size: 2.5rem;
  display: block;
  margin-bottom: var(--space-sm);
}

.stat-card__value {
  font-family: var(--font-heading);
  font-size: var(--font-size-4xl);
  font-weight: var(--font-weight-extrabold);
  color: var(--color-primary);
  line-height: 1;
  margin-bottom: var(--space-xs);
}

.stat-card--light .stat-card__value {
  color: white;
}

.stat-card__label {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  font-weight: var(--font-weight-medium);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.stat-card--light .stat-card__label {
  color: rgba(255, 255, 255, 0.7);
}
</style>
