document.addEventListener('DOMContentLoaded', function() {
    const detailsList = document.querySelectorAll('details');

    detailsList.forEach(details => {
        details.addEventListener('click', function() {
            detailsList.forEach(otherDetails => {
                if (otherDetails !== details && otherDetails.hasAttribute('open')) {
                    otherDetails.removeAttribute('open');
                }
            });
        });
    });
});