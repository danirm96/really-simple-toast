// src/index.ts

import './toast-style.css';

export default class Toasted {
  static fire(message: string, type: 'success' | 'error' | 'warning', darkMode = false): void {
    let toastContainer: HTMLElement | null = document.getElementById('toast-container');
    let newToastContainer: HTMLDivElement | null = null;

    if (!toastContainer) {
      newToastContainer = document.createElement('div');
      newToastContainer.id = 'toast-container';
      document.body.appendChild(newToastContainer);
    }

    const container: HTMLElement = toastContainer || newToastContainer!;

    const toast = document.createElement('div');
    toast.classList.add('toast');
    toast.classList.add(type);
    if (darkMode) {
      toast.classList.add('darkMode');
    }
    toast.innerHTML = message;

    container.appendChild(toast);

    const removeToast = () => {
      toast.classList.add('slideOut');
      toast.addEventListener('animationend', () => {
        toast.remove();
      });
    };

    toast.onclick = removeToast;
    setTimeout(removeToast, 4500);
  }
}
