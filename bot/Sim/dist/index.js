/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/checkout.png":
/*!*********************************!*\
  !*** ./src/assets/checkout.png ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"src/assets/checkout.png\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXNzZXRzL2NoZWNrb3V0LnBuZy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0B1cmJhbi1ib3Qvc3RhcnRlci10eXBlc2NyaXB0Ly4vc3JjL2Fzc2V0cy9jaGVja291dC5wbmc/Y2FjZiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0cy9jaGVja291dC5wbmdcIjsiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/assets/checkout.png\n");

/***/ }),

/***/ "./src/assets/download.png":
/*!*********************************!*\
  !*** ./src/assets/download.png ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"src/assets/download.png\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXNzZXRzL2Rvd25sb2FkLnBuZy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0B1cmJhbi1ib3Qvc3RhcnRlci10eXBlc2NyaXB0Ly4vc3JjL2Fzc2V0cy9kb3dubG9hZC5wbmc/ZjViYSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0cy9kb3dubG9hZC5wbmdcIjsiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/assets/download.png\n");

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n/*\nBot tasks:\n  - receber codigo e devolver catalogo (lista) -> integrar na API do vtex\n  - montar o carrinho ( adicionar/ remover)\n  - mais detalhes -> enviar foto e descricao\n  - fechar a compra -> lista os itens no carrinho e o valor total, integra na plataforma da VTEX\n       - envia codigo/QR do pix\n  - envia comprovante de pagamento\n\n*/\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.App = void 0;\nconst react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nconst fs_1 = __importDefault(__webpack_require__(/*! fs */ \"fs\"));\nconst core_1 = __webpack_require__(/*! @urban-bot/core */ \"@urban-bot/core\");\nconst download_png_1 = __importDefault(__webpack_require__(/*! ./assets/download.png */ \"./src/assets/download.png\"));\nconst checkout_png_1 = __importDefault(__webpack_require__(/*! ./assets/checkout.png */ \"./src/assets/checkout.png\"));\nconst Bucket_1 = __webpack_require__(/*! ./pages/Bucket */ \"./src/pages/Bucket.tsx\");\nconst Catalog_1 = __webpack_require__(/*! ./pages/Catalog */ \"./src/pages/Catalog.tsx\");\nconst products_1 = __webpack_require__(/*! ./store/products */ \"./src/store/products.tsx\");\nconst bucket_1 = __webpack_require__(/*! ./store/bucket */ \"./src/store/bucket.tsx\");\nconst bucket_2 = __webpack_require__(/*! ./store/bucket */ \"./src/store/bucket.tsx\");\nconst axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\nconst jsonConverter_1 = __webpack_require__(/*! ./jsonConverter */ \"./src/jsonConverter.ts\");\nasync function ConsultaCodigo(codigo) {\n    //Consulta o back (?? Consulta estoques??) e devolve o json do catalogo\n    console.log(process.env.BACKURL + \"/catalogs/\" + codigo);\n    var objectJson = await axios_1.default.get(process.env.BACKURL + \"/catalogs/\" + codigo, {\n        headers: {\n            \"Access-Control-Allow-Origin\": \"*\",\n            'Content-Type': 'application/json'\n        }\n    });\n    console.log(objectJson.data);\n    var ar = Array();\n    for (var e of objectJson.data.products) {\n        var nome = new jsonConverter_1.JsonCerto();\n        nome.name = e.name;\n        nome.id = e.productId;\n        nome.images = [e.image];\n        nome.price = parseFloat(e.price);\n        ar.push(nome);\n    }\n    console.log(JSON.stringify(ar));\n    fs_1.default.writeFile('./src/api/products.json', JSON.stringify(ar), function (err) {\n        if (err)\n            throw err;\n        console.log('complete');\n    });\n}\nfunction RecebeCodigo() {\n    const [codigo, setCodigo] = react_1.useState('Envie o código do catálogo que quer consultar. Em seguida, utilize os botoes para comprar!');\n    const { navigate } = core_1.useRouter();\n    core_1.useText(({ text }) => {\n        ConsultaCodigo(text);\n        console.log(\"SET CODIGO FEITO\");\n        console.log(codigo);\n        navigate('init');\n    });\n    return (react_1.default.createElement(core_1.Text, null, codigo));\n}\nfunction FechaCompra() {\n    const { addedProducts, removeProduct } = bucket_2.useBucket();\n    const addedProductsArray = Array.from(addedProducts.values());\n    if (addedProductsArray.length === 0) {\n        return react_1.default.createElement(core_1.Text, null, \"Imposs\\u00EDvel concluir a compra, n\\u00E3o h\\u00E1 nada no carrinho!\");\n    }\n    const geraPix = () => {\n        setTitle('Compra confirmada, pague em: https://bit.ly/3ukJxJb');\n        setConfirmed(download_png_1.default);\n        setButton((react_1.default.createElement(core_1.ButtonGroup, null)));\n    };\n    const [title, setTitle] = react_1.useState('');\n    const [confirmed, setConfirmed] = react_1.useState(checkout_png_1.default);\n    const [button, setButton] = react_1.useState((react_1.default.createElement(core_1.ButtonGroup, null,\n        react_1.default.createElement(core_1.Button, { onClick: geraPix }, \"Confirmar compra?\"))));\n    return (react_1.default.createElement(core_1.Image, { title: title, file: fs_1.default.createReadStream(confirmed), buttons: button }));\n}\nfunction App() {\n    var _a;\n    const { chat } = core_1.useBotContext();\n    return (react_1.default.createElement(products_1.ProductsProvider, null,\n        react_1.default.createElement(bucket_1.BucketProvider, null,\n            react_1.default.createElement(core_1.ButtonGroup, { title: `Bem vindo(a)${(_a = ', ' + chat.firstName) !== null && _a !== void 0 ? _a : ''}!`, isReplyButtons: true, isResizedKeyboard: true },\n                react_1.default.createElement(core_1.Button, null, \"carrinho\"),\n                react_1.default.createElement(core_1.Button, null, \"catalogo\"),\n                react_1.default.createElement(core_1.Button, null, \"finalizar compra\")),\n            react_1.default.createElement(core_1.Router, null,\n                react_1.default.createElement(core_1.Route, { path: \"/start\" },\n                    react_1.default.createElement(RecebeCodigo, null)),\n                react_1.default.createElement(core_1.Route, { path: \"carrinho\" },\n                    react_1.default.createElement(Bucket_1.Bucket, null)),\n                react_1.default.createElement(core_1.Route, { path: \"catalogo\" },\n                    react_1.default.createElement(Catalog_1.Catalog, null)),\n                react_1.default.createElement(core_1.Route, { path: \"finalizar compra\" },\n                    react_1.default.createElement(Bucket_1.Bucket, null),\n                    react_1.default.createElement(FechaCompra, null))))));\n}\nexports.App = App;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQXBwLnRzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0B1cmJhbi1ib3Qvc3RhcnRlci10eXBlc2NyaXB0Ly4vc3JjL0FwcC50c3g/MWM2ZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuQm90IHRhc2tzOlxuICAtIHJlY2ViZXIgY29kaWdvIGUgZGV2b2x2ZXIgY2F0YWxvZ28gKGxpc3RhKSAtPiBpbnRlZ3JhciBuYSBBUEkgZG8gdnRleFxuICAtIG1vbnRhciBvIGNhcnJpbmhvICggYWRpY2lvbmFyLyByZW1vdmVyKVxuICAtIG1haXMgZGV0YWxoZXMgLT4gZW52aWFyIGZvdG8gZSBkZXNjcmljYW9cbiAgLSBmZWNoYXIgYSBjb21wcmEgLT4gbGlzdGEgb3MgaXRlbnMgbm8gY2FycmluaG8gZSBvIHZhbG9yIHRvdGFsLCBpbnRlZ3JhIG5hIHBsYXRhZm9ybWEgZGEgVlRFWFxuICAgICAgIC0gZW52aWEgY29kaWdvL1FSIGRvIHBpeFxuICAtIGVudmlhIGNvbXByb3ZhbnRlIGRlIHBhZ2FtZW50b1xuXG4qL1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xuaW1wb3J0IHsgUm91dGUsIFJvdXRlciwgVGV4dCwgQnV0dG9uR3JvdXAsIEJ1dHRvbiwgdXNlVGV4dCwgSW1hZ2UsIHVzZUJvdENvbnRleHQsIHVzZVJvdXRlcn0gZnJvbSAnQHVyYmFuLWJvdC9jb3JlJztcbmltcG9ydCBxciBmcm9tICcuL2Fzc2V0cy9kb3dubG9hZC5wbmcnO1xuaW1wb3J0IGNoZWNrb3V0IGZyb20gJy4vYXNzZXRzL2NoZWNrb3V0LnBuZyc7XG5pbXBvcnQgeyBCdWNrZXQgfSBmcm9tICcuL3BhZ2VzL0J1Y2tldCc7XG5pbXBvcnQgeyBDYXRhbG9nIH0gZnJvbSAnLi9wYWdlcy9DYXRhbG9nJztcbmltcG9ydCB7IFByb2R1Y3RzUHJvdmlkZXIgfSBmcm9tICcuL3N0b3JlL3Byb2R1Y3RzJztcbmltcG9ydCB7IEJ1Y2tldFByb3ZpZGVyIH0gZnJvbSAnLi9zdG9yZS9idWNrZXQnO1xuaW1wb3J0IHsgdXNlQnVja2V0IH0gZnJvbSAnLi9zdG9yZS9idWNrZXQnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IEpzb25DZXJ0byB9IGZyb20gJy4vanNvbkNvbnZlcnRlcic7XG5pbXBvcnQgeyBwYXJzZSB9IGZyb20gJ2RvdGVudi90eXBlcyc7XG5cbmFzeW5jIGZ1bmN0aW9uIENvbnN1bHRhQ29kaWdvKGNvZGlnbzogc3RyaW5nKSB7XG4gICAgLy9Db25zdWx0YSBvIGJhY2sgKD8/IENvbnN1bHRhIGVzdG9xdWVzPz8pIGUgZGV2b2x2ZSBvIGpzb24gZG8gY2F0YWxvZ29cblxuICAgIGNvbnNvbGUubG9nKHByb2Nlc3MuZW52LkJBQ0tVUkwgKyBcIi9jYXRhbG9ncy9cIiArIGNvZGlnbylcblxuICAgIHZhciBvYmplY3RKc29uID0gYXdhaXQgYXhpb3MuZ2V0KHByb2Nlc3MuZW52LkJBQ0tVUkwgKyBcIi9jYXRhbG9ncy9cIiArIGNvZGlnbyxcbiAgICAgICAge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCI6IFwiKlwiLFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgIGNvbnNvbGUubG9nKG9iamVjdEpzb24uZGF0YSk7XG4gICAgXG4gICAgXG4gICAgdmFyIGFyID0gQXJyYXk8SnNvbkNlcnRvPigpO1xuXG4gICAgZm9yKCB2YXIgZSBvZiBvYmplY3RKc29uLmRhdGEucHJvZHVjdHMpe1xuICAgICAgICB2YXIgbm9tZSA9IG5ldyBKc29uQ2VydG8oKTtcbiAgICAgICAgbm9tZS5uYW1lID0gZS5uYW1lO1xuICAgICAgICBub21lLmlkID0gZS5wcm9kdWN0SWQ7XG4gICAgICAgIG5vbWUuaW1hZ2VzID0gW2UuaW1hZ2VdO1xuICAgICAgICBub21lLnByaWNlID0gcGFyc2VGbG9hdChlLnByaWNlKTtcbiAgICAgICAgYXIucHVzaChub21lKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoYXIpKTtcblxuICAgIGZzLndyaXRlRmlsZSAoJy4vc3JjL2FwaS9wcm9kdWN0cy5qc29uJywgSlNPTi5zdHJpbmdpZnkoYXIpLCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGlmIChlcnIpIHRocm93IGVycjtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjb21wbGV0ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xufVxuXG5cbmZ1bmN0aW9uIFJlY2ViZUNvZGlnbygpe1xuICAgIGNvbnN0IFtjb2RpZ28sIHNldENvZGlnb10gPSB1c2VTdGF0ZSgnRW52aWUgbyBjw7NkaWdvIGRvIGNhdMOhbG9nbyBxdWUgcXVlciBjb25zdWx0YXIuIEVtIHNlZ3VpZGEsIHV0aWxpemUgb3MgYm90b2VzIHBhcmEgY29tcHJhciEnKTtcbiAgICBjb25zdCB7IG5hdmlnYXRlIH0gPSB1c2VSb3V0ZXIoKTtcbiAgICB1c2VUZXh0KCh7IHRleHQgfSkgPT4ge1xuICAgICAgICBDb25zdWx0YUNvZGlnbyh0ZXh0KTtcbiAgICAgICAgY29uc29sZS5sb2coXCJTRVQgQ09ESUdPIEZFSVRPXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhjb2RpZ28pO1xuICAgICAgICBuYXZpZ2F0ZSgnaW5pdCcpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICB7Y29kaWdvfVxuICAgICAgICA8L1RleHQ+XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gRmVjaGFDb21wcmEoKXtcbiAgICBjb25zdCB7IGFkZGVkUHJvZHVjdHMsIHJlbW92ZVByb2R1Y3QgfSA9IHVzZUJ1Y2tldCgpO1xuICAgIGNvbnN0IGFkZGVkUHJvZHVjdHNBcnJheSA9IEFycmF5LmZyb20oYWRkZWRQcm9kdWN0cy52YWx1ZXMoKSk7XG4gICAgaWYgKGFkZGVkUHJvZHVjdHNBcnJheS5sZW5ndGggPT09IDApIHsgIFxuICAgICAgICByZXR1cm4gPFRleHQ+SW1wb3Nzw612ZWwgY29uY2x1aXIgYSBjb21wcmEsIG7Do28gaMOhIG5hZGEgbm8gY2FycmluaG8hPC9UZXh0PjtcbiAgICB9XG5cbiAgICBjb25zdCBnZXJhUGl4ID0gKCkgPT4ge1xuICAgICAgICBzZXRUaXRsZSgnQ29tcHJhIGNvbmZpcm1hZGEsIHBhZ3VlIGVtOiBodHRwczovL2JpdC5seS8zdWtKeEpiJyk7XG4gICAgICAgIHNldENvbmZpcm1lZChxcik7XG4gICAgICAgIHNldEJ1dHRvbigoXG4gICAgICAgICAgICA8QnV0dG9uR3JvdXA+XG4gICAgICAgICAgICA8L0J1dHRvbkdyb3VwPlxuICAgICAgICApKTtcbiAgICB9O1xuICAgIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoJycpO1xuXG4gICAgY29uc3QgW2NvbmZpcm1lZCwgc2V0Q29uZmlybWVkXSA9IHVzZVN0YXRlKGNoZWNrb3V0KTtcbiAgICBjb25zdCBbYnV0dG9uLCBzZXRCdXR0b25dID0gdXNlU3RhdGUoKFxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uR3JvdXA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2dlcmFQaXh9PkNvbmZpcm1hciBjb21wcmE/PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uR3JvdXA+XG4gICAgKSk7XG4gICBcbiAgICByZXR1cm4gKFxuICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgICAgICAgIGZpbGU9e2ZzLmNyZWF0ZVJlYWRTdHJlYW0oY29uZmlybWVkKX1cbiAgICAgICAgICAgIGJ1dHRvbnM9e2J1dHRvbn0gICAgXG4gICAgICAgIC8+XG4gICAgICAgICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBBcHAoKSB7XG4gICAgY29uc3QgeyBjaGF0IH0gPSB1c2VCb3RDb250ZXh0KCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8UHJvZHVjdHNQcm92aWRlcj5cbiAgICAgICAgICAgIDxCdWNrZXRQcm92aWRlcj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uR3JvdXBcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2BCZW0gdmluZG8oYSkkeycsICcgKyBjaGF0LmZpcnN0TmFtZSA/PyAnJ30hYH1cbiAgICAgICAgICAgICAgICAgICAgaXNSZXBseUJ1dHRvbnNcbiAgICAgICAgICAgICAgICAgICAgaXNSZXNpemVkS2V5Ym9hcmRcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24+Y2FycmluaG88L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbj5jYXRhbG9nbzwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPmZpbmFsaXphciBjb21wcmE8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0J1dHRvbkdyb3VwPlxuICAgICAgICAgICAgICAgIDxSb3V0ZXI+XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3N0YXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVjZWJlQ29kaWdvIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvUm91dGU+XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiY2FycmluaG9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdWNrZXQgLz4gXG4gICAgICAgICAgICAgICAgICAgIDwvUm91dGU+XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiY2F0YWxvZ29cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXRhbG9nIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvUm91dGU+XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiZmluYWxpemFyIGNvbXByYVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1Y2tldC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmVjaGFDb21wcmEvPlxuICAgICAgICAgICAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgICAgICAgIDwvUm91dGVyPlxuICAgICAgICAgICAgPC9CdWNrZXRQcm92aWRlcj5cbiAgICAgICAgPC9Qcm9kdWN0c1Byb3ZpZGVyPlxuICAgICk7XG59XG5cbiJdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBSUE7QUFPQTtBQUVBOztBQUNBO0FBRUE7QUFFQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFNQTtBQWpDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/App.tsx\n");

/***/ }),

