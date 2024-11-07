document.addEventListener('DOMContentLoaded', function() {
    const detailsList = document.querySelectorAll('.preguntas__item details');
    const searchInput = document.getElementById('faq-search');

    detailsList.forEach(details => {
        details.addEventListener('click', function() {
            detailsList.forEach(otherDetails => {
                if (otherDetails !== details && otherDetails.hasAttribute('open')) {
                    otherDetails.removeAttribute('open');
                }
            });
        });
    });

    searchInput.addEventListener('input', function() {
        const query = searchInput.value.toLowerCase();
        detailsList.forEach(details => {
            const summary = details.querySelector('summary').textContent.toLowerCase();
            const matches = summary.includes(query);
            details.style.display = matches ? '' : 'none';
        });
    });
});
