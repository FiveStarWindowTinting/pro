// Video Landing Page Logic

/**
 * Initialize the video landing page functionality
 */
export function initVideoLanding() {
  const videoLanding = document.getElementById('videoLanding');
  const landingVideo = document.getElementById('landingVideo');
  const soundToggle = document.getElementById('soundToggle');
  const soundOffIcon = document.getElementById('soundOffIcon');
  const soundOnIcon = document.getElementById('soundOnIcon');
  const mainContent = document.getElementById('mainContent');
  
  let hasVideoEnded = false;
  let isMuted = true;
  
  // Start playing the video when page loads
  function startVideo() {
    landingVideo.play().catch(error => {
      console.log('Video autoplay failed:', error);
      // If autoplay fails, show enter site button immediately
      showMainContent();
    });
  }
  
  // Handle video ended event
  landingVideo.addEventListener('ended', () => {
    hasVideoEnded = true;
    showMainContent();
  });
  
  // Handle sound toggle
  soundToggle.addEventListener('click', () => {
    if (isMuted) {
      landingVideo.muted = false;
      soundOffIcon.style.display = 'none';
      soundOnIcon.style.display = 'block';
      isMuted = false;
    } else {
      landingVideo.muted = true;
      soundOffIcon.style.display = 'block';
      soundOnIcon.style.display = 'none';
      isMuted = true;
    }
  });
  
  // Show main content automatically
  function showMainContent() {
    // Fade out video landing
    videoLanding.style.opacity = '0';
    videoLanding.style.transition = 'opacity 1s ease';
    
    setTimeout(() => {
      // Hide video landing
      videoLanding.style.display = 'none';
      
      // Show main content
      mainContent.style.display = 'block';
      
      // Trigger fade in animation for main content
      setTimeout(() => {
        mainContent.classList.add('show');
      }, 50);
    }, 1000);
  }
  
  // Handle video loading and error states
  landingVideo.addEventListener('loadeddata', () => {
    console.log('Video loaded successfully');
  });
  
  landingVideo.addEventListener('error', (e) => {
    console.error('Video loading error:', e);
    // If video fails to load, show main content immediately
    showMainContent();
  });
  
  // Start the video
  startVideo();
  
  // Fallback: Show main content after 30 seconds regardless
  setTimeout(() => {
    if (!hasVideoEnded) {
      showMainContent();
    }
  }, 30000);
}