/***/ "./src/api/index.ts":
/*!**************************!*\
  !*** ./src/api/index.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.fetchMockProducts = void 0;\nconst products_json_1 = __importDefault(__webpack_require__(/*! ./products.json */ \"./src/api/products.json\"));\nfunction fetchMockProducts() {\n    return new Promise((resolve) => setTimeout(() => resolve(products_json_1.default), 1500));\n}\nexports.fetchMockProducts = fetchMockProducts;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBpL2luZGV4LnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHVyYmFuLWJvdC9zdGFydGVyLXR5cGVzY3JpcHQvLi9zcmMvYXBpL2luZGV4LnRzPzc5ZjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByb2R1Y3RzIGZyb20gJy4vcHJvZHVjdHMuanNvbic7XG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hNb2NrUHJvZHVjdHMoKTogUHJvbWlzZTxQcm9kdWN0W10+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQoKCkgPT4gcmVzb2x2ZShwcm9kdWN0cyksIDE1MDApKTtcbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFGQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/api/index.ts\n");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n// Uncomment platform which you want to develop\n__webpack_require__(/*! ./render/telegram */ \"./src/render/telegram.tsx\");\n// import './render/facebook';\n// import './render/slack';\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXgudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AdXJiYW4tYm90L3N0YXJ0ZXItdHlwZXNjcmlwdC8uL3NyYy9pbmRleC50cz9mZmI0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIFVuY29tbWVudCBwbGF0Zm9ybSB3aGljaCB5b3Ugd2FudCB0byBkZXZlbG9wXG5pbXBvcnQgJy4vcmVuZGVyL3RlbGVncmFtJztcbi8vIGltcG9ydCAnLi9yZW5kZXIvZmFjZWJvb2snO1xuLy8gaW1wb3J0ICcuL3JlbmRlci9zbGFjayc7XG4iXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.ts\n");

