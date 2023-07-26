var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { Decimal } from 'decimal.js';
import fetch from 'cross-fetch';
// use sha256 with unit8array instead of ethereumjsUtil or crypto-js 
import SHA256 from 'crypto-js/sha256';
import hash from './sha256-uint8array.min.js'
import 'regenerator-runtime/runtime';
export function generateRandomValue(length) {
    return __spreadArray([], Array(length), true).map(function () { return Math.floor(Math.random() * 16).toString(16); })
        .join('');
}
export function assertIsArray(input) {
    if (!Array.isArray(input)) {
        var msg = "This method only supports number arrays but input was: ".concat(input);
        throw new Error(msg);
    }
}
function sha256FromArray(a,tog=1) {
    assertIsArray(a);
    // aaaa this is a bad idea aaaa
    if (tog==1) {
        // probably a better way to do this..
        var b = Buffer.from(a);
        var data = b.toString();
        return Buffer.from(SHA256(data).toString(), 'hex');
    } else {
        var b = Buffer.from(a)
        var data = b.toString()
        return Buffer.from(hash.createHash("sha256").update(a).digest(),"hex")
   }
}
export function chunkArray(array, chunkSize) {
    var i, j, temporary;
    var returnArray = [];
    for (i = 0, j = array.length; i < j; i += chunkSize) {
        temporary = array.slice(i, i + chunkSize);
        returnArray.push(temporary);
    }
    return returnArray;
}
export function range(start, stop, step) {
    if (step === void 0) { step = 1; }
    if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
        return [];
    }
    var result = [];
    for (var i = start; step > 0 ? i < stop : i > stop; i += step) {
        result.push(i);
    }
    return result;
}
/*function getDictionaryLength(someDict: any): number {
    const counter: number = 0
    for (var key in someDict) {
        if (someDict.hasOwnProperty(key)) {
            counter += 1
        }
    }
    return counter
}*/
var REPLACE_API = function () {
    var protocol = "https:";
    //    typeof window == "object" ? window.location.protocol : "https:"
    return "".concat(protocol, "//webcash.org/api/v1/replace");
};
var HEALTHCHECK_API = function () {
    var protocol = "https:";
    //    typeof window == "object" ? window.location.protocol : "https:"
    return "".concat(protocol, "//webcash.org/api/v1/health_check");
};
// deterministic wallets should not use this function
export function createWebcashWithRandomSecretFromAmount(amount) {
    return "e".concat(decimalAmountToString(amount), ":secret:").concat(generateRandomValue(32));
}
// Check that the amount has no more than a maximum number of decimal places.
export function validateAmountDecimals(amount) {
    if (!(amount instanceof Decimal)) {
        amount = stringAmountToDecimal(amount);
    }
    if (amount.decimalPlaces() <= 8) {
        return true;
    }
    else {
        throw new RangeError("Amount precision should be at most 8 decimals.");
    }
}
// Convert a decimal amount to a string. This is used for representing
// different webcash when serializing webcash. When the amount is not known,
// the string should be "?".
export function decimalAmountToString(amount) {
    if (amount == null) {
        return "?";
    }
    else {
        if (amount.isInteger()) {
            return amount.toString();
        }
        else {
            var amount_str = amount.toFixed(8); // force 8 decimals
            return amount_str.replace(/\.?0+$/, ''); // trim any trailing zeros
        }
    }
}
// Convert from a string amount to a Decimal value.
export function stringAmountToDecimal(amount) {
    return new Decimal(amount);
}
export function parseAmountFromString(amount_raw) {
    // If there is a colon in the value, then the amount is going to be on the
    // left hand side.
    var part1 = amount_raw.split(":")[0];
    // There can be at most one 'e' in the value, at the beginning.
    var count = part1.split("e").length - 1;
    if (count == 0) {
        return new Decimal(part1);
    }
    else if (count <= 1) {
        // should be at the beginning
        if (part1[0] == "e") {
            // there needs to be an actual amount
            if (part1 != "e") {
                var part2 = part1.split("e")[1];
                return new Decimal(part2);
            }
            else {
                throw new Error("Invalid amount format for webcash.");
            }
        }
        else {
            throw new Error("Invalid amount format for webcash.");
        }
    }
    else {
        throw new Error("Invalid amount format for webcash.");
    }
}
// Take any kind of webcash and instantiate an object with the values specified
// by the serialized webcash.
export function deserializeWebcash(webcash) {
    if (webcash.includes(":")) {
        var parts = webcash.split(":");
        if (parts.length < 2) {
            throw new Error("Don't know how to deserialize this webcash.");
        }
        var amount_raw = parts[0];
        var public_or_secret = parts[1];
        var value = parts[2];
        if (!["public", "secret"].includes(public_or_secret)) {
            throw new Error("Can't deserialize this webcash, needs to be either public/secret.");
        }
        var amount = parseAmountFromString(amount_raw);
        if (public_or_secret == "secret") {
            return new SecretWebcash(amount, value);
        }
        else if (public_or_secret == "public") {
            return new PublicWebcash(amount, value);
        }
        else {
            throw new Error("Don't know how to deserialize this webcash.");
        }
    }
    else {
        throw new Error("Unusable format for webcash.");
    }
}
export function convertSecretValueToPublicValue(secret_value) {
    var publicvalue = SHA256(secret_value);
    return "".concat(publicvalue);
}
export function hexToBytes(hex) {
    // TODO: verify that hex is really a hex string
    hex = hex.replace(/^0x/i, '');
    for (var bytes = [], c = 0; c < hex.length; c += 2) {
        bytes.push(parseInt(hex.substr(c, 2), 16));
    }
    return bytes;
}
// Not sure this really works... see longToByteArray instead.
export function paddedBytes(bytes, paddingTargetLength) {
    if (paddingTargetLength === void 0) { paddingTargetLength = 32; }
    if (bytes.length == paddingTargetLength) {
        return bytes;
    }
    else if (bytes.length > paddingTargetLength) {
        throw new Error("Can only handle up to ".concat(paddingTargetLength, " bytes, int too big to convert"));
    }
    else {
        var returnValue = [];
        for (var x = 0; x < bytes.length; x += 1) {
            returnValue.push(bytes[x]);
        }
        // TODO: ... probably should use struct.pack(">Q", n)
        while (returnValue.length != paddingTargetLength) {
            returnValue.unshift(0);
        }
        return returnValue;
    }
}
export function longToByteArray(num) {
    var byteArray = [0, 0, 0, 0, 0, 0, 0, 0];
    for (var index = 0; index < byteArray.length; index++) {
        var some_byte = num & 0xff;
        byteArray[index] = some_byte;
        num = (num - some_byte) / 256;
    }
    return byteArray;
}
;
// for compatibility with the python wallet
export function hexToPaddedBytes(hex, paddingTargetLength) {
    if (paddingTargetLength === void 0) { paddingTargetLength = 32; }
    var bytes = hexToBytes(hex);
    return paddedBytes(bytes, paddingTargetLength);
}
export function convertSecretHexToBytes(secret) {
    return hexToPaddedBytes(secret);
}
var SecretWebcash = /** @class */ (function () {
    // If you need to deserialize webcash, then use deserializeWebcash to
    // create instantiated objects. Here, we only accept the direct parameters.
    function SecretWebcash(amount, secret_value) {
        validateAmountDecimals(amount);
        this.amount = amount;
        this.secret_value = secret_value;
    }
    SecretWebcash.deserialize = function (webcash) {
        return deserializeWebcash(webcash);
    };
    // Generate a new SecretWebcash from an amount with a new secret value.
    // This does not use the deterministic wallet.
    SecretWebcash.fromAmount = function (amount) {
        return SecretWebcash.deserialize(createWebcashWithRandomSecretFromAmount(amount));
    };
    SecretWebcash.prototype.isEqual = function (other) {
        if (other instanceof SecretWebcash) {
            if (this.secret_value == other.secret_value) {
                return true;
            }
            else {
                return false;
            }
        }
        else if (other instanceof PublicWebcash) {
            if (this.toPublic().hashed_value == other.hashed_value) {
                return true;
            }
            else {
                return false;
            }
        }
        return false;
    };
    SecretWebcash.prototype.toString = function () {
        return "e".concat(decimalAmountToString(this.amount), ":secret:").concat(this.secret_value);
    };
    SecretWebcash.prototype.toPublic = function () {
        var hashed_value = convertSecretValueToPublicValue(this.secret_value);
        return new PublicWebcash(this.amount, hashed_value);
    };
    return SecretWebcash;
}());
export { SecretWebcash };
var PublicWebcash = /** @class */ (function () {
    function PublicWebcash(amount, hashed_value) {
        validateAmountDecimals(amount);
        this.amount = amount;
        this.hashed_value = hashed_value;
    }
    // TODO: this might involve some type coercion if a secret value is
    // given...
    PublicWebcash.deserialize = function (webcash) {
        return deserializeWebcash(webcash);
    };
    PublicWebcash.prototype.isEqual = function (other) {
        if (other instanceof SecretWebcash) {
            if (this.hashed_value == other.toPublic().hashed_value) {
                return true;
            }
            else {
                return false;
            }
        }
        if (other instanceof PublicWebcash) {
            if (this.hashed_value == other.hashed_value) {
                return true;
            }
            else {
                return false;
            }
        }
        return false;
    };
    PublicWebcash.prototype.toString = function () {
        return "e".concat(decimalAmountToString(this.amount), ":public:").concat(this.hashed_value);
    };
    return PublicWebcash;
}());
export { PublicWebcash };
var chainCodes = {
    "RECEIVE": 0,
    "PAY": 1,
    "CHANGE": 2,
    "MINING": 3,
};
var WebcashWallet = /** @class */ (function () {
    function WebcashWallet(_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.legalese, legalese = _c === void 0 ? { "terms": null } : _c, _d = _b.webcash, webcash = _d === void 0 ? [] : _d, _e = _b.unconfirmed, unconfirmed = _e === void 0 ? [] : _e, _f = _b.log, log = _f === void 0 ? [] : _f, _g = _b.master_secret, master_secret = _g === void 0 ? "" : _g, _h = _b.walletdepths, walletdepths = _h === void 0 ? {
            "RECEIVE": 0,
            "PAY": 0,
            "CHANGE": 0,
            "MINING": 0, // not relevant
        } : _h, _j = _b.version, version = _j === void 0 ? "1.0" : _j;
        this.version = version || "1.0";
        this.legalese = legalese || { "terms": null };
        this.webcash = webcash || [];
        this.unconfirmed = unconfirmed || [];
        this.log = log || [];
        // Accept the given master_secret value or create a new random secret.
        this.master_secret = master_secret || "";
        if (typeof master_secret === "undefined" || master_secret === "") {
            this.master_secret = generateRandomValue(32);
        }
        this.walletdepths = walletdepths || {
            "RECEIVE": 0,
            "PAY": 0,
            "CHANGE": 0,
            "MINING": 0, // not relevant
        };
    }
    // Check that the legal agreements have been agreed to and acknowledged.
    WebcashWallet.prototype.checkLegalAgreements = function () {
        if (this.legalese["terms"] != true) {
            return false;
        }
        else if (this.legalese["terms"] == true) {
            return true;
        }
    };
    WebcashWallet.prototype.setLegalAgreementsToTrue = function () {
        this.legalese["terms"] = true;
    };
    WebcashWallet.prototype.getContents = function () {
        return {
            master_secret: this.master_secret,
            walletdepths: this.walletdepths,
            webcash: this.webcash,
            unconfirmed: this.unconfirmed,
            log: this.log,
            version: this.version,
            legalese: this.legalese,
        };
    };
    // Calculate the balance based on the webcash in the wallet. This does not
    // make any requests to the server to check currentness.
    WebcashWallet.prototype.getBalance = function () {
        return this.webcash
            .map(function (n) { return SecretWebcash.deserialize(n).amount; })
            .reduce(function (prev, next) {
            return prev.plus(next);
        }, new Decimal(0));
    };
    // Insert webcash into the wallet. Replace the given webcash with new
    // webcash.
    WebcashWallet.prototype.insert = function (webcash, memo) {
        if (memo === void 0) { memo = ""; }
        return __awaiter(this, void 0, Promise, function () {
            var new_webcash, replace_request_body, new_webcash_str, response, response_content, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // deserialize the given webcash
                        if (typeof webcash == "string") {
                            webcash = SecretWebcash.deserialize(webcash);
                        }
                        new_webcash = new SecretWebcash(webcash.amount, this.generateNextSecret("RECEIVE"));
                        // Check this.legalese before submitting an HTTP request.
                        if (!this.checkLegalAgreements()) {
                            throw new Error("User hasn't agreed to the legal terms.");
                        }
                        replace_request_body = {
                            webcashes: [webcash.toString()],
                            new_webcashes: [new_webcash.toString()],
                            legalese: this.legalese,
                        };
                        new_webcash_str = new_webcash.toString();
                        this.unconfirmed.push(new_webcash_str);
                        // .. somewhat unnecessary with the deterministic wallet.
                        if (typeof this.save !== "undefined") {
                            this.save();
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        //console.debug("Replacing..", JSON.stringify(replace_request_body))
                        console.debug("Replacing..");
                        return [4 /*yield*/, fetch(REPLACE_API(), {
                                body: JSON.stringify(replace_request_body),
                                method: "post",
                            })];
                    case 2:
                        response = _a.sent();
                        return [4 /*yield*/, response.text()];
                    case 3:
                        response_content = _a.sent();
                        console.debug("After replace API call. Response = ", response_content);
                        if (response.status != 200) {
                            // TODO: save the wallet
                            throw new Error("Server returned an error: " + response_content);
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _a.sent();
                        // TODO: save the wallet
                        console.log("Could not successfully call replacement API");
                        throw e_1;
                    case 5:
                        // remove from unconfirmeds
                        this.unconfirmed = this.unconfirmed.filter(function (item) { return item !== new_webcash_str; });
                        this.webcash.push(new_webcash.toString());
                        this.log.push({
                            type: "insert",
                            amount: decimalAmountToString(new_webcash.amount),
                            webcash: webcash.toString(),
                            new_webcash: new_webcash_str,
                            memo: memo,
                            timestamp: Date.now().toString(),
                        });
                        // TODO: save the wallet!!!
                        return [2 /*return*/, new_webcash.toString()];
                }
            });
        });
    };
    // Make a payment in the exact amount specified.
    WebcashWallet.prototype.pay = function (amount, memo) {
        if (memo === void 0) { memo = ''; }
        return __awaiter(this, void 0, Promise, function () {
            var haveEnough, inputWebcash, i, l, webcash, runningAmount, runningWebcash, i, l, webcash, foundAmount, changeAmount, changeWebcash, new_webcash, transferWebcash, replace_request_body, response, response_content, e_2, transferWebcash_str, changeWebcash_str_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(amount instanceof Decimal)) {
                            amount = new Decimal(amount);
                        }
                        // Check this.legalese before submitting an HTTP request.
                        if (!this.checkLegalAgreements()) {
                            throw new Error("User hasn't agreed to the legal terms.");
                        }
                        haveEnough = false;
                        inputWebcash = [];
                        // Try to satisfy the request with a single payment that matches the
                        // size.
                        for (i = 0, l = this.webcash.length; i < l; i++) {
                            webcash = SecretWebcash.deserialize(this.webcash[i]);
                            if (webcash.amount.gte(amount)) {
                                inputWebcash.push(webcash);
                                haveEnough = true;
                                break;
                            }
                        }
                        if (!haveEnough) {
                            runningAmount = new Decimal(0);
                            runningWebcash = [];
                            for (i = 0, l = this.webcash.length; i < l; i++) {
                                webcash = SecretWebcash.deserialize(this.webcash[i]);
                                runningAmount = runningAmount.plus(webcash.amount);
                                runningWebcash.push(webcash);
                                if (runningAmount.gte(amount)) {
                                    inputWebcash = runningWebcash;
                                    haveEnough = true;
                                    break;
                                }
                            }
                        }
                        if (!haveEnough) {
                            //console.error("Wallet does not have enough funds to make the transfer.")
                            throw new Error("Wallet does not have enough funds to make the transfer.");
                        }
                        foundAmount = inputWebcash
                            .map(function (w) { return w.amount; })
                            .reduce(function (prev, next) {
                            return prev.plus(next);
                        }, new Decimal(0));
                        changeAmount = new Decimal(foundAmount);
                        changeAmount = changeAmount.minus(decimalAmountToString(amount));
                        new_webcash = [];
                        //if (changeAmount > new Decimal(0)) {
                        if (changeAmount.gt(new Decimal(0))) {
                            changeWebcash = new SecretWebcash(changeAmount, this.generateNextSecret("CHANGE"));
                            new_webcash.push(changeWebcash.toString());
                        }
                        transferWebcash = new SecretWebcash(amount, this.generateNextSecret("PAY"));
                        new_webcash.push(transferWebcash.toString());
                        replace_request_body = {
                            webcashes: inputWebcash.map(function (n) { return n.toString(); }),
                            new_webcashes: new_webcash,
                            legalese: this.legalese,
                        };
                        // Save the new webcash into the wallet so that in the event that the
                        // operation succeeded but there is a network error, that the wallet
                        // will not lose the value of the webcash.
                        this.unconfirmed.push(transferWebcash.toString());
                        if (typeof changeWebcash !== "undefined") {
                            this.unconfirmed.push(changeWebcash.toString());
                        }
                        // .. somewhat unnecessary with the deterministic wallet.
                        if (typeof this.save !== "undefined") {
                            this.save();
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, fetch(REPLACE_API(), {
                                body: JSON.stringify(replace_request_body),
                                method: "post",
                            })];
                    case 2:
                        response = _a.sent();
                        return [4 /*yield*/, response.text()];
                    case 3:
                        response_content = _a.sent();
                        if (response.status != 200) {
                            throw new Error("Server returned an error: " + response_content);
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        e_2 = _a.sent();
                        console.log("Could not successfully call the replacement API");
                        throw e_2;
                    case 5:
                        // remove the webcash from the wallet
                        this.webcash = this.webcash.filter(function (n) { return !replace_request_body.webcashes.includes(n); });
                        transferWebcash_str = transferWebcash.toString();
                        this.unconfirmed = this.unconfirmed.filter(function (item) { return item !== transferWebcash_str; });
                        if (typeof changeWebcash !== "undefined") {
                            changeWebcash_str_1 = changeWebcash.toString();
                            this.unconfirmed = this.unconfirmed.filter(function (item) { return item !== changeWebcash_str_1; });
                        }
                        // record change
                        if (changeAmount && !(typeof changeWebcash === "undefined")) {
                            this.webcash.push(changeWebcash.toString());
                            this.log.push({
                                type: "change",
                                amount: decimalAmountToString(changeAmount),
                                webcash: changeWebcash.toString(),
                                timestamp: Date.now().toString(),
                            });
                        }
                        // record payment
                        this.log.push({
                            type: "payment",
                            amount: decimalAmountToString(transferWebcash.amount),
                            webcash: transferWebcash.toString(),
                            memo: memo,
                            timestamp: Date.now().toString(),
                        });
                        // TODO: save the wallet!!! update something to indicate that the
                        // wallet has been modified since last saved.
                        return [2 /*return*/, transferWebcash.toString()];
                }
            });
        });
    };
    WebcashWallet.prototype.processHealthcheckResults = function (results, webcashesMap) {
        if (webcashesMap === void 0) { webcashesMap = {}; }
        var _loop_1 = function () {
            if (results.hasOwnProperty(key)) {
                var publicWebcash = key;
                var result = results[key];
                var hashed_value_1 = PublicWebcash.deserialize(publicWebcash).hashed_value;
                var wallet_cash = SecretWebcash.deserialize(webcashesMap[hashed_value_1]);
                if (result["spent"] === false) {
                    // Check the amount.
                    var result_amount = new Decimal(result["amount"]);
                    if (!result_amount.equals(wallet_cash.amount)) {
                        console.log("Wallet was mistaken about amount stored by a certain webcash. Updating.");
                        this_1.webcash = this_1.webcash.filter(function (item) { return item !== webcashesMap[hashed_value_1]; });
                        this_1.webcash.push(new SecretWebcash(result_amount, wallet_cash.secret_value).toString());
                    }
                    else {
                        //console.log("Amount was correct.")
                    }
                }
                else if ([null, true].includes(result["spent"])) {
                    // Invalid webcash found. Remove from wallet.
                    console.log("Removing some webcash.");
                    this_1.webcash = this_1.webcash.filter(function (item) { return item !== webcashesMap[hashed_value_1]; });
                    this_1.unconfirmed.push(webcashesMap[hashed_value_1]);
                }
                else {
                    throw new Error("Invalid webcash status: " + result["spent"].toString());
                }
            }
        };
        var this_1 = this;
        for (var key in results) {
            _loop_1();
        }
    };
    // Check every webcash in the wallet and remove any invalid already-spent
    // webcash.
    WebcashWallet.prototype.check = function () {
        return __awaiter(this, void 0, Promise, function () {
            var webcashes, chunks, _i, chunks_1, chunk, healthCheckRequest, response, response_content, response_data, results, e_3;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        webcashes = {};
                        this.webcash.forEach(function (webcash) {
                            var sk = SecretWebcash.deserialize(webcash);
                            var hashed_value = sk.toPublic().hashed_value;
                            // Detect and remove duplicates.
                            if (hashed_value in webcashes) {
                                console.log("Duplicate webcash detected in wallet, moving it to unconfirmed");
                                _this.unconfirmed.push(webcash);
                                // remove all copies
                                _this.webcash = _this.webcash.filter(function (item) { return item !== webcash; });
                                // add one copy back for a total of one
                                _this.webcash.push(webcash);
                                if (typeof _this.save !== "undefined") {
                                    _this.save();
                                }
                            }
                            // Make a map from the hashed value back to the webcash which can
                            // be used for lookups when the server gives a response.
                            webcashes[hashed_value] = webcash;
                        });
                        chunks = chunkArray(this.webcash, 25);
                        _i = 0, chunks_1 = chunks;
                        _a.label = 1;
                    case 1:
                        if (!(_i < chunks_1.length)) return [3 /*break*/, 7];
                        chunk = chunks_1[_i];
                        healthCheckRequest = chunk;
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 5, , 6]);
                        return [4 /*yield*/, fetch(HEALTHCHECK_API(), {
                                body: JSON.stringify(healthCheckRequest),
                                method: "post",
                            })];
                    case 3:
                        response = _a.sent();
                        return [4 /*yield*/, response.text()];
                    case 4:
                        response_content = _a.sent();
                        if (response.status != 200) {
                            throw new Error("Server returned an error: " + response_content);
                        }
                        response_data = JSON.parse(response_content);
                        results = response_data["results"];
                        this.processHealthcheckResults(results, webcashes);
                        return [3 /*break*/, 6];
                    case 5:
                        e_3 = _a.sent();
                        console.log("Could not successfully call the healthcheck API");
                        throw e_3;
                    case 6:
                        _i++;
                        return [3 /*break*/, 1];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    WebcashWallet.prototype.recover = function (gaplimit, sweep_payments) {
        if (gaplimit === void 0) { gaplimit = 20; }
        if (sweep_payments === void 0) { sweep_payments = false; }
        return __awaiter(this, void 0, Promise, function () {
            var _a, _b, _c, _i, chainCode, current_walletdepth, reported_walletdepth, _idx, last_used_walletdepth, has_had_webcash, _loop_2, this_2;
            var _this = this;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: 
                    // gaplimit is the maximum window span that will be used, on the
                    // assumption that any valid webcash will be found within the last item
                    // plus gaplimit number more of the secrets.
                    // sweep_payments indicates whether to sweep all webcash from pending
                    // payments. It is disabled by default because in theory these are
                    // payments meant for someone else.
                    // Start by healthchecking the contents of the wallet.
                    return [4 /*yield*/, this.check()];
                    case 1:
                        // gaplimit is the maximum window span that will be used, on the
                        // assumption that any valid webcash will be found within the last item
                        // plus gaplimit number more of the secrets.
                        // sweep_payments indicates whether to sweep all webcash from pending
                        // payments. It is disabled by default because in theory these are
                        // payments meant for someone else.
                        // Start by healthchecking the contents of the wallet.
                        _d.sent();
                        _a = this.walletdepths;
                        _b = [];
                        for (_c in _a)
                            _b.push(_c);
                        _i = 0;
                        _d.label = 2;
                    case 2:
                        if (!(_i < _b.length)) return [3 /*break*/, 7];
                        _c = _b[_i];
                        if (!(_c in _a)) return [3 /*break*/, 6];
                        chainCode = _c;
                        if (!this.walletdepths.hasOwnProperty(chainCode)) return [3 /*break*/, 6];
                        current_walletdepth = 0;
                        reported_walletdepth = this.walletdepths[chainCode];
                        _idx = 0;
                        last_used_walletdepth = 0;
                        has_had_webcash = true;
                        _loop_2 = function () {
                            var healthCheckRequest, check_webcashes, walletdepths, response, response_content, response_data, results, resultkey, public_webcash, result, swc, e_4;
                            return __generator(this, function (_e) {
                                switch (_e.label) {
                                    case 0:
                                        console.log("Checking gaplimit " + gaplimit.toString() + " secrets for chainCode " + chainCode.toString() + ", round " + _idx.toString());
                                        // assume this is the last iteration
                                        has_had_webcash = false;
                                        healthCheckRequest = [];
                                        check_webcashes = {};
                                        walletdepths = {};
                                        range(current_walletdepth, current_walletdepth + gaplimit).forEach(function (x) {
                                            var secret = _this.generateNextSecret(chainCode, x);
                                            var webcash = new SecretWebcash(new Decimal(1), secret);
                                            var publicWebcash = webcash.toPublic();
                                            check_webcashes[publicWebcash.hashed_value] = webcash;
                                            walletdepths[publicWebcash.hashed_value] = x;
                                            healthCheckRequest.push(publicWebcash.toString());
                                        });
                                        _e.label = 1;
                                    case 1:
                                        _e.trys.push([1, 4, , 5]);
                                        return [4 /*yield*/, fetch(HEALTHCHECK_API(), {
                                                body: JSON.stringify(healthCheckRequest),
                                                method: "post",
                                            })];
                                    case 2:
                                        response = _e.sent();
                                        return [4 /*yield*/, response.text()];
                                    case 3:
                                        response_content = _e.sent();
                                        if (response.status != 200) {
                                            throw new Error("Server returned an error: " + response_content);
                                        }
                                        response_data = JSON.parse(response_content);
                                        results = response_data["results"];
                                        console.log("results = ", JSON.stringify(results));
                                        // use results and check_webcashes to process
                                        for (resultkey in results) {
                                            if (results.hasOwnProperty(resultkey)) {
                                                public_webcash = PublicWebcash.deserialize(resultkey);
                                                result = results[resultkey];
                                                if (result["spent"] !== null) {
                                                    has_had_webcash = true;
                                                    last_used_walletdepth = walletdepths[public_webcash.hashed_value];
                                                }
                                                if (result["spent"] === false) {
                                                    swc = check_webcashes[public_webcash.hashed_value];
                                                    swc.amount = new Decimal(result["amount"]);
                                                    if ((sweep_payments || chainCode !== "PAY") && !this_2.webcash.includes(swc.toString())) {
                                                        console.log("Recovered webcash: ", decimalAmountToString(swc.amount));
                                                        this_2.webcash.push(swc.toString());
                                                    }
                                                    else {
                                                        // payments are not swept by default.
                                                        // Also, this can be reached when cash
                                                        // already in the wallet is found too
                                                        console.log("Found known webcash of amount: ", decimalAmountToString(swc.amount));
                                                    }
                                                }
                                            }
                                        }
                                        if (current_walletdepth < reported_walletdepth) {
                                            has_had_webcash = true;
                                        }
                                        if (has_had_webcash) {
                                            current_walletdepth = current_walletdepth + gaplimit;
                                        }
                                        _idx += 1;
                                        return [3 /*break*/, 5];
                                    case 4:
                                        e_4 = _e.sent();
                                        console.log("Could not successfully call the healthcheck API");
                                        throw e_4;
                                    case 5: return [2 /*return*/];
                                }
                            });
                        };
                        this_2 = this;
                        _d.label = 3;
                    case 3:
                        if (!(has_had_webcash === true)) return [3 /*break*/, 5];
                        return [5 /*yield**/, _loop_2()];
                    case 4:
                        _d.sent();
                        return [3 /*break*/, 3];
                    case 5:
                        if (reported_walletdepth > last_used_walletdepth + 1) {
                            console.log("Something may have gone wrong: reported walletdepth was " + reported_walletdepth.toString() + " but only found up to " + last_used_walletdepth.toString() + " depth.");
                        }
                        if (reported_walletdepth < last_used_walletdepth) {
                            this.walletdepths[chainCode] = last_used_walletdepth + 1;
                        }
                        _d.label = 6;
                    case 6:
                        _i++;
                        return [3 /*break*/, 2];
                    case 7:
                        if (typeof this.save !== "undefined") {
                            this.save();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    // TODO: should this be async?
    // TODO: should this be private instead of public?
    WebcashWallet.prototype.generateNextSecret = function (chainCode, seek) {
        if (seek === void 0) { seek = false; }
        var walletdepth = 0;
        if (seek === false) {
            walletdepth = this.walletdepths[chainCode];
        }
        else {
            walletdepth = seek;
        }
        var master_secret = this.master_secret;
        var master_secret_bytes = convertSecretHexToBytes(master_secret);
        var chainCoded = chainCodes[chainCode];
        // [119, 101, 98, 99, 97, 115, 104, 119, 97, 108, 108, 101, 116, 118, 49] == webcashwalletv1
        var tag = sha256FromArray([119, 101, 98, 99, 97, 115, 104, 119, 97, 108, 108, 101, 116, 118, 49]);
        var array = new Array();
        var tagnumbers = Array.from(tag.entries()).map(function (x) { return x[1]; });
        array.push.apply(array, tagnumbers);
        array.push.apply(array, tagnumbers);
        array.push.apply(array, master_secret_bytes);
        array.push.apply(array, longToByteArray(chainCoded).reverse());
        array.push.apply(array, longToByteArray(walletdepth).reverse());
        var new_secret = sha256FromArray(array,2);
        // aaaaa there must be a better way
        var new_hex_secret;
        if (typeof window !== "undefined") {
            // @ts-ignore
            new_hex_secret = new_secret.toString("hex");
        }
        else {
            //const new_hex_secret = Buffer.from(new_secret).toString("hex")
            new_hex_secret = Buffer.from(new_secret).toString("hex");
        }
        if (seek === false) {
            // TODO: mark something on the wallet to indicate that it has been
            // modified since last save.
            this.walletdepths[chainCode] += 1;
        }
        return new_hex_secret;
    };
    return WebcashWallet;
}());
export { WebcashWallet };
var MEMORY = {};
var WebcashWalletMemory = /** @class */ (function (_super) {
    __extends(WebcashWalletMemory, _super);
    function WebcashWalletMemory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebcashWalletMemory.create = function (walletdata) {
        if (walletdata === void 0) { walletdata = {}; }
        var wallet = new WebcashWalletMemory(walletdata);
        wallet.save();
        return wallet;
    };
    WebcashWalletMemory.load = function () {
        var contents = __assign({}, MEMORY);
        if (contents) {
            console.log("Loaded wallet from memory.");
            return new WebcashWalletMemory(contents);
        }
        else {
            console.warn("Couldn't load wallet from memory.");
            return;
        }
    };
    WebcashWalletMemory.prototype.save = function () {
        var contents = this.getContents();
        MEMORY = contents;
        console.log("Saved wallet to memory.");
        return true;
    };
    return WebcashWalletMemory;
}(WebcashWallet));
export { WebcashWalletMemory };
var defaultLocalStorageKey = "wallet";
var WebcashWalletLocalStorage = /** @class */ (function (_super) {
    __extends(WebcashWalletLocalStorage, _super);
    function WebcashWalletLocalStorage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebcashWalletLocalStorage.create = function (walletdata) {
        if (walletdata === void 0) { walletdata = {}; }
        var wallet = new WebcashWalletLocalStorage(walletdata);
        wallet.save();
        return wallet;
    };
    WebcashWalletLocalStorage.load = function () {
        var contents = window.localStorage.getItem(defaultLocalStorageKey);
        if (contents) {
            var wallet = new WebcashWalletLocalStorage(JSON.parse(contents));
            console.log("Loaded wallet from localStorage");
            return wallet;
        }
        else {
            console.warn("Couldn't load wallet from localStorage");
            return;
        }
    };
    WebcashWalletLocalStorage.prototype.save = function () {
        var contents = this.getContents();
        var jsonContents = JSON.stringify(contents, null, 4);
        window.localStorage.setItem(defaultLocalStorageKey, jsonContents);
        console.log("Saved wallet to localStorage under key " + defaultLocalStorageKey);
        return true;
    };
    return WebcashWalletLocalStorage;
}(WebcashWallet));
export { WebcashWalletLocalStorage };
//# sourceMappingURL=index.js.map
