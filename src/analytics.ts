import * as $ from 'jquery';

function createAnalytics() {
  let counter: number = 0;
  let destroyed: boolean = false;
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

window['analytics'] = createAnalytics();