/***/ }),

/***/ "./src/jsonConverter.ts":
/*!******************************!*\
  !*** ./src/jsonConverter.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.JsonCerto = void 0;\nclass JsonCerto {\n    constructor() {\n        this.id = 0;\n        this.name = \"\";\n        this.images = [];\n        this.price = 0.0;\n    }\n}\nexports.JsonCerto = JsonCerto;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanNvbkNvbnZlcnRlci50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0B1cmJhbi1ib3Qvc3RhcnRlci10eXBlc2NyaXB0Ly4vc3JjL2pzb25Db252ZXJ0ZXIudHM/NjA1YiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgSnNvbkNlcnRve1xuICAgIGlkOiBOdW1iZXIgPSAwO1xuICAgIG5hbWU6IHN0cmluZyA9IFwiXCI7XG4gICAgaW1hZ2VzOiBzdHJpbmdbXSA9IFtdO1xuICAgIHByaWNlID0gMC4wO1xufVxuXG4iXSwibWFwcGluZ3MiOiI7OztBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFMQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/jsonConverter.ts\n");

/***/ }),

/***/ "./src/pages/Bucket.tsx":
/*!******************************!*\
  !*** ./src/pages/Bucket.tsx ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Bucket = void 0;\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nconst bucket_1 = __webpack_require__(/*! ../store/bucket */ \"./src/store/bucket.tsx\");\nconst core_1 = __webpack_require__(/*! @urban-bot/core */ \"@urban-bot/core\");\nfunction Bucket() {\n    const { addedProducts, removeProduct } = bucket_1.useBucket();\n    const addedProductsArray = Array.from(addedProducts.values());\n    const totalCount = addedProductsArray.reduce((totalCount, { count, price }) => totalCount + count * price, 0);\n    core_1.useCommand(({ command }) => {\n        const index = Number(command.slice(-1)) - 1;\n        removeProduct(addedProductsArray[index]);\n    }, /delete\\d+/);\n    if (addedProductsArray.length === 0) {\n        return react_1.default.createElement(core_1.Text, null, \"N\\u00E3o h\\u00E1 nada no carrinho!\");\n    }\n    return (react_1.default.createElement(core_1.Text, null,\n        addedProductsArray.map((product, index) => {\n            return (react_1.default.createElement(react_1.default.Fragment, { key: product.id },\n                react_1.default.createElement(\"i\", null, product.name),\n                \" - \",\n                react_1.default.createElement(\"b\", null, product.count),\n                \" - \",\n                react_1.default.createElement(\"b\", null, Number(product.price).toFixed(2)),\n                \"$ /delete\",\n                index + 1,\n                react_1.default.createElement(\"br\", null)));\n        }),\n        \"-----------------------------------\",\n        react_1.default.createElement(\"br\", null),\n        \"Pre\\u00E7o final: \",\n        react_1.default.createElement(\"b\", null,\n            \"R$\",\n            Number(totalCount).toFixed(2))));\n}\nexports.Bucket = Bucket;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvQnVja2V0LnRzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0B1cmJhbi1ib3Qvc3RhcnRlci10eXBlc2NyaXB0Ly4vc3JjL3BhZ2VzL0J1Y2tldC50c3g/ODAzOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlQnVja2V0IH0gZnJvbSAnLi4vc3RvcmUvYnVja2V0JztcbmltcG9ydCB7IFRleHQsIHVzZUNvbW1hbmQgfSBmcm9tICdAdXJiYW4tYm90L2NvcmUnO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBCdWNrZXQoKSB7XG4gICAgY29uc3QgeyBhZGRlZFByb2R1Y3RzLCByZW1vdmVQcm9kdWN0IH0gPSB1c2VCdWNrZXQoKTtcbiAgICBjb25zdCBhZGRlZFByb2R1Y3RzQXJyYXkgPSBBcnJheS5mcm9tKGFkZGVkUHJvZHVjdHMudmFsdWVzKCkpO1xuXG4gICAgY29uc3QgdG90YWxDb3VudCA9IGFkZGVkUHJvZHVjdHNBcnJheS5yZWR1Y2UoKHRvdGFsQ291bnQsIHsgY291bnQsIHByaWNlIH0pID0+IHRvdGFsQ291bnQgKyBjb3VudCAqIHByaWNlLCAwKTtcblxuICAgIHVzZUNvbW1hbmQoKHsgY29tbWFuZCB9KSA9PiB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gTnVtYmVyKGNvbW1hbmQuc2xpY2UoLTEpKSAtIDE7XG5cbiAgICAgICAgcmVtb3ZlUHJvZHVjdChhZGRlZFByb2R1Y3RzQXJyYXlbaW5kZXhdKTtcbiAgICB9LCAvZGVsZXRlXFxkKy8pO1xuXG4gICAgaWYgKGFkZGVkUHJvZHVjdHNBcnJheS5sZW5ndGggPT09IDApIHsgIFxuICAgICAgICByZXR1cm4gPFRleHQ+TsOjbyBow6EgbmFkYSBubyBjYXJyaW5obyE8L1RleHQ+O1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxUZXh0PlxuICAgICAgICAgICAge2FkZGVkUHJvZHVjdHNBcnJheS5tYXAoKHByb2R1Y3QsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17cHJvZHVjdC5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aT57cHJvZHVjdC5uYW1lfTwvaT4gLSA8Yj57cHJvZHVjdC5jb3VudH08L2I+IC0gPGI+e051bWJlcihwcm9kdWN0LnByaWNlKS50b0ZpeGVkKDIpfTwvYj4kIC9kZWxldGV7aW5kZXggKyAxfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgUHJlw6dvIGZpbmFsOiA8Yj5SJHtOdW1iZXIodG90YWxDb3VudCkudG9GaXhlZCgyKX08L2I+XG4gICAgICAgIDwvVGV4dD5cbiAgICApO1xufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7O0FBQUE7O0FBQUE7O0FBQUE7QUFDQTtBQUdBOztBQUVBOztBQUNBOztBQUFBO0FBR0E7QUEvQkE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/Bucket.tsx\n");

