'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var ethers = require('ethers');
var React = require('react');
var spinnersReact = require('spinners-react');
require('react-toast');
var react = require('@web3-onboard/react');
var injectedModule = require('@web3-onboard/injected-wallets');
var walletConnectModule = require('@web3-onboard/walletconnect');
var mewModule = require('@web3-onboard/mew');
var fortmaticModule = require('@web3-onboard/fortmatic');
var trezorModule = require('@web3-onboard/trezor');
var ledgerModule = require('@web3-onboard/ledger');
var torusModule = require('@web3-onboard/torus');
var coinbaseModule = require('@web3-onboard/coinbase');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var injectedModule__default = /*#__PURE__*/_interopDefaultLegacy(injectedModule);
var walletConnectModule__default = /*#__PURE__*/_interopDefaultLegacy(walletConnectModule);
var mewModule__default = /*#__PURE__*/_interopDefaultLegacy(mewModule);
var fortmaticModule__default = /*#__PURE__*/_interopDefaultLegacy(fortmaticModule);
var trezorModule__default = /*#__PURE__*/_interopDefaultLegacy(trezorModule);
var ledgerModule__default = /*#__PURE__*/_interopDefaultLegacy(ledgerModule);
var torusModule__default = /*#__PURE__*/_interopDefaultLegacy(torusModule);
var coinbaseModule__default = /*#__PURE__*/_interopDefaultLegacy(coinbaseModule);

