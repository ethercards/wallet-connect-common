'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var ethers = require('ethers');
var React = require('react');
var spinnersReact = require('spinners-react');
var reactToast = require('react-toast');
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
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
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
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
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

var common = {
  INFURA_ID: '96a0984ce6264f5a8edcf752673de5b8',
  GALAXIS_REGISTRY: '0x1e8150050A7a4715aad42b905C08df76883f396F',
  OPENSEA_COLLECTION: 'https://api.opensea.io/api/v1/collection',
  GOOGLE_API: 'https://www.googleapis.com/youtube/v3/search',
  RECAPCHA_SITEKEY: '6LfAjcYeAAAAAJTxnTgx_JVndCSmQgU1gqzEIwoL',
  NO_PROJECT_FOUND: 'no project found'
};
({
  CREDITCARD_ENABLED: true,
  DEPLOYED_NTW_NAME: 'goerli',
  DEPLOYED_CHAIN_ID: 5,
  FORTMATIC_KEY: 'pk_test_DD2BBA8AAA1D4FED',
  RPC_URL: "https://goerli.infura.io/v3/".concat(common.INFURA_ID),
  ETHERSCAN_URL: 'https://goerli.etherscan.io',
  POLYGONSCAN_URL: 'https://mumbai.polygonscan.com',
  OPENSEA_URL: 'https://testnets.opensea.io/',
  API_URL: 'https://cms.dev.galaxis.xyz',
  PREVIEW_URL: 'https://mcb.dev.galaxis.xyz/api/project-session',
  LAUNCHPAD_API_URL: 'https://mcb.dev.galaxis.xyz/api',
  PREVIEW_IMAGES: 'https://mcb.dev.galaxis.xyz/projects/',
  AWS_URL: 'https://cms.dev.galaxis.xyz/storage/app/media',
  AGGREGATOR_URL: 'https://nft-aggregator-goerli.herokuapp.com/token',
  EC_TOKEN_ADDRESS: '0xAAD4475343f5150E33d6194270f04e7e5968A2f8',
  PHOENIX_CONTRACT_ADDRESS: '0x0937aD2d26D1f37c2d8FdA1b4c071e8f3786aF5B',
  CROSSMINT_CLIENT_ID: '7de2bbab-cec3-456b-a2e1-96bbd99cb8ad',
  CROSSMINT_ENV: 'staging',
  CHAINS: [{
    id: "0x5",
    token: "gETH",
    label: "Goerli",
    rpcUrl: "https://goerli.infura.io/v3/".concat(common.INFURA_ID),
    // rpcURL required for wallet balances
    blockExplorerUrl: "https://goerli.etherscan.io"
  }, {
    id: "0x13881",
    token: "mMATIC",
    label: "Polygon Mumbai Testnet",
    rpcUrl: "https://polygon-mumbai.infura.io/v3/".concat(common.INFURA_ID),
    blockExplorerUrl: "https://mumbai.polygonscan.com"
  }]
});
({
  DEPLOYED_NTW_NAME: 'goerli',
  DEPLOYED_CHAIN_ID: 5,
  FORTMATIC_KEY: 'pk_test_DD2BBA8AAA1D4FED',
  RPC_URL: "https://goerli.infura.io/v3/".concat(common.INFURA_ID),
  ETHERSCAN_URL: 'https://goerli.etherscan.io',
  POLYGONSCAN_URL: 'https://mumbai.polygonscan.com',
  OPENSEA_URL: 'https://testnets.opensea.io/',
  API_URL: 'https://cms.staging.galaxis.xyz',
  PREVIEW_URL: 'https://mcb.staging.galaxis.xyz/api/project-session',
  LAUNCHPAD_API_URL: 'https://mcb.staging.galaxis.xyz/api',
  PREVIEW_IMAGES: 'https://mcb.staging.galaxis.xyz/projects/',
  AWS_URL: 'https://cms.staging.galaxis.xyz/storage/app/media',
  AGGREGATOR_URL: 'https://nft-aggregator-goerli.herokuapp.com/token',
  EC_TOKEN_ADDRESS: '0xAAD4475343f5150E33d6194270f04e7e5968A2f8',
  PHOENIX_CONTRACT_ADDRESS: '0x0937aD2d26D1f37c2d8FdA1b4c071e8f3786aF5B',
  CROSSMINT_CLIENT_ID: '7de2bbab-cec3-456b-a2e1-96bbd99cb8ad',
  CROSSMINT_ENV: 'staging',
  CHAINS: [{
    id: "0x5",
    token: "gETH",
    label: "Goerli",
    rpcUrl: "https://goerli.infura.io/v3/".concat(common.INFURA_ID),
    // rpcURL required for wallet balances
    blockExplorerUrl: "https://goerli.etherscan.io"
  }, {
    id: "0x13881",
    token: "mMATIC",
    label: "Polygon Mumbai Testnet",
    rpcUrl: "https://polygon-mumbai.infura.io/v3/".concat(common.INFURA_ID),
    blockExplorerUrl: "https://mumbai.polygonscan.com"
  }]
});
var prod = {
  DEPLOYED_NTW_NAME: 'mainnet',
  DEPLOYED_CHAIN_ID: 1,
  RPC_URL: "https://mainnet.infura.io/v3/".concat(common.INFURA_ID),
  FORTMATIC_KEY: 'pk_live_FBFF1F05F2879F29',
  ETHERSCAN_URL: 'https://etherscan.io',
  POLYGONSCAN_URL: 'https://polygonscan.com',
  OPENSEA_URL: 'https://opensea.io/',
  API_URL: 'https://cms.galaxis.xyz',
  PREVIEW_URL: 'https://mcb.galaxis.xyz/api/project-session',
  LAUNCHPAD_API_URL: 'https://mcb.galaxis.xyz/api',
  PREVIEW_IMAGES: 'https://mcb.galaxis.xyz/projects/',
  AWS_URL: 'https://cms.galaxis.xyz/storage/app/media',
  AGGREGATOR_URL: 'https://nft-aggregator.herokuapp.com/token',
  EC_TOKEN_ADDRESS: '0x97ca7fe0b0288f5eb85f386fed876618fb9b8ab8',
  PHOENIX_CONTRACT_ADDRESS: '0x55B3154Ad761405B0cdd27355943Eb808d40b5A1',
  CROSSMINT_CLIENT_ID: 'b3f5189b-66fe-43d7-8295-c73f9fa3e3ef',
  CROSSMINT_ENV: '',
  CHAINS: [{
    id: "0x1",
    // chain ID must be in hexadecimel
    token: "ETH",
    // main chain token
    label: "Ethereum Mainnet",
    rpcUrl: "https://mainnet.infura.io/v3/".concat(common.INFURA_ID),
    // rpcURL required for wallet balances
    blockExplorerUrl: "https://etherscan.io"
  }, {
    id: "0x89",
    token: "MATIC",
    label: "Polygon Mainnet",
    rpcUrl: "https://polygon-mainnet.infura.io/v3/".concat(common.INFURA_ID),
    blockExplorerUrl: "https://polygonscan.com"
  }]
};