/***/ }),

/***/ "./src/pages/Catalog.tsx":
/*!*******************************!*\
  !*** ./src/pages/Catalog.tsx ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Catalog = void 0;\nconst react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nconst core_1 = __webpack_require__(/*! @urban-bot/core */ \"@urban-bot/core\");\nconst utils_1 = __webpack_require__(/*! ../utils */ \"./src/utils.ts\");\nconst products_1 = __webpack_require__(/*! ../store/products */ \"./src/store/products.tsx\");\nconst bucket_1 = __webpack_require__(/*! ../store/bucket */ \"./src/store/bucket.tsx\");\nfunction Catalog() {\n    const [productIndex, setProductIndex] = react_1.useState(0);\n    const [imageIndex, setImageIndex] = react_1.useState(0);\n    const { products, fetchProducts } = products_1.useProducts();\n    const { addProduct, addedProducts } = bucket_1.useBucket();\n    react_1.useEffect(() => {\n        fetchProducts();\n    }, [fetchProducts]);\n    if (products.length === 0) {\n        return react_1.default.createElement(core_1.Text, null, \"Carregando...\");\n    }\n    const activeProduct = products[productIndex];\n    function clickPreviousProduct() {\n        setProductIndex(utils_1.calculateCircularIndex(productIndex - 1, products.length));\n        setImageIndex(0);\n    }\n    function clickNextProduct() {\n        setProductIndex(utils_1.calculateCircularIndex(productIndex + 1, products.length));\n        setImageIndex(0);\n    }\n    function clickNextImage() {\n        setImageIndex(utils_1.calculateCircularIndex(imageIndex + 1, activeProduct.images.length));\n    }\n    function clickAddProductToBucket() {\n        addProduct(activeProduct);\n    }\n    const addedProduct = addedProducts.get(activeProduct.id);\n    const bucketCount = addedProduct ? addedProduct.count : 0;\n    const title = (react_1.default.createElement(react_1.default.Fragment, null,\n        react_1.default.createElement(\"i\", null, activeProduct.name),\n        react_1.default.createElement(\"br\", null),\n        \"Price: \",\n        react_1.default.createElement(\"b\", null,\n            \"R$\",\n            Number(activeProduct.price).toFixed(2))));\n    return (react_1.default.createElement(core_1.Image, { title: title, file: activeProduct.images[imageIndex], buttons: react_1.default.createElement(core_1.ButtonGroup, { maxColumns: 2 },\n            react_1.default.createElement(core_1.Button, { onClick: clickPreviousProduct }, \"\\u2B05\\uFE0F anterior\"),\n            react_1.default.createElement(core_1.Button, { onClick: clickNextProduct }, \" proximo \\u27A1\\uFE0F\"),\n            activeProduct.images.length > 1 ? react_1.default.createElement(core_1.Button, { onClick: clickNextImage }, \"\\uD83D\\uDDBC\\uFE0F\") : null,\n            react_1.default.createElement(core_1.Button, { onClick: clickAddProductToBucket }, `Adicionar ao carrinho (${bucketCount})`)) }));\n}\nexports.Catalog = Catalog;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvQ2F0YWxvZy50c3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AdXJiYW4tYm90L3N0YXJ0ZXItdHlwZXNjcmlwdC8uL3NyYy9wYWdlcy9DYXRhbG9nLnRzeD9lZjE5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSW1hZ2UsIEJ1dHRvbkdyb3VwLCBCdXR0b24sIFRleHQgfSBmcm9tICdAdXJiYW4tYm90L2NvcmUnO1xuaW1wb3J0IHsgY2FsY3VsYXRlQ2lyY3VsYXJJbmRleCB9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IHVzZVByb2R1Y3RzIH0gZnJvbSAnLi4vc3RvcmUvcHJvZHVjdHMnO1xuaW1wb3J0IHsgdXNlQnVja2V0IH0gZnJvbSAnLi4vc3RvcmUvYnVja2V0JztcblxuZXhwb3J0IGZ1bmN0aW9uIENhdGFsb2coKSB7XG4gICAgY29uc3QgW3Byb2R1Y3RJbmRleCwgc2V0UHJvZHVjdEluZGV4XSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtpbWFnZUluZGV4LCBzZXRJbWFnZUluZGV4XSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IHsgcHJvZHVjdHMsIGZldGNoUHJvZHVjdHMgfSA9IHVzZVByb2R1Y3RzKCk7XG4gICAgY29uc3QgeyBhZGRQcm9kdWN0LCBhZGRlZFByb2R1Y3RzIH0gPSB1c2VCdWNrZXQoKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGZldGNoUHJvZHVjdHMoKTtcbiAgICB9LCBbZmV0Y2hQcm9kdWN0c10pO1xuXG4gICAgaWYgKHByb2R1Y3RzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gPFRleHQ+Q2FycmVnYW5kby4uLjwvVGV4dD47XG4gICAgfVxuXG4gICAgY29uc3QgYWN0aXZlUHJvZHVjdCA9IHByb2R1Y3RzW3Byb2R1Y3RJbmRleF07XG5cbiAgICBmdW5jdGlvbiBjbGlja1ByZXZpb3VzUHJvZHVjdCgpIHtcbiAgICAgICAgc2V0UHJvZHVjdEluZGV4KGNhbGN1bGF0ZUNpcmN1bGFySW5kZXgocHJvZHVjdEluZGV4IC0gMSwgcHJvZHVjdHMubGVuZ3RoKSk7XG4gICAgICAgIHNldEltYWdlSW5kZXgoMCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xpY2tOZXh0UHJvZHVjdCgpIHtcbiAgICAgICAgc2V0UHJvZHVjdEluZGV4KGNhbGN1bGF0ZUNpcmN1bGFySW5kZXgocHJvZHVjdEluZGV4ICsgMSwgcHJvZHVjdHMubGVuZ3RoKSk7XG4gICAgICAgIHNldEltYWdlSW5kZXgoMCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xpY2tOZXh0SW1hZ2UoKSB7XG4gICAgICAgIHNldEltYWdlSW5kZXgoY2FsY3VsYXRlQ2lyY3VsYXJJbmRleChpbWFnZUluZGV4ICsgMSwgYWN0aXZlUHJvZHVjdC5pbWFnZXMubGVuZ3RoKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xpY2tBZGRQcm9kdWN0VG9CdWNrZXQoKSB7XG4gICAgICAgIGFkZFByb2R1Y3QoYWN0aXZlUHJvZHVjdCk7XG4gICAgfVxuXG4gICAgY29uc3QgYWRkZWRQcm9kdWN0ID0gYWRkZWRQcm9kdWN0cy5nZXQoYWN0aXZlUHJvZHVjdC5pZCk7XG4gICAgY29uc3QgYnVja2V0Q291bnQgPSBhZGRlZFByb2R1Y3QgPyBhZGRlZFByb2R1Y3QuY291bnQgOiAwO1xuXG4gICAgY29uc3QgdGl0bGUgPSAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8aT57YWN0aXZlUHJvZHVjdC5uYW1lfTwvaT5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgUHJpY2U6IDxiPlIke051bWJlcihhY3RpdmVQcm9kdWN0LnByaWNlKS50b0ZpeGVkKDIpfTwvYj5cbiAgICAgICAgPC8+XG4gICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgdGl0bGU9e3RpdGxlfVxuICAgICAgICAgICAgZmlsZT17YWN0aXZlUHJvZHVjdC5pbWFnZXNbaW1hZ2VJbmRleF19XG4gICAgICAgICAgICBidXR0b25zPXtcbiAgICAgICAgICAgICAgICA8QnV0dG9uR3JvdXAgbWF4Q29sdW1ucz17Mn0+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17Y2xpY2tQcmV2aW91c1Byb2R1Y3R9PuKshe+4jyBhbnRlcmlvcjwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2NsaWNrTmV4dFByb2R1Y3R9PiBwcm94aW1vIOKeoe+4jzwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICB7YWN0aXZlUHJvZHVjdC5pbWFnZXMubGVuZ3RoID4gMSA/IDxCdXR0b24gb25DbGljaz17Y2xpY2tOZXh0SW1hZ2V9PvCflrzvuI88L0J1dHRvbj4gOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2NsaWNrQWRkUHJvZHVjdFRvQnVja2V0fT57YEFkaWNpb25hciBhbyBjYXJyaW5obyAoJHtidWNrZXRDb3VudH0pYH08L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0J1dHRvbkdyb3VwPlxuICAgICAgICAgICAgfVxuICAgICAgICAvPlxuICAgICk7XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7O0FBQ0E7O0FBQUE7QUFJQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUEzREE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/Catalog.tsx\n");

