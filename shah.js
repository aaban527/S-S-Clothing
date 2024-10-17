// Array of T-shirt products
const products = [
    {
        name: 'Classic White T-shirt',
        price: 'RS 700 With shipping only in karachi',
        sizes: ['S', 'M', 'L'], // Sizes array
        image: 'https://www.kayazar.com/images/product_gallery/1647383044_kayazar-TShirt-What-Other-Think-None-Business-Army-Green.webp'
    },
    {
        name: 'Black Polo Shirt',
        price: 'RS 700 With shipping only in karachi',
        sizes: ['S', 'M', 'L'], // Sizes array
        image: 'https://www.kayazar.com/images/product_gallery/1652728809_one-day-you-realize-001-Kayazar-T-shirt-Black.webp'
    },
    {
        name: 'Graphic T-shirt',
        price: 'RS 700 With shipping only in karachi',
        sizes: ['S', 'M', 'L'], // Sizes array
        image: 'https://i5.walmartimages.com/seo/MC1R-I-Am-The-2-Percent-Funny-Redhead-T-Shirt_60f79407-d97b-4c4d-9e0a-3203af2459da.fc572cd49678df5571dcadd509d5c21f.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF'
    },
    {
        name: 'Blue V-Neck T-shirt',
        price: 'RS 700 With shipping only in karachi',
        sizes: ['S', 'M', 'L'], // Sizes array
        image: 'https://www.swagshirts99.com/wp-content/uploads/2019/07/team-super-black-tshirt.jpg'
    },
    {
        name: 'Red Crew Neck T-shirt',
        price: 'RS 700 With shipping only in karachi',
        sizes: ['S', 'M', 'L'], // Sizes array
        image: 'https://5.imimg.com/data5/SELLER/Default/2024/1/381637588/TG/EH/TF/60454813/13-500x500.jpg'
    },
    {
        name: 'Green Stripe T-shirt',
        price: 'RS 700 With shipping only in karachi',
        sizes: ['S', 'M', 'L'], // Sizes array
        image: 'https://images-eu.ssl-images-amazon.com/images/I/71JDa+YT92L._AC_SR462,693_.jpg'
    }
];

// Function to display products on the page
function displayProducts() {
    const productGrid = document.getElementById('product-grid');
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImage = document.createElement('img');
        productImage.src = product.image;
        productImage.alt = product.name;
        productImage.onclick = () => openModal(product.image);

        const productName = document.createElement('h4');
        productName.textContent = product.name;

        const productPrice = document.createElement('p');
        productPrice.textContent = product.price;

        const sizeLabel = document.createElement('p');
        sizeLabel.classList.add('product-sizes');
        sizeLabel.textContent = 'Sizes: ' + product.sizes.join(', ');

        productCard.appendChild(productImage);
        productCard.appendChild(productName);
        productCard.appendChild(productPrice);
        productCard.appendChild(sizeLabel);
        productGrid.appendChild(productCard);
    });
}

// Function to open the zoom modal
function openModal(imageSrc) {
    const modal = document.getElementById('zoomModal');
    const zoomedImage = document.getElementById('zoomedImage');
    modal.style.display = 'block';
    zoomedImage.src = imageSrc;
}

// Function to close the zoom modal
function closeModal() {
    const modal = document.getElementById('zoomModal');
    modal.style.display = 'none';
}

// Event listener for closing the modal when clicking the close button
document.querySelector('.close').onclick = closeModal;

// Event listener for closing the modal when clicking outside the image
window.onclick = function(event) {
    const modal = document.getElementById('zoomModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Call the displayProducts function to render products on page load
displayProducts();