// if use npm/yarn start,  NODE_ENV = "development"
// if use npm/yarn build,  NODE_ENV = "production"
var envConfig = prod; // process.env.NODE_ENV === "development" ? dev : prod
var config = _objectSpread2(_objectSpread2({}, envConfig), common);

var img = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='860.516' height='204.228' viewBox='0 0 860.516 204.228'%3e %3cg id='Galaxis_black' transform='translate(-185.621 -308.011)'%3e %3cg id='Group_3' data-name='Group 3'%3e %3cpath id='Path_16' data-name='Path 16' d='M1041.8%2c419.1a28.588%2c28.588%2c0%2c0%2c0-11.4-7.9%2c163.19%2c163.19%2c0%2c0%2c0-17.6-5.3q-9.15-2.25-14.7-4.2a24.393%2c24.393%2c0%2c0%2c1-9.1-5.5%2c12.974%2c12.974%2c0%2c0%2c1-3.6-9.6%2c15.706%2c15.706%2c0%2c0%2c1%2c6.6-13c4.4-3.3%2c10.9-5%2c19.6-5a48.867%2c48.867%2c0%2c0%2c1%2c13.9%2c2.1%2c47.434%2c47.434%2c0%2c0%2c1%2c13.3%2c6.2l3.5-8.4a48.065%2c48.065%2c0%2c0%2c0-14.1-6.4%2c58.366%2c58.366%2c0%2c0%2c0-16.6-2.3c-8.1%2c0-14.9%2c1.2-20.4%2c3.7s-9.5%2c5.7-12.2%2c9.8a25.222%2c25.222%2c0%2c0%2c0-4%2c13.7c0%2c6.1%2c1.6%2c11%2c4.7%2c14.6a29.224%2c29.224%2c0%2c0%2c0%2c11.4%2c8%2c146.889%2c146.889%2c0%2c0%2c0%2c17.8%2c5.4%2c136.535%2c136.535%2c0%2c0%2c1%2c14.6%2c4.2%2c25.136%2c25.136%2c0%2c0%2c1%2c8.8%2c5.4%2c12.739%2c12.739%2c0%2c0%2c1%2c3.6%2c9.5c0%2c5.2-2.2%2c9.4-6.7%2c12.7-4.4%2c3.3-11.1%2c4.9-20%2c4.9a52.513%2c52.513%2c0%2c0%2c1-18.4-3.3%2c39.383%2c39.383%2c0%2c0%2c1-14.3-8.7l-4.1%2c8.1q5.55%2c5.85%2c15.6%2c9.3a62.465%2c62.465%2c0%2c0%2c0%2c21.2%2c3.5c8.1%2c0%2c15-1.2%2c20.5-3.6%2c5.6-2.4%2c9.7-5.7%2c12.4-9.8a24.406%2c24.406%2c0%2c0%2c0%2c4-13.7c.3-6-1.2-10.8-4.3-14.4' fill='%23010202'/%3e %3cpath id='Path_17' data-name='Path 17' d='M557.2%2c360.6l-45.3%2c99.1H523l28.5-10.6H527.7l34.8-77.6L602%2c459.7h10.9l-45.3-99.1Z' fill='%23010202'/%3e %3cpath id='Path_18' data-name='Path 18' d='M836.2%2c459.7h12.1l30.9-42.4-18.7%2c9.5Z' fill='%23010202'/%3e %3cpath id='Path_19' data-name='Path 19' d='M891.5%2c401.6l30.1-41H910.3l-29.8%2c40.5-29.8-40.5H838.6l35.2%2c48Z' fill='%23010202'/%3e %3cpath id='Path_20' data-name='Path 20' d='M880.5%2c416.6l31.6%2c43.1h12.2l-35.1-47.5Z' fill='%23010202'/%3e %3cpath id='Path_21' data-name='Path 21' d='M941.4%2c382.1l10.5-4V360.6H941.4Z' fill='%23010202'/%3e %3cpath id='Path_22' data-name='Path 22' d='M941.4%2c459.7h10.5V380.3l-10.5%2c5.4Z' fill='%23010202'/%3e %3cpath id='Path_23' data-name='Path 23' d='M764.2%2c360.6l-45.3%2c99.1H730l28.5-10.6H734.7l34.8-77.6L809%2c459.7h10.9l-45.3-99.1Z' fill='%23010202'/%3e %3cpath id='Path_24' data-name='Path 24' d='M441.4%2c374.4a44.969%2c44.969%2c0%2c0%2c1%2c21.7-5.3c12.1%2c0%2c22%2c3.9%2c29.9%2c11.6l6.5-6.7a41.4%2c41.4%2c0%2c0%2c0-16-10.7%2c58.245%2c58.245%2c0%2c0%2c0-20.8-3.6%2c55.466%2c55.466%2c0%2c0%2c0-26.9%2c6.5%2c47.861%2c47.861%2c0%2c0%2c0-18.7%2c18.1%2c52.344%2c52.344%2c0%2c0%2c0%2c0%2c51.6%2c47.612%2c47.612%2c0%2c0%2c0%2c18.7%2c18%2c55.073%2c55.073%2c0%2c0%2c0%2c26.8%2c6.5%2c60.8%2c60.8%2c0%2c0%2c0%2c20-3.3%2c49.7%2c49.7%2c0%2c0%2c0%2c16.4-9.3V418.5L488.9%2c423v20.4c-7.1%2c5.1-15.7%2c7.6-25.9%2c7.6a43.937%2c43.937%2c0%2c0%2c1-21.7-5.4%2c39.505%2c39.505%2c0%2c0%2c1-15.1-14.7%2c40.152%2c40.152%2c0%2c0%2c1-5.5-21%2c40.659%2c40.659%2c0%2c0%2c1%2c5.5-21%2c39.28%2c39.28%2c0%2c0%2c1%2c15.2-14.5' fill='%23010202'/%3e %3cpath id='Path_25' data-name='Path 25' d='M643.4%2c360.6h-.1l.1.1Z' fill='%23010202'/%3e %3cpath id='Path_26' data-name='Path 26' d='M643.4%2c361l-10.5%2c4.7v94h66v-9.1H643.4Z' fill='%23010202'/%3e %3c/g%3e %3cg id='Group_4' data-name='Group 4'%3e %3cpath id='Path_27' data-name='Path 27' d='M327.5%2c370a40.2%2c40.2%2c0%2c0%2c1%2c15.7%2c10.8A43.091%2c43.091%2c0%2c0%2c1%2c320.8%2c452c-17.1%2c4-35.9-3.7-45.8-19.2-5.2-8.2-12.2-12.4-22-11.9-11.1.6-20.9%2c10.5-21.4%2c21.5-.5%2c12.6%2c7.7%2c23.2%2c19.5%2c24.7%2c3%2c.4%2c6.1-.2%2c9.1-.3.8%2c0%2c1.8-.2%2c2.4.2%2c5.8%2c3.9%2c11.5%2c8%2c17.3%2c12a40.946%2c40.946%2c0%2c0%2c1-17.5%2c7.4%2c42.9%2c42.9%2c0%2c0%2c1-49.8-33.8c-4.8-23%2c10.4-46.1%2c33.4-50.7%2c3.1-.6%2c6.3-.8%2c9.4-1.1%2c9.4-.8%2c16.1-5.6%2c19.6-14.3%2c3.5-8.8%2c2.1-17-4.2-24.1-6.2-7-14.2-9.5-23.2-7.1s-14.6%2c8.5-16.9%2c17.5a3.592%2c3.592%2c0%2c0%2c1-1.5%2c2.1c-5.7%2c3-11.5%2c5.9-17.3%2c8.7a6.374%2c6.374%2c0%2c0%2c1-.9.2%2c41.989%2c41.989%2c0%2c0%2c1%2c3.4-24%2c43%2c43%2c0%2c0%2c1%2c69.3-12.7c12.9%2c12.6%2c16.4%2c31.7%2c9%2c48.5-.8%2c1.7-1.5%2c3.4-2.4%2c5.1-6.1%2c12.1%2c1.2%2c28.4%2c16.3%2c31.8a23.484%2c23.484%2c0%2c0%2c0%2c25.7-12.2c4.9-9.4%2c2.8-20.5-5.2-27.9a3.7%2c3.7%2c0%2c0%2c1-1.2-2.5c.3-6.4.8-12.8%2c1.3-19.1A1.578%2c1.578%2c0%2c0%2c0%2c327.5%2c370Z' fill='%23010202'/%3e %3cpath id='Path_28' data-name='Path 28' d='M317.4%2c394.3c7%2c3.4%2c10.9%2c8.8%2c10.6%2c16.8-.4%2c8.3-7.9%2c15.3-16.3%2c15.3-8.7%2c0-16.4-6.9-16.4-15.3a19.823%2c19.823%2c0%2c0%2c1%2c2.1-9.3c9.7-17.8%2c7.9-40.2-5.4-55.7-13.4-15.6-30.6-21.5-50.5-16.5-19.7%2c5-31.9%2c18.2-36.5%2c38-1.5%2c6.2-.8%2c12.6.6%2c18.8a3.208%2c3.208%2c0%2c0%2c1-.5%2c2.7c-4.3%2c4.7-8.8%2c9.3-13.1%2c13.8-8.5-14.9-10.5-44.4%2c6.6-67.5A67.529%2c67.529%2c0%2c0%2c1%2c278.4%2c313C301.9%2c322.6%2c328.2%2c352.1%2c317.4%2c394.3Z' fill='%23010202'/%3e %3cpath id='Path_29' data-name='Path 29' d='M307.4%2c485.8a65.549%2c65.549%2c0%2c0%2c1-17.5%2c16.1c-40.3%2c25.5-94.3%2c1.4-102-45.7-5.6-33.5%2c14.2-65.4%2c46.9-75.5%2c1.8-.5%2c2.4-1.2%2c2.4-3.1a16.433%2c16.433%2c0%2c0%2c1%2c32.8-1.1c.7%2c9.1-5.4%2c17-14.3%2c17.8-7.3.6-14.4%2c1.5-21.1%2c4.5-19.8%2c8.9-31.9%2c30-29.3%2c51.2a49.878%2c49.878%2c0%2c0%2c0%2c41.6%2c43.5c14.7%2c2.3%2c27.8-1.3%2c39.4-10.5a3.959%2c3.959%2c0%2c0%2c1%2c3.9-.8C295.7%2c483.4%2c301.4%2c484.5%2c307.4%2c485.8Z' fill='%23010202'/%3e %3cpath id='Path_30' data-name='Path 30' d='M320.2%2c343.5c23.5%2c2.5%2c48.8%2c20.3%2c56.3%2c49.9A67.151%2c67.151%2c0%2c0%2c1%2c346.8%2c467c-24.1%2c15.1-58.1%2c14.4-82.6-9-5.6%2c3.3-11.4%2c3.7-17.3.6a16.39%2c16.39%2c0%2c0%2c1-8.3-17.3c1-6.6%2c6.4-12%2c13.5-13.4%2c6.3-1.3%2c13.4%2c1.9%2c16.9%2c7.7%2c9.5%2c15.5%2c23.6%2c23.7%2c41.6%2c24.2a49.384%2c49.384%2c0%2c0%2c0%2c50.3-42.2c3.4-24.2-9.7-46.1-32.7-54.5a3.3%2c3.3%2c0%2c0%2c1-2.5-3%2c65.6%2c65.6%2c0%2c0%2c0-2.3-8.4C322.4%2c348.9%2c321.3%2c346.3%2c320.2%2c343.5Z' fill='%23010202'/%3e %3c/g%3e %3c/g%3e%3c/svg%3e";

