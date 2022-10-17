const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  butInstall.style.visibility = 'visible'
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async (event) => {
  const prompt = window.deferredPrompt;
  prompt.prompt();
  window.deferredPrompt = null;
  butInstall.setAttribute('hidden', true);
  butInstall.textContent = "installed"
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  textHeader.textContent = 'Success';
  console.log('installed', event);
  // window.deferredPrompt = null;
});