/***/ }),

/***/ "./src/render/telegram.tsx":
/*!*********************************!*\
  !*** ./src/render/telegram.tsx ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nconst telegram_1 = __webpack_require__(/*! @urban-bot/telegram */ \"@urban-bot/telegram\");\nconst core_1 = __webpack_require__(/*! @urban-bot/core */ \"@urban-bot/core\");\nconst dotenv_1 = __importDefault(__webpack_require__(/*! dotenv */ \"dotenv\"));\nconst App_1 = __webpack_require__(/*! ../App */ \"./src/App.tsx\");\ndotenv_1.default.config();\nconst { TELEGRAM_TOKEN, PORT } = process.env;\nconst isDevelopment = \"development\" === 'development';\nif (!TELEGRAM_TOKEN) {\n    throw new Error('Provide TELEGRAM_TOKEN to .env https://core.telegram.org/bots#6-botfather');\n}\nconst urbanBotTelegram = new telegram_1.UrbanBotTelegram({\n    token: TELEGRAM_TOKEN,\n    isPolling: isDevelopment,\n});\ncore_1.render(react_1.default.createElement(core_1.Root, { bot: urbanBotTelegram, port: PORT ? Number(PORT) : undefined },\n    react_1.default.createElement(App_1.App, null)), () => console.log('telegram bot has started'));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVuZGVyL3RlbGVncmFtLnRzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0B1cmJhbi1ib3Qvc3RhcnRlci10eXBlc2NyaXB0Ly4vc3JjL3JlbmRlci90ZWxlZ3JhbS50c3g/YWQxMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVXJiYW5Cb3RUZWxlZ3JhbSB9IGZyb20gJ0B1cmJhbi1ib3QvdGVsZWdyYW0nO1xuaW1wb3J0IHsgcmVuZGVyLCBSb290IH0gZnJvbSAnQHVyYmFuLWJvdC9jb3JlJztcbmltcG9ydCBkb3RlbnYgZnJvbSAnZG90ZW52JztcbmltcG9ydCB7IEFwcCB9IGZyb20gJy4uL0FwcCc7XG5cbmRvdGVudi5jb25maWcoKTtcblxuY29uc3QgeyBURUxFR1JBTV9UT0tFTiwgUE9SVCB9ID0gcHJvY2Vzcy5lbnY7XG5cbmNvbnN0IGlzRGV2ZWxvcG1lbnQgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JztcblxuaWYgKCFURUxFR1JBTV9UT0tFTikge1xuICAgIHRocm93IG5ldyBFcnJvcignUHJvdmlkZSBURUxFR1JBTV9UT0tFTiB0byAuZW52IGh0dHBzOi8vY29yZS50ZWxlZ3JhbS5vcmcvYm90cyM2LWJvdGZhdGhlcicpO1xufVxuXG5jb25zdCB1cmJhbkJvdFRlbGVncmFtID0gbmV3IFVyYmFuQm90VGVsZWdyYW0oe1xuICAgIHRva2VuOiBURUxFR1JBTV9UT0tFTixcbiAgICBpc1BvbGxpbmc6IGlzRGV2ZWxvcG1lbnQsXG59KTtcblxucmVuZGVyKFxuICAgIDxSb290IGJvdD17dXJiYW5Cb3RUZWxlZ3JhbX0gcG9ydD17UE9SVCA/IE51bWJlcihQT1JUKSA6IHVuZGVmaW5lZH0+XG4gICAgICAgIDxBcHAgLz5cbiAgICA8L1Jvb3Q+LFxuICAgICgpID0+IGNvbnNvbGUubG9nKCd0ZWxlZ3JhbSBib3QgaGFzIHN0YXJ0ZWQnKSxcbik7XG4iXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/render/telegram.tsx\n");

