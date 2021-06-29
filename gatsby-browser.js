import './src/style.css';
import 'prismjs/themes/prism.css';
import '@fontsource/imbue/variable.css';

/**
 * Keyboard nav and high contrast hooks; if we detect kb nav we add a class to the
 * body tag for styling. helps keep heavy borders and focus rings off of buttons
 * or other design'ish elements when pokin' about with a mouse
 */
const activationKeys = ['Tab'];
const keyboardNavHook = 'kb-active';

function deactivateKeyboardNav() {
  document.body.classList.remove(keyboardNavHook);
  window.removeEventListener('mousedown', deactivateKeyboardNav);
  window.addEventListener('keydown', activateKeyboardNav);
}

function activateKeyboardNav({ key }) {
  if (activationKeys.includes(key)) {
    document.body.classList.add(keyboardNavHook);
    window.removeEventListener('keydown', activateKeyboardNav);
    window.addEventListener('mousedown', deactivateKeyboardNav);
  }
}

if (typeof window !== 'undefined') {
  window.addEventListener('keydown', activateKeyboardNav);
}
