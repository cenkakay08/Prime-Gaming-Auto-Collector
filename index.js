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
function wait(ms) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve) { return setTimeout(resolve, ms); })];
        });
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!window.location.href.includes("dp")) return [3 /*break*/, 2];
                    return [4 /*yield*/, collectLoot()];
                case 1:
                    _a = _b.sent();
                    return [3 /*break*/, 4];
                case 2: return [4 /*yield*/, visitTabs()];
                case 3:
                    _a = _b.sent();
                    _b.label = 4;
                case 4:
                    _a;
                    return [2 /*return*/];
            }
        });
    });
}
function visitTabs() {
    return __awaiter(this, void 0, void 0, function () {
        var tabs, _i, tabs_1, tab;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    tabs = ["InGameLoot", "Game"];
                    _i = 0, tabs_1 = tabs;
                    _a.label = 1;
                case 1:
                    if (!(_i < tabs_1.length)) return [3 /*break*/, 8];
                    tab = tabs_1[_i];
                    return [4 /*yield*/, pressButton(tab)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, wait(100)];
                case 3:
                    _a.sent();
                    scrollPageToBottom();
                    return [4 /*yield*/, wait(100)];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, openLootTabs(tab)];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, wait(100)];
                case 6:
                    _a.sent();
                    _a.label = 7;
                case 7:
                    _i++;
                    return [3 /*break*/, 1];
                case 8: return [2 /*return*/];
            }
        });
    });
}
function pressButton(type) {
    return __awaiter(this, void 0, void 0, function () {
        var isButtonClicked, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    isButtonClicked = false;
                    _a.label = 1;
                case 1:
                    if (!!isButtonClicked) return [3 /*break*/, 6];
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, checkButtonInPromise(type)];
                case 3:
                    (_a.sent()).click();
                    isButtonClicked = true;
                    return [3 /*break*/, 5];
                case 4:
                    error_1 = _a.sent();
                    isButtonClicked = false;
                    return [3 /*break*/, 5];
                case 5: return [3 /*break*/, 1];
                case 6: return [2 /*return*/];
            }
        });
    });
}
function checkButtonInPromise(type) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    var query = "";
                    switch (type) {
                        case "InGameLoot":
                            query = '[data-type="InGameLoot"]';
                            break;
                        case "Game":
                            query = '[data-type="Game"]';
                            break;
                        case "Collect":
                            query = '[data-a-target="buy-box_call-to-action"]';
                            break;
                    }
                    var gameLootButton = document.querySelector(query);
                    if (gameLootButton) {
                        resolve(gameLootButton);
                    }
                    else {
                        setTimeout(function () { return reject(false); }, 100);
                    }
                })];
        });
    });
}
function scrollPageToBottom() {
    document.getElementById("root").scrollTo(0, Number.MAX_SAFE_INTEGER);
}
function openLootTabs(tab) {
    return __awaiter(this, void 0, void 0, function () {
        var tabElement, buttonsOrAnchors, _i, _a, buttonOrAnchor, href;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    tabElement = document.querySelector(tab === "InGameLoot"
                        ? '[data-a-target="offer-list-IN_GAME_LOOT"]'
                        : '[data-a-target="offer-list-FGWP_FULL"]');
                    buttonsOrAnchors = tabElement.querySelectorAll('[class="tw-interactive tw-button"]');
                    _i = 0, _a = Array.from(buttonsOrAnchors);
                    _b.label = 1;
                case 1:
                    if (!(_i < _a.length)) return [3 /*break*/, 4];
                    buttonOrAnchor = _a[_i];
                    href = buttonOrAnchor.getAttribute("href");
                    href ? window.open(href, "_blank") : buttonOrAnchor.click();
                    return [4 /*yield*/, wait(100)];
                case 2:
                    _b.sent();
                    _b.label = 3;
                case 3:
                    _i++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function collectLoot() {
    return __awaiter(this, void 0, void 0, function () {
        var isStateJustClaimed, stateJustClaimed;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, pressButton("Collect")];
                case 1:
                    _a.sent();
                    isStateJustClaimed = false;
                    _a.label = 2;
                case 2:
                    if (!!isStateJustClaimed) return [3 /*break*/, 4];
                    stateJustClaimed = document.querySelector('[data-a-target="header-state_JustClaimed"]');
                    if (stateJustClaimed) {
                        isStateJustClaimed = true;
                    }
                    else {
                        isStateJustClaimed = false;
                    }
                    return [4 /*yield*/, wait(100)];
                case 3:
                    _a.sent();
                    return [3 /*break*/, 2];
                case 4:
                    window.close();
                    return [2 /*return*/];
            }
        });
    });
}
main();
