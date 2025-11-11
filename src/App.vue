<script setup>
import { defineAsyncComponent } from 'vue'

// Lazy load components for better initial load performance
const ProjectCard = defineAsyncComponent(() => import('./components/ProjectCard.vue'))
const ResumeSection = defineAsyncComponent(() => import('./components/ResumeSection.vue'))

const projects = [
  {
    id: 'movie-night-picker',
    title: 'Movie Night Picker',
    description: 'Find the perfect movie using intelligent suggestions and random discovery. Save your favorites, rate and review movies, and organize them into collections.',
    technologies: ['React', 'Node.js', 'GraphQL', 'Apollo Client', 'TMDB API'],
    githubUrl: 'https://github.com/caleblmyers/movie-night-picker',
    liveUrl: 'https://movie-night-picker-ochre.vercel.app/',
    imageUrl: '/mnp.png'
  },
  {
    id: 'spotime',
    title: 'SpotiMe',
    description: 'Visualize your Spotify listening statistics. Discover your top artists, tracks, and genre preferences with interactive charts and detailed analytics.',
    technologies: ['Vue.js', 'Node.js', 'Spotify API'],
    githubUrl: 'https://github.com/caleblmyers/spotime',
    liveUrl: 'https://spoti-me.vercel.app/',
    imageUrl: 'spotime.png'
  }
]

const socialLinks = {
  github: 'https://github.com/caleblmyers',
  linkedin: 'https://www.linkedin.com/in/caleb-myers/'
}
</script>

<template>
  <div class="portfolio">
    <!-- Navigation -->
    <nav class="nav">
      <div class="nav-container">
        <div class="nav-logo">Caleb Myers</div>
        <div class="nav-links">
          <a href="#projects" class="nav-link">Projects</a>
          <a href="#resume" class="nav-link">Resume</a>
          <a href="#contact" class="nav-link">Contact</a>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1 class="hero-title">Caleb Myers</h1>
        <p class="hero-subtitle">Full Stack Developer</p>
        <p class="hero-description">
          Building modern web applications with React, Vue.js, and cutting-edge technologies.
        </p>
        <div class="hero-social">
          <a :href="socialLinks.github" target="_blank" rel="noopener noreferrer" class="social-link">
            <font-awesome-icon :icon="['fab', 'github']" class="icon-md" />
            GitHub
          </a>
          <a :href="socialLinks.linkedin" target="_blank" rel="noopener noreferrer" class="social-link">
            <font-awesome-icon :icon="['fab', 'linkedin']" class="icon-md" />
            LinkedIn
          </a>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="projects">
      <div class="container">
        <h2 class="section-title">Featured Projects</h2>
        <div class="projects-grid">
          <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
        </div>
      </div>
    </section>

    <!-- Resume Section -->
    <section id="resume" class="resume">
      <div class="container">
        <h2 class="section-title">Resume</h2>
        <ResumeSection />
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact">
      <div class="container">
        <h2 class="section-title">Get In Touch</h2>
        <p class="contact-text">
          I'm always open to discussing new opportunities and interesting projects.
        </p>
        <div class="contact-links">
          <a :href="socialLinks.github" target="_blank" rel="noopener noreferrer" class="contact-link">
            <font-awesome-icon :icon="['fab', 'github']" class="icon-lg" />
            GitHub
          </a>
          <a :href="socialLinks.linkedin" target="_blank" rel="noopener noreferrer" class="contact-link">
            <font-awesome-icon :icon="['fab', 'linkedin']" class="icon-lg" />
            LinkedIn
          </a>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <p>&copy; {{ new Date().getFullYear() }} Caleb Myers. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.portfolio {
  min-height: 100vh;
}

/* Navigation */
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--spacing-sm) var(--spacing-lg);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-text-primary);
}

.nav-links {
  display: flex;
  gap: var(--spacing-lg);
}

.nav-link {
  color: var(--color-text-primary);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
}

.nav-link:hover {
  color: var(--color-primary);
}

/* Hero Section */
.hero {
  padding: 120px var(--spacing-lg) 80px;
  text-align: center;
  background: linear-gradient(135deg, var(--color-gradient-start) 0%, var(--color-gradient-end) 100%);
  color: white;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: var(--spacing-sm);
  animation: fadeInUp 0.8s;
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: var(--spacing-sm);
  opacity: 0.9;
  animation: fadeInUp 0.8s 0.2s both;
}

.hero-description {
  font-size: 1.2rem;
  margin-bottom: var(--spacing-lg);
  opacity: 0.85;
  animation: fadeInUp 0.8s 0.4s both;
}

.hero-social {
  display: flex;
  gap: var(--spacing-md);
  justify-content: center;
  animation: fadeInUp 0.8s 0.6s both;
}

.social-link {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: 0.75rem var(--spacing-md);
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50px;
  color: white;
  text-decoration: none;
  transition: all 0.3s;
  backdrop-filter: blur(10px);
}

.social-link:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}

/* Sections */
.projects,
.resume,
.contact {
  padding: 80px var(--spacing-lg);
}

.projects {
  background: var(--color-bg-secondary);
}

.resume {
  background: var(--color-bg-primary);
}

.contact {
  background: var(--color-bg-secondary);
}

/* Projects Grid */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--spacing-lg);
}

/* Contact Section */
.contact-text {
  text-align: center;
  font-size: 1.2rem;
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-lg);
}

.contact-links {
  display: flex;
  gap: var(--spacing-lg);
  justify-content: center;
  flex-wrap: wrap;
}

.contact-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: var(--spacing-sm) var(--spacing-lg);
  background: var(--color-bg-primary);
  border-radius: 8px;
  color: var(--color-text-primary);
  text-decoration: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
}

.contact-link:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  color: var(--color-primary);
}

/* Footer */
.footer {
  background: var(--color-bg-dark);
  color: white;
  padding: var(--spacing-lg);
  text-align: center;
}

/* Responsive */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.2rem;
  }

  .nav-links {
    gap: var(--spacing-sm);
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }

  .hero-social {
    flex-direction: column;
    align-items: center;
  }
}
</style>