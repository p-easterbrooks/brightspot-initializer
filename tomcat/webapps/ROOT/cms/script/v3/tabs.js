define([ 'jquery', 'bsp-utils' ], function($, bsp_utils) {
  bsp_utils.onDomInsert(document, '.tabs', {
    'insert': function(tabs) {
      var $tabs = $(tabs);

      if ($tabs.closest('.tabbed-vertical').length > 0) {
        return;
      }

      var $wrapper = $('<div/>', {
        'class': 'tabs-wrapper'
      });

      $tabs.after($wrapper);
      $wrapper.append($tabs);

      var $toLeft;
      var $toRight;
      var tabsWidth;
      var itemsWidth;
      var scrollerWidth;

      function updateScrollerStates() {
        var scrollLeft = $tabs.scrollLeft();

        $toLeft.toggleClass('tabs-scroller-disable', scrollLeft === 0);
        $toRight.toggleClass('tabs-scroller-disable', scrollLeft >= itemsWidth - tabsWidth);
      }

      function createScrollerClick(direction) {
        return function() {
          (direction > 0 ? $toLeft : $toRight).removeClass('tabs-scroller-disable');

          $tabs.animate({
            'scrollLeft': $tabs.scrollLeft() + (direction * (tabsWidth - scrollerWidth))
          }, {
            'complete': updateScrollerStates
          })
        }
      }

      $toLeft =  $('<div/>', {
        'class': 'tabs-scroller-toLeft',
        'click': createScrollerClick(-1)
      });

      $wrapper.append($toLeft);

      $toRight = $('<div/>', {
        'class': 'tabs-scroller-toRight',
        'click': createScrollerClick(1)
      });

      $wrapper.append($toRight);

      function initScrollers() {
        tabsWidth = $tabs.outerWidth();
        itemsWidth = 0;
        scrollerWidth = $toLeft.outerWidth() + $toRight.outerWidth();

        $tabs.find('> li').each(function() {
          itemsWidth += $(this).outerWidth(true);
        });

        $wrapper.toggleClass('tabs-wrapper-scrollable', itemsWidth > tabsWidth);
        updateScrollerStates();
      }

      initScrollers();
      $(window).resize(initScrollers);
    }
  });
});
