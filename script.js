document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.querySelector('.submit-button');
    const inputFields = document.querySelectorAll('.input-field');

    submitButton.addEventListener('click', () => {
        let briefContent = '';
        inputFields.forEach(field => {
            briefContent += field.value + '\n';
        });
        alert('Brief submitted:\n\n' + briefContent);
    });
});
