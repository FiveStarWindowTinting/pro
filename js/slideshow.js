// Image Slideshow Logic

/**
 * Initialize the image slideshow functionality
 */
export function initSlideshow() {
  // Array of image URLs - easily update by adding new URLs here
  const imageUrls = [
'https://FiveStarWindowTinting.github.io/pro/images/1.webp',
'https://FiveStarWindowTinting.github.io/pro/images/2.webp',
'https://FiveStarWindowTinting.github.io/pro/images/3.webp',
'https://FiveStarWindowTinting.github.io/pro/images/4.webp',
'https://FiveStarWindowTinting.github.io/pro/images/5.webp',
'https://FiveStarWindowTinting.github.io/pro/images/6.webp',
'https://FiveStarWindowTinting.github.io/pro/images/7.webp',
'https://FiveStarWindowTinting.github.io/pro/images/8.webp',
'https://FiveStarWindowTinting.github.io/pro/images/9.webp',
'https://FiveStarWindowTinting.github.io/pro/images/10.webp',
'https://FiveStarWindowTinting.github.io/pro/images/11.webp',
'https://FiveStarWindowTinting.github.io/pro/images/12.webp',
'https://FiveStarWindowTinting.github.io/pro/images/13.webp',
'https://FiveStarWindowTinting.github.io/pro/images/14.webp',
'https://FiveStarWindowTinting.github.io/pro/images/15.webp',
'https://FiveStarWindowTinting.github.io/pro/images/16.webp',
'https://FiveStarWindowTinting.github.io/pro/images/17.webp',
'https://FiveStarWindowTinting.github.io/pro/images/18.webp',
'https://FiveStarWindowTinting.github.io/pro/images/19.webp',
'https://FiveStarWindowTinting.github.io/pro/images/20.webp',
'https://FiveStarWindowTinting.github.io/pro/images/21.webp',
'https://FiveStarWindowTinting.github.io/pro/images/22.webp',
'https://FiveStarWindowTinting.github.io/pro/images/23.webp',
'https://FiveStarWindowTinting.github.io/pro/images/24.webp',
'https://FiveStarWindowTinting.github.io/pro/images/25.webp',
'https://FiveStarWindowTinting.github.io/pro/images/26.webp',
'https://FiveStarWindowTinting.github.io/pro/images/27.webp',
'https://FiveStarWindowTinting.github.io/pro/images/28.webp',
'https://FiveStarWindowTinting.github.io/pro/images/29.webp',
'https://FiveStarWindowTinting.github.io/pro/images/30.webp',
'https://FiveStarWindowTinting.github.io/pro/images/31.webp',
'https://FiveStarWindowTinting.github.io/pro/images/32.webp',
'https://FiveStarWindowTinting.github.io/pro/images/33.webp',
'https://FiveStarWindowTinting.github.io/pro/images/34.webp',
'https://FiveStarWindowTinting.github.io/pro/images/35.webp',
'https://FiveStarWindowTinting.github.io/pro/images/36.webp',
'https://FiveStarWindowTinting.github.io/pro/images/37.webp',
'https://FiveStarWindowTinting.github.io/pro/images/38.webp',
'https://FiveStarWindowTinting.github.io/pro/images/39.webp',
'https://FiveStarWindowTinting.github.io/pro/images/40.webp',
'https://FiveStarWindowTinting.github.io/pro/images/41.webp',
'https://FiveStarWindowTinting.github.io/pro/images/42.webp',
'https://FiveStarWindowTinting.github.io/pro/images/43.webp',
'https://FiveStarWindowTinting.github.io/pro/images/44.webp',
'https://FiveStarWindowTinting.github.io/pro/images/45.webp',
'https://FiveStarWindowTinting.github.io/pro/images/46.webp',
'https://FiveStarWindowTinting.github.io/pro/images/47.webp',
'https://FiveStarWindowTinting.github.io/pro/images/48.webp',
'https://FiveStarWindowTinting.github.io/pro/images/49.webp',
'https://FiveStarWindowTinting.github.io/pro/images/50.webp',
'https://FiveStarWindowTinting.github.io/pro/images/51.webp',
'https://FiveStarWindowTinting.github.io/pro/images/52.webp',
'https://FiveStarWindowTinting.github.io/pro/images/53.webp',
'https://FiveStarWindowTinting.github.io/pro/images/54.webp',
'https://FiveStarWindowTinting.github.io/pro/images/55.webp',
'https://FiveStarWindowTinting.github.io/pro/images/56.webp',
'https://FiveStarWindowTinting.github.io/pro/images/57.webp',
'https://FiveStarWindowTinting.github.io/pro/images/58.webp',
'https://FiveStarWindowTinting.github.io/pro/images/59.webp',
'https://FiveStarWindowTinting.github.io/pro/images/60.webp',
'https://FiveStarWindowTinting.github.io/pro/images/61.webp',
'https://FiveStarWindowTinting.github.io/pro/images/62.webp',
'https://FiveStarWindowTinting.github.io/pro/images/63.webp',
'https://FiveStarWindowTinting.github.io/pro/images/64.webp',
'https://FiveStarWindowTinting.github.io/pro/images/65.webp',
'https://FiveStarWindowTinting.github.io/pro/images/66.webp',
'https://FiveStarWindowTinting.github.io/pro/images/67.webp',
'https://FiveStarWindowTinting.github.io/pro/images/68.webp',
'https://FiveStarWindowTinting.github.io/pro/images/69.webp',
'https://FiveStarWindowTinting.github.io/pro/images/70.webp',
'https://FiveStarWindowTinting.github.io/pro/images/71.webp',
'https://FiveStarWindowTinting.github.io/pro/images/72.webp',
'https://FiveStarWindowTinting.github.io/pro/images/73.webp',
'https://FiveStarWindowTinting.github.io/pro/images/74.webp',
'https://FiveStarWindowTinting.github.io/pro/images/75.webp',
'https://FiveStarWindowTinting.github.io/pro/images/76.webp',
'https://FiveStarWindowTinting.github.io/pro/images/77.webp',
'https://FiveStarWindowTinting.github.io/pro/images/78.webp',
'https://FiveStarWindowTinting.github.io/pro/images/79.webp',
'https://FiveStarWindowTinting.github.io/pro/images/80.webp',
'https://FiveStarWindowTinting.github.io/pro/images/81.webp',
'https://FiveStarWindowTinting.github.io/pro/images/82.webp',
'https://FiveStarWindowTinting.github.io/pro/images/83.webp',
/**
'https://FiveStarWindowTinting.github.io/pro/images/84.webp',
'https://FiveStarWindowTinting.github.io/pro/images/85.webp',
'https://FiveStarWindowTinting.github.io/pro/images/86.webp',
'https://FiveStarWindowTinting.github.io/pro/images/87.webp',
'https://FiveStarWindowTinting.github.io/pro/images/88.webp',
'https://FiveStarWindowTinting.github.io/pro/images/89.webp',
'https://FiveStarWindowTinting.github.io/pro/images/90.webp',
'https://FiveStarWindowTinting.github.io/pro/images/91.webp',
'https://FiveStarWindowTinting.github.io/pro/images/92.webp',
'https://FiveStarWindowTinting.github.io/pro/images/93.webp',
'https://FiveStarWindowTinting.github.io/pro/images/94.webp',
'https://FiveStarWindowTinting.github.io/pro/images/95.webp',
'https://FiveStarWindowTinting.github.io/pro/images/96.webp',
'https://FiveStarWindowTinting.github.io/pro/images/97.webp',
'https://FiveStarWindowTinting.github.io/pro/images/98.webp',
'https://FiveStarWindowTinting.github.io/pro/images/99.webp',
'https://FiveStarWindowTinting.github.io/pro/images/100.webp',
'https://FiveStarWindowTinting.github.io/pro/images/101.webp',
'https://FiveStarWindowTinting.github.io/pro/images/102.webp',
'https://FiveStarWindowTinting.github.io/pro/images/103.webp',
'https://FiveStarWindowTinting.github.io/pro/images/104.webp',
'https://FiveStarWindowTinting.github.io/pro/images/105.webp',
'https://FiveStarWindowTinting.github.io/pro/images/106.webp',
'https://FiveStarWindowTinting.github.io/pro/images/107.webp',
'https://FiveStarWindowTinting.github.io/pro/images/108.webp',
'https://FiveStarWindowTinting.github.io/pro/images/109.webp',
'https://FiveStarWindowTinting.github.io/pro/images/110.webp',
'https://FiveStarWindowTinting.github.io/pro/images/111.webp',
'https://FiveStarWindowTinting.github.io/pro/images/112.webp',
'https://FiveStarWindowTinting.github.io/pro/images/113.webp',
'https://FiveStarWindowTinting.github.io/pro/images/114.webp',
'https://FiveStarWindowTinting.github.io/pro/images/115.webp',
'https://FiveStarWindowTinting.github.io/pro/images/116.webp',
'https://FiveStarWindowTinting.github.io/pro/images/117.webp',
'https://FiveStarWindowTinting.github.io/pro/images/118.webp',
'https://FiveStarWindowTinting.github.io/pro/images/119.webp',
'https://FiveStarWindowTinting.github.io/pro/images/120.webp',
'https://FiveStarWindowTinting.github.io/pro/images/121.webp',
'https://FiveStarWindowTinting.github.io/pro/images/122.webp',
'https://FiveStarWindowTinting.github.io/pro/images/123.webp',
'https://FiveStarWindowTinting.github.io/pro/images/124.webp',
'https://FiveStarWindowTinting.github.io/pro/images/125.webp',
'https://FiveStarWindowTinting.github.io/pro/images/126.webp',
'https://FiveStarWindowTinting.github.io/pro/images/127.webp',
'https://FiveStarWindowTinting.github.io/pro/images/128.webp',
'https://FiveStarWindowTinting.github.io/pro/images/129.webp',
'https://FiveStarWindowTinting.github.io/pro/images/130.webp',
'https://FiveStarWindowTinting.github.io/pro/images/131.webp',
'https://FiveStarWindowTinting.github.io/pro/images/132.webp',
'https://FiveStarWindowTinting.github.io/pro/images/133.webp',
'https://FiveStarWindowTinting.github.io/pro/images/134.webp',
'https://FiveStarWindowTinting.github.io/pro/images/135.webp



*/
  ];

  const slideshowContainer = document.getElementById('imageSlideshow');
  
  if (!slideshowContainer || imageUrls.length === 0) {
    console.warn('Slideshow container not found or no images provided');
    return;
  }

  let currentSlide = 0;
  let autoPlayTimer = null;
  let slideshowImages = [];

  /**
   * Create the slideshow HTML structure
   */
  function createSlideshowStructure() {
    slideshowContainer.innerHTML = `
      <div class="slideshow-wrapper">
        <div class="slideshow-images" id="slideshowImages"></div>
        <div class="slideshow-controls">
          <button class="slideshow-btn prev-btn" id="prevSlide" aria-label="Previous image">
            <div class="arrow left"></div>
          </button>
          <button class="slideshow-btn next-btn" id="nextSlide" aria-label="Next image">
            <div class="arrow right"></div>
          </button>
        </div>
      </div>
    `;
  }

  /**
   * Create image elements and dots
   */
  async function loadAndCreateImages() {
    const imagesContainer = document.getElementById('slideshowImages');
    
    // Create promises for each image to check if it loads
    const imagePromises = imageUrls.map((url, index) => {
      return new Promise((resolve) => {
        const img = new Image();
        
        img.onload = () => {
          resolve({ url, index, loaded: true });
        };
        
        img.onerror = () => {
          console.warn(`Failed to load image: ${url}`);
          resolve({ url, index, loaded: false });
        };
        
        img.src = url;
      });
    });
    
    // Wait for all images to either load or fail
    const imageResults = await Promise.all(imagePromises);
    
    // Filter out failed images and create elements for successful ones
    const successfulImages = imageResults.filter(result => result.loaded);
    
    if (successfulImages.length === 0) {
      console.warn('No images could be loaded for the slideshow');
      // Hide slideshow container if no images loaded
      slideshowContainer.style.display = 'none';
      return false;
    }
    
    // Create slideshow elements for successfully loaded images
    successfulImages.forEach((imageResult, index) => {
      const imageDiv = document.createElement('div');
      imageDiv.className = `slideshow-image ${index === 0 ? 'active' : ''}`;
      imageDiv.innerHTML = `<img src="${imageResult.url}" alt="Gallery image ${index + 1}" loading="lazy">`;
      imagesContainer.appendChild(imageDiv);
      slideshowImages.push(imageDiv);
    });
    
    return true;
  }

  /**
   * Go to specific slide
   */
  function goToSlide(index) {
    // Reset auto-play timer
    if (autoPlayTimer) {
      clearInterval(autoPlayTimer);
      startAutoPlay();
    }

    // Remove active class from current slide and dot
    slideshowImages[currentSlide].classList.remove('active');

    // Update current slide index
    currentSlide = index;

    // Handle loop
    if (currentSlide < 0) {
      currentSlide = slideshowImages.length - 1;
    } else if (currentSlide >= slideshowImages.length) {
      currentSlide = 0;
    }

    // Add active class to new slide and dot
    slideshowImages[currentSlide].classList.add('active');
  }

  /**
   * Go to next slide
   */
  function nextSlide() {
    goToSlide(currentSlide + 1);
  }

  /**
   * Go to previous slide
   */
  function prevSlide() {
    goToSlide(currentSlide - 1);
  }

  /**
   * Start auto-play functionality
   */
  function startAutoPlay() {
    autoPlayTimer = setInterval(() => {
      nextSlide();
    }, 4000); // Change slide every 4 seconds
  }

  /**
   * Stop auto-play functionality
   */
  function stopAutoPlay() {
    if (autoPlayTimer) {
      clearInterval(autoPlayTimer);
      autoPlayTimer = null;
    }
  }

  /**
   * Initialize the slideshow
   */
  async function init() {
    createSlideshowStructure();
    
    // Load and create images, exit if none loaded successfully
    const imagesLoaded = await loadAndCreateImages();
    if (!imagesLoaded) {
      return;
    }

    // Add event listeners to navigation buttons
    const prevButton = document.getElementById('prevSlide');
    const nextButton = document.getElementById('nextSlide');
    
    if (prevButton && nextButton) {
      prevButton.addEventListener('click', prevSlide);
      nextButton.addEventListener('click', nextSlide);
    }

    // Start auto-play
    startAutoPlay();

    // Pause auto-play when hovering over slideshow
    slideshowContainer.addEventListener('mouseenter', stopAutoPlay);
    
    // Resume auto-play when mouse leaves slideshow
    slideshowContainer.addEventListener('mouseleave', startAutoPlay);

    // Add keyboard navigation
    document.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowLeft') {
        prevSlide();
      } else if (event.key === 'ArrowRight') {
        nextSlide();
      }
    });
  }

  // Initialize the slideshow
  init();
}