/*!
 * surveyjs - SurveyJS PDF library v1.9.110
 * Copyright (c) 2015-2023 Devsoft Baltic OÜ  - http://surveyjs.io/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("survey-core"), require("jspdf"));
	else if(typeof define === 'function' && define.amd)
		define("SurveyPDF", ["survey-core", "jspdf"], factory);
	else if(typeof exports === 'object')
		exports["SurveyPDF"] = factory(require("survey-core"), require("jspdf"));
	else
		root["SurveyPDF"] = factory(root["Survey"], root["jspdf"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_17__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = __extends;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __assign; });
/* unused harmony export __rest */
/* unused harmony export __decorate */
/* harmony export (immutable) */ __webpack_exports__["b"] = __awaiter;
/* harmony export (immutable) */ __webpack_exports__["c"] = __generator;
/* harmony export (immutable) */ __webpack_exports__["d"] = __spreadArray;
var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p))
                d[p] = b[p]; };
    return extendStatics(d, b);
};
function __extends(d, b) {
    if (typeof b !== 'function' && b !== null)
        throw new TypeError('Class extends value ' + String(b) + ' is not a constructor or null');
    extendStatics(d, b);
    function __() { this.constructor = d; }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function () {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
                if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
        for (var i = 0, q = Object.getOwnPropertySymbols(s); i < q.length; i++) {
            if (e.indexOf(q[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, q[i]))
                t[q[i]] = s[q[i]];
        }
    return t;
}
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
        r = Reflect.decorate(decorators, target, key, desc);
    // eslint-disable-next-line no-cond-assign
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try {
            step(generator.next(value));
        }
        catch (e) {
            reject(e);
        } }
        function rejected(value) { try {
            step(generator['throw'](value));
        }
        catch (e) {
            reject(e);
        } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = { label: 0, sent: function () { if (t[0] & 1)
            throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), 'throw': verb(1), 'return': verb(2) }, typeof Symbol === 'function' && (g[Symbol.iterator] = function () { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f)
            throw new TypeError('Generator is already executing.');
        while (_)
            try {
                if (f = 1, y && (t = op[0] & 2 ? y['return'] : op[0] ? y['throw'] || ((t = y['return']) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                    return t;
                if (y = 0, t)
                    op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0:
                    case 1:
                        t = op;
                        break;
                    case 4:
                        _.label++;
                        return { value: op[1], done: false };
                    case 5:
                        _.label++;
                        y = op[1];
                        op = [0];
                        continue;
                    case 7:
                        op = _.ops.pop();
                        _.trys.pop();
                        continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                            _ = 0;
                            continue;
                        }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                            _.label = op[1];
                            break;
                        }
                        if (op[0] === 6 && _.label < t[1]) {
                            _.label = t[1];
                            t = op;
                            break;
                        }
                        if (t && _.label < t[2]) {
                            _.label = t[2];
                            _.ops.push(op);
                            break;
                        }
                        if (t[2])
                            _.ops.pop();
                        _.trys.pop();
                        continue;
                }
                op = body.call(thisArg, _);
            }
            catch (e) {
                op = [6, e];
                y = 0;
            }
            finally {
                f = t = 0;
            }
        if (op[0] & 5)
            throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
    }
}
function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2)
        for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
                if (!ar)
                    ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
            }
        }
    return to.concat(ar || Array.prototype.slice.call(from));
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_survey_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entries_pdf__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__doc_controller__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__flat_layout_flat_repository__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pdf_render_pdf_text__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pdf_render_pdf_textbold__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pdf_render_pdf_titlepanel__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pdf_render_pdf_description__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pdf_render_pdf_comment__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pdf_render_pdf_link__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pdf_render_pdf_html__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pdf_render_pdf_image__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pdf_render_pdf_empty__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pdf_render_pdf_rowline__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pdf_render_pdf_composite__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__event_handler_adorners__ = __webpack_require__(35);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyHelper; });

















var SurveyHelper = /** @class */ (function () {
    function SurveyHelper() {
    }
    SurveyHelper.parseWidth = function (width, maxWidth, columnsCount) {
        if (columnsCount === void 0) { columnsCount = 1; }
        if (width.indexOf('calc') === 0) {
            return maxWidth / columnsCount;
        }
        var value = parseFloat(width);
        var unit = width.replace(/[^A-Za-z]/g, '');
        var k;
        switch (unit) {
            case 'pt':
                k = 1.0;
                break;
            case 'mm':
                k = 72.0 / 25.4;
                break;
            case 'cm':
                k = 72.0 / 2.54;
                break;
            case 'in':
                k = 72.0;
                break;
            case 'px':
                k = 72.0 / 96.0;
                break;
            case 'pc':
                k = 12.0;
                break;
            case 'em':
                k = 12.0;
                break;
            case 'ex':
                k = 6.0;
                break;
            default:
            case '%':
                k = maxWidth / 100.0;
                break;
        }
        return Math.min(value * k, maxWidth);
    };
    SurveyHelper.pxToPt = function (value) {
        if (typeof value === 'string') {
            if (!isNaN(Number(value))) {
                value += 'px';
            }
            return SurveyHelper.parseWidth(value, Number.MAX_VALUE);
        }
        return value * 72.0 / 96.0;
    };
    SurveyHelper.mergeRects = function () {
        var rects = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            rects[_i] = arguments[_i];
        }
        var resultRect = {
            xLeft: rects[0].xLeft,
            xRight: rects[0].xRight,
            yTop: rects[0].yTop,
            yBot: rects[0].yBot
        };
        rects.forEach(function (rect) {
            resultRect.xLeft = Math.min(resultRect.xLeft, rect.xLeft),
                resultRect.xRight = Math.max(resultRect.xRight, rect.xRight),
                resultRect.yTop = Math.min(resultRect.yTop, rect.yTop),
                resultRect.yBot = Math.max(resultRect.yBot, rect.yBot);
        });
        return resultRect;
    };
    SurveyHelper.createPoint = function (rect, isLeft, isTop) {
        if (isLeft === void 0) { isLeft = true; }
        if (isTop === void 0) { isTop = false; }
        return {
            xLeft: isLeft ? rect.xLeft : rect.xRight,
            yTop: isTop ? rect.yTop : rect.yBot
        };
    };
    SurveyHelper.createRect = function (point, width, height) {
        return {
            xLeft: point.xLeft,
            xRight: point.xLeft + width,
            yTop: point.yTop,
            yBot: point.yTop + height
        };
    };
    SurveyHelper.createHeaderRect = function (controller) {
        return {
            xLeft: 0.0,
            xRight: controller.paperWidth,
            yTop: 0.0,
            yBot: controller.margins.top
        };
    };
    SurveyHelper.createFooterRect = function (controller) {
        return {
            xLeft: 0.0,
            xRight: controller.paperWidth,
            yTop: controller.paperHeight - controller.margins.bot,
            yBot: controller.paperHeight
        };
    };
    SurveyHelper.chooseHtmlFont = function (controller) {
        return controller.useCustomFontInHtml ? controller.fontName : this.STANDARD_FONT;
    };
    SurveyHelper.generateCssTextRule = function (fontSize, fontStyle, fontName) {
        return "\"font-size: ".concat(fontSize, "pt; font-weight: ").concat(fontStyle, "; font-family: ").concat(fontName, "; color: ").concat(this.TEXT_COLOR, ";\"");
    };
    SurveyHelper.createHtmlContainerBlock = function (html, controller, renderAs) {
        var font = this.chooseHtmlFont(controller);
        return "<div class=\"__surveypdf_html\" style=".concat(this.generateCssTextRule(controller.fontSize, controller.fontStyle, font), ">") +
            "<style>.__surveypdf_html p { margin: 0; line-height: ".concat(controller.fontSize, "pt } body { margin: 0; }</style>").concat(html, "</div>");
    };
    SurveyHelper.splitHtmlRect = function (controller, htmlBrick) {
        var bricks = [];
        var htmlHeight = htmlBrick.height;
        var minHeight = controller.doc.getFontSize();
        htmlBrick.yBot = htmlBrick.yTop + minHeight;
        var emptyBrickCount = Math.floor(htmlHeight / minHeight) - 1;
        bricks.push(htmlBrick);
        var currPoint = this.createPoint(htmlBrick);
        for (var i = 0; i < emptyBrickCount; i++) {
            bricks.push(new __WEBPACK_IMPORTED_MODULE_13__pdf_render_pdf_empty__["a" /* EmptyBrick */](this.createRect(currPoint, htmlBrick.width, minHeight)));
            currPoint.yTop += minHeight;
        }
        var remainingHeight = htmlHeight - (emptyBrickCount + 1) * minHeight;
        if (remainingHeight > 0) {
            bricks.push(new __WEBPACK_IMPORTED_MODULE_13__pdf_render_pdf_empty__["a" /* EmptyBrick */](this.createRect(currPoint, htmlBrick.width, remainingHeight)));
        }
        return new (__WEBPACK_IMPORTED_MODULE_15__pdf_render_pdf_composite__["a" /* CompositeBrick */].bind.apply(__WEBPACK_IMPORTED_MODULE_15__pdf_render_pdf_composite__["a" /* CompositeBrick */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __spreadArray */])([void 0], bricks, false)))();
    };
    SurveyHelper.createPlainTextFlat = function (point, question, controller, text, fabric) {
        var _this = this;
        var lines = controller.doc.splitTextToSize(text, controller.paperWidth - controller.margins.right - point.xLeft);
        var currPoint = this.clone(point);
        var composite = new __WEBPACK_IMPORTED_MODULE_15__pdf_render_pdf_composite__["a" /* CompositeBrick */]();
        lines.forEach(function (line) {
            var size = controller.measureText(line);
            composite.addBrick(new fabric(question, controller, _this.createRect(currPoint, size.width, size.height), line));
            currPoint.yTop += size.height;
        });
        return composite;
    };
    SurveyHelper.createTextFlat = function (point, question, controller, text, fabric) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var _a, _b;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!(typeof text === 'string' || !this.hasHtml(text))) return [3 /*break*/, 1];
                        return [2 /*return*/, this.createPlainTextFlat(point, question, controller, typeof text === 'string' ?
                                text : this.getLocString(text), fabric)];
                    case 1:
                        _a = this.splitHtmlRect;
                        _b = [controller];
                        return [4 /*yield*/, this.createHTMLFlat(point, question, controller, this.createHtmlContainerBlock(this.getLocString(text), controller, 'standard'))];
                    case 2: return [2 /*return*/, _a.apply(this, _b.concat([_c.sent()]))];
                }
            });
        });
    };
    SurveyHelper.hasHtml = function (text) {
        var pattern = /<\/?[a-z][\s\S]*>/i;
        return text.hasHtml && (pattern.test(text.renderedText) || pattern.test(text.renderedHtml));
    };
    SurveyHelper.getHtmlMargins = function (controller, point) {
        var width = controller.paperWidth - point.xLeft - controller.margins.right;
        return {
            top: controller.margins.top,
            bottom: controller.margins.bot,
            width: width > controller.unitWidth ? width : controller.unitWidth
        };
    };
    SurveyHelper.createHTMLRect = function (point, controller, margins, resultY) {
        var availablePageHeight = controller.paperHeight - controller.margins.bot - controller.margins.top;
        var height = (controller.helperDoc.getNumberOfPages() - 1) *
            (controller.fontSize * Math.floor(availablePageHeight / controller.fontSize))
            + resultY - margins.top + SurveyHelper.HTML_TAIL_TEXT_SCALE * controller.fontSize;
        var numberOfPages = controller.helperDoc.getNumberOfPages();
        controller.helperDoc.addPage();
        for (var i = 0; i < numberOfPages; i++) {
            controller.helperDoc.deletePage(1);
        }
        return SurveyHelper.createRect(point, margins.width, height);
    };
    SurveyHelper.createHTMLFlat = function (point, question, controller, html) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var margins;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        margins = this.getHtmlMargins(controller, point);
                        return [4 /*yield*/, new Promise(function (resolve) {
                                controller.helperDoc.fromHTML(html, point.xLeft, margins.top, {
                                    pagesplit: true, width: margins.width
                                }, function (result) {
                                    var rect = SurveyHelper.createHTMLRect(point, controller, margins, result.y);
                                    resolve(new __WEBPACK_IMPORTED_MODULE_11__pdf_render_pdf_html__["a" /* HTMLBrick */](question, controller, rect, html));
                                }, margins);
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SurveyHelper.generateFontFace = function (fontName, fontBase64, fontWeight) {
        return "@font-face { font-family: ".concat(fontName, "; ") +
            "src: url(data:application/font-woff;charset=utf-8;base64,".concat(fontBase64, ") format('woff'); ") +
            "font-weight: ".concat(fontWeight, "; }");
    };
    SurveyHelper.generateFontFaceWithItalicStyle = function (fontName, fontBase64, fontWeight) {
        return "@font-face { font-family: ".concat(fontName, "; ") +
            "src: url(data:application/font-woff;charset=utf-8;base64,".concat(fontBase64, ") format('woff'); ") +
            "font-weight: ".concat(fontWeight, "; font-style: italic}");
    };
    SurveyHelper.htmlToXml = function (html) {
        var htmlDoc = document.implementation.createHTMLDocument('');
        htmlDoc.write(html.replace(/\#/g, '%23'));
        htmlDoc.documentElement.setAttribute('xmlns', htmlDoc.documentElement.namespaceURI);
        htmlDoc.body.style.margin = 'unset';
        return (new XMLSerializer()).serializeToString(htmlDoc.body).replace(/%23/g, '#');
    };
    SurveyHelper.createSvgContent = function (html, width, controller) {
        var _this = this;
        var style = document.createElement('style');
        style.innerHTML = '.__surveypdf_html p { margin: unset; line-height: 22px; } body { margin: unset; }';
        document.body.appendChild(style);
        var div = document.createElement('div');
        div.className = '__surveypdf_html';
        div.style.display = 'block';
        div.style.position = 'fixed';
        div.style.top = '-10000px';
        div.style.left = '-10000px';
        div.style.width = (width / 72.0 * 96.0) + 'px';
        div.style.boxSizing = 'initial';
        div.style.color = 'initial';
        div.style.fontFamily = 'initial';
        div.style.font = 'initial';
        div.style.lineHeight = 'initial';
        div.insertAdjacentHTML('beforeend', html);
        document.body.appendChild(div);
        var divWidth = div.offsetWidth;
        var divHeight = div.offsetHeight;
        div.remove();
        style.remove();
        var defs = '';
        if (controller.useCustomFontInHtml) {
            defs = "<defs><style>".concat(this.generateFontFace(controller.fontName, controller.base64Normal, 'normal')) +
                " ".concat(this.generateFontFace(controller.fontName, controller.base64Bold, 'bold'), "</style></defs>");
        }
        else {
            Object.keys(__WEBPACK_IMPORTED_MODULE_3__doc_controller__["b" /* DocController */].customFonts).forEach(function (fontName) {
                var font = __WEBPACK_IMPORTED_MODULE_3__doc_controller__["b" /* DocController */].customFonts[fontName];
                Object.keys(font).forEach(function (fontStyle) {
                    if (fontStyle === 'normal' || fontStyle === 'bold') {
                        defs += "".concat(_this.generateFontFace(fontName, font[fontStyle], fontStyle));
                    }
                    else {
                        defs += "".concat(_this.generateFontFaceWithItalicStyle(fontName, font[fontStyle], fontStyle === 'italic' ? 'normal' : 'bold'));
                    }
                });
                defs = '<defs><style>' + defs + '</style></defs>';
            });
        }
        var svg = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"".concat(divWidth, "px\" height=\"").concat(divHeight, "px\">") + defs +
            '<style>.__surveypdf_html p { margin: unset; line-height: 22px; }</style>' +
            "<foreignObject width=\"".concat(divWidth, "px\" height=\"").concat(divHeight, "px\">") +
            this.htmlToXml(html) + '</foreignObject></svg>';
        return { svg: svg, divWidth: divWidth, divHeight: divHeight };
    };
    SurveyHelper.setCanvas = function (canvas, divWidth, divHeight, img) {
        canvas.width = divWidth * SurveyHelper.HTML_TO_IMAGE_QUALITY;
        canvas.height = divHeight * SurveyHelper.HTML_TO_IMAGE_QUALITY;
        var context = canvas.getContext('2d');
        context.scale(SurveyHelper.HTML_TO_IMAGE_QUALITY, SurveyHelper.HTML_TO_IMAGE_QUALITY);
        context.fillStyle = SurveyHelper.BACKGROUND_COLOR;
        context.fillRect(0, 0, divWidth, divHeight);
        context.drawImage(img, 0, 0);
    };
    SurveyHelper.htmlToImage = function (html, width, controller) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var _a, svg, divWidth, divHeight, data, img;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_b) {
                _a = SurveyHelper.createSvgContent(html, width, controller), svg = _a.svg, divWidth = _a.divWidth, divHeight = _a.divHeight;
                data = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svg)));
                img = new Image();
                img.crossOrigin = 'anonymous';
                img.src = data;
                return [2 /*return*/, new Promise(function (resolve) {
                        img.onload = function () {
                            var canvas = document.createElement('canvas');
                            SurveyHelper.setCanvas(canvas, divWidth, divHeight, img);
                            var url = canvas.toDataURL('image/jpeg', SurveyHelper.HTML_TO_IMAGE_QUALITY);
                            canvas.remove();
                            resolve({ url: url, aspect: divWidth / divHeight });
                        };
                        img.onerror = function () {
                            resolve({ url: 'data:,', aspect: width / this.EPSILON });
                        };
                    })];
            });
        });
    };
    SurveyHelper.createBoldTextFlat = function (point, question, controller, text) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var composite;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        controller.fontStyle = 'bold';
                        return [4 /*yield*/, this.createTextFlat(point, question, controller, text, __WEBPACK_IMPORTED_MODULE_6__pdf_render_pdf_textbold__["a" /* TextBoldBrick */])];
                    case 1:
                        composite = _a.sent();
                        controller.fontStyle = 'normal';
                        return [2 /*return*/, composite];
                }
            });
        });
    };
    SurveyHelper.createTitleFlat = function (point, question, controller) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var composite, currPoint, oldFontSize, noText, noFlat, textFlat, requiredText, _a, _b, _c, _d;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        composite = new __WEBPACK_IMPORTED_MODULE_15__pdf_render_pdf_composite__["a" /* CompositeBrick */]();
                        currPoint = this.clone(point);
                        oldFontSize = controller.fontSize;
                        controller.fontSize *= this.TITLE_FONT_SCALE;
                        if (!question.no) return [3 /*break*/, 5];
                        noText = question.no + ' ';
                        noFlat = void 0;
                        if (!this.hasHtml(question.locTitle)) return [3 /*break*/, 2];
                        controller.fontStyle = 'bold';
                        controller.pushMargins();
                        controller.margins.right = controller.paperWidth -
                            controller.margins.left - controller.measureText(noText, 'bold').width;
                        return [4 /*yield*/, this.createHTMLFlat(currPoint, question, controller, this.createHtmlContainerBlock(noText, controller, 'standard'))];
                    case 1:
                        noFlat = _e.sent();
                        controller.popMargins();
                        controller.fontStyle = 'normal';
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.createBoldTextFlat(currPoint, question, controller, noText)];
                    case 3:
                        noFlat = _e.sent();
                        _e.label = 4;
                    case 4:
                        composite.addBrick(noFlat);
                        currPoint.xLeft = noFlat.xRight;
                        _e.label = 5;
                    case 5:
                        controller.pushMargins();
                        controller.margins.left = currPoint.xLeft;
                        return [4 /*yield*/, this.createBoldTextFlat(currPoint, question, controller, question.locTitle)];
                    case 6:
                        textFlat = _e.sent();
                        composite.addBrick(textFlat);
                        controller.popMargins();
                        if (!question.isRequired) return [3 /*break*/, 10];
                        requiredText = question.requiredText;
                        if (!this.hasHtml(question.locTitle)) return [3 /*break*/, 8];
                        currPoint = this.createPoint(textFlat.unfold()[0], false, false);
                        controller.fontStyle = 'bold';
                        controller.pushMargins();
                        controller.margins.right = controller.paperWidth -
                            controller.margins.left - controller.measureText(requiredText, 'bold').width;
                        _b = (_a = composite).addBrick;
                        return [4 /*yield*/, this.createHTMLFlat(currPoint, question, controller, this.createHtmlContainerBlock(requiredText, controller, 'standard'))];
                    case 7:
                        _b.apply(_a, [_e.sent()]);
                        controller.popMargins();
                        controller.fontStyle = 'normal';
                        return [3 /*break*/, 10];
                    case 8:
                        currPoint = this.createPoint(textFlat.unfold().pop(), false, true);
                        _d = (_c = composite).addBrick;
                        return [4 /*yield*/, this.createBoldTextFlat(currPoint, question, controller, requiredText)];
                    case 9:
                        _d.apply(_c, [_e.sent()]);
                        _e.label = 10;
                    case 10:
                        controller.fontSize = oldFontSize;
                        return [2 /*return*/, composite];
                }
            });
        });
    };
    SurveyHelper.createTitleSurveyPanelFlat = function (point, controller, text, fontSizeScale) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var oldFontSize, titleFlat;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        oldFontSize = controller.fontSize;
                        controller.fontSize = oldFontSize * fontSizeScale;
                        controller.fontStyle = 'bold';
                        return [4 /*yield*/, this.createTextFlat(point, null, controller, text, __WEBPACK_IMPORTED_MODULE_7__pdf_render_pdf_titlepanel__["a" /* TitlePanelBrick */])];
                    case 1:
                        titleFlat = _a.sent();
                        controller.fontStyle = 'normal';
                        controller.fontSize = oldFontSize;
                        return [2 /*return*/, titleFlat];
                }
            });
        });
    };
    SurveyHelper.createTitleSurveyFlat = function (point, controller, text) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.createTitleSurveyPanelFlat(point, controller, text, this.TITLE_SURVEY_FONT_SIZE_SCALE)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SurveyHelper.createTitlePanelFlat = function (point, controller, text, isPage) {
        if (isPage === void 0) { isPage = false; }
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.createTitleSurveyPanelFlat(point, controller, text, isPage ? this.TITLE_PAGE_FONT_SIZE_SCALE : this.TITLE_PANEL_FONT_SIZE_SCALE)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SurveyHelper.createDescFlat = function (point, question, controller, text) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var oldFontSize, composite;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        oldFontSize = controller.fontSize;
                        controller.fontSize = oldFontSize * this.DESCRIPTION_FONT_SIZE_SCALE;
                        return [4 /*yield*/, this.createTextFlat(point, question, controller, text, __WEBPACK_IMPORTED_MODULE_8__pdf_render_pdf_description__["a" /* DescriptionBrick */])];
                    case 1:
                        composite = _a.sent();
                        controller.fontSize = oldFontSize;
                        return [2 /*return*/, composite];
                }
            });
        });
    };
    SurveyHelper.getReadonlyRenderAs = function (question, controller) {
        return question.readonlyRenderAs === 'auto' ? controller.readonlyRenderAs : question.readonlyRenderAs;
    };
    SurveyHelper.createCommentFlat = function (point, question, controller, isQuestion, options) {
        var _a, _b, _c;
        if (options === void 0) { options = {}; }
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var rect, textFlat, renderedValue, padding, comment;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        rect = this.createTextFieldRect(point, controller, (_a = options.rows) !== null && _a !== void 0 ? _a : 1);
                        if (!((_b = options.readOnly) !== null && _b !== void 0 ? _b : SurveyHelper.shouldRenderReadOnly(question, controller))) return [3 /*break*/, 2];
                        renderedValue = (_c = options.value) !== null && _c !== void 0 ? _c : this.getQuestionOrCommentValue(question, isQuestion);
                        return [4 /*yield*/, this.createReadOnlyTextFieldTextFlat(point, controller, question, renderedValue)];
                    case 1:
                        textFlat = _d.sent();
                        padding = controller.unitHeight * this.VALUE_READONLY_PADDING_SCALE;
                        if (textFlat.yBot + padding > rect.yBot)
                            rect.yBot = textFlat.yBot + padding;
                        _d.label = 2;
                    case 2:
                        comment = new __WEBPACK_IMPORTED_MODULE_9__pdf_render_pdf_comment__["a" /* CommentBrick */](question, controller, rect, isQuestion, options.index);
                        if (options.readOnly !== null && options.readOnly !== undefined) {
                            comment.isReadOnly = options.readOnly;
                        }
                        comment.textBrick = textFlat;
                        return [2 /*return*/, comment];
                }
            });
        });
    };
    SurveyHelper.getQuestionOrCommentValue = function (question, isQuestion) {
        if (isQuestion === void 0) { isQuestion = true; }
        return isQuestion ? (question.value !== undefined && question.value !== null ? question.value : '') :
            (question.comment !== undefined && question.comment !== null ? question.comment : '');
    };
    SurveyHelper.getQuestionOrCommentDisplayValue = function (question, isQuestion) {
        if (isQuestion === void 0) { isQuestion = true; }
        return isQuestion ? question.displayValue : SurveyHelper.getQuestionOrCommentValue(question, isQuestion);
    };
    SurveyHelper.getImageBase64 = function (imageLink) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var image;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_a) {
                image = new Image();
                image.crossOrigin = 'anonymous';
                return [2 /*return*/, new Promise(function (resolve) {
                        image.onload = function () {
                            var canvas = document.createElement('canvas');
                            var ctx = canvas.getContext('2d');
                            canvas.height = image.naturalHeight;
                            canvas.width = image.naturalWidth;
                            ctx.drawImage(image, 0, 0);
                            var dataUrl = canvas.toDataURL();
                            resolve(dataUrl);
                        };
                        image.onerror = function () {
                            resolve('');
                        };
                        image.src = imageLink;
                    })];
            });
        });
    };
    SurveyHelper.getImageLink = function (controller, originalImageLink, width, height, fitType) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var ptToPx, url, _a, canvasHtml;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        ptToPx = 96.0 / 72.0;
                        if (!this.shouldConvertImageToPng) return [3 /*break*/, 2];
                        return [4 /*yield*/, SurveyHelper.getImageBase64(originalImageLink)];
                    case 1:
                        _a = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        _a = originalImageLink;
                        _b.label = 3;
                    case 3:
                        url = _a;
                        if (!(typeof XMLSerializer === 'function' && controller.applyImageFit)) return [3 /*break*/, 5];
                        canvasHtml = "<div style='overflow: hidden; width: ".concat(width * ptToPx, "px; height: ").concat(height * ptToPx, "px;'>\n                   <img src='").concat(url, "' style='object-fit: ").concat(fitType, "; width: 100%; height: 100%;'/>\n               </div>");
                        return [4 /*yield*/, SurveyHelper.htmlToImage(canvasHtml, width, controller)];
                    case 4:
                        url = (_b.sent()).url;
                        _b.label = 5;
                    case 5: return [2 /*return*/, url];
                }
            });
        });
    };
    SurveyHelper.createImageFlat = function (point, question, controller, imagelink, width, height, imageFit) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var fitType, newWidth, html, _a;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!SurveyHelper.inBrowser) return [3 /*break*/, 2];
                        fitType = !!question && !!question.imageFit ? question.imageFit : (imageFit || 'contain');
                        if (controller.applyImageFit) {
                            if (width > controller.paperWidth - controller.margins.left - controller.margins.right) {
                                newWidth = controller.paperWidth - controller.margins.left - controller.margins.right;
                                height *= newWidth / width;
                                width = newWidth;
                            }
                        }
                        _a = "<img src='".concat;
                        return [4 /*yield*/, SurveyHelper.getImageLink(controller, imagelink, width, height, fitType)];
                    case 1:
                        html = _a.apply("<img src='", [_b.sent(), "' width='"]).concat(width, "' height='").concat(height, "'/>");
                        return [2 /*return*/, new __WEBPACK_IMPORTED_MODULE_11__pdf_render_pdf_html__["a" /* HTMLBrick */](question, controller, this.createRect(point, width, height), html, true)];
                    case 2: return [2 /*return*/, new __WEBPACK_IMPORTED_MODULE_12__pdf_render_pdf_image__["a" /* ImageBrick */](question, controller, imagelink, point, width, height)];
                }
            });
        });
    };
    SurveyHelper.canPreviewImage = function (question, item, url) {
        return question.canPreviewImage(item);
        //  &&  await this.getImageSize(url) !== null;
    };
    SurveyHelper.getImageSize = function (url) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!SurveyHelper.inBrowser) return [3 /*break*/, 2];
                        return [4 /*yield*/, new Promise(function (resolve) {
                                return resolve({ width: undefined, height: undefined });
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2: return [4 /*yield*/, new Promise(function (resolve) {
                            var image = new Image();
                            image.src = url;
                            image.onload = function () {
                                return resolve({ width: image.width, height: image.height });
                            };
                            image.onerror = function () { return resolve(null); };
                        })];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SurveyHelper.createRowlineFlat = function (point, controller, width, color) {
        var xRight = typeof width === 'undefined' ?
            controller.paperWidth - controller.margins.right :
            point.xLeft + width;
        xRight = xRight > point.xLeft ? xRight : point.xLeft + this.EPSILON;
        return new __WEBPACK_IMPORTED_MODULE_14__pdf_render_pdf_rowline__["a" /* RowlineBrick */](controller, {
            xLeft: point.xLeft,
            xRight: xRight,
            yTop: point.yTop + this.EPSILON,
            yBot: point.yTop + this.EPSILON
        }, typeof color === 'undefined' ? null : color);
    };
    SurveyHelper.createLinkFlat = function (point, question, controller, text, link) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var compositeText, compositeLink;
            var _this = this;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.
                            createTextFlat(point, question, controller, text, __WEBPACK_IMPORTED_MODULE_5__pdf_render_pdf_text__["a" /* TextBrick */])];
                    case 1:
                        compositeText = _a.sent();
                        compositeLink = new __WEBPACK_IMPORTED_MODULE_15__pdf_render_pdf_composite__["a" /* CompositeBrick */]();
                        compositeText.unfold().forEach(function (text) {
                            compositeLink.addBrick(new __WEBPACK_IMPORTED_MODULE_10__pdf_render_pdf_link__["a" /* LinkBrick */](text, link));
                            var linePoint = _this.createPoint(compositeLink);
                            compositeLink.addBrick(_this.createRowlineFlat(linePoint, controller, compositeLink.width, __WEBPACK_IMPORTED_MODULE_10__pdf_render_pdf_link__["a" /* LinkBrick */].COLOR));
                        });
                        return [2 /*return*/, compositeLink];
                }
            });
        });
    };
    SurveyHelper.createAcroformRect = function (rect) {
        return [
            rect.xLeft,
            rect.yTop,
            rect.xRight - rect.xLeft,
            rect.yBot - rect.yTop
        ];
    };
    SurveyHelper.createTextFieldRect = function (point, controller, lines) {
        if (lines === void 0) { lines = 1; }
        var width = controller.paperWidth - point.xLeft - controller.margins.right;
        width = Math.max(width, controller.unitWidth);
        var height = controller.unitHeight * lines;
        return this.createRect(point, width, height);
    };
    SurveyHelper.createReadOnlyTextFieldTextFlat = function (point, controller, question, value) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var padding, textFlat;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        padding = controller.unitWidth * this.VALUE_READONLY_PADDING_SCALE;
                        point.yTop += padding;
                        point.xLeft += padding;
                        controller.pushMargins(point.xLeft, controller.margins.right + padding);
                        return [4 /*yield*/, this.createTextFlat(point, question, controller, value.toString(), __WEBPACK_IMPORTED_MODULE_5__pdf_render_pdf_text__["a" /* TextBrick */])];
                    case 1:
                        textFlat = _a.sent();
                        controller.popMargins();
                        return [2 /*return*/, textFlat];
                }
            });
        });
    };
    SurveyHelper.renderFlatBorders = function (controller, flat) {
        var _a, _b;
        if (!this.FORM_BORDER_VISIBLE)
            return;
        var minSide = Math.min(flat.width, flat.height);
        var visibleWidth = controller.unitHeight * this.VISIBLE_BORDER_SCALE * this.BORDER_SCALE;
        var visibleScale = this.formScale(controller, flat) + visibleWidth / minSide;
        var unvisibleWidth = controller.unitHeight * this.UNVISIBLE_BORDER_SCALE * this.BORDER_SCALE;
        var unvisibleScale = 1.0 - unvisibleWidth / minSide;
        var unvisibleRadius = this.RADIUS_SCALE * unvisibleWidth;
        var oldDrawColor = controller.doc.getDrawColor();
        controller.doc.setDrawColor(flat.formBorderColor);
        controller.doc.setLineWidth(visibleWidth);
        (_a = controller.doc).rect.apply(_a, this.createAcroformRect(this.scaleRect(flat, visibleScale)));
        controller.doc.setDrawColor(this.BACKGROUND_COLOR);
        controller.doc.setLineWidth(unvisibleWidth);
        (_b = controller.doc).roundedRect.apply(_b, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __spreadArray */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __spreadArray */])([], this.createAcroformRect(this.scaleRect(flat, unvisibleScale)), false), [unvisibleRadius, unvisibleRadius], false));
        controller.doc.setDrawColor(oldDrawColor);
    };
    SurveyHelper.getLocString = function (text) {
        if (this.hasHtml(text))
            return text.renderedHtml;
        return text.renderedText || text.renderedHtml;
    };
    SurveyHelper.getDropdownQuestionValue = function (question) {
        var qDropDown = question;
        if (qDropDown.isOtherSelected) {
            return qDropDown.otherText;
        }
        else if (!!question.displayValue) {
            return question.displayValue;
        }
        else if (qDropDown.showOptionsCaption) {
            return qDropDown.optionsCaption;
        }
        return '';
    };
    SurveyHelper.getContentQuestion = function (question) {
        return !!question.contentQuestion ? question.contentQuestion : question;
    };
    SurveyHelper.getContentQuestionTypeRenderAs = function (question, survey) {
        var renderAs = question.renderAs;
        if (question.getType() === 'boolean' && survey.options.useLegacyBooleanRendering) {
            renderAs = 'checkbox';
        }
        if (renderAs !== 'default') {
            var type = "".concat(question.getType(), "-").concat(renderAs);
            if (__WEBPACK_IMPORTED_MODULE_4__flat_layout_flat_repository__["a" /* FlatRepository */].getInstance().isTypeRegistered(type))
                return type;
        }
        return question.getType();
    };
    SurveyHelper.getContentQuestionType = function (question, survey) {
        if (!!question.customWidget)
            return question.customWidget.pdfQuestionType;
        return !!question.contentQuestion ? 'custom_model' : this.getContentQuestionTypeRenderAs(question, survey);
    };
    SurveyHelper.getRatingMinWidth = function (controller) {
        return controller.measureText(this.RATING_MIN_WIDTH).width;
    };
    SurveyHelper.getRatingItemText = function (question, index, locText) {
        var ratingItemLocText = new __WEBPACK_IMPORTED_MODULE_1_survey_core__["LocalizableString"](locText.owner, locText.useMarkdown);
        ratingItemLocText.text = this.getLocString(locText);
        if (index === 0 && question.minRateDescription) {
            ratingItemLocText.text = question.locMinRateDescription.text + ' ' + this.getLocString(locText);
        }
        else if (index === question.visibleRateValues.length - 1 && question.maxRateDescription) {
            ratingItemLocText.text = this.getLocString(locText) + ' ' + question.locMaxRateDescription.text;
        }
        return ratingItemLocText;
    };
    SurveyHelper.getPageAvailableWidth = function (controller) {
        return controller.paperWidth - controller.margins.left - controller.margins.right;
    };
    SurveyHelper.getImagePickerAvailableWidth = function (controller) {
        var width = (this.getPageAvailableWidth(controller) -
            (this.IMAGEPICKER_COUNT - 1) * controller.unitHeight);
        return width > 0 ? width : controller.unitHeight;
    };
    SurveyHelper.getColumnWidth = function (controller, colCount) {
        return (this.getPageAvailableWidth(controller) - (colCount - 1) *
            controller.unitWidth * this.GAP_BETWEEN_COLUMNS) / colCount;
    };
    SurveyHelper.setColumnMargins = function (controller, colCount, column) {
        var cellWidth = this.getColumnWidth(controller, colCount);
        controller.margins.left = controller.margins.left + column *
            (cellWidth + controller.unitWidth * this.GAP_BETWEEN_COLUMNS);
        controller.margins.right = controller.margins.right + (colCount - column - 1) *
            (cellWidth + controller.unitWidth * this.GAP_BETWEEN_COLUMNS);
    };
    SurveyHelper.moveRect = function (rect, left, top) {
        if (left === void 0) { left = rect.xLeft; }
        if (top === void 0) { top = rect.yTop; }
        return {
            xLeft: left,
            yTop: top,
            xRight: left + rect.xRight - rect.xLeft,
            yBot: top + rect.yBot - rect.yTop
        };
    };
    SurveyHelper.scaleRect = function (rect, scale) {
        var width = rect.xRight - rect.xLeft;
        var height = rect.yBot - rect.yTop;
        var scaleWidth = ((width < height) ? width : height) * (1.0 - scale) / 2.0;
        return {
            xLeft: rect.xLeft + scaleWidth,
            yTop: rect.yTop + scaleWidth,
            xRight: rect.xRight - scaleWidth,
            yBot: rect.yBot - scaleWidth
        };
    };
    SurveyHelper.formScale = function (controller, flat) {
        var minSide = Math.min(flat.width, flat.height);
        var borderWidth = 2.0 * controller.unitWidth * this.BORDER_SCALE;
        return (minSide - borderWidth) / minSide;
    };
    SurveyHelper.generateQuestionFlats = function (survey, controller, question, point) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var questionType, flatQuestion, questionFlats, adornersOptions;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        questionType = this.getContentQuestionType(question, survey);
                        flatQuestion = __WEBPACK_IMPORTED_MODULE_4__flat_layout_flat_repository__["a" /* FlatRepository */].getInstance().
                            create(survey, question, controller, questionType);
                        return [4 /*yield*/, flatQuestion.generateFlats(point)];
                    case 1:
                        questionFlats = _a.sent();
                        adornersOptions = new __WEBPACK_IMPORTED_MODULE_16__event_handler_adorners__["c" /* AdornersOptions */](point, questionFlats, question, controller, __WEBPACK_IMPORTED_MODULE_4__flat_layout_flat_repository__["a" /* FlatRepository */].getInstance(), __WEBPACK_IMPORTED_MODULE_2__entries_pdf__);
                        if (question.customWidget && question.customWidget.isFit(question) &&
                            question.customWidget.pdfRender) {
                            survey.onRenderQuestion.unshift(question.customWidget.pdfRender);
                        }
                        return [4 /*yield*/, survey.onRenderQuestion.fire(survey, adornersOptions)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __spreadArray */])([], adornersOptions.bricks, true)];
                }
            });
        });
    };
    SurveyHelper.isFontExist = function (controller, fontName) {
        return controller.doc.internal.getFont(fontName).fontName === fontName;
    };
    SurveyHelper.isCustomFont = function (controller, fontName) {
        return controller.doc.internal.getFont(fontName).encoding === this.CUSTOM_FONT_ENCODING;
    };
    SurveyHelper.fixFont = function (controller) {
        if (this.isCustomFont(controller, controller.fontName)) {
            controller.doc.text('load font', 0, 0);
            controller.doc.deletePage(1);
            controller.addPage();
        }
    };
    SurveyHelper.clone = function (src) {
        var target = {};
        for (var prop in src) {
            if (src.hasOwnProperty(prop)) {
                target[prop] = src[prop];
            }
        }
        return target;
    };
    SurveyHelper.shouldRenderReadOnly = function (question, controller, readOnly) {
        return ((!!question && question.isReadOnly || readOnly) && SurveyHelper.getReadonlyRenderAs(question, controller) !== 'acroform') || (controller === null || controller === void 0 ? void 0 : controller.compress);
    };
    SurveyHelper.EPSILON = 2.2204460492503130808472633361816e-15;
    SurveyHelper.TITLE_SURVEY_FONT_SIZE_SCALE = 1.7;
    SurveyHelper.TITLE_PAGE_FONT_SIZE_SCALE = 1.3;
    SurveyHelper.TITLE_PANEL_FONT_SIZE_SCALE = 1.3;
    SurveyHelper.DESCRIPTION_FONT_SIZE_SCALE = 2.0 / 3.0;
    SurveyHelper.OTHER_ROWS_COUNT = 2;
    SurveyHelper.RATING_MIN_WIDTH = 3;
    SurveyHelper.RATING_MIN_HEIGHT = 2;
    SurveyHelper.RATING_COLUMN_WIDTH = 5;
    SurveyHelper.MATRIX_COLUMN_WIDTH = 5;
    SurveyHelper.IMAGEPICKER_COUNT = 4;
    SurveyHelper.IMAGEPICKER_RATIO = 4.0 / 3.0;
    SurveyHelper.MULTIPLETEXT_TEXT_PERS = Math.E / 10.0;
    SurveyHelper.HTML_TAIL_TEXT_SCALE = 0.24;
    SurveyHelper.SELECT_ITEM_FLAT_SCALE = 0.95;
    SurveyHelper.GAP_BETWEEN_ROWS = 0.25;
    SurveyHelper.GAP_BETWEEN_COLUMNS = 1.5;
    SurveyHelper.GAP_BETWEEN_ITEM_TEXT = 0.25;
    SurveyHelper.FORM_BORDER_VISIBLE = true;
    SurveyHelper.BORDER_SCALE = 0.1;
    SurveyHelper.VISIBLE_BORDER_SCALE = 0.8;
    SurveyHelper.UNVISIBLE_BORDER_SCALE = 0.2;
    SurveyHelper.RADIUS_SCALE = 3.0;
    SurveyHelper.TITLE_FONT_SCALE = 1.1;
    SurveyHelper.VALUE_READONLY_PADDING_SCALE = 0.3;
    SurveyHelper.HTML_TO_IMAGE_QUALITY = 1.0;
    SurveyHelper.FORM_BORDER_COLOR = '#9f9f9f';
    SurveyHelper.TEXT_COLOR = '#404040';
    SurveyHelper.BACKGROUND_COLOR = '#FFFFFF';
    SurveyHelper.TITLE_LOCATION_MATRIX = 'matrix';
    SurveyHelper.STANDARD_FONT = 'helvetica';
    SurveyHelper.CUSTOM_FONT_ENCODING = 'Identity-H';
    SurveyHelper.inBrowser = typeof Image === 'function';
    SurveyHelper.shouldConvertImageToPng = true;
    return SurveyHelper;
}());



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__flat_question__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__flat_default__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlatRepository; });


var FlatRepository = /** @class */ (function () {
    function FlatRepository() {
        this.questions = {};
    }
    FlatRepository.getInstance = function () {
        return FlatRepository.instance;
    };
    FlatRepository.prototype.register = function (modelType, rendererConstructor) {
        this.questions[modelType] = rendererConstructor;
    };
    FlatRepository.prototype.isTypeRegistered = function (type) {
        return !!this.questions[type];
    };
    FlatRepository.prototype.getRenderer = function (type) {
        return this.questions[type];
    };
    FlatRepository.prototype.create = function (survey, question, docController, type) {
        var _a;
        var questionType = typeof type === 'undefined' ? question.getType() : type;
        var rendererConstructor = this.getRenderer(questionType);
        if (!rendererConstructor) {
            if (!!((_a = question.customWidget) === null || _a === void 0 ? void 0 : _a.pdfRender)) {
                rendererConstructor = __WEBPACK_IMPORTED_MODULE_0__flat_question__["a" /* FlatQuestion */];
            }
            else {
                rendererConstructor = __WEBPACK_IMPORTED_MODULE_1__flat_default__["a" /* FlatQuestionDefault */];
            }
        }
        return new rendererConstructor(survey, question, docController);
    };
    FlatRepository.register = function (type, rendererConstructor) {
        this.getInstance().register(type, rendererConstructor);
    };
    FlatRepository.getRenderer = function (type) {
        return this.getInstance().getRenderer(type);
    };
    FlatRepository.instance = new FlatRepository();
    return FlatRepository;
}());



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_survey_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flat_survey__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pdf_render_pdf_text__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pdf_render_pdf_composite__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helper_survey__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlatQuestion; });






var FlatQuestion = /** @class */ (function () {
    function FlatQuestion(survey, question, controller) {
        this.survey = survey;
        this.controller = controller;
        this.question = question;
    }
    FlatQuestion.prototype.generateFlatTitle = function (point) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_5__helper_survey__["a" /* SurveyHelper */].createTitleFlat(point, this.question, this.controller)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    FlatQuestion.prototype.generateFlatDescription = function (point) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var descPoint, text;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        descPoint = __WEBPACK_IMPORTED_MODULE_5__helper_survey__["a" /* SurveyHelper */].clone(point);
                        descPoint.xLeft += this.controller.unitWidth * FlatQuestion.CONTENT_INDENT_SCALE;
                        descPoint.yTop += FlatQuestion.DESC_GAP_SCALE * this.controller.unitHeight;
                        text = this.question.locDescription;
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_5__helper_survey__["a" /* SurveyHelper */].createDescFlat(descPoint, this.question, this.controller, text)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    FlatQuestion.prototype.generateFlatsComment = function (point) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var text, otherTextFlat, otherPoint, _a, _b;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        text = this.question.locCommentText;
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_5__helper_survey__["a" /* SurveyHelper */].createTextFlat(point, this.question, this.controller, text, __WEBPACK_IMPORTED_MODULE_3__pdf_render_pdf_text__["a" /* TextBrick */])];
                    case 1:
                        otherTextFlat = _c.sent();
                        otherPoint = __WEBPACK_IMPORTED_MODULE_5__helper_survey__["a" /* SurveyHelper */].createPoint(otherTextFlat);
                        otherPoint.yTop += this.controller.unitHeight * __WEBPACK_IMPORTED_MODULE_5__helper_survey__["a" /* SurveyHelper */].GAP_BETWEEN_ROWS;
                        _a = __WEBPACK_IMPORTED_MODULE_4__pdf_render_pdf_composite__["a" /* CompositeBrick */].bind;
                        _b = [void 0, otherTextFlat];
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_5__helper_survey__["a" /* SurveyHelper */].createCommentFlat(otherPoint, this.question, this.controller, false, { rows: __WEBPACK_IMPORTED_MODULE_5__helper_survey__["a" /* SurveyHelper */].OTHER_ROWS_COUNT })];
                    case 2: return [2 /*return*/, new (_a.apply(__WEBPACK_IMPORTED_MODULE_4__pdf_render_pdf_composite__["a" /* CompositeBrick */], _b.concat([_c.sent()])))()];
                }
            });
        });
    };
    FlatQuestion.prototype.generateFlatsComposite = function (point) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var contentPanel;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        contentPanel = this.question.contentPanel;
                        if (!!!contentPanel) return [3 /*break*/, 2];
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_2__flat_survey__["a" /* FlatSurvey */].generateFlatsPanel(this.survey, this.controller, contentPanel, point)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        this.question = __WEBPACK_IMPORTED_MODULE_5__helper_survey__["a" /* SurveyHelper */].getContentQuestion(this.question);
                        return [4 /*yield*/, this.generateFlatsContent(point)];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    FlatQuestion.prototype.generateFlatsContent = function (point) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_a) {
                return [2 /*return*/, null];
            });
        });
    };
    FlatQuestion.prototype.generateFlats = function (point) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var indentPoint, flats, commentPoint, titleLocation, isDesc, _a, titleFlat, compositeFlat, contentPoint, descFlat, contentFlats, contentPoint, contentFlats, _b, _c, titlePoint, titleFlat, compositeFlat, descFlat, titleFlat, compositeFlat, contentPoint, descFlat, contentFlats, contentPoint, _d, _e, _f, _g, _h;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_j) {
                switch (_j.label) {
                    case 0:
                        this.controller.pushMargins();
                        this.controller.margins.left += this.controller.measureText(this.question.indent).width;
                        indentPoint = {
                            xLeft: point.xLeft + this.controller.measureText(this.question.indent).width,
                            yTop: point.yTop
                        };
                        flats = [];
                        commentPoint = indentPoint;
                        titleLocation = this.question.getTitleLocation();
                        titleLocation = this.question.hasTitle ? titleLocation : 'hidden';
                        isDesc = !!__WEBPACK_IMPORTED_MODULE_5__helper_survey__["a" /* SurveyHelper */].getLocString(this.question.locDescription);
                        _a = titleLocation;
                        switch (_a) {
                            case 'top': return [3 /*break*/, 1];
                            case 'default': return [3 /*break*/, 1];
                            case 'bottom': return [3 /*break*/, 7];
                            case 'left': return [3 /*break*/, 14];
                            case 'hidden': return [3 /*break*/, 19];
                            case __WEBPACK_IMPORTED_MODULE_5__helper_survey__["a" /* SurveyHelper */].TITLE_LOCATION_MATRIX: return [3 /*break*/, 19];
                        }
                        return [3 /*break*/, 19];
                    case 1: return [4 /*yield*/, this.generateFlatTitle(indentPoint)];
                    case 2:
                        titleFlat = _j.sent();
                        compositeFlat = new __WEBPACK_IMPORTED_MODULE_4__pdf_render_pdf_composite__["a" /* CompositeBrick */](titleFlat);
                        contentPoint = __WEBPACK_IMPORTED_MODULE_5__helper_survey__["a" /* SurveyHelper */].createPoint(compositeFlat);
                        if (!isDesc) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.generateFlatDescription(__WEBPACK_IMPORTED_MODULE_5__helper_survey__["a" /* SurveyHelper */].createPoint(titleFlat))];
                    case 3:
                        descFlat = _j.sent();
                        compositeFlat.addBrick(descFlat);
                        contentPoint = __WEBPACK_IMPORTED_MODULE_5__helper_survey__["a" /* SurveyHelper */].createPoint(descFlat);
                        return [3 /*break*/, 5];
                    case 4:
                        contentPoint.xLeft += this.controller.unitWidth * FlatQuestion.CONTENT_INDENT_SCALE;
                        _j.label = 5;
                    case 5:
                        compositeFlat.addBrick(__WEBPACK_IMPORTED_MODULE_5__helper_survey__["a" /* SurveyHelper */].createRowlineFlat(__WEBPACK_IMPORTED_MODULE_5__helper_survey__["a" /* SurveyHelper */].createPoint(compositeFlat), this.controller));
                        contentPoint.yTop += this.controller.unitHeight *
                            FlatQuestion.CONTENT_GAP_VERT_SCALE + __WEBPACK_IMPORTED_MODULE_5__helper_survey__["a" /* SurveyHelper */].EPSILON;
                        commentPoint = contentPoint;
                        this.controller.pushMargins();
                        this.controller.margins.left += this.controller.unitWidth * FlatQuestion.CONTENT_INDENT_SCALE;
                        return [4 /*yield*/, this.generateFlatsComposite(contentPoint)];
                    case 6:
                        contentFlats = _j.sent();
                        this.controller.popMargins();
                        if (contentFlats !== null && contentFlats.length !== 0) {
                            commentPoint.yTop = __WEBPACK_IMPORTED_MODULE_5__helper_survey__["a" /* SurveyHelper */].mergeRects.apply(__WEBPACK_IMPORTED_MODULE_5__helper_survey__["a" /* SurveyHelper */], contentFlats).yBot +
                                this.controller.unitHeight * __WEBPACK_IMPORTED_MODULE_5__helper_survey__["a" /* SurveyHelper */].GAP_BETWEEN_ROWS;
                            compositeFlat.addBrick(contentFlats.shift());
                        }
                        flats.push(compositeFlat);
                        flats.push.apply(flats, contentFlats);
                        return [3 /*break*/, 21];
                    case 7:
                        contentPoint = __WEBPACK_IMPORTED_MODULE_5__helper_survey__["a" /* SurveyHelper */].clone(indentPoint);
                        this.controller.pushMargins();
                        contentPoint.xLeft += this.controller.unitWidth * FlatQuestion.CONTENT_INDENT_SCALE;
                        this.controller.margins.left += this.controller.unitWidth * FlatQuestion.CONTENT_INDENT_SCALE;
                        commentPoint = contentPoint;
                        return [4 /*yield*/, this.generateFlatsComposite(contentPoint)];
                    case 8:
                        contentFlats = _j.sent();
                        this.controller.popMargins();
                        flats.push.apply(flats, contentFlats);
                        if (contentFlats !== null && contentFlats.length != 0) {
                            commentPoint = __WEBPACK_IMPORTED_MODULE_5__helper_survey__["a" /* SurveyHelper */].createPoint(__WEBPACK_IMPORTED_MODULE_5__helper_survey__["a" /* SurveyHelper */].mergeRects.apply(__WEBPACK_IMPORTED_MODULE_5__helper_survey__["a" /* SurveyHelper */], contentFlats));
                            commentPoint.yTop += this.controller.unitHeight * __WEBPACK_IMPORTED_MODULE_5__helper_survey__["a" /* SurveyHelper */].GAP_BETWEEN_ROWS;
                        }
                        if (!this.question.hasComment) return [3 /*break*/, 10];
                        _c = (_b = flats).push;
                        return [4 /*yield*/, this.generateFlatsComment(commentPoint)];
                    case 9:
                        _c.apply(_b, [_j.sent()]);
                        _j.label = 10;
                    case 10:
                        titlePoint = indentPoint;
                        if (flats.length !== 0) {
                            titlePoint.yTop = flats[flats.length - 1].yBot;
                        }
                        titlePoint.yTop += this.controller.unitHeight * FlatQuestion.CONTENT_GAP_VERT_SCALE;
                        return [4 /*yield*/, this.generateFlatTitle(titlePoint)];
                    case 11:
                        titleFlat = _j.sent();
                        compositeFlat = new __WEBPACK_IMPORTED_MODULE_4__pdf_render_pdf_composite__["a" /* CompositeBrick */](titleFlat);
                        if (!isDesc) return [3 /*break*/, 13];
                        return [4 /*yield*/, this.generateFlatDescription(__WEBPACK_IMPORTED_MODULE_5__helper_survey__["a" /* SurveyHelper */].createPoint(titleFlat))];
                    case 12:
                        descFlat = _j.sent();
                        compositeFlat.addBrick(descFlat);
                        _j.label = 13;
                    case 13:
                        flats.push(compositeFlat);
                        return [3 /*break*/, 21];
                    case 14:
                        this.controller.pushMargins(this.controller.margins.left, this.controller.paperWidth - this.controller.margins.left -
                            __WEBPACK_IMPORTED_MODULE_5__helper_survey__["a" /* SurveyHelper */].getPageAvailableWidth(this.controller) *
                                __WEBPACK_IMPORTED_MODULE_5__helper_survey__["a" /* SurveyHelper */].MULTIPLETEXT_TEXT_PERS);
                        return [4 /*yield*/, this.generateFlatTitle(indentPoint)];
                    case 15:
                        titleFlat = _j.sent();
                        compositeFlat = new __WEBPACK_IMPORTED_MODULE_4__pdf_render_pdf_composite__["a" /* CompositeBrick */](titleFlat);
                        contentPoint = __WEBPACK_IMPORTED_MODULE_5__helper_survey__["a" /* SurveyHelper */].createPoint(titleFlat, false, true);
                        if (!isDesc) return [3 /*break*/, 17];
                        return [4 /*yield*/, this.generateFlatDescription(__WEBPACK_IMPORTED_MODULE_5__helper_survey__["a" /* SurveyHelper */].createPoint(titleFlat))];
                    case 16:
                        descFlat = _j.sent();
                        compositeFlat.addBrick(descFlat);
                        contentPoint.xLeft = Math.max(contentPoint.xLeft, descFlat.xRight);
                        _j.label = 17;
                    case 17:
                        this.controller.popMargins();
                        contentPoint.xLeft += this.controller.unitWidth * FlatQuestion.CONTENT_GAP_HOR_SCALE;
                        this.controller.margins.left = contentPoint.xLeft;
                        commentPoint.xLeft = contentPoint.xLeft;
                        return [4 /*yield*/, this.generateFlatsComposite(contentPoint)];
                    case 18:
                        contentFlats = _j.sent();
                        if (contentFlats !== null && contentFlats.length != 0) {
                            commentPoint = __WEBPACK_IMPORTED_MODULE_5__helper_survey__["a" /* SurveyHelper */].createPoint(__WEBPACK_IMPORTED_MODULE_5__helper_survey__["a" /* SurveyHelper */].mergeRects.apply(__WEBPACK_IMPORTED_MODULE_5__helper_survey__["a" /* SurveyHelper */], contentFlats));
                            commentPoint.yTop += this.controller.unitHeight * __WEBPACK_IMPORTED_MODULE_5__helper_survey__["a" /* SurveyHelper */].GAP_BETWEEN_ROWS;
                            compositeFlat.addBrick(contentFlats.shift());
                        }
                        flats.push(compositeFlat);
                        flats.push.apply(flats, contentFlats);
                        return [3 /*break*/, 21];
                    case 19:
                        contentPoint = __WEBPACK_IMPORTED_MODULE_5__helper_survey__["a" /* SurveyHelper */].clone(indentPoint);
                        this.controller.pushMargins();
                        if (titleLocation !== __WEBPACK_IMPORTED_MODULE_5__helper_survey__["a" /* SurveyHelper */].TITLE_LOCATION_MATRIX) {
                            contentPoint.xLeft += this.controller.unitWidth * FlatQuestion.CONTENT_INDENT_SCALE;
                            this.controller.margins.left += this.controller.unitWidth * FlatQuestion.CONTENT_INDENT_SCALE;
                        }
                        commentPoint = contentPoint;
                        _e = (_d = flats.push).apply;
                        _f = [flats];
                        return [4 /*yield*/, this.generateFlatsComposite(contentPoint)];
                    case 20:
                        _e.apply(_d, _f.concat([_j.sent()]));
                        this.controller.popMargins();
                        if (flats !== null && flats.length !== 0) {
                            commentPoint = __WEBPACK_IMPORTED_MODULE_5__helper_survey__["a" /* SurveyHelper */].createPoint(__WEBPACK_IMPORTED_MODULE_5__helper_survey__["a" /* SurveyHelper */].mergeRects.apply(__WEBPACK_IMPORTED_MODULE_5__helper_survey__["a" /* SurveyHelper */], flats));
                            commentPoint.yTop += this.controller.unitHeight * __WEBPACK_IMPORTED_MODULE_5__helper_survey__["a" /* SurveyHelper */].GAP_BETWEEN_ROWS;
                        }
                        return [3 /*break*/, 21];
                    case 21:
                        if (!(this.question.hasComment && this.question.titleLocation !== 'bottom')) return [3 /*break*/, 23];
                        _h = (_g = flats).push;
                        return [4 /*yield*/, this.generateFlatsComment(commentPoint)];
                    case 22:
                        _h.apply(_g, [_j.sent()]);
                        _j.label = 23;
                    case 23:
                        this.controller.popMargins();
                        return [2 /*return*/, flats];
                }
            });
        });
    };
    Object.defineProperty(FlatQuestion.prototype, "shouldRenderAsComment", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_5__helper_survey__["a" /* SurveyHelper */].shouldRenderReadOnly(this.question, this.controller);
        },
        enumerable: false,
        configurable: true
    });
    FlatQuestion.CONTENT_GAP_VERT_SCALE = 0.5;
    FlatQuestion.CONTENT_GAP_HOR_SCALE = 1.0;
    FlatQuestion.CONTENT_INDENT_SCALE = 1.0;
    FlatQuestion.DESC_GAP_SCALE = 0.0625;
    return FlatQuestion;
}());

__WEBPACK_IMPORTED_MODULE_1_survey_core__["Serializer"].addProperty('question', {
    name: 'readonlyRenderAs',
    default: 'auto',
    choices: ['auto', 'text', 'acroform']
});


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pdf_brick__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextBrick; });


var TextBrick = /** @class */ (function (_super) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */])(TextBrick, _super);
    function TextBrick(question, controller, rect, text) {
        var _this = _super.call(this, question, controller, rect) || this;
        _this.text = text;
        _this.align = {
            isInputRtl: false,
            isOutputRtl: controller.isRTL,
            align: controller.isRTL ? 'right' : 'left',
            baseline: 'middle'
        };
        return _this;
    }
    TextBrick.prototype.escapeText = function () {
        while (this.text.indexOf('\t') > -1) {
            this.text = this.text.replace('\t', Array(5).join(String.fromCharCode(160)));
        }
        return this.text;
    };
    TextBrick.prototype.renderInteractive = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var alignPoint, oldFontSize, oldTextColor;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_a) {
                alignPoint = this.alignPoint(this);
                oldFontSize = this.controller.fontSize;
                this.controller.fontSize = this.fontSize;
                oldTextColor = this.controller.doc.getTextColor();
                this.controller.doc.setTextColor(this.textColor);
                this.controller.doc.text(this.escapeText(), alignPoint.xLeft, alignPoint.yTop, this.align);
                this.controller.doc.setTextColor(oldTextColor);
                this.controller.fontSize = oldFontSize;
                return [2 /*return*/];
            });
        });
    };
    TextBrick.prototype.alignPoint = function (rect) {
        return {
            xLeft: this.controller.isRTL ? rect.xRight : rect.xLeft,
            yTop: rect.yTop + (rect.yBot - rect.yTop) / 2.0
        };
    };
    return TextBrick;
}(__WEBPACK_IMPORTED_MODULE_1__pdf_brick__["a" /* PdfBrick */]));



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helper_survey__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompositeBrick; });


var CompositeBrick = /** @class */ (function () {
    function CompositeBrick() {
        var bricks = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            bricks[_i] = arguments[_i];
        }
        this.bricks = [];
        this.isPageBreak = false;
        this._xLeft = 0.0;
        this._xRight = 0.0;
        this._yTop = 0.0;
        this._yBot = 0.0;
        this.addBrick.apply(this, bricks);
    }
    Object.defineProperty(CompositeBrick.prototype, "xLeft", {
        get: function () { return this._xLeft; },
        set: function (xLeft) {
            this.shift(xLeft - this.xLeft, 0.0, 0.0, 0.0);
            this._xLeft = xLeft;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CompositeBrick.prototype, "xRight", {
        get: function () { return this._xRight; },
        set: function (xRight) {
            this.shift(0.0, xRight - this.xRight, 0.0, 0.0);
            this._xRight = xRight;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CompositeBrick.prototype, "yTop", {
        get: function () { return this._yTop; },
        set: function (yTop) {
            this.shift(0.0, 0.0, yTop - this.yTop, 0.0);
            this._yTop = yTop;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CompositeBrick.prototype, "yBot", {
        get: function () { return this._yBot; },
        set: function (yBot) {
            this.shift(0.0, 0.0, 0.0, yBot - this.yBot);
            this._yBot = yBot;
        },
        enumerable: false,
        configurable: true
    });
    CompositeBrick.prototype.shift = function (leftShift, rightShift, topShift, botShift) {
        this.bricks.forEach(function (brick) {
            brick.xLeft += leftShift;
            brick.xRight += rightShift;
            brick.yTop += topShift;
            brick.yBot += botShift;
        });
    };
    Object.defineProperty(CompositeBrick.prototype, "width", {
        get: function () {
            return this.xRight - this.xLeft;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CompositeBrick.prototype, "height", {
        get: function () {
            return this.yBot - this.yTop;
        },
        enumerable: false,
        configurable: true
    });
    CompositeBrick.prototype.render = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var i;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < this.bricks.length)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.bricks[i].render()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(CompositeBrick.prototype, "isEmpty", {
        get: function () {
            return this.bricks.length === 0;
        },
        enumerable: false,
        configurable: true
    });
    CompositeBrick.prototype.addBrick = function () {
        var _a;
        var bricks = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            bricks[_i] = arguments[_i];
        }
        if (bricks.length != 0) {
            (_a = this.bricks).push.apply(_a, bricks);
            var mergeRect = __WEBPACK_IMPORTED_MODULE_1__helper_survey__["a" /* SurveyHelper */].mergeRects.apply(__WEBPACK_IMPORTED_MODULE_1__helper_survey__["a" /* SurveyHelper */], this.bricks);
            this._xLeft = mergeRect.xLeft;
            this._xRight = mergeRect.xRight;
            this._yTop = mergeRect.yTop;
            this._yBot = mergeRect.yBot;
        }
    };
    CompositeBrick.prototype.unfold = function () {
        var unfoldBricks = [];
        this.bricks.forEach(function (brick) {
            unfoldBricks.push.apply(unfoldBricks, brick.unfold());
        });
        return unfoldBricks;
    };
    CompositeBrick.prototype.translateX = function (func) {
        this.bricks.forEach(function (brick) { return brick.translateX(func); });
        var res = func(this.xLeft, this.xRight);
        this._xLeft = res.xLeft;
        this._xRight = res.xRight;
    };
    return CompositeBrick;
}());



/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__doc_controller__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helper_survey__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PdfBrick; });



/**
 * An object that describes a PDF brick&mdash;a simple element with specified content, size, and location. Bricks are fundamental elements used to construct a PDF document.
 *
 * You can access `PdfBrick` objects within functions that handle `SurveyPDF`'s [`onRenderQuestion`](https://surveyjs.io/pdf-generator/documentation/api-reference/surveypdf#onRenderQuestion), [`onRenderPanel`](https://surveyjs.io/pdf-generator/documentation/api-reference/surveypdf#onRenderPanel), and [`onRenderPage`](https://surveyjs.io/pdf-generator/documentation/api-reference/surveypdf#onRenderPage) events.
 *
 * [View Demo](https://surveyjs.io/pdf-generator/examples/add-markup-to-customize-pdf-forms/ (linkStyle))
 */
var PdfBrick = /** @class */ (function () {
    function PdfBrick(question, controller, rect) {
        this.question = question;
        this.controller = controller;
        /**
         * The color of text within the brick.
         *
         * Default value: `"#404040"`
         */
        this.textColor = __WEBPACK_IMPORTED_MODULE_2__helper_survey__["a" /* SurveyHelper */].TEXT_COLOR;
        this.formBorderColor = __WEBPACK_IMPORTED_MODULE_2__helper_survey__["a" /* SurveyHelper */].FORM_BORDER_COLOR;
        this.isPageBreak = false;
        this.xLeft = rect.xLeft;
        this.xRight = rect.xRight;
        this.yTop = rect.yTop;
        this.yBot = rect.yBot;
        this.fontSize = !!controller ?
            controller.fontSize : __WEBPACK_IMPORTED_MODULE_1__doc_controller__["b" /* DocController */].FONT_SIZE;
    }
    Object.defineProperty(PdfBrick.prototype, "xLeft", {
        /**
         * An X-coordinate for the left brick edge.
         */
        get: function () {
            return this._xLeft;
        },
        set: function (val) {
            this.setXLeft(val);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PdfBrick.prototype, "xRight", {
        /**
         * An X-coordinate for the right brick edge.
         */
        get: function () {
            return this._xRight;
        },
        set: function (val) {
            this.setXRight(val);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PdfBrick.prototype, "yTop", {
        /**
         * A Y-coordinate for the top brick edge.
         */
        get: function () {
            return this._yTop;
        },
        set: function (val) {
            this.setYTop(val);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PdfBrick.prototype, "yBot", {
        /**
         * A Y-coordinate for the bottom brick edge.
         */
        get: function () {
            return this._yBot;
        },
        set: function (val) {
            this.setYBottom(val);
        },
        enumerable: false,
        configurable: true
    });
    PdfBrick.prototype.translateX = function (func) {
        var res = func(this.xLeft, this.xRight);
        this.xLeft = res.xLeft;
        this.xRight = res.xRight;
    };
    Object.defineProperty(PdfBrick.prototype, "width", {
        /**
         * The brick's width in pixels.
         */
        get: function () {
            return this.xRight - this.xLeft;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PdfBrick.prototype, "height", {
        /**
         * The brick's height in pixels.
         */
        get: function () {
            return this.yBot - this.yTop;
        },
        enumerable: false,
        configurable: true
    });
    PdfBrick.prototype.getShouldRenderReadOnly = function () {
        return __WEBPACK_IMPORTED_MODULE_2__helper_survey__["a" /* SurveyHelper */].shouldRenderReadOnly(this.question, this.controller);
    };
    PdfBrick.prototype.render = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.getShouldRenderReadOnly()) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.renderReadOnly()];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.renderInteractive()];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    PdfBrick.prototype.renderInteractive = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    PdfBrick.prototype.renderReadOnly = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.renderInteractive()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Allows you to get a flat array of nested PDF bricks.
     * @returns A flat array of nested PDF bricks.
     */
    PdfBrick.prototype.unfold = function () {
        return [this];
    };
    PdfBrick.prototype.getCorrectedText = function (val) {
        return this.controller.isRTL ? (val || '').split('').reverse().join('') : val;
    };
    PdfBrick.prototype.setXLeft = function (val) {
        this._xLeft = val;
    };
    PdfBrick.prototype.setXRight = function (val) {
        this._xRight = val;
    };
    PdfBrick.prototype.setYTop = function (val) {
        this._yTop = val;
    };
    PdfBrick.prototype.setYBottom = function (val) {
        this._yBot = val;
    };
    return PdfBrick;
}());



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jspdf__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jspdf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jspdf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helper_survey__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jspdf_plugins_acroform__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__jspdf_plugins_acroform_js__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__jspdf_plugins_acroform_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__jspdf_plugins_acroform_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__jspdf_plugins_from_html_js__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__jspdf_plugins_from_html_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__jspdf_plugins_from_html_js__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DocController; });



// import Fonts from './fonts';



var DocOptions = /** @class */ (function () {
    function DocOptions(options) {
        var _this = this;
        this._base64Normal = undefined;
        this._base64Bold = undefined;
        if (typeof options.orientation === 'undefined') {
            if (typeof options.format === 'undefined' ||
                options.format[0] < options.format[1]) {
                this._orientation = 'p';
            }
            else
                this._orientation = 'l';
        }
        else
            this._orientation = options.orientation;
        this._format = options.format || 'a4';
        if (Array.isArray(this._format)) {
            this._format = this._format.map(function (f) { return f * DocOptions.MM_TO_PT; });
        }
        this._fontSize = options.fontSize || DocOptions.FONT_SIZE;
        if (!options.fontName) {
            if (!DocOptions.SEGOE_BOLD && !DocOptions.SEGOE_NORMAL) {
                this._fontName = __WEBPACK_IMPORTED_MODULE_2__helper_survey__["a" /* SurveyHelper */].STANDARD_FONT;
            }
            else {
                this._fontName = 'segoe';
            }
        }
        else {
            this._fontName = options.fontName;
        }
        if ((typeof options.fontName !== 'undefined' &&
            (typeof options.base64Normal !== 'undefined' ||
                typeof options.base64Bold !== 'undefined'))) {
            this._base64Normal = options.base64Normal || options.base64Bold;
            this._base64Bold = options.base64Bold || options.base64Normal;
        }
        else if (this.fontName === 'segoe') {
            // this._base64Normal = Fonts.SEGOE_NORMAL;
            // this._base64Bold = Fonts.SEGOE_BOLD;
            this._base64Normal = DocOptions.SEGOE_NORMAL;
            this._base64Bold = DocOptions.SEGOE_BOLD;
        }
        this._margins = __WEBPACK_IMPORTED_MODULE_2__helper_survey__["a" /* SurveyHelper */].clone(options.margins);
        if (typeof this._margins === 'undefined') {
            this._margins = {};
        }
        if (typeof this._margins.top === 'undefined') {
            this._margins.top = 10.0;
        }
        if (typeof this._margins.bot === 'undefined') {
            this._margins.bot = 10.0;
        }
        if (typeof this._margins.left === 'undefined') {
            this._margins.left = 10.0;
        }
        if (typeof this._margins.right === 'undefined') {
            this._margins.right = 10.0;
        }
        Object.keys(this._margins).forEach(function (name) {
            _this._margins[name] = _this._margins[name] * DocOptions.MM_TO_PT;
        });
        this._htmlRenderAs = options.htmlRenderAs || 'auto';
        this._matrixRenderAs = options.matrixRenderAs || 'auto';
        this._readonlyRenderAs = options.readonlyRenderAs || 'auto';
        this._compress = options.compress || false;
        this._applyImageFit = options.applyImageFit || false;
        this._useLegacyBooleanRendering = options.useLegacyBooleanRendering || false;
        this._isRTL = options.isRTL || false;
    }
    Object.defineProperty(DocOptions.prototype, "leftTopPoint", {
        get: function () {
            return {
                xLeft: this.margins.left,
                yTop: this.margins.top
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocOptions.prototype, "fontSize", {
        get: function () {
            return this._fontSize;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocOptions.prototype, "fontName", {
        get: function () {
            return this._fontName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocOptions.prototype, "base64Normal", {
        get: function () {
            return this._base64Normal;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocOptions.prototype, "base64Bold", {
        get: function () {
            return this._base64Bold;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocOptions.prototype, "useCustomFontInHtml", {
        get: function () {
            return this._useCustomFontInHtml;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocOptions.prototype, "margins", {
        get: function () {
            return this._margins;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocOptions.prototype, "format", {
        get: function () {
            return this._format;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocOptions.prototype, "orientation", {
        get: function () {
            return this._orientation;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocOptions.prototype, "htmlRenderAs", {
        get: function () {
            return this._htmlRenderAs;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocOptions.prototype, "matrixRenderAs", {
        get: function () {
            return this._matrixRenderAs;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocOptions.prototype, "readonlyRenderAs", {
        get: function () {
            return this._readonlyRenderAs;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocOptions.prototype, "compress", {
        get: function () {
            return this._compress;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocOptions.prototype, "applyImageFit", {
        get: function () {
            return this._applyImageFit;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocOptions.prototype, "useLegacyBooleanRendering", {
        get: function () {
            return this._useLegacyBooleanRendering;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocOptions.prototype, "isRTL", {
        get: function () {
            return this._isRTL;
        },
        enumerable: false,
        configurable: true
    });
    DocOptions.MM_TO_PT = 72 / 25.4;
    DocOptions.FONT_SIZE = 14;
    return DocOptions;
}());

/**
 * The `DocController` object includes an API that allows you to configure the resulting PDF document. You can access this object within functions that handle the `SurveyPDF`'s [`onRender...`](https://surveyjs.io/pdf-generator/documentation/api-reference/surveypdf#onRenderFooter) events.
 *
 * [View Demo](https://surveyjs.io/pdf-generator/examples/how-to-use-adorners-in-pdf-forms/ (linkStyle))
 */
var DocController = /** @class */ (function (_super) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */])(DocController, _super);
    function DocController(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        var jspdfOptions = {
            orientation: _this.orientation,
            unit: 'pt',
            format: _this.format,
            compress: _this.compress
        };
        _this._doc = new __WEBPACK_IMPORTED_MODULE_1_jspdf__["jsPDF"](jspdfOptions);
        if (typeof _this.base64Normal !== 'undefined' && !__WEBPACK_IMPORTED_MODULE_2__helper_survey__["a" /* SurveyHelper */].isFontExist(_this, _this.fontName)) {
            DocController.addFont(_this.fontName, _this.base64Normal, 'normal');
            DocController.addFont(_this.fontName, _this.base64Bold, 'bold');
            _this._doc = new __WEBPACK_IMPORTED_MODULE_1_jspdf__["jsPDF"](jspdfOptions);
        }
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__jspdf_plugins_acroform__["a" /* default */])(_this._doc);
        _this._useCustomFontInHtml = options.useCustomFontInHtml && __WEBPACK_IMPORTED_MODULE_2__helper_survey__["a" /* SurveyHelper */].isFontExist(_this, _this.fontName);
        _this._helperDoc = new __WEBPACK_IMPORTED_MODULE_1_jspdf__["jsPDF"](jspdfOptions);
        _this._doc.setFont(_this.fontName);
        _this._helperDoc.setFont(_this.fontName);
        _this._doc.setFontSize(_this.fontSize);
        _this._helperDoc.setFontSize(_this.fontSize);
        _this._fontStyle = 'normal';
        _this.marginsStack = [];
        return _this;
    }
    DocController.addFont = function (fontName, base64, fontStyle) {
        var font = DocController.customFonts[fontName];
        if (!font) {
            font = {};
            DocController.customFonts[fontName] = font;
        }
        font[fontStyle] = base64;
        var addFontCallback = function () {
            var customFont = DocController.customFonts[fontName];
            if (!!customFont && !!customFont[fontStyle]) {
                var fontFile = "".concat(fontName, "-").concat(fontStyle, ".ttf");
                this.addFileToVFS(fontFile, customFont[fontStyle]);
                this.addFont(fontFile, fontName, fontStyle);
            }
        };
        __WEBPACK_IMPORTED_MODULE_1_jspdf__["jsPDF"].API.events.push(['addFonts', addFontCallback]);
    };
    Object.defineProperty(DocController.prototype, "doc", {
        get: function () {
            return this._doc;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocController.prototype, "helperDoc", {
        get: function () {
            return this._helperDoc;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocController.prototype, "fontName", {
        get: function () {
            return this._fontName;
        },
        set: function (fontName) {
            this._fontName = fontName;
            this._doc.setFont(fontName);
            this._helperDoc.setFont(fontName);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocController.prototype, "fontSize", {
        get: function () {
            return this._fontSize;
        },
        set: function (fontSize) {
            this._fontSize = fontSize;
            this._doc.setFontSize(fontSize);
            this._helperDoc.setFontSize(fontSize);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocController.prototype, "fontStyle", {
        get: function () {
            return this._fontStyle;
        },
        set: function (fontStyle) {
            this._fontStyle = fontStyle;
            this._doc.setFont(this._fontName, fontStyle);
            this._helperDoc.setFont(this._fontName, fontStyle);
        },
        enumerable: false,
        configurable: true
    });
    DocController.prototype.measureText = function (text, fontStyle, fontSize) {
        var _this = this;
        if (text === void 0) { text = 1; }
        if (fontStyle === void 0) { fontStyle = this._fontStyle; }
        if (fontSize === void 0) { fontSize = this._fontSize; }
        var oldFontSize = this._helperDoc.getFontSize();
        this._helperDoc.setFontSize(fontSize);
        this._helperDoc.setFont(this._fontName, fontStyle);
        var height = this._helperDoc.getLineHeight() / this._helperDoc.internal.scaleFactor;
        var width = 0.0;
        if (typeof text === 'number') {
            width = height * text;
        }
        else {
            text = typeof text === 'string' ? text : __WEBPACK_IMPORTED_MODULE_2__helper_survey__["a" /* SurveyHelper */].getLocString(text);
            width = text.split('').reduce(function (sm, cr) {
                return sm + _this._helperDoc.getTextWidth(cr);
            }, 0.0);
        }
        this._helperDoc.setFontSize(oldFontSize);
        this._helperDoc.setFont(this._fontName, 'normal');
        return {
            width: width,
            height: height
        };
    };
    Object.defineProperty(DocController.prototype, "unitWidth", {
        /**
         * The width of one character in pixels.
         */
        get: function () {
            return this.measureText().width;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocController.prototype, "unitHeight", {
        /**
         * The heigth of one character in pixels.
         */
        get: function () {
            return this.measureText().height;
        },
        enumerable: false,
        configurable: true
    });
    DocController.prototype.pushMargins = function (left, right) {
        this.marginsStack.push({ left: this.margins.left, right: this.margins.right });
        if (typeof left !== 'undefined')
            this.margins.left = left;
        if (typeof right !== 'undefined')
            this.margins.right = right;
    };
    DocController.prototype.popMargins = function () {
        var margins = this.marginsStack.pop();
        this.margins.left = margins.left;
        this.margins.right = margins.right;
    };
    Object.defineProperty(DocController.prototype, "paperWidth", {
        /**
         * The width of a PDF page in pixels.
         */
        get: function () {
            return this.doc.internal.pageSize.width;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocController.prototype, "paperHeight", {
        /**
         * The height of a PDF page in pixels.
         */
        get: function () {
            return this.doc.internal.pageSize.height;
        },
        enumerable: false,
        configurable: true
    });
    DocController.prototype.getNumberOfPages = function () {
        return this.doc.getNumberOfPages();
    };
    DocController.prototype.addPage = function () {
        this.doc.addPage();
    };
    DocController.prototype.setPage = function (index) {
        this.doc.setPage(index + 1);
    };
    DocController.customFonts = {};
    return DocController;
}(DocOptions));



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__flat_repository__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pdf_render_pdf_radioitem__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__flat_selectbase__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlatRadiogroup; });




var FlatRadiogroup = /** @class */ (function (_super) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */])(FlatRadiogroup, _super);
    function FlatRadiogroup(survey, question, controller) {
        var _this = _super.call(this, survey, question, controller) || this;
        _this.survey = survey;
        _this.controller = controller;
        _this.question = question;
        return _this;
    }
    FlatRadiogroup.prototype.isItemSelected = function (item, checked) {
        return (typeof checked === 'undefined') ?
            (item === this.question.otherItem ? this.question.isOtherSelected :
                (item.value === this.question.value ||
                    (typeof this.question.isItemSelected !== 'undefined' &&
                        this.question.isItemSelected(item)))) : checked;
    };
    FlatRadiogroup.prototype.generateFlatItem = function (rect, item, index, key, checked, context) {
        if (context === void 0) { context = {}; }
        if (index === 0) {
            this.radioGroupWrap = new __WEBPACK_IMPORTED_MODULE_2__pdf_render_pdf_radioitem__["b" /* RadioGroupWrap */](this.question.id + ((typeof key === 'undefined') ? '' : key), this.controller, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __assign */])({ readOnly: this.question.isReadOnly, question: this.question }, context));
            this.question.pdfRadioGroupWrap = this.radioGroupWrap;
        }
        else if (typeof this.radioGroupWrap === 'undefined') {
            this.radioGroupWrap = this.question.pdfRadioGroupWrap;
        }
        var isChecked = this.isItemSelected(item, checked);
        return new __WEBPACK_IMPORTED_MODULE_2__pdf_render_pdf_radioitem__["a" /* RadioItemBrick */](this.controller, rect, { question: this.question, index: index, checked: isChecked, item: item }, this.radioGroupWrap);
    };
    return FlatRadiogroup;
}(__WEBPACK_IMPORTED_MODULE_3__flat_selectbase__["a" /* FlatSelectBase */]));

__WEBPACK_IMPORTED_MODULE_1__flat_repository__["a" /* FlatRepository */].getInstance().register('radiogroup', FlatRadiogroup);
__WEBPACK_IMPORTED_MODULE_1__flat_repository__["a" /* FlatRepository */].getInstance().register('buttongroup', FlatRadiogroup);


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_survey_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pdf_render_pdf_composite__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pdf_render_pdf_rowline__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helper_survey__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__event_handler_adorners__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__entries_pdf__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlatSurvey; });








var FlatSurvey = /** @class */ (function () {
    function FlatSurvey() {
    }
    FlatSurvey.generateFlatsPanel = function (survey, controller, panel, point) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var panelFlats, panelContentPoint, _a, _b, _c, adornersOptions;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        panelFlats = [];
                        panelContentPoint = __WEBPACK_IMPORTED_MODULE_4__helper_survey__["a" /* SurveyHelper */].clone(point);
                        controller.pushMargins();
                        controller.margins.left += controller.measureText(panel.innerIndent).width;
                        panelContentPoint.xLeft += controller.measureText(panel.innerIndent).width;
                        _b = (_a = panelFlats.push).apply;
                        _c = [panelFlats];
                        return [4 /*yield*/, this.generateFlatsPagePanel(survey, controller, panel, panelContentPoint)];
                    case 1:
                        _b.apply(_a, _c.concat([_d.sent()]));
                        controller.popMargins();
                        adornersOptions = new __WEBPACK_IMPORTED_MODULE_5__event_handler_adorners__["a" /* AdornersPanelOptions */](point, panelFlats, panel, controller, __WEBPACK_IMPORTED_MODULE_6__entries_pdf__["FlatRepository"].getInstance(), __WEBPACK_IMPORTED_MODULE_6__entries_pdf__);
                        return [4 /*yield*/, survey.onRenderPanel.fire(survey, adornersOptions)];
                    case 2:
                        _d.sent();
                        return [2 /*return*/, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __spreadArray */])([], adornersOptions.bricks, true)];
                }
            });
        });
    };
    FlatSurvey.generateFlatsPagePanel = function (survey, controller, pagePanel, point) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var pagePanelFlats, currPoint, compositeFlat, noFlat, pagelPanelTitleFlat, pagePanelDescFlat, rowLinePoint, _i, _a, row, width, nextMarginLeft, rowFlats, i, element, persWidth, _b, _c, _d, _e, _f, _g;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_h) {
                switch (_h.label) {
                    case 0:
                        if (!pagePanel.isVisible)
                            return [2 /*return*/];
                        pagePanel.onFirstRendering();
                        pagePanelFlats = [];
                        currPoint = __WEBPACK_IMPORTED_MODULE_4__helper_survey__["a" /* SurveyHelper */].clone(point);
                        if (!(pagePanel.getType() !== 'page' || survey.showPageTitles)) return [3 /*break*/, 7];
                        compositeFlat = new __WEBPACK_IMPORTED_MODULE_2__pdf_render_pdf_composite__["a" /* CompositeBrick */]();
                        if (!pagePanel.title) return [3 /*break*/, 4];
                        if (!(pagePanel instanceof __WEBPACK_IMPORTED_MODULE_1_survey_core__["PanelModel"] && pagePanel.no)) return [3 /*break*/, 2];
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_4__helper_survey__["a" /* SurveyHelper */].createTitlePanelFlat(currPoint, controller, pagePanel.no, pagePanel.getType() === 'page')];
                    case 1:
                        noFlat = _h.sent();
                        compositeFlat.addBrick(noFlat);
                        currPoint.xLeft = noFlat.xRight + controller.measureText(' ').width;
                        _h.label = 2;
                    case 2: return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_4__helper_survey__["a" /* SurveyHelper */].createTitlePanelFlat(currPoint, controller, pagePanel.locTitle, pagePanel.getType() === 'page')];
                    case 3:
                        pagelPanelTitleFlat = _h.sent();
                        compositeFlat.addBrick(pagelPanelTitleFlat);
                        currPoint = __WEBPACK_IMPORTED_MODULE_4__helper_survey__["a" /* SurveyHelper */].createPoint(pagelPanelTitleFlat);
                        _h.label = 4;
                    case 4:
                        if (!pagePanel.description) return [3 /*break*/, 6];
                        if (pagePanel.title) {
                            currPoint.yTop += controller.unitWidth * FlatSurvey.PANEL_DESC_GAP_SCALE;
                        }
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_4__helper_survey__["a" /* SurveyHelper */].createDescFlat(currPoint, null, controller, pagePanel.locDescription)];
                    case 5:
                        pagePanelDescFlat = _h.sent();
                        compositeFlat.addBrick(pagePanelDescFlat);
                        currPoint = __WEBPACK_IMPORTED_MODULE_4__helper_survey__["a" /* SurveyHelper */].createPoint(pagePanelDescFlat);
                        _h.label = 6;
                    case 6:
                        if (!compositeFlat.isEmpty) {
                            rowLinePoint = __WEBPACK_IMPORTED_MODULE_4__helper_survey__["a" /* SurveyHelper */].createPoint(compositeFlat);
                            compositeFlat.addBrick(__WEBPACK_IMPORTED_MODULE_4__helper_survey__["a" /* SurveyHelper */].createRowlineFlat(rowLinePoint, controller));
                            pagePanelFlats.push(compositeFlat);
                            currPoint.yTop += controller.unitHeight * FlatSurvey.PANEL_CONT_GAP_SCALE + __WEBPACK_IMPORTED_MODULE_4__helper_survey__["a" /* SurveyHelper */].EPSILON;
                        }
                        _h.label = 7;
                    case 7:
                        _i = 0, _a = pagePanel.rows;
                        _h.label = 8;
                    case 8:
                        if (!(_i < _a.length)) return [3 /*break*/, 16];
                        row = _a[_i];
                        if (!row.visible)
                            return [3 /*break*/, 15];
                        controller.pushMargins();
                        width = __WEBPACK_IMPORTED_MODULE_4__helper_survey__["a" /* SurveyHelper */].getPageAvailableWidth(controller);
                        nextMarginLeft = controller.margins.left;
                        rowFlats = [];
                        i = 0;
                        _h.label = 9;
                    case 9:
                        if (!(i < row.visibleElements.length)) return [3 /*break*/, 14];
                        element = row.visibleElements[i];
                        if (!element.isVisible)
                            return [3 /*break*/, 13];
                        persWidth = __WEBPACK_IMPORTED_MODULE_4__helper_survey__["a" /* SurveyHelper */].parseWidth(element.renderWidth, width - (row.visibleElements.length - 1) * controller.unitWidth, row.visibleElements.length);
                        controller.margins.left = nextMarginLeft + ((i !== 0) ? controller.unitWidth : 0);
                        controller.margins.right = controller.paperWidth - controller.margins.left - persWidth;
                        currPoint.xLeft = controller.margins.left;
                        nextMarginLeft = controller.margins.left + persWidth;
                        if (!(element instanceof __WEBPACK_IMPORTED_MODULE_1_survey_core__["PanelModel"])) return [3 /*break*/, 11];
                        _c = (_b = rowFlats.push).apply;
                        _d = [rowFlats];
                        return [4 /*yield*/, this.generateFlatsPanel(survey, controller, element, currPoint)];
                    case 10:
                        _c.apply(_b, _d.concat([_h.sent()]));
                        return [3 /*break*/, 13];
                    case 11:
                        _f = (_e = rowFlats.push).apply;
                        _g = [rowFlats];
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_4__helper_survey__["a" /* SurveyHelper */].generateQuestionFlats(survey, controller, element, currPoint)];
                    case 12:
                        _f.apply(_e, _g.concat([_h.sent()]));
                        _h.label = 13;
                    case 13:
                        i++;
                        return [3 /*break*/, 9];
                    case 14:
                        controller.popMargins();
                        currPoint.xLeft = controller.margins.left;
                        if (rowFlats.length !== 0) {
                            currPoint.yTop = __WEBPACK_IMPORTED_MODULE_4__helper_survey__["a" /* SurveyHelper */].mergeRects.apply(__WEBPACK_IMPORTED_MODULE_4__helper_survey__["a" /* SurveyHelper */], rowFlats).yBot;
                            currPoint.xLeft = point.xLeft;
                            currPoint.yTop += controller.unitHeight * FlatSurvey.QUES_GAP_VERT_SCALE;
                            pagePanelFlats.push.apply(pagePanelFlats, rowFlats);
                            pagePanelFlats.push(__WEBPACK_IMPORTED_MODULE_4__helper_survey__["a" /* SurveyHelper */].createRowlineFlat(currPoint, controller));
                            currPoint.yTop += __WEBPACK_IMPORTED_MODULE_4__helper_survey__["a" /* SurveyHelper */].EPSILON;
                        }
                        _h.label = 15;
                    case 15:
                        _i++;
                        return [3 /*break*/, 8];
                    case 16: return [2 /*return*/, pagePanelFlats];
                }
            });
        });
    };
    FlatSurvey.popRowlines = function (flats) {
        while (flats.length > 0 && flats[flats.length - 1] instanceof __WEBPACK_IMPORTED_MODULE_3__pdf_render_pdf_rowline__["a" /* RowlineBrick */]) {
            flats.pop();
        }
    };
    FlatSurvey.generateFlatTitle = function (survey, controller, point) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var compositeFlat, surveyTitleFlat, _a, _b;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        compositeFlat = new __WEBPACK_IMPORTED_MODULE_2__pdf_render_pdf_composite__["a" /* CompositeBrick */]();
                        if (!survey.showTitle) return [3 /*break*/, 4];
                        if (!survey.title) return [3 /*break*/, 2];
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_4__helper_survey__["a" /* SurveyHelper */].createTitleSurveyFlat(point, controller, survey.locTitle)];
                    case 1:
                        surveyTitleFlat = _c.sent();
                        compositeFlat.addBrick(surveyTitleFlat);
                        point = __WEBPACK_IMPORTED_MODULE_4__helper_survey__["a" /* SurveyHelper */].createPoint(surveyTitleFlat);
                        _c.label = 2;
                    case 2:
                        if (!survey.description) return [3 /*break*/, 4];
                        if (survey.title) {
                            point.yTop += controller.unitWidth * FlatSurvey.PANEL_DESC_GAP_SCALE;
                        }
                        _b = (_a = compositeFlat).addBrick;
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_4__helper_survey__["a" /* SurveyHelper */].createDescFlat(point, null, controller, survey.locDescription)];
                    case 3:
                        _b.apply(_a, [_c.sent()]);
                        _c.label = 4;
                    case 4: return [2 /*return*/, compositeFlat];
                }
            });
        });
    };
    FlatSurvey.generateFlatLogoImage = function (survey, controller, point) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var logoFlat, shift;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_4__helper_survey__["a" /* SurveyHelper */].createImageFlat(point, null, controller, __WEBPACK_IMPORTED_MODULE_4__helper_survey__["a" /* SurveyHelper */].getLocString(survey.locLogo), __WEBPACK_IMPORTED_MODULE_4__helper_survey__["a" /* SurveyHelper */].pxToPt(survey.logoWidth), __WEBPACK_IMPORTED_MODULE_4__helper_survey__["a" /* SurveyHelper */].pxToPt(survey.logoHeight))];
                    case 1:
                        logoFlat = _a.sent();
                        shift = 0;
                        if (survey.logoPosition === 'right') {
                            shift = __WEBPACK_IMPORTED_MODULE_4__helper_survey__["a" /* SurveyHelper */].getPageAvailableWidth(controller) - logoFlat.width;
                        }
                        else if (survey.logoPosition !== 'left') {
                            shift = __WEBPACK_IMPORTED_MODULE_4__helper_survey__["a" /* SurveyHelper */].getPageAvailableWidth(controller) / 2.0 - logoFlat.width / 2.0;
                        }
                        logoFlat.xLeft += shift;
                        logoFlat.xRight += shift;
                        return [2 /*return*/, logoFlat];
                }
            });
        });
    };
    FlatSurvey.generateFlats = function (survey, controller) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var flats, titleFlat, logoFlat, titlePoint, titleFlat, logoFlat, titleFlat, titleFlat, logoPoint, logoFlat, point, i, pageFlats, _a, _b, _c, adornersOptions;
            var _d;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        flats = [];
                        if (!!survey.hasLogo) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.generateFlatTitle(survey, controller, controller.leftTopPoint)];
                    case 1:
                        titleFlat = _e.sent();
                        if (!titleFlat.isEmpty)
                            flats.push([titleFlat]);
                        return [3 /*break*/, 11];
                    case 2:
                        if (!survey.isLogoBefore) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.generateFlatLogoImage(survey, controller, controller.leftTopPoint)];
                    case 3:
                        logoFlat = _e.sent();
                        flats.push([logoFlat]);
                        titlePoint = __WEBPACK_IMPORTED_MODULE_4__helper_survey__["a" /* SurveyHelper */].createPoint(logoFlat, survey.logoPosition === 'top', survey.logoPosition !== 'top');
                        if (survey.logoPosition !== 'top') {
                            controller.pushMargins();
                            titlePoint.xLeft += controller.unitWidth;
                            controller.margins.left += logoFlat.width + controller.unitWidth;
                        }
                        else {
                            titlePoint.xLeft = controller.leftTopPoint.xLeft;
                            titlePoint.yTop += controller.unitHeight / 2.0;
                        }
                        return [4 /*yield*/, this.generateFlatTitle(survey, controller, titlePoint)];
                    case 4:
                        titleFlat = _e.sent();
                        if (survey.logoPosition !== 'top')
                            controller.popMargins();
                        if (!titleFlat.isEmpty)
                            flats[0].push(titleFlat);
                        return [3 /*break*/, 11];
                    case 5:
                        if (!(survey.logoPosition === 'right')) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.generateFlatLogoImage(survey, controller, controller.leftTopPoint)];
                    case 6:
                        logoFlat = _e.sent();
                        flats.push([logoFlat]);
                        controller.pushMargins();
                        controller.margins.right += logoFlat.width + controller.unitWidth;
                        return [4 /*yield*/, this.generateFlatTitle(survey, controller, controller.leftTopPoint)];
                    case 7:
                        titleFlat = _e.sent();
                        if (!titleFlat.isEmpty)
                            flats[0].unshift(titleFlat);
                        controller.popMargins();
                        return [3 /*break*/, 11];
                    case 8: return [4 /*yield*/, this.generateFlatTitle(survey, controller, controller.leftTopPoint)];
                    case 9:
                        titleFlat = _e.sent();
                        logoPoint = controller.leftTopPoint;
                        if (!titleFlat.isEmpty) {
                            flats.push([titleFlat]);
                            logoPoint = __WEBPACK_IMPORTED_MODULE_4__helper_survey__["a" /* SurveyHelper */].createPoint(titleFlat);
                            logoPoint.yTop += controller.unitHeight / 2.0;
                        }
                        return [4 /*yield*/, this.generateFlatLogoImage(survey, controller, logoPoint)];
                    case 10:
                        logoFlat = _e.sent();
                        if (flats.length !== 0)
                            flats[0].push(logoFlat);
                        else
                            flats.push([logoFlat]);
                        _e.label = 11;
                    case 11:
                        point = controller.leftTopPoint;
                        if (flats.length !== 0) {
                            point.yTop = __WEBPACK_IMPORTED_MODULE_4__helper_survey__["a" /* SurveyHelper */].createPoint(__WEBPACK_IMPORTED_MODULE_4__helper_survey__["a" /* SurveyHelper */].mergeRects.apply(__WEBPACK_IMPORTED_MODULE_4__helper_survey__["a" /* SurveyHelper */], flats[0])).yTop;
                            flats[0].push(__WEBPACK_IMPORTED_MODULE_4__helper_survey__["a" /* SurveyHelper */].createRowlineFlat(point, controller));
                            point.yTop += controller.unitHeight * FlatSurvey.PANEL_CONT_GAP_SCALE + __WEBPACK_IMPORTED_MODULE_4__helper_survey__["a" /* SurveyHelper */].EPSILON;
                        }
                        i = 0;
                        _e.label = 12;
                    case 12:
                        if (!(i < survey.visiblePages.length)) return [3 /*break*/, 16];
                        pageFlats = [];
                        _b = (_a = pageFlats.push).apply;
                        _c = [pageFlats];
                        return [4 /*yield*/, this.generateFlatsPagePanel(survey, controller, survey.visiblePages[i], point)];
                    case 13:
                        _b.apply(_a, _c.concat([_e.sent()]));
                        adornersOptions = new __WEBPACK_IMPORTED_MODULE_5__event_handler_adorners__["b" /* AdornersPageOptions */](point, pageFlats, survey.visiblePages[i], controller, __WEBPACK_IMPORTED_MODULE_6__entries_pdf__["FlatRepository"].getInstance(), __WEBPACK_IMPORTED_MODULE_6__entries_pdf__);
                        return [4 /*yield*/, survey.onRenderPage.fire(survey, adornersOptions)];
                    case 14:
                        _e.sent();
                        pageFlats = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __spreadArray */])([], adornersOptions.bricks, true);
                        if (i === 0 && flats.length !== 0) {
                            (_d = flats[0]).push.apply(_d, pageFlats);
                        }
                        else
                            flats.push(pageFlats);
                        this.popRowlines(flats[flats.length - 1]);
                        point.yTop = controller.leftTopPoint.yTop;
                        _e.label = 15;
                    case 15:
                        i++;
                        return [3 /*break*/, 12];
                    case 16: return [2 /*return*/, flats];
                }
            });
        });
    };
    FlatSurvey.QUES_GAP_VERT_SCALE = 1.5;
    FlatSurvey.PANEL_CONT_GAP_SCALE = 1.0;
    FlatSurvey.PANEL_DESC_GAP_SCALE = 0.25;
    return FlatSurvey;
}());



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pdf_brick__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pdf_text__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helper_survey__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckItemBrick; });




var CheckItemBrick = /** @class */ (function (_super) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */])(CheckItemBrick, _super);
    function CheckItemBrick(controller, rect, fieldName, context) {
        var _this = _super.call(this, context.question, controller, rect) || this;
        _this.fieldName = fieldName;
        _this.context = context;
        _this.question = _this.context.question;
        _this.textColor = _this.formBorderColor;
        return _this;
    }
    CheckItemBrick.prototype.getShouldRenderReadOnly = function () {
        return this.context.readOnly && __WEBPACK_IMPORTED_MODULE_3__helper_survey__["a" /* SurveyHelper */].getReadonlyRenderAs(this.question, this.controller) !== 'acroform' || this.controller.compress;
    };
    CheckItemBrick.prototype.renderInteractive = function () {
        var _a;
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var checkBox, formScale, options;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_b) {
                checkBox = new this.controller.doc.AcroFormCheckBox();
                formScale = __WEBPACK_IMPORTED_MODULE_3__helper_survey__["a" /* SurveyHelper */].formScale(this.controller, this);
                options = {};
                options.maxFontSize = this.height * formScale * CheckItemBrick.FONT_SIZE_SCALE;
                options.caption = CheckItemBrick.CHECKMARK_READONLY_SYMBOL;
                options.textAlign = 'center';
                options.fieldName = this.fieldName;
                options.readOnly = this.context.readOnly;
                options.color = this.formBorderColor;
                options.value = this.context.checked ? 'On' : false;
                options.AS = this.context.checked ? '/On' : '/Off';
                options.context = this.context;
                options.Rect = __WEBPACK_IMPORTED_MODULE_3__helper_survey__["a" /* SurveyHelper */].createAcroformRect(__WEBPACK_IMPORTED_MODULE_3__helper_survey__["a" /* SurveyHelper */].scaleRect(this, formScale));
                this.controller.doc.addField(checkBox);
                (_a = this.question.survey) === null || _a === void 0 ? void 0 : _a.getUpdatedCheckItemAcroformOptions(options);
                checkBox.maxFontSize = options.maxFontSize;
                checkBox.caption = options.caption;
                checkBox.textAlign = options.textAlign;
                checkBox.fieldName = options.fieldName;
                checkBox.readOnly = options.readOnly;
                checkBox.color = options.color;
                checkBox.value = options.value;
                checkBox.AS = options.AS;
                checkBox.Rect = options.Rect;
                __WEBPACK_IMPORTED_MODULE_3__helper_survey__["a" /* SurveyHelper */].renderFlatBorders(this.controller, this);
                return [2 /*return*/];
            });
        });
    };
    CheckItemBrick.prototype.renderReadOnly = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var checkmarkPoint, oldFontName, oldFontSize, checkmarkSize, checkmarkFlat;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        __WEBPACK_IMPORTED_MODULE_3__helper_survey__["a" /* SurveyHelper */].renderFlatBorders(this.controller, this);
                        if (!this.context.checked) return [3 /*break*/, 3];
                        checkmarkPoint = __WEBPACK_IMPORTED_MODULE_3__helper_survey__["a" /* SurveyHelper */].createPoint(this, true, true);
                        oldFontName = this.controller.fontName;
                        this.controller.fontName = CheckItemBrick.CHECKMARK_READONLY_FONT;
                        oldFontSize = this.controller.fontSize;
                        this.controller.fontSize = oldFontSize *
                            CheckItemBrick.CHECKMARK_READONLY_FONT_SIZE_SCALE;
                        checkmarkSize = this.controller.measureText(CheckItemBrick.CHECKMARK_READONLY_SYMBOL);
                        checkmarkPoint.xLeft += this.width / 2.0 - checkmarkSize.width / 2.0;
                        checkmarkPoint.yTop += this.height / 2.0 - checkmarkSize.height / 2.0;
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_3__helper_survey__["a" /* SurveyHelper */].createTextFlat(checkmarkPoint, this.question, this.controller, CheckItemBrick.CHECKMARK_READONLY_SYMBOL, __WEBPACK_IMPORTED_MODULE_2__pdf_text__["a" /* TextBrick */])];
                    case 1:
                        checkmarkFlat = _a.sent();
                        checkmarkFlat.unfold()[0].textColor = this.textColor;
                        this.controller.fontSize = oldFontSize;
                        return [4 /*yield*/, checkmarkFlat.render()];
                    case 2:
                        _a.sent();
                        this.controller.fontName = oldFontName;
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CheckItemBrick.FONT_SIZE_SCALE = 0.7;
    CheckItemBrick.CHECKMARK_READONLY_SYMBOL = '3';
    CheckItemBrick.CHECKMARK_READONLY_FONT = 'zapfdingbats';
    CheckItemBrick.CHECKMARK_READONLY_FONT_SIZE_SCALE = 1.0 - Math.E / 10.0;
    return CheckItemBrick;
}(__WEBPACK_IMPORTED_MODULE_1__pdf_brick__["a" /* PdfBrick */]));



/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pdf_text__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextBoldBrick; });


var TextBoldBrick = /** @class */ (function (_super) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */])(TextBoldBrick, _super);
    function TextBoldBrick(question, controller, rect, text) {
        return _super.call(this, question, controller, rect, text) || this;
    }
    TextBoldBrick.prototype.renderInteractive = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.controller.fontStyle = 'bold';
                        return [4 /*yield*/, _super.prototype.renderInteractive.call(this)];
                    case 1:
                        _a.sent();
                        this.controller.fontStyle = 'normal';
                        return [2 /*return*/];
                }
            });
        });
    };
    return TextBoldBrick;
}(__WEBPACK_IMPORTED_MODULE_1__pdf_text__["a" /* TextBrick */]));



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__survey__ = __webpack_require__(55);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyPDF", function() { return __WEBPACK_IMPORTED_MODULE_0__survey__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helper_survey__ = __webpack_require__(1);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyHelper", function() { return __WEBPACK_IMPORTED_MODULE_1__helper_survey__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__doc_controller__ = __webpack_require__(8);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "DocOptions", function() { return __WEBPACK_IMPORTED_MODULE_2__doc_controller__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "DocController", function() { return __WEBPACK_IMPORTED_MODULE_2__doc_controller__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__flat_layout_flat_repository__ = __webpack_require__(2);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "FlatRepository", function() { return __WEBPACK_IMPORTED_MODULE_3__flat_layout_flat_repository__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__flat_layout_flat_question__ = __webpack_require__(3);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "FlatQuestion", function() { return __WEBPACK_IMPORTED_MODULE_4__flat_layout_flat_question__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__flat_layout_flat_default__ = __webpack_require__(20);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "FlatQuestionDefault", function() { return __WEBPACK_IMPORTED_MODULE_5__flat_layout_flat_default__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__flat_layout_flat_boolean__ = __webpack_require__(36);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "FlatBoolean", function() { return __WEBPACK_IMPORTED_MODULE_6__flat_layout_flat_boolean__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__flat_layout_flat_checkbox__ = __webpack_require__(37);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "FlatCheckbox", function() { return __WEBPACK_IMPORTED_MODULE_7__flat_layout_flat_checkbox__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__flat_layout_flat_custom_model__ = __webpack_require__(39);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "FlatCustomModel", function() { return __WEBPACK_IMPORTED_MODULE_8__flat_layout_flat_custom_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__flat_layout_flat_comment__ = __webpack_require__(38);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "FlatComment", function() { return __WEBPACK_IMPORTED_MODULE_9__flat_layout_flat_comment__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__flat_layout_flat_dropdown__ = __webpack_require__(40);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "FlatDropdown", function() { return __WEBPACK_IMPORTED_MODULE_10__flat_layout_flat_dropdown__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__flat_layout_flat_expression__ = __webpack_require__(41);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "FlatExpression", function() { return __WEBPACK_IMPORTED_MODULE_11__flat_layout_flat_expression__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__flat_layout_flat_file__ = __webpack_require__(42);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "FlatFile", function() { return __WEBPACK_IMPORTED_MODULE_12__flat_layout_flat_file__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__flat_layout_flat_html__ = __webpack_require__(43);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "FlatHTML", function() { return __WEBPACK_IMPORTED_MODULE_13__flat_layout_flat_html__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__flat_layout_flat_image__ = __webpack_require__(44);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "FlatImage", function() { return __WEBPACK_IMPORTED_MODULE_14__flat_layout_flat_image__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__flat_layout_flat_imagepicker__ = __webpack_require__(45);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "FlatImagePicker", function() { return __WEBPACK_IMPORTED_MODULE_15__flat_layout_flat_imagepicker__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__flat_layout_flat_paneldynamic__ = __webpack_require__(49);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "FlatPanelDynamic", function() { return __WEBPACK_IMPORTED_MODULE_16__flat_layout_flat_paneldynamic__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__flat_layout_flat_radiogroup__ = __webpack_require__(9);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "FlatRadiogroup", function() { return __WEBPACK_IMPORTED_MODULE_17__flat_layout_flat_radiogroup__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__flat_layout_flat_ranking__ = __webpack_require__(50);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "FlatRanking", function() { return __WEBPACK_IMPORTED_MODULE_18__flat_layout_flat_ranking__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__flat_layout_flat_rating__ = __webpack_require__(51);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "FlatRating", function() { return __WEBPACK_IMPORTED_MODULE_19__flat_layout_flat_rating__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__flat_layout_flat_selectbase__ = __webpack_require__(14);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "FlatSelectBase", function() { return __WEBPACK_IMPORTED_MODULE_20__flat_layout_flat_selectbase__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__flat_layout_flat_signaturepad__ = __webpack_require__(52);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "FlatSignaturePad", function() { return __WEBPACK_IMPORTED_MODULE_21__flat_layout_flat_signaturepad__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__flat_layout_flat_textbox__ = __webpack_require__(53);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "FlatTextbox", function() { return __WEBPACK_IMPORTED_MODULE_22__flat_layout_flat_textbox__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__flat_layout_flat_survey__ = __webpack_require__(10);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "FlatSurvey", function() { return __WEBPACK_IMPORTED_MODULE_23__flat_layout_flat_survey__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__flat_layout_flat_matrix__ = __webpack_require__(46);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "FlatMatrix", function() { return __WEBPACK_IMPORTED_MODULE_24__flat_layout_flat_matrix__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__flat_layout_flat_matrixmultiple__ = __webpack_require__(21);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "FlatMatrixMultiple", function() { return __WEBPACK_IMPORTED_MODULE_25__flat_layout_flat_matrixmultiple__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__flat_layout_flat_matrixdynamic__ = __webpack_require__(47);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "FlatMatrixDynamic", function() { return __WEBPACK_IMPORTED_MODULE_26__flat_layout_flat_matrixdynamic__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__flat_layout_flat_multipletext__ = __webpack_require__(48);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "FlatMultipleText", function() { return __WEBPACK_IMPORTED_MODULE_27__flat_layout_flat_multipletext__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__page_layout_page_packer__ = __webpack_require__(22);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "PagePacker", function() { return __WEBPACK_IMPORTED_MODULE_28__page_layout_page_packer__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__event_handler_event_handler__ = __webpack_require__(19);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "EventHandler", function() { return __WEBPACK_IMPORTED_MODULE_29__event_handler_event_handler__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__event_handler_draw_canvas__ = __webpack_require__(18);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "HorizontalAlign", function() { return __WEBPACK_IMPORTED_MODULE_30__event_handler_draw_canvas__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VerticalAlign", function() { return __WEBPACK_IMPORTED_MODULE_30__event_handler_draw_canvas__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "DrawCanvas", function() { return __WEBPACK_IMPORTED_MODULE_30__event_handler_draw_canvas__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pdf_render_pdf_brick__ = __webpack_require__(7);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "PdfBrick", function() { return __WEBPACK_IMPORTED_MODULE_31__pdf_render_pdf_brick__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pdf_render_pdf_booleanitem__ = __webpack_require__(23);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "BooleanItemBrick", function() { return __WEBPACK_IMPORTED_MODULE_32__pdf_render_pdf_booleanitem__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pdf_render_pdf_checkboxitem__ = __webpack_require__(24);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxItemBrick", function() { return __WEBPACK_IMPORTED_MODULE_33__pdf_render_pdf_checkboxitem__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pdf_render_pdf_checkitem__ = __webpack_require__(11);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CheckItemBrick", function() { return __WEBPACK_IMPORTED_MODULE_34__pdf_render_pdf_checkitem__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pdf_render_pdf_comment__ = __webpack_require__(25);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CommentBrick", function() { return __WEBPACK_IMPORTED_MODULE_35__pdf_render_pdf_comment__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pdf_render_pdf_composite__ = __webpack_require__(5);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CompositeBrick", function() { return __WEBPACK_IMPORTED_MODULE_36__pdf_render_pdf_composite__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pdf_render_pdf_custom__ = __webpack_require__(54);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CustomBrick", function() { return __WEBPACK_IMPORTED_MODULE_37__pdf_render_pdf_custom__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pdf_render_pdf_dropdown__ = __webpack_require__(26);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownBrick", function() { return __WEBPACK_IMPORTED_MODULE_38__pdf_render_pdf_dropdown__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pdf_render_pdf_empty__ = __webpack_require__(27);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyBrick", function() { return __WEBPACK_IMPORTED_MODULE_39__pdf_render_pdf_empty__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pdf_render_pdf_html__ = __webpack_require__(28);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLBrick", function() { return __WEBPACK_IMPORTED_MODULE_40__pdf_render_pdf_html__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pdf_render_pdf_image__ = __webpack_require__(29);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ImageBrick", function() { return __WEBPACK_IMPORTED_MODULE_41__pdf_render_pdf_image__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pdf_render_pdf_link__ = __webpack_require__(30);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "LinkBrick", function() { return __WEBPACK_IMPORTED_MODULE_42__pdf_render_pdf_link__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pdf_render_pdf_radioitem__ = __webpack_require__(31);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "RadioItemBrick", function() { return __WEBPACK_IMPORTED_MODULE_43__pdf_render_pdf_radioitem__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pdf_render_pdf_rankingitem__ = __webpack_require__(32);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "RankingItemBrick", function() { return __WEBPACK_IMPORTED_MODULE_44__pdf_render_pdf_rankingitem__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pdf_render_pdf_rowline__ = __webpack_require__(15);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "RowlineBrick", function() { return __WEBPACK_IMPORTED_MODULE_45__pdf_render_pdf_rowline__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pdf_render_pdf_textfield__ = __webpack_require__(33);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "TextFieldBrick", function() { return __WEBPACK_IMPORTED_MODULE_46__pdf_render_pdf_textfield__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pdf_render_pdf_textbold__ = __webpack_require__(12);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "TextBoldBrick", function() { return __WEBPACK_IMPORTED_MODULE_47__pdf_render_pdf_textbold__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pdf_render_pdf_textbox__ = __webpack_require__(16);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "TextBoxBrick", function() { return __WEBPACK_IMPORTED_MODULE_48__pdf_render_pdf_textbox__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__pdf_render_pdf_text__ = __webpack_require__(4);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "TextBrick", function() { return __WEBPACK_IMPORTED_MODULE_49__pdf_render_pdf_text__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__pdf_render_pdf_titlepanel__ = __webpack_require__(34);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "TitlePanelBrick", function() { return __WEBPACK_IMPORTED_MODULE_50__pdf_render_pdf_titlepanel__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51_survey_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51_survey_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_51_survey_core__);




















































__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_51_survey_core__["checkLibraryVersion"])("".concat("1.9.110"), 'survey-pdf');


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__flat_question__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pdf_render_pdf_text__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pdf_render_pdf_composite__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helper_survey__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlatSelectBase; });





var FlatSelectBase = /** @class */ (function (_super) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */])(FlatSelectBase, _super);
    function FlatSelectBase(survey, question, controller) {
        var _this = _super.call(this, survey, question, controller) || this;
        _this.survey = survey;
        _this.controller = controller;
        _this.question = question;
        return _this;
    }
    FlatSelectBase.prototype.generateFlatComposite = function (point, item, index) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var compositeFlat, itemRect, itemFlat, textPoint, _a, _b, otherPoint, _c, _d;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        compositeFlat = new __WEBPACK_IMPORTED_MODULE_3__pdf_render_pdf_composite__["a" /* CompositeBrick */]();
                        itemRect = __WEBPACK_IMPORTED_MODULE_4__helper_survey__["a" /* SurveyHelper */].createRect(point, this.controller.unitWidth, this.controller.unitHeight);
                        itemFlat = this.generateFlatItem(__WEBPACK_IMPORTED_MODULE_4__helper_survey__["a" /* SurveyHelper */].moveRect(__WEBPACK_IMPORTED_MODULE_4__helper_survey__["a" /* SurveyHelper */].scaleRect(itemRect, __WEBPACK_IMPORTED_MODULE_4__helper_survey__["a" /* SurveyHelper */].SELECT_ITEM_FLAT_SCALE), point.xLeft), item, index);
                        compositeFlat.addBrick(itemFlat);
                        textPoint = __WEBPACK_IMPORTED_MODULE_4__helper_survey__["a" /* SurveyHelper */].clone(point);
                        textPoint.xLeft = itemFlat.xRight + this.controller.unitWidth * __WEBPACK_IMPORTED_MODULE_4__helper_survey__["a" /* SurveyHelper */].GAP_BETWEEN_ITEM_TEXT;
                        if (!(item.locText.renderedHtml !== null)) return [3 /*break*/, 2];
                        _b = (_a = compositeFlat).addBrick;
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_4__helper_survey__["a" /* SurveyHelper */].createTextFlat(textPoint, this.question, this.controller, item.locText, __WEBPACK_IMPORTED_MODULE_2__pdf_render_pdf_text__["a" /* TextBrick */])];
                    case 1:
                        _b.apply(_a, [_e.sent()]);
                        _e.label = 2;
                    case 2:
                        if (!(item === this.question.otherItem && (item.value === this.question.value ||
                            (typeof this.question.isOtherSelected !== 'undefined' && this.question.isOtherSelected)))) return [3 /*break*/, 4];
                        otherPoint = __WEBPACK_IMPORTED_MODULE_4__helper_survey__["a" /* SurveyHelper */].createPoint(compositeFlat);
                        otherPoint.yTop += this.controller.unitHeight * __WEBPACK_IMPORTED_MODULE_4__helper_survey__["a" /* SurveyHelper */].GAP_BETWEEN_ROWS;
                        _d = (_c = compositeFlat).addBrick;
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_4__helper_survey__["a" /* SurveyHelper */].createCommentFlat(otherPoint, this.question, this.controller, false, { index: index, rows: __WEBPACK_IMPORTED_MODULE_4__helper_survey__["a" /* SurveyHelper */].OTHER_ROWS_COUNT })];
                    case 3:
                        _d.apply(_c, [_e.sent()]);
                        _e.label = 4;
                    case 4: return [2 /*return*/, compositeFlat];
                }
            });
        });
    };
    FlatSelectBase.prototype.getVisibleChoices = function () {
        return this.question.visibleChoices;
    };
    FlatSelectBase.prototype.getColCount = function () {
        return this.question.colCount;
    };
    FlatSelectBase.prototype.generateFlatsContent = function (point) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var colCount, visibleChoices, currentColCount, _a;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        colCount = this.getColCount();
                        visibleChoices = this.getVisibleChoices();
                        currentColCount = colCount;
                        if (colCount == 0) {
                            currentColCount = Math.floor(__WEBPACK_IMPORTED_MODULE_4__helper_survey__["a" /* SurveyHelper */].getPageAvailableWidth(this.controller)
                                / this.controller.measureText(__WEBPACK_IMPORTED_MODULE_4__helper_survey__["a" /* SurveyHelper */].MATRIX_COLUMN_WIDTH).width) || 1;
                            if (visibleChoices.length < currentColCount) {
                                currentColCount = visibleChoices.length;
                            }
                        }
                        else if (colCount > 1) {
                            currentColCount = (__WEBPACK_IMPORTED_MODULE_4__helper_survey__["a" /* SurveyHelper */].getColumnWidth(this.controller, colCount) <
                                this.controller.measureText(__WEBPACK_IMPORTED_MODULE_4__helper_survey__["a" /* SurveyHelper */].MATRIX_COLUMN_WIDTH).width) ? 1 : colCount;
                        }
                        if (!(currentColCount == 1)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.generateVerticallyItems(point, visibleChoices)];
                    case 1:
                        _a = _b.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.generateHorisontallyItems(point, currentColCount)];
                    case 3:
                        _a = _b.sent();
                        _b.label = 4;
                    case 4: return [2 /*return*/, _a];
                }
            });
        });
    };
    FlatSelectBase.prototype.generateVerticallyItems = function (point, itemValues) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var currPoint, flats, i, itemFlat;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        currPoint = __WEBPACK_IMPORTED_MODULE_4__helper_survey__["a" /* SurveyHelper */].clone(point);
                        flats = [];
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < itemValues.length)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.generateFlatComposite(currPoint, itemValues[i], i)];
                    case 2:
                        itemFlat = _a.sent();
                        currPoint.yTop = itemFlat.yBot + __WEBPACK_IMPORTED_MODULE_4__helper_survey__["a" /* SurveyHelper */].GAP_BETWEEN_ROWS * this.controller.unitHeight;
                        flats.push(itemFlat);
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/, flats];
                }
            });
        });
    };
    FlatSelectBase.prototype.generateHorisontallyItems = function (point, colCount) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var visibleChoices, currPoint, flats, row, i, itemFlat, rowLineFlat;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        visibleChoices = this.getVisibleChoices();
                        currPoint = __WEBPACK_IMPORTED_MODULE_4__helper_survey__["a" /* SurveyHelper */].clone(point);
                        flats = [];
                        row = new __WEBPACK_IMPORTED_MODULE_3__pdf_render_pdf_composite__["a" /* CompositeBrick */]();
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < visibleChoices.length)) return [3 /*break*/, 4];
                        this.controller.pushMargins(this.controller.margins.left, this.controller.margins.right);
                        __WEBPACK_IMPORTED_MODULE_4__helper_survey__["a" /* SurveyHelper */].setColumnMargins(this.controller, colCount, i % colCount);
                        currPoint.xLeft = this.controller.margins.left;
                        return [4 /*yield*/, this.generateFlatComposite(currPoint, visibleChoices[i], i)];
                    case 2:
                        itemFlat = _a.sent();
                        row.addBrick(itemFlat);
                        this.controller.popMargins();
                        if (i % colCount === colCount - 1 || i === visibleChoices.length - 1) {
                            rowLineFlat = __WEBPACK_IMPORTED_MODULE_4__helper_survey__["a" /* SurveyHelper */].createRowlineFlat(__WEBPACK_IMPORTED_MODULE_4__helper_survey__["a" /* SurveyHelper */].createPoint(row), this.controller);
                            currPoint.yTop = rowLineFlat.yBot +
                                __WEBPACK_IMPORTED_MODULE_4__helper_survey__["a" /* SurveyHelper */].GAP_BETWEEN_ROWS * this.controller.unitHeight;
                            flats.push(row, rowLineFlat);
                            row = new __WEBPACK_IMPORTED_MODULE_3__pdf_render_pdf_composite__["a" /* CompositeBrick */]();
                        }
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/, flats];
                }
            });
        });
    };
    return FlatSelectBase;
}(__WEBPACK_IMPORTED_MODULE_1__flat_question__["a" /* FlatQuestion */]));



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RowlineBrick; });

var RowlineBrick = /** @class */ (function () {
    function RowlineBrick(controller, rect, color) {
        this.controller = controller;
        this.color = color;
        this.isPageBreak = false;
        this.xLeft = rect.xLeft;
        this.xRight = rect.xRight;
        this.yTop = rect.yTop;
        this.yBot = rect.yBot;
    }
    Object.defineProperty(RowlineBrick.prototype, "width", {
        get: function () {
            return this.xRight - this.xLeft;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RowlineBrick.prototype, "height", {
        get: function () {
            return this.yBot - this.yTop;
        },
        enumerable: false,
        configurable: true
    });
    RowlineBrick.prototype.render = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var oldDrawColor;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_a) {
                if (this.color !== null) {
                    oldDrawColor = this.controller.doc.getDrawColor();
                    this.controller.doc.setDrawColor(this.color);
                    this.controller.doc.line(this.xLeft, this.yTop, this.xRight, this.yTop);
                    this.controller.doc.setDrawColor(oldDrawColor);
                }
                return [2 /*return*/];
            });
        });
    };
    RowlineBrick.prototype.unfold = function () {
        return [this];
    };
    RowlineBrick.prototype.translateX = function (_) { };
    return RowlineBrick;
}());



/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pdf_textfield__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helper_survey__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextBoxBrick; });



var TextBoxBrick = /** @class */ (function (_super) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */])(TextBoxBrick, _super);
    function TextBoxBrick(question, controller, rect, isQuestion, isMultiline, index) {
        if (isQuestion === void 0) { isQuestion = true; }
        if (isMultiline === void 0) { isMultiline = false; }
        if (index === void 0) { index = 0; }
        var _this = _super.call(this, question, controller, rect, isQuestion, question.id + (isQuestion ? '' : '_comment' + index), __WEBPACK_IMPORTED_MODULE_2__helper_survey__["a" /* SurveyHelper */].getQuestionOrCommentValue(question, isQuestion), isQuestion && question.locPlaceHolder ? __WEBPACK_IMPORTED_MODULE_2__helper_survey__["a" /* SurveyHelper */].getLocString(question.locPlaceHolder) : '', question.isReadOnly, isMultiline, question.inputType) || this;
        _this.isQuestion = isQuestion;
        _this.isMultiline = isMultiline;
        return _this;
    }
    return TextBoxBrick;
}(__WEBPACK_IMPORTED_MODULE_1__pdf_textfield__["a" /* TextFieldBrick */]));



/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_17__;

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__doc_controller__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pdf_render_pdf_text__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pdf_render_pdf_textbold__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helper_survey__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HorizontalAlign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return VerticalAlign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return DrawCanvas; });





/**
 * Horizontal alignment types in onRenderHeader and onRenderFooter events
 */
var HorizontalAlign;
(function (HorizontalAlign) {
    HorizontalAlign["NotSet"] = "notset";
    HorizontalAlign["Left"] = "left";
    HorizontalAlign["Center"] = "center";
    HorizontalAlign["Right"] = "right";
})(HorizontalAlign || (HorizontalAlign = {}));
/**
 * Vertical alignment types in onRenderHeader and onRenderFooter events
 */
var VerticalAlign;
(function (VerticalAlign) {
    VerticalAlign["NotSet"] = "notset";
    VerticalAlign["Top"] = "top";
    VerticalAlign["Middle"] = "middle";
    VerticalAlign["Bottom"] = "bottom";
})(VerticalAlign || (VerticalAlign = {}));
/**
 * An object that describes a drawing area and enables you to draw an image or a piece of text within the area. You can access this object within functions that handle `SurveyPDF`'s [`onRenderHeader`](https://surveyjs.io/pdf-generator/documentation/api-reference/surveypdf#onRenderHeader) and [`onRenderFooter`](https://surveyjs.io/pdf-generator/documentation/api-reference/surveypdf#onRenderFooter) events.
 *
 * [View Demo](https://surveyjs.io/pdf-generator/examples/customize-header-and-footer-of-pdf-form/ (linkStyle))
 */
var DrawCanvas = /** @class */ (function () {
    function DrawCanvas(packs, controller, _rect, _countPages, _pageNumber) {
        this.packs = packs;
        this.controller = controller;
        this._rect = _rect;
        this._countPages = _countPages;
        this._pageNumber = _pageNumber;
    }
    Object.defineProperty(DrawCanvas.prototype, "pageCount", {
        /**
         * A total number of pages in the document.
         */
        get: function () {
            return this._countPages;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DrawCanvas.prototype, "countPages", {
        get: function () {
            return this._countPages;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DrawCanvas.prototype, "pageNumber", {
        /**
         * The number of the page that contains the drawing area. Enumeration starts with 1.
         */
        get: function () {
            return this._pageNumber;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DrawCanvas.prototype, "rect", {
        /**
         * An object with coordinates of a rectangle that limits the drawing area. This object contain the following fields: `xLeft`, `xRight`, `yTop`, `yBot`.
         */
        get: function () {
            return this._rect;
        },
        enumerable: false,
        configurable: true
    });
    DrawCanvas.prototype.alignRect = function (rectOptions, itemSize) {
        if (typeof rectOptions.margins === 'undefined') {
            rectOptions.margins = { left: 0.0, right: 0.0, top: 0.0, bot: 0.0 };
        }
        else {
            if (typeof rectOptions.margins.left === 'undefined') {
                rectOptions.margins.left = 0.0;
            }
            if (typeof rectOptions.margins.right === 'undefined') {
                rectOptions.margins.right = 0.0;
            }
            if (typeof rectOptions.margins.top === 'undefined') {
                rectOptions.margins.top = 0.0;
            }
            if (typeof rectOptions.margins.bot === 'undefined') {
                rectOptions.margins.bot = 0.0;
            }
        }
        if (typeof rectOptions.rect === 'undefined') {
            if (typeof rectOptions.horizontalAlign === 'undefined' ||
                rectOptions.horizontalAlign === HorizontalAlign.NotSet) {
                rectOptions.horizontalAlign = HorizontalAlign.Center;
            }
            if (typeof rectOptions.verticalAlign === 'undefined' ||
                rectOptions.verticalAlign === VerticalAlign.NotSet) {
                rectOptions.verticalAlign = VerticalAlign.Middle;
            }
        }
        var rect = __WEBPACK_IMPORTED_MODULE_4__helper_survey__["a" /* SurveyHelper */].clone(this.rect);
        if (typeof rectOptions.horizontalAlign !== 'undefined') {
            switch (rectOptions.horizontalAlign) {
                case HorizontalAlign.Left:
                    rect.xLeft = this.rect.xLeft + rectOptions.margins.left;
                    rect.xRight = Math.min(this.rect.xRight - rectOptions.margins.right, this.rect.xLeft + rectOptions.margins.left + itemSize.width);
                    break;
                case HorizontalAlign.Center:
                    rect.xLeft = Math.max(this.rect.xLeft + rectOptions.margins.left, (this.rect.xLeft + this.rect.xRight - itemSize.width) / 2.0);
                    rect.xRight = Math.min(this.rect.xRight - rectOptions.margins.right, (this.rect.xLeft + this.rect.xRight + itemSize.width) / 2.0);
                    break;
                case HorizontalAlign.Right:
                    rect.xLeft = Math.max(this.rect.xLeft + rectOptions.margins.left, this.rect.xRight - rectOptions.margins.right - itemSize.width);
                    rect.xRight = this.rect.xRight - rectOptions.margins.right;
                    break;
            }
        }
        else {
            rect.xLeft = rectOptions.rect.xLeft || this.rect.xLeft;
            rect.xRight = rectOptions.rect.xRight || this.rect.xRight;
        }
        if (typeof rectOptions.verticalAlign !== 'undefined') {
            switch (rectOptions.verticalAlign) {
                case VerticalAlign.Top:
                    rect.yTop = this.rect.yTop + rectOptions.margins.top;
                    rect.yBot = Math.min(this.rect.yBot - rectOptions.margins.bot, this.rect.yTop + rectOptions.margins.top + itemSize.height);
                    break;
                case VerticalAlign.Middle:
                    rect.yTop = Math.max(this.rect.yTop + rectOptions.margins.top, (this.rect.yTop + this.rect.yBot - itemSize.height) / 2.0);
                    rect.yBot = Math.min(this.rect.yBot - rectOptions.margins.bot, (this.rect.yTop + this.rect.yBot + itemSize.height) / 2.0);
                    break;
                case VerticalAlign.Bottom:
                    rect.yTop = Math.max(this.rect.yTop + rectOptions.margins.top, this.rect.yBot - rectOptions.margins.bot - itemSize.height);
                    rect.yBot = this.rect.yBot - rectOptions.margins.bot;
                    break;
            }
        }
        else {
            rect.yTop = rectOptions.rect.yTop || this.rect.yTop;
            rect.yBot = rectOptions.rect.yBot || this.rect.yBot;
        }
        return rect;
    };
    /**
     * Draws a piece of text within the drawing area.
     * @param textOptions An [`IDrawTextOptions`](https://surveyjs.io/pdf-generator/documentation/api-reference/idrawtextoptions) object that configures the drawing.
     */
    DrawCanvas.prototype.drawText = function (textOptions) {
        textOptions = __WEBPACK_IMPORTED_MODULE_4__helper_survey__["a" /* SurveyHelper */].clone(textOptions);
        if (typeof textOptions.fontSize === 'undefined') {
            textOptions.fontSize = __WEBPACK_IMPORTED_MODULE_1__doc_controller__["a" /* DocOptions */].FONT_SIZE;
        }
        if (typeof textOptions.isBold === 'undefined') {
            textOptions.isBold = false;
        }
        var textSize = this.controller.measureText(textOptions.text, textOptions.isBold ? 'bold' : 'normal', textOptions.fontSize);
        var textRect = this.alignRect(textOptions, textSize);
        if (!textOptions.isBold) {
            this.packs.push(new __WEBPACK_IMPORTED_MODULE_2__pdf_render_pdf_text__["a" /* TextBrick */](null, this.controller, textRect, textOptions.text));
        }
        else {
            this.packs.push(new __WEBPACK_IMPORTED_MODULE_3__pdf_render_pdf_textbold__["a" /* TextBoldBrick */](null, this.controller, textRect, textOptions.text));
        }
        this.packs[this.packs.length - 1].fontSize = textOptions.fontSize;
    };
    /**
     * Draws an image within the drawing area.
     * @param imageOptions An [`IDrawImageOptions`](https://surveyjs.io/pdf-generator/documentation/api-reference/idrawimageoptions) object that configures drawing.
     */
    DrawCanvas.prototype.drawImage = function (imageOptions) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var imageSize, imageRect, _a, _b;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        imageOptions = __WEBPACK_IMPORTED_MODULE_4__helper_survey__["a" /* SurveyHelper */].clone(imageOptions);
                        if (typeof imageOptions.width === 'undefined') {
                            imageOptions.width = this.rect.xRight - this.rect.xLeft;
                        }
                        if (typeof imageOptions.height === 'undefined') {
                            imageOptions.height = this.rect.yBot - this.rect.yTop;
                        }
                        imageSize = {
                            width: imageOptions.width,
                            height: imageOptions.height
                        };
                        imageRect = this.alignRect(imageOptions, imageSize);
                        _b = (_a = this.packs).push;
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_4__helper_survey__["a" /* SurveyHelper */].createImageFlat(__WEBPACK_IMPORTED_MODULE_4__helper_survey__["a" /* SurveyHelper */].createPoint(imageRect, true, true), null, this.controller, imageOptions.base64, imageRect.xRight - imageRect.xLeft, imageRect.yBot - imageRect.yTop)];
                    case 1:
                        _b.apply(_a, [_c.sent()]);
                        return [2 /*return*/];
                }
            });
        });
    };
    return DrawCanvas;
}());



/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_survey_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__draw_canvas__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helper_survey__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EventAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventHandler; });




var EventAsync = /** @class */ (function (_super) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */])(EventAsync, _super);
    function EventAsync() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EventAsync.prototype.unshift = function (func) {
        if (this.hasFunc(func))
            return;
        if (this.callbacks == null) {
            this.callbacks = new Array();
        }
        this.callbacks.unshift(func);
    };
    EventAsync.prototype.fire = function (sender, options) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var i;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.callbacks == null)
                            return [2 /*return*/];
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < this.callbacks.length)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.callbacks[i](sender, options)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return EventAsync;
}(__WEBPACK_IMPORTED_MODULE_1_survey_core__["EventBase"]));

var EventHandler = /** @class */ (function () {
    function EventHandler() {
    }
    EventHandler.process_header_events = function (survey, controller, packs) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var i;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!survey.haveCommercialLicense) {
                            survey.onRenderHeader.add(function (_, canvas) {
                                canvas.drawText({
                                    text: 'SurveyJS PDF | Please purchase a SurveyJS PDF developer license to use it in your app | https://surveyjs.io/Buy',
                                    fontSize: 10
                                });
                            });
                        }
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < packs.length)) return [3 /*break*/, 5];
                        return [4 /*yield*/, survey.onRenderHeader.fire(survey, new __WEBPACK_IMPORTED_MODULE_2__draw_canvas__["c" /* DrawCanvas */](packs[i], controller, __WEBPACK_IMPORTED_MODULE_3__helper_survey__["a" /* SurveyHelper */].createHeaderRect(controller), packs.length, i + 1))];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, survey.onRenderFooter.fire(survey, new __WEBPACK_IMPORTED_MODULE_2__draw_canvas__["c" /* DrawCanvas */](packs[i], controller, __WEBPACK_IMPORTED_MODULE_3__helper_survey__["a" /* SurveyHelper */].createFooterRect(controller), packs.length, i + 1))];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        i++;
                        return [3 /*break*/, 1];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    return EventHandler;
}());



/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helper_survey__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pdf_render_pdf_text__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__flat_question__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlatQuestionDefault; });




var FlatQuestionDefault = /** @class */ (function (_super) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */])(FlatQuestionDefault, _super);
    function FlatQuestionDefault() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FlatQuestionDefault.prototype.generateFlatsContent = function (point) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var valueBrick;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_1__helper_survey__["a" /* SurveyHelper */].createTextFlat(point, this.question, this.controller, "".concat(this.question.displayValue), __WEBPACK_IMPORTED_MODULE_2__pdf_render_pdf_text__["a" /* TextBrick */])];
                    case 1:
                        valueBrick = _a.sent();
                        return [2 /*return*/, [valueBrick]];
                }
            });
        });
    };
    return FlatQuestionDefault;
}(__WEBPACK_IMPORTED_MODULE_3__flat_question__["a" /* FlatQuestion */]));



/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_survey_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flat_question__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__flat_repository__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pdf_render_pdf_text__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pdf_render_pdf_composite__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__helper_survey__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__flat_survey__ = __webpack_require__(10);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlatMatrixMultiple; });








var FlatMatrixMultiple = /** @class */ (function (_super) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */])(FlatMatrixMultiple, _super);
    function FlatMatrixMultiple(survey, question, controller, isMultiple) {
        if (isMultiple === void 0) { isMultiple = true; }
        var _this = _super.call(this, survey, question, controller) || this;
        _this.survey = survey;
        _this.isMultiple = isMultiple;
        _this.question = question;
        return _this;
    }
    Object.defineProperty(FlatMatrixMultiple.prototype, "visibleRows", {
        get: function () {
            if (!this.visibleRowsValue) {
                this.visibleRowsValue = this.question.renderedTable.rows.filter(function (row) { return row.visible; });
            }
            return this.visibleRowsValue;
        },
        enumerable: false,
        configurable: true
    });
    FlatMatrixMultiple.prototype.generateFlatsCell = function (point, cell, isHeader) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var composite, flatMultipleColumnsQuestion, itemRect, _a, _b, _c, _d, _e, _f, _g;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_h) {
                switch (_h.label) {
                    case 0:
                        composite = new __WEBPACK_IMPORTED_MODULE_5__pdf_render_pdf_composite__["a" /* CompositeBrick */]();
                        if (!cell.hasQuestion) return [3 /*break*/, 4];
                        if (!cell.cell.column.isShowInMultipleColumns) return [3 /*break*/, 1];
                        flatMultipleColumnsQuestion = __WEBPACK_IMPORTED_MODULE_3__flat_repository__["a" /* FlatRepository */].getInstance().create(this.survey, cell.question, this.controller, cell.question.getType());
                        itemRect = __WEBPACK_IMPORTED_MODULE_6__helper_survey__["a" /* SurveyHelper */].moveRect(__WEBPACK_IMPORTED_MODULE_6__helper_survey__["a" /* SurveyHelper */].scaleRect(__WEBPACK_IMPORTED_MODULE_6__helper_survey__["a" /* SurveyHelper */].createRect(point, this.controller.unitHeight, this.controller.unitHeight), __WEBPACK_IMPORTED_MODULE_6__helper_survey__["a" /* SurveyHelper */].SELECT_ITEM_FLAT_SCALE), point.xLeft);
                        composite.addBrick(flatMultipleColumnsQuestion
                            .generateFlatItem(itemRect, cell.item, cell.choiceIndex));
                        return [3 /*break*/, 3];
                    case 1:
                        cell.question.titleLocation = __WEBPACK_IMPORTED_MODULE_6__helper_survey__["a" /* SurveyHelper */].TITLE_LOCATION_MATRIX;
                        _b = (_a = composite.addBrick).apply;
                        _c = [composite];
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_6__helper_survey__["a" /* SurveyHelper */].generateQuestionFlats(this.survey, this.controller, cell.question, point)];
                    case 2:
                        _b.apply(_a, _c.concat([_h.sent()]));
                        _h.label = 3;
                    case 3: return [3 /*break*/, 8];
                    case 4:
                        if (!cell.hasTitle) return [3 /*break*/, 8];
                        if (!isHeader) return [3 /*break*/, 6];
                        _e = (_d = composite).addBrick;
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_6__helper_survey__["a" /* SurveyHelper */].createBoldTextFlat(point, this.question, this.controller, cell.locTitle)];
                    case 5:
                        _e.apply(_d, [_h.sent()]);
                        return [3 /*break*/, 8];
                    case 6:
                        _g = (_f = composite).addBrick;
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_6__helper_survey__["a" /* SurveyHelper */].createTextFlat(point, this.question, this.controller, cell.locTitle, __WEBPACK_IMPORTED_MODULE_4__pdf_render_pdf_text__["a" /* TextBrick */])];
                    case 7:
                        _g.apply(_f, [_h.sent()]);
                        _h.label = 8;
                    case 8: return [2 /*return*/, composite];
                }
            });
        });
    };
    Object.defineProperty(FlatMatrixMultiple.prototype, "hasDetailPanel", {
        get: function () {
            var _this = this;
            return this.visibleRows.some(function (renderedRow) { return renderedRow.row && _this.question.hasDetailPanel(renderedRow.row); });
        },
        enumerable: false,
        configurable: true
    });
    FlatMatrixMultiple.prototype.ignoreCell = function (cell, index) {
        return !(cell.hasQuestion || cell.hasTitle || (this.isMultiple && (this.hasDetailPanel ? index == 1 : index == 0)));
    };
    FlatMatrixMultiple.prototype.generateFlatsRowHorisontal = function (point, row, colCount, columnWidth) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var composite, currPoint, lastRightMargin, cnt, i, cellContent;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        composite = new __WEBPACK_IMPORTED_MODULE_5__pdf_render_pdf_composite__["a" /* CompositeBrick */]();
                        currPoint = __WEBPACK_IMPORTED_MODULE_6__helper_survey__["a" /* SurveyHelper */].clone(point);
                        lastRightMargin = this.controller.paperWidth - this.controller.margins.left +
                            this.controller.unitWidth * __WEBPACK_IMPORTED_MODULE_6__helper_survey__["a" /* SurveyHelper */].GAP_BETWEEN_COLUMNS;
                        this.controller.pushMargins();
                        cnt = 0;
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < row.cells.length)) return [3 /*break*/, 4];
                        if (this.ignoreCell(row.cells[i], i))
                            return [3 /*break*/, 3];
                        this.controller.margins.left = this.controller.paperWidth - lastRightMargin +
                            this.controller.unitWidth * __WEBPACK_IMPORTED_MODULE_6__helper_survey__["a" /* SurveyHelper */].GAP_BETWEEN_COLUMNS;
                        this.controller.margins.right = this.controller.paperWidth -
                            this.controller.margins.left - columnWidth[cnt];
                        lastRightMargin = this.controller.margins.right;
                        currPoint.xLeft = this.controller.margins.left;
                        return [4 /*yield*/, this.generateFlatsCell(currPoint, row.cells[i], row === this.question.renderedTable.headerRow)];
                    case 2:
                        cellContent = _a.sent();
                        if (!cellContent.isEmpty) {
                            composite.addBrick(cellContent);
                        }
                        cnt++;
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4:
                        this.controller.popMargins();
                        return [2 /*return*/, composite];
                }
            });
        });
    };
    FlatMatrixMultiple.prototype.generateFlatsRowVertical = function (point, row, colCount) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var composite, currPoint, i, _a, _b, _c, _d;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        composite = new __WEBPACK_IMPORTED_MODULE_5__pdf_render_pdf_composite__["a" /* CompositeBrick */]();
                        currPoint = __WEBPACK_IMPORTED_MODULE_6__helper_survey__["a" /* SurveyHelper */].clone(point);
                        i = 0;
                        _e.label = 1;
                    case 1:
                        if (!(i < row.cells.length)) return [3 /*break*/, 6];
                        if (this.ignoreCell(row.cells[i], i))
                            return [3 /*break*/, 5];
                        if (!(this.question.renderedTable.showHeader && (!this.isMultiple || i > 0))) return [3 /*break*/, 3];
                        _b = (_a = composite).addBrick;
                        return [4 /*yield*/, this.generateFlatsCell(currPoint, this.question.renderedTable.headerRow.cells[i], false)];
                    case 2:
                        _b.apply(_a, [_e.sent()]);
                        currPoint.yTop = composite.yBot + FlatMatrixMultiple.GAP_BETWEEN_ROWS * this.controller.unitHeight;
                        _e.label = 3;
                    case 3:
                        _d = (_c = composite).addBrick;
                        return [4 /*yield*/, this.generateFlatsCell(currPoint, row.cells[i], false)];
                    case 4:
                        _d.apply(_c, [_e.sent()]);
                        currPoint.yTop = composite.yBot + FlatMatrixMultiple.GAP_BETWEEN_ROWS * this.controller.unitHeight;
                        _e.label = 5;
                    case 5:
                        i++;
                        return [3 /*break*/, 1];
                    case 6: return [2 /*return*/, composite];
                }
            });
        });
    };
    FlatMatrixMultiple.prototype.getAvalableWidth = function (colCount) {
        return __WEBPACK_IMPORTED_MODULE_6__helper_survey__["a" /* SurveyHelper */].getPageAvailableWidth(this.controller) -
            (colCount - 1) * this.controller.unitWidth * __WEBPACK_IMPORTED_MODULE_6__helper_survey__["a" /* SurveyHelper */].GAP_BETWEEN_COLUMNS;
    };
    FlatMatrixMultiple.prototype.calculateColumnWidth = function (rows, colCount) {
        var _this = this;
        var availableWidth = this.getAvalableWidth(colCount);
        var remainWidth = availableWidth;
        var remainColCount = colCount;
        var columnWidth = [];
        var unsetCells = [];
        var cells = rows[0].cells.filter(function (cell, index) { return !_this.ignoreCell(cell, index); });
        for (var i = 0; i < colCount; i++) {
            var width = __WEBPACK_IMPORTED_MODULE_6__helper_survey__["a" /* SurveyHelper */].parseWidth(cells[i].width, availableWidth, colCount) || 0.0;
            remainWidth -= width;
            if (width !== 0.0) {
                remainColCount--;
            }
            else {
                unsetCells.push(cells[i]);
            }
            columnWidth.push(width);
        }
        if (remainColCount === 0)
            return columnWidth;
        var heuristicWidth = this.controller.measureText(__WEBPACK_IMPORTED_MODULE_6__helper_survey__["a" /* SurveyHelper */].MATRIX_COLUMN_WIDTH).width;
        unsetCells.sort(function (cell1, cell2) {
            var minWidth1 = __WEBPACK_IMPORTED_MODULE_6__helper_survey__["a" /* SurveyHelper */].parseWidth(cell1.minWidth, availableWidth, colCount) || 0.0;
            var minWidth2 = __WEBPACK_IMPORTED_MODULE_6__helper_survey__["a" /* SurveyHelper */].parseWidth(cell2.minWidth, availableWidth, colCount) || 0.0;
            return minWidth2 > minWidth1 ? 1 : -1;
        }).forEach(function (cell) {
            var equalWidth = remainWidth / remainColCount;
            var columnMinWidth = __WEBPACK_IMPORTED_MODULE_6__helper_survey__["a" /* SurveyHelper */].parseWidth(cell.minWidth, availableWidth, colCount) || 0.0;
            if (columnMinWidth > equalWidth && columnMinWidth > heuristicWidth) {
                remainWidth -= columnMinWidth;
                remainColCount--;
            }
            columnWidth[cells.indexOf(cell)] = Math.max(heuristicWidth, columnMinWidth, equalWidth);
        });
        return columnWidth;
    };
    FlatMatrixMultiple.prototype.generateOneRow = function (point, row, colCount, isWide, columnWidth) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!isWide) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.generateFlatsRowHorisontal(point, row, colCount, columnWidth)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2: return [4 /*yield*/, this.generateFlatsRowVertical(point, row, colCount)];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    FlatMatrixMultiple.prototype.generateFlatsRows = function (point, rows, colCount, isWide) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var currPoint, rowsFlats, i, rowFlat, currentDetailPanel, j, panelBricks, currComposite, header, currYTop;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        currPoint = __WEBPACK_IMPORTED_MODULE_6__helper_survey__["a" /* SurveyHelper */].clone(point);
                        rowsFlats = [];
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < rows.length)) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.generateOneRow(currPoint, rows[i], colCount, isWide, this.calculateColumnWidth(rows, colCount))];
                    case 2:
                        rowFlat = _a.sent();
                        if (rowFlat.isEmpty && !(rows[i].row && rows[i].row.hasPanel))
                            return [3 /*break*/, 5];
                        if (!rowFlat.isEmpty) {
                            if (i !== rows.length - 1) {
                                currPoint.yTop = rowFlat.yBot;
                                rowFlat.addBrick(__WEBPACK_IMPORTED_MODULE_6__helper_survey__["a" /* SurveyHelper */].createRowlineFlat(currPoint, this.controller));
                            }
                            rowsFlats.push(rowFlat);
                            currPoint.yTop = rowFlat.yBot + FlatMatrixMultiple.GAP_BETWEEN_ROWS * this.controller.unitHeight;
                        }
                        if (!(!!rows[i].row && rows[i].row.hasPanel)) return [3 /*break*/, 5];
                        rows[i].row.showDetailPanel();
                        currentDetailPanel = rows[i].row.detailPanel;
                        for (j = 0; j < currentDetailPanel.questions.length; j++) {
                            currentDetailPanel.questions[j].id += '_' + i;
                        }
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_7__flat_survey__["a" /* FlatSurvey */].generateFlatsPanel(this.survey, this.controller, currentDetailPanel, currPoint)];
                    case 3:
                        panelBricks = _a.sent();
                        currComposite = new __WEBPACK_IMPORTED_MODULE_5__pdf_render_pdf_composite__["a" /* CompositeBrick */]();
                        currComposite.addBrick.apply(currComposite, panelBricks);
                        currPoint.yTop = currComposite.yBot + FlatMatrixMultiple.GAP_BETWEEN_ROWS * this.controller.unitHeight;
                        rowsFlats.push(currComposite);
                        if (!(i !== rows.length - 1 && this.question.renderedTable.showHeader && isWide)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.generateOneRow(currPoint, rows[0], colCount, isWide, this.calculateColumnWidth(rows, colCount))];
                    case 4:
                        header = _a.sent();
                        currYTop = currComposite.yBot;
                        if (!header.isEmpty) {
                            currYTop = header.yBot;
                            rowsFlats.push(header);
                        }
                        currPoint.yTop = currYTop + FlatMatrixMultiple.GAP_BETWEEN_ROWS * this.controller.unitHeight;
                        _a.label = 5;
                    case 5:
                        i++;
                        return [3 /*break*/, 1];
                    case 6: return [2 /*return*/, rowsFlats];
                }
            });
        });
    };
    FlatMatrixMultiple.prototype.calculateIsWide = function (table, colCount) {
        var rows = [];
        if (table.showHeader) {
            rows.push(table.headerRow);
        }
        rows.push.apply(rows, this.visibleRows);
        if (rows.length === 0)
            return true;
        var columnWidthSum = this.calculateColumnWidth(rows, colCount).reduce(function (widthSum, width) { return widthSum += width; }, 0);
        return this.question.renderAs !== 'list' && this.controller.matrixRenderAs !== 'list' && Math.floor(columnWidthSum) <= Math.floor(this.getAvalableWidth(colCount));
    };
    FlatMatrixMultiple.prototype.getRowsToRender = function (table, isVertical, isWide) {
        var rows = [];
        var renderedRows = this.visibleRows;
        if (table.showHeader && isWide)
            rows.push(table.headerRow);
        rows.push.apply(rows, renderedRows);
        if (table.hasRemoveRows && isVertical)
            rows.pop();
        if (table.showFooter)
            rows.push(table.footerRow);
        return rows;
    };
    FlatMatrixMultiple.prototype.generateFlatsContent = function (point) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var table, renderedRows, isVertical, colCount, isWide, rows;
            var _this = this;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        table = this.question.renderedTable;
                        renderedRows = this.visibleRows;
                        isVertical = this.question.columnLayout === 'vertical';
                        if (!!renderedRows[0]) {
                            colCount = renderedRows[0].cells.filter(function (cell, index) { return !_this.ignoreCell(cell, index); }).length;
                        }
                        else {
                            colCount = table.showHeader && table.headerRow ? table.headerRow.cells.length :
                                table.showFooter && table.footerRow ? table.footerRow.cells.length : 0;
                        }
                        if (colCount === 0 && !this.hasDetailPanel) {
                            return [2 /*return*/, [new __WEBPACK_IMPORTED_MODULE_5__pdf_render_pdf_composite__["a" /* CompositeBrick */](__WEBPACK_IMPORTED_MODULE_6__helper_survey__["a" /* SurveyHelper */].createRowlineFlat(point, this.controller))]];
                        }
                        isWide = this.calculateIsWide(table, colCount);
                        rows = this.getRowsToRender(table, isVertical, isWide);
                        return [4 /*yield*/, this.generateFlatsRows(point, rows, colCount, isWide)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    FlatMatrixMultiple.GAP_BETWEEN_ROWS = 0.5;
    return FlatMatrixMultiple;
}(__WEBPACK_IMPORTED_MODULE_2__flat_question__["a" /* FlatQuestion */]));

__WEBPACK_IMPORTED_MODULE_1_survey_core__["Serializer"].removeProperty('matrixdropdown', 'renderAs');
__WEBPACK_IMPORTED_MODULE_1_survey_core__["Serializer"].addProperty('matrixdropdown', {
    name: 'renderAs',
    default: 'auto',
    choices: ['auto', 'list']
});
__WEBPACK_IMPORTED_MODULE_3__flat_repository__["a" /* FlatRepository */].getInstance().register('matrixdropdown', FlatMatrixMultiple);


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_node_interval_tree__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_node_interval_tree___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_node_interval_tree__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helper_survey__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagePacker; });


var PagePacker = /** @class */ (function () {
    function PagePacker() {
    }
    PagePacker.findBotInterval = function (tree, xLeft, xRight, options) {
        var intervals = tree.search(xLeft, xRight);
        intervals.push({
            pageIndex: 0, xLeft: options.margins.left, xRight: options.margins.left,
            yBot: options.margins.top, absBot: options.margins.top
        });
        return intervals.reduce(function (mx, cr) {
            if (Math.abs(cr.xRight - xLeft) < __WEBPACK_IMPORTED_MODULE_1__helper_survey__["a" /* SurveyHelper */].EPSILON ||
                Math.abs(cr.xLeft - xRight) < __WEBPACK_IMPORTED_MODULE_1__helper_survey__["a" /* SurveyHelper */].EPSILON)
                return mx;
            if (cr.pageIndex < mx.pageIndex)
                return mx;
            if (cr.pageIndex > mx.pageIndex)
                return cr;
            return cr.yBot > mx.yBot ? cr : mx;
        }, intervals[intervals.length - 1]);
    };
    PagePacker.addPack = function (packs, index, brick) {
        for (var i = packs.length; i <= index; i++) {
            packs.push([]);
        }
        packs[index].push(brick);
    };
    PagePacker.pack = function (flats, controller) {
        var pageHeight = controller.paperHeight -
            controller.margins.top - controller.margins.bot;
        var unfoldFlats = [];
        flats.forEach(function (flatsPage) {
            unfoldFlats.push([]);
            flatsPage.forEach(function (flat) {
                var _a;
                if (flat.height > pageHeight + __WEBPACK_IMPORTED_MODULE_1__helper_survey__["a" /* SurveyHelper */].EPSILON) {
                    (_a = unfoldFlats[unfoldFlats.length - 1]).push.apply(_a, flat.unfold());
                }
                else
                    unfoldFlats[unfoldFlats.length - 1].push(flat);
            });
        });
        unfoldFlats.forEach(function (unfoldFlatsPage) {
            unfoldFlatsPage.sort(function (a, b) {
                if (a.yTop < b.yTop)
                    return -1;
                if (a.yTop > b.yTop)
                    return 1;
                if (a.xLeft > b.xLeft)
                    return 1;
                if (a.xLeft < b.xLeft)
                    return -1;
                return 0;
            });
        });
        var pageIndexModel = 0;
        var packs = [];
        var pageBot = controller.paperHeight - controller.margins.bot;
        unfoldFlats.forEach(function (unfoldFlatsPage) {
            var tree = new __WEBPACK_IMPORTED_MODULE_0_node_interval_tree___default.a();
            var pageIndexShift = 0;
            unfoldFlatsPage.forEach(function (flat) {
                var _a = PagePacker.findBotInterval(tree, flat.xLeft, flat.xRight, controller), pageIndex = _a.pageIndex, yBot = _a.yBot, absBot = _a.absBot;
                var height = flat.height;
                flat.yTop = yBot + flat.yTop - absBot;
                if (Math.abs(flat.yTop - controller.margins.top) > __WEBPACK_IMPORTED_MODULE_1__helper_survey__["a" /* SurveyHelper */].EPSILON &&
                    flat.yTop + height > pageBot + __WEBPACK_IMPORTED_MODULE_1__helper_survey__["a" /* SurveyHelper */].EPSILON || flat.isPageBreak) {
                    flat.yTop = controller.margins.top;
                    pageIndex++;
                    pageIndexShift = Math.max(pageIndexShift, pageIndex);
                }
                tree.insert(flat.xLeft, flat.xRight, {
                    pageIndex: pageIndex,
                    xLeft: flat.xLeft, xRight: flat.xRight,
                    yBot: flat.yTop + height, absBot: flat.yBot
                });
                flat.yBot = flat.yTop + height;
                PagePacker.addPack(packs, pageIndexModel + pageIndex, flat);
            });
            pageIndexModel += pageIndexShift + 1;
        });
        return packs;
    };
    return PagePacker;
}());



/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pdf_checkitem__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BooleanItemBrick; });


var BooleanItemBrick = /** @class */ (function (_super) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */])(BooleanItemBrick, _super);
    function BooleanItemBrick(question, controller, rect) {
        return _super.call(this, controller, rect, question.id, { question: question, readOnly: question.isReadOnly, checked: question.checkedValue }) || this;
    }
    return BooleanItemBrick;
}(__WEBPACK_IMPORTED_MODULE_1__pdf_checkitem__["a" /* CheckItemBrick */]));



/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pdf_checkitem__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckboxItemBrick; });


var CheckboxItemBrick = /** @class */ (function (_super) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */])(CheckboxItemBrick, _super);
    function CheckboxItemBrick(question, controller, rect, item, index) {
        return _super.call(this, controller, rect, question.id + 'index' + index, { question: question, readOnly: question.isReadOnly || !item.isEnabled, item: item, checked: question.isItemSelected(item), index: index }) || this;
    }
    return CheckboxItemBrick;
}(__WEBPACK_IMPORTED_MODULE_1__pdf_checkitem__["a" /* CheckItemBrick */]));



/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_survey_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pdf_textbox__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentBrick; });



var CommentBrick = /** @class */ (function (_super) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */])(CommentBrick, _super);
    function CommentBrick(question, controller, rect, isQuestion, index) {
        if (index === void 0) { index = 0; }
        var _this = _super.call(this, question, controller, rect, isQuestion, true, index) || this;
        _this.controller = controller;
        return _this;
    }
    CommentBrick.prototype.shouldRenderFlatBorders = function () {
        if (this.isQuestion && this.question.getType() !== 'comment')
            return _super.prototype.shouldRenderFlatBorders.call(this);
        return __WEBPACK_IMPORTED_MODULE_1_survey_core__["settings"].readOnlyCommentRenderMode === 'textarea';
    };
    return CommentBrick;
}(__WEBPACK_IMPORTED_MODULE_2__pdf_textbox__["a" /* TextBoxBrick */]));



/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pdf_brick__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helper_survey__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownBrick; });



var DropdownBrick = /** @class */ (function (_super) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */])(DropdownBrick, _super);
    function DropdownBrick(question, controller, rect) {
        var _this = _super.call(this, question, controller, rect) || this;
        _this.controller = controller;
        _this.question = question;
        return _this;
    }
    DropdownBrick.prototype.renderInteractive = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var comboBox, options;
            var _this = this;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_a) {
                comboBox = new this.controller.doc.AcroFormComboBox();
                comboBox.fieldName = this.question.id;
                comboBox.Rect = __WEBPACK_IMPORTED_MODULE_2__helper_survey__["a" /* SurveyHelper */].createAcroformRect(__WEBPACK_IMPORTED_MODULE_2__helper_survey__["a" /* SurveyHelper */].scaleRect(this, __WEBPACK_IMPORTED_MODULE_2__helper_survey__["a" /* SurveyHelper */].formScale(this.controller, this)));
                comboBox.edit = false;
                comboBox.color = this.textColor;
                options = [];
                if (this.question.showOptionsCaption) {
                    options.push(this.getCorrectedText(this.question.optionsCaption));
                }
                this.question.visibleChoices.forEach(function (item) {
                    options.push(_this.getCorrectedText(__WEBPACK_IMPORTED_MODULE_2__helper_survey__["a" /* SurveyHelper */].getLocString(item.locText)));
                });
                comboBox.setOptions(options);
                comboBox.fontName = this.controller.fontName;
                comboBox.fontSize = this.fontSize;
                comboBox.readOnly = this.question.isReadOnly;
                comboBox.isUnicode = __WEBPACK_IMPORTED_MODULE_2__helper_survey__["a" /* SurveyHelper */].isCustomFont(this.controller, comboBox.fontName);
                comboBox.V = this.getCorrectedText(__WEBPACK_IMPORTED_MODULE_2__helper_survey__["a" /* SurveyHelper */].getDropdownQuestionValue(this.question));
                this.controller.doc.addField(comboBox);
                __WEBPACK_IMPORTED_MODULE_2__helper_survey__["a" /* SurveyHelper */].renderFlatBorders(this.controller, this);
                return [2 /*return*/];
            });
        });
    };
    return DropdownBrick;
}(__WEBPACK_IMPORTED_MODULE_1__pdf_brick__["a" /* PdfBrick */]));



/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pdf_brick__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helper_survey__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmptyBrick; });



var EmptyBrick = /** @class */ (function (_super) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */])(EmptyBrick, _super);
    function EmptyBrick(rect, controller, isBorderVisible) {
        if (controller === void 0) { controller = null; }
        if (isBorderVisible === void 0) { isBorderVisible = false; }
        var _this = _super.call(this, null, controller, rect) || this;
        _this.controller = controller;
        _this.isBorderVisible = false;
        _this.isBorderVisible = isBorderVisible;
        return _this;
    }
    EmptyBrick.prototype.resizeBorder = function (isIncrease) {
        var coef = isIncrease ? 1 : -1;
        var borderPadding = this.controller.doc.getFontSize() * __WEBPACK_IMPORTED_MODULE_2__helper_survey__["a" /* SurveyHelper */].VALUE_READONLY_PADDING_SCALE;
        this.xLeft -= coef * borderPadding;
        this.xRight += coef * borderPadding;
        this.yBot += coef * borderPadding;
    };
    EmptyBrick.prototype.renderInteractive = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_a) {
                if (this.isBorderVisible) {
                    this.resizeBorder(true);
                    __WEBPACK_IMPORTED_MODULE_2__helper_survey__["a" /* SurveyHelper */].renderFlatBorders(this.controller, this);
                    this.resizeBorder(false);
                }
                return [2 /*return*/];
            });
        });
    };
    return EmptyBrick;
}(__WEBPACK_IMPORTED_MODULE_1__pdf_brick__["a" /* PdfBrick */]));



/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pdf_brick__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HTMLBrick; });


var HTMLBrick = /** @class */ (function (_super) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */])(HTMLBrick, _super);
    function HTMLBrick(question, controller, rect, html, isImage) {
        if (isImage === void 0) { isImage = false; }
        var _this = _super.call(this, question, controller, rect) || this;
        _this.html = html;
        if (isImage) {
            _this.margins = {
                top: 0.0,
                bottom: 0.0
            };
        }
        else {
            _this.margins = {
                top: controller.margins.top,
                bottom: controller.margins.bot
            };
        }
        return _this;
    }
    HTMLBrick.prototype.renderInteractive = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var oldFontSize;
            var _this = this;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        oldFontSize = this.controller.fontSize;
                        this.controller.fontSize = this.fontSize;
                        return [4 /*yield*/, new Promise(function (resolve) {
                                _this.controller.doc.fromHTML(_this.html, _this.xLeft, _this.yTop, {
                                    width: _this.width, pagesplit: true,
                                }, function () {
                                    [].slice.call(document.querySelectorAll('iframe')).forEach(function (el) {
                                        if (el.name.lastIndexOf('jsPDFhtmlText', 0) === 0) {
                                            el.parentNode.removeChild(el);
                                        }
                                    });
                                    resolve();
                                }, _this.margins);
                            })];
                    case 1:
                        _a.sent();
                        this.controller.fontSize = oldFontSize;
                        return [2 /*return*/];
                }
            });
        });
    };
    return HTMLBrick;
}(__WEBPACK_IMPORTED_MODULE_1__pdf_brick__["a" /* PdfBrick */]));



/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pdf_brick__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageBrick; });


var ImageBrick = /** @class */ (function (_super) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */])(ImageBrick, _super);
    function ImageBrick(question, controller, image, point, originalWidth, originalHeight) {
        var _this = _super.call(this, question, controller, {
            xLeft: point.xLeft,
            xRight: point.xLeft + (originalWidth || 0),
            yTop: point.yTop,
            yBot: point.yTop + (originalHeight || 0)
        }) || this;
        _this.image = image;
        _this.originalWidth = originalWidth;
        _this.originalHeight = originalHeight;
        _this.isPageBreak = _this.originalHeight === undefined;
        return _this;
    }
    ImageBrick.prototype.renderInteractive = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var _this = this;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (resolve) {
                            _this.controller.doc.addImage(_this.image, _this.xLeft, _this.yTop, _this.originalWidth, _this.originalHeight);
                            resolve();
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return ImageBrick;
}(__WEBPACK_IMPORTED_MODULE_1__pdf_brick__["a" /* PdfBrick */]));



/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pdf_text__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helper_survey__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinkBrick; });



var LinkBrick = /** @class */ (function (_super) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */])(LinkBrick, _super);
    function LinkBrick(textFlat, link) {
        var _this = _super.call(this, textFlat.question, textFlat.controller, textFlat, textFlat.text) || this;
        _this.link = link;
        _this.textColor = LinkBrick.COLOR;
        return _this;
    }
    LinkBrick.prototype.renderInteractive = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var oldTextColor, descent, yTopLink;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        oldTextColor = this.controller.doc.getTextColor();
                        this.controller.doc.setTextColor(__WEBPACK_IMPORTED_MODULE_2__helper_survey__["a" /* SurveyHelper */].BACKGROUND_COLOR);
                        descent = this.controller.unitHeight *
                            (this.controller.doc.getLineHeightFactor() -
                                LinkBrick.SCALE_FACTOR_MAGIC);
                        yTopLink = this.yTop +
                            (this.yBot - this.yTop) - descent;
                        this.controller.doc.textWithLink(this.text, this.xLeft, yTopLink, { url: this.link });
                        return [4 /*yield*/, _super.prototype.renderInteractive.call(this)];
                    case 1:
                        _a.sent();
                        this.controller.doc.setTextColor(oldTextColor);
                        return [2 /*return*/];
                }
            });
        });
    };
    LinkBrick.prototype.renderReadOnly = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (__WEBPACK_IMPORTED_MODULE_2__helper_survey__["a" /* SurveyHelper */].getReadonlyRenderAs(this.question, this.controller) !== 'text') {
                            return [2 /*return*/, this.renderInteractive()];
                        }
                        return [4 /*yield*/, _super.prototype.renderInteractive.call(this)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LinkBrick.SCALE_FACTOR_MAGIC = 0.955;
    LinkBrick.COLOR = '#0000EE';
    return LinkBrick;
}(__WEBPACK_IMPORTED_MODULE_1__pdf_text__["a" /* TextBrick */]));



/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pdf_brick__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pdf_text__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helper_survey__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RadioGroupWrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RadioItemBrick; });




var RadioGroupWrap = /** @class */ (function () {
    function RadioGroupWrap(name, controller, context) {
        this.name = name;
        this.controller = controller;
        this.context = context;
    }
    RadioGroupWrap.prototype.addToPdf = function (color) {
        var _a;
        this._radioGroup = new this.controller.doc.AcroFormRadioButton();
        var options = {};
        options.fieldName = this.name;
        options.readOnly = this.readOnly;
        options.color = color;
        options.context = this.context;
        (_a = this.context.question.survey) === null || _a === void 0 ? void 0 : _a.getUpdatedRadioGroupWrapOptions(options);
        this._radioGroup.fieldName = options.fieldName;
        this._radioGroup.readOnly = options.readOnly;
        this._radioGroup.color = options.color;
        this._radioGroup.value = '';
        this.controller.doc.addField(this._radioGroup);
    };
    Object.defineProperty(RadioGroupWrap.prototype, "radioGroup", {
        get: function () {
            return this._radioGroup;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RadioGroupWrap.prototype, "readOnly", {
        get: function () {
            return this.context.readOnly;
        },
        enumerable: false,
        configurable: true
    });
    return RadioGroupWrap;
}());

var RadioItemBrick = /** @class */ (function (_super) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */])(RadioItemBrick, _super);
    function RadioItemBrick(controller, rect, context, radioGroupWrap) {
        var _this = _super.call(this, context.question, controller, rect) || this;
        _this.context = context;
        _this.radioGroupWrap = radioGroupWrap;
        _this.textColor = _this.formBorderColor;
        return _this;
    }
    RadioItemBrick.prototype.getShouldRenderReadOnly = function () {
        return this.radioGroupWrap.readOnly && __WEBPACK_IMPORTED_MODULE_3__helper_survey__["a" /* SurveyHelper */].getReadonlyRenderAs(this.question, this.controller) !== 'acroform' || this.controller.compress;
    };
    RadioItemBrick.prototype.renderInteractive = function () {
        var _a;
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var options, formScale, radioButton;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_b) {
                if (this.context.index == 0) {
                    this.radioGroupWrap.addToPdf(this.formBorderColor);
                }
                options = {};
                options.fieldName = this.radioGroupWrap.name + 'index' + this.context.index;
                formScale = __WEBPACK_IMPORTED_MODULE_3__helper_survey__["a" /* SurveyHelper */].formScale(this.controller, this);
                options.Rect = __WEBPACK_IMPORTED_MODULE_3__helper_survey__["a" /* SurveyHelper */].createAcroformRect(__WEBPACK_IMPORTED_MODULE_3__helper_survey__["a" /* SurveyHelper */].scaleRect(this, formScale));
                options.color = this.formBorderColor;
                options.appearance = this.controller.doc.AcroForm.Appearance.RadioButton.Circle;
                options.radioGroup = this.radioGroupWrap.radioGroup;
                options.context = this.context;
                (_a = this.context.question.survey) === null || _a === void 0 ? void 0 : _a.getUpdatedRadioItemAcroformOptions(options);
                radioButton = this.radioGroupWrap.radioGroup.createOption(options.fieldName);
                if (this.context.checked) {
                    if (!options.AS) {
                        radioButton.AS = '/' + options.fieldName;
                    }
                    if (!this.radioGroupWrap.radioGroup.value) {
                        this.radioGroupWrap.radioGroup.value = options.fieldName;
                    }
                }
                else {
                    if (!options.AS) {
                        options.AS = '/Off';
                    }
                }
                radioButton.Rect = options.Rect;
                radioButton.color = options.color;
                __WEBPACK_IMPORTED_MODULE_3__helper_survey__["a" /* SurveyHelper */].renderFlatBorders(this.controller, this);
                this.radioGroupWrap.radioGroup.setAppearance(options.appearance);
                return [2 /*return*/];
            });
        });
    };
    RadioItemBrick.prototype.renderReadOnly = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var radiomarkerPoint, oldFontSize, radiomarkerSize, radiomarkerFlat;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        __WEBPACK_IMPORTED_MODULE_3__helper_survey__["a" /* SurveyHelper */].renderFlatBorders(this.controller, this);
                        if (!this.context.checked) return [3 /*break*/, 3];
                        radiomarkerPoint = __WEBPACK_IMPORTED_MODULE_3__helper_survey__["a" /* SurveyHelper */].createPoint(this, true, true);
                        oldFontSize = this.controller.fontSize;
                        this.controller.fontSize = oldFontSize *
                            RadioItemBrick.RADIOMARKER_READONLY_FONT_SIZE_SCALE;
                        radiomarkerSize = this.controller.measureText(RadioItemBrick.RADIOMARKER_READONLY_SYMBOL);
                        radiomarkerPoint.xLeft += this.width / 2.0 - radiomarkerSize.width / 2.0;
                        radiomarkerPoint.yTop += this.height / 2.0 - radiomarkerSize.height / 1.925;
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_3__helper_survey__["a" /* SurveyHelper */].createTextFlat(radiomarkerPoint, this.question, this.controller, RadioItemBrick.RADIOMARKER_READONLY_SYMBOL, __WEBPACK_IMPORTED_MODULE_2__pdf_text__["a" /* TextBrick */])];
                    case 1:
                        radiomarkerFlat = _a.sent();
                        radiomarkerFlat.unfold()[0].textColor = this.textColor;
                        this.controller.fontSize = oldFontSize;
                        return [4 /*yield*/, radiomarkerFlat.render()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    RadioItemBrick.RADIOMARKER_READONLY_SYMBOL = '•';
    RadioItemBrick.RADIOMARKER_READONLY_FONT_SIZE_SCALE = 1.575;
    return RadioItemBrick;
}(__WEBPACK_IMPORTED_MODULE_1__pdf_brick__["a" /* PdfBrick */]));



/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pdf_brick__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pdf_text__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pdf_checkitem__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helper_survey__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RankingItemBrick; });





var RankingItemBrick = /** @class */ (function (_super) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */])(RankingItemBrick, _super);
    function RankingItemBrick(question, controller, rect, mark) {
        var _this = _super.call(this, question, controller, rect) || this;
        _this.mark = mark;
        _this.question = question;
        _this.textColor = _this.formBorderColor;
        return _this;
    }
    RankingItemBrick.prototype.renderInteractive = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var markPoint, oldFontSize, markSize, markFlat;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        __WEBPACK_IMPORTED_MODULE_4__helper_survey__["a" /* SurveyHelper */].renderFlatBorders(this.controller, this);
                        markPoint = __WEBPACK_IMPORTED_MODULE_4__helper_survey__["a" /* SurveyHelper */].createPoint(this, true, true);
                        oldFontSize = this.controller.fontSize;
                        this.controller.fontSize = oldFontSize *
                            __WEBPACK_IMPORTED_MODULE_3__pdf_checkitem__["a" /* CheckItemBrick */].CHECKMARK_READONLY_FONT_SIZE_SCALE;
                        markSize = this.controller.measureText(this.mark);
                        markPoint.xLeft += this.width / 2.0 - markSize.width / 2.0;
                        markPoint.yTop += this.height / 2.0 - markSize.height / 2.0;
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_4__helper_survey__["a" /* SurveyHelper */].createTextFlat(markPoint, this.question, this.controller, this.mark, __WEBPACK_IMPORTED_MODULE_2__pdf_text__["a" /* TextBrick */])];
                    case 1:
                        markFlat = _a.sent();
                        markFlat.unfold()[0].textColor = this.textColor;
                        this.controller.fontSize = oldFontSize;
                        return [4 /*yield*/, markFlat.render()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return RankingItemBrick;
}(__WEBPACK_IMPORTED_MODULE_1__pdf_brick__["a" /* PdfBrick */]));



/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_survey_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pdf_brick__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helper_survey__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextFieldBrick; });




var TextFieldBrick = /** @class */ (function (_super) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */])(TextFieldBrick, _super);
    function TextFieldBrick(question, controller, rect, isQuestion, fieldName, value, placeholder, isReadOnly, isMultiline, inputType) {
        var _this = _super.call(this, question, controller, rect) || this;
        _this.isQuestion = isQuestion;
        _this.fieldName = fieldName;
        _this.value = value;
        _this.placeholder = placeholder;
        _this.isReadOnly = isReadOnly;
        _this.isMultiline = isMultiline;
        _this.inputType = inputType;
        _this.question = question;
        return _this;
    }
    TextFieldBrick.prototype.renderColorQuestion = function () {
        var oldFillColor = this.controller.doc.getFillColor();
        this.controller.doc.setFillColor(this.question.value || 'black');
        this.controller.doc.rect(this.xLeft, this.yTop, this.width, this.height, 'F');
        this.controller.doc.setFillColor(oldFillColor);
    };
    TextFieldBrick.prototype.renderInteractive = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var inputField, formScale;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_a) {
                if (this.inputType === 'color') {
                    this.renderColorQuestion();
                    return [2 /*return*/];
                }
                inputField = this.inputType === 'password' ?
                    new this.controller.doc.AcroFormPasswordField() :
                    new this.controller.doc.AcroFormTextField();
                inputField.fieldName = this.fieldName;
                inputField.fontName = this.controller.fontName;
                inputField.fontSize = this.fontSize;
                inputField.isUnicode = __WEBPACK_IMPORTED_MODULE_3__helper_survey__["a" /* SurveyHelper */].isCustomFont(this.controller, inputField.fontName);
                if (this.inputType !== 'password') {
                    inputField.V = ' ' + this.getCorrectedText(this.value);
                    inputField.DV = ' ' + this.getCorrectedText(this.placeholder);
                }
                else
                    inputField.value = '';
                inputField.multiline = this.isMultiline;
                inputField.readOnly = this.isReadOnly;
                inputField.color = this.textColor;
                formScale = __WEBPACK_IMPORTED_MODULE_3__helper_survey__["a" /* SurveyHelper */].formScale(this.controller, this);
                inputField.maxFontSize = this.controller.fontSize * formScale;
                inputField.Rect = __WEBPACK_IMPORTED_MODULE_3__helper_survey__["a" /* SurveyHelper */].createAcroformRect(__WEBPACK_IMPORTED_MODULE_3__helper_survey__["a" /* SurveyHelper */].scaleRect(this, formScale));
                this.controller.doc.addField(inputField);
                __WEBPACK_IMPORTED_MODULE_3__helper_survey__["a" /* SurveyHelper */].renderFlatBorders(this.controller, this);
                return [2 /*return*/];
            });
        });
    };
    TextFieldBrick.prototype.shouldRenderFlatBorders = function () {
        return __WEBPACK_IMPORTED_MODULE_1_survey_core__["settings"].readOnlyTextRenderMode === 'input';
    };
    TextFieldBrick.prototype.getShouldRenderReadOnly = function () {
        return __WEBPACK_IMPORTED_MODULE_3__helper_survey__["a" /* SurveyHelper */].shouldRenderReadOnly(this.question, this.controller, this.isReadOnly);
    };
    TextFieldBrick.prototype.renderReadOnly = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.controller.pushMargins(this.xLeft, this.controller.paperWidth - this.xRight);
                        if (!(this.inputType === 'color')) return [3 /*break*/, 1];
                        this.renderColorQuestion();
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.textBrick.render()];
                    case 2:
                        _a.sent();
                        if (this.shouldRenderFlatBorders()) {
                            __WEBPACK_IMPORTED_MODULE_3__helper_survey__["a" /* SurveyHelper */].renderFlatBorders(this.controller, this);
                        }
                        _a.label = 3;
                    case 3:
                        this.controller.popMargins();
                        return [2 /*return*/];
                }
            });
        });
    };
    TextFieldBrick.prototype.translateX = function (func) {
        var res = func(this.xLeft, this.xRight);
        this._xLeft = res.xLeft;
        this._xRight = res.xRight;
        if (this.textBrick) {
            this.textBrick.translateX(func);
        }
    };
    TextFieldBrick.prototype.setXLeft = function (val) {
        var delta = val - this._xLeft;
        _super.prototype.setXLeft.call(this, val);
        if (this.textBrick) {
            this.textBrick.xLeft = this.textBrick.xLeft + delta;
        }
    };
    TextFieldBrick.prototype.setXRight = function (val) {
        var delta = val - this._xRight;
        _super.prototype.setXRight.call(this, val);
        if (this.textBrick) {
            this.textBrick.xRight = this.textBrick.xRight + delta;
        }
    };
    TextFieldBrick.prototype.setYTop = function (val) {
        var delta = val - this._yTop;
        _super.prototype.setYTop.call(this, val);
        if (this.textBrick) {
            this.textBrick.yTop = this.textBrick.yTop + delta;
        }
    };
    TextFieldBrick.prototype.setYBottom = function (val) {
        var delta = val - this._yBot;
        _super.prototype.setYBottom.call(this, val);
        if (this.textBrick) {
            this.textBrick.yBot = this.textBrick.yBot + delta;
        }
    };
    return TextFieldBrick;
}(__WEBPACK_IMPORTED_MODULE_2__pdf_brick__["a" /* PdfBrick */]));



/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pdf_textbold__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helper_survey__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TitlePanelBrick; });



var TitlePanelBrick = /** @class */ (function (_super) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */])(TitlePanelBrick, _super);
    function TitlePanelBrick(question, controller, rect, text) {
        return _super.call(this, question, controller, rect, text) || this;
    }
    TitlePanelBrick.prototype.renderInteractive = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var oldFontSize;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        oldFontSize = this.controller.fontSize;
                        this.controller.fontSize = oldFontSize * __WEBPACK_IMPORTED_MODULE_2__helper_survey__["a" /* SurveyHelper */].TITLE_PANEL_FONT_SIZE_SCALE;
                        return [4 /*yield*/, _super.prototype.renderInteractive.call(this)];
                    case 1:
                        _a.sent();
                        this.controller.fontSize = oldFontSize;
                        return [2 /*return*/];
                }
            });
        });
    };
    return TitlePanelBrick;
}(__WEBPACK_IMPORTED_MODULE_1__pdf_textbold__["a" /* TextBoldBrick */]));



/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* unused harmony export AdornersBaseOptions */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return AdornersOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdornersPanelOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AdornersPageOptions; });

var AdornersBaseOptions = /** @class */ (function () {
    function AdornersBaseOptions(point, bricks, controller, repository, module) {
        this.point = point;
        this.bricks = bricks;
        this.controller = controller;
        this.repository = repository;
        this.module = module;
    }
    return AdornersBaseOptions;
}());

var AdornersOptions = /** @class */ (function (_super) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */])(AdornersOptions, _super);
    function AdornersOptions(point, bricks, question, controller, repository, module) {
        var _this = _super.call(this, point, bricks, controller, repository, module) || this;
        _this.question = question;
        return _this;
    }
    return AdornersOptions;
}(AdornersBaseOptions));

var AdornersPanelOptions = /** @class */ (function (_super) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */])(AdornersPanelOptions, _super);
    function AdornersPanelOptions(point, bricks, panel, controller, repository, module) {
        var _this = _super.call(this, point, bricks, controller, repository, module) || this;
        _this.panel = panel;
        return _this;
    }
    return AdornersPanelOptions;
}(AdornersBaseOptions));

var AdornersPageOptions = /** @class */ (function (_super) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */])(AdornersPageOptions, _super);
    function AdornersPageOptions(point, bricks, page, controller, repository, module) {
        var _this = _super.call(this, point, bricks, controller, repository, module) || this;
        _this.page = page;
        return _this;
    }
    return AdornersPageOptions;
}(AdornersBaseOptions));



/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_survey_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flat_question__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__flat_repository__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pdf_render_pdf_text__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pdf_render_pdf_booleanitem__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pdf_render_pdf_composite__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__helper_survey__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__flat_radiogroup__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlatBooleanCheckbox; });
/* unused harmony export FlatBoolean */









var FlatBooleanCheckbox = /** @class */ (function (_super) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */])(FlatBooleanCheckbox, _super);
    function FlatBooleanCheckbox(survey, question, controller) {
        var _this = _super.call(this, survey, question, controller) || this;
        _this.survey = survey;
        _this.controller = controller;
        _this.question = question;
        return _this;
    }
    FlatBooleanCheckbox.prototype.generateFlatsContent = function (point) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var compositeFlat, height, itemFlat, textPoint, locLabelText, _a, _b;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        compositeFlat = new __WEBPACK_IMPORTED_MODULE_6__pdf_render_pdf_composite__["a" /* CompositeBrick */]();
                        height = this.controller.unitHeight;
                        itemFlat = new __WEBPACK_IMPORTED_MODULE_5__pdf_render_pdf_booleanitem__["a" /* BooleanItemBrick */](this.question, this.controller, __WEBPACK_IMPORTED_MODULE_7__helper_survey__["a" /* SurveyHelper */].moveRect(__WEBPACK_IMPORTED_MODULE_7__helper_survey__["a" /* SurveyHelper */].scaleRect(__WEBPACK_IMPORTED_MODULE_7__helper_survey__["a" /* SurveyHelper */].createRect(point, height, height), __WEBPACK_IMPORTED_MODULE_7__helper_survey__["a" /* SurveyHelper */].SELECT_ITEM_FLAT_SCALE), point.xLeft));
                        compositeFlat.addBrick(itemFlat);
                        textPoint = __WEBPACK_IMPORTED_MODULE_7__helper_survey__["a" /* SurveyHelper */].clone(point);
                        textPoint.xLeft = itemFlat.xRight + this.controller.unitWidth * __WEBPACK_IMPORTED_MODULE_7__helper_survey__["a" /* SurveyHelper */].GAP_BETWEEN_ITEM_TEXT;
                        locLabelText = this.question.isIndeterminate ? null :
                            this.question.checkedValue ? this.question.locLabelTrue : this.question.locLabelFalse;
                        if (!(locLabelText !== null && locLabelText.renderedHtml !== null)) return [3 /*break*/, 2];
                        _b = (_a = compositeFlat).addBrick;
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_7__helper_survey__["a" /* SurveyHelper */].createTextFlat(textPoint, this.question, this.controller, locLabelText, __WEBPACK_IMPORTED_MODULE_4__pdf_render_pdf_text__["a" /* TextBrick */])];
                    case 1:
                        _b.apply(_a, [_c.sent()]);
                        _c.label = 2;
                    case 2: return [2 /*return*/, [compositeFlat]];
                }
            });
        });
    };
    return FlatBooleanCheckbox;
}(__WEBPACK_IMPORTED_MODULE_2__flat_question__["a" /* FlatQuestion */]));

var FlatBoolean = /** @class */ (function (_super) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */])(FlatBoolean, _super);
    function FlatBoolean(survey, question, controller) {
        var _this = _super.call(this, survey, question, controller) || this;
        _this.survey = survey;
        _this.controller = controller;
        _this.buildItems();
        return _this;
    }
    FlatBoolean.prototype.buildItems = function () {
        var question = this.question;
        var falseChoice = new __WEBPACK_IMPORTED_MODULE_1_survey_core__["ItemValue"](question.valueFalse !== undefined ? question.valueFalse : false);
        var trueChoice = new __WEBPACK_IMPORTED_MODULE_1_survey_core__["ItemValue"](question.valueTrue !== undefined ? question.valueTrue : true);
        falseChoice.locOwner = question;
        falseChoice.setLocText(question.locLabelFalse);
        trueChoice.locOwner = question;
        trueChoice.setLocText(question.locLabelTrue);
        this.items = [falseChoice, trueChoice];
    };
    FlatBoolean.prototype.getVisibleChoices = function () {
        return this.items;
    };
    FlatBoolean.prototype.getColCount = function () {
        return 0;
    };
    return FlatBoolean;
}(__WEBPACK_IMPORTED_MODULE_8__flat_radiogroup__["a" /* FlatRadiogroup */]));

__WEBPACK_IMPORTED_MODULE_3__flat_repository__["a" /* FlatRepository */].getInstance().register('boolean', FlatBoolean);
__WEBPACK_IMPORTED_MODULE_3__flat_repository__["a" /* FlatRepository */].getInstance().register('boolean-checkbox', FlatBooleanCheckbox);


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__flat_selectbase__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flat_repository__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pdf_render_pdf_checkboxitem__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlatCheckbox; });




var FlatCheckbox = /** @class */ (function (_super) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */])(FlatCheckbox, _super);
    function FlatCheckbox(survey, question, controller) {
        var _this = _super.call(this, survey, question, controller) || this;
        _this.survey = survey;
        _this.controller = controller;
        _this.question = question;
        return _this;
    }
    FlatCheckbox.prototype.generateFlatItem = function (rect, item, index) {
        return new __WEBPACK_IMPORTED_MODULE_3__pdf_render_pdf_checkboxitem__["a" /* CheckboxItemBrick */](this.question, this.controller, rect, item, index);
    };
    return FlatCheckbox;
}(__WEBPACK_IMPORTED_MODULE_1__flat_selectbase__["a" /* FlatSelectBase */]));

__WEBPACK_IMPORTED_MODULE_2__flat_repository__["a" /* FlatRepository */].getInstance().register('tagbox', FlatCheckbox);
__WEBPACK_IMPORTED_MODULE_2__flat_repository__["a" /* FlatRepository */].getInstance().register('checkbox', FlatCheckbox);


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__flat_question__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flat_repository__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helper_survey__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlatComment; });




var FlatComment = /** @class */ (function (_super) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */])(FlatComment, _super);
    function FlatComment(survey, question, controller) {
        var _this = _super.call(this, survey, question, controller) || this;
        _this.survey = survey;
        _this.controller = controller;
        _this.question = question;
        return _this;
    }
    FlatComment.prototype.generateFlatsContent = function (point) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_3__helper_survey__["a" /* SurveyHelper */].createCommentFlat(point, this.question, this.controller, true, { rows: this.question.rows })];
                    case 1: return [2 /*return*/, [_a.sent()]];
                }
            });
        });
    };
    return FlatComment;
}(__WEBPACK_IMPORTED_MODULE_1__flat_question__["a" /* FlatQuestion */]));

__WEBPACK_IMPORTED_MODULE_2__flat_repository__["a" /* FlatRepository */].getInstance().register('comment', FlatComment);


/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__flat_question__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flat_repository__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlatCustomModel; });



var FlatCustomModel = /** @class */ (function (_super) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */])(FlatCustomModel, _super);
    function FlatCustomModel(survey, question, controller) {
        var _this = _super.call(this, survey, question, controller) || this;
        _this.survey = survey;
        _this.controller = controller;
        return _this;
    }
    FlatCustomModel.prototype.generateFlatsContent = function (point) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var flat;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_a) {
                flat = __WEBPACK_IMPORTED_MODULE_2__flat_repository__["a" /* FlatRepository */].getInstance().create(this.survey, this.question, this.controller, this.question.getType());
                return [2 /*return*/, flat.generateFlatsContent(point)];
            });
        });
    };
    return FlatCustomModel;
}(__WEBPACK_IMPORTED_MODULE_1__flat_question__["a" /* FlatQuestion */]));

__WEBPACK_IMPORTED_MODULE_2__flat_repository__["a" /* FlatRepository */].getInstance().register('custom_model', FlatCustomModel);


/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__flat_question__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flat_repository__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pdf_render_pdf_dropdown__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pdf_render_pdf_composite__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helper_survey__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlatDropdown; });






var FlatDropdown = /** @class */ (function (_super) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */])(FlatDropdown, _super);
    function FlatDropdown(survey, question, controller) {
        var _this = _super.call(this, survey, question, controller) || this;
        _this.survey = survey;
        _this.controller = controller;
        _this.question = question;
        return _this;
    }
    FlatDropdown.prototype.generateFlatsContent = function (point) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var valueBrick, _a, compositeFlat, otherPoint, _b, _c;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!!this.shouldRenderAsComment) return [3 /*break*/, 1];
                        _a = new __WEBPACK_IMPORTED_MODULE_3__pdf_render_pdf_dropdown__["a" /* DropdownBrick */](this.question, this.controller, __WEBPACK_IMPORTED_MODULE_5__helper_survey__["a" /* SurveyHelper */].createTextFieldRect(point, this.controller));
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_5__helper_survey__["a" /* SurveyHelper */].createCommentFlat(point, this.question, this.controller, true, { value: __WEBPACK_IMPORTED_MODULE_5__helper_survey__["a" /* SurveyHelper */].getDropdownQuestionValue(this.question) })];
                    case 2:
                        _a = _d.sent();
                        _d.label = 3;
                    case 3:
                        valueBrick = _a;
                        compositeFlat = new __WEBPACK_IMPORTED_MODULE_4__pdf_render_pdf_composite__["a" /* CompositeBrick */](valueBrick);
                        if (!this.question.isOtherSelected) return [3 /*break*/, 5];
                        otherPoint = __WEBPACK_IMPORTED_MODULE_5__helper_survey__["a" /* SurveyHelper */].createPoint(compositeFlat);
                        otherPoint.yTop += this.controller.unitHeight * __WEBPACK_IMPORTED_MODULE_5__helper_survey__["a" /* SurveyHelper */].GAP_BETWEEN_ROWS;
                        _c = (_b = compositeFlat).addBrick;
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_5__helper_survey__["a" /* SurveyHelper */].createCommentFlat(otherPoint, this.question, this.controller, false, { rows: __WEBPACK_IMPORTED_MODULE_5__helper_survey__["a" /* SurveyHelper */].OTHER_ROWS_COUNT })];
                    case 4:
                        _c.apply(_b, [_d.sent()]);
                        _d.label = 5;
                    case 5: return [2 /*return*/, [compositeFlat]];
                }
            });
        });
    };
    return FlatDropdown;
}(__WEBPACK_IMPORTED_MODULE_1__flat_question__["a" /* FlatQuestion */]));

__WEBPACK_IMPORTED_MODULE_2__flat_repository__["a" /* FlatRepository */].getInstance().register('dropdown', FlatDropdown);


/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__flat_question__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flat_repository__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helper_survey__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlatExpression; });




var FlatExpression = /** @class */ (function (_super) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */])(FlatExpression, _super);
    function FlatExpression(survey, question, controller) {
        var _this = _super.call(this, survey, question, controller) || this;
        _this.survey = survey;
        _this.question = question;
        return _this;
    }
    FlatExpression.prototype.generateFlatsContent = function (point) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_3__helper_survey__["a" /* SurveyHelper */].createCommentFlat(point, this.question, this.controller, true, { value: this.question.displayValue, readOnly: true })];
                    case 1: return [2 /*return*/, [_a.sent()]];
                }
            });
        });
    };
    return FlatExpression;
}(__WEBPACK_IMPORTED_MODULE_1__flat_question__["a" /* FlatQuestion */]));

__WEBPACK_IMPORTED_MODULE_2__flat_repository__["a" /* FlatRepository */].getInstance().register('expression', FlatExpression);


/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__flat_question__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flat_repository__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pdf_render_pdf_text__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pdf_render_pdf_composite__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helper_survey__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlatFile; });






var FlatFile = /** @class */ (function (_super) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */])(FlatFile, _super);
    function FlatFile(survey, question, controller) {
        var _this = _super.call(this, survey, question, controller) || this;
        _this.survey = survey;
        _this.question = question;
        return _this;
    }
    FlatFile.prototype.generateFlatItem = function (point, item) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var compositeFlat, _a, imageSize, imagePoint, _b, _c;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _a = __WEBPACK_IMPORTED_MODULE_4__pdf_render_pdf_composite__["a" /* CompositeBrick */].bind;
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_5__helper_survey__["a" /* SurveyHelper */].createLinkFlat(point, this.question, this.controller, item.name === undefined ? 'image' : item.name, item.content)];
                    case 1:
                        compositeFlat = new (_a.apply(__WEBPACK_IMPORTED_MODULE_4__pdf_render_pdf_composite__["a" /* CompositeBrick */], [void 0, _d.sent()]))();
                        if (!__WEBPACK_IMPORTED_MODULE_5__helper_survey__["a" /* SurveyHelper */].canPreviewImage(this.question, item, item.content)) return [3 /*break*/, 4];
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_5__helper_survey__["a" /* SurveyHelper */].getImageSize(item.content)];
                    case 2:
                        imageSize = _d.sent();
                        if (this.question.imageWidth) {
                            imageSize.width = __WEBPACK_IMPORTED_MODULE_5__helper_survey__["a" /* SurveyHelper */].parseWidth(this.question.imageWidth, __WEBPACK_IMPORTED_MODULE_5__helper_survey__["a" /* SurveyHelper */].getPageAvailableWidth(this.controller));
                        }
                        if (this.question.imageHeight) {
                            imageSize.height = __WEBPACK_IMPORTED_MODULE_5__helper_survey__["a" /* SurveyHelper */].parseWidth(this.question.imageHeight, Number.MAX_VALUE);
                        }
                        imagePoint = __WEBPACK_IMPORTED_MODULE_5__helper_survey__["a" /* SurveyHelper */].createPoint(compositeFlat);
                        imagePoint.yTop += this.controller.unitHeight * FlatFile.IMAGE_GAP_SCALE;
                        _c = (_b = compositeFlat).addBrick;
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_5__helper_survey__["a" /* SurveyHelper */].createImageFlat(imagePoint, this.question, this.controller, item.content, imageSize.width, imageSize.height, FlatFile.DEFAULT_IMAGE_FIT)];
                    case 3:
                        _c.apply(_b, [_d.sent()]);
                        _d.label = 4;
                    case 4: return [2 /*return*/, compositeFlat];
                }
            });
        });
    };
    FlatFile.prototype.addLine = function (rowsFlats, currPoint, index) {
        if (index !== this.question.previewValue.length - 1) {
            rowsFlats[rowsFlats.length - 1].addBrick(__WEBPACK_IMPORTED_MODULE_5__helper_survey__["a" /* SurveyHelper */].createRowlineFlat(currPoint, this.controller));
            currPoint.yTop += __WEBPACK_IMPORTED_MODULE_5__helper_survey__["a" /* SurveyHelper */].EPSILON;
            rowsFlats.push(new __WEBPACK_IMPORTED_MODULE_4__pdf_render_pdf_composite__["a" /* CompositeBrick */]());
        }
    };
    FlatFile.prototype.getImagePreviewContentWidth = function (item, availableWidth) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var contentWidth;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_5__helper_survey__["a" /* SurveyHelper */].getImageSize(item.content)];
                    case 1:
                        contentWidth = (_a.sent()).width;
                        if (!!contentWidth) {
                            contentWidth = __WEBPACK_IMPORTED_MODULE_5__helper_survey__["a" /* SurveyHelper */].parseWidth(contentWidth + 'pt', availableWidth);
                        }
                        if (!!this.question.imageWidth) {
                            contentWidth = __WEBPACK_IMPORTED_MODULE_5__helper_survey__["a" /* SurveyHelper */].parseWidth(this.question.imageWidth, availableWidth);
                        }
                        else if (this.controller.applyImageFit) {
                            contentWidth = availableWidth;
                        }
                        if (contentWidth === undefined) {
                            contentWidth = 0;
                        }
                        return [2 /*return*/, Math.max(contentWidth, FlatFile.TEXT_MIN_SCALE * this.controller.unitWidth)];
                }
            });
        });
    };
    FlatFile.prototype.generateFlatsContent = function (point) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var rowsFlats, currPoint, yBot, fullAvailableWidth, i, item, availableWidth, compositeWidth, itemFlat, itemFlat;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.question.previewValue.length === 0)) return [3 /*break*/, 2];
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_5__helper_survey__["a" /* SurveyHelper */].createTextFlat(point, this.question, this.controller, this.question.noFileChosenCaption, __WEBPACK_IMPORTED_MODULE_3__pdf_render_pdf_text__["a" /* TextBrick */])];
                    case 1: return [2 /*return*/, [_a.sent()]];
                    case 2:
                        rowsFlats = [new __WEBPACK_IMPORTED_MODULE_4__pdf_render_pdf_composite__["a" /* CompositeBrick */]()];
                        currPoint = __WEBPACK_IMPORTED_MODULE_5__helper_survey__["a" /* SurveyHelper */].clone(point);
                        yBot = currPoint.yTop;
                        fullAvailableWidth = this.controller.paperWidth -
                            this.controller.margins.right - currPoint.xLeft;
                        i = 0;
                        _a.label = 3;
                    case 3:
                        if (!(i < this.question.previewValue.length)) return [3 /*break*/, 10];
                        item = this.question.previewValue[i];
                        availableWidth = this.controller.paperWidth -
                            this.controller.margins.right - currPoint.xLeft;
                        if (!__WEBPACK_IMPORTED_MODULE_5__helper_survey__["a" /* SurveyHelper */].canPreviewImage(this.question, item, item.content)) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.getImagePreviewContentWidth(item, fullAvailableWidth)];
                    case 4:
                        compositeWidth = _a.sent();
                        if (availableWidth < compositeWidth) {
                            currPoint.xLeft = point.xLeft;
                            currPoint.yTop = yBot;
                            this.addLine(rowsFlats, currPoint, i);
                        }
                        this.controller.pushMargins(currPoint.xLeft, this.controller.paperWidth - currPoint.xLeft - compositeWidth);
                        return [4 /*yield*/, this.generateFlatItem(currPoint, item)];
                    case 5:
                        itemFlat = _a.sent();
                        rowsFlats[rowsFlats.length - 1].addBrick(itemFlat);
                        currPoint.xLeft += itemFlat.width;
                        yBot = Math.max(yBot, itemFlat.yBot);
                        this.controller.popMargins();
                        return [3 /*break*/, 8];
                    case 6:
                        if (availableWidth < this.controller.unitWidth) {
                            currPoint.xLeft = point.xLeft;
                            currPoint.yTop = yBot;
                            this.addLine(rowsFlats, currPoint, i);
                        }
                        return [4 /*yield*/, this.generateFlatItem(currPoint, item)];
                    case 7:
                        itemFlat = _a.sent();
                        rowsFlats[rowsFlats.length - 1].addBrick(itemFlat);
                        currPoint.xLeft += itemFlat.xRight - itemFlat.xLeft;
                        yBot = Math.max(yBot, itemFlat.yBot);
                        _a.label = 8;
                    case 8:
                        currPoint.xLeft += this.controller.unitWidth;
                        _a.label = 9;
                    case 9:
                        i++;
                        return [3 /*break*/, 3];
                    case 10: return [2 /*return*/, rowsFlats];
                }
            });
        });
    };
    FlatFile.IMAGE_GAP_SCALE = 0.195;
    FlatFile.TEXT_MIN_SCALE = 5.0;
    FlatFile.DEFAULT_IMAGE_FIT = 'contain';
    return FlatFile;
}(__WEBPACK_IMPORTED_MODULE_1__flat_question__["a" /* FlatQuestion */]));

__WEBPACK_IMPORTED_MODULE_2__flat_repository__["a" /* FlatRepository */].getInstance().register('file', FlatFile);


/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_survey_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flat_question__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__flat_repository__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helper_survey__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlatHTML; });





var FlatHTML = /** @class */ (function (_super) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */])(FlatHTML, _super);
    function FlatHTML(survey, question, controller) {
        var _this = _super.call(this, survey, question, controller) || this;
        _this.survey = survey;
        return _this;
    }
    FlatHTML.prototype.chooseRender = function (html) {
        if (/<[^>]*style[^<]*>/.test(html) ||
            /<[^>]*table[^<]*>/.test(html) ||
            /&\w+;/.test(html)) {
            return 'image';
        }
        return 'standard';
    };
    FlatHTML.prototype.generateFlatsContent = function (point) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var renderAs, html, width, _a, url, aspect, height, _b, _c, _d;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        renderAs = this.question.renderAs;
                        if (renderAs === 'auto')
                            renderAs = this.controller.htmlRenderAs;
                        if (renderAs === 'auto')
                            renderAs = this.chooseRender(__WEBPACK_IMPORTED_MODULE_4__helper_survey__["a" /* SurveyHelper */].getLocString(this.question.locHtml));
                        html = __WEBPACK_IMPORTED_MODULE_4__helper_survey__["a" /* SurveyHelper */].createHtmlContainerBlock(__WEBPACK_IMPORTED_MODULE_4__helper_survey__["a" /* SurveyHelper */].getLocString(this.question.locHtml), this.controller, renderAs);
                        if (!(renderAs === 'image')) return [3 /*break*/, 3];
                        width = __WEBPACK_IMPORTED_MODULE_4__helper_survey__["a" /* SurveyHelper */].getPageAvailableWidth(this.controller);
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_4__helper_survey__["a" /* SurveyHelper */].htmlToImage(html, width, this.controller)];
                    case 1:
                        _a = _e.sent(), url = _a.url, aspect = _a.aspect;
                        height = width / aspect;
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_4__helper_survey__["a" /* SurveyHelper */].createImageFlat(point, this.question, this.controller, url, width, height)];
                    case 2: return [2 /*return*/, [_e.sent()]];
                    case 3:
                        _c = (_b = __WEBPACK_IMPORTED_MODULE_4__helper_survey__["a" /* SurveyHelper */]).splitHtmlRect;
                        _d = [this.controller];
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_4__helper_survey__["a" /* SurveyHelper */].createHTMLFlat(point, this.question, this.controller, html)];
                    case 4: return [2 /*return*/, [_c.apply(_b, _d.concat([_e.sent()]))]];
                }
            });
        });
    };
    return FlatHTML;
}(__WEBPACK_IMPORTED_MODULE_2__flat_question__["a" /* FlatQuestion */]));

__WEBPACK_IMPORTED_MODULE_1_survey_core__["Serializer"].removeProperty('html', 'renderAs');
__WEBPACK_IMPORTED_MODULE_1_survey_core__["Serializer"].addProperty('html', {
    name: 'renderAs',
    default: 'auto',
    choices: ['auto', 'standard', 'image']
});
__WEBPACK_IMPORTED_MODULE_3__flat_repository__["a" /* FlatRepository */].getInstance().register('html', FlatHTML);


/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__flat_question__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flat_repository__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helper_survey__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlatImage; });




var FlatImage = /** @class */ (function (_super) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */])(FlatImage, _super);
    function FlatImage(survey, question, controller) {
        var _this = _super.call(this, survey, question, controller) || this;
        _this.survey = survey;
        _this.question = question;
        return _this;
    }
    FlatImage.prototype.isSizeEmpty = function (val) {
        return !val || val === 'auto';
    };
    FlatImage.prototype.getCorrectImageSize = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var widthPt, heightPt, imageSize;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        widthPt = __WEBPACK_IMPORTED_MODULE_3__helper_survey__["a" /* SurveyHelper */].pxToPt(this.question.imageWidth);
                        heightPt = __WEBPACK_IMPORTED_MODULE_3__helper_survey__["a" /* SurveyHelper */].pxToPt(this.question.imageHeight);
                        if (!(this.isSizeEmpty(this.question.imageWidth) || this.isSizeEmpty(this.question.imageHeight))) return [3 /*break*/, 2];
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_3__helper_survey__["a" /* SurveyHelper */].getImageSize(this.question.imageLink)];
                    case 1:
                        imageSize = _a.sent();
                        if (!this.isSizeEmpty(this.question.imageWidth)) {
                            if (imageSize && imageSize.width) {
                                heightPt = imageSize.height * widthPt / imageSize.width;
                            }
                            else {
                                heightPt = 0;
                            }
                        }
                        if (!this.isSizeEmpty(this.question.imageHeight)) {
                            if (imageSize && imageSize.height) {
                                widthPt = imageSize.width * heightPt / imageSize.height;
                            }
                            else {
                                widthPt = 0;
                            }
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/, { width: widthPt, height: heightPt }];
                }
            });
        });
    };
    FlatImage.prototype.generateFlatsContent = function (point) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var imageSize;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getCorrectImageSize()];
                    case 1:
                        imageSize = _a.sent();
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_3__helper_survey__["a" /* SurveyHelper */].createImageFlat(point, this.question, this.controller, this.question.imageLink, imageSize.width, imageSize.height)];
                    case 2: return [2 /*return*/, [_a.sent()]];
                }
            });
        });
    };
    return FlatImage;
}(__WEBPACK_IMPORTED_MODULE_1__flat_question__["a" /* FlatQuestion */]));

__WEBPACK_IMPORTED_MODULE_2__flat_repository__["a" /* FlatRepository */].getInstance().register('image', FlatImage);


/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__flat_question__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flat_repository__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pdf_render_pdf_text__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__flat_radiogroup__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pdf_render_pdf_checkitem__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pdf_render_pdf_composite__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__helper_survey__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlatImagePicker; });








var FlatImagePicker = /** @class */ (function (_super) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */])(FlatImagePicker, _super);
    function FlatImagePicker(survey, question, controller) {
        var _this = _super.call(this, survey, question, controller) || this;
        _this.survey = survey;
        _this.question = question;
        return _this;
    }
    FlatImagePicker.prototype.generateFlatItem = function (point, item, index) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var pageAvailableWidth, imageFlat, compositeFlat, buttonPoint, labelFlat, height, buttonRect;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        pageAvailableWidth = __WEBPACK_IMPORTED_MODULE_7__helper_survey__["a" /* SurveyHelper */].getPageAvailableWidth(this.controller);
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_7__helper_survey__["a" /* SurveyHelper */].createImageFlat(point, this.question, this.controller, item.imageLink, pageAvailableWidth, pageAvailableWidth / __WEBPACK_IMPORTED_MODULE_7__helper_survey__["a" /* SurveyHelper */].IMAGEPICKER_RATIO)];
                    case 1:
                        imageFlat = _a.sent();
                        compositeFlat = new __WEBPACK_IMPORTED_MODULE_6__pdf_render_pdf_composite__["a" /* CompositeBrick */](imageFlat);
                        buttonPoint = __WEBPACK_IMPORTED_MODULE_7__helper_survey__["a" /* SurveyHelper */].createPoint(compositeFlat);
                        if (!this.question.showLabel) return [3 /*break*/, 3];
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_7__helper_survey__["a" /* SurveyHelper */].createTextFlat(buttonPoint, this.question, this.controller, item.text || item.value, __WEBPACK_IMPORTED_MODULE_3__pdf_render_pdf_text__["a" /* TextBrick */])];
                    case 2:
                        labelFlat = _a.sent();
                        compositeFlat.addBrick(labelFlat);
                        buttonPoint = __WEBPACK_IMPORTED_MODULE_7__helper_survey__["a" /* SurveyHelper */].createPoint(labelFlat);
                        _a.label = 3;
                    case 3:
                        height = this.controller.unitHeight;
                        buttonRect = __WEBPACK_IMPORTED_MODULE_7__helper_survey__["a" /* SurveyHelper */].createRect(buttonPoint, pageAvailableWidth, height);
                        if (this.question.multiSelect) {
                            compositeFlat.addBrick(new __WEBPACK_IMPORTED_MODULE_5__pdf_render_pdf_checkitem__["a" /* CheckItemBrick */](this.controller, buttonRect, this.question.id + 'index' + index, { readOnly: this.question.isReadOnly || !item.isEnabled, question: this.question, item: item, checked: this.question.value.indexOf(item.value) !== -1, index: index }));
                        }
                        else {
                            compositeFlat.addBrick(this.radio.generateFlatItem(buttonRect, item, index));
                        }
                        return [2 /*return*/, compositeFlat];
                }
            });
        });
    };
    FlatImagePicker.prototype.generateFlatsContent = function (point) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var rowsFlats, colWidth, cols, count, rows, currPoint, i, yBot, currMarginLeft, j, index, itemFlat;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.radio = this.question.multiSelect ? null :
                            new __WEBPACK_IMPORTED_MODULE_4__flat_radiogroup__["a" /* FlatRadiogroup */](this.survey, this.question, this.controller);
                        rowsFlats = [new __WEBPACK_IMPORTED_MODULE_6__pdf_render_pdf_composite__["a" /* CompositeBrick */]()];
                        colWidth = __WEBPACK_IMPORTED_MODULE_7__helper_survey__["a" /* SurveyHelper */].getImagePickerAvailableWidth(this.controller) / __WEBPACK_IMPORTED_MODULE_7__helper_survey__["a" /* SurveyHelper */].IMAGEPICKER_COUNT;
                        cols = ~~(__WEBPACK_IMPORTED_MODULE_7__helper_survey__["a" /* SurveyHelper */].
                            getPageAvailableWidth(this.controller) / colWidth) || 1;
                        count = this.question.visibleChoices.length;
                        cols = cols <= count ? cols : count;
                        rows = ~~(Math.ceil(count / cols));
                        currPoint = __WEBPACK_IMPORTED_MODULE_7__helper_survey__["a" /* SurveyHelper */].clone(point);
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < rows)) return [3 /*break*/, 7];
                        yBot = currPoint.yTop;
                        this.controller.pushMargins();
                        currMarginLeft = this.controller.margins.left;
                        j = 0;
                        _a.label = 2;
                    case 2:
                        if (!(j < cols)) return [3 /*break*/, 5];
                        index = i * cols + j;
                        if (index == count)
                            return [3 /*break*/, 5];
                        this.controller.margins.left = currMarginLeft;
                        this.controller.margins.right = this.controller.paperWidth -
                            currMarginLeft - colWidth;
                        currMarginLeft = this.controller.paperWidth -
                            this.controller.margins.right + this.controller.unitWidth;
                        currPoint.xLeft = this.controller.margins.left;
                        return [4 /*yield*/, this.generateFlatItem(currPoint, this.question.visibleChoices[index], index)];
                    case 3:
                        itemFlat = _a.sent();
                        rowsFlats[rowsFlats.length - 1].addBrick(itemFlat);
                        yBot = Math.max(yBot, itemFlat.yBot);
                        _a.label = 4;
                    case 4:
                        j++;
                        return [3 /*break*/, 2];
                    case 5:
                        this.controller.popMargins();
                        currPoint.xLeft = point.xLeft;
                        currPoint.yTop = yBot;
                        if (i !== rows - 1) {
                            rowsFlats[rowsFlats.length - 1].addBrick(__WEBPACK_IMPORTED_MODULE_7__helper_survey__["a" /* SurveyHelper */].createRowlineFlat(currPoint, this.controller));
                            currPoint.yTop += __WEBPACK_IMPORTED_MODULE_7__helper_survey__["a" /* SurveyHelper */].EPSILON;
                            rowsFlats.push(new __WEBPACK_IMPORTED_MODULE_6__pdf_render_pdf_composite__["a" /* CompositeBrick */]());
                        }
                        _a.label = 6;
                    case 6:
                        i++;
                        return [3 /*break*/, 1];
                    case 7: return [2 /*return*/, rowsFlats];
                }
            });
        });
    };
    return FlatImagePicker;
}(__WEBPACK_IMPORTED_MODULE_1__flat_question__["a" /* FlatQuestion */]));

__WEBPACK_IMPORTED_MODULE_2__flat_repository__["a" /* FlatRepository */].getInstance().register('imagepicker', FlatImagePicker);


/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_survey_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flat_question__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__flat_radiogroup__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__flat_repository__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pdf_render_pdf_text__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pdf_render_pdf_composite__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__helper_survey__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlatMatrix; });
/* unused harmony export FlatMatrixRow */








var FlatMatrix = /** @class */ (function (_super) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */])(FlatMatrix, _super);
    function FlatMatrix(survey, question, controller) {
        var _this = _super.call(this, survey, question, controller) || this;
        _this.survey = survey;
        _this.controller = controller;
        _this.question = question;
        return _this;
    }
    FlatMatrix.prototype.generateFlatsHeader = function (point) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var headers, currPoint, i, _a, _b, compositeBrick;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        headers = [];
                        currPoint = __WEBPACK_IMPORTED_MODULE_7__helper_survey__["a" /* SurveyHelper */].clone(point);
                        if (this.question.hasRows) {
                            currPoint.xLeft += this.rowTitleWidth + this.controller.unitWidth * __WEBPACK_IMPORTED_MODULE_7__helper_survey__["a" /* SurveyHelper */].GAP_BETWEEN_COLUMNS;
                        }
                        i = 0;
                        _c.label = 1;
                    case 1:
                        if (!(i < this.question.visibleColumns.length)) return [3 /*break*/, 4];
                        this.controller.pushMargins();
                        this.controller.margins.left = currPoint.xLeft;
                        this.controller.margins.right += (__WEBPACK_IMPORTED_MODULE_7__helper_survey__["a" /* SurveyHelper */].getPageAvailableWidth(this.controller) - this.columnWidth);
                        _b = (_a = headers).push;
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_7__helper_survey__["a" /* SurveyHelper */].createBoldTextFlat(currPoint, this.question, this.controller, this.question.visibleColumns[i].locText)];
                    case 2:
                        _b.apply(_a, [_c.sent()]);
                        currPoint.xLeft += this.columnWidth + this.controller.unitWidth * __WEBPACK_IMPORTED_MODULE_7__helper_survey__["a" /* SurveyHelper */].GAP_BETWEEN_COLUMNS;
                        this.controller.popMargins();
                        _c.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4:
                        compositeBrick = new (__WEBPACK_IMPORTED_MODULE_6__pdf_render_pdf_composite__["a" /* CompositeBrick */].bind.apply(__WEBPACK_IMPORTED_MODULE_6__pdf_render_pdf_composite__["a" /* CompositeBrick */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __spreadArray */])([void 0], headers, false)))();
                        return [2 /*return*/, [compositeBrick, __WEBPACK_IMPORTED_MODULE_7__helper_survey__["a" /* SurveyHelper */].createRowlineFlat(__WEBPACK_IMPORTED_MODULE_7__helper_survey__["a" /* SurveyHelper */].createPoint(compositeBrick), this.controller)]];
                }
            });
        });
    };
    FlatMatrix.prototype.generateFlatsRows = function (point, isVertical) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var cells, currPoint, i, key, flatsRow;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cells = [];
                        currPoint = __WEBPACK_IMPORTED_MODULE_7__helper_survey__["a" /* SurveyHelper */].clone(point);
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < this.question.visibleRows.length)) return [3 /*break*/, 4];
                        key = 'row' + i;
                        return [4 /*yield*/, new FlatMatrixRow(this.survey, this.question, this.controller, this.question.visibleRows[i], i, key, i == 0, isVertical, this.rowTitleWidth, this.columnWidth).generateFlatsContent(currPoint)];
                    case 2:
                        flatsRow = _a.sent();
                        currPoint = __WEBPACK_IMPORTED_MODULE_7__helper_survey__["a" /* SurveyHelper */].createPoint(__WEBPACK_IMPORTED_MODULE_7__helper_survey__["a" /* SurveyHelper */].mergeRects.apply(__WEBPACK_IMPORTED_MODULE_7__helper_survey__["a" /* SurveyHelper */], flatsRow));
                        currPoint.yTop += this.controller.unitHeight * FlatMatrix.GAP_BETWEEN_ROWS;
                        cells.push.apply(cells, flatsRow);
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/, cells];
                }
            });
        });
    };
    FlatMatrix.prototype.calculateColumnsWidthes = function () {
        var availableWidth = __WEBPACK_IMPORTED_MODULE_7__helper_survey__["a" /* SurveyHelper */].getPageAvailableWidth(this.controller);
        if (this.question.hasRows && this.question.rowTitleWidth) {
            this.controller.pushMargins();
            this.rowTitleWidth = __WEBPACK_IMPORTED_MODULE_7__helper_survey__["a" /* SurveyHelper */].parseWidth(this.question.rowTitleWidth, availableWidth);
            this.controller.margins.left += (this.rowTitleWidth + this.controller.unitWidth * __WEBPACK_IMPORTED_MODULE_7__helper_survey__["a" /* SurveyHelper */].GAP_BETWEEN_COLUMNS);
            this.columnWidth = __WEBPACK_IMPORTED_MODULE_7__helper_survey__["a" /* SurveyHelper */].getColumnWidth(this.controller, this.question.visibleColumns.length);
            this.controller.popMargins();
        }
        else {
            this.columnWidth = this.rowTitleWidth = __WEBPACK_IMPORTED_MODULE_7__helper_survey__["a" /* SurveyHelper */].getColumnWidth(this.controller, this.question.visibleColumns.length + (this.question.hasRows ? 1 : 0));
        }
    };
    FlatMatrix.prototype.generateFlatsContent = function (point) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var isVertical, currPoint, cells, headers, _a, _b, _c;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        this.calculateColumnsWidthes();
                        isVertical = this.question.renderAs === 'list' || this.controller.matrixRenderAs === 'list' ||
                            this.columnWidth < this.controller.measureText(__WEBPACK_IMPORTED_MODULE_7__helper_survey__["a" /* SurveyHelper */].MATRIX_COLUMN_WIDTH).width;
                        currPoint = __WEBPACK_IMPORTED_MODULE_7__helper_survey__["a" /* SurveyHelper */].clone(point);
                        cells = [];
                        if (!(!isVertical && this.question.showHeader && this.question.visibleColumns.length != 0)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.generateFlatsHeader(currPoint)];
                    case 1:
                        headers = _d.sent();
                        currPoint = __WEBPACK_IMPORTED_MODULE_7__helper_survey__["a" /* SurveyHelper */].createPoint(__WEBPACK_IMPORTED_MODULE_7__helper_survey__["a" /* SurveyHelper */].mergeRects.apply(__WEBPACK_IMPORTED_MODULE_7__helper_survey__["a" /* SurveyHelper */], headers));
                        currPoint.yTop += FlatMatrix.GAP_BETWEEN_ROWS * this.controller.unitHeight;
                        cells.push.apply(cells, headers);
                        _d.label = 2;
                    case 2:
                        _b = (_a = cells.push).apply;
                        _c = [cells];
                        return [4 /*yield*/, this.generateFlatsRows(currPoint, isVertical)];
                    case 3:
                        _b.apply(_a, _c.concat([_d.sent()]));
                        return [2 /*return*/, cells];
                }
            });
        });
    };
    FlatMatrix.GAP_BETWEEN_ROWS = 0.5;
    return FlatMatrix;
}(__WEBPACK_IMPORTED_MODULE_2__flat_question__["a" /* FlatQuestion */]));

var FlatMatrixRow = /** @class */ (function (_super) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */])(FlatMatrixRow, _super);
    function FlatMatrixRow(survey, question, controller, row, rowIndex, key, isFirst, isVertical, rowTitleWidth, columnWidth) {
        if (isFirst === void 0) { isFirst = false; }
        if (isVertical === void 0) { isVertical = false; }
        var _this = _super.call(this, survey, question, controller) || this;
        _this.survey = survey;
        _this.controller = controller;
        _this.row = row;
        _this.rowIndex = rowIndex;
        _this.key = key;
        _this.isFirst = isFirst;
        _this.isVertical = isVertical;
        _this.rowTitleWidth = rowTitleWidth;
        _this.columnWidth = columnWidth;
        _this.questionMatrix = question;
        return _this;
    }
    FlatMatrixRow.prototype.generateFlatsContent = function (point) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var _a;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.isVertical) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.generateFlatsVerticallyCells(point)];
                    case 1:
                        _a = _b.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.generateFlatsHorizontallyCells(point)];
                    case 3:
                        _a = _b.sent();
                        _b.label = 4;
                    case 4: return [2 /*return*/, _a];
                }
            });
        });
    };
    FlatMatrixRow.prototype.generateTextComposite = function (point, column, index) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var currPoint, checked, itemRect, radioFlat, cellTextFlat;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        currPoint = __WEBPACK_IMPORTED_MODULE_7__helper_survey__["a" /* SurveyHelper */].clone(point);
                        checked = this.row.value == column.value;
                        itemRect = __WEBPACK_IMPORTED_MODULE_7__helper_survey__["a" /* SurveyHelper */].createRect(currPoint, __WEBPACK_IMPORTED_MODULE_7__helper_survey__["a" /* SurveyHelper */].getPageAvailableWidth(this.controller), this.controller.unitHeight);
                        radioFlat = this.generateFlatItem(itemRect, column, index, this.key, checked, { row: this.row, rowIndex: this.rowIndex });
                        currPoint.yTop = radioFlat.yBot + this.controller.unitHeight * __WEBPACK_IMPORTED_MODULE_7__helper_survey__["a" /* SurveyHelper */].GAP_BETWEEN_ITEM_TEXT;
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_7__helper_survey__["a" /* SurveyHelper */].createTextFlat(currPoint, this.questionMatrix, this.controller, this.questionMatrix.getCellDisplayLocText(this.row.name, column), __WEBPACK_IMPORTED_MODULE_5__pdf_render_pdf_text__["a" /* TextBrick */])];
                    case 1:
                        cellTextFlat = _a.sent();
                        return [2 /*return*/, new __WEBPACK_IMPORTED_MODULE_6__pdf_render_pdf_composite__["a" /* CompositeBrick */](radioFlat, cellTextFlat)];
                }
            });
        });
    };
    FlatMatrixRow.prototype.generateItemCompoiste = function (point, column, index) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var currPoint, checked, itemRect, radioFlat, radioText;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        currPoint = __WEBPACK_IMPORTED_MODULE_7__helper_survey__["a" /* SurveyHelper */].clone(point);
                        checked = this.row.value == column.value;
                        itemRect = __WEBPACK_IMPORTED_MODULE_7__helper_survey__["a" /* SurveyHelper */].createRect(currPoint, this.controller.unitHeight, this.controller.unitHeight);
                        radioFlat = this.generateFlatItem(__WEBPACK_IMPORTED_MODULE_7__helper_survey__["a" /* SurveyHelper */].moveRect(__WEBPACK_IMPORTED_MODULE_7__helper_survey__["a" /* SurveyHelper */].scaleRect(itemRect, __WEBPACK_IMPORTED_MODULE_7__helper_survey__["a" /* SurveyHelper */].SELECT_ITEM_FLAT_SCALE), itemRect.xLeft), column, index, this.key, checked, { row: this.row, rowIndex: this.rowIndex });
                        currPoint.xLeft = radioFlat.xRight + this.controller.unitWidth * __WEBPACK_IMPORTED_MODULE_7__helper_survey__["a" /* SurveyHelper */].GAP_BETWEEN_ITEM_TEXT;
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_7__helper_survey__["a" /* SurveyHelper */].createTextFlat(currPoint, this.questionMatrix, this.controller, column.locText, __WEBPACK_IMPORTED_MODULE_5__pdf_render_pdf_text__["a" /* TextBrick */])];
                    case 1:
                        radioText = _a.sent();
                        return [2 /*return*/, new __WEBPACK_IMPORTED_MODULE_6__pdf_render_pdf_composite__["a" /* CompositeBrick */](radioFlat, radioText)];
                }
            });
        });
    };
    FlatMatrixRow.prototype.generateFlatsHorizontallyCells = function (point) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var cells, currPoint, _a, _b, i, column, checked, _c, _d, itemRect, compositeBrick;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        cells = [];
                        currPoint = __WEBPACK_IMPORTED_MODULE_7__helper_survey__["a" /* SurveyHelper */].clone(point);
                        if (!this.questionMatrix.hasRows) return [3 /*break*/, 2];
                        this.controller.pushMargins();
                        currPoint.xLeft = this.controller.margins.left;
                        this.controller.margins.right += (__WEBPACK_IMPORTED_MODULE_7__helper_survey__["a" /* SurveyHelper */].getPageAvailableWidth(this.controller) - this.rowTitleWidth);
                        _b = (_a = cells).push;
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_7__helper_survey__["a" /* SurveyHelper */].createTextFlat(currPoint, this.questionMatrix, this.controller, this.row.locText, __WEBPACK_IMPORTED_MODULE_5__pdf_render_pdf_text__["a" /* TextBrick */])];
                    case 1:
                        _b.apply(_a, [_e.sent()]);
                        currPoint.xLeft += this.rowTitleWidth + this.controller.unitWidth * __WEBPACK_IMPORTED_MODULE_7__helper_survey__["a" /* SurveyHelper */].GAP_BETWEEN_COLUMNS;
                        this.controller.popMargins();
                        _e.label = 2;
                    case 2:
                        i = 0;
                        _e.label = 3;
                    case 3:
                        if (!(i < this.questionMatrix.visibleColumns.length)) return [3 /*break*/, 8];
                        column = this.questionMatrix.visibleColumns[i];
                        checked = this.row.value == column.value;
                        this.controller.pushMargins();
                        this.controller.margins.left = currPoint.xLeft;
                        this.controller.margins.right += (__WEBPACK_IMPORTED_MODULE_7__helper_survey__["a" /* SurveyHelper */].getPageAvailableWidth(this.controller) - this.columnWidth);
                        if (!this.questionMatrix.hasCellText) return [3 /*break*/, 5];
                        _d = (_c = cells).push;
                        return [4 /*yield*/, this.generateTextComposite(currPoint, column, i)];
                    case 4:
                        _d.apply(_c, [_e.sent()]);
                        return [3 /*break*/, 6];
                    case 5:
                        itemRect = __WEBPACK_IMPORTED_MODULE_7__helper_survey__["a" /* SurveyHelper */].createRect(currPoint, this.controller.unitHeight, this.controller.unitHeight);
                        cells.push(this.generateFlatItem(__WEBPACK_IMPORTED_MODULE_7__helper_survey__["a" /* SurveyHelper */].moveRect(__WEBPACK_IMPORTED_MODULE_7__helper_survey__["a" /* SurveyHelper */].scaleRect(itemRect, __WEBPACK_IMPORTED_MODULE_7__helper_survey__["a" /* SurveyHelper */].SELECT_ITEM_FLAT_SCALE), currPoint.xLeft), column, i, this.key, checked, { row: this.row, rowIndex: this.rowIndex }));
                        _e.label = 6;
                    case 6:
                        currPoint.xLeft += this.columnWidth + this.controller.unitWidth * __WEBPACK_IMPORTED_MODULE_7__helper_survey__["a" /* SurveyHelper */].GAP_BETWEEN_COLUMNS;
                        this.controller.popMargins();
                        _e.label = 7;
                    case 7:
                        i++;
                        return [3 /*break*/, 3];
                    case 8:
                        compositeBrick = new (__WEBPACK_IMPORTED_MODULE_6__pdf_render_pdf_composite__["a" /* CompositeBrick */].bind.apply(__WEBPACK_IMPORTED_MODULE_6__pdf_render_pdf_composite__["a" /* CompositeBrick */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __spreadArray */])([void 0], cells, false)))();
                        return [2 /*return*/, [compositeBrick, __WEBPACK_IMPORTED_MODULE_7__helper_survey__["a" /* SurveyHelper */].createRowlineFlat(__WEBPACK_IMPORTED_MODULE_7__helper_survey__["a" /* SurveyHelper */].createPoint(compositeBrick), this.controller)]];
                }
            });
        });
    };
    FlatMatrixRow.prototype.generateFlatsVerticallyCells = function (point) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var cells, currPoint, rowTextFlat, _a, _b, _c, compositeBrick;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        cells = [];
                        currPoint = __WEBPACK_IMPORTED_MODULE_7__helper_survey__["a" /* SurveyHelper */].clone(point);
                        if (!this.questionMatrix.hasRows) return [3 /*break*/, 2];
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_7__helper_survey__["a" /* SurveyHelper */].createTextFlat(currPoint, this.questionMatrix, this.controller, this.row.locText, __WEBPACK_IMPORTED_MODULE_5__pdf_render_pdf_text__["a" /* TextBrick */])];
                    case 1:
                        rowTextFlat = _d.sent();
                        currPoint.yTop = rowTextFlat.yBot + __WEBPACK_IMPORTED_MODULE_2__flat_question__["a" /* FlatQuestion */].CONTENT_GAP_VERT_SCALE * this.controller.unitHeight;
                        cells.push(rowTextFlat);
                        _d.label = 2;
                    case 2:
                        this.generateFlatComposite = (this.questionMatrix.hasCellText) ? this.generateTextComposite : this.generateItemCompoiste;
                        _b = (_a = cells.push).apply;
                        _c = [cells];
                        return [4 /*yield*/, this.generateVerticallyItems(currPoint, this.questionMatrix.visibleColumns)];
                    case 3:
                        _b.apply(_a, _c.concat([_d.sent()]));
                        compositeBrick = new (__WEBPACK_IMPORTED_MODULE_6__pdf_render_pdf_composite__["a" /* CompositeBrick */].bind.apply(__WEBPACK_IMPORTED_MODULE_6__pdf_render_pdf_composite__["a" /* CompositeBrick */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __spreadArray */])([void 0], cells, false)))();
                        return [2 /*return*/, [compositeBrick, __WEBPACK_IMPORTED_MODULE_7__helper_survey__["a" /* SurveyHelper */].createRowlineFlat(__WEBPACK_IMPORTED_MODULE_7__helper_survey__["a" /* SurveyHelper */].createPoint(compositeBrick), this.controller)]];
                }
            });
        });
    };
    return FlatMatrixRow;
}(__WEBPACK_IMPORTED_MODULE_3__flat_radiogroup__["a" /* FlatRadiogroup */]));

__WEBPACK_IMPORTED_MODULE_1_survey_core__["Serializer"].removeProperty('matrix', 'renderAs');
__WEBPACK_IMPORTED_MODULE_1_survey_core__["Serializer"].addProperty('matrix', {
    name: 'renderAs',
    default: 'auto',
    choices: ['auto', 'list']
});
__WEBPACK_IMPORTED_MODULE_4__flat_repository__["a" /* FlatRepository */].getInstance().register('matrix', FlatMatrix);


/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_survey_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flat_repository__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__flat_matrixmultiple__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlatMatrixDynamic; });




var FlatMatrixDynamic = /** @class */ (function (_super) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */])(FlatMatrixDynamic, _super);
    function FlatMatrixDynamic(survey, question, controller) {
        var _this = _super.call(this, survey, question, controller, false) || this;
        _this.survey = survey;
        return _this;
    }
    return FlatMatrixDynamic;
}(__WEBPACK_IMPORTED_MODULE_3__flat_matrixmultiple__["a" /* FlatMatrixMultiple */]));

__WEBPACK_IMPORTED_MODULE_1_survey_core__["Serializer"].removeProperty('matrixdynamic', 'renderAs');
__WEBPACK_IMPORTED_MODULE_1_survey_core__["Serializer"].addProperty('matrixdynamic', {
    name: 'renderAs',
    default: 'auto',
    choices: ['auto', 'list']
});
__WEBPACK_IMPORTED_MODULE_2__flat_repository__["a" /* FlatRepository */].getInstance().register('matrixdynamic', FlatMatrixDynamic);


/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__flat_question__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flat_repository__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pdf_render_pdf_composite__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helper_survey__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlatMultipleText; });





var FlatMultipleText = /** @class */ (function (_super) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */])(FlatMultipleText, _super);
    function FlatMultipleText(survey, question, controller) {
        var _this = _super.call(this, survey, question, controller) || this;
        _this.survey = survey;
        _this.controller = controller;
        _this.question = question;
        return _this;
    }
    FlatMultipleText.prototype.getVisibleRows = function () {
        return this.question.getRows().filter(function (row) { return row.isVisible; });
    };
    FlatMultipleText.prototype.generateFlatItem = function (point, row_index, col_index, item) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var colWidth, compositeFlat, _a, flatMultipleTextItemQuestion, itemPoint, _b, _c, _d;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        colWidth = __WEBPACK_IMPORTED_MODULE_4__helper_survey__["a" /* SurveyHelper */].getPageAvailableWidth(this.controller);
                        this.controller.pushMargins();
                        this.controller.margins.right = this.controller.paperWidth -
                            this.controller.margins.left - colWidth * __WEBPACK_IMPORTED_MODULE_4__helper_survey__["a" /* SurveyHelper */].MULTIPLETEXT_TEXT_PERS;
                        _a = __WEBPACK_IMPORTED_MODULE_3__pdf_render_pdf_composite__["a" /* CompositeBrick */].bind;
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_4__helper_survey__["a" /* SurveyHelper */].
                                createBoldTextFlat(point, this.question, this.controller, item.locTitle)];
                    case 1:
                        compositeFlat = new (_a.apply(__WEBPACK_IMPORTED_MODULE_3__pdf_render_pdf_composite__["a" /* CompositeBrick */], [void 0, _e.sent()]))();
                        this.controller.popMargins();
                        flatMultipleTextItemQuestion = __WEBPACK_IMPORTED_MODULE_2__flat_repository__["a" /* FlatRepository */].getInstance().create(this.survey, item.editor, this.controller, 'text');
                        itemPoint = __WEBPACK_IMPORTED_MODULE_4__helper_survey__["a" /* SurveyHelper */].createTextFieldRect({
                            xLeft: point.xLeft + colWidth * __WEBPACK_IMPORTED_MODULE_4__helper_survey__["a" /* SurveyHelper */].MULTIPLETEXT_TEXT_PERS, yTop: point.yTop
                        }, this.controller);
                        _c = (_b = compositeFlat.addBrick).apply;
                        _d = [compositeFlat];
                        return [4 /*yield*/, flatMultipleTextItemQuestion.generateFlatsContent(itemPoint)];
                    case 2:
                        _c.apply(_b, _d.concat([_e.sent()]));
                        return [2 /*return*/, compositeFlat];
                }
            });
        });
    };
    FlatMultipleText.prototype.generateFlatsContent = function (point) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var rowsFlats, currPoint, rows, i, yBot, j, itemFlat;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        rowsFlats = [];
                        currPoint = __WEBPACK_IMPORTED_MODULE_4__helper_survey__["a" /* SurveyHelper */].clone(point);
                        rows = this.getVisibleRows();
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < rows.length)) return [3 /*break*/, 7];
                        rowsFlats.push(new __WEBPACK_IMPORTED_MODULE_3__pdf_render_pdf_composite__["a" /* CompositeBrick */]());
                        yBot = currPoint.yTop;
                        this.controller.pushMargins();
                        j = 0;
                        _a.label = 2;
                    case 2:
                        if (!(j < rows[i].cells.length)) return [3 /*break*/, 5];
                        this.controller.pushMargins();
                        __WEBPACK_IMPORTED_MODULE_4__helper_survey__["a" /* SurveyHelper */].setColumnMargins(this.controller, this.question.colCount, j);
                        currPoint.xLeft = this.controller.margins.left;
                        return [4 /*yield*/, this.generateFlatItem(currPoint, i, j, rows[i].cells[j].item)];
                    case 3:
                        itemFlat = _a.sent();
                        rowsFlats[rowsFlats.length - 1].addBrick(itemFlat);
                        yBot = Math.max(yBot, itemFlat.yBot);
                        this.controller.popMargins();
                        _a.label = 4;
                    case 4:
                        j++;
                        return [3 /*break*/, 2];
                    case 5:
                        this.controller.popMargins();
                        currPoint.xLeft = point.xLeft;
                        currPoint.yTop = yBot;
                        rowsFlats[rowsFlats.length - 1].addBrick(__WEBPACK_IMPORTED_MODULE_4__helper_survey__["a" /* SurveyHelper */].createRowlineFlat(currPoint, this.controller));
                        currPoint.yTop += __WEBPACK_IMPORTED_MODULE_4__helper_survey__["a" /* SurveyHelper */].EPSILON;
                        currPoint.yTop += this.controller.unitHeight * FlatMultipleText.ROWS_GAP_SCALE;
                        _a.label = 6;
                    case 6:
                        i++;
                        return [3 /*break*/, 1];
                    case 7: return [2 /*return*/, rowsFlats];
                }
            });
        });
    };
    FlatMultipleText.ROWS_GAP_SCALE = 0.195;
    return FlatMultipleText;
}(__WEBPACK_IMPORTED_MODULE_1__flat_question__["a" /* FlatQuestion */]));

__WEBPACK_IMPORTED_MODULE_2__flat_repository__["a" /* FlatRepository */].getInstance().register('multipletext', FlatMultipleText);


/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__flat_survey__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flat_question__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__flat_repository__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helper_survey__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlatPanelDynamic; });





var FlatPanelDynamic = /** @class */ (function (_super) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */])(FlatPanelDynamic, _super);
    function FlatPanelDynamic(survey, question, controller) {
        var _this = _super.call(this, survey, question, controller) || this;
        _this.survey = survey;
        _this.controller = controller;
        _this.question = question;
        return _this;
    }
    FlatPanelDynamic.prototype.generateFlatsContent = function (point) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var flats, currPoint, _i, _a, panel, panelFlats;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        flats = [];
                        currPoint = __WEBPACK_IMPORTED_MODULE_4__helper_survey__["a" /* SurveyHelper */].clone(point);
                        _i = 0, _a = this.question.panels;
                        _b.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 4];
                        panel = _a[_i];
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_1__flat_survey__["a" /* FlatSurvey */].generateFlatsPanel(this.survey, this.controller, panel, currPoint)];
                    case 2:
                        panelFlats = _b.sent();
                        if (panelFlats.length !== 0) {
                            currPoint.yTop = __WEBPACK_IMPORTED_MODULE_4__helper_survey__["a" /* SurveyHelper */].mergeRects.apply(__WEBPACK_IMPORTED_MODULE_4__helper_survey__["a" /* SurveyHelper */], panelFlats).yBot;
                            currPoint.yTop += this.controller.unitHeight * FlatPanelDynamic.GAP_BETWEEN_PANELS;
                            flats.push.apply(flats, panelFlats);
                        }
                        _b.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/, flats];
                }
            });
        });
    };
    FlatPanelDynamic.GAP_BETWEEN_PANELS = 0.75;
    return FlatPanelDynamic;
}(__WEBPACK_IMPORTED_MODULE_2__flat_question__["a" /* FlatQuestion */]));

__WEBPACK_IMPORTED_MODULE_3__flat_repository__["a" /* FlatRepository */].getInstance().register('paneldynamic', FlatPanelDynamic);


/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__flat_question__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flat_repository__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pdf_render_pdf_text__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pdf_render_pdf_rankingitem__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pdf_render_pdf_composite__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__helper_survey__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pdf_render_pdf_coloredbrick__ = __webpack_require__(59);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlatRanking; });








var FlatRanking = /** @class */ (function (_super) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */])(FlatRanking, _super);
    function FlatRanking(survey, question, controller) {
        var _this = _super.call(this, survey, question, controller) || this;
        _this.survey = survey;
        _this.controller = controller;
        _this.question = question;
        return _this;
    }
    FlatRanking.prototype.generateFlatComposite = function (point, item, index, unrankedItem) {
        if (unrankedItem === void 0) { unrankedItem = false; }
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var itemRect, itemScaledRect, itemFlat, textPoint, textFlat;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        itemRect = __WEBPACK_IMPORTED_MODULE_6__helper_survey__["a" /* SurveyHelper */].createRect(point, this.controller.unitWidth, this.controller.unitHeight);
                        itemScaledRect = __WEBPACK_IMPORTED_MODULE_6__helper_survey__["a" /* SurveyHelper */].moveRect(__WEBPACK_IMPORTED_MODULE_6__helper_survey__["a" /* SurveyHelper */].scaleRect(itemRect, __WEBPACK_IMPORTED_MODULE_6__helper_survey__["a" /* SurveyHelper */].SELECT_ITEM_FLAT_SCALE), point.xLeft);
                        itemFlat = new __WEBPACK_IMPORTED_MODULE_4__pdf_render_pdf_rankingitem__["a" /* RankingItemBrick */](this.question, this.controller, itemScaledRect, unrankedItem ? '-' : this.question.getNumberByIndex(index));
                        textPoint = __WEBPACK_IMPORTED_MODULE_6__helper_survey__["a" /* SurveyHelper */].clone(point);
                        textPoint.xLeft = itemFlat.xRight + this.controller.unitWidth * __WEBPACK_IMPORTED_MODULE_6__helper_survey__["a" /* SurveyHelper */].GAP_BETWEEN_ITEM_TEXT;
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_6__helper_survey__["a" /* SurveyHelper */].createTextFlat(textPoint, this.question, this.controller, item.locText, __WEBPACK_IMPORTED_MODULE_3__pdf_render_pdf_text__["a" /* TextBrick */])];
                    case 1:
                        textFlat = _a.sent();
                        return [2 /*return*/, new __WEBPACK_IMPORTED_MODULE_5__pdf_render_pdf_composite__["a" /* CompositeBrick */](itemFlat, textFlat)];
                }
            });
        });
    };
    FlatRanking.prototype.generateChoicesColumn = function (point, choices, unrankedChoices) {
        if (unrankedChoices === void 0) { unrankedChoices = false; }
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var currPoint, flats, i, itemFlat;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        currPoint = __WEBPACK_IMPORTED_MODULE_6__helper_survey__["a" /* SurveyHelper */].clone(point);
                        flats = [];
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < choices.length)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.generateFlatComposite(currPoint, choices[i], i, unrankedChoices)];
                    case 2:
                        itemFlat = _a.sent();
                        currPoint.yTop = itemFlat.yBot + __WEBPACK_IMPORTED_MODULE_6__helper_survey__["a" /* SurveyHelper */].GAP_BETWEEN_ROWS * this.controller.unitHeight;
                        flats.push(itemFlat);
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/, flats];
                }
            });
        });
    };
    FlatRanking.prototype.generateSelectToRankItemsVertically = function (point) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var currPoint, flats, _a, _b, _c, separatorRect, _d, _e, _f;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        currPoint = __WEBPACK_IMPORTED_MODULE_6__helper_survey__["a" /* SurveyHelper */].clone(point);
                        flats = [];
                        if (!(this.question.rankingChoices.length !== 0)) return [3 /*break*/, 2];
                        _b = (_a = flats.push).apply;
                        _c = [flats];
                        return [4 /*yield*/, this.generateChoicesColumn(currPoint, this.question.rankingChoices)];
                    case 1:
                        _b.apply(_a, _c.concat([_g.sent()]));
                        currPoint.yTop = flats[flats.length - 1].yBot + 2 * (__WEBPACK_IMPORTED_MODULE_6__helper_survey__["a" /* SurveyHelper */].GAP_BETWEEN_ROWS * this.controller.unitHeight);
                        _g.label = 2;
                    case 2:
                        separatorRect = __WEBPACK_IMPORTED_MODULE_6__helper_survey__["a" /* SurveyHelper */].createRect({
                            xLeft: currPoint.xLeft,
                            yTop: currPoint.yTop - (__WEBPACK_IMPORTED_MODULE_6__helper_survey__["a" /* SurveyHelper */].GAP_BETWEEN_ROWS * this.controller.unitHeight) - 0.5,
                        }, this.controller.paperWidth - this.controller.margins.right - currPoint.xLeft, 1);
                        flats.push(new __WEBPACK_IMPORTED_MODULE_7__pdf_render_pdf_coloredbrick__["a" /* ColoredBrick */](this.controller, separatorRect, __WEBPACK_IMPORTED_MODULE_6__helper_survey__["a" /* SurveyHelper */].FORM_BORDER_COLOR));
                        _e = (_d = flats.push).apply;
                        _f = [flats];
                        return [4 /*yield*/, this.generateChoicesColumn(currPoint, this.question.unRankingChoices, true)];
                    case 3:
                        _e.apply(_d, _f.concat([_g.sent()]));
                        return [2 /*return*/, flats];
                }
            });
        });
    };
    FlatRanking.prototype.generateSelectToRankItemsHorizontally = function (point) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var colCount, currPoint, flats, rowsCount, row, i, colIndex, _i, _a, item, itemFlat, rowLineFlat, separatorRect;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        colCount = 2;
                        currPoint = __WEBPACK_IMPORTED_MODULE_6__helper_survey__["a" /* SurveyHelper */].clone(point);
                        flats = [];
                        rowsCount = Math.max(this.question.unRankingChoices.length, this.question.rankingChoices.length);
                        row = new __WEBPACK_IMPORTED_MODULE_5__pdf_render_pdf_composite__["a" /* CompositeBrick */]();
                        i = 0;
                        _b.label = 1;
                    case 1:
                        if (!(i < rowsCount)) return [3 /*break*/, 8];
                        colIndex = 0;
                        _i = 0, _a = [this.question.unRankingChoices[i], this.question.rankingChoices[i]];
                        _b.label = 2;
                    case 2:
                        if (!(_i < _a.length)) return [3 /*break*/, 6];
                        item = _a[_i];
                        if (!!!item) return [3 /*break*/, 4];
                        this.controller.pushMargins(this.controller.margins.left, this.controller.margins.right);
                        __WEBPACK_IMPORTED_MODULE_6__helper_survey__["a" /* SurveyHelper */].setColumnMargins(this.controller, colCount, colIndex);
                        currPoint.xLeft = this.controller.margins.left;
                        return [4 /*yield*/, this.generateFlatComposite(currPoint, item, i, colIndex == 0)];
                    case 3:
                        itemFlat = _b.sent();
                        row.addBrick(itemFlat);
                        this.controller.popMargins();
                        _b.label = 4;
                    case 4:
                        colIndex++;
                        _b.label = 5;
                    case 5:
                        _i++;
                        return [3 /*break*/, 2];
                    case 6:
                        rowLineFlat = __WEBPACK_IMPORTED_MODULE_6__helper_survey__["a" /* SurveyHelper */].createRowlineFlat(__WEBPACK_IMPORTED_MODULE_6__helper_survey__["a" /* SurveyHelper */].createPoint(row), this.controller);
                        flats.push(row, rowLineFlat);
                        separatorRect = __WEBPACK_IMPORTED_MODULE_6__helper_survey__["a" /* SurveyHelper */].createRect({
                            xLeft: this.controller.margins.left + __WEBPACK_IMPORTED_MODULE_6__helper_survey__["a" /* SurveyHelper */].getPageAvailableWidth(this.controller) / 2 - 0.5,
                            yTop: currPoint.yTop,
                        }, 0, 0);
                        row.addBrick(new __WEBPACK_IMPORTED_MODULE_7__pdf_render_pdf_coloredbrick__["a" /* ColoredBrick */](this.controller, separatorRect, __WEBPACK_IMPORTED_MODULE_6__helper_survey__["a" /* SurveyHelper */].FORM_BORDER_COLOR, 1, rowLineFlat.yBot - currPoint.yTop + (i !== rowsCount - 1 ?
                            __WEBPACK_IMPORTED_MODULE_6__helper_survey__["a" /* SurveyHelper */].GAP_BETWEEN_ROWS * this.controller.unitHeight : 0)));
                        currPoint.yTop = rowLineFlat.yBot +
                            __WEBPACK_IMPORTED_MODULE_6__helper_survey__["a" /* SurveyHelper */].GAP_BETWEEN_ROWS * this.controller.unitHeight;
                        row = new __WEBPACK_IMPORTED_MODULE_5__pdf_render_pdf_composite__["a" /* CompositeBrick */]();
                        _b.label = 7;
                    case 7:
                        i++;
                        return [3 /*break*/, 1];
                    case 8: return [2 /*return*/, flats];
                }
            });
        });
    };
    FlatRanking.prototype.generateFlatsContent = function (point) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_a) {
                if (!this.question.selectToRankEnabled) {
                    return [2 /*return*/, this.generateChoicesColumn(point, this.question.rankingChoices)];
                }
                else if (this.question.selectToRankAreasLayout == 'vertical') {
                    return [2 /*return*/, this.generateSelectToRankItemsVertically(point)];
                }
                else {
                    return [2 /*return*/, this.generateSelectToRankItemsHorizontally(point)];
                }
                return [2 /*return*/];
            });
        });
    };
    return FlatRanking;
}(__WEBPACK_IMPORTED_MODULE_1__flat_question__["a" /* FlatQuestion */]));

__WEBPACK_IMPORTED_MODULE_2__flat_repository__["a" /* FlatRepository */].getInstance().register('ranking', FlatRanking);


/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__flat_radiogroup__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flat_repository__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pdf_render_pdf_text__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pdf_render_pdf_composite__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helper_survey__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlatRating; });






var FlatRating = /** @class */ (function (_super) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */])(FlatRating, _super);
    function FlatRating(survey, question, controller) {
        var _this = _super.call(this, survey, question, controller) || this;
        _this.survey = survey;
        _this.controller = controller;
        _this.questionRating = question;
        return _this;
    }
    FlatRating.prototype.generateFlatHorisontalComposite = function (point, item, index) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var itemText, halfWidth, textPoint, compositeFlat, _a, textWidth, radioPoint;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        itemText = __WEBPACK_IMPORTED_MODULE_5__helper_survey__["a" /* SurveyHelper */].getRatingItemText(this.questionRating, index, item.locText);
                        this.controller.pushMargins();
                        halfWidth = this.controller.unitWidth / 2.0;
                        this.controller.margins.left += halfWidth;
                        this.controller.margins.right += halfWidth;
                        textPoint = __WEBPACK_IMPORTED_MODULE_5__helper_survey__["a" /* SurveyHelper */].clone(point);
                        textPoint.xLeft += halfWidth;
                        _a = __WEBPACK_IMPORTED_MODULE_4__pdf_render_pdf_composite__["a" /* CompositeBrick */].bind;
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_5__helper_survey__["a" /* SurveyHelper */].
                                createBoldTextFlat(textPoint, this.questionRating, this.controller, itemText)];
                    case 1:
                        compositeFlat = new (_a.apply(__WEBPACK_IMPORTED_MODULE_4__pdf_render_pdf_composite__["a" /* CompositeBrick */], [void 0, _b.sent()]))();
                        this.controller.popMargins();
                        textWidth = compositeFlat.width;
                        if (textWidth < __WEBPACK_IMPORTED_MODULE_5__helper_survey__["a" /* SurveyHelper */].getRatingMinWidth(this.controller)) {
                            compositeFlat.xLeft += (__WEBPACK_IMPORTED_MODULE_5__helper_survey__["a" /* SurveyHelper */].getRatingMinWidth(this.controller) - textWidth) / 2.0 - halfWidth;
                            textWidth = __WEBPACK_IMPORTED_MODULE_5__helper_survey__["a" /* SurveyHelper */].getRatingMinWidth(this.controller);
                        }
                        else {
                            textWidth += this.controller.unitWidth;
                        }
                        radioPoint = __WEBPACK_IMPORTED_MODULE_5__helper_survey__["a" /* SurveyHelper */].createPoint(compositeFlat);
                        radioPoint.xLeft = point.xLeft;
                        compositeFlat.addBrick(this.generateFlatItem(__WEBPACK_IMPORTED_MODULE_5__helper_survey__["a" /* SurveyHelper */].createRect(radioPoint, textWidth, this.controller.unitHeight), item, index, undefined, this.question.value == item.value));
                        return [2 /*return*/, compositeFlat];
                }
            });
        });
    };
    FlatRating.prototype.generateFlatComposite = function (point, item, index) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var compositeFlat, itemRect, itemFlat, textPoint, itemText, _a, _b, _c;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        compositeFlat = new __WEBPACK_IMPORTED_MODULE_4__pdf_render_pdf_composite__["a" /* CompositeBrick */]();
                        itemRect = __WEBPACK_IMPORTED_MODULE_5__helper_survey__["a" /* SurveyHelper */].createRect(point, this.controller.unitHeight, this.controller.unitHeight);
                        itemFlat = this.generateFlatItem(__WEBPACK_IMPORTED_MODULE_5__helper_survey__["a" /* SurveyHelper */].moveRect(__WEBPACK_IMPORTED_MODULE_5__helper_survey__["a" /* SurveyHelper */].scaleRect(itemRect, __WEBPACK_IMPORTED_MODULE_5__helper_survey__["a" /* SurveyHelper */].SELECT_ITEM_FLAT_SCALE), point.xLeft), item, index, undefined, this.question.value == item.value);
                        compositeFlat.addBrick(itemFlat);
                        textPoint = __WEBPACK_IMPORTED_MODULE_5__helper_survey__["a" /* SurveyHelper */].clone(point);
                        textPoint.xLeft = itemFlat.xRight + this.controller.unitWidth * __WEBPACK_IMPORTED_MODULE_5__helper_survey__["a" /* SurveyHelper */].GAP_BETWEEN_ITEM_TEXT;
                        itemText = __WEBPACK_IMPORTED_MODULE_5__helper_survey__["a" /* SurveyHelper */].getRatingItemText(this.questionRating, index, item.locText);
                        _a = itemText == null;
                        if (_a) return [3 /*break*/, 2];
                        _c = (_b = compositeFlat).addBrick;
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_5__helper_survey__["a" /* SurveyHelper */].createTextFlat(textPoint, this.question, this.controller, itemText, __WEBPACK_IMPORTED_MODULE_3__pdf_render_pdf_text__["a" /* TextBrick */])];
                    case 1:
                        _a = _c.apply(_b, [_d.sent()]);
                        _d.label = 2;
                    case 2:
                        _a;
                        return [2 /*return*/, compositeFlat];
                }
            });
        });
    };
    FlatRating.prototype.generateHorisontallyItems = function (point) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var rowsFlats, currPoint, i, itemFlat, leftWidth;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        rowsFlats = [new __WEBPACK_IMPORTED_MODULE_4__pdf_render_pdf_composite__["a" /* CompositeBrick */]()];
                        currPoint = __WEBPACK_IMPORTED_MODULE_5__helper_survey__["a" /* SurveyHelper */].clone(point);
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < this.questionRating.visibleRateValues.length)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.generateFlatHorisontalComposite(currPoint, this.questionRating.visibleRateValues[i], i)];
                    case 2:
                        itemFlat = _a.sent();
                        rowsFlats[rowsFlats.length - 1].addBrick(itemFlat);
                        leftWidth = this.controller.paperWidth -
                            this.controller.margins.right - itemFlat.xRight;
                        if (__WEBPACK_IMPORTED_MODULE_5__helper_survey__["a" /* SurveyHelper */].getRatingMinWidth(this.controller) <= leftWidth + __WEBPACK_IMPORTED_MODULE_5__helper_survey__["a" /* SurveyHelper */].EPSILON) {
                            currPoint.xLeft = itemFlat.xRight;
                        }
                        else {
                            currPoint.xLeft = point.xLeft;
                            currPoint.yTop = itemFlat.yBot;
                            if (i !== this.questionRating.visibleRateValues.length - 1) {
                                rowsFlats[rowsFlats.length - 1].addBrick(__WEBPACK_IMPORTED_MODULE_5__helper_survey__["a" /* SurveyHelper */].createRowlineFlat(currPoint, this.controller));
                                currPoint.yTop += __WEBPACK_IMPORTED_MODULE_5__helper_survey__["a" /* SurveyHelper */].EPSILON;
                                rowsFlats.push(new __WEBPACK_IMPORTED_MODULE_4__pdf_render_pdf_composite__["a" /* CompositeBrick */]());
                            }
                        }
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/, rowsFlats];
                }
            });
        });
    };
    FlatRating.prototype.generateFlatsContent = function (point) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var isVertical, i, itemText;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_a) {
                isVertical = false;
                for (i = 0; i < this.questionRating.visibleRateValues.length; i++) {
                    itemText = __WEBPACK_IMPORTED_MODULE_5__helper_survey__["a" /* SurveyHelper */].getRatingItemText(this.questionRating, i, this.questionRating.visibleRateValues[i].locText);
                    if (this.controller.measureText(itemText).width > this.controller.measureText(__WEBPACK_IMPORTED_MODULE_5__helper_survey__["a" /* SurveyHelper */].RATING_COLUMN_WIDTH).width) {
                        isVertical = true;
                    }
                }
                return [2 /*return*/, isVertical ? this.generateVerticallyItems(point, this.questionRating.visibleRateValues) : this.generateHorisontallyItems(point)];
            });
        });
    };
    return FlatRating;
}(__WEBPACK_IMPORTED_MODULE_1__flat_radiogroup__["a" /* FlatRadiogroup */]));

__WEBPACK_IMPORTED_MODULE_2__flat_repository__["a" /* FlatRepository */].getInstance().register('rating', FlatRating);


/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__flat_question__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flat_repository__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helper_survey__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlatSignaturePad; });




var FlatSignaturePad = /** @class */ (function (_super) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */])(FlatSignaturePad, _super);
    function FlatSignaturePad(survey, question, controller) {
        var _this = _super.call(this, survey, question, controller) || this;
        _this.survey = survey;
        _this.question = question;
        return _this;
    }
    FlatSignaturePad.prototype.generateFlatsContent = function (point) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var imageBrick;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_3__helper_survey__["a" /* SurveyHelper */].createImageFlat(point, this.question, this.controller, this.question.value, __WEBPACK_IMPORTED_MODULE_3__helper_survey__["a" /* SurveyHelper */].pxToPt(this.question.signatureWidth), __WEBPACK_IMPORTED_MODULE_3__helper_survey__["a" /* SurveyHelper */].pxToPt(this.question.signatureHeight))];
                    case 1:
                        imageBrick = _a.sent();
                        return [2 /*return*/, [imageBrick]];
                }
            });
        });
    };
    return FlatSignaturePad;
}(__WEBPACK_IMPORTED_MODULE_1__flat_question__["a" /* FlatQuestion */]));

__WEBPACK_IMPORTED_MODULE_2__flat_repository__["a" /* FlatRepository */].getInstance().register('signaturepad', FlatSignaturePad);


/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__flat_question__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flat_repository__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pdf_render_pdf_textbox__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helper_survey__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlatTextbox; });





var FlatTextbox = /** @class */ (function (_super) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */])(FlatTextbox, _super);
    function FlatTextbox(survey, question, controller) {
        var _this = _super.call(this, survey, question, controller) || this;
        _this.survey = survey;
        _this.question = question;
        return _this;
    }
    FlatTextbox.prototype.generateFlatsContent = function (point) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var rect;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.shouldRenderAsComment) {
                            rect = __WEBPACK_IMPORTED_MODULE_4__helper_survey__["a" /* SurveyHelper */].createTextFieldRect(point, this.controller);
                            return [2 /*return*/, [new __WEBPACK_IMPORTED_MODULE_3__pdf_render_pdf_textbox__["a" /* TextBoxBrick */](this.question, this.controller, rect)]];
                        }
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_4__helper_survey__["a" /* SurveyHelper */].createCommentFlat(point, this.question, this.controller, true, { rows: FlatTextbox.MULTILINE_TEXT_ROWS_COUNT })];
                    case 1: return [2 /*return*/, [_a.sent()]];
                }
            });
        });
    };
    FlatTextbox.MULTILINE_TEXT_ROWS_COUNT = 1;
    return FlatTextbox;
}(__WEBPACK_IMPORTED_MODULE_1__flat_question__["a" /* FlatQuestion */]));

__WEBPACK_IMPORTED_MODULE_2__flat_repository__["a" /* FlatRepository */].getInstance().register('text', FlatTextbox);


/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pdf_brick__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomBrick; });


var CustomBrick = /** @class */ (function (_super) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */])(CustomBrick, _super);
    function CustomBrick(question, controller, renderFunc) {
        var _this = _super.call(this, question, controller, renderFunc(controller.helperDoc, question, 0, 0)) || this;
        _this.renderFunc = renderFunc;
        return _this;
    }
    CustomBrick.prototype.renderInteractive = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var _this = this;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (resolve) {
                            _this.renderFunc(_this.controller.doc, _this.question, _this.xLeft, _this.yTop);
                            resolve();
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return CustomBrick;
}(__WEBPACK_IMPORTED_MODULE_1__pdf_brick__["a" /* PdfBrick */]));



/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_survey_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__doc_controller__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__flat_layout_flat_survey__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__page_layout_page_packer__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__event_handler_event_handler__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__helper_survey__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyPDF; });








/**
 * The `SurveyPDF` object enables you to export your surveys and forms to PDF documents.
 *
 * [View Demo](https://surveyjs.io/pdf-generator/examples/ (linkStyle))
 */
var SurveyPDF = /** @class */ (function (_super) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */])(SurveyPDF, _super);
    function SurveyPDF(jsonObject, options) {
        var _this = _super.call(this, jsonObject) || this;
        /**
         * An event that is raised when SurveyJS PDF Generator renders a page header. Handle this event to customize the header.
         *
         * Parameters:
         *
         * - `sender`: `SurveyPDF`\
         * A SurveyPDF instance that raised the event.
         *
         * - `canvas`: [`DrawCanvas`](https://surveyjs.io/pdf-generator/documentation/api-reference/drawcanvas)\
         * An object that you can use to draw text and images in the page header.
         *
         * [View Demo](https://surveyjs.io/pdf-generator/examples/customize-header-and-footer-of-pdf-form/ (linkStyle))
         */
        _this.onRenderHeader = new __WEBPACK_IMPORTED_MODULE_5__event_handler_event_handler__["b" /* EventAsync */]();
        /**
         * An event that is raised when SurveyJS PDF Generator renders a page footer. Handle this event to customize the footer.
         *
         * Parameters:
         *
         * - `sender`: `SurveyPDF`\
         * A SurveyPDF instance that raised the event.
         *
         * - `canvas`: [`DrawCanvas`](https://surveyjs.io/pdf-generator/documentation/api-reference/drawcanvas)\
         * An object that you can use to draw text and images in the page footer.
         *
         * [View Demo](https://surveyjs.io/pdf-generator/examples/customize-header-and-footer-of-pdf-form/ (linkStyle))
         */
        _this.onRenderFooter = new __WEBPACK_IMPORTED_MODULE_5__event_handler_event_handler__["b" /* EventAsync */]();
        /**
         * An event that is raised when SurveyJS PDF Generator renders a survey question. Handle this event to customize question rendering.
         *
         * Parameters:
         *
         * - `sender`: `SurveyPDF`\
         * A SurveyPDF instance that raised the event.
         *
         * - `options.question`: [`Question`](https://surveyjs.io/form-library/documentation/api-reference/question)\
         * A survey question that is being rendered.
         *
         * - `options.point`: `IPoint`\
         * An object with coordinates of the top-left corner of the element being rendered. This object contains the following properties: `{ xLeft: number, yTop: number }`.
         *
         * - `options.bricks`: [`PdfBrick[]`](https://surveyjs.io/pdf-generator/documentation/api-reference/pdfbrick)\
         * An array of [bricks](https://surveyjs.io/pdf-generator/documentation/customization-customrender-questionelements#bricks) used to render the element.
         *
         * - `options.controller`: [`DocController`](https://surveyjs.io/pdf-generator/documentation/api-reference/doccontroller)\
         * An object that provides access to main PDF document properties (font, margins, page width and height) and allows you to modify them.
         *
         * - `options.repository`: `FlatRepository`\
         * A repository with classes that render elements to PDF. Use its `create` method if you need to create a new instance of a rendering class.
         *
         * [View Demo](https://surveyjs.io/pdf-generator/examples/add-markup-to-customize-pdf-forms/ (linkStyle))
         */
        _this.onRenderQuestion = new __WEBPACK_IMPORTED_MODULE_5__event_handler_event_handler__["b" /* EventAsync */]();
        /**
         * An event that is raised when SurveyJS PDF Generator renders a panel. Handle this event to customize panel rendering.
         *
         * Parameters:
         *
         * - `sender`: `SurveyPDF`\
         * A SurveyPDF instance that raised the event.
         *
         * - `options.panel`: [`PanelModel`](https://surveyjs.io/form-library/documentation/api-reference/panel-model)\
         * A panel that is being rendered.
         *
         * - `options.point`: `IPoint`\
         * An object with coordinates of the top-left corner of the element being rendered. This object contains the following properties: `{ xLeft: number, yTop: number }`.
         *
         * - `options.bricks`: [`PdfBrick[]`](https://surveyjs.io/pdf-generator/documentation/api-reference/pdfbrick)\
         * An array of [bricks](https://surveyjs.io/pdf-generator/documentation/customization-customrender-questionelements#bricks) used to render the element.
         *
         * - `options.controller`: [`DocController`](https://surveyjs.io/pdf-generator/documentation/api-reference/doccontroller)\
         * An object that provides access to main PDF document properties (font, margins, page width and height) and allows you to modify them.
         *
         * - `options.repository`: `FlatRepository`\
         * A repository with classes that render elements to PDF. Use its `create` method if you need to create a new instance of a rendering class.
         */
        _this.onRenderPanel = new __WEBPACK_IMPORTED_MODULE_5__event_handler_event_handler__["b" /* EventAsync */]();
        /**
         * An event that is raised when SurveyJS PDF Generator renders a page. Handle this event to customize page rendering.
         *
         * Parameters:
         *
         * - `sender`: `SurveyPDF`\
         * A SurveyPDF instance that raised the event.
         *
         * - `options.page`: [`PageModel`](https://surveyjs.io/form-library/documentation/api-reference/page-model)\
         * A page that is being rendered.
         *
         * - `options.point`: `IPoint`\
         * An object with coordinates of the top-left corner of the element being rendered. This object contains the following properties: `{ xLeft: number, yTop: number }`.
         *
         * - `options.bricks`: [`PdfBrick[]`](https://surveyjs.io/pdf-generator/documentation/api-reference/pdfbrick)\
         * An array of [bricks](https://surveyjs.io/pdf-generator/documentation/customization-customrender-questionelements#bricks) used to render the element.
         *
         * - `options.controller`: [`DocController`](https://surveyjs.io/pdf-generator/documentation/api-reference/doccontroller)\
         * An object that provides access to main PDF document properties (font, margins, page width and height) and allows you to modify them.
         *
         * - `options.repository`: `FlatRepository`\
         * A repository with classes that render elements to PDF. Use its `create` method if you need to create a new instance of a rendering class.
         */
        _this.onRenderPage = new __WEBPACK_IMPORTED_MODULE_5__event_handler_event_handler__["b" /* EventAsync */]();
        _this.onDocControllerCreated = new __WEBPACK_IMPORTED_MODULE_1_survey_core__["EventBase"]();
        _this.onRenderCheckItemAcroform = new __WEBPACK_IMPORTED_MODULE_5__event_handler_event_handler__["b" /* EventAsync */]();
        _this.onRenderRadioGroupWrapAcroform = new __WEBPACK_IMPORTED_MODULE_5__event_handler_event_handler__["b" /* EventAsync */]();
        _this.onRenderRadioItemAcroform = new __WEBPACK_IMPORTED_MODULE_5__event_handler_event_handler__["b" /* EventAsync */]();
        if (typeof options === 'undefined') {
            options = {};
        }
        _this.options = __WEBPACK_IMPORTED_MODULE_6__helper_survey__["a" /* SurveyHelper */].clone(options);
        _this._haveCommercialLicense = options.commercial || options.haveCommercialLicense;
        return _this;
    }
    Object.defineProperty(SurveyPDF.prototype, "haveCommercialLicense", {
        get: function () {
            var f = __WEBPACK_IMPORTED_MODULE_1_survey_core__["hasLicense"];
            if (!!f && f(2))
                return true;
            return this._haveCommercialLicense;
        },
        set: function (val) {
            this._haveCommercialLicense = val;
        },
        enumerable: false,
        configurable: true
    });
    SurveyPDF.prototype.waitForQuestionIsReady = function (question) {
        return new Promise(function (resolve) {
            if (question.isReady) {
                resolve();
            }
            else {
                var readyCallback_1 = function (_, options) {
                    if (options.isReady) {
                        question.onReadyChanged.remove(readyCallback_1);
                        resolve();
                    }
                };
                question.onReadyChanged.add(readyCallback_1);
            }
        });
    };
    SurveyPDF.prototype.waitForCoreIsReady = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var _i, _a, question, list, _b, list_1, innerQuestion;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _i = 0, _a = this.getAllQuestions();
                        _c.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 9];
                        question = _a[_i];
                        if (!!!question.contentPanel) return [3 /*break*/, 6];
                        list = [];
                        question.contentPanel.addQuestionsToList(list);
                        _b = 0, list_1 = list;
                        _c.label = 2;
                    case 2:
                        if (!(_b < list_1.length)) return [3 /*break*/, 5];
                        innerQuestion = list_1[_b];
                        return [4 /*yield*/, this.waitForQuestionIsReady(innerQuestion)];
                    case 3:
                        _c.sent();
                        _c.label = 4;
                    case 4:
                        _b++;
                        return [3 /*break*/, 2];
                    case 5: return [3 /*break*/, 8];
                    case 6: return [4 /*yield*/, this.waitForQuestionIsReady(__WEBPACK_IMPORTED_MODULE_6__helper_survey__["a" /* SurveyHelper */].getContentQuestion(question))];
                    case 7:
                        _c.sent();
                        _c.label = 8;
                    case 8:
                        _i++;
                        return [3 /*break*/, 1];
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    SurveyPDF.prototype.getUpdatedCheckItemAcroformOptions = function (options) {
        this.onRenderCheckItemAcroform.fire(this, options);
    };
    SurveyPDF.prototype.getUpdatedRadioGroupWrapOptions = function (options) {
        this.onRenderRadioGroupWrapAcroform.fire(this, options);
    };
    SurveyPDF.prototype.getUpdatedRadioItemAcroformOptions = function (options) {
        this.onRenderRadioItemAcroform.fire(this, options);
    };
    SurveyPDF.prototype.correctBricksPosition = function (controller, flats) {
        if (controller.isRTL) {
            flats.forEach(function (flatsArr) {
                flatsArr.forEach(function (flat) {
                    flat.translateX(function (xLeft, xRight) {
                        var shiftWidth = controller.paperWidth - xLeft - xRight;
                        return { xLeft: xLeft + shiftWidth, xRight: xRight + shiftWidth };
                    });
                });
            });
        }
    };
    SurveyPDF.prototype.renderSurvey = function (controller) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var flats, packs, i, j;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.waitForCoreIsReady()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_3__flat_layout_flat_survey__["a" /* FlatSurvey */].generateFlats(this, controller)];
                    case 2:
                        flats = _a.sent();
                        this.correctBricksPosition(controller, flats);
                        packs = __WEBPACK_IMPORTED_MODULE_4__page_layout_page_packer__["a" /* PagePacker */].pack(flats, controller);
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_5__event_handler_event_handler__["a" /* EventHandler */].process_header_events(this, controller, packs)];
                    case 3:
                        _a.sent();
                        i = 0;
                        _a.label = 4;
                    case 4:
                        if (!(i < packs.length)) return [3 /*break*/, 9];
                        j = 0;
                        _a.label = 5;
                    case 5:
                        if (!(j < packs[i].length)) return [3 /*break*/, 8];
                        if (controller.getNumberOfPages() === i) {
                            controller.addPage();
                        }
                        controller.setPage(i);
                        //gizmos bricks borders for debug
                        // packs[i][j].unfold().forEach((rect: IPdfBrick) => {
                        //     controller.doc.setDrawColor('green');
                        //     controller.doc.rect(...SurveyHelper.createAcroformRect(rect));
                        //     controller.doc.setDrawColor('black');
                        //   }
                        // );
                        return [4 /*yield*/, packs[i][j].render()];
                    case 6:
                        //gizmos bricks borders for debug
                        // packs[i][j].unfold().forEach((rect: IPdfBrick) => {
                        //     controller.doc.setDrawColor('green');
                        //     controller.doc.rect(...SurveyHelper.createAcroformRect(rect));
                        //     controller.doc.setDrawColor('black');
                        //   }
                        // );
                        _a.sent();
                        _a.label = 7;
                    case 7:
                        j++;
                        return [3 /*break*/, 5];
                    case 8:
                        i++;
                        return [3 /*break*/, 4];
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * An asynchronous method that starts download of the generated PDF file in the web browser.
     *
     * @param fileName *(Optional)* A file name with the ".pdf" extension. Default value: `"survey_result.pdf"`.
     */
    SurveyPDF.prototype.save = function (fileName) {
        if (fileName === void 0) { fileName = 'survey_result.pdf'; }
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var controller, promise;
            var _this = this;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!SurveyPDF.currentlySaving) return [3 /*break*/, 2];
                        controller = new __WEBPACK_IMPORTED_MODULE_2__doc_controller__["b" /* DocController */](this.options);
                        this.onDocControllerCreated.fire(this, { controller: controller });
                        SurveyPDF.currentlySaving = true;
                        __WEBPACK_IMPORTED_MODULE_6__helper_survey__["a" /* SurveyHelper */].fixFont(controller);
                        return [4 /*yield*/, this.renderSurvey(controller)];
                    case 1:
                        _a.sent();
                        promise = controller.doc.save(fileName, { returnPromise: true });
                        promise.then(function () {
                            SurveyPDF.currentlySaving = false;
                            var saveFunc = SurveyPDF.saveQueue.shift();
                            if (!!saveFunc) {
                                saveFunc();
                            }
                        });
                        return [2 /*return*/, promise];
                    case 2:
                        SurveyPDF.saveQueue.push(function () {
                            _this.save(fileName);
                        });
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * An asynchronous method that allows you to get PDF content in different formats.
     *
     * [View Demo](https://surveyjs.io/pdf-generator/examples/convert-pdf-form-blob-base64-raw-pdf-javascript/ (linkStyle))
     *
     * @param type *(Optional)* One of `"blob"`, `"bloburl"`, `"dataurlstring"`. Do not specify this parameter if you want to get raw PDF content as a string value.
     *
     */
    SurveyPDF.prototype.raw = function (type) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var controller;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        controller = new __WEBPACK_IMPORTED_MODULE_2__doc_controller__["b" /* DocController */](this.options);
                        this.onDocControllerCreated.fire(this, { controller: controller });
                        __WEBPACK_IMPORTED_MODULE_6__helper_survey__["a" /* SurveyHelper */].fixFont(controller);
                        return [4 /*yield*/, this.renderSurvey(controller)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, controller.doc.output(type)];
                }
            });
        });
    };
    SurveyPDF.currentlySaving = false;
    SurveyPDF.saveQueue = [];
    return SurveyPDF;
}(__WEBPACK_IMPORTED_MODULE_1_survey_core__["SurveyModel"]));



/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// An augmented AVL Tree where each node maintains a list of records and their search intervals.
// Record is composed of an interval and its underlying data, sent by a client. This allows the
// interval tree to have the same interval inserted multiple times, as long its data is different.
// Both insertion and deletion require O(log n) time. Searching requires O(k*logn) time, where `k`
// is the number of intervals in the output list.
Object.defineProperty(exports, "__esModule", { value: true });
var isSame = __webpack_require__(57);
function height(node) {
    if (node === undefined) {
        return -1;
    }
    else {
        return node.height;
    }
}
var Node = /** @class */ (function () {
    function Node(intervalTree, record) {
        this.intervalTree = intervalTree;
        this.records = [];
        this.height = 0;
        this.key = record.low;
        this.max = record.high;
        // Save the array of all records with the same key for this node
        this.records.push(record);
    }
    // Gets the highest record.high value for this node
    Node.prototype.getNodeHigh = function () {
        var high = this.records[0].high;
        for (var i = 1; i < this.records.length; i++) {
            if (this.records[i].high > high) {
                high = this.records[i].high;
            }
        }
        return high;
    };
    // Updates height value of the node. Called during insertion, rebalance, removal
    Node.prototype.updateHeight = function () {
        this.height = Math.max(height(this.left), height(this.right)) + 1;
    };
    // Updates the max value of all the parents after inserting into already existing node, as well as
    // removing the node completely or removing the record of an already existing node. Starts with
    // the parent of an affected node and bubbles up to root
    Node.prototype.updateMaxOfParents = function () {
        if (this === undefined) {
            return;
        }
        var thisHigh = this.getNodeHigh();
        if (this.left !== undefined && this.right !== undefined) {
            this.max = Math.max(Math.max(this.left.max, this.right.max), thisHigh);
        }
        else if (this.left !== undefined && this.right === undefined) {
            this.max = Math.max(this.left.max, thisHigh);
        }
        else if (this.left === undefined && this.right !== undefined) {
            this.max = Math.max(this.right.max, thisHigh);
        }
        else {
            this.max = thisHigh;
        }
        if (this.parent) {
            this.parent.updateMaxOfParents();
        }
    };
    /*
    Left-Left case:
  
           z                                      y
          / \                                   /   \
         y   T4      Right Rotate (z)          x     z
        / \          - - - - - - - - ->       / \   / \
       x   T3                                T1 T2 T3 T4
      / \
    T1   T2
  
    Left-Right case:
  
         z                               z                           x
        / \                             / \                        /   \
       y   T4  Left Rotate (y)         x  T4  Right Rotate(z)     y     z
      / \      - - - - - - - - ->     / \      - - - - - - - ->  / \   / \
    T1   x                           y  T3                      T1 T2 T3 T4
        / \                         / \
      T2   T3                      T1 T2
    */
    // Handles Left-Left case and Left-Right case after rebalancing AVL tree
    Node.prototype._updateMaxAfterRightRotate = function () {
        var parent = this.parent;
        var left = parent.left;
        // Update max of left sibling (x in first case, y in second)
        var thisParentLeftHigh = left.getNodeHigh();
        if (left.left === undefined && left.right !== undefined) {
            left.max = Math.max(thisParentLeftHigh, left.right.max);
        }
        else if (left.left !== undefined && left.right === undefined) {
            left.max = Math.max(thisParentLeftHigh, left.left.max);
        }
        else if (left.left === undefined && left.right === undefined) {
            left.max = thisParentLeftHigh;
        }
        else {
            left.max = Math.max(Math.max(left.left.max, left.right.max), thisParentLeftHigh);
        }
        // Update max of itself (z)
        var thisHigh = this.getNodeHigh();
        if (this.left === undefined && this.right !== undefined) {
            this.max = Math.max(thisHigh, this.right.max);
        }
        else if (this.left !== undefined && this.right === undefined) {
            this.max = Math.max(thisHigh, this.left.max);
        }
        else if (this.left === undefined && this.right === undefined) {
            this.max = thisHigh;
        }
        else {
            this.max = Math.max(Math.max(this.left.max, this.right.max), thisHigh);
        }
        // Update max of parent (y in first case, x in second)
        parent.max = Math.max(Math.max(parent.left.max, parent.right.max), parent.getNodeHigh());
    };
    /*
    Right-Right case:
  
      z                               y
     / \                            /   \
    T1  y     Left Rotate(z)       z     x
       / \   - - - - - - - ->     / \   / \
      T2  x                      T1 T2 T3 T4
         / \
        T3 T4
  
    Right-Left case:
  
       z                            z                            x
      / \                          / \                         /   \
     T1  y   Right Rotate (y)     T1  x      Left Rotate(z)   z     y
        / \  - - - - - - - - ->      / \   - - - - - - - ->  / \   / \
       x  T4                        T2  y                   T1 T2 T3 T4
      / \                              / \
    T2   T3                           T3 T4
    */
    // Handles Right-Right case and Right-Left case in rebalancing AVL tree
    Node.prototype._updateMaxAfterLeftRotate = function () {
        var parent = this.parent;
        var right = parent.right;
        // Update max of right sibling (x in first case, y in second)
        var thisParentRightHigh = right.getNodeHigh();
        if (right.left === undefined && right.right !== undefined) {
            right.max = Math.max(thisParentRightHigh, right.right.max);
        }
        else if (right.left !== undefined && right.right === undefined) {
            right.max = Math.max(thisParentRightHigh, right.left.max);
        }
        else if (right.left === undefined && right.right === undefined) {
            right.max = thisParentRightHigh;
        }
        else {
            right.max = Math.max(Math.max(right.left.max, right.right.max), thisParentRightHigh);
        }
        // Update max of itself (z)
        var thisHigh = this.getNodeHigh();
        if (this.left === undefined && this.right !== undefined) {
            this.max = Math.max(thisHigh, this.right.max);
        }
        else if (this.left !== undefined && this.right === undefined) {
            this.max = Math.max(thisHigh, this.left.max);
        }
        else if (this.left === undefined && this.right === undefined) {
            this.max = thisHigh;
        }
        else {
            this.max = Math.max(Math.max(this.left.max, this.right.max), thisHigh);
        }
        // Update max of parent (y in first case, x in second)
        parent.max = Math.max(Math.max(parent.left.max, right.max), parent.getNodeHigh());
    };
    Node.prototype._leftRotate = function () {
        var rightChild = this.right;
        rightChild.parent = this.parent;
        if (rightChild.parent === undefined) {
            this.intervalTree.root = rightChild;
        }
        else {
            if (rightChild.parent.left === this) {
                rightChild.parent.left = rightChild;
            }
            else if (rightChild.parent.right === this) {
                rightChild.parent.right = rightChild;
            }
        }
        this.right = rightChild.left;
        if (this.right !== undefined) {
            this.right.parent = this;
        }
        rightChild.left = this;
        this.parent = rightChild;
        this.updateHeight();
        rightChild.updateHeight();
    };
    Node.prototype._rightRotate = function () {
        var leftChild = this.left;
        leftChild.parent = this.parent;
        if (leftChild.parent === undefined) {
            this.intervalTree.root = leftChild;
        }
        else {
            if (leftChild.parent.left === this) {
                leftChild.parent.left = leftChild;
            }
            else if (leftChild.parent.right === this) {
                leftChild.parent.right = leftChild;
            }
        }
        this.left = leftChild.right;
        if (this.left !== undefined) {
            this.left.parent = this;
        }
        leftChild.right = this;
        this.parent = leftChild;
        this.updateHeight();
        leftChild.updateHeight();
    };
    // Rebalances the tree if the height value between two nodes of the same parent is greater than
    // two. There are 4 cases that can happen which are outlined in the graphics above
    Node.prototype._rebalance = function () {
        if (height(this.left) >= 2 + height(this.right)) {
            var left = this.left;
            if (height(left.left) >= height(left.right)) {
                // Left-Left case
                this._rightRotate();
                this._updateMaxAfterRightRotate();
            }
            else {
                // Left-Right case
                left._leftRotate();
                this._rightRotate();
                this._updateMaxAfterRightRotate();
            }
        }
        else if (height(this.right) >= 2 + height(this.left)) {
            var right = this.right;
            if (height(right.right) >= height(right.left)) {
                // Right-Right case
                this._leftRotate();
                this._updateMaxAfterLeftRotate();
            }
            else {
                // Right-Left case
                right._rightRotate();
                this._leftRotate();
                this._updateMaxAfterLeftRotate();
            }
        }
    };
    Node.prototype.insert = function (record) {
        if (record.low < this.key) {
            // Insert into left subtree
            if (this.left === undefined) {
                this.left = new Node(this.intervalTree, record);
                this.left.parent = this;
            }
            else {
                this.left.insert(record);
            }
        }
        else {
            // Insert into right subtree
            if (this.right === undefined) {
                this.right = new Node(this.intervalTree, record);
                this.right.parent = this;
            }
            else {
                this.right.insert(record);
            }
        }
        // Update the max value of this ancestor if needed
        if (this.max < record.high) {
            this.max = record.high;
        }
        // Update height of each node
        this.updateHeight();
        // Rebalance the tree to ensure all operations are executed in O(logn) time. This is especially
        // important in searching, as the tree has a high chance of degenerating without the rebalancing
        this._rebalance();
    };
    Node.prototype._getOverlappingRecords = function (currentNode, low, high) {
        if (currentNode.key <= high && low <= currentNode.getNodeHigh()) {
            // Nodes are overlapping, check if individual records in the node are overlapping
            var tempResults = [];
            for (var i = 0; i < currentNode.records.length; i++) {
                if (currentNode.records[i].high >= low) {
                    tempResults.push(currentNode.records[i]);
                }
            }
            return tempResults;
        }
        return [];
    };
    Node.prototype.search = function (low, high) {
        // Don't search nodes that don't exist
        if (this === undefined) {
            return [];
        }
        var leftSearch = [];
        var ownSearch = [];
        var rightSearch = [];
        // If interval is to the right of the rightmost point of any interval in this node and all its
        // children, there won't be any matches
        if (low > this.max) {
            return [];
        }
        // Search left children
        if (this.left !== undefined && this.left.max >= low) {
            leftSearch = this.left.search(low, high);
        }
        // Check this node
        ownSearch = this._getOverlappingRecords(this, low, high);
        // If interval is to the left of the start of this interval, then it can't be in any child to
        // the right
        if (high < this.key) {
            return leftSearch.concat(ownSearch);
        }
        // Otherwise, search right children
        if (this.right !== undefined) {
            rightSearch = this.right.search(low, high);
        }
        // Return accumulated results, if any
        return leftSearch.concat(ownSearch, rightSearch);
    };
    // Searches for a node by a `key` value
    Node.prototype.searchExisting = function (low) {
        if (this === undefined) {
            return undefined;
        }
        if (this.key === low) {
            return this;
        }
        else if (low < this.key) {
            if (this.left !== undefined) {
                return this.left.searchExisting(low);
            }
        }
        else {
            if (this.right !== undefined) {
                return this.right.searchExisting(low);
            }
        }
        return undefined;
    };
    // Returns the smallest node of the subtree
    Node.prototype._minValue = function () {
        if (this.left === undefined) {
            return this;
        }
        else {
            return this.left._minValue();
        }
    };
    Node.prototype.remove = function (node) {
        var parent = this.parent;
        if (node.key < this.key) {
            // Node to be removed is on the left side
            if (this.left !== undefined) {
                return this.left.remove(node);
            }
            else {
                return undefined;
            }
        }
        else if (node.key > this.key) {
            // Node to be removed is on the right side
            if (this.right !== undefined) {
                return this.right.remove(node);
            }
            else {
                return undefined;
            }
        }
        else {
            if (this.left !== undefined && this.right !== undefined) {
                // Node has two children
                var minValue = this.right._minValue();
                this.key = minValue.key;
                this.records = minValue.records;
                return this.right.remove(this);
            }
            else if (parent.left === this) {
                // One child or no child case on left side
                if (this.right !== undefined) {
                    parent.left = this.right;
                    this.right.parent = parent;
                }
                else {
                    parent.left = this.left;
                    if (this.left !== undefined) {
                        this.left.parent = parent;
                    }
                }
                parent.updateMaxOfParents();
                parent.updateHeight();
                parent._rebalance();
                return this;
            }
            else if (parent.right === this) {
                // One child or no child case on right side
                if (this.right !== undefined) {
                    parent.right = this.right;
                    this.right.parent = parent;
                }
                else {
                    parent.right = this.left;
                    if (this.left !== undefined) {
                        this.left.parent = parent;
                    }
                }
                parent.updateMaxOfParents();
                parent.updateHeight();
                parent._rebalance();
                return this;
            }
        }
    };
    return Node;
}());
exports.Node = Node;
var IntervalTree = /** @class */ (function () {
    function IntervalTree() {
        this.count = 0;
    }
    IntervalTree.prototype.insert = function (record) {
        if (record.low > record.high) {
            throw new Error('`low` value must be lower or equal to `high` value');
        }
        if (this.root === undefined) {
            // Base case: Tree is empty, new node becomes root
            this.root = new Node(this, record);
            this.count++;
            return true;
        }
        else {
            // Otherwise, check if node already exists with the same key
            var node = this.root.searchExisting(record.low);
            if (node !== undefined) {
                // Check the records in this node if there already is the one with same low, high, data
                for (var i = 0; i < node.records.length; i++) {
                    if (isSame(node.records[i], record)) {
                        // This record is same as the one we're trying to insert; return false to indicate
                        // nothing has been inserted
                        return false;
                    }
                }
                // Add the record to the node
                node.records.push(record);
                // Update max of the node and its parents if necessary
                if (record.high > node.max) {
                    node.max = record.high;
                    if (node.parent) {
                        node.parent.updateMaxOfParents();
                    }
                }
                this.count++;
                return true;
            }
            else {
                // Node with this key doesn't already exist. Call insert function on root's node
                this.root.insert(record);
                this.count++;
                return true;
            }
        }
    };
    IntervalTree.prototype.search = function (low, high) {
        if (this.root === undefined) {
            // Tree is empty; return empty array
            return [];
        }
        else {
            return this.root.search(low, high);
        }
    };
    IntervalTree.prototype.remove = function (record) {
        if (this.root === undefined) {
            // Tree is empty; nothing to remove
            return false;
        }
        else {
            var node = this.root.searchExisting(record.low);
            if (node === undefined) {
                return false;
            }
            else if (node.records.length > 1) {
                var removedRecord = void 0;
                // Node with this key has 2 or more records. Find the one we need and remove it
                for (var i = 0; i < node.records.length; i++) {
                    if (isSame(node.records[i], record)) {
                        removedRecord = node.records[i];
                        node.records.splice(i, 1);
                        break;
                    }
                }
                if (removedRecord) {
                    removedRecord = undefined;
                    // Update max of that node and its parents if necessary
                    if (record.high === node.max) {
                        var nodeHigh = node.getNodeHigh();
                        if (node.left !== undefined && node.right !== undefined) {
                            node.max = Math.max(Math.max(node.left.max, node.right.max), nodeHigh);
                        }
                        else if (node.left !== undefined && node.right === undefined) {
                            node.max = Math.max(node.left.max, nodeHigh);
                        }
                        else if (node.left === undefined && node.right !== undefined) {
                            node.max = Math.max(node.right.max, nodeHigh);
                        }
                        else {
                            node.max = nodeHigh;
                        }
                        if (node.parent) {
                            node.parent.updateMaxOfParents();
                        }
                    }
                    this.count--;
                    return true;
                }
                else {
                    return false;
                }
            }
            else if (node.records.length === 1) {
                // Node with this key has only 1 record. Check if the remaining record in this node is
                // actually the one we want to remove
                if (isSame(node.records[0], record)) {
                    // The remaining record is the one we want to remove. Remove the whole node from the tree
                    if (this.root.key === node.key) {
                        // We're removing the root element. Create a dummy node that will temporarily take
                        // root's parent role
                        var rootParent = new Node(this, { low: record.low, high: record.low });
                        rootParent.left = this.root;
                        this.root.parent = rootParent;
                        var removedNode = this.root.remove(node);
                        this.root = rootParent.left;
                        if (this.root !== undefined) {
                            this.root.parent = undefined;
                        }
                        if (removedNode) {
                            removedNode = undefined;
                            this.count--;
                            return true;
                        }
                        else {
                            return false;
                        }
                    }
                    else {
                        var removedNode = this.root.remove(node);
                        if (removedNode) {
                            removedNode = undefined;
                            this.count--;
                            return true;
                        }
                        else {
                            return false;
                        }
                    }
                }
                else {
                    // The remaining record is not the one we want to remove
                    return false;
                }
            }
            else {
                // No records at all in this node?! Shouldn't happen
                return false;
            }
        }
    };
    IntervalTree.prototype.inOrder = function () {
        return new InOrder(this.root);
    };
    IntervalTree.prototype.preOrder = function () {
        return new PreOrder(this.root);
    };
    return IntervalTree;
}());
exports.IntervalTree = IntervalTree;
var DataIntervalTree = /** @class */ (function () {
    function DataIntervalTree() {
        this.tree = new IntervalTree();
    }
    DataIntervalTree.prototype.insert = function (low, high, data) {
        return this.tree.insert({ low: low, high: high, data: data });
    };
    DataIntervalTree.prototype.remove = function (low, high, data) {
        return this.tree.remove({ low: low, high: high, data: data });
    };
    DataIntervalTree.prototype.search = function (low, high) {
        return this.tree.search(low, high).map(function (v) { return v.data; });
    };
    DataIntervalTree.prototype.inOrder = function () {
        return this.tree.inOrder();
    };
    DataIntervalTree.prototype.preOrder = function () {
        return this.tree.preOrder();
    };
    Object.defineProperty(DataIntervalTree.prototype, "count", {
        get: function () {
            return this.tree.count;
        },
        enumerable: true,
        configurable: true
    });
    return DataIntervalTree;
}());
exports.default = DataIntervalTree;
var InOrder = /** @class */ (function () {
    function InOrder(startNode) {
        this.stack = [];
        if (startNode !== undefined) {
            this.push(startNode);
        }
    }
    InOrder.prototype.next = function () {
        // Will only happen if stack is empty and pop is called
        if (this.currentNode === undefined) {
            return {
                done: true,
                value: undefined,
            };
        }
        // Process this node
        if (this.i < this.currentNode.records.length) {
            return {
                done: false,
                value: this.currentNode.records[this.i++],
            };
        }
        if (this.currentNode.right !== undefined) {
            this.push(this.currentNode.right);
        }
        else {
            // Might pop the last and set this.currentNode = undefined
            this.pop();
        }
        return this.next();
    };
    InOrder.prototype.push = function (node) {
        this.currentNode = node;
        this.i = 0;
        while (this.currentNode.left !== undefined) {
            this.stack.push(this.currentNode);
            this.currentNode = this.currentNode.left;
        }
    };
    InOrder.prototype.pop = function () {
        this.currentNode = this.stack.pop();
        this.i = 0;
    };
    return InOrder;
}());
exports.InOrder = InOrder;
if (typeof Symbol === 'function') {
    InOrder.prototype[Symbol.iterator] = function () { return this; };
}
var PreOrder = /** @class */ (function () {
    function PreOrder(startNode) {
        this.stack = [];
        this.i = 0;
        this.currentNode = startNode;
    }
    PreOrder.prototype.next = function () {
        // Will only happen if stack is empty and pop is called,
        // which only happens if there is no right node (i.e we are done)
        if (this.currentNode === undefined) {
            return {
                done: true,
                value: undefined,
            };
        }
        // Process this node
        if (this.i < this.currentNode.records.length) {
            return {
                done: false,
                value: this.currentNode.records[this.i++],
            };
        }
        if (this.currentNode.right !== undefined) {
            this.push(this.currentNode.right);
        }
        if (this.currentNode.left !== undefined) {
            this.push(this.currentNode.left);
        }
        this.pop();
        return this.next();
    };
    PreOrder.prototype.push = function (node) {
        this.stack.push(node);
    };
    PreOrder.prototype.pop = function () {
        this.currentNode = this.stack.pop();
        this.i = 0;
    };
    return PreOrder;
}());
exports.PreOrder = PreOrder;
if (typeof Symbol === 'function') {
    PreOrder.prototype[Symbol.iterator] = function () { return this; };
}
//# sourceMappingURL=index.js.map

/***/ }),
/* 57 */
/***/ (function(module, exports) {

//

module.exports = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

  if (ret !== void 0) {
    return !!ret;
  }

  if (objA === objB) {
    return true;
  }

  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

  // Test for A's keys different from B.
  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key)) {
      return false;
    }

    var valueA = objA[key];
    var valueB = objB[key];

    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

    if (ret === false || (ret === void 0 && valueA !== valueB)) {
      return false;
    }
  }

  return true;
};


/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = setRadioAppearance;
function setRadioAppearance(doc) {
    var oldAppearanceFuncition = doc.AcroFormAppearance.RadioButton.Circle.YesNormal;
    doc.AcroFormAppearance.RadioButton.Circle.YesNormal = function (formObject) {
        var xobj = oldAppearanceFuncition(formObject);
        var stream = xobj.stream.split('\n');
        var encodeColor = doc.__private__.encodeColorString(formObject.color);
        stream[0] = stream[0] + '\n' + encodeColor + '\n' + encodeColor.toUpperCase();
        xobj.stream = stream.join('\n');
        return xobj;
    };
}


/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pdf_brick__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColoredBrick; });


var ColoredBrick = /** @class */ (function (_super) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */])(ColoredBrick, _super);
    function ColoredBrick(controller, rect, color, renderWidth, renderHeight) {
        var _this = _super.call(this, undefined, controller, rect) || this;
        _this.color = color;
        _this.renderWidth = renderWidth;
        _this.renderHeight = renderHeight;
        return _this;
    }
    ColoredBrick.prototype.renderInteractive = function () {
        var _a, _b;
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var oldFillColor;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __generator */])(this, function (_c) {
                oldFillColor = this.controller.doc.getFillColor();
                this.controller.doc.setFillColor(this.color || 'black');
                this.controller.doc.rect(this.xLeft, this.yTop, (_a = this.renderWidth) !== null && _a !== void 0 ? _a : this.width, (_b = this.renderHeight) !== null && _b !== void 0 ? _b : this.height, 'F');
                this.controller.doc.setFillColor(oldFillColor);
                return [2 /*return*/];
            });
        });
    };
    return ColoredBrick;
}(__WEBPACK_IMPORTED_MODULE_1__pdf_brick__["a" /* PdfBrick */]));



/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pdf_text__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DescriptionBrick; });


var DescriptionBrick = /** @class */ (function (_super) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */])(DescriptionBrick, _super);
    function DescriptionBrick(question, controller, rect, text) {
        return _super.call(this, question, controller, rect, text) || this;
    }
    return DescriptionBrick;
}(__WEBPACK_IMPORTED_MODULE_1__pdf_text__["a" /* TextBrick */]));



/***/ }),
/* 61 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/* global jsPDF */
/**
 * @license
 * Copyright (c) 2016 Alexander Weidt,
 * https://github.com/BiggA94
 * 
 * Licensed under the MIT License. http://opensource.org/licenses/mit-license
 */

/** 
* jsPDF AcroForm Plugin
* @module AcroForm
*/
var jspdf = __webpack_require__(17);
(function (jsPDF, globalObj) {
    'use strict';

    var jsPDFAPI = jsPDF.API;
    var scope;
    var scaleFactor = 1;
    function toUnicode(str) {
        var unicodeString = '';
        for (var i = 0; i < str.length; i++) {
            var theUnicode = str.charCodeAt(i).toString(16).toUpperCase();
            while (theUnicode.length < 4) {
                theUnicode = '0' + theUnicode;
            };
            unicodeString += theUnicode;
        }
        return '<FEFF' + unicodeString + '>';
    }
    var pdfEscape = function (value) { return value.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)') };
    var pdfUnescape = function (value) { return value.replace(/\\\\/g, '\\').replace(/\\\(/g, '(').replace(/\\\)/g, ')'); };
    function arrayToPdfUnicodeArray(value) {
        var result = '[ ';
        for (var i = 0; i < value.length; i++) {
            result += toUnicode(value[i]);
        }
        result += ' ]'
        return result;
    }
    var f2 = function (number) {
        return number.toFixed(2); // Ie, %.2f
    };

    var f5 = function (number) {
        return number.toFixed(5); // Ie, %.2f
    };

    jsPDFAPI.__acroform__ = {};
    var inherit = function (child, parent) {
        child.prototype = Object.create(parent.prototype);
        child.prototype.constructor = child;
    };

    var scale = function (x) {
        return (x * scaleFactor);
    };
    var antiScale = function (x) {
        return (x / scaleFactor);
    };

    var createFormXObject = function (formObject) {
        var xobj = new AcroFormXObject();
        var height = AcroFormAppearance.internal.getHeight(formObject) || 0;
        var width = AcroFormAppearance.internal.getWidth(formObject) || 0;
        xobj.BBox = [0, 0, Number(f2(width)), Number(f2(height))];
        return xobj;
    };

    /**
    * Bit-Operations
    */
    var setBit = jsPDFAPI.__acroform__.setBit = function (number, bitPosition) {
        number = number || 0;
        bitPosition = bitPosition || 0;

        if (isNaN(number) || isNaN(bitPosition)) {
            throw new Error('Invalid arguments passed to jsPDF.API.__acroform__.setBit');
        }
        var bitMask = 1 << bitPosition;

        number |= bitMask;

        return number;
    };

    var clearBit = jsPDFAPI.__acroform__.clearBit = function (number, bitPosition) {
        number = number || 0;
        bitPosition = bitPosition || 0;

        if (isNaN(number) || isNaN(bitPosition)) {
            throw new Error('Invalid arguments passed to jsPDF.API.__acroform__.clearBit');
        }
        var bitMask = 1 << bitPosition;

        number &= ~bitMask;

        return number;
    };

    var getBit = jsPDFAPI.__acroform__.getBit = function (number, bitPosition) {
        if (isNaN(number) || isNaN(bitPosition)) {
            throw new Error('Invalid arguments passed to jsPDF.API.__acroform__.getBit');
        }
        return (number & (1 << bitPosition)) === 0 ? 0 : 1;
    };

    /*
    * Ff starts counting the bit position at 1 and not like javascript at 0
    */
    var getBitForPdf = jsPDFAPI.__acroform__.getBitForPdf = function (number, bitPosition) {
        if (isNaN(number) || isNaN(bitPosition)) {
            throw new Error('Invalid arguments passed to jsPDF.API.__acroform__.getBitForPdf');
        }
        return getBit(number, bitPosition - 1);
    };

    var setBitForPdf = jsPDFAPI.__acroform__.setBitForPdf = function (number, bitPosition) {
        if (isNaN(number) || isNaN(bitPosition)) {
            throw new Error('Invalid arguments passed to jsPDF.API.__acroform__.setBitForPdf');
        }
        return setBit(number, bitPosition - 1);
    };

    var clearBitForPdf = jsPDFAPI.__acroform__.clearBitForPdf = function (number, bitPosition) {
        if (isNaN(number) || isNaN(bitPosition)) {
            throw new Error('Invalid arguments passed to jsPDF.API.__acroform__.clearBitForPdf');
        }
        return clearBit(number, bitPosition - 1);
    };

    var calculateCoordinates = jsPDFAPI.__acroform__.calculateCoordinates = function (args) {
        var getHorizontalCoordinate = this.internal.getHorizontalCoordinate;
        var getVerticalCoordinate = this.internal.getVerticalCoordinate;
        var x = args[0];
        var y = args[1];
        var w = args[2];
        var h = args[3];

        var coordinates = {};

        coordinates.lowerLeft_X = getHorizontalCoordinate(x) || 0;
        coordinates.lowerLeft_Y = getVerticalCoordinate(y + h) || 0;
        coordinates.upperRight_X = getHorizontalCoordinate(x + w) || 0;
        coordinates.upperRight_Y = getVerticalCoordinate(y) || 0;

        return [Number(f2(coordinates.lowerLeft_X)), Number(f2(coordinates.lowerLeft_Y)), Number(f2(coordinates.upperRight_X)), Number(f2(coordinates.upperRight_Y))];
    };

    var calculateAppearanceStream = function (formObject) {
        if (formObject.appearanceStreamContent) {
            return formObject.appearanceStreamContent;
        }

        if (!formObject.V && !formObject.DV) {
            return;
        }

        // else calculate it

        var stream = [];
        var text = formObject.V || formObject.DV;
        var calcRes = calculateX(formObject, text);
        var fontKey = scope.internal.getFont(formObject.fontName, formObject.fontStyle).id;

        //PDF 32000-1:2008, page 444
        stream.push('/Tx BMC');
        stream.push('q');
        stream.push('BT'); // Begin Text
        stream.push(scope.__private__.encodeColorString(formObject.color));
        stream.push('/' + fontKey + ' ' + f2(calcRes.fontSize) + ' Tf');
        stream.push('1 0 0 1 0 0 Tm');// Transformation Matrix
        stream.push(calcRes.text);
        stream.push('ET'); // End Text    
        stream.push('Q');
        stream.push('EMC');

        var appearanceStreamContent = new createFormXObject(formObject);
        appearanceStreamContent.stream = stream.join("\n");
        return appearanceStreamContent;
    };

    var calculateX = function (formObject, text) {
        if (formObject.isUnicode) text = formObject.trueValue;
         var maxFontSize =
            formObject.fontSize === 0 ? formObject.maxFontSize : formObject.fontSize;
        var returnValue = {
            text: "",
            fontSize: ""
        };
        // Remove Brackets
        text = text.substr(0, 1) == "(" ? text.substr(1) : text;
        text =
            text.substr(text.length - 1) == ")"
            ? text.substr(0, text.length - 1)
            : text;
        // split into array of words
        var textSplit = text.split(" ");
        textSplit = textSplit.map(function (word) {
            return word.split("\n");
        });
        if (!formObject.multiline) {
            textSplit = textSplit.map(function (arr) {
                return [arr.join(" ")]
            });
        }

        var fontSize = maxFontSize; // The Starting fontSize (The Maximum)
        var lineSpacing = 2;
        var borderPadding = 2;

        var height = AcroFormAppearance.internal.getHeight(formObject) || 0;
        height = height < 0 ? -height : height;
        var width = AcroFormAppearance.internal.getWidth(formObject) || 0;
        width = width < 0 ? -width : width;

        var isSmallerThanWidth = function(i, lastLine, fontSize) {
            if (i + 1 < textSplit.length) {
            var tmp = lastLine + " " + textSplit[i + 1][0];
            var TextWidth = calculateFontSpace(tmp, formObject, fontSize).width;
            var FieldWidth = width - 2 * borderPadding;
            return TextWidth <= FieldWidth;
            } else {
            return false;
            }
        };

        fontSize++;
        FontSize: while (fontSize > 0) {
            text = "";
            fontSize--;
            var textHeight = calculateFontSpace("3", formObject, fontSize).height;
            var startY = formObject.multiline
            ? height - fontSize
            : (height - textHeight) / 2;
            startY += lineSpacing;
            var startX;

            var lastY = startY;
            var firstWordInLine = 0,
            lastWordInLine = 0;
            var lastLength;
            var currWord = 0;

            if (fontSize <= 0) {
            // In case, the Text doesn't fit at all
            fontSize = 12;
            text = "(...) Tj\n";
            text +=
                "% Width of Text: " +
                calculateFontSpace(text, formObject, fontSize).width +
                ", FieldWidth:" +
                width +
                "\n";
            break;
            }

            var lastLine = "";
            var lineCount = 0;
            Line: for (var i = 0; i < textSplit.length; i++) {
            if (textSplit.hasOwnProperty(i)) {
                var isWithNewLine = false;
                if (textSplit[i].length !== 1 && currWord !== textSplit[i].length - 1) {
                if (
                    (textHeight + lineSpacing) * (lineCount + 2) + lineSpacing >
                    height
                ) {
                    continue FontSize;
                }

                lastLine += textSplit[i][currWord];
                isWithNewLine = true;
                lastWordInLine = i;
                i--;
                } else {
                lastLine += textSplit[i][currWord] + " ";
                lastLine =
                    lastLine.substr(lastLine.length - 1) == " "
                    ? lastLine.substr(0, lastLine.length - 1)
                    : lastLine;
                var key = parseInt(i);
                var nextLineIsSmaller = isSmallerThanWidth(key, lastLine, fontSize);
                var isLastWord = i >= textSplit.length - 1;

                if (nextLineIsSmaller && !isLastWord) {
                    lastLine += " ";
                    currWord = 0;
                    continue; // Line
                } else if (!nextLineIsSmaller && !isLastWord) {
                    if (!formObject.multiline) {
                    continue FontSize;
                    } else {
                    if (
                        (textHeight + lineSpacing) * (lineCount + 2) + lineSpacing >
                        height
                    ) {
                        // If the Text is higher than the
                        // FieldObject
                        continue FontSize;
                    }
                    lastWordInLine = key;
                    // go on
                    }
                } else if (isLastWord) {
                    lastWordInLine = key;
                } else {
                    if (
                    formObject.multiline &&
                    (textHeight + lineSpacing) * (lineCount + 2) + lineSpacing >
                        height
                    ) {
                    // If the Text is higher than the FieldObject
                    continue FontSize;
                    }
                }
                }
                // Remove last blank

                var line = "";

                for (var x = firstWordInLine; x <= lastWordInLine; x++) {
                    var currLine = textSplit[x];
                    if (formObject.multiline) {
                        if (x === lastWordInLine) {
                        line += currLine[currWord] + " ";
                        currWord = (currWord + 1) % currLine.length;
                        continue;
                        }
                        if (x === firstWordInLine) {
                        line += currLine[currLine.length - 1] + " ";
                        continue;
                        }
                    }
                    line += currLine[0] + " ";
                }

                // Remove last blank
                line =
                line.substr(line.length - 1) == " "
                    ? line.substr(0, line.length - 1)
                    : line;
                // lastLength -= blankSpace.width;
                lastLength = calculateFontSpace(line, formObject, fontSize).width;

                // Calculate startX
                switch (formObject.textAlign) {
                case "right":
                    startX = width - lastLength - borderPadding;
                    break;
                case "center":
                    startX = (width - lastLength) / 2;
                    break;
                case "left":
                default:
                    startX = borderPadding;
                    break;
                }
                text += f2(startX) + " " + f2(lastY) + " Td\n";

                if (formObject.isUnicode) {
                    var fontList = {};
                    fontList[scope.internal.getFont().id] = scope.internal.getFont();
                    var payload = {
                        text: line,
                        x: null,
                        y: null,
                        options: {
                            lang: null
                        },
                        mutex: {
                            pdfEscape: pdfEscape,
                            activeFontKey: scope.internal.getFont().id,
                            fonts: fontList,
                            activeFontSize: formObject.fontSize
                        }
                    };
                    scope.internal.events.publish('postProcessText', payload);
                    text += '<' + payload.text + '> Tj\n';
                }
                else {
                    text += '(' + pdfEscape(line) + ') Tj\n';
                }
                // reset X in PDF
                text += -f2(startX) + " 0 Td\n";

                // After a Line, adjust y position
                lastY = -(fontSize + lineSpacing);

                // Reset for next iteration step
                lastLength = 0;
                firstWordInLine = isWithNewLine ? lastWordInLine : lastWordInLine + 1;
                lineCount++;

                lastLine = "";
                continue Line;
            }
            }
            break;
        }

        returnValue.text = text;
        returnValue.fontSize = fontSize;

        return returnValue;
    };

    /**
    * Small workaround for calculating the TextMetric approximately.
    * 
    * @param text
    * @param fontsize
    * @returns {TextMetrics} (Has Height and Width)
    */
    var calculateFontSpace = function (text, formObject, fontSize) {
        var font = scope.internal.getFont(formObject.fontName, formObject.fontStyle);
        var width = scope.getStringUnitWidth(text, { font: font, fontSize: parseFloat(fontSize), charSpace: 0 }) * parseFloat(fontSize);
        var height = scope.getStringUnitWidth("3", { font: font, fontSize: parseFloat(fontSize), charSpace: 0 }) * parseFloat(fontSize) * 1.5;
        return { height: height, width: width };
    };

    var acroformPluginTemplate = {
        fields: [],
        xForms: [],
        /**
        * acroFormDictionaryRoot contains information about the AcroForm
        * Dictionary 0: The Event-Token, the AcroFormDictionaryCallback has
        * 1: The Object ID of the Root
        */
        acroFormDictionaryRoot: null,
        /**
        * After the PDF gets evaluated, the reference to the root has to be
        * reset, this indicates, whether the root has already been printed
        * out
        */
        printedOut: false,
        internal: null,
        isInitialized: false
    };

    var annotReferenceCallback = function () {
        //set objId to undefined and force it to get a new objId on buildDocument
        scope.internal.acroformPlugin.acroFormDictionaryRoot.objId = undefined;
        var fields = scope.internal.acroformPlugin.acroFormDictionaryRoot.Fields;
        for (var i in fields) {
            if (fields.hasOwnProperty(i)) {
                var formObject = fields[i];
                //set objId to undefined and force it to get a new objId on buildDocument
                formObject.objId = undefined;
                // add Annot Reference!
                if (formObject.hasAnnotation) {
                    // If theres an Annotation Widget in the Form Object, put the
                    // Reference in the /Annot array
                    createAnnotationReference.call(scope, formObject);
                }
            }
        }
    };

    var putForm = function (formObject) {
        if (scope.internal.acroformPlugin.printedOut) {
            scope.internal.acroformPlugin.printedOut = false;
            scope.internal.acroformPlugin.acroFormDictionaryRoot = null;
        }
        if (!scope.internal.acroformPlugin.acroFormDictionaryRoot) {
            initializeAcroForm.call(scope);
        }
        scope.internal.acroformPlugin.acroFormDictionaryRoot.Fields.push(formObject);
    };
    /**
    * Create the Reference to the widgetAnnotation, so that it gets referenced
    * in the Annot[] int the+ (Requires the Annotation Plugin)
    */
    var createAnnotationReference = function (object) {
        var options = {
            type: 'reference',
            object: object
        };
        var findEntry = function (entry) { return (entry.type === options.type && entry.object === options.object); };
        if (scope.internal.getPageInfo(object.page).pageContext.annotations.find(findEntry) === undefined) {
            scope.internal.getPageInfo(object.page).pageContext.annotations.push(options);
        }
    };

    // Callbacks

    var putCatalogCallback = function () {
        // Put reference to AcroForm to DocumentCatalog
        if (typeof scope.internal.acroformPlugin.acroFormDictionaryRoot != 'undefined') {
            // for safety, shouldn't normally be the case
            scope.internal.write('/AcroForm ' + scope.internal.acroformPlugin.acroFormDictionaryRoot.objId + ' ' + 0 + ' R');
        } else {
            throw new Error('putCatalogCallback: Root missing.');
        }
    };

    /**
    * Adds /Acroform X 0 R to Document Catalog, and creates the AcroForm
    * Dictionary
    */
    var AcroFormDictionaryCallback = function () {
        // Remove event
        scope.internal.events.unsubscribe(scope.internal.acroformPlugin.acroFormDictionaryRoot._eventID);
        delete scope.internal.acroformPlugin.acroFormDictionaryRoot._eventID;
        scope.internal.acroformPlugin.printedOut = true;
    };

    /**
    * Creates the single Fields and writes them into the Document
    * 
    * If fieldArray is set, use the fields that are inside it instead of the
    * fields from the AcroRoot (for the FormXObjects...)
    */
    var createFieldCallback = function (fieldArray) {
        var standardFields = (!fieldArray);

        if (!fieldArray) {
            // in case there is no fieldArray specified, we want to print out
            // the Fields of the AcroForm
            // Print out Root
            scope.internal.newObjectDeferredBegin(scope.internal.acroformPlugin.acroFormDictionaryRoot.objId, true);
            scope.internal.acroformPlugin.acroFormDictionaryRoot.putStream();
        }

        fieldArray = fieldArray || scope.internal.acroformPlugin.acroFormDictionaryRoot.Kids;

        for (var i in fieldArray) {
            if (fieldArray.hasOwnProperty(i)) {
                var fieldObject = fieldArray[i];
                var keyValueList = [];
                var oldRect = fieldObject.Rect;

                if (fieldObject.Rect) {
                    fieldObject.Rect = calculateCoordinates.call(this, fieldObject.Rect);
                }

                // Start Writing the Object
                scope.internal.newObjectDeferredBegin(fieldObject.objId, true);

                fieldObject.DA = AcroFormAppearance.createDefaultAppearanceStream(fieldObject);

                if (typeof fieldObject === "object" && typeof fieldObject.getKeyValueListForStream === "function") {
                    keyValueList = fieldObject.getKeyValueListForStream();
                }

                fieldObject.Rect = oldRect;

                if (fieldObject.hasAppearanceStream && !fieldObject.appearanceStreamContent) {
                    // Calculate Appearance
                    var appearance = calculateAppearanceStream.call(this, fieldObject);
                    keyValueList.push({ key: 'AP', value: "<</N " + appearance + ">>" });

                    scope.internal.acroformPlugin.xForms.push(appearance);
                }

                // Assume AppearanceStreamContent is a Array with N,R,D (at least
                // one of them!)
                if (fieldObject.appearanceStreamContent) {
                    var appearanceStreamString = "";
                    // Iterate over N,R and D
                    for (var k in fieldObject.appearanceStreamContent) {
                        if (fieldObject.appearanceStreamContent.hasOwnProperty(k)) {
                            var value = fieldObject.appearanceStreamContent[k];
                            appearanceStreamString += ("/" + k + " ");
                            appearanceStreamString += "<<";
                            if (Object.keys(value).length >= 1 || Array.isArray(value)) {
                                // appearanceStream is an Array or Object!
                                for (var i in value) {
                                    if (value.hasOwnProperty(i)) {
                                        var obj = value[i];
                                        if (typeof obj === 'function') {
                                            // if Function is referenced, call it in order
                                            // to get the FormXObject
                                            obj = obj.call(this, fieldObject);
                                        }
                                        appearanceStreamString += ("/" + i + " " + obj + " ");

                                        // In case the XForm is already used, e.g. OffState
                                        // of CheckBoxes, don't add it
                                        if (!(scope.internal.acroformPlugin.xForms.indexOf(obj) >= 0))
                                            scope.internal.acroformPlugin.xForms.push(obj);

                                    }
                                }
                            } else {
                                obj = value;
                                if (typeof obj === 'function') {
                                    // if Function is referenced, call it in order to
                                    // get the FormXObject
                                    obj = obj.call(this, fieldObject);
                                }
                                appearanceStreamString += ("/" + i + " " + obj);
                                if (!(scope.internal.acroformPlugin.xForms.indexOf(obj) >= 0))
                                    scope.internal.acroformPlugin.xForms.push(obj);
                            }
                            appearanceStreamString += ">>";
                        }
                    }

                    // appearance stream is a normal Object..
                    keyValueList.push({ key: 'AP', value: "<<\n" + appearanceStreamString + ">>" });
                }

                scope.internal.putStream({ additionalKeyValues: keyValueList });

                scope.internal.out("endobj");

            }
        }
        if (standardFields) {
            createXFormObjectCallback.call(this, scope.internal.acroformPlugin.xForms);
        }
    };

    var createXFormObjectCallback = function (fieldArray) {
        for (var i in fieldArray) {
            if (fieldArray.hasOwnProperty(i)) {
                var key = i;
                var fieldObject = fieldArray[i];
                // Start Writing the Object
                scope.internal.newObjectDeferredBegin(fieldObject && fieldObject.objId, true);

                if (typeof fieldObject === "object" && typeof fieldObject.putStream === "function") {
                    fieldObject.putStream();
                }
                delete fieldArray[key];
            }
        }
    };

    var initializeAcroForm = function () {
        if (this.internal !== undefined && (this.internal.acroformPlugin === undefined || this.internal.acroformPlugin.isInitialized === false)) {

            scope = this;

            AcroFormField.FieldNum = 0;
            this.internal.acroformPlugin = JSON.parse(JSON.stringify(acroformPluginTemplate));
            if (this.internal.acroformPlugin.acroFormDictionaryRoot) {
                throw new Error("Exception while creating AcroformDictionary");
            }
            scaleFactor = scope.internal.scaleFactor;
            // The Object Number of the AcroForm Dictionary
            scope.internal.acroformPlugin.acroFormDictionaryRoot = new AcroFormDictionary();

            // add Callback for creating the AcroForm Dictionary
            scope.internal.acroformPlugin.acroFormDictionaryRoot._eventID = scope.internal.events.subscribe('postPutResources', AcroFormDictionaryCallback);

            scope.internal.events.subscribe('buildDocument', annotReferenceCallback); // buildDocument

            // Register event, that is triggered when the DocumentCatalog is
            // written, in order to add /AcroForm
            scope.internal.events.subscribe('putCatalog', putCatalogCallback);

            // Register event, that creates all Fields
            scope.internal.events.subscribe('postPutPages', createFieldCallback);

            scope.internal.acroformPlugin.isInitialized = true;
        }
    };

    //PDF 32000-1:2008, page 26, 7.3.6
    var arrayToPdfArray = jsPDFAPI.__acroform__.arrayToPdfArray = function (array) {
        if (Array.isArray(array)) {
            var content = '[';
            for (var i = 0; i < array.length; i++) {
                if (i !== 0) {
                    content += ' ';
                }
                switch (typeof array[i]) {
                    case 'boolean':
                    case 'number':
                    case 'object':
                        content += array[i].toString();
                        break;
                    case 'string':
                        if (array[i].substr(0, 1) !== '/') {
                            content += '(' + pdfEscape(array[i].toString()) + ')';
                        } else {
                            content += array[i].toString();
                        }
                        break;
                }
            }
            content += ']';
            return content;
        }
        throw new Error('Invalid argument passed to jsPDF.__acroform__.arrayToPdfArray');
    };
    function getMatches(string, regex, index) {
        index || (index = 1); // default to the first capturing group
        var matches = [];
        var match;
        while (match = regex.exec(string)) {
            matches.push(match[index]);
        }
        return matches;
    }
    var pdfArrayToStringArray = function (array) {
        var result = [];
        if (typeof array === "string") {
            result = getMatches(array, /\((.*?)\)/g);
        }
        return result;
    };

    var toPdfString = function (string) {
        string = string || "";
        string.toString();
        string = '(' + pdfEscape(string) + ')';
        return string;
    };

    // ##########################
    // Classes
    // ##########################

    /**
    * @class AcroFormPDFObject
    * @classdesc A AcroFormPDFObject
    */
    var AcroFormPDFObject = function () {
        var _objId;

        /**
        * @name AcroFormPDFObject#objId
        * @type {any}
        */
        Object.defineProperty(this, 'objId', {
            configurable: true,
            get: function () {
                if (!_objId) {
                    _objId = scope.internal.newObjectDeferred();
                }
                return _objId
            },
            set: function (value) {
                _objId = value;
            }
        });
    };

    /**
    * @function AcroFormPDFObject.toString
    */
    AcroFormPDFObject.prototype.toString = function () {
        return this.objId + " 0 R";
    };

    AcroFormPDFObject.prototype.putStream = function () {
        var keyValueList = this.getKeyValueListForStream();
        scope.internal.putStream({ data: this.stream, additionalKeyValues: keyValueList });
        scope.internal.out("endobj");
    };

    /**
    * Returns an key-value-List of all non-configurable Variables from the Object
    * 
    * @name getKeyValueListForStream
    * @returns {string}
    */
    AcroFormPDFObject.prototype.getKeyValueListForStream = function () {
        var createKeyValueListFromFieldObject = function (fieldObject) {
            var keyValueList = [];
            var keys = Object.getOwnPropertyNames(fieldObject).filter(function (key) {
                return (key != 'content' && key != 'appearanceStreamContent' && key.substring(0, 1) != "_");
            });

            for (var i in keys) {
                var propertyDescriptor = Object.getOwnPropertyDescriptor(fieldObject, keys[i]);
                if (propertyDescriptor && propertyDescriptor.configurable === false) {
                    var key = keys[i];
                    var value = fieldObject[key];
                    if (value) {
                        if (Array.isArray(value)) {
                            keyValueList.push({ key: key, value: arrayToPdfArray(value) });
                        } else if (value instanceof AcroFormPDFObject) {
                            // In case it is a reference to another PDFObject,
                            // take the reference number
                            keyValueList.push({ key: key, value: value.objId + " 0 R" });
                        } else if (typeof value !== "function") {
                            keyValueList.push({ key: key, value: value });
                        }
                    }
                }
            }
            return keyValueList;
        };

        return createKeyValueListFromFieldObject(this);
    };

    var AcroFormXObject = function () {
        AcroFormPDFObject.call(this);


        Object.defineProperty(this, 'Type', {
            value: "/XObject",
            configurable: false,
            writeable: true
        });

        Object.defineProperty(this, 'Subtype', {
            value: "/Form",
            configurable: false,
            writeable: true
        });

        Object.defineProperty(this, 'FormType', {
            value: 1,
            configurable: false,
            writeable: true
        });

        var _BBox = [];
        Object.defineProperty(this, 'BBox', {
            configurable: false,
            writeable: true,
            get: function () {
                return _BBox;
            },
            set: function (value) {
                _BBox = value;
            }
        });

        Object.defineProperty(this, 'Resources', {
            value: "2 0 R",
            configurable: false,
            writeable: true
        });

        var _stream;
        Object.defineProperty(this, 'stream', {
            enumerable: false,
            configurable: true,
            set: function (value) {
                _stream = value.trim();
            },
            get: function () {
                if (_stream) {
                    return _stream;
                } else {
                    return null;
                }
            }
        });
    };

    inherit(AcroFormXObject, AcroFormPDFObject);

    var AcroFormDictionary = function () {
        AcroFormPDFObject.call(this);

        var _Kids = [];

        Object.defineProperty(this, 'Kids', {
            enumerable: false,
            configurable: true,
            get: function () {
                if (_Kids.length > 0) {
                    return _Kids;
                } else {
                    return undefined;
                }
            }
        });
        Object.defineProperty(this, 'Fields', {
            enumerable: false,
            configurable: false,
            get: function () {
                return _Kids;
            }
        });

        // Default Appearance
        var _DA;
        Object.defineProperty(this, 'DA', {
            enumerable: false,
            configurable: false,
            get: function () {
                if (!_DA) {
                    return undefined;
                }
                return '(' + _DA + ')'
            },
            set: function (value) {
                _DA = value;
            }
        });
    };

    inherit(AcroFormDictionary, AcroFormPDFObject);

    /**
    * The Field Object contains the Variables, that every Field needs
    * 
    * @class AcroFormField
    * @classdesc An AcroForm FieldObject
    */
    var AcroFormField = function () {
        AcroFormPDFObject.call(this);

        //Annotation-Flag See Table 165
        var _F = 4;
        this.isUnicode = false;
        this.trueValue = '';
        Object.defineProperty(this, 'F', {
            enumerable: false,
            configurable: false,
            get: function () {
                return _F;
            },
            set: function (value) {
                if (!isNaN(value)) {
                    _F = value;
                } else {
                    throw new Error('Invalid value "' + value + '" for attribute F supplied.');
                }
            }
        });

        /**
        * (PDF 1.2) If set, print the annotation when the page is printed. If clear, never print the annotation, regardless of wether is is displayed on the screen. 
        * NOTE 2 This can be useful for annotations representing interactive pushbuttons, which would serve no meaningful purpose on the printed page.
        *
        * @name AcroFormField#showWhenPrinted
        * @default true
        * @type {boolean}
        */
        Object.defineProperty(this, 'showWhenPrinted', {
            enumerable: true,
            configurable: true,
            get: function () {
                return Boolean(getBitForPdf(_F, 3));
            },
            set: function (value) {
                if (Boolean(value) === true) {
                    this.F = setBitForPdf(_F, 3);
                } else {
                    this.F = clearBitForPdf(_F, 3);
                }
            }
        });

        var _Ff = 0;
        Object.defineProperty(this, 'Ff', {
            enumerable: false,
            configurable: false,
            get: function () {
                return _Ff;
            },
            set: function (value) {
                if (!isNaN(value)) {
                    _Ff = value;
                } else {
                    throw new Error('Invalid value "' + value + '" for attribute Ff supplied.');
                }
            }
        });

        var _Rect = [];
        Object.defineProperty(this, 'Rect', {
            enumerable: false,
            configurable: false,
            get: function () {
                if (_Rect.length === 0) {
                    return undefined;
                }
                return _Rect;
            },
            set: function (value) {
                if (typeof value !== "undefined") {
                    _Rect = value;
                } else {
                    _Rect = [];
                }
            }
        });

        /**
        * The x-position of the field.
        *
        * @name AcroFormField#x
        * @default null
        * @type {number}
        */
        Object.defineProperty(this, 'x', {
            enumerable: true,
            configurable: true,
            get: function () {
                if (!_Rect || isNaN(_Rect[0])) {
                    return 0;
                }
                return antiScale(_Rect[0]);
            },
            set: function (value) {
                _Rect[0] = scale(value);
            }
        });

        /**
        * The y-position of the field.
        *
        * @name AcroFormField#y
        * @default null
        * @type {number}
        */
        Object.defineProperty(this, 'y', {
            enumerable: true,
            configurable: true,
            get: function () {
                if (!_Rect || isNaN(_Rect[1])) {
                    return 0;
                }
                return antiScale(_Rect[1]);
            },
            set: function (value) {
                _Rect[1] = scale(value);
            }
        });

        /**
        * The width of the field.
        *
        * @name AcroFormField#width
        * @default null
        * @type {number}
        */
        Object.defineProperty(this, 'width', {
            enumerable: true,
            configurable: true,
            get: function () {
                if (!_Rect || isNaN(_Rect[2])) {
                    return 0;
                }
                return antiScale(_Rect[2]);
            },
            set: function (value) {
                _Rect[2] = scale(value);
            }
        });

        /**
        * The height of the field.
        *
        * @name AcroFormField#height
        * @default null
        * @type {number}
        */
        Object.defineProperty(this, 'height', {
            enumerable: true,
            configurable: true,
            get: function () {
                if (!_Rect || isNaN(_Rect[3])) {
                    return 0;
                }
                return antiScale(_Rect[3]);
            },
            set: function (value) {
                _Rect[3] = scale(value);
            }
        });

        var _FT = "";
        Object.defineProperty(this, 'FT', {
            enumerable: true,
            configurable: false,
            get: function () {
                return _FT
            },
            set: function (value) {
                switch (value) {
                    case '/Btn':
                    case '/Tx':
                    case '/Ch':
                    case '/Sig':
                        _FT = value;
                        break;
                    default:
                        throw new Error('Invalid value "' + value + '" for attribute FT supplied.');
                }
            }
        });

        var _T = null;

        Object.defineProperty(this, 'T', {
            enumerable: true,
            configurable: false,
            get: function () {
                if (!_T || _T.length < 1) {
                    // In case of a Child from a Radio´Group, you don't need a FieldName
                    if (this instanceof AcroFormChildClass) {
                        return undefined;
                    }
                    _T = "FieldObject" + (AcroFormField.FieldNum++);
                }
                return '(' + pdfEscape(_T) + ')';
            },
            set: function (value) {
                _T = value.toString();
            }
        });

        /**
        * (Optional) The partial field name (see 12.7.3.2, “Field Names”).
        *
        * @name AcroFormField#fieldName
        * @default null
        * @type {string}
        */
        Object.defineProperty(this, 'fieldName', {
            configurable: true,
            enumerable: true,
            get: function () {
                return _T;
            },
            set: function (value) {
                _T = value;
            }
        });

        var _fontName = 'helvetica';
        /**
        * The fontName of the font to be used.
        *
        * @name AcroFormField#fontName
        * @default 'helvetica'
        * @type {string}
        */
        Object.defineProperty(this, 'fontName', {
            enumerable: true,
            configurable: true,
            get: function () {
                return _fontName;
            },
            set: function (value) {
                _fontName = value;
            }
        });

        var _fontStyle = 'normal';
        /**
        * The fontStyle of the font to be used.
        *
        * @name AcroFormField#fontStyle
        * @default 'normal'
        * @type {string}
        */
        Object.defineProperty(this, 'fontStyle', {
            enumerable: true,
            configurable: true,
            get: function () {
                return _fontStyle;
            },
            set: function (value) {
                _fontStyle = value;
            }
        });

        var _fontSize = 0;
        /**
        * The fontSize of the font to be used.
        *
        * @name AcroFormField#fontSize
        * @default 0 (for auto)
        * @type {number}
        */
        Object.defineProperty(this, 'fontSize', {
            enumerable: true,
            configurable: true,
            get: function () {
                return antiScale(_fontSize);
            },
            set: function (value) {
                _fontSize = scale(value);
            }
        });

        var _maxFontSize = 50;
        /**
        * The maximum fontSize of the font to be used.
        *
        * @name AcroFormField#maxFontSize
        * @default 0 (for auto)
        * @type {number}
        */
        Object.defineProperty(this, 'maxFontSize', {
            enumerable: true,
            configurable: true,
            get: function () {
                return antiScale(_maxFontSize);
            },
            set: function (value) {
                _maxFontSize = scale(value);
            }
        });

        var _color = 'black';
        /**
        * The color of the text
        *
        * @name AcroFormField#color
        * @default 'black'
        * @type {string|rgba}
        */
        Object.defineProperty(this, 'color', {
            enumerable: true,
            configurable: true,
            get: function () {
                return _color;
            },
            set: function (value) {
                _color = value;
            }
        });

        var _DA = '/F1 0 Tf 0 g';
        // Defines the default appearance (Needed for variable Text)
        Object.defineProperty(this, 'DA', {
            enumerable: true,
            configurable: false,
            get: function () {
                if (!_DA
                    || this instanceof AcroFormChildClass
                    || this instanceof AcroFormTextField) {
                    return undefined;
                }
                return toPdfString(_DA);
            },
            set: function (value) {
                value = value.toString();
                _DA = value;
            }
        });


        var _DV = null;
        Object.defineProperty(this, 'DV', {
            enumerable: false,
            configurable: false,
            get: function () {
                if (!_DV) {
                    return undefined;
                }
                if ((this instanceof AcroFormButton === false)) {
                    return toPdfString(_DV);
                }
                return _DV;
            },
            set: function (value) {
                value = value.toString();
                if ((this instanceof AcroFormButton === false)) {
                    if (value.substr(0, 1) === '(') {
                        _DV = pdfUnescape(value.substr(1, value.length - 2));
                    } else {
                        _DV = pdfUnescape(value);
                    }
                } else {
                    _DV = value;
                }
            }
        });

        /**
        * (Optional; inheritable) The default value to which the field reverts when a reset-form action is executed (see 12.7.5.3, “Reset-Form Action”). The format of this value is the same as that of value. 
        *
        * @name AcroFormField#defaultValue
        * @default null
        * @type {any}
        */
        Object.defineProperty(this, 'defaultValue', {
            enumerable: true,
            configurable: true,
            get: function () {
                if ((this instanceof AcroFormButton === true)) {
                    return pdfUnescape(_DV.substr(1, _DV.length - 1));
                } else {
                    return _DV;
                }
            },
            set: function (value) {
                value = value.toString();
                if ((this instanceof AcroFormButton === true)) {
                    _DV = '/' + value;
                } else {
                    _DV = value;
                }
            }
        });

        var _V = null;
        Object.defineProperty(this, 'V', {
            enumerable: false,
            configurable: false,
            get: function () {
                if (this.isUnicode) {
                    return _V;
                }
                if (!_V) {
                    return undefined;
                }
                if ((this instanceof AcroFormButton === false)) {
                    return toPdfString(_V);
                }
                return _V;
            },
            set: function (value) {
                value = value.toString();
                if (this.isUnicode) {
                    _V = toUnicode(value);
                    this.trueValue = value;
                }
                else {
                    if ((this instanceof AcroFormButton === false)) {
                        if (value.substr(0, 1) === '(') {
                            _V = pdfUnescape(value.substr(1, value.length - 2));
                        } else {
                            _V = pdfUnescape(value);
                        }
                    } else {
                        _V = value;
                    }
                }
            }
        });

        /**
        * (Optional; inheritable) The field’s value, whose format varies depending on the field type. See the descriptions of individual field types for further information. 
        *
        * @name AcroFormField#value
        * @default null
        * @type {any}
        */
        Object.defineProperty(this, 'value', {
            enumerable: true,
            configurable: true,
            get: function () {
                if ((this instanceof AcroFormButton === true)) {
                    return pdfUnescape(_V.substr(1, _V.length - 1));
                } else {
                    return _V;
                }
            },
            set: function (value) {
                value = value.toString();
                if ((this instanceof AcroFormButton === true)) {
                    _V = '/' + value;
                } else {
                    _V = value;
                }
            }
        });

        /**
        * Check if field has annotations
        *
        * @name AcroFormField#hasAnnotation
        * @readonly
        * @type {boolean}
        */
        Object.defineProperty(this, 'hasAnnotation', {
            enumerable: true,
            configurable: true,
            get: function () {
                return (this.Rect);
            }
        });

        Object.defineProperty(this, 'Type', {
            enumerable: true,
            configurable: false,
            get: function () {
                return (this.hasAnnotation) ? "/Annot" : null;
            }
        });

        Object.defineProperty(this, 'Subtype', {
            enumerable: true,
            configurable: false,
            get: function () {
                return (this.hasAnnotation) ? "/Widget" : null;
            }
        });

        var _hasAppearanceStream = false;
        /**
        * true if field has an appearanceStream
        *
        * @name AcroFormField#hasAppearanceStream
        * @readonly
        * @type {boolean}
        */
        Object.defineProperty(this, 'hasAppearanceStream', {
            enumerable: true,
            configurable: true,
            writeable: true,
            get: function () {
                return _hasAppearanceStream;
            },
            set: function (value) {
                value = Boolean(value);
                _hasAppearanceStream = value;
            }
        });

        /**
        * The page on which the AcroFormField is placed
        *
        * @name AcroFormField#page
        * @type {number}
        */
        var _page;
        Object.defineProperty(this, 'page', {
            enumerable: true,
            configurable: true,
            writeable: true,
            get: function () {
                if (!_page) {
                    return undefined;
                }
                return _page
            },
            set: function (value) {
                _page = value;
            }
        });

        /**
        * If set, the user may not change the value of the field. Any associated widget annotations will not interact with the user; that is, they will not respond to mouse clicks or change their appearance in response to mouse motions. This flag is useful for fields whose values are computed or imported from a database. 
        *
        * @name AcroFormField#readOnly
        * @default false
        * @type {boolean}
        */
        Object.defineProperty(this, 'readOnly', {
            enumerable: true,
            configurable: true,
            get: function () {
                return Boolean(getBitForPdf(this.Ff, 1));
            },
            set: function (value) {
                if (Boolean(value) === true) {
                    this.Ff = setBitForPdf(this.Ff, 1);
                } else {
                    this.Ff = clearBitForPdf(this.Ff, 1);
                }
            }
        });

        /**
        * If set, the field shall have a value at the time it is exported by a submitform action (see 12.7.5.2, “Submit-Form Action”). 
        *
        * @name AcroFormField#required
        * @default false
        * @type {boolean}
        */
        Object.defineProperty(this, 'required', {
            enumerable: true,
            configurable: true,
            get: function () {
                return Boolean(getBitForPdf(this.Ff, 2));
            },
            set: function (value) {
                if (Boolean(value) === true) {
                    this.Ff = setBitForPdf(this.Ff, 2);
                } else {
                    this.Ff = clearBitForPdf(this.Ff, 2);
                }
            }
        });

        /**
        * If set, the field shall not be exported by a submit-form action (see 12.7.5.2, “Submit-Form Action”)
        *
        * @name AcroFormField#noExport
        * @default false
        * @type {boolean}
        */
        Object.defineProperty(this, 'noExport', {
            enumerable: true,
            configurable: true,
            get: function () {
                return Boolean(getBitForPdf(this.Ff, 3));
            },
            set: function (value) {
                if (Boolean(value) === true) {
                    this.Ff = setBitForPdf(this.Ff, 3);
                } else {
                    this.Ff = clearBitForPdf(this.Ff, 3);
                }
            }
        });


        var _Q = null;
        Object.defineProperty(this, 'Q', {
            enumerable: true,
            configurable: false,
            get: function () {
                if (_Q === null) {
                    return undefined;
                }
                return _Q;
            },
            set: function (value) {
                if ([0, 1, 2].indexOf(value) !== -1) {
                    _Q = value;
                } else {
                    throw new Error('Invalid value "' + value + '" for attribute Q supplied.');
                }
            }
        });

        /**
        * (Optional; inheritable) A code specifying the form of quadding (justification) that shall be used in displaying the text:
        * 'left', 'center', 'right'
        *
        * @name AcroFormField#textAlign
        * @default 'left'
        * @type {string}
        */
        Object.defineProperty(this, 'textAlign', {
            get: function () {
                var result;
                switch (_Q) {
                    case 0:
                    default:
                        result = 'left';
                        break;
                    case 1:
                        result = 'center';
                        break;
                    case 2:
                        result = 'right';
                        break;
                }
                return result;
            },
            configurable: true,
            enumerable: true,
            set: function (value) {
                switch (value) {
                    case 'right':
                    case 2:
                        _Q = 2;
                        break;
                    case 'center':
                    case 1:
                        _Q = 1;
                        break;
                    case 'left':
                    case 0:
                    default:
                        _Q = 0;
                }
            }
        });

    };

    inherit(AcroFormField, AcroFormPDFObject);

    /**
    * @class AcroFormChoiceField
    * @extends AcroFormField
    */
    var AcroFormChoiceField = function () {
        AcroFormField.call(this);
        // Field Type = Choice Field
        this.FT = "/Ch";
        // options
        this.V = '()';

        this.fontName = 'zapfdingbats';
        // Top Index
        var _TI = 0;

        Object.defineProperty(this, 'TI', {
            enumerable: true,
            configurable: false,
            get: function () {
                return _TI;
            },
            set: function (value) {
                _TI = value;
            }
        });

        // MK fix for Acrobat
        var _MK = '<< /BG [ 0.975 0.975 0.975 ]  >>';
        Object.defineProperty(this, 'MK', {
            enumerable: true,
            configurable: false,
            get: function () {
                return _MK;
            },
            set: function (value) {
                _MK = value;
            }
        });

        /**
        * (Optional) For scrollable list boxes, the top index (the index in the Opt array of the first option visible in the list). Default value: 0.
        * 
        * @name AcroFormChoiceField#topIndex
        * @default 0
        * @type {number}
        */
        Object.defineProperty(this, 'topIndex', {
            enumerable: true,
            configurable: true,
            get: function () {
                return _TI;
            },
            set: function (value) {
                _TI = value;
            }
        });

        var _Opt = [];
        Object.defineProperty(this, 'Opt', {
            enumerable: true,
            configurable: false,
            get: function () {
                if (this.isUnicode) {
                    return arrayToPdfUnicodeArray(_Opt);
                }
                return arrayToPdfArray(_Opt);
            },
            set: function (value) {
                _Opt = pdfArrayToStringArray(value);
            }
        });


        /**
        * @memberof AcroFormChoiceField
        * @name getOptions
        * @function
        * @instance
        * @returns {array} array of Options
        */
        this.getOptions = function () {
            return _Opt;
        }

        /**
        * @memberof AcroFormChoiceField
        * @name setOptions
        * @function
        * @instance
        * @param {array} value
        */
        this.setOptions = function (value) {
            _Opt = value;
            if (this.sort) {
                _Opt.sort();
            }
        }

        /**
        * @memberof AcroFormChoiceField
        * @name addOption
        * @function
        * @instance
        * @param {string} value
        */
        this.addOption = function (value) {
            value = value || "";
            value = value.toString();
            _Opt.push(value);
            if (this.sort) {
                _Opt.sort();
            }
        }

        /**
        * @memberof AcroFormChoiceField
        * @name removeOption
        * @function
        * @instance
        * @param {string} value
        * @param {boolean} allEntries (default: false)
        */
        this.removeOption = function (value, allEntries) {
            allEntries = allEntries || false
            value = value || "";
            value = value.toString();

            while (_Opt.indexOf(value) !== -1) {
                _Opt.splice(_Opt.indexOf(value), 1);
                if (allEntries === false) {
                    break;
                }
            }
        };

        /**
        * If set, the field is a combo box; if clear, the field is a list box. 
        *
        * @name AcroFormChoiceField#combo
        * @default false
        * @type {boolean}
        */
        Object.defineProperty(this, 'combo', {
            enumerable: true,
            configurable: true,
            get: function () {
                return Boolean(getBitForPdf(this.Ff, 18));
            },
            set: function (value) {
                if (Boolean(value) === true) {
                    this.Ff = setBitForPdf(this.Ff, 18);
                } else {
                    this.Ff = clearBitForPdf(this.Ff, 18);
                }
            }
        });

        /**
        * If set, the combo box shall include an editable text box as well as a drop-down list; if clear, it shall include only a drop-down list. This flag shall be used only if the Combo flag is set. 
        *
        * @name AcroFormChoiceField#edit
        * @default false
        * @type {boolean}
        */
        Object.defineProperty(this, 'edit', {
            enumerable: true,
            configurable: true,
            get: function () {
                return Boolean(getBitForPdf(this.Ff, 19));
            },
            set: function (value) {
                //PDF 32000-1:2008, page 444
                if (this.combo === true) {
                    if (Boolean(value) === true) {
                        this.Ff = setBitForPdf(this.Ff, 19);
                    } else {
                        this.Ff = clearBitForPdf(this.Ff, 19);
                    }
                }
            }
        });

        /**
        * If set, the field’s option items shall be sorted alphabetically. This flag is intended for use by writers, not by readers. Conforming readers shall display the options in the order in which they occur in the Opt array (see Table 231). 
        *
        * @name AcroFormChoiceField#sort
        * @default false
        * @type {boolean}
        */
        Object.defineProperty(this, 'sort', {
            enumerable: true,
            configurable: true,
            get: function () {
                return Boolean(getBitForPdf(this.Ff, 20));
            },
            set: function (value) {
                if (Boolean(value) === true) {
                    this.Ff = setBitForPdf(this.Ff, 20);
                    _Opt.sort();
                } else {
                    this.Ff = clearBitForPdf(this.Ff, 20);
                }
            }
        });

        /**
        * (PDF 1.4) If set, more than one of the field’s option items may be selected simultaneously; if clear, at most one item shall be selected 
        *
        * @name AcroFormChoiceField#multiSelect
        * @default false
        * @type {boolean}
        */
        Object.defineProperty(this, 'multiSelect', {
            enumerable: true,
            configurable: true,
            get: function () {
                return Boolean(getBitForPdf(this.Ff, 22));
            },
            set: function (value) {
                if (Boolean(value) === true) {
                    this.Ff = setBitForPdf(this.Ff, 22);

                } else {
                    this.Ff = clearBitForPdf(this.Ff, 22);
                }
            }
        });

        /**
        * (PDF 1.4) If set, text entered in the field shall not be spellchecked. This flag shall not be used unless the Combo and Edit flags are both set. 
        *
        * @name AcroFormChoiceField#doNotSpellCheck
        * @default false
        * @type {boolean}
        */
        Object.defineProperty(this, 'doNotSpellCheck', {
            enumerable: true,
            configurable: true,
            get: function () {
                return Boolean(getBitForPdf(this.Ff, 23));
            },
            set: function (value) {
                if (Boolean(value) === true) {
                    this.Ff = setBitForPdf(this.Ff, 23);
                } else {
                    this.Ff = clearBitForPdf(this.Ff, 23);
                }
            }
        });

        /**
        * (PDF 1.5) If set, the new value shall be committed as soon as a selection is made (commonly with the pointing device). In this case, supplying a value for a field involves three actions: selecting the field for fill-in, selecting a choice for the fill-in value, and leaving that field, which finalizes or “commits” the data choice and triggers any actions associated with the entry or changing of this data. If this flag is on, then processing does not wait for leaving the field action to occur, but immediately proceeds to the third step.
        * This option enables applications to perform an action once a selection is made, without requiring the user to exit the field. If clear, the new value is not committed until the user exits the field.
        *
        * @name AcroFormChoiceField#commitOnSelChange
        * @default false
        * @type {boolean}
        */
        Object.defineProperty(this, 'commitOnSelChange', {
            enumerable: true,
            configurable: true,
            get: function () {
                return Boolean(getBitForPdf(this.Ff, 27));
            },
            set: function (value) {
                if (Boolean(value) === true) {
                    this.Ff = setBitForPdf(this.Ff, 27);
                } else {
                    this.Ff = clearBitForPdf(this.Ff, 27);
                }
            }
        });


        this.hasAppearanceStream = false;
    };
    inherit(AcroFormChoiceField, AcroFormField);

    /**
    * @class AcroFormListBox
    * @extends AcroFormChoiceField
    * @extends AcroFormField
    */
    var AcroFormListBox = function () {
        AcroFormChoiceField.call(this);
        this.fontName = 'helvetica';

        //PDF 32000-1:2008, page 444
        this.combo = false;
    };
    inherit(AcroFormListBox, AcroFormChoiceField);

    /**
    * @class AcroFormComboBox 
    * @extends AcroFormListBox
    * @extends AcroFormChoiceField
    * @extends AcroFormField
    */
    var AcroFormComboBox = function () {
        AcroFormListBox.call(this);
        this.combo = true;
    };
    inherit(AcroFormComboBox, AcroFormListBox);

    /**
    * @class AcroFormEditBox 
    * @extends AcroFormComboBox
    * @extends AcroFormListBox
    * @extends AcroFormChoiceField
    * @extends AcroFormField
    */
    var AcroFormEditBox = function () {
        AcroFormComboBox.call(this);
        this.edit = true;
    };
    inherit(AcroFormEditBox, AcroFormComboBox);

    /**
    * @class AcroFormButton
    * @extends AcroFormField
    */
    var AcroFormButton = function () {
        AcroFormField.call(this);
        this.FT = "/Btn";

        /**
        * (Radio buttons only) If set, exactly one radio button shall be selected at all times; selecting the currently selected button has no effect. If clear, clicking the selected button deselects it, leaving no button selected.
        * 
        * @name AcroFormButton#noToggleToOff
        * @type {boolean}
        */
        Object.defineProperty(this, 'noToggleToOff', {
            enumerable: true,
            configurable: true,
            get: function () {
                return Boolean(getBitForPdf(this.Ff, 15));
            },
            set: function (value) {
                if (Boolean(value) === true) {
                    this.Ff = setBitForPdf(this.Ff, 15);
                } else {
                    this.Ff = clearBitForPdf(this.Ff, 15);
                }
            }
        });

        /**
        * If set, the field is a set of radio buttons; if clear, the field is a checkbox. This flag may be set only if the Pushbutton flag is clear. 
        * 
        * @name AcroFormButton#radio
        * @type {boolean}
        */
        Object.defineProperty(this, 'radio', {
            enumerable: true,
            configurable: true,
            get: function () {
                return Boolean(getBitForPdf(this.Ff, 16));
            },
            set: function (value) {
                if (Boolean(value) === true) {
                    this.Ff = setBitForPdf(this.Ff, 16);
                } else {
                    this.Ff = clearBitForPdf(this.Ff, 16);
                }
            }
        });

        /**
        * If set, the field is a pushbutton that does not retain a permanent value. 
        *
        * @name AcroFormButton#pushButton
        * @type {boolean}
        */
        Object.defineProperty(this, 'pushButton', {
            enumerable: true,
            configurable: true,
            get: function () {
                return Boolean(getBitForPdf(this.Ff, 17));
            },
            set: function (value) {
                if (Boolean(value) === true) {
                    this.Ff = setBitForPdf(this.Ff, 17);
                } else {
                    this.Ff = clearBitForPdf(this.Ff, 17);
                }
            }
        });

        /**
        * (PDF 1.5) If set, a group of radio buttons within a radio button field that use the same value for the on state will turn on and off in unison; that is if one is checked, they are all checked. If clear, the buttons are mutually exclusive (the same behavior as HTML radio buttons).
        *
        * @name AcroFormButton#radioIsUnison
        * @type {boolean}
        */
        Object.defineProperty(this, 'radioIsUnison', {
            enumerable: true,
            configurable: true,
            get: function () {
                return Boolean(getBitForPdf(this.Ff, 26));
            },
            set: function (value) {
                if (Boolean(value) === true) {
                    this.Ff = setBitForPdf(this.Ff, 26);
                } else {
                    this.Ff = clearBitForPdf(this.Ff, 26);
                }
            }
        });

        var _MK = {};
        Object.defineProperty(this, 'MK', {
            enumerable: false,
            configurable: false,
            get: function () {
                if (Object.keys(_MK).length !== 0) {
                    var result = [];
                    result.push('<<');
                    var key;
                    for (key in _MK) {
                        result.push('/' + key + ' (' + _MK[key] + ')');
                    }
                    result.push('>>');
                    return result.join('\n');
                }
                return undefined;
            },
            set: function (value) {
                if (typeof value === "object") {
                    _MK = value
                }
            }
        });

        /**
        * From the PDF reference:
        * (Optional, button fields only) The widget annotation's normal caption which shall be displayed when it is not interacting with the user. 
        * Unlike the remaining entries listed in this Table which apply only to widget annotations associated with pushbutton fields (see Pushbuttons in 12.7.4.2, "Button Fields"), the CA entry may be used with any type of button field, including check boxes (see Check Boxes in 12.7.4.2, "Button Fields") and radio buttons (Radio Buttons in 12.7.4.2, "Button Fields").
        *
        * - '8' = Cross, 
        * - 'l' =  Circle,
        * - '' = nothing
        * @name AcroFormButton#caption
        * @type {string}
        */
        Object.defineProperty(this, 'caption', {
            enumerable: true,
            configurable: true,
            get: function () {
                return _MK.CA || '';
            },
            set: function (value) {
                if (typeof value === "string") {
                    _MK.CA = value;
                }
            }
        });

        var _AS;
        Object.defineProperty(this, 'AS', {
            enumerable: false,
            configurable: false,
            get: function () {
                return _AS;
            },
            set: function (value) {
                _AS = value;
            }
        });


        /**
        * (Required if the appearance dictionary AP contains one or more subdictionaries; PDF 1.2) The annotation's appearance state, which selects the applicable appearance stream from an appearance subdictionary (see Section 12.5.5, "Appearance Streams")
        *
        * @name AcroFormButton#appearanceState
        * @type {any}
        */
        Object.defineProperty(this, 'appearanceState', {
            enumerable: true,
            configurable: true,
            get: function () {
                return _AS.substr(1, _AS.length - 1);
            },
            set: function (value) {
                _AS = '/' + value;
            }
        });

    };
    inherit(AcroFormButton, AcroFormField);

    /**
    * @class AcroFormPushButton
    * @extends AcroFormButton
    * @extends AcroFormField
    */
    var AcroFormPushButton = function () {
        AcroFormButton.call(this);
        this.pushButton = true;
    };
    inherit(AcroFormPushButton, AcroFormButton);

    /**
    * @class AcroFormRadioButton
    * @extends AcroFormButton
    * @extends AcroFormField
    */
    var AcroFormRadioButton = function () {
        AcroFormButton.call(this);
        this.radio = true;
        this.pushButton = false;

        var _Kids = [];
        Object.defineProperty(this, 'Kids', {
            enumerable: true,
            configurable: false,
            get: function () {
                return _Kids;
            },
            set: function (value) {
                if (typeof value !== "undefined") {
                    _Kids = value;
                } else {
                    _Kids = [];
                }
            }
        });
    };
    inherit(AcroFormRadioButton, AcroFormButton);

    /**
    * The Child class of a RadioButton (the radioGroup) -> The single Buttons
    * 
    * @class AcroFormChildClass
    * @extends AcroFormField
    * @ignore
    */
    var AcroFormChildClass = function () {
        AcroFormField.call(this);

        var _parent;
        Object.defineProperty(this, 'Parent', {
            enumerable: false,
            configurable: false,
            get: function () {
                return _parent;
            },
            set: function (value) {
                _parent = value;
            }
        });

        var _optionName;
        Object.defineProperty(this, 'optionName', {
            enumerable: false,
            configurable: true,
            get: function () {
                return _optionName;
            },
            set: function (value) {
                _optionName = value;
            }
        });

        var _MK = {};
        Object.defineProperty(this, 'MK', {
            enumerable: false,
            configurable: false,
            get: function () {
                var result = [];
                result.push('<<');
                var key;
                for (key in _MK) {
                    result.push('/' + key + ' (' + _MK[key] + ')');
                }
                result.push('>>');
                return result.join('\n');
            },
            set: function (value) {
                if (typeof value === "object") {
                    _MK = value
                }
            }
        });

        /**
        * From the PDF reference:
        * (Optional, button fields only) The widget annotation's normal caption which shall be displayed when it is not interacting with the user. 
        * Unlike the remaining entries listed in this Table which apply only to widget annotations associated with pushbutton fields (see Pushbuttons in 12.7.4.2, "Button Fields"), the CA entry may be used with any type of button field, including check boxes (see Check Boxes in 12.7.4.2, "Button Fields") and radio buttons (Radio Buttons in 12.7.4.2, "Button Fields").
        *
        * - '8' = Cross, 
        * - 'l' =  Circle,
        * - '' = nothing
        * @name AcroFormButton#caption
        * @type {string}
        */
        Object.defineProperty(this, 'caption', {
            enumerable: true,
            configurable: true,
            get: function () {
                return _MK.CA || '';
            },
            set: function (value) {
                if (typeof value === "string") {
                    _MK.CA = value;
                }
            }
        });

        var _AS;
        Object.defineProperty(this, 'AS', {
            enumerable: false,
            configurable: false,
            get: function () {
                return _AS;
            },
            set: function (value) {
                _AS = value;
            }
        });

        /**
        * (Required if the appearance dictionary AP contains one or more subdictionaries; PDF 1.2) The annotation's appearance state, which selects the applicable appearance stream from an appearance subdictionary (see Section 12.5.5, "Appearance Streams")
        *
        * @name AcroFormButton#appearanceState
        * @type {any}
        */
        Object.defineProperty(this, 'appearanceState', {
            enumerable: true,
            configurable: true,
            get: function () {
                return _AS.substr(1, _AS.length - 1);
            },
            set: function (value) {
                _AS = '/' + value;
            }
        });
        this.caption = 'l';
        this.appearanceState = 'Off';
        // todo: set AppearanceType as variable that can be set from the
        // outside...
        this._AppearanceType = AcroFormAppearance.RadioButton.Circle;
        // The Default appearanceType is the Circle
        this.appearanceStreamContent = this._AppearanceType.createAppearanceStream(this.optionName);
    };
    inherit(AcroFormChildClass, AcroFormField);

    AcroFormRadioButton.prototype.setAppearance = function (appearance) {
        if (!('createAppearanceStream' in appearance && 'getCA' in appearance)) {
            throw new Error("Couldn't assign Appearance to RadioButton. Appearance was Invalid!");
        }
        for (var objId in this.Kids) {
            if (this.Kids.hasOwnProperty(objId)) {
                var child = this.Kids[objId];
                child.appearanceStreamContent = appearance.createAppearanceStream(child.optionName);
                child.caption = appearance.getCA();
            }
        }
    };

    AcroFormRadioButton.prototype.createOption = function (name) {
        // Create new Child for RadioGroup
        var child = new AcroFormChildClass();
        child.Parent = this;
        child.optionName = name;
        // Add to Parent
        this.Kids.push(child);

        addField.call(this, child);

        return child;
    };

    /**
    * @class AcroFormCheckBox
    * @extends AcroFormButton
    * @extends AcroFormField
    */
    var AcroFormCheckBox = function () {
        AcroFormButton.call(this);

        this.fontName = 'zapfdingbats';
        this.caption = '3';
        this.appearanceState = 'On';
        this.value = "On";
        this.textAlign = 'center';
        this.appearanceStreamContent = AcroFormAppearance.CheckBox.createAppearanceStream();
    };
    inherit(AcroFormCheckBox, AcroFormButton);

    /**
    * @class AcroFormTextField
    * @extends AcroFormField
    */
    var AcroFormTextField = function () {
        AcroFormField.call(this);
        this.FT = '/Tx';

        /**
        * If set, the field may contain multiple lines of text; if clear, the field’s text shall be restricted to a single line. 
        *
        * @name AcroFormTextField#multiline
        * @type {boolean}
        */
        Object.defineProperty(this, 'multiline', {
            enumerable: true,
            configurable: true,
            get: function () {
                return Boolean(getBitForPdf(this.Ff, 13));
            },
            set: function (value) {
                if (Boolean(value) === true) {
                    this.Ff = setBitForPdf(this.Ff, 13);
                } else {
                    this.Ff = clearBitForPdf(this.Ff, 13);
                }
            }
        });

        /**
        * (PDF 1.4) If set, the text entered in the field represents the pathname of a file whose contents shall be submitted as the value of the field. 
        * 
        * @name AcroFormTextField#fileSelect
        * @type {boolean}
        */
        Object.defineProperty(this, 'fileSelect', {
            enumerable: true,
            configurable: true,
            get: function () {
                return Boolean(getBitForPdf(this.Ff, 21));
            },
            set: function (value) {
                if (Boolean(value) === true) {
                    this.Ff = setBitForPdf(this.Ff, 21);
                } else {
                    this.Ff = clearBitForPdf(this.Ff, 21);
                }
            }
        });

        /**
        * (PDF 1.4) If set, text entered in the field shall not be spell-checked. 
        *
        * @name AcroFormTextField#doNotSpellCheck
        * @type {boolean}
        */
        Object.defineProperty(this, 'doNotSpellCheck', {
            enumerable: true,
            configurable: true,
            get: function () {
                return Boolean(getBitForPdf(this.Ff, 23));
            },
            set: function (value) {
                if (Boolean(value) === true) {
                    this.Ff = setBitForPdf(this.Ff, 23);
                } else {
                    this.Ff = clearBitForPdf(this.Ff, 23);
                }
            }
        });

        /**
        * (PDF 1.4) If set, the field shall not scroll (horizontally for single-line fields, vertically for multiple-line fields) to accommodate more text than fits within its annotation rectangle. Once the field is full, no further text shall be accepted for interactive form filling; for noninteractive form filling, the filler should take care not to add more character than will visibly fit in the defined area. 
        * 
        * @name AcroFormTextField#doNotScroll
        * @type {boolean}
        */
        Object.defineProperty(this, 'doNotScroll', {
            enumerable: true,
            configurable: true,
            get: function () {
                return Boolean(getBitForPdf(this.Ff, 24));
            },
            set: function (value) {
                if (Boolean(value) === true) {
                    this.Ff = setBitForPdf(this.Ff, 24);
                } else {
                    this.Ff = clearBitForPdf(this.Ff, 24);
                }
            }
        });

        /**
        * (PDF 1.5) May be set only if the MaxLen entry is present in the text field dictionary (see Table 229) and if the Multiline, Password, and FileSelect flags are clear. If set, the field shall be automatically divided into as many equally spaced positions, or combs, as the value of MaxLen, and the text is laid out into those combs.
        * 
        * @name AcroFormTextField#comb
        * @type {boolean}
        */
        Object.defineProperty(this, 'comb', {
            enumerable: true,
            configurable: true,
            get: function () {
                return Boolean(getBitForPdf(this.Ff, 25));
            },
            set: function (value) {
                if (Boolean(value) === true) {
                    this.Ff = setBitForPdf(this.Ff, 25);
                } else {
                    this.Ff = clearBitForPdf(this.Ff, 25);
                }
            }
        });

        /**
        * (PDF 1.5) If set, the value of this field shall be a rich text string (see 12.7.3.4, “Rich Text Strings”). If the field has a value, the RV entry of the field dictionary (Table 222) shall specify the rich text string.
        * 
        * @name AcroFormTextField#richText
        * @type {boolean}
        */
        Object.defineProperty(this, 'richText', {
            enumerable: true,
            configurable: true,
            get: function () {
                return Boolean(getBitForPdf(this.Ff, 26));
            },
            set: function (value) {
                if (Boolean(value) === true) {
                    this.Ff = setBitForPdf(this.Ff, 26);
                } else {
                    this.Ff = clearBitForPdf(this.Ff, 26);
                }
            }
        });

        var _MaxLen = null;
        Object.defineProperty(this, 'MaxLen', {
            enumerable: true,
            configurable: false,
            get: function () {
                return _MaxLen;
            },
            set: function (value) {
                _MaxLen = value;
            }
        });

        /**
        * (Optional; inheritable) The maximum length of the field’s text, in characters. 
        *
        * @name AcroFormTextField#maxLength
        * @type {number}
        */
        Object.defineProperty(this, 'maxLength', {
            enumerable: true,
            configurable: true,
            get: function () {
                return _MaxLen;
            },
            set: function (value) {
                if (Number.isInteger(value)) {
                    _MaxLen = value;
                }
            }
        });


        Object.defineProperty(this, 'hasAppearanceStream', {
            enumerable: true,
            configurable: true,
            get: function () {
                return (this.V || this.DV);
            }
        });

    };
    inherit(AcroFormTextField, AcroFormField);

    /**
    * @class AcroFormPasswordField
    * @extends AcroFormTextField
    * @extends AcroFormField
    */
    var AcroFormPasswordField = function () {
        AcroFormTextField.call(this);

        /**
        * If set, the field is intended for entering a secure password that should not be echoed visibly to the screen. Characters typed from the keyboard shall instead be echoed in some unreadable form, such as asterisks or bullet characters.
        * NOTE To protect password confidentiality, readers should never store the value of the text field in the PDF file if this flag is set. 
        *
        * @name AcroFormTextField#password
        * @type {boolean}
        */
        Object.defineProperty(this, 'password', {
            enumerable: true,
            configurable: true,
            get: function () {
                return Boolean(getBitForPdf(this.Ff, 14));
            },
            set: function (value) {
                if (Boolean(value) === true) {
                    this.Ff = setBitForPdf(this.Ff, 14);
                } else {
                    this.Ff = clearBitForPdf(this.Ff, 14);
                }
            }
        });
        this.password = true;
    };
    inherit(AcroFormPasswordField, AcroFormTextField);


    // Contains Methods for creating standard appearances
    var AcroFormAppearance = {
        CheckBox: {
            createAppearanceStream: function () {
                var appearance = {
                    N: {
                        On: AcroFormAppearance.CheckBox.YesNormal
                    },
                    D: {
                        On: AcroFormAppearance.CheckBox.YesPushDown,
                        Off: AcroFormAppearance.CheckBox.OffPushDown
                    }
                };

                return appearance;
            },
            /**
              * Returns the standard On Appearance for a CheckBox
              * 
              * @returns {AcroFormXObject}
              */
            YesPushDown: function (formObject) {
                var xobj = new createFormXObject(formObject);
                var stream = [];
                var fontKey = scope.internal.getFont(formObject.fontName, formObject.fontStyle).id;
                var encodedColor = scope.__private__.encodeColorString(formObject.color);
                var calcRes = calculateX(formObject, formObject.caption);
                stream.push("0.749023 g");
                stream.push("0 0 " + f2(AcroFormAppearance.internal.getWidth(formObject)) + " " + f2(AcroFormAppearance.internal.getHeight(formObject)) + " re");
                stream.push("f");
                stream.push("BMC");
                stream.push("q");
                stream.push("0 0 1 rg");
                stream.push("/" + fontKey + " " + f2(calcRes.fontSize) + " Tf " + encodedColor);
                stream.push("BT");
                stream.push(calcRes.text);
                stream.push("ET");
                stream.push("Q");
                stream.push("EMC");
                xobj.stream = stream.join("\n");
                return xobj;
            },

            YesNormal: function (formObject) {
                var xobj = new createFormXObject(formObject);
                var fontKey = scope.internal.getFont(formObject.fontName, formObject.fontStyle).id;
                var encodedColor = scope.__private__.encodeColorString(formObject.color);
                var stream = [];
                var height = AcroFormAppearance.internal.getHeight(formObject);
                var width = AcroFormAppearance.internal.getWidth(formObject);
                var calcRes = calculateX(formObject, formObject.caption);
                stream.push("1 g");
                stream.push("0 0 " + f2(width) + " " + f2(height) + " re");
                stream.push("f");
                stream.push("q");
                stream.push("0 0 1 rg");
                stream.push("0 0 " + f2(width - 1) + " " + f2(height - 1) + " re");
                stream.push("W");
                stream.push("n");
                stream.push("0 g");
                stream.push("BT");
                stream.push("/" + fontKey + " " + f2(calcRes.fontSize) + " Tf " + encodedColor);
                stream.push(calcRes.text);
                stream.push("ET");
                stream.push("Q");
                xobj.stream = stream.join("\n");
                return xobj;
            },

            /**
              * Returns the standard Off Appearance for a CheckBox
              * 
              * @returns {AcroFormXObject}
              */
            OffPushDown: function (formObject) {
                var xobj = new createFormXObject(formObject);
                var stream = [];
                stream.push("0.749023 g");
                stream.push("0 0 " + f2(AcroFormAppearance.internal.getWidth(formObject)) + " " + f2(AcroFormAppearance.internal.getHeight(formObject)) + " re");
                stream.push("f");
                xobj.stream = stream.join("\n");
                return xobj;
            }
        },

        RadioButton: {
            Circle: {
                createAppearanceStream: function (name) {
                    var appearanceStreamContent = {
                        D: {
                            'Off': AcroFormAppearance.RadioButton.Circle.OffPushDown
                        },
                        N: {}
                    };
                    appearanceStreamContent.N[name] = AcroFormAppearance.RadioButton.Circle.YesNormal;
                    appearanceStreamContent.D[name] = AcroFormAppearance.RadioButton.Circle.YesPushDown;
                    return appearanceStreamContent;
                },
                getCA: function () {
                    return 'l';
                },

                YesNormal: function (formObject) {
                    var xobj = new createFormXObject(formObject);
                    var stream = [];
                    // Make the Radius of the Circle relative to min(height, width) of formObject
                    var DotRadius = (AcroFormAppearance.internal.getWidth(formObject) <= AcroFormAppearance.internal.getHeight(formObject)) ? AcroFormAppearance.internal.getWidth(formObject) / 4 : AcroFormAppearance.internal.getHeight(formObject) / 4;
                    // The Borderpadding...
                    DotRadius = Number((DotRadius * 0.9).toFixed(5));
                    var c = AcroFormAppearance.internal.Bezier_C;
                    var DotRadiusBezier = Number((DotRadius * c).toFixed(5));
                    /*
                      * The Following is a Circle created with Bezier-Curves.
                      */
                    stream.push("q");
                    stream.push("1 0 0 1 " + f5(AcroFormAppearance.internal.getWidth(formObject) / 2) + " " + f5(AcroFormAppearance.internal.getHeight(formObject) / 2) + " cm");
                    stream.push(DotRadius + " 0 m");
                    stream.push(DotRadius + " " + DotRadiusBezier + " " + DotRadiusBezier + " " + DotRadius + " 0 " + DotRadius + " c");
                    stream.push("-" + DotRadiusBezier + " " + DotRadius + " -" + DotRadius + " " + DotRadiusBezier + " -" + DotRadius + " 0 c");
                    stream.push("-" + DotRadius + " -" + DotRadiusBezier + " -" + DotRadiusBezier + " -" + DotRadius + " 0 -" + DotRadius + " c");
                    stream.push(DotRadiusBezier + " -" + DotRadius + " " + DotRadius + " -" + DotRadiusBezier + " " + DotRadius + " 0 c");
                    stream.push("f");
                    stream.push("Q");
                    xobj.stream = stream.join("\n");
                    return xobj;
                },
                YesPushDown: function (formObject) {
                    var xobj = new createFormXObject(formObject);
                    var stream = [];
                    var DotRadius = (AcroFormAppearance.internal.getWidth(formObject) <= AcroFormAppearance.internal.getHeight(formObject)) ?
                        AcroFormAppearance.internal.getWidth(formObject) / 4 : AcroFormAppearance.internal.getHeight(formObject) / 4;
                    // The Borderpadding...
                    var DotRadius = Number((DotRadius * 0.9).toFixed(5));
                    // Save results for later use; no need to waste
                    // processor ticks on doing math
                    var k = Number((DotRadius * 2).toFixed(5));
                    var kc = Number((k * AcroFormAppearance.internal.Bezier_C).toFixed(5));
                    var dc = Number((DotRadius * AcroFormAppearance.internal.Bezier_C).toFixed(5));

                    stream.push("0.749023 g");
                    stream.push("q");
                    stream.push("1 0 0 1 " + f5(AcroFormAppearance.internal.getWidth(formObject) / 2) + " " + f5(AcroFormAppearance.internal.getHeight(formObject) / 2) + " cm");
                    stream.push(k + " 0 m");
                    stream.push(k + " " + kc + " " + kc + " " + k + " 0 " + k + " c");
                    stream.push("-" + kc + " " + k + " -" + k + " " + kc + " -" + k + " 0 c");
                    stream.push("-" + k + " -" + kc + " -" + kc + " -" + k + " 0 -" + k + " c");
                    stream.push(kc + " -" + k + " " + k + " -" + kc + " " + k + " 0 c");
                    stream.push("f");
                    stream.push("Q");
                    stream.push("0 g");
                    stream.push("q");
                    stream.push("1 0 0 1 " + f5(AcroFormAppearance.internal.getWidth(formObject) / 2) + " " + f5(AcroFormAppearance.internal.getHeight(formObject) / 2) + " cm");
                    stream.push(DotRadius + " 0 m");
                    stream.push("" + DotRadius + " " + dc + " " + dc + " " + DotRadius + " 0 " + DotRadius + " c");
                    stream.push("-" + dc + " " + DotRadius + " -" + DotRadius + " " + dc + " -" + DotRadius + " 0 c");
                    stream.push("-" + DotRadius + " -" + dc + " -" + dc + " -" + DotRadius + " 0 -" + DotRadius + " c");
                    stream.push(dc + " -" + DotRadius + " " + DotRadius + " -" + dc + " " + DotRadius + " 0 c");
                    stream.push("f");
                    stream.push("Q");
                    xobj.stream = stream.join("\n");
                    return xobj;
                },
                OffPushDown: function (formObject) {
                    var xobj = new createFormXObject(formObject);
                    var stream = [];
                    var DotRadius = (AcroFormAppearance.internal.getWidth(formObject) <= AcroFormAppearance.internal.getHeight(formObject)) ?
                        AcroFormAppearance.internal.getWidth(formObject) / 4 : AcroFormAppearance.internal.getHeight(formObject) / 4;
                    // The Borderpadding...
                    DotRadius = Number((DotRadius * 0.9).toFixed(5));
                    // Save results for later use; no need to waste
                    // processor ticks on doing math
                    var k = Number((DotRadius * 2).toFixed(5));
                    var kc = Number((k * AcroFormAppearance.internal.Bezier_C).toFixed(5));

                    stream.push("0.749023 g");
                    stream.push("q");
                    stream.push("1 0 0 1 " + f5(AcroFormAppearance.internal.getWidth(formObject) / 2) + " " + f5(AcroFormAppearance.internal.getHeight(formObject) / 2) + " cm");
                    stream.push(k + " 0 m");
                    stream.push(k + " " + kc + " " + kc + " " + k + " 0 " + k + " c");
                    stream.push("-" + kc + " " + k + " -" + k + " " + kc + " -" + k + " 0 c");
                    stream.push("-" + k + " -" + kc + " -" + kc + " -" + k + " 0 -" + k + " c");
                    stream.push(kc + " -" + k + " " + k + " -" + kc + " " + k + " 0 c");
                    stream.push("f");
                    stream.push("Q");
                    xobj.stream = stream.join("\n");
                    return xobj;
                },
            },

            Cross: {
                /**
                  * Creates the Actual AppearanceDictionary-References
                  * 
                  * @param {string} name
                  * @returns {Object}
                  * @ignore
                  */
                createAppearanceStream: function (name) {
                    var appearanceStreamContent = {
                        D: {
                            'Off': AcroFormAppearance.RadioButton.Cross.OffPushDown
                        },
                        N: {}
                    };
                    appearanceStreamContent.N[name] = AcroFormAppearance.RadioButton.Cross.YesNormal;
                    appearanceStreamContent.D[name] = AcroFormAppearance.RadioButton.Cross.YesPushDown;
                    return appearanceStreamContent;
                },
                getCA: function () {
                    return '8'
                },


                YesNormal: function (formObject) {
                    var xobj = new createFormXObject(formObject);
                    var stream = [];
                    var cross = AcroFormAppearance.internal.calculateCross(formObject);
                    stream.push("q");
                    stream.push("1 1 " + f2(AcroFormAppearance.internal.getWidth(formObject) - 2) + " " + f2(AcroFormAppearance.internal.getHeight(formObject) - 2) + " re");
                    stream.push("W");
                    stream.push("n");
                    stream.push(f2(cross.x1.x) + " " + f2(cross.x1.y) + " m");
                    stream.push(f2(cross.x2.x) + " " + f2(cross.x2.y) + " l");
                    stream.push(f2(cross.x4.x) + " " + f2(cross.x4.y) + " m");
                    stream.push(f2(cross.x3.x) + " " + f2(cross.x3.y) + " l");
                    stream.push("s");
                    stream.push("Q");
                    xobj.stream = stream.join("\n");
                    return xobj;
                },
                YesPushDown: function (formObject) {
                    var xobj = new createFormXObject(formObject);
                    var cross = AcroFormAppearance.internal.calculateCross(formObject);
                    var stream = [];
                    stream.push("0.749023 g");
                    stream.push("0 0 " + f2(AcroFormAppearance.internal.getWidth(formObject)) + " " + f2(AcroFormAppearance.internal.getHeight(formObject)) + " re");
                    stream.push("f");
                    stream.push("q");
                    stream.push("1 1 " + f2(AcroFormAppearance.internal.getWidth(formObject) - 2) + " " + f2(AcroFormAppearance.internal.getHeight(formObject) - 2) + " re");
                    stream.push("W");
                    stream.push("n");
                    stream.push(f2(cross.x1.x) + " " + f2(cross.x1.y) + " m");
                    stream.push(f2(cross.x2.x) + " " + f2(cross.x2.y) + " l");
                    stream.push(f2(cross.x4.x) + " " + f2(cross.x4.y) + " m");
                    stream.push(f2(cross.x3.x) + " " + f2(cross.x3.y) + " l");
                    stream.push("s");
                    stream.push("Q");
                    xobj.stream = stream.join("\n");
                    return xobj;
                },
                OffPushDown: function (formObject) {
                    var xobj = new createFormXObject(formObject);
                    var stream = [];
                    stream.push("0.749023 g");
                    stream.push("0 0 " + f2(AcroFormAppearance.internal.getWidth(formObject)) + " " + f2(AcroFormAppearance.internal.getHeight(formObject)) + " re");
                    stream.push("f");
                    xobj.stream = stream.join("\n");
                    return xobj;
                }
            },
        },

        /**
          * Returns the standard Appearance
          * 
          * @returns {AcroFormXObject}
          */
        createDefaultAppearanceStream: function (formObject) {
            // Set Helvetica to Standard Font (size: auto)
            // Color: Black
            var fontKey = scope.internal.getFont(formObject.fontName, formObject.fontStyle).id;
            var encodedColor = scope.__private__.encodeColorString(formObject.color);
            var fontSize = formObject.fontSize;
            var result = '/' + fontKey + ' ' + fontSize + ' Tf ' + encodedColor;
            return result;
        }
    };

    AcroFormAppearance.internal = {
        Bezier_C: 0.551915024494,

        calculateCross: function (formObject) {

            var width = AcroFormAppearance.internal.getWidth(formObject);
            var height = AcroFormAppearance.internal.getHeight(formObject);
            var a = Math.min(width, height);

            var cross = {
                x1: { // upperLeft
                    x: (width - a) / 2,
                    y: ((height - a) / 2) + a,// height - borderPadding
                },
                x2: { // lowerRight
                    x: ((width - a) / 2) + a,
                    y: ((height - a) / 2)// borderPadding
                },
                x3: { // lowerLeft
                    x: (width - a) / 2,
                    y: ((height - a) / 2)// borderPadding
                },
                x4: { // upperRight
                    x: ((width - a) / 2) + a,
                    y: ((height - a) / 2) + a,// height - borderPadding
                }
            };

            return cross;
        },
    };
    AcroFormAppearance.internal.getWidth = function (formObject) {
        var result = 0;
        if (typeof formObject === "object") {
            result = scale(formObject.Rect[2]);
        }
        return result;
    };
    AcroFormAppearance.internal.getHeight = function (formObject) {
        var result = 0;
        if (typeof formObject === "object") {
            result = scale(formObject.Rect[3]);
        }
        return result;
    };

    // Public:

    /**
    * Add an AcroForm-Field to the jsPDF-instance
    *
    * @name addField
    * @function 
    * @instance
    * @param {Object} fieldObject
    * @returns {jsPDF}
    */
    var addField = jsPDFAPI.addField = function (fieldObject) {
        initializeAcroForm.call(this);

        if (fieldObject instanceof AcroFormField) {
            putForm.call(this, fieldObject);
        } else {
            throw new Error('Invalid argument passed to jsPDF.addField.');
        }
        fieldObject.page = scope.internal.getCurrentPageInfo().pageNumber;
        return this;
    };

    /**
    * @name addButton
    * @function
    * @instance
    * @param {AcroFormButton} options
    * @returns {jsPDF}
    * @deprecated
    */
    jsPDFAPI.addButton = function (button) {
        if (button instanceof AcroFormButton === false) {
            throw new Error('Invalid argument passed to jsPDF.addButton.');
        }
        return addField.call(this, button);
    };

    /**
    * @name addTextField
    * @function
    * @instance
    * @param {AcroFormTextField} textField
    * @returns {jsPDF}
    * @deprecated
    */
    jsPDFAPI.addTextField = function (textField) {
        if (textField instanceof AcroFormTextField === false) {
            throw new Error('Invalid argument passed to jsPDF.addTextField.');
        }
        return addField.call(this, textField);
    };

    /**
    * @name addChoiceField
    * @function
    * @instance
    * @param {AcroFormChoiceField} 
    * @returns {jsPDF}
    * @deprecated
    */
    jsPDFAPI.addChoiceField = function (choiceField) {
        if (choiceField instanceof AcroFormChoiceField === false) {
            throw new Error('Invalid argument passed to jsPDF.addChoiceField.');
        }
        return addField.call(this, choiceField);
    };

    if (typeof globalObj == "object" &&
        typeof (globalObj["ChoiceField"]) === "undefined" &&
        typeof (globalObj["ListBox"]) === "undefined" &&
        typeof (globalObj["ComboBox"]) === "undefined" &&
        typeof (globalObj["EditBox"]) === "undefined" &&
        typeof (globalObj["Button"]) === "undefined" &&
        typeof (globalObj["PushButton"]) === "undefined" &&
        typeof (globalObj["RadioButton"]) === "undefined" &&
        typeof (globalObj["CheckBox"]) === "undefined" &&
        typeof (globalObj["TextField"]) === "undefined" &&
        typeof (globalObj["PasswordField"]) === "undefined"
    ) {
        globalObj["ChoiceField"] = AcroFormChoiceField;
        globalObj["ListBox"] = AcroFormListBox;
        globalObj["ComboBox"] = AcroFormComboBox;
        globalObj["EditBox"] = AcroFormEditBox;
        globalObj["Button"] = AcroFormButton;
        globalObj["PushButton"] = AcroFormPushButton;
        globalObj["RadioButton"] = AcroFormRadioButton;
        globalObj["CheckBox"] = AcroFormCheckBox;
        globalObj["TextField"] = AcroFormTextField;
        globalObj["PasswordField"] = AcroFormPasswordField;

        // backwardsCompatibility
        globalObj["AcroForm"] = { Appearance: AcroFormAppearance };
    } else {
        // eslint-disable-next-line no-console
        // console.warn("AcroForm-Classes are not populated into global-namespace, because the class-Names exist already. This avoids conflicts with the already used framework.");
    }

    jsPDFAPI.AcroFormChoiceField = AcroFormChoiceField;
    jsPDFAPI.AcroFormListBox = AcroFormListBox;
    jsPDFAPI.AcroFormComboBox = AcroFormComboBox;
    jsPDFAPI.AcroFormEditBox = AcroFormEditBox;
    jsPDFAPI.AcroFormButton = AcroFormButton;
    jsPDFAPI.AcroFormPushButton = AcroFormPushButton;
    jsPDFAPI.AcroFormRadioButton = AcroFormRadioButton;
    jsPDFAPI.AcroFormCheckBox = AcroFormCheckBox;
    jsPDFAPI.AcroFormTextField = AcroFormTextField;
    jsPDFAPI.AcroFormPasswordField = AcroFormPasswordField;
    jsPDFAPI.AcroFormAppearance = AcroFormAppearance;

    jsPDFAPI.AcroForm = {
        ChoiceField: AcroFormChoiceField,
        ListBox: AcroFormListBox,
        ComboBox: AcroFormComboBox,
        EditBox: AcroFormEditBox,
        Button: AcroFormButton,
        PushButton: AcroFormPushButton,
        RadioButton: AcroFormRadioButton,
        CheckBox: AcroFormCheckBox,
        TextField: AcroFormTextField,
        PasswordField: AcroFormPasswordField,
        Appearance: AcroFormAppearance
    };

    jsPDF.AcroForm = {
        ChoiceField: AcroFormChoiceField,
        ListBox: AcroFormListBox,
        ComboBox: AcroFormComboBox,
        EditBox: AcroFormEditBox,
        Button: AcroFormButton,
        PushButton: AcroFormPushButton,
        RadioButton: AcroFormRadioButton,
        CheckBox: AcroFormCheckBox,
        TextField: AcroFormTextField,
        PasswordField: AcroFormPasswordField,
        Appearance: AcroFormAppearance
    };
})(jspdf.jsPDF, (typeof window !== 'undefined' && window || typeof global !== 'undefined' && global));
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(61)))

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

  /**
   * jsPDF fromHTML plugin. BETA stage. API subject to change. Needs browser
   * Copyright (c) 2012 Willow Systems Corporation, willow-systems.com
   *               2014 Juan Pablo Gaviria, https://github.com/juanpgaviria
   *               2014 Diego Casorran, https://github.com/diegocr
   *               2014 Daniel Husar, https://github.com/danielhusar
   *               2014 Wolfgang Gassler, https://github.com/woolfg
   *               2014 Steven Spungin, https://github.com/flamenco
   *
   * @license
   * 
   * ====================================================================
   */
  var jspdf = __webpack_require__(17);

  (function (jsPDFAPI) {
    var clone, _DrillForContent, FontNameDB, FontStyleMap, TextAlignMap, FontWeightMap, FloatMap, ClearMap, GetCSS, PurgeWhiteSpace, Renderer, ResolveFont, ResolveUnitedNumber, UnitedNumberMap, elementHandledElsewhere, images, loadImgs, checkForFooter, process, tableToJson;

    clone = function () {
      return function (obj) {
        Clone.prototype = obj;
        return new Clone();
      };

      function Clone() {}
    }();

    PurgeWhiteSpace = function PurgeWhiteSpace(array) {
      var fragment, i, l, lTrimmed, r, rTrimmed, trailingSpace;
      i = 0;
      l = array.length;
      fragment = void 0;
      lTrimmed = false;
      rTrimmed = false;

      while (!lTrimmed && i !== l) {
        fragment = array[i] = array[i].trimLeft();

        if (fragment) {
          lTrimmed = true;
        }

        i++;
      }

      i = l - 1;

      while (l && !rTrimmed && i !== -1) {
        fragment = array[i] = array[i].trimRight();

        if (fragment) {
          rTrimmed = true;
        }

        i--;
      }

      r = /\s+$/g;
      trailingSpace = true;
      i = 0;

      while (i !== l) {
        // Leave the line breaks intact
        if (array[i] != "\u2028") {
          fragment = array[i].replace(/\s+/g, " ");

          if (trailingSpace) {
            fragment = fragment.trimLeft();
          }

          if (fragment) {
            trailingSpace = r.test(fragment);
          }

          array[i] = fragment;
        }

        i++;
      }

      return array;
    };

    Renderer = function Renderer(pdf, x, y, settings) {
      this.pdf = pdf;
      this.x = x;
      this.y = y;
      this.settings = settings; //list of functions which are called after each element-rendering process

      this.watchFunctions = [];
      this.init();
      return this;
    };

    ResolveFont = function ResolveFont(css_font_family_string) {
      var name, part, parts;
      name = void 0;
      parts = css_font_family_string.split(",");
      part = parts.shift();

      while (!name && part) {
        name = FontNameDB[part.trim().toLowerCase()];
        part = parts.shift();
      }

      return name;
    };

    ResolveUnitedNumber = function ResolveUnitedNumber(css_line_height_string) {
      //IE8 issues
      css_line_height_string = css_line_height_string === "auto" ? "0px" : css_line_height_string;

      if (css_line_height_string.indexOf("em") > -1 && !isNaN(Number(css_line_height_string.replace("em", "")))) {
        css_line_height_string = Number(css_line_height_string.replace("em", "")) * 18.719 + "px";
      }

      if (css_line_height_string.indexOf("pt") > -1 && !isNaN(Number(css_line_height_string.replace("pt", "")))) {
        css_line_height_string = Number(css_line_height_string.replace("pt", "")) * 1.333 + "px";
      }

      var normal, undef, value;
      undef = void 0;
      normal = 16.00;
      value = UnitedNumberMap[css_line_height_string];

      if (value) {
        return value;
      }

      value = {
        "xx-small": 9,
        "x-small": 11,
        small: 13,
        medium: 16,
        large: 19,
        "x-large": 23,
        "xx-large": 28,
        auto: 0
      }[css_line_height_string];

      if (value !== undef) {
        return UnitedNumberMap[css_line_height_string] = value / normal;
      }

      if (value = parseFloat(css_line_height_string)) {
        return UnitedNumberMap[css_line_height_string] = value / normal;
      }

      value = css_line_height_string.match(/([\d\.]+)(px)/);

      if (Array.isArray(value) && value.length === 3) {
        return UnitedNumberMap[css_line_height_string] = parseFloat(value[1]) / normal;
      }

      return UnitedNumberMap[css_line_height_string] = 1;
    };

    GetCSS = function GetCSS(element) {
      var css, tmp, computedCSSElement;

      computedCSSElement = function (el) {
        var compCSS;

        compCSS = function (el) {
          if (document.defaultView && document.defaultView.getComputedStyle) {
            return document.defaultView.getComputedStyle(el, null);
          } else if (el.currentStyle) {
            return el.currentStyle;
          } else {
            return el.style;
          }
        }(el);

        return function (prop) {
          prop = prop.replace(/-\D/g, function (match) {
            return match.charAt(1).toUpperCase();
          });
          return compCSS[prop];
        };
      }(element);

      css = {};
      tmp = void 0;
      css["font-family"] = ResolveFont(computedCSSElement("font-family")) || "times";
      css["font-style"] = FontStyleMap[computedCSSElement("font-style")] || "normal";
      css["text-align"] = TextAlignMap[computedCSSElement("text-align")] || "left";
      tmp = FontWeightMap[computedCSSElement("font-weight")] || "normal";

      if (tmp === "bold") {
        if (css["font-style"] === "normal") {
          css["font-style"] = tmp;
        } else {
          css["font-style"] = tmp + css["font-style"];
        }
      }

      css["font-size"] = ResolveUnitedNumber(computedCSSElement("font-size")) || 1;
      css["line-height"] = ResolveUnitedNumber(computedCSSElement("line-height")) || 1;
      css["display"] = computedCSSElement("display") === "inline" ? "inline" : "block";
      tmp = css["display"] === "block";
      css["margin-top"] = tmp && ResolveUnitedNumber(computedCSSElement("margin-top")) || 0;
      css["margin-bottom"] = tmp && ResolveUnitedNumber(computedCSSElement("margin-bottom")) || 0;
      css["padding-top"] = tmp && ResolveUnitedNumber(computedCSSElement("padding-top")) || 0;
      css["padding-bottom"] = tmp && ResolveUnitedNumber(computedCSSElement("padding-bottom")) || 0;
      css["margin-left"] = tmp && ResolveUnitedNumber(computedCSSElement("margin-left")) || 0;
      css["margin-right"] = tmp && ResolveUnitedNumber(computedCSSElement("margin-right")) || 0;
      css["padding-left"] = tmp && ResolveUnitedNumber(computedCSSElement("padding-left")) || 0;
      css["padding-right"] = tmp && ResolveUnitedNumber(computedCSSElement("padding-right")) || 0;
      css["page-break-before"] = computedCSSElement("page-break-before") || "auto"; //float and clearing of floats

      css["float"] = FloatMap[computedCSSElement("cssFloat")] || "none";
      css["clear"] = ClearMap[computedCSSElement("clear")] || "none";
      css["color"] = computedCSSElement("color");
      return css;
    };

    elementHandledElsewhere = function elementHandledElsewhere(element, renderer, elementHandlers) {
      var handlers, i, isHandledElsewhere, l, classNames;
      isHandledElsewhere = false;
      i = void 0;
      l = void 0;
      handlers = elementHandlers["#" + element.id];

      if (handlers) {
        if (typeof handlers === "function") {
          isHandledElsewhere = handlers(element, renderer);
        } else {
          i = 0;
          l = handlers.length;

          while (!isHandledElsewhere && i !== l) {
            isHandledElsewhere = handlers[i](element, renderer);
            i++;
          }
        }
      }

      handlers = elementHandlers[element.nodeName];

      if (!isHandledElsewhere && handlers) {
        if (typeof handlers === "function") {
          isHandledElsewhere = handlers(element, renderer);
        } else {
          i = 0;
          l = handlers.length;

          while (!isHandledElsewhere && i !== l) {
            isHandledElsewhere = handlers[i](element, renderer);
            i++;
          }
        }
      } // Try class names


      classNames = typeof element.className === 'string' ? element.className.split(' ') : [];

      for (i = 0; i < classNames.length; i++) {
        handlers = elementHandlers['.' + classNames[i]];

        if (!isHandledElsewhere && handlers) {
          if (typeof handlers === "function") {
            isHandledElsewhere = handlers(element, renderer);
          } else {
            i = 0;
            l = handlers.length;

            while (!isHandledElsewhere && i !== l) {
              isHandledElsewhere = handlers[i](element, renderer);
              i++;
            }
          }
        }
      }

      return isHandledElsewhere;
    };

    tableToJson = function tableToJson(table, renderer) {
      var data, headers, i, j, rowData, tableRow, table_obj, table_with, cell, l;
      data = [];
      headers = [];
      i = 0;
      l = 0;
      for (var j = 0; j < table.rows[0].cells.length; j++) {
        l += table.rows[0].cells[j].colSpan;
      }
      table_with = table.clientWidth;

      while (i < l) {
        cell = table.rows[0].cells[i];

        for (var j = 0; j < cell.colSpan; j++) {
          headers[i + j] = {
            name: cell.textContent.toLowerCase().replace(/\s+/g, '') + '_' + j,
            prompt: cell.textContent.replace(/\r?\n/g, ''),
            width: cell.clientWidth / table_with * renderer.settings.width / cell.colSpan
          };
        }

        i += j;
      }

      i = 1;

      while (i < table.rows.length) {
        tableRow = table.rows[i];
        rowData = {};
        j = 0;

        while (j < tableRow.cells.length) {
          rowData[headers[j].name] = tableRow.cells[j].textContent.replace(/\r?\n/g, '');
          j++;
        }

        data.push(rowData);
        i++;
      }

      return table_obj = {
        rows: data,
        headers: headers
      };
    };

    var SkipNode = {
      SCRIPT: 1,
      STYLE: 1,
      NOSCRIPT: 1,
      OBJECT: 1,
      EMBED: 1,
      SELECT: 1
    };
    var listCount = 1;

    _DrillForContent = function DrillForContent(element, renderer, elementHandlers) {
      var cn, cns, fragmentCSS, i, isBlock, l, table2json, cb;
      cns = element.childNodes;
      cn = void 0;
      fragmentCSS = GetCSS(element);
      isBlock = fragmentCSS.display === "block";

      if (isBlock) {
        renderer.setBlockBoundary();
        renderer.setBlockStyle(fragmentCSS);
      }
      i = 0;
      l = cns.length;

      while (i < l) {
        cn = cns[i];

        if (typeof(cn) === "object") {
          //execute all watcher functions to e.g. reset floating
          renderer.executeWatchFunctions(cn);
          /*** HEADER rendering **/

          if (cn.nodeType === 1 && cn.nodeName === 'HEADER') {
            var header = cn; //store old top margin

            var oldMarginTop = renderer.pdf.margins_doc.top; //subscribe for new page event and render header first on every page

            renderer.pdf.internal.events.subscribe('addPage', function (pageInfo) {
              //set current y position to old margin
              renderer.y = oldMarginTop; //render all child nodes of the header element

              _DrillForContent(header, renderer, elementHandlers); //set margin to old margin + rendered header + 10 space to prevent overlapping
              //important for other plugins (e.g. table) to start rendering at correct position after header


              renderer.pdf.margins_doc.top = renderer.y + 10;
              renderer.y += 10;
            }, false);
          }

          if (cn.nodeType === 8 && cn.nodeName === "#comment") {
            if (~cn.textContent.indexOf("ADD_PAGE")) {
              renderer.pdf.addPage();
              renderer.y = renderer.pdf.margins_doc.top;
            }
          } else if (cn.nodeType === 1 && !SkipNode[cn.nodeName]) {
            /*** IMAGE RENDERING ***/
            var cached_image;

            if (cn.nodeName === "IMG") {
              var url = cn.getAttribute("src");
              cached_image = images[(renderer.pdf.sHashCode && renderer.pdf.sHashCode(url)) || url];
            }

            if (cached_image) {
              if (renderer.pdf.internal.pageSize.getHeight() - renderer.pdf.margins_doc.bottom < renderer.y + cn.height && renderer.y > renderer.pdf.margins_doc.top) {
                renderer.pdf.addPage();
                renderer.y = renderer.pdf.margins_doc.top; //check if we have to set back some values due to e.g. header rendering for new page

                renderer.executeWatchFunctions(cn);
              }

              var imagesCSS = GetCSS(cn);
              var imageX = renderer.x;
              var fontToUnitRatio = 12 / renderer.pdf.internal.scaleFactor; //define additional paddings, margins which have to be taken into account for margin calculations

              var additionalSpaceLeft = (imagesCSS["margin-left"] + imagesCSS["padding-left"]) * fontToUnitRatio;
              var additionalSpaceRight = (imagesCSS["margin-right"] + imagesCSS["padding-right"]) * fontToUnitRatio;
              var additionalSpaceTop = (imagesCSS["margin-top"] + imagesCSS["padding-top"]) * fontToUnitRatio;
              var additionalSpaceBottom = (imagesCSS["margin-bottom"] + imagesCSS["padding-bottom"]) * fontToUnitRatio; //if float is set to right, move the image to the right border
              //add space if margin is set

              if (imagesCSS['float'] !== undefined && imagesCSS['float'] === 'right') {
                imageX += renderer.settings.width - cn.width - additionalSpaceRight;
              } else {
                imageX += additionalSpaceLeft;
              }

              renderer.pdf.addImage(cached_image, imageX, renderer.y + additionalSpaceTop, cn.width, cn.height);
              cached_image = undefined; //if the float prop is specified we have to float the text around the image

              if (imagesCSS['float'] === 'right' || imagesCSS['float'] === 'left') {
                //add functiont to set back coordinates after image rendering
                renderer.watchFunctions.push(function (diffX, thresholdY, diffWidth, el) {
                  //undo drawing box adaptions which were set by floating
                  if (renderer.y >= thresholdY) {
                    renderer.x += diffX;
                    renderer.settings.width += diffWidth;
                    return true;
                  } else if (el && el.nodeType === 1 && !SkipNode[el.nodeName] && renderer.x + el.width > renderer.pdf.margins_doc.left + renderer.pdf.margins_doc.width) {
                    renderer.x += diffX;
                    renderer.y = thresholdY;
                    renderer.settings.width += diffWidth;
                    return true;
                  } else {
                    return false;
                  }
                }.bind(this, imagesCSS['float'] === 'left' ? -cn.width - additionalSpaceLeft - additionalSpaceRight : 0, renderer.y + cn.height + additionalSpaceTop + additionalSpaceBottom, cn.width)); //reset floating by clear:both divs
                //just set cursorY after the floating element

                renderer.watchFunctions.push(function (yPositionAfterFloating, pages, el) {
                  if (renderer.y < yPositionAfterFloating && pages === renderer.pdf.internal.getNumberOfPages()) {
                    if (el.nodeType === 1 && GetCSS(el).clear === 'both') {
                      renderer.y = yPositionAfterFloating;
                      return true;
                    } else {
                      return false;
                    }
                  } else {
                    return true;
                  }
                }.bind(this, renderer.y + cn.height, renderer.pdf.internal.getNumberOfPages())); //if floating is set we decrease the available width by the image width

                renderer.settings.width -= cn.width + additionalSpaceLeft + additionalSpaceRight; //if left just add the image width to the X coordinate

                if (imagesCSS['float'] === 'left') {
                  renderer.x += cn.width + additionalSpaceLeft + additionalSpaceRight;
                }
              } else {
                //if no floating is set, move the rendering cursor after the image height
                renderer.y += cn.height + additionalSpaceTop + additionalSpaceBottom;
              }
              /*** TABLE RENDERING ***/

            } else if (cn.nodeName === "TABLE") {
              if(!renderer.pdf.autoTable) {
                table2json = tableToJson(cn, renderer);
                renderer.y += 10;
                renderer.pdf.table(renderer.x, renderer.y, table2json.rows, table2json.headers, {
                  autoSize: false,
                  printHeaders: elementHandlers.printHeaders,
                  margins: renderer.pdf.margins_doc,
                  css: GetCSS(cn)
                });
                renderer.y = renderer.pdf.internal.__cell__.lastCell.y +
                  renderer.pdf.internal.__cell__.lastCell.height;
              } else {
                renderer.y += 10;
                renderer.pdf.autoTable({ theme: "grid", html: cn, startY: renderer.y,
                  styles: {
                    font: renderer.pdf.getFont().fontName,
                    fontSize: renderer.pdf.getFontSize(),
                    textColor: renderer.pdf.getTextColor()
                  },
                  margin: { 
                    top: renderer.pdf.margins_doc.top, 
                    left: renderer.x, 
                    right: renderer.pdf.internal.pageSize.getWidth() - (renderer.x  + renderer.settings.width), 
                    bottom: renderer.pdf.margins_doc.bottom },
                });
                renderer.y = renderer.pdf.lastAutoTable.finalY;
              }
            } else if (cn.nodeName === "OL" || cn.nodeName === "UL") {
              listCount = 1;

              if (!elementHandledElsewhere(cn, renderer, elementHandlers)) {
                _DrillForContent(cn, renderer, elementHandlers);
              }

              renderer.y += 10;
            } else if (cn.nodeName === "LI") {
              var temp = renderer.x;
              renderer.x += 20 / renderer.pdf.internal.scaleFactor;
              renderer.y += 3;

              if (!elementHandledElsewhere(cn, renderer, elementHandlers)) {
                _DrillForContent(cn, renderer, elementHandlers);
              }

              renderer.x = temp;
            } else if (cn.nodeName === "BR") {
              renderer.y += fragmentCSS["font-size"] * renderer.pdf.internal.scaleFactor;
              renderer.addText("\u2028", clone(fragmentCSS));
            } else {
              if (!elementHandledElsewhere(cn, renderer, elementHandlers)) {
                _DrillForContent(cn, renderer, elementHandlers);
              }
            }
          } else if (cn.nodeType === 3) {
            var value = cn.nodeValue;

            if (cn.nodeValue && cn.parentNode.nodeName === "LI") {
              if (cn.parentNode.parentNode.nodeName === "OL") {
                value = listCount++ + '. ' + value;
              } else {
                var fontSize = fragmentCSS["font-size"];
                var offsetX = (3 - fontSize * 0.75) * renderer.pdf.internal.scaleFactor;
                var offsetY = fontSize * 0.75 * renderer.pdf.internal.scaleFactor;
                var radius = fontSize * 1.74 / renderer.pdf.internal.scaleFactor;

                cb = function cb(x, y) {
                  this.pdf.circle(x + offsetX, y + offsetY, radius, 'FD');
                };
              }
            } // Only add the text if the text node is in the body element
            // Add compatibility with IE11


            if (!!(cn.ownerDocument.body.compareDocumentPosition(cn) & 16)) {
              renderer.addText(value, fragmentCSS);
            }
          } else if (typeof cn === "string") {
            renderer.addText(cn, fragmentCSS);
          }
        }

        i++;
      }

      elementHandlers.outY = renderer.y;

      if (isBlock) {
        return renderer.setBlockBoundary(cb);
      }
    };

    images = {};

    loadImgs = function loadImgs(element, renderer, elementHandlers, cb) {
      var imgs = element.getElementsByTagName('img'),
          l = imgs.length,
          found_images,
          x = 0;

      function done() {
        renderer.pdf.internal.events.publish('imagesLoaded');
        cb(found_images);
      }

      function loadImage(url, width, height) {
        if (!url) return;
        var img = new Image();
        found_images = ++x;
        img.crossOrigin = '';

        img.onerror = img.onload = function () {
          if (img.complete) {
            //to support data urls in images, set width and height
            //as those values are not recognized automatically
            if (img.src.indexOf('data:image/') === 0) {
              img.width = width || img.width || 0;
              img.height = height || img.height || 0;
            } //if valid image add to known images array


            if (img.width + img.height) {
              var hash = (renderer.pdf.sHashCode && renderer.pdf.sHashCode(url)) || url;
              images[hash] = images[hash] || img;
            }
          }

          if (! --x) {
            done();
          }
        };

        img.src = url;
      }

      while (l--) {
        loadImage(imgs[l].getAttribute("src"), imgs[l].width, imgs[l].height);
      }

      return x || done();
    };

    checkForFooter = function checkForFooter(elem, renderer, elementHandlers) {
      //check if we can found a <footer> element
      var footer = elem.getElementsByTagName("footer");

      if (footer.length > 0) {
        footer = footer[0]; //bad hack to get height of footer
        //creat dummy out and check new y after fake rendering

        var oldOut = renderer.pdf.internal.write;
        var oldY = renderer.y;

        renderer.pdf.internal.write = function () {};

        _DrillForContent(footer, renderer, elementHandlers);

        var footerHeight = Math.ceil(renderer.y - oldY) + 5;
        renderer.y = oldY;
        renderer.pdf.internal.write = oldOut; //add 20% to prevent overlapping

        renderer.pdf.margins_doc.bottom += footerHeight; //Create function render header on every page

        var renderFooter = function renderFooter(pageInfo) {
          var pageNumber = pageInfo !== undefined ? pageInfo.pageNumber : 1; //set current y position to old margin

          var oldPosition = renderer.y; //render all child nodes of the header element

          renderer.y = renderer.pdf.internal.pageSize.getHeight() - renderer.pdf.margins_doc.bottom;
          renderer.pdf.margins_doc.bottom -= footerHeight; //check if we have to add page numbers

          var spans = footer.getElementsByTagName('span');

          for (var i = 0; i < spans.length; ++i) {
            //if we find some span element with class pageCounter, set the page
            if ((" " + spans[i].className + " ").replace(/[\n\t]/g, " ").indexOf(" pageCounter ") > -1) {
              spans[i].innerHTML = pageNumber;
            } //if we find some span element with class totalPages, set a variable which is replaced after rendering of all pages


            if ((" " + spans[i].className + " ").replace(/[\n\t]/g, " ").indexOf(" totalPages ") > -1) {
              spans[i].innerHTML = '###jsPDFVarTotalPages###';
            }
          } //render footer content


          _DrillForContent(footer, renderer, elementHandlers); //set bottom margin to previous height including the footer height


          renderer.pdf.margins_doc.bottom += footerHeight; //important for other plugins (e.g. table) to start rendering at correct position after header

          renderer.y = oldPosition;
        }; //check if footer contains totalPages which should be replace at the disoposal of the document


        var spans = footer.getElementsByTagName('span');

        for (var i = 0; i < spans.length; ++i) {
          if ((" " + spans[i].className + " ").replace(/[\n\t]/g, " ").indexOf(" totalPages ") > -1) {
            renderer.pdf.internal.events.subscribe('htmlRenderingFinished', renderer.pdf.putTotalPages.bind(renderer.pdf, '###jsPDFVarTotalPages###'), true);
          }
        } //register event to render footer on every new page


        renderer.pdf.internal.events.subscribe('addPage', renderFooter, false); //render footer on first page

        renderFooter(); //prevent footer rendering

        SkipNode['FOOTER'] = 1;
      }
    };

    process = function process(pdf, element, x, y, settings, callback) {
      if (!element) return false;
      if (typeof element !== "string" && !element.parentNode) element = '' + element.innerHTML;

      if (typeof element === "string") {
        element = function (element) {
          var $frame, $hiddendiv, framename, visuallyhidden;
          framename = "jsPDFhtmlText" + Date.now().toString() + (Math.random() * 1000).toFixed(0);
          visuallyhidden = "position: absolute !important;" + "clip: rect(1px 1px 1px 1px); /* IE6, IE7 */" + "clip: rect(1px, 1px, 1px, 1px);" + "padding:0 !important;" + "border:0 !important;" + "height: 1px !important;" + "width: 1px !important; " + "top:auto;" + "left:-100px;" + "overflow: hidden;";
          $hiddendiv = document.createElement('div');
          $hiddendiv.style.cssText = visuallyhidden;
          $hiddendiv.innerHTML = "<iframe style=\"height:1px;width:1px\" name=\"" + framename + "\" />";
          document.body.appendChild($hiddendiv);
          $frame = window.frames[framename];
          $frame.document.open();
          $frame.document.writeln(element);
          $frame.document.close();
          return $frame.document.body;
        }(element.replace(/<\/?script[^>]*?>/gi, ''));
      }

      var availableFonts = Object.keys(pdf.getFontList());
      for(var i = 0; i < availableFonts.length; ++i) {
        var fontName = availableFonts[i];
        var fontFamily = fontName.toLowerCase();
        if(!FontNameDB[fontFamily]) {
          FontNameDB[fontFamily] = fontName;
        }
      }

      var r = new Renderer(pdf, x, y, settings),
          out; // 1. load images
      // 2. prepare optional footer elements
      // 3. render content

      loadImgs.call(this, element, r, settings.elementHandlers, function (found_images) {
        checkForFooter(element, r, settings.elementHandlers);

        _DrillForContent(element, r, settings.elementHandlers); //send event dispose for final taks (e.g. footer totalpage replacement)


        r.pdf.internal.events.publish('htmlRenderingFinished');
        out = r.dispose();
        if (typeof callback === 'function') callback(out);else if (found_images) console.error('jsPDF Warning: rendering issues? provide a callback to fromHTML!');
      });
      return out || {
        x: r.x,
        y: r.y
      };
    };

    Renderer.prototype.init = function () {
      this.paragraph = {
        text: [],
        style: []
      };
      return this.pdf.internal.write("q");
    };

    Renderer.prototype.dispose = function () {
      this.pdf.internal.write("Q");
      return {
        x: this.x,
        y: this.y,
        ready: true
      };
    }; //Checks if we have to execute some watcher functions
    //e.g. to end text floating around an image


    Renderer.prototype.executeWatchFunctions = function (el) {
      var ret = false;
      var narray = [];

      if (this.watchFunctions.length > 0) {
        for (var i = 0; i < this.watchFunctions.length; ++i) {
          if (this.watchFunctions[i](el) === true) {
            ret = true;
          } else {
            narray.push(this.watchFunctions[i]);
          }
        }

        this.watchFunctions = narray;
      }

      return ret;
    };

    Renderer.prototype.splitFragmentsIntoLines = function (fragments, styles) {
      var currentLineLength, defaultFontSize, ff, fontMetrics, fontMetricsCache, fragment, fragmentChopped, fragmentLength, fragmentSpecificMetrics, fs, k, line, lines, maxLineLength, style;
      defaultFontSize = 12;
      k = this.pdf.internal.scaleFactor;
      fontMetricsCache = {};
      ff = void 0;
      fs = void 0;
      fontMetrics = void 0;
      fragment = void 0;
      style = void 0;
      fragmentSpecificMetrics = void 0;
      fragmentLength = void 0;
      fragmentChopped = void 0;
      line = [];
      lines = [line];
      currentLineLength = 0;
      maxLineLength = this.settings.width;

      while (fragments.length) {
        fragment = fragments.shift();
        style = styles.shift();

        if (fragment) {
          ff = style["font-family"];
          fs = style["font-style"];
          fontMetrics = fontMetricsCache[ff + fs];

          if (!fontMetrics) {
            fontMetrics = this.pdf.internal.getFont(ff, fs).metadata.Unicode;
            fontMetricsCache[ff + fs] = fontMetrics;
          }

          fragmentSpecificMetrics = {
            widths: fontMetrics.widths,
            kerning: fontMetrics.kerning,
            fontSize: style["font-size"] * defaultFontSize,
            textIndent: currentLineLength
          };
          fragmentLength = this.pdf.getStringUnitWidth(fragment, fragmentSpecificMetrics) * fragmentSpecificMetrics.fontSize / k;

          if (fragment == "\u2028") {
            line = [];
            lines.push(line);
          } else if (currentLineLength + fragmentLength > maxLineLength) {
            fragmentChopped = this.pdf.splitTextToSize(fragment, maxLineLength, fragmentSpecificMetrics);
            line.push([fragmentChopped.shift(), style]);

            while (fragmentChopped.length) {
              line = [[fragmentChopped.shift(), style]];
              lines.push(line);
            }

            currentLineLength = this.pdf.getStringUnitWidth(line[0][0], fragmentSpecificMetrics) * fragmentSpecificMetrics.fontSize / k;
          } else {
            line.push([fragment, style]);
            currentLineLength += fragmentLength;
          }
        }
      } //if text alignment was set, set margin/indent of each line


      if (style['text-align'] !== undefined && (style['text-align'] === 'center' || style['text-align'] === 'right' || style['text-align'] === 'justify')) {
        for (var i = 0; i < lines.length; ++i) {
          var length = this.pdf.getStringUnitWidth(lines[i][0][0], fragmentSpecificMetrics) * fragmentSpecificMetrics.fontSize / k; //if there is more than on line we have to clone the style object as all lines hold a reference on this object

          if (i > 0) {
            lines[i][0][1] = clone(lines[i][0][1]);
          }

          var space = maxLineLength - length;

          if (style['text-align'] === 'right') {
            lines[i][0][1]['margin-left'] = space; //if alignment is not right, it has to be center so split the space to the left and the right
          } else if (style['text-align'] === 'center') {
            lines[i][0][1]['margin-left'] = space / 2; //if justify was set, calculate the word spacing and define in by using the css property
          } else if (style['text-align'] === 'justify') {
            var countSpaces = lines[i][0][0].split(' ').length - 1;
            lines[i][0][1]['word-spacing'] = space / countSpaces; //ignore the last line in justify mode

            if (i === lines.length - 1) {
              lines[i][0][1]['word-spacing'] = 0;
            }
          }
        }
      }

      return lines;
    };

    Renderer.prototype.RenderTextFragment = function (text, style) {
      var defaultFontSize, font, maxLineHeight;
      maxLineHeight = 0;
      defaultFontSize = 12;

      if (this.pdf.internal.pageSize.getHeight() - this.pdf.margins_doc.bottom < this.y + this.pdf.internal.getFontSize()) {
        this.pdf.internal.write("ET", "Q", "Q");
        const currentPageNumber = this.pdf.getCurrentPageInfo().pageNumber;
        if (this.pdf.getNumberOfPages() === currentPageNumber) this.pdf.addPage();
        else this.pdf.setPage(currentPageNumber + 1);
        this.y = this.pdf.margins_doc.top;
        this.pdf.internal.write("q", "q", "BT", this.getPdfColor(style.color), this.pdf.internal.getCoordinateString(this.x), this.pdf.internal.getVerticalCoordinateString(this.y), "Td"); //move cursor by one line on new page

        maxLineHeight = Math.max(maxLineHeight, style["line-height"], style["font-size"]);
        this.pdf.internal.write(0, (-1 * defaultFontSize * maxLineHeight).toFixed(2), "Td");
      }

      font = this.pdf.internal.getFont(style["font-family"], style["font-style"]); // text color

      var pdfTextColor = this.getPdfColor(style["color"]);

      if (pdfTextColor !== this.lastTextColor) {
        this.pdf.internal.write(pdfTextColor);
        this.lastTextColor = pdfTextColor;
      } //set the word spacing for e.g. justify style


      if (style['word-spacing'] !== undefined && style['word-spacing'] > 0) {
        this.pdf.internal.write(style['word-spacing'].toFixed(2), "Tw");
      }


      var pdfEscape16 = function(text, font) {
        var widths = font.metadata.Unicode.widths;
        var padz = ["", "0", "00", "000", "0000"];
        var ar = [""];
        for (var i = 0, l = text.length, t; i < l; ++i) {
          t = font.metadata.characterToGlyph(text.charCodeAt(i));
          font.metadata.glyIdsUsed.push(t);
          font.metadata.toUnicode[t] = text.charCodeAt(i);
          if (widths.indexOf(t) == -1) {
            widths.push(t);
            widths.push([parseInt(font.metadata.widthOfGlyph(t), 10)]);
          }
          if (t == "0") {
            //Spaces are not allowed in cmap.
            return ar.join("");
          } else {
            t = t.toString(16);
            ar.push(padz[4 - t.length], t);
          }
        }
        return ar.join("");
      };

      var utf8TextFunction = function(text, font) {
        var text = text || "";
    
        var str = "",
          s = 0,
          cmapConfirm;
        var strText = "";
        var encoding = font.encoding;
    
        if (font.encoding !== "Identity-H") {
          return text;
        }
        strText = text;
    
        for (s = 0; s < strText.length; s += 1) {
          if (font.metadata.hasOwnProperty("cmap")) {
            cmapConfirm = font.metadata.cmap.unicode.codeMap[strText[s].charCodeAt(0)];
          }
          if (!cmapConfirm) {
            if (
              strText[s].charCodeAt(0) < 256 &&
              font.metadata.hasOwnProperty("Unicode")
            ) {
              str += strText[s];
            } else {
              str += "";
            }
          } else {
            str += strText[s];
          }
        }
        var result = "";
        if (parseInt(font.id.slice(1)) < 14 || encoding === "WinAnsiEncoding") {
          result = this.pdf.internal.pdfEscape(str, key)
            .split("")
            .map(function(cv) {
              return cv.charCodeAt(0).toString(16);
            })
            .join("");
        } else if (encoding === "Identity-H") {
          result = pdfEscape16(str, font);
        }
    
        return result;
      };      

      // var escapedText = this.pdf.internal.pdfEscape(text);
      // var escapedText = utf8TextFunction(text, font);
      // if(escapedText != text) {
      //   escapedText = "<" + escapedText + ">";
      // } else {
      //   escapedText = "(" + escapedText + ")";
      // }

      var escapedText = "";
      if(font.encoding !== "Identity-H") {
        escapedText = "(" + this.pdf.internal.pdfEscape(text) + ")";
      } else {
        escapedText = "<" + utf8TextFunction(text, font) + ">";
      }

      this.pdf.internal.write("/" + font.id, (defaultFontSize * style["font-size"]).toFixed(2), "Tf", escapedText + " Tj"); //set the word spacing back to neutral => 0

      if (style['word-spacing'] !== undefined) {
        this.pdf.internal.write(0, "Tw");
      }
    }; // Accepts #FFFFFF, rgb(int,int,int), or CSS Color Name


    Renderer.prototype.getPdfColor = function (style) {
      var textColor;
      var r, g, b;
      var rx = /rgb\s*\(\s*(\d+),\s*(\d+),\s*(\d+\s*)\)/;
      var m = rx.exec(style);

      if (m != null) {
        r = parseInt(m[1]);
        g = parseInt(m[2]);
        b = parseInt(m[3]);
      } else {
        if (typeof style === "string" && style.charAt(0) != '#') {
          var rgbColor = new RGBColor(style);

          if (rgbColor.ok) {
            style = rgbColor.toHex();
          } else {
            style = '#000000';
          }
        }

        r = style.substring(1, 3);
        r = parseInt(r, 16);
        g = style.substring(3, 5);
        g = parseInt(g, 16);
        b = style.substring(5, 7);
        b = parseInt(b, 16);
      }

      if (typeof r === 'string' && /^#[0-9A-Fa-f]{6}$/.test(r)) {
        var hex = parseInt(r.substr(1), 16);
        r = hex >> 16 & 255;
        g = hex >> 8 & 255;
        b = hex & 255;
      }

      var f3 = this.f3;

      if (r === 0 && g === 0 && b === 0 || typeof g === 'undefined') {
        textColor = f3(r / 255) + ' g';
      } else {
        textColor = [f3(r / 255), f3(g / 255), f3(b / 255), 'rg'].join(' ');
      }

      return textColor;
    };

    Renderer.prototype.f3 = function (number) {
      return number.toFixed(3); // Ie, %.3f
    }, Renderer.prototype.renderParagraph = function (cb) {
      var blockstyle, defaultFontSize, fontToUnitRatio, fragments, i, l, line, lines, maxLineHeight, out, paragraphspacing_after, paragraphspacing_before, priorblockstyle, styles, fontSize;
      fragments = PurgeWhiteSpace(this.paragraph.text);
      styles = this.paragraph.style;
      blockstyle = this.paragraph.blockstyle;
      priorblockstyle = this.paragraph.priorblockstyle || {};
      this.paragraph = {
        text: [],
        style: [],
        blockstyle: {},
        priorblockstyle: blockstyle
      };

      if (!fragments.join("").trim()) {
        return;
      }

      lines = this.splitFragmentsIntoLines(fragments, styles);
      line = void 0;
      maxLineHeight = void 0;
      defaultFontSize = 12;
      fontToUnitRatio = defaultFontSize / this.pdf.internal.scaleFactor;
      this.priorMarginBottom = this.priorMarginBottom || 0;
      paragraphspacing_before = (Math.max((blockstyle["margin-top"] || 0) - this.priorMarginBottom, 0) + (blockstyle["padding-top"] || 0)) * fontToUnitRatio;
      paragraphspacing_after = ((blockstyle["margin-bottom"] || 0) + (blockstyle["padding-bottom"] || 0)) * fontToUnitRatio;
      this.priorMarginBottom = blockstyle["margin-bottom"] || 0;

      if (blockstyle['page-break-before'] === 'always') {
        this.pdf.addPage();
        this.y = 0;
        paragraphspacing_before = ((blockstyle["margin-top"] || 0) + (blockstyle["padding-top"] || 0)) * fontToUnitRatio;
      }

      out = this.pdf.internal.write;
      i = void 0;
      l = void 0;
      this.y += paragraphspacing_before;
      out("q", "BT 0 g", this.pdf.internal.getCoordinateString(this.x), this.pdf.internal.getVerticalCoordinateString(this.y), "Td"); //stores the current indent of cursor position

      var currentIndent = 0;

      while (lines.length) {
        line = lines.shift();
        maxLineHeight = 0;
        i = 0;
        l = line.length;

        while (i !== l) {
          if (line[i][0].trim()) {
            maxLineHeight = Math.max(maxLineHeight, line[i][1]["line-height"], line[i][1]["font-size"]);
            fontSize = line[i][1]["font-size"] * 7;
          }

          i++;
        } //if we have to move the cursor to adapt the indent


        var indentMove = 0;
        var wantedIndent = 0; //if a margin was added (by e.g. a text-alignment), move the cursor

        if (line[0][1]["margin-left"] !== undefined && line[0][1]["margin-left"] > 0) {
          wantedIndent = this.pdf.internal.getCoordinateString(line[0][1]["margin-left"]);
          indentMove = wantedIndent - currentIndent;
          currentIndent = wantedIndent;
        }

        var indentMore = Math.max(blockstyle["margin-left"] || 0, 0) * fontToUnitRatio; //move the cursor

        out(indentMove + indentMore, (-1 * defaultFontSize * maxLineHeight).toFixed(2), "Td");
        i = 0;
        l = line.length;

        while (i !== l) {
          if (line[i][0]) {
            this.RenderTextFragment(line[i][0], line[i][1]);
          }

          i++;
        }

        this.y += maxLineHeight * fontToUnitRatio; //if some watcher function was executed successful, so e.g. margin and widths were changed,
        //reset line drawing and calculate position and lines again
        //e.g. to stop text floating around an image

        if (this.executeWatchFunctions(line[0][1]) && lines.length > 0) {
          var localFragments = [];
          var localStyles = []; //create fragment array of

          lines.forEach(function (localLine) {
            var i = 0;
            var l = localLine.length;

            while (i !== l) {
              if (localLine[i][0]) {
                localFragments.push(localLine[i][0] + ' ');
                localStyles.push(localLine[i][1]);
              }

              ++i;
            }
          }); //split lines again due to possible coordinate changes

          lines = this.splitFragmentsIntoLines(PurgeWhiteSpace(localFragments), localStyles); //reposition the current cursor

          out("ET", "Q");
          out("q", "BT 0 g", this.pdf.internal.getCoordinateString(this.x), this.pdf.internal.getVerticalCoordinateString(this.y), "Td");
        }
      }

      if (cb && typeof cb === "function") {
        cb.call(this, this.x - 9, this.y - fontSize / 2);
      }

      out("ET", "Q");
      return this.y += paragraphspacing_after;
    };

    Renderer.prototype.setBlockBoundary = function (cb) {
      return this.renderParagraph(cb);
    };

    Renderer.prototype.setBlockStyle = function (css) {
      return this.paragraph.blockstyle = css;
    };

    Renderer.prototype.addText = function (text, css) {
      this.paragraph.text.push(text);
      return this.paragraph.style.push(css);
    };

    FontNameDB = {
      helvetica: "helvetica",
      "sans-serif": "helvetica",
      "times new roman": "times",
      serif: "times",
      times: "times",
      monospace: "courier",
      courier: "courier"
    };
    FontWeightMap = {
      100: "normal",
      200: "normal",
      300: "normal",
      400: "normal",
      500: "bold",
      600: "bold",
      700: "bold",
      800: "bold",
      900: "bold",
      normal: "normal",
      bold: "bold",
      bolder: "bold",
      lighter: "normal"
    };
    FontStyleMap = {
      normal: "normal",
      italic: "italic",
      oblique: "italic"
    };
    TextAlignMap = {
      left: "left",
      right: "right",
      center: "center",
      justify: "justify"
    };
    FloatMap = {
      none: 'none',
      right: 'right',
      left: 'left'
    };
    ClearMap = {
      none: 'none',
      both: 'both'
    };
    UnitedNumberMap = {
      normal: 1
    };
    /**
     * Converts HTML-formatted text into formatted PDF text.
     *
     * Notes:
     * 2012-07-18
     * Plugin relies on having browser, DOM around. The HTML is pushed into dom and traversed.
     * Plugin relies on jQuery for CSS extraction.
     * Targeting HTML output from Markdown templating, which is a very simple
     * markup - div, span, em, strong, p. No br-based paragraph separation supported explicitly (but still may work.)
     * Images, tables are NOT supported.
     *
     * @public
     * @function
     * @param HTML {String|Object} HTML-formatted text, or pointer to DOM element that is to be rendered into PDF.
     * @param x {Number} starting X coordinate in jsPDF instance's declared units.
     * @param y {Number} starting Y coordinate in jsPDF instance's declared units.
     * @param settings {Object} Additional / optional variables controlling parsing, rendering.
     * @returns {Object} jsPDF instance
     */

    jsPDFAPI.fromHTML = function (HTML, x, y, settings, callback, margins) {

      this.margins_doc = margins || {
        top: 0,
        bottom: 0
      };
      if (!settings) settings = {};
      if (!settings.elementHandlers) settings.elementHandlers = {};
      return process(this, HTML, isNaN(x) ? 4 : x, isNaN(y) ? 4 : y, settings, callback);
    };
  })(jspdf.jsPDF.API);


/***/ })
/******/ ]);
});