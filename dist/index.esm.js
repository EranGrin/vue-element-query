import 'core-js/modules/es6.typed.array-buffer';
import 'core-js/modules/es6.typed.int8-array';
import 'core-js/modules/es6.typed.uint8-array';
import 'core-js/modules/es6.typed.uint8-clamped-array';
import 'core-js/modules/es6.typed.int16-array';
import 'core-js/modules/es6.typed.uint16-array';
import 'core-js/modules/es6.typed.int32-array';
import 'core-js/modules/es6.typed.uint32-array';
import 'core-js/modules/es6.typed.float32-array';
import 'core-js/modules/es6.typed.float64-array';
import 'core-js/modules/es6.map';
import 'core-js/modules/es6.set';
import 'core-js/modules/es6.weak-map';
import 'core-js/modules/es6.weak-set';
import 'core-js/modules/es6.reflect.apply';
import 'core-js/modules/es6.reflect.construct';
import 'core-js/modules/es6.reflect.define-property';
import 'core-js/modules/es6.reflect.delete-property';
import 'core-js/modules/es6.reflect.get';
import 'core-js/modules/es6.reflect.get-own-property-descriptor';
import 'core-js/modules/es6.reflect.get-prototype-of';
import 'core-js/modules/es6.reflect.has';
import 'core-js/modules/es6.reflect.is-extensible';
import 'core-js/modules/es6.reflect.own-keys';
import 'core-js/modules/es6.reflect.prevent-extensions';
import 'core-js/modules/es6.reflect.set';
import 'core-js/modules/es6.reflect.set-prototype-of';
import 'core-js/modules/es6.promise';
import 'core-js/modules/es6.symbol';
import 'core-js/modules/es6.object.freeze';
import 'core-js/modules/es6.object.seal';
import 'core-js/modules/es6.object.prevent-extensions';
import 'core-js/modules/es6.object.is-frozen';
import 'core-js/modules/es6.object.is-sealed';
import 'core-js/modules/es6.object.is-extensible';
import 'core-js/modules/es6.object.get-own-property-descriptor';
import 'core-js/modules/es6.object.get-prototype-of';
import 'core-js/modules/es6.object.keys';
import 'core-js/modules/es6.object.get-own-property-names';
import 'core-js/modules/es6.object.assign';
import 'core-js/modules/es6.object.is';
import 'core-js/modules/es6.object.set-prototype-of';
import 'core-js/modules/es6.function.name';
import 'core-js/modules/es6.string.raw';
import 'core-js/modules/es6.string.from-code-point';
import 'core-js/modules/es6.string.code-point-at';
import 'core-js/modules/es6.string.repeat';
import 'core-js/modules/es6.string.starts-with';
import 'core-js/modules/es6.string.ends-with';
import 'core-js/modules/es6.string.includes';
import 'core-js/modules/es6.regexp.flags';
import 'core-js/modules/es6.regexp.match';
import 'core-js/modules/es6.regexp.replace';
import 'core-js/modules/es6.regexp.split';
import 'core-js/modules/es6.regexp.search';
import 'core-js/modules/es6.array.from';
import 'core-js/modules/es6.array.of';
import 'core-js/modules/es6.array.copy-within';
import 'core-js/modules/es6.array.find';
import 'core-js/modules/es6.array.find-index';
import 'core-js/modules/es6.array.fill';
import 'core-js/modules/es6.array.iterator';
import 'core-js/modules/es6.number.is-finite';
import 'core-js/modules/es6.number.is-integer';
import 'core-js/modules/es6.number.is-safe-integer';
import 'core-js/modules/es6.number.is-nan';
import 'core-js/modules/es6.number.epsilon';
import 'core-js/modules/es6.number.min-safe-integer';
import 'core-js/modules/es6.number.max-safe-integer';
import 'core-js/modules/es6.math.acosh';
import 'core-js/modules/es6.math.asinh';
import 'core-js/modules/es6.math.atanh';
import 'core-js/modules/es6.math.cbrt';
import 'core-js/modules/es6.math.clz32';
import 'core-js/modules/es6.math.cosh';
import 'core-js/modules/es6.math.expm1';
import 'core-js/modules/es6.math.fround';
import 'core-js/modules/es6.math.hypot';
import 'core-js/modules/es6.math.imul';
import 'core-js/modules/es6.math.log1p';
import 'core-js/modules/es6.math.log10';
import 'core-js/modules/es6.math.log2';
import 'core-js/modules/es6.math.sign';
import 'core-js/modules/es6.math.sinh';
import 'core-js/modules/es6.math.tanh';
import 'core-js/modules/es6.math.trunc';
import 'core-js/modules/es7.array.includes';
import 'core-js/modules/es7.object.values';
import 'core-js/modules/es7.object.entries';
import 'core-js/modules/es7.object.get-own-property-descriptors';
import 'core-js/modules/es7.string.pad-start';
import 'core-js/modules/es7.string.pad-end';
import 'core-js/modules/web.timers';
import 'core-js/modules/web.immediate';
import 'core-js/modules/web.dom.iterable';
import 'regenerator-runtime/runtime';

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

export default plugin;
