// Contact Form Submission Handling
document.querySelector('form').addEventListener('submit', async function (event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    try {
        const response = await fetch(form.action || '/submit-form', {
            method: form.method || 'POST',
            body: formData,
        });

        if (response.ok) {
            document.getElementById('formMessage').innerText = 'Thank you for your message!';
        } else {
            document.getElementById('formMessage').innerText = 'There was an error. Please try again.';
        }
    } catch (error) {
        document.getElementById('formMessage').innerText = 'Network error. Please try again later.';
    }
});

