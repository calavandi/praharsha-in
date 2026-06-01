// Toggle buy information
function toggleBuyInfo() {
    const buyInfo = document.getElementById('buy-info');
    const btn = document.querySelector('.buy-toggle-btn');
    
    if (buyInfo.style.display === 'none') {
        buyInfo.style.display = 'block';
        btn.innerHTML = '<i class="fas fa-times"></i> Close Purchase Information';
    } else {
        buyInfo.style.display = 'none';
        btn.innerHTML = '<i class="fas fa-shopping-cart"></i> How to Buy This Book';
    }
}

// Book filtering functionality
function filterBooks() {
    var genreFilter = document.getElementById('genre-filter').value;
    var languageFilter = document.getElementById('language-filter').value;
    var grid = document.getElementById('books-grid');
    var countElement = document.getElementById('books-count');
    
    if (!grid) return;
    
    var books = Array.from(grid.querySelectorAll('.book-card'));
    var visibleCount = 0;
    
    books.forEach(function(book) {
        var bookGenres = book.dataset.genres || '';
        var bookLanguages = book.dataset.languages || '';
        
        var genreMatch = genreFilter === 'all' || bookGenres.indexOf(genreFilter) !== -1;
        var languageMatch = languageFilter === 'all' || bookLanguages.indexOf(languageFilter) !== -1;
        
        if (genreMatch && languageMatch) {
            book.style.display = '';
            visibleCount++;
        } else {
            book.style.display = 'none';
        }
    });
    
    if (genreFilter === 'all' && languageFilter === 'all') {
        countElement.textContent = 'Showing all ' + visibleCount + ' books';
    } else {
        var filters = [];
        if (genreFilter !== 'all') filters.push(genreFilter);
        if (languageFilter !== 'all') filters.push(languageFilter);
        countElement.textContent = 'Showing ' + visibleCount + ' ' + filters.join(' & ') + ' books';
    }
}

// Book sorting functionality
function sortBooks(sortType) {
    var grid = document.getElementById('books-grid');
    if (!grid) return;
    
    var books = Array.from(grid.querySelectorAll('.book-card'));
    
    books.sort(function(a, b) {
        switch(sortType) {
            case 'title':
                return a.dataset.title.localeCompare(b.dataset.title);
            case 'title-desc':
                return b.dataset.title.localeCompare(a.dataset.title);
            case 'author':
                return (a.dataset.author || '').localeCompare(b.dataset.author || '');
            case 'year':
                return parseInt(b.dataset.year) - parseInt(a.dataset.year);
            case 'year-old':
                return parseInt(a.dataset.year) - parseInt(b.dataset.year);
            case 'cost-low':
                return parseFloat(a.dataset.cost) - parseFloat(b.dataset.cost);
            case 'cost-high':
                return parseFloat(b.dataset.cost) - parseFloat(a.dataset.cost);
            default:
                return 0;
        }
    });
    
    books.forEach(function(book) { grid.appendChild(book); });
}

// Mobile menu toggle
function toggleMobileMenu() {
    var sidebar = document.getElementById('sidebar');
    var toggle = document.querySelector('.mobile-menu-toggle');
    
    sidebar.classList.toggle('active');
    toggle.classList.toggle('active');
}

// Close mobile menu when clicking a nav link
document.addEventListener('DOMContentLoaded', function() {
    // Highlight active nav link
    var currentPath = window.location.pathname;
    document.querySelectorAll('.nav-link').forEach(function(link) {
        if (link.getAttribute('href') === currentPath || 
            (currentPath.indexOf(link.getAttribute('href')) !== -1 && link.getAttribute('href') !== '/')) {
            link.style.color = 'var(--color-accent)';
            link.style.borderBottomColor = 'var(--color-accent)';
        }
        
        // Close mobile menu on nav click
        link.addEventListener('click', function() {
            var sidebar = document.getElementById('sidebar');
            var toggle = document.querySelector('.mobile-menu-toggle');
            
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('active');
                toggle.classList.remove('active');
            }
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        var sidebar = document.getElementById('sidebar');
        var toggle = document.querySelector('.mobile-menu-toggle');
        
        if (window.innerWidth <= 768 && 
            sidebar.classList.contains('active') && 
            !sidebar.contains(event.target) && 
            !toggle.contains(event.target)) {
            sidebar.classList.remove('active');
            toggle.classList.remove('active');
        }
    });
});
