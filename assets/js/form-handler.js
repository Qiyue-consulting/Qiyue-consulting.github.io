document.addEventListener('DOMContentLoaded', function () {
    // Attach form submission handler
    const form = document.querySelector('form');
    const messageDiv = document.getElementById('formMessage');

    if (form) {
        form.addEventListener('submit', async function (event) {
            event.preventDefault(); // Prevent default form submission

            const formData = new FormData(form);

            try {
                // Send form data using fetch API
                const response = await fetch(form.action || '/submit-form', {
                    method: form.method || 'POST',
                    body: formData,
                });

                if (response.ok) {
                    messageDiv.innerText = 'Thank you for your message!';
                    messageDiv.style.color = 'green';
                    form.reset(); // Optionally reset the form
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
