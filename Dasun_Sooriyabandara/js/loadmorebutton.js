document.getElementById('load-more-btn').addEventListener('click', function() {
    var paragraph = document.getElementById('paragraph-text');
    var button = this;
    if (paragraph.classList.contains('expanded')) {
        paragraph.classList.remove('expanded');
        button.textContent = 'MORE';
        // Scroll back to the top of the paragraph
        paragraph.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
        paragraph.classList.add('expanded');
        button.textContent = 'SHOW LESS';
    }
});
