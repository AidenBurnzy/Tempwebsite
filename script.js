// Listing data
const listings = {
    1: {
        title: "Supreme Beach Walker™ Edition",
        price: "$29.99",
        oldPrice: "$5,999.99",
        description: "Female, well cared for. This item has been carefully maintained and is ready for a new home. Perfect for everyday use and built to last.",
        image: "./images/jackfeet.jpg"
    },
    2: {
        title: "UltraFresh Virgin Toes™ Pro",
        price: "$45.00",
        oldPrice: "$45,000.00",
        description: "Brand new, never walked on. Still in original packaging. This is a fantastic opportunity to get a premium product at a great price.",
        image: "https://images.unsplash.com/photo-1595051572626-aecfdafb53f2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmVldHxlbnwwfHwwfHx8MA%3D%3D"
    },
    3: {
        title: "Mystic Sole Collector's Dream",
        price: "$19.99",
        oldPrice: "$6,666.66",
        description: "Great deal, limited time offer. Don't miss out on this amazing bargain. Item is in good condition and fully functional.",
        image: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZlZXR8ZW58MHx8MHx8fDA%3D"
    },
    4: {
        title: "Platinum Heel Dynasty™ VIP",
        price: "$75.50",
        oldPrice: "$94,375.00",
        description: "Premium quality, highly sought after. This rare item is hard to find and in pristine condition. A must-have for collectors.",
        image: "https://plus.unsplash.com/premium_photo-1670444332413-62286ffc3bbd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZlZXR8ZW58MHx8MHx8fDA%3D"
    },
    5: {
        title: "Royal Arch Support Majesty™",
        price: "$120.00",
        oldPrice: "$600,000.00",
        description: "Top of the line, perfect condition. This luxury item offers unmatched quality and style. Investment-grade product.",
        image: "https://images.unsplash.com/photo-1638859460750-181fcc7936a6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZlZXR8ZW58MHx8MHx8fDA%3D"
    },
    6: {
        title: "Turbo Toenail Thunder™ Max",
        price: "$35.99",
        oldPrice: "$59,983.00",
        description: "Must-have item, great value. Versatile and practical, this item will quickly become one of your favorites.",
        image: "https://images.unsplash.com/photo-1593490568167-cfbc070061f8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZlZXR8ZW58MHx8MHx8fDA%3D"
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

// Show popup after delay (only once overall)
function showPopup() {
    // Check if popup has already been shown
    if (localStorage.getItem('popupShown') === 'true') {
        return;
    }
    
    setTimeout(() => {
        const modal = document.getElementById('popup-modal');
        if (modal) {
            modal.style.display = 'flex';
            localStorage.setItem('popupShown', 'true');
            startPopupCountdown();
        }
    }, 3000);
}

// Fake notification messages
const notifications = [
    "Sarah from New York just purchased Supreme Beach Walker™!",
    "Mike from California bought 3 items!",
    "Jessica from Texas just saved $5,000!",
    "127 people are viewing this right now!",
    "Chris from Florida just unlocked MEGA DISCOUNT!",
    "Emma from Illinois purchased Turbo Toenail Thunder™!",
    "Someone from London just made a purchase!",
    "David from Seattle saved 99% on his order!",
    "Only 12 items left at this price!",
    "Anonymous buyer just spent $500!"
];

// Show random notifications
function showNotification() {
    const container = document.getElementById('notification-container');
    if (!container) return;
    
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = notifications[Math.floor(Math.random() * notifications.length)];
    
    container.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 5000);
}

// Show notifications periodically
function startNotifications() {
    setInterval(() => {
        showNotification();
    }, Math.random() * 5000 + 3000); // Random between 3-8 seconds
}

// Show spinning wheel popup
function showSpinWheel() {
    setTimeout(() => {
        const spinPopup = document.getElementById('spin-wheel-popup');
        if (spinPopup) {
            spinPopup.style.display = 'flex';
        }
    }, 10000); // Show after 10 seconds
}

// Close spinning wheel
function closeSpinWheel() {
    const spinPopup = document.getElementById('spin-wheel-popup');
    if (spinPopup) {
        spinPopup.style.display = 'none';
    }
}

// Spin the wheel
function spinWheel() {
    const wheel = document.querySelector('.wheel');
    wheel.classList.add('spinning');
    
    setTimeout(() => {
        wheel.classList.remove('spinning');
        const prizes = ['99% OFF!', '$500 COUPON!', 'FREE SHIPPING!', 'BUY 1 GET 5!', '95% OFF!', 'MYSTERY BOX!'];
        const prize = prizes[Math.floor(Math.random() * prizes.length)];
        alert(`🎉 CONGRATULATIONS! 🎉\n\nYou won: ${prize}`);
        closeSpinWheel();
    }, 3000);
}

// Decrease stock counter
function decreaseStock() {
    const stockCount = document.getElementById('stock-count');
    if (stockCount) {
        setInterval(() => {
            let count = parseInt(stockCount.textContent);
            if (count > 5) {
                count -= Math.floor(Math.random() * 3) + 1;
                stockCount.textContent = count;
            } else {
                count = 47; // Reset
                stockCount.textContent = count;
            }
        }, 8000);
    }
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
    startNotifications();
    showSpinWheel();
    decreaseStock();
    
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
