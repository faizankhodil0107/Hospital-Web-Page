
        document.addEventListener("DOMContentLoaded", function() {
            
            // --- Get all elements ---
            const reviewList = document.getElementById('review-list');
            
            // Form elements
            const showReviewFormBtn = document.getElementById('show-review-form-btn');
            const reviewFormTitle = document.getElementById('review-form-title');
            const reviewForm = document.getElementById('review-form');
            const closeReviewFormBtn = document.getElementById('close-review-form-btn');

            // Popup elements
            const popupModal = document.getElementById('popup-modal');
            const popupCloseBtn = document.getElementById('popup-close-btn');

            // --- Define Functions ---
            
            // Function to open the review form
            function openForm() {
                showReviewFormBtn.style.display = 'none';
                reviewFormTitle.style.display = 'block';
                reviewForm.style.display = 'block';
            }

            // Function to close the review form
            function closeForm() {
                showReviewFormBtn.style.display = 'inline-block'; // Use inline-block for a button
                reviewFormTitle.style.display = 'none';
                reviewForm.style.display = 'none';
            }

            // Function to show the popup
            function showPopup() {
                popupModal.style.display = 'flex'; // Use flex for centering
                // Trigger the animation
                setTimeout(() => {
                    popupModal.classList.add('show');
                }, 10); // Small delay to ensure transition works
            }

            // Function to hide the popup
            function hidePopup() {
                popupModal.classList.remove('show');
                // Wait for animation to finish before hiding
                setTimeout(() => {
                    popupModal.style.display = 'none'; 
                }, 300); // Must match transition duration
            }

            // --- Add Event Listeners ---

            // Show review form when "Add Review" button is clicked
            showReviewFormBtn.addEventListener('click', openForm);

            // Close review form when "Close" button is clicked
            closeReviewFormBtn.addEventListener('click', closeForm);

            // Handle the form submission
            reviewForm.addEventListener('submit', function(event) {
                event.preventDefault(); // Prevent default submission

                // Get values
                const name = document.getElementById('review-name').value;
                const reviewText = document.getElementById('review-text').value;
                const ratingSelect = document.getElementById('review-rating');
                const ratingText = ratingSelect.options[ratingSelect.selectedIndex].text;

                // 1. Create new review card
                const newReviewCard = document.createElement('div');
                newReviewCard.className = 'review-card';
                newReviewCard.innerHTML = `
                    <div class="stars">${ratingText}</div>
                    <h3>${name}</h3>
                    <p>"${reviewText}"</p>
                `;

                // 2. Add new card to the list
                reviewList.appendChild(newReviewCard);

                // 3. Reset and close the form
                reviewForm.reset();
                closeForm();

                // 4. Show the success popup
                showPopup();
            });

            // Close popup when "Close" button is clicked
            popupCloseBtn.addEventListener('click', hidePopup);

            // Close popup when clicking on the overlay background
            popupModal.addEventListener('click', function(event) {
                // Check if the click was on the overlay itself, not the content
                if (event.target === popupModal) {
                    hidePopup();
                }
            });
            // --- Initial State ---
            // Set the initial state when the page loads
            closeForm();
        });
  