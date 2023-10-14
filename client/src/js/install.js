const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
let installEvent = null;


window.addEventListener('beforeinstallprompt', (event) => {
    installEvent = event;
    butInstall.classList.remove('invisible');
    console.log(event);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    if (!installEvent) {
        return;
    }
    installEvent.prompt();
    installEvent = null;
    butInstall.classList.add('invisible');
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    installEvent = null;
});
