document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.querySelector('.submit-button');
    const briefInput = document.querySelector('.brief-input');

    submitButton.addEventListener('click', () => {
        const briefContent = briefInput.value;
        if (briefContent.trim() !== '') {
            alert('Brief submitted:\n\n' + briefContent);
            briefInput.value = ''; // Clear the input after submission
        } else {
            alert('Please enter a brief before submitting.');
        }
    });
});
