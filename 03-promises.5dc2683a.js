var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var r={id:e,exports:{}};return o[e]=r,n.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,o){t[e]=o},e.parcelRequired7c6=n);var r=n("iQIUW");const l={form:document.querySelector(".form"),firstDelay:document.querySelector('[name="delay"]'),delayStep:document.querySelector('[name="step"]'),amountInput:document.querySelector('[name="amount"]')};function i(e,o){const t=Math.random()>.3;return new Promise(((n,r)=>{setTimeout((()=>{t?n({position:e,delay:o}):r({position:e,delay:o})}),o)}))}console.log(l),l.form.addEventListener("submit",(function(e){e.preventDefault();let o=Number(l.firstDelay.value);const t=Number(l.delayStep.value),n=Number(l.amountInput.value);console.log(o,t,n);for(let e=1;e<=n;e+=1)i(e,o).then((({position:e,delay:o})=>{r.Notify.success(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{r.Notify.failure(`❌ Rejected promise ${e} in ${o}ms`)})),o+=t}));
//# sourceMappingURL=03-promises.5dc2683a.js.map