function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
function _regeneratorRuntime() {
  _regeneratorRuntime = function () {
    return exports;
  };
  var exports = {},
    Op = Object.prototype,
    hasOwn = Op.hasOwnProperty,
    defineProperty = Object.defineProperty || function (obj, key, desc) {
      obj[key] = desc.value;
    },
    $Symbol = "function" == typeof Symbol ? Symbol : {},
    iteratorSymbol = $Symbol.iterator || "@@iterator",
    asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
    toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }
  try {
    define({}, "");
  } catch (err) {
    define = function (obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
      generator = Object.create(protoGenerator.prototype),
      context = new Context(tryLocsList || []);
    return defineProperty(generator, "_invoke", {
      value: makeInvokeMethod(innerFn, self, context)
    }), generator;
  }
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }
  exports.wrap = wrap;
  var ContinueSentinel = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
    NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if ("throw" !== record.type) {
        var result = record.arg,
          value = result.value;
        return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }
      reject(record.arg);
    }
    var previousPromise;
    defineProperty(this, "_invoke", {
      value: function (method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }
        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(innerFn, self, context) {
    var state = "suspendedStart";
    return function (method, arg) {
      if ("executing" === state) throw new Error("Generator is already running");
      if ("completed" === state) {
        if ("throw" === method) throw arg;
        return doneResult();
      }
      for (context.method = method, context.arg = arg;;) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }
        if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
          if ("suspendedStart" === state) throw state = "completed", context.arg;
          context.dispatchException(context.arg);
        } else "return" === context.method && context.abrupt("return", context.arg);
        state = "executing";
        var record = tryCatch(innerFn, self, context);
        if ("normal" === record.type) {
          if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
          return {
            value: record.arg,
            done: context.done
          };
        }
        "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
      }
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method,
      method = delegate.iterator[methodName];
    if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }
  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }
  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;
      if (!isNaN(iterable.length)) {
        var i = -1,
          next = function next() {
            for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
            return next.value = undefined, next.done = !0, next;
          };
        return next.next = next;
      }
    }
    return {
      next: doneResult
    };
  }
  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), defineProperty(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (val) {
    var object = Object(val),
      keys = [];
    for (var key in object) keys.push(key);
    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function (skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
    },
    stop: function () {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function (exception) {
      if (this.done) throw exception;
      var context = this;
      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
          record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
            hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function (type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function (record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function (finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    catch: function (tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function (iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}

var img = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='169.245' height='26.857' viewBox='0 0 169.245 26.857'%3e %3cg id='galaxis_text_logo' data-name='galaxis text logo' transform='translate(-245.426 -321.77)'%3e %3cg id='Group_1648' data-name='Group 1648' transform='translate(245.426 321.769)'%3e %3cpath id='Path_368' data-name='Path 368' d='M990.873%2c375.584a7.61%2c7.61%2c0%2c0%2c0-3.034-2.1%2c43.451%2c43.451%2c0%2c0%2c0-4.685-1.411q-2.435-.6-3.913-1.118a6.492%2c6.492%2c0%2c0%2c1-2.422-1.464%2c3.453%2c3.453%2c0%2c0%2c1-.958-2.555%2c4.181%2c4.181%2c0%2c0%2c1%2c1.757-3.46%2c8.608%2c8.608%2c0%2c0%2c1%2c5.217-1.331%2c13.008%2c13.008%2c0%2c0%2c1%2c3.7.559%2c12.626%2c12.626%2c0%2c0%2c1%2c3.54%2c1.65l.932-2.236a12.794%2c12.794%2c0%2c0%2c0-3.753-1.7%2c15.535%2c15.535%2c0%2c0%2c0-4.419-.612%2c13.115%2c13.115%2c0%2c0%2c0-5.43.985%2c7.368%2c7.368%2c0%2c0%2c0-3.247%2c2.609%2c6.714%2c6.714%2c0%2c0%2c0-1.065%2c3.647%2c5.775%2c5.775%2c0%2c0%2c0%2c1.251%2c3.886%2c7.779%2c7.779%2c0%2c0%2c0%2c3.034%2c2.129%2c39.1%2c39.1%2c0%2c0%2c0%2c4.738%2c1.437A36.334%2c36.334%2c0%2c0%2c1%2c986%2c375.611a6.691%2c6.691%2c0%2c0%2c1%2c2.342%2c1.437%2c3.391%2c3.391%2c0%2c0%2c1%2c.958%2c2.529%2c4%2c4%2c0%2c0%2c1-1.783%2c3.38%2c8.869%2c8.869%2c0%2c0%2c1-5.324%2c1.3%2c13.977%2c13.977%2c0%2c0%2c1-4.9-.878%2c10.483%2c10.483%2c0%2c0%2c1-3.806-2.316l-1.091%2c2.156a10.149%2c10.149%2c0%2c0%2c0%2c4.152%2c2.475%2c16.627%2c16.627%2c0%2c0%2c0%2c5.643.932%2c13.722%2c13.722%2c0%2c0%2c0%2c5.457-.958%2c7.211%2c7.211%2c0%2c0%2c0%2c3.3-2.609%2c6.5%2c6.5%2c0%2c0%2c0%2c1.065-3.647%2c5.256%2c5.256%2c0%2c0%2c0-1.145-3.833' transform='translate(-822.782 -359.773)' fill='%23010202'/%3e %3cpath id='Path_369' data-name='Path 369' d='M523.958%2c360.6%2c511.9%2c386.978h2.955l7.586-2.822h-6.335l9.263-20.655%2c10.514%2c23.477h2.9L526.726%2c360.6Z' transform='translate(-484.856 -360.36)' fill='%23010202'/%3e %3cpath id='Path_370' data-name='Path 370' d='M836.2%2c428.586h3.221l8.225-11.286-4.977%2c2.529Z' transform='translate(-722.835 -401.968)' fill='%23010202'/%3e %3cpath id='Path_371' data-name='Path 371' d='M852.681%2c371.513l8.012-10.913h-3.008l-7.932%2c10.78-7.932-10.78H838.6l9.369%2c12.776Z' transform='translate(-724.596 -360.36)' fill='%23010202'/%3e %3cpath id='Path_372' data-name='Path 372' d='M880.5%2c413.371l8.411%2c11.472h3.247L882.816%2c412.2Z' transform='translate(-755.344 -398.226)' fill='%23010202'/%3e %3cpath id='Path_373' data-name='Path 373' d='M941.4%2c366.323l2.795-1.065V360.6H941.4Z' transform='translate(-800.033 -360.36)' fill='%23010202'/%3e %3cpath id='Path_374' data-name='Path 374' d='M941.4%2c401.434h2.795V380.3l-2.795%2c1.437Z' transform='translate(-800.033 -374.817)' fill='%23010202'/%3e %3cpath id='Path_375' data-name='Path 375' d='M730.958%2c360.6%2c718.9%2c386.978h2.955l7.586-2.822h-6.335l9.263-20.655%2c10.514%2c23.477h2.9L733.726%2c360.6Z' transform='translate(-636.758 -360.36)' fill='%23010202'/%3e %3cpath id='Path_376' data-name='Path 376' d='M418.578%2c363.613a11.97%2c11.97%2c0%2c0%2c1%2c5.776-1.411%2c10.92%2c10.92%2c0%2c0%2c1%2c7.959%2c3.088l1.73-1.783a11.02%2c11.02%2c0%2c0%2c0-4.259-2.848%2c15.5%2c15.5%2c0%2c0%2c0-5.536-.958%2c14.763%2c14.763%2c0%2c0%2c0-7.16%2c1.73%2c12.739%2c12.739%2c0%2c0%2c0-4.978%2c4.818%2c13.933%2c13.933%2c0%2c0%2c0%2c0%2c13.735%2c12.673%2c12.673%2c0%2c0%2c0%2c4.978%2c4.791%2c14.659%2c14.659%2c0%2c0%2c0%2c7.133%2c1.73%2c16.185%2c16.185%2c0%2c0%2c0%2c5.324-.878%2c13.229%2c13.229%2c0%2c0%2c0%2c4.365-2.475v-7.8l-2.688%2c1.2v5.43A11.478%2c11.478%2c0%2c0%2c1%2c424.328%2c384a11.7%2c11.7%2c0%2c0%2c1-5.776-1.437%2c10.515%2c10.515%2c0%2c0%2c1-4.019-3.913%2c10.688%2c10.688%2c0%2c0%2c1-1.464-5.59%2c10.823%2c10.823%2c0%2c0%2c1%2c1.464-5.59%2c10.455%2c10.455%2c0%2c0%2c1%2c4.046-3.86' transform='translate(-410.3 -359.7)' fill='%23010202'/%3e %3cpath id='Path_377' data-name='Path 377' d='M643.327%2c360.6H643.3l.027.027Z' transform='translate(-581.281 -360.36)' fill='%23010202'/%3e %3cpath id='Path_378' data-name='Path 378' d='M635.695%2c361l-2.795%2c1.251v25.021h17.568v-2.422H635.695Z' transform='translate(-573.649 -360.654)' fill='%23010202'/%3e %3c/g%3e %3c/g%3e%3c/svg%3e";

var Web3Onboard = /*#__PURE__*/function () {
  function Web3Onboard(props) {
    _classCallCheck(this, Web3Onboard);
    console.log(props, ' propppp');
    console.log('web4onboaaaard');
    var injected = injectedModule__default["default"]();
    var walletConnect = walletConnectModule__default["default"]({
      version: 2,
      // **New Param** Defaults to version: 1 - this behavior will be deprecated after the WalletConnect v1 sunset
      handleUri: function handleUri(uri) {
        return console.log(uri);
      },
      projectId: props.config.WALLETCONNECT_PROJECT_ID,
      // ***New Param* Project ID associated with [WalletConnect account](https://cloud.walletconnect.com)
      requiredChains: [1, 137, 5, 11155111] // chains required to be supported by WC wallet
    });

    var mew = mewModule__default["default"]();
    var ledger = ledgerModule__default["default"]();
    var torus = torusModule__default["default"]();
    var coinbase = coinbaseModule__default["default"]();
    var fortmatic = fortmaticModule__default["default"]({
      apiKey: props.config.FORTMATIC_KEY
    });
    var trezor = trezorModule__default["default"]({
      appUrl: 'https://galaxis.xyz/',
      email: 'info@galaxis.xyz'
    });
    this.web3Onboard = react.init({
      accountCenter: {
        desktop: {
          position: 'topRight',
          enabled: false
          // minimal: true,
        }
      },

      wallets: [injected, walletConnect, torus, mew, fortmatic, trezor, ledger, coinbase],
      chains: props.config.CHAINS,
      appMetadata: {
        name: 'Galaxis',
        icon: img,
        logo: img,
        description: 'Galaxis',
        recommendedInjectedWallets: [{
          name: 'Coinbase',
          url: 'https://wallet.coinbase.com/'
        }, {
          name: 'MetaMask',
          url: 'https://metamask.io'
        }]
      }
    });
  }
  _createClass(Web3Onboard, [{
    key: "getWeb3OnboardInstance",
    value: function getWeb3OnboardInstance() {
      return this.web3Onboard;
    }
  }]);
  return Web3Onboard;
}();

var Web3Ctx = /*#__PURE__*/React.createContext({});

var sx = {
  root: {
    display: 'flex',
    minHeight: '100vh',
    height: '100%',
    weight: '100%',
    background: '#fff'
  },
  container: {
    textAlign: 'center',
    margin: 'auto'
  }
};
var Web3Manager = function Web3Manager(props) {
  var _wallet$accounts$;
  var web3OnboardInstance = React.useMemo(function () {
    return new Web3Onboard(props);
  }, []);
  var web3Onboard = web3OnboardInstance.getWeb3OnboardInstance();
  var _props$config = props.config,
    DEPLOYED_CHAIN_ID = _props$config.DEPLOYED_CHAIN_ID,
    RPC_URL = _props$config.RPC_URL;
  var _useState = React.useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    onboard = _useState2[0],
    setOnboard = _useState2[1];
  var _useState3 = React.useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    initialized = _useState4[0],
    setInitialized = _useState4[1];
  var _useState5 = React.useState(null),
    _useState6 = _slicedToArray(_useState5, 2),
    ethersProvider = _useState6[0],
    setEthersProvider = _useState6[1];
  var _useState7 = React.useState(null),
    _useState8 = _slicedToArray(_useState7, 2),
    defaultProvider = _useState8[0],
    setDefaultProvider = _useState8[1];
  var _useState9 = React.useState(null),
    _useState10 = _slicedToArray(_useState9, 2),
    chainId = _useState10[0],
    setChainId = _useState10[1];
  var _useState11 = React.useState(null),
    _useState12 = _slicedToArray(_useState11, 2);
    _useState12[0];
    _useState12[1];
  var _useState13 = React.useState(null),
    _useState14 = _slicedToArray(_useState13, 2);
    _useState14[0];
    _useState14[1];

  // const { onConnect } = props;

  // const [networkName, setNetworkName] = useState(DEPLOYED_NTW_NAME);
  // const location = useLocation();

  var _useConnectWallet = react.useConnectWallet(),
    _useConnectWallet2 = _slicedToArray(_useConnectWallet, 3),
    _useConnectWallet2$ = _useConnectWallet2[0],
    wallet = _useConnectWallet2$.wallet,
    connecting = _useConnectWallet2$.connecting,
    connect = _useConnectWallet2[1],
    disconnect = _useConnectWallet2[2];
  var _useSetChain = react.useSetChain(),
    _useSetChain2 = _slicedToArray(_useSetChain, 2),
    _useSetChain2$ = _useSetChain2[0],
    chains = _useSetChain2$.chains,
    connectedChain = _useSetChain2$.connectedChain;
    _useSetChain2$.settingChain;
    var _setChain = _useSetChain2[1];
  var connectedWallets = react.useWallets();

  // console.log("onboard", onboard?.state)
  // console.log("wallet", wallet)
  // console.log("connecting", connecting);
  // console.log("connect", connect)
  // console.log("disconnect", disconnect)
  // console.log("chains", chains);
  // console.log("connectedChain", connectedChain)
  // console.log("settingChain", settingChain)
  // console.log("setChain", setChain);
  // console.log("connectedWallets", connectedWallets);

  // Init all supported chain providers
  var providers = React.useMemo(function () {
    return chains.reduce(function (accumulator, chain) {
      accumulator[parseInt(chain.id)] = new ethers.ethers.providers.JsonRpcProvider(chain.rpcUrl);
      return accumulator;
    }, {});
  }, [chains]);
  React.useEffect(function () {
    if (connectedChain && connectedChain.id) {
      console.log('***Set connectec chain id');
      setChainId(parseInt(connectedChain.id));
    }
  }, [connectedChain]);
  React.useEffect(function () {
    setOnboard(web3Onboard);
    setDefaultProvider(new ethers.ethers.providers.JsonRpcProvider(RPC_URL));
  }, []);
  React.useEffect(function () {
    if (!(wallet !== null && wallet !== void 0 && wallet.provider)) {
      console.log('wallet not found, setting default provider', chainId);
      var provider = null;
      if (chainId === DEPLOYED_CHAIN_ID) {
        provider = new ethers.ethers.providers.JsonRpcProvider(RPC_URL);
      } else {
        provider = getProvider(chainId);
      }
      setEthersProvider(provider);
    } else {
      var _provider = new ethers.ethers.providers.Web3Provider(wallet.provider, 'any');
      setEthersProvider(_provider);
    }
  }, [wallet]);
  React.useEffect(function () {
    if (!connectedWallets.length) return;
    var connectedWalletsLabelArray = connectedWallets.map(function (_ref) {
      var label = _ref.label;
      return label;
    });
    window.localStorage.setItem('connectedWallets', JSON.stringify(connectedWalletsLabelArray));
  }, [connectedWallets, wallet]);
  React.useEffect(function () {
    _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var previouslyConnectedWallets;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!connect) {
              _context.next = 6;
              break;
            }
            previouslyConnectedWallets = JSON.parse(window.localStorage.getItem('connectedWallets'));
            if (!(previouslyConnectedWallets !== null && previouslyConnectedWallets !== void 0 && previouslyConnectedWallets.length)) {
              _context.next = 5;
              break;
            }
            _context.next = 5;
            return connect({
              autoSelect: {
                label: previouslyConnectedWallets[0],
                disableModals: true
              }
            });
          case 5:
            setInitialized(true);
          case 6:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  }, [web3Onboard, connect]);

  // const isWalletConnected = () => {
  //     console.log("check wallet state");
  //     if (onboard) {
  //         const state = onboard.getState();
  //         return state.wallet.name != null;
  //     } else return null;
  // };

  var handleConnect = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(e) {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            if (onboard) {
              connect();
            }
          case 1:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function handleConnect(_x) {
      return _ref3.apply(this, arguments);
    };
  }();
  var handleDisconnect = function handleDisconnect() {
    if (onboard) {
      disconnect(wallet);
      setChainId(null);
      window.localStorage.removeItem('connectedWallets');
    }
  };
  var getProvider = function getProvider(contractChainId) {
    if (contractChainId != null) {
      if ( /* contractChainId == DEPLOYED_CHAIN_ID ||  */contractChainId == chainId) {
        return ethersProvider;
      } else {
        if (providers[contractChainId]) {
          return providers[contractChainId];
        } else {
          var chain = chains.find(function (chain) {
            return parseInt(chain.id) == contractChainId;
          });
          if (chain != null) {
            return new ethers.ethers.providers.JsonRpcProvider(chain.rpcUrl);
          }
          // else {
          //   toast.error(`Chain Id:${contractChainId} not supported!`);
          // }
        }
      }
    } else if (isCorrectNetwork) {
      return ethersProvider;
    } else return defaultProvider;
  };
  var isCorrectNetwork = parseInt(connectedChain === null || connectedChain === void 0 ? void 0 : connectedChain.id) === DEPLOYED_CHAIN_ID;
  if (!onboard || !initialized || connecting) {
    return /*#__PURE__*/React__default["default"].createElement("div", {
      style: sx.root
    }, /*#__PURE__*/React__default["default"].createElement("div", {
      style: sx.container
    }, /*#__PURE__*/React__default["default"].createElement(spinnersReact.SpinnerCircular, {
      size: "48px",
      color: "#F64C04"
    })));
  }
  return /*#__PURE__*/React__default["default"].createElement(Web3Ctx.Provider, {
    value: {
      onboard: onboard,
      wallet: wallet,
      address: wallet === null || wallet === void 0 ? void 0 : (_wallet$accounts$ = wallet.accounts[0]) === null || _wallet$accounts$ === void 0 ? void 0 : _wallet$accounts$.address,
      //address: "0x9f90915ccf49b2b83680a720c71a7f83c36ccbff",
      ethersProvider: ethersProvider,
      defaultProvider: defaultProvider,
      chainId: chainId,
      defaultChainId: DEPLOYED_CHAIN_ID,
      connecting: connecting,
      handleConnect: handleConnect,
      handleDisconnect: handleDisconnect,
      isCorrectNetwork: isCorrectNetwork,
      getProvider: getProvider,
      setChain: function setChain(chainId) {
        return _setChain({
          chainId: ethers.ethers.utils.hexValue(chainId)
        });
      }
    }
  }, props.children);
};
var UseMyContext = function UseMyContext() {
  var context = React.useContext(Web3Ctx);
  return context;
};

exports.WalletConnectContext = UseMyContext;
exports.WalletConnectContextProvider = Web3Manager;
