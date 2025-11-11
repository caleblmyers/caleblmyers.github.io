<script setup>
const resumeImageUrl = '/cm_resume.png'
const resumePdfUrl = '/cm_resume.pdf'

const downloadResume = () => {
  const link = document.createElement('a')
  link.href = resumePdfUrl
  link.download = 'Caleb_Myers_Resume.pdf'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
</script>

<template>
  <div class="resume-section">
    <div class="resume-actions">
      <button @click="downloadResume" class="resume-btn resume-btn-download">
        <font-awesome-icon :icon="['fas', 'download']" class="icon-md" />
        Download Resume
      </button>
    </div>

    <div class="resume-preview">
      <div class="resume-preview-content">
        <img
          v-if="resumeImageUrl"
          :src="resumeImageUrl"
          alt="Caleb Myers Resume"
          class="resume-image"
          loading="lazy"
        />
        <div v-else class="resume-placeholder">
          <font-awesome-icon :icon="['fas', 'file']" class="resume-placeholder-icon" />
          <p>Resume image not found. Please add your cm_resume.png file to the public folder.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.resume-section {
  max-width: 900px;
  margin: 0 auto;
}

.resume-actions {
  display: flex;
  gap: var(--spacing-sm);
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: var(--spacing-lg);
}

.resume-btn {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: var(--spacing-sm) var(--spacing-lg);
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  color: white;
}

.resume-btn-download {
  background: var(--color-success);
}

.resume-btn-download:hover {
  background: var(--color-success-hover);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(66, 184, 131, 0.4);
}

.resume-preview {
  background: var(--color-bg-primary);
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  animation: slideDown 0.3s ease-out;
}

.resume-preview-content {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: var(--spacing-lg);
  min-height: 600px;
}

.resume-image {
  width: 100%;
  height: auto;
  max-width: 100%;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: block;
}

.resume-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-xxl) var(--spacing-lg);
  color: var(--color-text-secondary);
  text-align: center;
  min-height: 600px;
}

.resume-placeholder-icon {
  width: 64px;
  height: 64px;
  margin-bottom: var(--spacing-sm);
  color: var(--color-text-light);
}

.resume-placeholder p {
  font-size: 1.1rem;
  max-width: 500px;
}

@media (max-width: 768px) {
  .resume-actions {
    flex-direction: column;
  }

  .resume-btn {
    width: 100%;
    justify-content: center;
  }

  .resume-preview-content {
    padding: var(--spacing-sm);
  }

  .resume-image {
    border-radius: 4px;
  }
}
</style>