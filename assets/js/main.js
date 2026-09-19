// Toggle buy information
// Normalize diacritical/ISCII characters for fuzzy matching
function normalize(str) {
    return str
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase();
}

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
    var searchInput = document.getElementById('book-search');
    var searchTerm = searchInput ? normalize(searchInput.value.trim()) : '';
    
    var genreFilter = document.getElementById('genre-filter').value;
    var languageFilter = document.getElementById('language-filter').value;
    
    var authorSelect = document.getElementById('author-filter');
    var translatorSelect = document.getElementById('translator-filter');
    var publisherSelect = document.getElementById('publisher-filter');
    
    var authorFilter = authorSelect ? authorSelect.value : 'all';
    var translatorFilter = translatorSelect ? translatorSelect.value : 'all';
    var publisherFilter = publisherSelect ? publisherSelect.value : 'all';
    
    var grid = document.getElementById('books-grid');
    var countElement = document.getElementById('books-count');
    
    if (!grid) return;
    
    var books = Array.from(grid.querySelectorAll('.book-card'));
    var visibleCount = 0;
    
    books.forEach(function(book) {
        var bookGenres = book.dataset.genres || '';
        var bookLanguages = book.dataset.languages || '';
        var bookAuthor = book.dataset.author || '';
        var bookTranslator = book.dataset.translator || '';
        var bookPublisher = book.dataset.publisher || '';
        
        var genreMatch = genreFilter === 'all' || bookGenres.indexOf(genreFilter) !== -1;
        var languageMatch = languageFilter === 'all' || bookLanguages.indexOf(languageFilter) !== -1;
        var authorMatch = authorFilter === 'all' || bookAuthor.indexOf(authorFilter) !== -1;
        var translatorMatch = translatorFilter === 'all' || bookTranslator.indexOf(translatorFilter) !== -1;
        var publisherMatch = publisherFilter === 'all' || bookPublisher.indexOf(publisherFilter) !== -1;
        
        var searchMatch = true;
        if (searchTerm) {
            var searchable = normalize(
                (book.dataset.title || '') + ' ' +
                (book.dataset.subtitle || '') + ' ' +
                (book.dataset.author || '') + ' ' +
                (book.dataset.translator || '') + ' ' +
                (book.dataset.publisher || '') + ' ' +
                (book.dataset.description || '')
            );
            searchMatch = searchable.indexOf(searchTerm) !== -1;
        }
        
        if (genreMatch && languageMatch && authorMatch && translatorMatch && publisherMatch && searchMatch) {
            book.style.display = '';
            visibleCount++;
        } else {
            book.style.display = 'none';
        }
    });
    
    var totalBooks = books.length;
    if (visibleCount === totalBooks && !searchTerm) {
        countElement.textContent = 'Showing all ' + visibleCount + ' books';
    } else {
        countElement.textContent = 'Showing ' + visibleCount + ' of ' + totalBooks + ' books';
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
                return normalize(a.dataset.title).localeCompare(normalize(b.dataset.title));
            case 'title-desc':
                return normalize(b.dataset.title).localeCompare(normalize(a.dataset.title));
            case 'author':
                return normalize(a.dataset.author || '').localeCompare(normalize(b.dataset.author || ''));
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
        var linkHref = link.getAttribute('href');
        if (linkHref === currentPath || linkHref + '/' === currentPath || currentPath === linkHref + '/') {
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
