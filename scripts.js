let currentSlide = 0;
const slides = document.querySelectorAll('#carousel img');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

document.addEventListener('DOMContentLoaded', function() {
    showSlide(currentSlide);

    setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }, 5000); // Troca a cada 5 segundos
});

let index = 0;
const images = document.querySelectorAll(".carousel-images img");
const totalImages = images.length;

document.querySelector(".prev").addEventListener("click", () => {
    index = (index - 1 + totalImages) % totalImages;
    updateCarousel();
});

document.querySelector(".next").addEventListener("click", () => {
    index = (index + 1) % totalImages;
    updateCarousel();
});

function updateCarousel() {
    const offset = -index * 100;
    document.querySelector(".carousel-images").style.transform = `translateX(${offset}%)`;
}

// Contador para adicionar produto
document.querySelectorAll('.counter').forEach(counterDiv => {
    const decrementBtn = counterDiv.querySelector('.decrement');
    const incrementBtn = counterDiv.querySelector('.increment');
    const numberSpan = counterDiv.querySelector('.number');
    let currentValue = 0;

    decrementBtn.addEventListener('click', () => {
        if (currentValue > 0) {
            currentValue--;
            numberSpan.textContent = currentValue;
        }
    });

    incrementBtn.addEventListener('click', () => {
        currentValue++;
        numberSpan.textContent = currentValue;
    });
});

// Carrinho
let cartCount = 0;
const cartCounterElement = document.getElementById('cart-count');

document.querySelectorAll('.counter').forEach(counterDiv => {
    const decrementBtn = counterDiv.querySelector('.decrement');
    const incrementBtn = counterDiv.querySelector('.increment');
    const numberSpan = counterDiv.querySelector('.number');
    let currentValue = 0;

    decrementBtn.addEventListener('click', () => {
        if (currentValue > 0) {
            currentValue--;
            numberSpan.textContent = currentValue;
            updateCart(-1);
        }
    });

    incrementBtn.addEventListener('click', () => {
        currentValue++;
        numberSpan.textContent = currentValue;
        updateCart(1);
    });
});

function updateCart(change) {
    cartCount += change;
    cartCounterElement.textContent = cartCount;
}


 