/***/ }),

/***/ "./src/store/bucket.tsx":
/*!******************************!*\
  !*** ./src/store/bucket.tsx ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.useBucket = exports.BucketProvider = void 0;\nconst react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nconst BucketContext = react_1.createContext({});\nfunction BucketProvider({ children }) {\n    const [addedProducts, setAddedProducts] = react_1.default.useState(new Map());\n    function addProduct(newProduct) {\n        setAddedProducts((addedProducts) => {\n            const newAddedProducts = new Map(addedProducts);\n            if (newAddedProducts.has(newProduct.id)) {\n                const addedProduct = newAddedProducts.get(newProduct.id);\n                addedProduct.count += 1;\n            }\n            else {\n                newAddedProducts.set(newProduct.id, { ...newProduct, count: 1 });\n            }\n            return newAddedProducts;\n        });\n    }\n    function removeProduct(deletedProduct) {\n        setAddedProducts((addedProducts) => {\n            const addedProduct = addedProducts.get(deletedProduct.id);\n            if (addedProduct === undefined) {\n                return addedProducts;\n            }\n            const newAddedProducts = new Map(addedProducts);\n            addedProduct.count -= 1;\n            if (addedProduct.count === 0) {\n                newAddedProducts.delete(deletedProduct.id);\n            }\n            return new Map(newAddedProducts);\n        });\n    }\n    return (react_1.default.createElement(BucketContext.Provider, { value: { addedProducts, addProduct, removeProduct } }, children));\n}\nexports.BucketProvider = BucketProvider;\nconst useBucket = () => react_1.useContext(BucketContext);\nexports.useBucket = useBucket;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvYnVja2V0LnRzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0B1cmJhbi1ib3Qvc3RhcnRlci10eXBlc2NyaXB0Ly4vc3JjL3N0b3JlL2J1Y2tldC50c3g/YjViMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tICcuLi90eXBlcyc7XG5cbmV4cG9ydCB0eXBlIEFkZGVkUHJvZHVjdCA9IFByb2R1Y3QgJiB7IGNvdW50OiBudW1iZXIgfTtcblxuZXhwb3J0IHR5cGUgQWRkZWRQcm9kdWN0cyA9IE1hcDxudW1iZXIsIEFkZGVkUHJvZHVjdD47XG5cbnR5cGUgQnVja2V0Q29udGV4dFR5cGUgPSB7XG4gICAgYWRkZWRQcm9kdWN0czogQWRkZWRQcm9kdWN0cztcbiAgICBhZGRQcm9kdWN0OiAocHJvZHVjdDogUHJvZHVjdCkgPT4gdm9pZDtcbiAgICByZW1vdmVQcm9kdWN0OiAocHJvZHVjdDogUHJvZHVjdCkgPT4gdm9pZDtcbn07XG5cbmNvbnN0IEJ1Y2tldENvbnRleHQgPSBjcmVhdGVDb250ZXh0PEJ1Y2tldENvbnRleHRUeXBlPih7fSBhcyBCdWNrZXRDb250ZXh0VHlwZSk7XG5cbnR5cGUgQnVja2V0UHJvdmlkZXJQcm9wcyA9IHtcbiAgICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIEJ1Y2tldFByb3ZpZGVyKHsgY2hpbGRyZW4gfTogQnVja2V0UHJvdmlkZXJQcm9wcykge1xuICAgIGNvbnN0IFthZGRlZFByb2R1Y3RzLCBzZXRBZGRlZFByb2R1Y3RzXSA9IFJlYWN0LnVzZVN0YXRlPEFkZGVkUHJvZHVjdHM+KG5ldyBNYXAoKSk7XG5cbiAgICBmdW5jdGlvbiBhZGRQcm9kdWN0KG5ld1Byb2R1Y3Q6IFByb2R1Y3QpIHtcbiAgICAgICAgc2V0QWRkZWRQcm9kdWN0cygoYWRkZWRQcm9kdWN0cykgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3QWRkZWRQcm9kdWN0cyA9IG5ldyBNYXAoYWRkZWRQcm9kdWN0cyk7XG5cbiAgICAgICAgICAgIGlmIChuZXdBZGRlZFByb2R1Y3RzLmhhcyhuZXdQcm9kdWN0LmlkKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFkZGVkUHJvZHVjdCA9IG5ld0FkZGVkUHJvZHVjdHMuZ2V0KG5ld1Byb2R1Y3QuaWQpIGFzIEFkZGVkUHJvZHVjdDtcblxuICAgICAgICAgICAgICAgIGFkZGVkUHJvZHVjdC5jb3VudCArPSAxO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBuZXdBZGRlZFByb2R1Y3RzLnNldChuZXdQcm9kdWN0LmlkLCB7IC4uLm5ld1Byb2R1Y3QsIGNvdW50OiAxIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbmV3QWRkZWRQcm9kdWN0cztcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlUHJvZHVjdChkZWxldGVkUHJvZHVjdDogUHJvZHVjdCkge1xuICAgICAgICBzZXRBZGRlZFByb2R1Y3RzKChhZGRlZFByb2R1Y3RzKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhZGRlZFByb2R1Y3QgPSBhZGRlZFByb2R1Y3RzLmdldChkZWxldGVkUHJvZHVjdC5pZCk7XG5cbiAgICAgICAgICAgIGlmIChhZGRlZFByb2R1Y3QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhZGRlZFByb2R1Y3RzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBuZXdBZGRlZFByb2R1Y3RzID0gbmV3IE1hcChhZGRlZFByb2R1Y3RzKTtcblxuICAgICAgICAgICAgYWRkZWRQcm9kdWN0LmNvdW50IC09IDE7XG5cbiAgICAgICAgICAgIGlmIChhZGRlZFByb2R1Y3QuY291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICBuZXdBZGRlZFByb2R1Y3RzLmRlbGV0ZShkZWxldGVkUHJvZHVjdC5pZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBuZXcgTWFwKG5ld0FkZGVkUHJvZHVjdHMpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8QnVja2V0Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBhZGRlZFByb2R1Y3RzLCBhZGRQcm9kdWN0LCByZW1vdmVQcm9kdWN0IH19PntjaGlsZHJlbn08L0J1Y2tldENvbnRleHQuUHJvdmlkZXI+XG4gICAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IHVzZUJ1Y2tldCA9ICgpID0+IHVzZUNvbnRleHQoQnVja2V0Q29udGV4dCk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQWFBO0FBTUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUExQ0E7QUE0Q0E7QUFBQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/store/bucket.tsx\n");

/***/ }),

