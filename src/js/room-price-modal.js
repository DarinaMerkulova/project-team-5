// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById('myBtn');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

var submitBtn = document.getElementById('submitBtn');

// Function to open the modal
function openModal() {
  modal.style.display = 'block';
}

// Function to close the modal
function closeModal() {
  modal.style.display = 'none';
}
// When the user clicks on the submit button, close the modal
submitBtn.onclick = function () {
  modal.style.display = 'none';
};

// Close the modal when user clicks outside of it
window.onclick = function (event) {
  if (event.target == modal) {
    closeModal();
  }
};

const fieldSelect = document.getElementById('field-select');
const inputField = document.getElementById('input-field');

fieldSelect.addEventListener('change', function () {
  if (fieldSelect.value === 'option1') {
    inputField.placeholder = '1500/Ніч';
  } else if (fieldSelect.value === 'option2') {
    inputField.placeholder = '1000/Ніч';
  } else if (fieldSelect.value === 'option3') {
    inputField.placeholder = '2000/Ніч';
  }
});

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
