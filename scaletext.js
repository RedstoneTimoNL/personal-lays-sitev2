function scaleText() {
    const baseWidth = 1920; // Reference screen width
    const screenWidth = window.innerWidth;
    const scaleRatio = screenWidth / baseWidth;

    // Get all target elements
    document.querySelectorAll('h1, h2, h3, p').forEach(el => {
        // Store the original font size once
        if (!el.dataset.originalSize) {
            el.dataset.originalSize = window.getComputedStyle(el).fontSize;
        }
        
        // Apply scaling based on stored size
        const originalSize = parseFloat(el.dataset.originalSize);
        el.style.fontSize = `${originalSize * scaleRatio}px`;
    });
}

// Initial scaling
scaleText();

// Re-scale text on window resize
window.addEventListener('resize', scaleText);