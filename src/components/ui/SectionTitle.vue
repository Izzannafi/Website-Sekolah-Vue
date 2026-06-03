<template>
  <div class="section-title" :class="{ 'section-title--center': center, 'section-title--light': light }">
    <span v-if="badge" class="section-title__badge badge badge--primary">{{ badge }}</span>
    <h2 class="section-title__heading">
      <slot>{{ title }}</slot>
    </h2>
    <p v-if="subtitle" class="section-title__subtitle">{{ subtitle }}</p>
    <div class="section-title__line"></div>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, default: '' },
  subtitle: { type: String, default: '' },
  badge: { type: String, default: '' },
  center: { type: Boolean, default: false },
  light: { type: Boolean, default: false }
})
</script>

<style scoped>
.section-title {
  margin-bottom: var(--space-2xl);
}

.section-title--center {
  text-align: center;
}

.section-title--center .section-title__line {
  margin-left: auto;
  margin-right: auto;
}

.section-title--light .section-title__heading {
  color: white;
}

.section-title--light .section-title__subtitle {
  color: rgba(255, 255, 255, 0.7);
}

.section-title--light .section-title__line {
  background: linear-gradient(90deg, var(--color-accent), transparent);
}

.section-title__badge {
  margin-bottom: var(--space-sm);
}

.section-title__heading {
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
  margin-bottom: var(--space-sm);
}

.section-title__subtitle {
  font-size: var(--font-size-lg);
  color: var(--color-text-light);
  max-width: 600px;
  line-height: var(--line-height-relaxed);
}

.section-title--center .section-title__subtitle {
  margin-left: auto;
  margin-right: auto;
}

.section-title__line {
  width: 60px;
  height: 4px;
  background: linear-gradient(90deg, var(--color-primary), var(--color-primary-light));
  border-radius: var(--radius-full);
  margin-top: var(--space-md);
}
</style>
