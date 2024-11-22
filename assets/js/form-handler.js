document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const messageDiv = document.getElementById('formMessage');

    if (form) {
        form.addEventListener('submit', async function (event) {
            event.preventDefault();

            const formData = new FormData(form);

            try {
                const response = await fetch(form.action || '/submit-form', {
                    method: form.method || 'POST',
                    body: formData,
                });

                if (response.ok) {
                    // Success message
                    messageDiv.innerText = 'Thank you for contacting us. We will get in touch with you as soon as possible.';
                    messageDiv.style.color = 'green';
                    form.reset();
                } else {
                    messageDiv.innerText = 'There was an error. Please try again.';
                    messageDiv.style.color = 'red';
                }
            } catch (error) {
                messageDiv.innerText = 'Network error. Please try again later.';
                messageDiv.style.color = 'red';
            }
        });
    }
});
