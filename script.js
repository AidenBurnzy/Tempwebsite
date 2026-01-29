// Listing data
const listings = {
    1: {
        title: "Premium Item #1",
        price: "$29.99",
        description: "High quality product in excellent condition. This item has been carefully maintained and is ready for a new home. Perfect for everyday use and built to last.",
        image: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=800&h=600&fit=crop"
    },
    2: {
        title: "Deluxe Item #2",
        price: "$45.00",
        description: "Brand new, never used. Still in original packaging. This is a fantastic opportunity to get a premium product at a great price.",
        image: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=800&h=600&fit=crop"
    },
    3: {
        title: "Special Item #3",
        price: "$19.99",
        description: "Great deal, limited time offer. Don't miss out on this amazing bargain. Item is in good condition and fully functional.",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27f2?w=800&h=600&fit=crop"
    },
    4: {
        title: "Exclusive Item #4",
        price: "$75.50",
        description: "Premium quality, highly sought after. This rare item is hard to find and in pristine condition. A must-have for collectors.",
        image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2800&h=600&fit=crop"
    },
    5: {
        title: "Luxury Item #5",
        price: "$120.00",
        description: "Top of the line, perfect condition. This luxury item offers unmatched quality and style. Investment-grade product.",
        image: "https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?w=800&h=600&fit=crop"
    },
    6: {
        title: "Essential Item #6",
        price: "$35.99",
        description: "Must-have item, great value. Versatile and practical, this item will quickly become one of your favorites.",
        image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&h=600&fit=crop"
    }
};

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
