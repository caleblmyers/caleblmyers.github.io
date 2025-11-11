<script setup>
defineProps({
  project: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="project-card">
    <div class="project-top">
      <div v-if="project.imageUrl" class="project-icon">
        <img :src="project.imageUrl" :alt="project.title" loading="lazy" />
      </div>
      <div class="project-content">
        <div class="project-header">
          <h3 class="project-title">{{ project.title }}</h3>
        </div>
        <div class="project-body">
          <p class="project-description">{{ project.description }}</p>
        </div>
      </div>
    </div>
    <div class="project-technologies">
      <span
        v-for="tech in project.technologies"
        :key="tech"
        class="tech-tag"
      >
        {{ tech }}
      </span>
    </div>
    <div class="project-footer">
      <a
        :href="project.githubUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="project-link"
      >
        <font-awesome-icon :icon="['fab', 'github']" class="icon-sm" />
        View on GitHub
      </a>
      <a
        v-if="project.liveUrl"
        :href="project.liveUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="project-link project-link-live"
      >
        <font-awesome-icon :icon="['fas', 'arrow-up-right-from-square']" class="icon-sm" />
        Live Demo
      </a>
    </div>
  </div>
</template>

<style scoped>
.project-card {
  background: var(--color-bg-primary);
  border-radius: 12px;
  padding: var(--spacing-lg);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}

.project-top {
  display: flex;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-md);
}

.project-icon {
  flex-shrink: 0;
  width: 64px;
  height: 64px;
  border-radius: 12px;
  overflow: hidden;
  background: var(--color-bg-tertiary);
  display: flex;
  align-items: center;
  justify-content: center;
}

.project-icon img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.project-content {
  flex: 1;
  min-width: 0;
}

.project-header {
  margin-bottom: var(--spacing-xs);
}

.project-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--color-text-primary);
  margin: 0;
}

.project-body {
  flex: 1;
}

.project-description {
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin: 0;
}

.project-technologies {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xs);
  margin-bottom: var(--spacing-md);
}

.tech-tag {
  padding: 0.4rem 0.8rem;
  background: var(--color-bg-tertiary);
  border-radius: 20px;
  font-size: 0.875rem;
  color: var(--color-text-primary);
  font-weight: 500;
}

.project-footer {
  display: flex;
  gap: var(--spacing-sm);
  flex-wrap: wrap;
}

.project-link {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: 0.75rem var(--spacing-md);
  background: var(--color-primary);
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.3s;
  flex: 1;
  justify-content: center;
  min-width: 140px;
}

.project-link:hover {
  background: var(--color-primary-hover);
  transform: translateY(-2px);
}

.project-link-live {
  background: var(--color-success);
}

.project-link-live:hover {
  background: var(--color-success-hover);
}
</style>