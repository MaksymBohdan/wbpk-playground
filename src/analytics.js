import * as $ from 'jquery';

function createAnalytics() {
  let counter = 0;
  let destroyed = false;
  const lister = () => counter++;
  $(document).on('click', lister);

  return {
    destroy() {
      $(document).off('click', addEventListener);
      destroyed = true;
    },
    getClicks() {
      if (destroyed) return `Analytics is destroyed. Total clicks = ${counter}`;
      return counter;
    },
  };
}

window.analytics = createAnalytics();
