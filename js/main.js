// Main JavaScript Entry Point
import { initNavigation } from './navigation.js';
import { initGallery } from './gallery.js';
import { initTestimonials } from './testimonials.js';
import { initContactForm } from './contact-form.js';
import { initMap } from './map.js';
import { initAnimations } from './animations.js';
import { initTinting } from './tinting.js';
import { initVideoLanding } from './video-landing.js';
import { initSlideshow } from './slideshow.js';

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize video landing page first
  initVideoLanding();
  
  // Initialize all modules
  initNavigation();
  initGallery();
  // initTestimonials(); // Disabled to remove errors
  initContactForm();
  initMap();
  initAnimations();
  initTinting();
  initSlideshow();
  
  console.log('Five Star Tinting - Site initialized');
});