function handleFormSubmission(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });
    console.log('Form submitted:', data);
    // You can add code here to send the form data to a server or perform other actions
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('footer form');
    if (form) {
        form.addEventListener('submit', handleFormSubmission);
    }
});