/***/ "./src/store/products.tsx":
/*!********************************!*\
  !*** ./src/store/products.tsx ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.useProducts = exports.ProductsProvider = void 0;\nconst react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nconst api_1 = __webpack_require__(/*! ../api */ \"./src/api/index.ts\");\nconst ProductsContext = react_1.createContext({});\nfunction ProductsProvider({ children }) {\n    const [products, setProducts] = react_1.default.useState([]);\n    const fetchProducts = react_1.useCallback(async () => {\n        const products = await api_1.fetchMockProducts();\n        setProducts(products);\n    }, []);\n    return react_1.default.createElement(ProductsContext.Provider, { value: { products, fetchProducts } }, children);\n}\nexports.ProductsProvider = ProductsProvider;\nconst useProducts = () => react_1.useContext(ProductsContext);\nexports.useProducts = useProducts;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvcHJvZHVjdHMudHN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHVyYmFuLWJvdC9zdGFydGVyLXR5cGVzY3JpcHQvLi9zcmMvc3RvcmUvcHJvZHVjdHMudHN4PzQ0ZjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZmV0Y2hNb2NrUHJvZHVjdHMgfSBmcm9tICcuLi9hcGknO1xuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gJy4uL3R5cGVzJztcblxudHlwZSBQcm9kdWN0c0NvbnRleHRUeXBlID0ge1xuICAgIHByb2R1Y3RzOiBQcm9kdWN0W107XG4gICAgZmV0Y2hQcm9kdWN0czogKCkgPT4gdm9pZDtcbn07XG5cbmNvbnN0IFByb2R1Y3RzQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8UHJvZHVjdHNDb250ZXh0VHlwZT4oe30gYXMgUHJvZHVjdHNDb250ZXh0VHlwZSk7XG5cbnR5cGUgUHJvZHVjdHNQcm92aWRlclByb3BzID0ge1xuICAgIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gUHJvZHVjdHNQcm92aWRlcih7IGNoaWxkcmVuIH06IFByb2R1Y3RzUHJvdmlkZXJQcm9wcykge1xuICAgIGNvbnN0IFtwcm9kdWN0cywgc2V0UHJvZHVjdHNdID0gUmVhY3QudXNlU3RhdGU8UHJvZHVjdFtdPihbXSk7XG5cbiAgICBjb25zdCBmZXRjaFByb2R1Y3RzID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9kdWN0cyA9IGF3YWl0IGZldGNoTW9ja1Byb2R1Y3RzKCk7XG5cbiAgICAgICAgc2V0UHJvZHVjdHMocHJvZHVjdHMpO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiA8UHJvZHVjdHNDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHByb2R1Y3RzLCBmZXRjaFByb2R1Y3RzIH19PntjaGlsZHJlbn08L1Byb2R1Y3RzQ29udGV4dC5Qcm92aWRlcj47XG59XG5cbmV4cG9ydCBjb25zdCB1c2VQcm9kdWN0cyA9ICgpID0+IHVzZUNvbnRleHQoUHJvZHVjdHNDb250ZXh0KTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFRQTtBQU1BO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFWQTtBQVlBO0FBQUE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/store/products.tsx\n");

