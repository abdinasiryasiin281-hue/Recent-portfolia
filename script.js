const navButtons = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.content-section');
const navLinks = document.getElementById('navLinks');
const navToggle = document.getElementById('navToggle');

function showSection(sectionId) {
  sections.forEach(section => section.classList.toggle('active', section.id === sectionId));
  navButtons.forEach(button => button.classList.toggle('active', button.dataset.section === sectionId));
  navLinks.classList.remove('open');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

navButtons.forEach(button => {
  button.addEventListener('click', () => showSection(button.dataset.section));
});

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('contactForm').addEventListener('submit', event => {
  event.preventDefault();
  const name = document.getElementById('senderName').value.trim();
  const email = document.getElementById('senderEmail').value.trim();
  const message = document.getElementById('senderMessage').value.trim();

  // Replace this address with your real email address.
  const recipient = 'your-email@example.com';
  if (recipient === 'your-email@example.com') {
    document.getElementById('formNote').textContent =
      'Please replace your-email@example.com in index.html with your real email address.';
    return;
  }

  const subject = encodeURIComponent(`Portfolio message from ${name}`);
  const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`);
  window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
});
