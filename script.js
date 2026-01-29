// Listing data
const listings = {
    1: {
        title: "Premium Item #1",
        price: "$29.99",
        oldPrice: "$599.99",
        description: "High quality product in excellent condition. This item has been carefully maintained and is ready for a new home. Perfect for everyday use and built to last.",
        image: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=800&h=600&fit=crop"
    },
    2: {
        title: "Deluxe Item #2",
        price: "$45.00",
        oldPrice: "$4,500.00",
        description: "Brand new, never used. Still in original packaging. This is a fantastic opportunity to get a premium product at a great price.",
        image: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=800&h=600&fit=crop"
    },
    3: {
        title: "Special Item #3",
        price: "$19.99",
        oldPrice: "$666.66",
        description: "Great deal, limited time offer. Don't miss out on this amazing bargain. Item is in good condition and fully functional.",
        image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&h=600&fit=crop"
    },
    4: {
        title: "Exclusive Item #4",
        price: "$75.50",
        oldPrice: "$943.75",
        description: "Premium quality, highly sought after. This rare item is hard to find and in pristine condition. A must-have for collectors.",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=600&fit=crop"
    },
    5: {
        title: "Luxury Item #5",
        price: "$120.00",
        oldPrice: "$6,000.00",
        description: "Top of the line, perfect condition. This luxury item offers unmatched quality and style. Investment-grade product.",
        image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&h=600&fit=crop"
    },
    6: {
        title: "Essential Item #6",
        price: "$35.99",
        oldPrice: "$599.83",
        description: "Must-have item, great value. Versatile and practical, this item will quickly become one of your favorites.",
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=600&fit=crop"
    }
};

// Countdown timer
function startCountdown() {
    let hours = 23, minutes = 59, seconds = 59;
    setInterval(() => {
        seconds--;
        if (seconds < 0) { seconds = 59; minutes--; }
        if (minutes < 0) { minutes = 59; hours--; }
        if (hours < 0) { hours = 23; minutes = 59; seconds = 59; }
        
        const countdownEl = document.getElementById('countdown');
        if (countdownEl) {
            countdownEl.textContent = 
                `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        }
    }, 1000);
}

// Popup countdown
function startPopupCountdown() {
    let minutes = 4, seconds = 59;
    setInterval(() => {
        seconds--;
        if (seconds < 0) { seconds = 59; minutes--; }
        if (minutes < 0) { minutes = 4; seconds = 59; }
        
        const popupCountdownEl = document.getElementById('popup-countdown');
        if (popupCountdownEl) {
            popupCountdownEl.textContent = 
                `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        }
    }, 1000);
}

// Show popup after delay
function showPopup() {
    setTimeout(() => {
        const modal = document.getElementById('popup-modal');
        if (modal) {
            modal.style.display = 'flex';
            startPopupCountdown();
        }
    }, 3000);
}

// Close popup
function closePopup() {
    const modal = document.getElementById('popup-modal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Navigate to listing detail page
function viewListing(id) {
    window.location.href = `listing.html?id=${id}`;
}

// Unlock listing function
function unlockListing(id) {
    alert(`🔓 Listing #${id} unlocked!\n\nYou now have access to exclusive content.`);
}

// Load listing details on detail page
window.addEventListener('DOMContentLoaded', function() {
    startCountdown();
    showPopup();
    
    // Check if we're on the listing detail page
    const urlParams = new URLSearchParams(window.location.search);
    const listingId = urlParams.get('id');
    
    if (listingId && listings[listingId]) {
        const listing = listings[listingId];
        document.getElementById('productTitle').textContent = listing.title;
        document.getElementById('productPrice').textContent = listing.price;
        document.getElementById('productDescription').textContent = listing.description;
        document.getElementById('productImage').src = listing.image;
        document.getElementById('productImage').alt = listing.title;
    }
});

// Place order function
function placeOrder() {
    const quantity = document.getElementById('quantity').value;
    const productTitle = document.getElementById('productTitle').textContent;
    
    alert(`Order placed successfully!\n\nProduct: ${productTitle}\nQuantity: ${quantity}\n\nThank you for your purchase!`);
}
