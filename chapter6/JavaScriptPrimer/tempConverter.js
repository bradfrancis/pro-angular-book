"use strict";
var TempConverter = (function () {
    function TempConverter() {
    }
    TempConverter.convertTo = function (temp, units) {
        // Default to celsius
        units = (units == "C" || units == "F") ? units : "C";
        var value = temp.toPrecision
            ? temp : parseFloat(temp);
        return TempConverter.performCalculation(value, units).toFixed(1);
    };
    TempConverter.performCalculation = function (value, units) {
        return (units == "C")
            ? ((parseFloat(value.toPrecision(2)) - 32) / 1.8)
            : ((parseFloat(value.toPrecision(5)) * 1.8) + 32);
    };
    return TempConverter;
}());
exports.TempConverter = TempConverter;
