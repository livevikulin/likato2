
//Маски для инпутов 
/*
    jQuery Masked Input Plugin
    Copyright (c) 2007 - 2015 Josh Bush (digitalbush.com)
    Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license)
    Version: 1.4.1
*/
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a){var b,c=navigator.userAgent,d=/iphone/i.test(c),e=/chrome/i.test(c),f=/android/i.test(c);a.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},autoclear:!0,dataName:"rawMaskFn",placeholder:"_"},a.fn.extend({caret:function(a,b){var c;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof a?(b="number"==typeof b?b:a,this.each(function(){this.setSelectionRange?this.setSelectionRange(a,b):this.createTextRange&&(c=this.createTextRange(),c.collapse(!0),c.moveEnd("character",b),c.moveStart("character",a),c.select())})):(this[0].setSelectionRange?(a=this[0].selectionStart,b=this[0].selectionEnd):document.selection&&document.selection.createRange&&(c=document.selection.createRange(),a=0-c.duplicate().moveStart("character",-1e5),b=a+c.text.length),{begin:a,end:b})},unmask:function(){return this.trigger("unmask")},mask:function(c,g){var h,i,j,k,l,m,n,o;if(!c&&this.length>0){h=a(this[0]);var p=h.data(a.mask.dataName);return p?p():void 0}return g=a.extend({autoclear:a.mask.autoclear,placeholder:a.mask.placeholder,completed:null},g),i=a.mask.definitions,j=[],k=n=c.length,l=null,a.each(c.split(""),function(a,b){"?"==b?(n--,k=a):i[b]?(j.push(new RegExp(i[b])),null===l&&(l=j.length-1),k>a&&(m=j.length-1)):j.push(null)}),this.trigger("unmask").each(function(){function h(){if(g.completed){for(var a=l;m>=a;a++)if(j[a]&&C[a]===p(a))return;g.completed.call(B)}}function p(a){return g.placeholder.charAt(a<g.placeholder.length?a:0)}function q(a){for(;++a<n&&!j[a];);return a}function r(a){for(;--a>=0&&!j[a];);return a}function s(a,b){var c,d;if(!(0>a)){for(c=a,d=q(b);n>c;c++)if(j[c]){if(!(n>d&&j[c].test(C[d])))break;C[c]=C[d],C[d]=p(d),d=q(d)}z(),B.caret(Math.max(l,a))}}function t(a){var b,c,d,e;for(b=a,c=p(a);n>b;b++)if(j[b]){if(d=q(b),e=C[b],C[b]=c,!(n>d&&j[d].test(e)))break;c=e}}function u(){var a=B.val(),b=B.caret();if(o&&o.length&&o.length>a.length){for(A(!0);b.begin>0&&!j[b.begin-1];)b.begin--;if(0===b.begin)for(;b.begin<l&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}else{for(A(!0);b.begin<n&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}h()}function v(){A(),B.val()!=E&&B.change()}function w(a){if(!B.prop("readonly")){var b,c,e,f=a.which||a.keyCode;o=B.val(),8===f||46===f||d&&127===f?(b=B.caret(),c=b.begin,e=b.end,e-c===0&&(c=46!==f?r(c):e=q(c-1),e=46===f?q(e):e),y(c,e),s(c,e-1),a.preventDefault()):13===f?v.call(this,a):27===f&&(B.val(E),B.caret(0,A()),a.preventDefault())}}function x(b){if(!B.prop("readonly")){var c,d,e,g=b.which||b.keyCode,i=B.caret();if(!(b.ctrlKey||b.altKey||b.metaKey||32>g)&&g&&13!==g){if(i.end-i.begin!==0&&(y(i.begin,i.end),s(i.begin,i.end-1)),c=q(i.begin-1),n>c&&(d=String.fromCharCode(g),j[c].test(d))){if(t(c),C[c]=d,z(),e=q(c),f){var k=function(){a.proxy(a.fn.caret,B,e)()};setTimeout(k,0)}else B.caret(e);i.begin<=m&&h()}b.preventDefault()}}}function y(a,b){var c;for(c=a;b>c&&n>c;c++)j[c]&&(C[c]=p(c))}function z(){B.val(C.join(""))}function A(a){var b,c,d,e=B.val(),f=-1;for(b=0,d=0;n>b;b++)if(j[b]){for(C[b]=p(b);d++<e.length;)if(c=e.charAt(d-1),j[b].test(c)){C[b]=c,f=b;break}if(d>e.length){y(b+1,n);break}}else C[b]===e.charAt(d)&&d++,k>b&&(f=b);return a?z():k>f+1?g.autoclear||C.join("")===D?(B.val()&&B.val(""),y(0,n)):z():(z(),B.val(B.val().substring(0,f+1))),k?b:l}var B=a(this),C=a.map(c.split(""),function(a,b){return"?"!=a?i[a]?p(b):a:void 0}),D=C.join(""),E=B.val();B.data(a.mask.dataName,function(){return a.map(C,function(a,b){return j[b]&&a!=p(b)?a:null}).join("")}),B.one("unmask",function(){B.off(".mask").removeData(a.mask.dataName)}).on("focus.mask",function(){if(!B.prop("readonly")){clearTimeout(b);var a;E=B.val(),a=A(),b=setTimeout(function(){B.get(0)===document.activeElement&&(z(),a==c.replace("?","").length?B.caret(0,a):B.caret(a))},10)}}).on("blur.mask",v).on("keydown.mask",w).on("keypress.mask",x).on("input.mask paste.mask",function(){B.prop("readonly")||setTimeout(function(){var a=A(!0);B.caret(a),h()},0)}),e&&f&&B.off("input.mask").on("input.mask",u),A()})}})});

