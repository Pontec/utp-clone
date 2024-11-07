document.addEventListener('DOMContentLoaded', function() {
    const detailsList = document.querySelectorAll('.estandares details');

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

document.addEventListener('DOMContentLoaded', function() {
    const summaryList = document.querySelectorAll('.estandares summary');

    summaryList.forEach(summary => {
        summary.addEventListener('click', function() {
            // Remover clase 'summary-bold' de todos los elementos summary
            summaryList.forEach(otherSummary => {
                otherSummary.classList.remove('summary-bold');
            });
            // Agregar clase 'summary-bold' al summary clickeado
            summary.classList.add('summary-bold');
        });
    });
});
