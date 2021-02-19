'use strict';

require('core-js/modules/es6.typed.array-buffer');
require('core-js/modules/es6.typed.int8-array');
require('core-js/modules/es6.typed.uint8-array');
require('core-js/modules/es6.typed.uint8-clamped-array');
require('core-js/modules/es6.typed.int16-array');
require('core-js/modules/es6.typed.uint16-array');
require('core-js/modules/es6.typed.int32-array');
require('core-js/modules/es6.typed.uint32-array');
require('core-js/modules/es6.typed.float32-array');
require('core-js/modules/es6.typed.float64-array');
require('core-js/modules/es6.map');
require('core-js/modules/es6.set');
require('core-js/modules/es6.weak-map');
require('core-js/modules/es6.weak-set');
require('core-js/modules/es6.reflect.apply');
require('core-js/modules/es6.reflect.construct');
require('core-js/modules/es6.reflect.define-property');
require('core-js/modules/es6.reflect.delete-property');
require('core-js/modules/es6.reflect.get');
require('core-js/modules/es6.reflect.get-own-property-descriptor');
require('core-js/modules/es6.reflect.get-prototype-of');
require('core-js/modules/es6.reflect.has');
require('core-js/modules/es6.reflect.is-extensible');
require('core-js/modules/es6.reflect.own-keys');
require('core-js/modules/es6.reflect.prevent-extensions');
require('core-js/modules/es6.reflect.set');
require('core-js/modules/es6.reflect.set-prototype-of');
require('core-js/modules/es6.promise');
require('core-js/modules/es6.symbol');
require('core-js/modules/es6.object.freeze');
require('core-js/modules/es6.object.seal');
require('core-js/modules/es6.object.prevent-extensions');
require('core-js/modules/es6.object.is-frozen');
require('core-js/modules/es6.object.is-sealed');
require('core-js/modules/es6.object.is-extensible');
require('core-js/modules/es6.object.get-own-property-descriptor');
require('core-js/modules/es6.object.get-prototype-of');
require('core-js/modules/es6.object.keys');
require('core-js/modules/es6.object.get-own-property-names');
require('core-js/modules/es6.object.assign');
require('core-js/modules/es6.object.is');
require('core-js/modules/es6.object.set-prototype-of');
require('core-js/modules/es6.function.name');
require('core-js/modules/es6.string.raw');
require('core-js/modules/es6.string.from-code-point');
require('core-js/modules/es6.string.code-point-at');
require('core-js/modules/es6.string.repeat');
require('core-js/modules/es6.string.starts-with');
require('core-js/modules/es6.string.ends-with');
require('core-js/modules/es6.string.includes');
require('core-js/modules/es6.regexp.flags');
require('core-js/modules/es6.regexp.match');
require('core-js/modules/es6.regexp.replace');
require('core-js/modules/es6.regexp.split');
require('core-js/modules/es6.regexp.search');
require('core-js/modules/es6.array.from');
require('core-js/modules/es6.array.of');
require('core-js/modules/es6.array.copy-within');
require('core-js/modules/es6.array.find');
require('core-js/modules/es6.array.find-index');
require('core-js/modules/es6.array.fill');
require('core-js/modules/es6.array.iterator');
require('core-js/modules/es6.number.is-finite');
require('core-js/modules/es6.number.is-integer');
require('core-js/modules/es6.number.is-safe-integer');
require('core-js/modules/es6.number.is-nan');
require('core-js/modules/es6.number.epsilon');
require('core-js/modules/es6.number.min-safe-integer');
require('core-js/modules/es6.number.max-safe-integer');
require('core-js/modules/es6.math.acosh');
require('core-js/modules/es6.math.asinh');
require('core-js/modules/es6.math.atanh');
require('core-js/modules/es6.math.cbrt');
require('core-js/modules/es6.math.clz32');
require('core-js/modules/es6.math.cosh');
require('core-js/modules/es6.math.expm1');
require('core-js/modules/es6.math.fround');
require('core-js/modules/es6.math.hypot');
require('core-js/modules/es6.math.imul');
require('core-js/modules/es6.math.log1p');
require('core-js/modules/es6.math.log10');
require('core-js/modules/es6.math.log2');
require('core-js/modules/es6.math.sign');
require('core-js/modules/es6.math.sinh');
require('core-js/modules/es6.math.tanh');
require('core-js/modules/es6.math.trunc');
require('core-js/modules/es7.array.includes');
require('core-js/modules/es7.object.values');
require('core-js/modules/es7.object.entries');
require('core-js/modules/es7.object.get-own-property-descriptors');
require('core-js/modules/es7.string.pad-start');
require('core-js/modules/es7.string.pad-end');
require('core-js/modules/web.timers');
require('core-js/modules/web.immediate');
require('core-js/modules/web.dom.iterable');
require('regenerator-runtime/runtime');

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var plugin = {
  install: function install(Vue) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$debounce = _ref.debounce,
        debounce = _ref$debounce === undefined ? 0 : _ref$debounce;

    Vue.mixin({
      data: function data() {
        return {
          resizeListenerActive: false,
          debounceTimer: null,
          size: {
            width: 0,
            height: 0
          },
          eq: null
        };
      },

      computed: {
        $eq: function $eq() {
          var _this = this;

          if (this.eq && this.eq.breakpoints &&
          // mark this.size.width and this.size.height as dependencies
          // for the reactivity of the computed breakpoints-property
          typeof this.size.width === "number" && typeof this.size.height === "number") {
            // iterate over all queries and set their state
            // base on the query they have as properties
            var instance = Object.keys(this.eq.breakpoints).reduce(function (accumulator, currentValue) {
              return _extends({}, accumulator, _defineProperty({}, currentValue, _this.$_elementQueryMixin_checkAllConditions(_this.eq.breakpoints[currentValue])));
            }, {});

            // bind public methods to the $eq instance
            instance.forceUpdate = this.$_elementQueryMixin_forceUpdate;

            return instance;
          }
          return {};
        }
      },
      watch: {
        eq: function eq(value) {
          // $options.eq have been assigned a value
          // and no resize listener was active => initialize
          if (value && !this.resizeListenerActive) {
            this.$_elementQueryMixin_init();
          }
        }
      },
      mounted: function mounted() {
        // make $options.eq reactive by
        // assigning it to the component data
        this.eq = this.$options.eq;

        this.$_elementQueryMixin_init();
      },
      beforeDestroy: function beforeDestroy() {
        this.$_elementQueryMixin_destroy();
      },

      methods: {
        /**
         * initialize the mixin, add a resize listener and
         * calculate the initial width and height of the component
         */
        $_elementQueryMixin_init: function $_elementQueryMixin_init() {
          if (this.eq && this.eq.breakpoints) {
            window.addEventListener("resize", this.$_elementQueryMixin_debouncedResize);

            this.resizeListenerActive = true;

            this.$_elementQueryMixin_resize();
          }
        },


        /**
         * destroy the mixin, remove the resize listener if it was active
         */
        $_elementQueryMixin_destroy: function $_elementQueryMixin_destroy() {
          if (this.resizeListenerActive) {
            window.removeEventListener("resize", this.$_elementQueryMixin_debouncedResize);

            this.resizeListenerActive = false;
          }
        },


        /**
         * gets the current component size (height & width)
         * based on the client sizes of the element
         */
        $_elementQueryMixin_resize: function $_elementQueryMixin_resize() {
          this.size.height = this.$el.clientHeight;
          this.size.width = this.$el.clientWidth;
        },


        /**
         * debounces the resize event as it is bound to the window.resize event
         * this uses the component `eq.debounce` value,
         * with a fallback to plugin debounce value (if it's specified)
         */
        $_elementQueryMixin_debouncedResize: function $_elementQueryMixin_debouncedResize() {
          var _this2 = this;

          clearTimeout(this.debounceTimer);
          this.debounceTimer = setTimeout(function () {
            _this2.$_elementQueryMixin_resize();
          }, this.eq && this.eq.debounce || debounce);
        },


        /**
         * Checks all the conditions of a breakpoint
         * returns `true` if all conditions match
         * @param {object} bp
         */
        $_elementQueryMixin_checkAllConditions: function $_elementQueryMixin_checkAllConditions(bp) {
          var _this3 = this;

          // .find() result === `undefined` means all condition passed as `true`
          // so we invert the returned result
          return !Object.keys(bp).find(
          // if any condition returns false:
          // we break out of the iteration early because of `.find()`
          function (key) {
            return !_this3.$_elementQueryMixin_checkCondition(key, bp[key]);
          });
        },


        /**
         * Checks the condition of a specific condition + value
         * @param {string} type
         * @param {number} value
         */
        $_elementQueryMixin_checkCondition: function $_elementQueryMixin_checkCondition(type, value) {
          switch (type) {
            case "minWidth":
              return this.size.width >= value;
            case "maxWidth":
              return this.size.width <= value;
            case "minHeight":
              return this.size.height >= value;
            case "maxHeight":
              return this.size.height <= value;
            // no default
          }

          return false;
        },


        /**
         * if an element changed size outside of `window.resize`
         * call this method to force an update on the breakpoints
         */
        $_elementQueryMixin_forceUpdate: function $_elementQueryMixin_forceUpdate() {
          this.$_elementQueryMixin_resize();
        }
      }
    });
  }
};

module.exports = plugin;
