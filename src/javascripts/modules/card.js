export default class Card {
  constructor(el) {
    this.el = el;

    $(this.el).each(function () {
      const $wrapper = $(this);
      const $toggle = $wrapper.find('.js-toggle');
      const $modal = $wrapper.find('.js-modal');
      const $close = $wrapper.find('.js-close');

      $toggle.on('click', () => {
        $modal.addClass('d-block');
      });

      $close.on('click', () => {
        $modal.removeClass('d-block');
      })
    });
  }
}