/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.calculateCircularIndex = void 0;\nfunction calculateCircularIndex(index, arrayLength) {\n    return (arrayLength + index) % arrayLength;\n}\nexports.calculateCircularIndex = calculateCircularIndex;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AdXJiYW4tYm90L3N0YXJ0ZXItdHlwZXNjcmlwdC8uL3NyYy91dGlscy50cz83ZGRhIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVDaXJjdWxhckluZGV4KGluZGV4OiBudW1iZXIsIGFycmF5TGVuZ3RoOiBudW1iZXIpIHtcbiAgICByZXR1cm4gKGFycmF5TGVuZ3RoICsgaW5kZXgpICUgYXJyYXlMZW5ndGg7XG59XG4iXSwibWFwcGluZ3MiOiI7OztBQUFBO0FBQ0E7QUFDQTtBQUZBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/utils.ts\n");

/***/ }),

/***/ "./src/api/products.json":
/*!*******************************!*\
  !*** ./src/api/products.json ***!
  \*******************************/
/***/ ((module) => {

module.exports = JSON.parse("[{\"id\":5,\"name\":\"Kit Vitaminado\",\"images\":[\"https://avongroup.vteximg.com.br/arquivos/ids/169961-470-470/kit-2-v12.jpg?v=637521845357200000\"],\"price\":149.9},{\"id\":7,\"name\":\"Creme Facial Aclara Noite Avon Care\",\"images\":[\"https://avongroup.vteximg.com.br/arquivos/ids/162979-470-470/Creme_Facial_Aclara_Noite_Avon_191.jpg?v=637190906078470000\"],\"price\":10.99},{\"id\":8,\"name\":\"Creme Facial Renew Clareador e Textura Uniforme\",\"images\":[\"https://avongroup.vteximg.com.br/arquivos/ids/166250-470-470/Creme_Facial_Renew_Clareador_e_157.jpg?v=637369235947670000\"],\"price\":77.9},{\"id\":9,\"name\":\"Peeling Rejuvenescedor\",\"images\":[\"https://avongroup.vteximg.com.br/arquivos/ids/165914-470-470/Peeling_Rejuvenescedor_Avancad_714.jpg?v=637347437466300000\"],\"price\":61.9}]");

/***/ }),

/***/ "@urban-bot/core":
/*!**********************************!*\
  !*** external "@urban-bot/core" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@urban-bot/core");;

/***/ }),

/***/ "@urban-bot/telegram":
/*!**************************************!*\
  !*** external "@urban-bot/telegram" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("@urban-bot/telegram");;

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");;

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;