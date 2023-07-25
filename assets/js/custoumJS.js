document.addEventListener('DOMContentLoaded', function () {
  var themeToggle = document.getElementById('theme-toggle');
  var modeLabel = document.getElementById('mode');
  var body = document.body;

  function setThemeText() {
    if (themeToggle.checked) {
      modeLabel.textContent = 'DARK';
    } else {
      modeLabel.textContent = 'LIGHT';
    }
  }



  themeToggle.addEventListener('change', function () {
    setThemeText();

    if (themeToggle.checked) {
      body.classList.add('dark-theme');
    } else {
      body.classList.remove('dark-theme');
    }
  });

  setThemeText();
});


// -- QUI INIZIA IL CODICE CHE IMPLEMENTA LA FUNZIONALITA' MODALE -- //

var submitButton = document.querySelector('#contactForm button[type="submit"]');
var emailInput = document.getElementById('email');
var messageInput = document.getElementById('msg');

emailInput.addEventListener('input', validateForm);
messageInput.addEventListener('input', validateForm);

function validateForm() {
  var isValid = emailInput.checkValidity() && messageInput.checkValidity();
  submitButton.disabled = !isValid;
}

document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault();

  var modalTitle = document.getElementById('modalTitle');
  modalTitle.textContent = 'Grazie per avermi contattato';

  var userMessage = document.getElementById('userMessage');
  userMessage.textContent = messageInput.value;

  var modal = new bootstrap.Modal(document.getElementById('exampleModal'));
  modal.show();
});

function inoltraMessaggio() {
  var form = document.getElementById('contactForm');
  form.action = 'https://formspree.io/f/xwkdkoov';
  form.submit();

  var successModal = new bootstrap.Modal(document.getElementById('successModal'));
  successModal.show();

  var modal = new bootstrap.Modal(document.getElementById('exampleModal'));
  modal.hide();
}

var modalElement = document.getElementById('exampleModal');
modalElement.addEventListener('hidden.bs.modal', function () {
  document.body.classList.remove('modal-open');
  var modalBackdrop = document.querySelector('.modal-backdrop');
  if (modalBackdrop) {
    modalBackdrop.remove();
  }
});

var modalElement = document.getElementById('exampleModal');
modalElement.addEventListener('hidden.bs.modal', function () {
  document.body.classList.remove('modal-open');
  var modalBackdrop = document.querySelector('.modal-backdrop');
  if (modalBackdrop) {
    modalBackdrop.remove();
  }
  // Ripristina lo scroll della pagina
  document.body.style.overflow = 'auto';
});

// -- QUI FINISCE IL CODICE CHE IMPLEMENTA LA FUNZIONALITA' MODALE -- //




// Funzione per la gestione in tempo reale dei messaggi di feedback
function handleFieldValidation() {
  const form = document.querySelector('.needs-validation');
  const fields = form.querySelectorAll('.form-control');

  fields.forEach(field => {
    field.addEventListener('blur', () => {
      // Controlliamo se il campo è valido o meno
      if (field.checkValidity()) {
        field.classList.remove('is-invalid');
        field.classList.add('is-valid');
      } else {
        field.classList.remove('is-valid');
        field.classList.add('is-invalid');
      }
    });
  });
}

// Funzione per inoltrare il messaggio tramite API (come nell'altro form)
function inoltraMessaggio() {
  var form = document.getElementById('contact_Form');
  form.action = 'https://formspree.io/f/xwkdkoov';
  form.submit();

  var successModal = new bootstrap.Modal(document.getElementById('successModal'));
  successModal.show();

  var modal = new bootstrap.Modal(document.getElementById('exampleModal'));
  modal.hide();
}

// Aggiungi un event listener al pulsante Submit nel secondo form
document.getElementById('submitBtn').addEventListener('click', function () {
  // Ottieni il form e i suoi campi
  var form = document.querySelector('.needs-validation');
  var fields = form.querySelectorAll('.form-control');

  // Controlla la validità dei campi
  fields.forEach(field => {
    if (field.checkValidity()) {
      field.classList.remove('is-invalid');
      field.classList.add('is-valid');
    } else {
      field.classList.remove('is-valid');
      field.classList.add('is-invalid');
    }
  });

  // Controlla la validità dell'intero form
  if (form.checkValidity()) {
    // Il form è valido, mostra il modal di conferma
    showConfirmationModal();
  } else {
    // Il form non è valido, mostrare i messaggi di feedback
    form.classList.add('was-validated');
  }
});

// Mostra il modal di conferma
function showConfirmationModal() {
  var modal = new bootstrap.Modal(document.getElementById('formModal'));
  modal.show();
}

// Rimuovi la validazione quando viene chiuso il modal di conferma
document.getElementById('formModal').addEventListener('hidden.bs.modal', function () {
  var form = document.querySelector('.needs-validation');
  var fields = form.querySelectorAll('.form-control');
  fields.forEach(field => {
    field.classList.remove('is-valid');
    field.classList.remove('is-invalid');
  });
});

// Chiama la funzione per la gestione in tempo reale dei messaggi di feedback
handleFieldValidation();