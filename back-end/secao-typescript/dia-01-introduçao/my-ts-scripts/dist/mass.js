"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = void 0;
const units = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];
function convert(value, base, unit) {
    const baseUnit = units.indexOf(base);
    const finalUnit = units.indexOf(unit);
    const exponent = (finalUnit - baseUnit);
    const result = value * Math.pow(10, exponent);
    return result;
}
exports.convert = convert;
