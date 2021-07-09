/**
 * this file _certainly_ doesn't belong here ... but currently, the only thing
 * using a portal (hence, the need to explicitly manage focus) is the header.
 * as we expand into additional modals or transient-layer content we can break
 * this out.
 */

// can make this more robust as needed; right now we've only got the most
// elements in need of management
const focusableElementNames: string[] = [
  'button',
  'input',
  'a',
];

type FocusableTypes = (HTMLButtonElement|HTMLInputElement|HTMLAnchorElement)[];

export default function(rootEl: HTMLElement, prependedElements?: FocusableTypes): Function {
  let focusableElements: FocusableTypes = 
    Array.from(rootEl.querySelectorAll(focusableElementNames.join(' ')));

  if (prependedElements) {
    focusableElements = prependedElements.concat(prependedElements);
  }

  const firstFocusable = focusableElements.shift();
  const lastFocusable = focusableElements.pop();

  firstFocusable.focus();

  function handleKeydown({ target, key, shiftKey: isShifting }) {
    const isTab = key === 'Tab';

    if ((target === firstFocusable) && isTab && isShifting) {
      lastFocusable.focus();
    } else if ((target === lastFocusable) && isTab) {
      firstFocusable.focus();
    }
  }
  
  window.addEventListener('keydown', handleKeydown);

  // returns a clean-up method
  return () => {
    window.removeEventListener('keydown', handleKeydown);
  };
}
