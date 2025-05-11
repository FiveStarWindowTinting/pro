// Main JavaScript Entry Point
import { initNavigation } from './navigation.js';
import { initGallery } from './gallery.js';
import { initTestimonials } from './testimonials.js';
import { initContactForm } from './contact-form.js';
import { initMap } from './map.js';
import { initAnimations } from './animations.js';

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize all modules
  initNavigation();
  initGallery();
  initTestimonials();
  initContactForm();
  initMap();
  initAnimations();
  
  console.log('Five Star Tinting - Site initialized');
});