config.RPC_URL;
  var FORTMATIC_KEY = config.FORTMATIC_KEY;
  config.ETHERSCAN_URL;
  config.POLYGON_EXPLORER_URL;
var injected = injectedModule__default["default"]();
var walletConnect = walletConnectModule__default["default"]();
var mew = mewModule__default["default"]();
var ledger = ledgerModule__default["default"]();
var torus = torusModule__default["default"]();
var coinbase = coinbaseModule__default["default"]();
var fortmatic = fortmaticModule__default["default"]({
  apiKey: FORTMATIC_KEY
});
var trezor = trezorModule__default["default"]({
  appUrl: 'https://galaxis.xyz/',
  email: 'info@galaxis.xyz'
});
var web3Onboard = react.init({
  accountCenter: {
    desktop: {
      position: 'topRight',
      enabled: false
      // minimal: true,
    }
  },

  wallets: [injected, walletConnect, torus, mew, fortmatic, trezor, ledger, coinbase],
  chains: config.CHAINS,
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

var Web3Ctx = /*#__PURE__*/React.createContext({});

var DEPLOYED_CHAIN_ID = config.DEPLOYED_CHAIN_ID,
  RPC_URL = config.RPC_URL;
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
var Web3Manager = function Web3Manager(_ref) {
  var _wallet$accounts$;
  var children = _ref.children;
    _ref.props;
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
      if (chainId === config.DEPLOYED_CHAIN_ID) {
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
    var connectedWalletsLabelArray = connectedWallets.map(function (_ref2) {
      var label = _ref2.label;
      return label;
    });
    window.sessionStorage.setItem('connectedWallets', JSON.stringify(connectedWalletsLabelArray));
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
            previouslyConnectedWallets = JSON.parse(window.sessionStorage.getItem('connectedWallets'));
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
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(e) {
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
      return _ref4.apply(this, arguments);
    };
  }();
  var handleDisconnect = function handleDisconnect() {
    if (onboard) {
      disconnect(wallet);
      setChainId(null);
      window.sessionStorage.removeItem('connectedWallets');
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
          } else {
            reactToast.toast.error("Chain Id:".concat(contractChainId, " not supported!"));
          }
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
      defaultChainId: config.DEPLOYED_CHAIN_ID,
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
  }, children);
};
var UseMyContext = function UseMyContext() {
  var context = React.useContext(Web3Ctx);
  console.log(context, ' context');
  return context;
};

exports.WalletConnectContext = UseMyContext;
exports.WalletConnectContextProvider = Web3Manager;