//Плагин для селектов
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*!
 * Custom Select jQuery Plugin
 */
var CustomSelect = function ($) {
  var defaults = {
    block: 'custom-select',
    hideCallback: false,
    includeValue: false,
    keyboard: true,
    modifier: false,
    placeholder: false,
    search: false,
    showCallback: false,
    transition: 0
  };

  var CustomSelect =
  /*#__PURE__*/
  function () {
    /**
     * Custom Select
     *
     * @param {Element} select Original `<select>` DOM element to customize.
     * @param {(Object|string)=} options Settings object or method name.
     * @param {string=} options.block Custom select BEM block name.
     * @param {Function=} options.hideCallback Fires after dropdown closes.
     * @param {boolean=} options.includeValue Adds chosen value option to
     *     dropdown. If enabled also cancels dropdown options rerender.
     * @param {boolean=} options.keyboard Enables keyboard control.
     * @param {string=} options.modifier Custom select block BEM modifier.
     * @param {string=} options.placeholder Placeholder hint, can be an HTML
     *     string (appears only if there is no explicitly selected options).
     * @param {boolean=} options.search Adds input to filter options.
     * @param {Function=} options.showCallback Fires after dropdown opens.
     * @param {(number|string)=} options.transition jQuery slideUp/Down param.
     */
    function CustomSelect(select, options) {
      this._$select = $(select);
      this._options = _extends({}, defaults, typeof options === 'object' ? options : {}); // Modifiers

      this._activeModifier = this._options.block + "--active";
      this._dropupModifier = this._options.block + "--dropup";
      this._optionSelectedModifier = this._options.block + "__option--selected"; // Event handlers that can be removed

      this._keydown = this._keydown.bind(this);
      this._dropup = this._dropup.bind(this);
      this._outside = this._outside.bind(this);

      this._init();
    }
    /**
     * Resets custom select options.
     *
     * @public
     */


    var _proto = CustomSelect.prototype;

    _proto.reset = function reset() {
      this._$dropdown.hide().empty();

      this._$value.off('click');

      this._fill();
    };
    /**
     * Renders initial state of custom select & sets
     * options click event listeners.
     *
     * @private
     */


    _proto._init = function _init() {
      this._$element = $("<div class=\"" + this._options.block + "\">\n           <button class=\"" + this._options.block + "__option " + this._options.block + "__option--value\" type=\"button\"></button>\n           <div class=\"" + this._options.block + "__dropdown\" style=\"display: none;\"></div>\n         </div>");

      this._$select.hide().after(this._$element);

      if (this._options.modifier) {
        this._$element.addClass(this._options.modifier);
      }

      this._$value = this._$element.find("." + this._options.block + "__option--value");
      this._$dropdown = this._$element.find("." + this._options.block + "__dropdown");

      this._fill();
    };
    /**
     * Renders custom select options by original
     * select element options.
     *
     * @private
     */


    _proto._fill = function _fill() {
      var _this = this;

      this._$values = this._$select.find('option');
      this._values = [];
      var placeholder = this._options.placeholder;
      $.each(this._$values, function (i, option) {
        var el = $(option).text().trim();

        _this._values.push(el);
      });

      if (placeholder) {
        // Check explicitly selected option
        if (this._$select.find('[selected]').length) {
          placeholder = false;
        } else {
          this._$value.html(placeholder); // Set select value to null


          this._$select.prop('selectedIndex', -1);
        }
      }

      $.each(this._values, function (i, el) {
        var cssClass = _this._$values.eq(i).attr('class');

        var $option = $("<button class=\"" + _this._options.block + "__option\" type=\"button\">" + el + "</button>");

        var $selected = _this._$select.find(':selected');

        if (_this._$values.eq(i).attr('disabled')) {
          $option.prop('disabled', true);
        }

        if (!$selected.length && i === 0 || el === $selected.text().trim()) {
          if (!placeholder) {
            _this._$value.text(el).removeClass(_this._$value.data('class')).removeData('class').addClass(cssClass).data('class', cssClass);
          }

          if (_this._options.includeValue || placeholder) {
            $option.addClass(cssClass);
            $option.toggleClass(_this._optionSelectedModifier, _this._$values.eq(i).is('[selected]'));

            _this._$dropdown.append($option);
          }
        } else {
          $option.addClass(cssClass);

          _this._$dropdown.append($option);
        }
      });
      this._$options = this._$dropdown.find("." + this._options.block + "__option");

      if (this._options.search) {
        this._search();
      }

      this._$value.one('click', function (event) {
        _this._show(event);
      });

      this._$value.prop('disabled', !this._$options.length);

      this._$options.on('click', function (event) {
        _this._select(event);
      });
    };
    /**
     * Shows custom select dropdown & sets outside
     * click listener to hide.
     *
     * @param {Object} event Value click jQuery event.
     * @private
     */


    _proto._show = function _show(event) {
      var _this2 = this;

      event.preventDefault();

      this._dropup();

      $(window).on('resize scroll', this._dropup);

      this._$element.addClass(this._activeModifier);

      this._$dropdown.slideDown(this._options.transition, function () {
        if (_this2._options.search) {
          _this2._$input.focus();

          if (_this2._options.includeValue) {
            _this2._scroll();
          }
        } // Open callback


        if (typeof _this2._options.showCallback === 'function') {
          _this2._options.showCallback.call(_this2._$element[0]);
        }
      });

      setTimeout(function () {
        $(document).on('touchstart click', _this2._outside);
      }, 0);

      this._$value.one('click', function (event) {
        event.preventDefault();

        _this2._hide();
      });

      if (this._options.keyboard) {
        this._options.index = -1;
        $(window).on('keydown', this._keydown);
      }
    };
    /**
     * Hides custom select dropdown & resets events
     * listeners to initial.
     *
     * @private
     */


    _proto._hide = function _hide() {
      var _this3 = this;

      if (this._options.search) {
        this._$input.val('').blur();

        this._$options.show();

        this._$wrap.scrollTop(0);
      }

      this._$dropdown.slideUp(this._options.transition, function () {
        _this3._$element.removeClass(_this3._activeModifier).removeClass(_this3._dropupModifier); // Close callback


        if (typeof _this3._options.hideCallback === 'function') {
          _this3._options.hideCallback.call(_this3._$element[0]);
        }

        _this3._$value.off('click').one('click', function (event) {
          _this3._show(event);
        });

        $(document).off('touchstart click', _this3._outside);
        $(window).off('resize scroll', _this3._dropup);
      });

      if (this._options.keyboard) {
        this._$options.blur();

        $(window).off('keydown', this._keydown);
      }
    };
    /**
     * Centers chosen option in scrollable element
     * of dropdown.
     *
     * @private
     */


    _proto._scroll = function _scroll() {
      var _this4 = this;

      $.each(this._$options, function (i, option) {
        var $option = $(option);

        if ($option.text() === _this4._$value.text()) {
          var top = $option.position().top;

          var height = _this4._$wrap.outerHeight();

          var center = height / 2 - $option.outerHeight() / 2;

          if (top > center) {
            _this4._$wrap.scrollTop(top - center);
          }

          return false;
        }
      });
    };
    /**
     * Changes value of custom select & `<select>`
     * by chosen option.
     *
     * @param {Object} event Option click jQuery event.
     * @private
     */


    _proto._select = function _select(event) {
      var _this5 = this;

      event.preventDefault();
      var choice = $(event.currentTarget).text().trim();

      var values = this._values.concat();

      this._$value.text(choice).removeClass(this._$value.data('class'));

      this._$values.prop('selected', false);

      $.each(values, function (i, el) {
        if (!_this5._options.includeValue && el === choice) {
          values.splice(i, 1);
        }

        $.each(_this5._$values, function (i, option) {
          var $option = $(option);

          if ($option.text().trim() === choice) {
            var cssClass = $option.attr('class');
            $option.prop('selected', true);

            _this5._$value.addClass(cssClass).data('class', cssClass);
          }
        });
      });

      this._hide();

      if (!this._options.includeValue) {
        // Update dropdown options content
        if (this._$options.length > values.length) {
          var last = this._$options.eq(values.length);

          last.remove();
          this._$options = this._$options.not(last);

          if (!this._$options.length) {
            this._$value.prop('disabled', true);
          }
        }

        $.each(this._$options, function (i, option) {
          var $option = $(option);
          $option.text(values[i]); // Reset option class

          $option.attr('class', _this5._options.block + "__option");
          $.each(_this5._$values, function () {
            var $this = $(this);

            if ($this.text().trim() === values[i]) {
              $option.addClass($this.attr('class'));
            }
          });
        });
      } else {
        // Select chosen option
        this._$options.removeClass(this._optionSelectedModifier);

        $.each(this._$options, function (i, option) {
          var $option = $(option);

          if ($option.text().trim() === choice) {
            $option.addClass(_this5._optionSelectedModifier);
            return false;
          }
        });
      }

      if (typeof event.originalEvent !== 'undefined') {
        this._$select.trigger('change');
      }
    };
    /**
     * Wraps options by wrap element, adds search
     * input to dropdown.
     *
     * @private
     */


    _proto._search = function _search() {
      var _this6 = this;

      this._$input = $("<input class=\"" + this._options.block + "__input\" autocomplete=\"off\">");

      this._$dropdown.prepend(this._$input); // Add scrollable wrap


      this._$options.wrapAll("<div class=\"" + this._options.block + "__option-wrap\"></div>");

      this._$wrap = this._$element.find("." + this._options.block + "__option-wrap");

      this._$input.on('focus', function () {
        _this6._options.index = -1;
      });

      this._$input.on('keyup', function () {
        var query = _this6._$input.val().trim();

        if (query.length) {
          _this6._$wrap.scrollTop(0);

          setTimeout(function () {
            if (query === _this6._$input.val().trim()) {
              $.each(_this6._$options, function (i, option) {
                var $option = $(option);
                var text = $option.text().trim().toLowerCase();
                var match = text.indexOf(query.toLowerCase()) !== -1;
                $option.toggle(match);
              });
            }
          }, 300);
        } else {
          _this6._$options.show();
        }
      });
    };
    /**
     * Toggles custom select dropup modifier based
     * on space for dropdown below.
     *
     * @private
     */


    _proto._dropup = function _dropup() {
      var bottom = this._$element[0].getBoundingClientRect().bottom;

      var up = $(window).height() - bottom < this._$dropdown.height();

      this._$element.toggleClass(this._dropupModifier, up);
    };
    /**
     * Hides dropdown if target of event (e.g. click
     * on `$window`) is not custom select.
     *
     * @param {Object} event Outside "click" jQuery event.
     * @private
     */


    _proto._outside = function _outside(event) {
      var $target = $(event.target);

      if (!$target.parents().is(this._$element) && !$target.is(this._$element)) {
        this._hide();
      }
    };
    /**
     * Controls navigation from keyboard by custom
     * select options.
     *
     * @param {Object} event Keydown jQuery event.
     * @private
     */


    _proto._keydown = function _keydown(event) {
      var $visible = this._$options.filter(':visible').not('[disabled]');

      switch (event.which) {
        // Down
        case 40:
          event.preventDefault();
          var next = $visible.eq(this._options.index + 1).length;

          if (next) {
            this._options.index += 1;
          } else {
            this._options.index = 0;
          }

          $visible.eq(this._options.index).focus();
          break;
        // Up

        case 38:
          event.preventDefault();
          var prev = $visible.eq(this._options.index - 1).length;

          if (prev && this._options.index - 1 >= 0) {
            this._options.index -= 1;
          } else {
            this._options.index = $visible.length - 1;
          }

          $visible.eq(this._options.index).focus();
          break;
        // Enter

        case 13: // Space

        case 32:
          if (!this._$input || !this._$input.is(':focus')) {
            event.preventDefault();

            var $option = this._$options.add(this._$value).filter(':focus');

            $option.trigger('click');

            if (!$option.is(this._$value)) {
              this._$select.trigger('change');
            }

            this._$value.focus();
          }

          break;
        // Esc

        case 27:
          event.preventDefault();

          this._hide();

          this._$value.focus();

          break;

        default:
          break;
      }
    };
    /**
     * Creates jQuery plugin function.
     *
     * @param {(Object|string)=} config Options or method.
     * @returns {Function} jQuery plugin.
     */


    CustomSelect._jQueryPlugin = function _jQueryPlugin(config) {
      return this.each(function () {
        var $this = $(this);
        var data = $this.data('custom-select');

        if (!data) {
          if (typeof config !== 'string') {
            data = new CustomSelect(this, config);
            $this.data('custom-select', data);
          }
        } else {
          if (config === 'reset') {
            data.reset();
          }
        }
      });
    };

    return CustomSelect;
  }();

  $.fn['customSelect'] = CustomSelect._jQueryPlugin;

  $.fn['customSelect'].noConflict = function () {
    return $.fn['customSelect'];
  };

  return CustomSelect;
}($);
//# sourceMappingURL=jquery.custom-select.js.map

