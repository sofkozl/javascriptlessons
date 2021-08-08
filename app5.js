'use strict';

        /**
         * Функция выполняет одну из выбранных пользователем операций с помощью введенных двух чисел и названия операции.
         * @param {Number} arg1 первое число;
         * @param {Number} arg2 второе число;
         * @param {String} operation название одной из прежложенных операций;
         * @returns {Number} возвращает результат выбранной операции.
         */

        function mathOperation(arg1, arg2, operation) {
            switch(operation) {
                case "сумма":
                    let sum = arg1 + arg2;
                    return sum;
                case "разность":
                    let deduct = arg1 - arg2;
                    return deduct;
                case "умножение":
                    let multiply = arg1 * arg2;
                    return multiply;
                case "деление":
                    let divide = arg1 / arg2;
                    return divide;
                default:
                    throw new Error('Ошибка в названии операции');
            }
        }

        let Num1 = +prompt('Введите первое любое число');
        let Num2 = +prompt('Введите второе любое число');
        let operation = prompt ('Введите одну из приведенных операций для вычисления: сумма, разность, умножение, деление.');

        alert(`Результат операции равен ${mathOperation(Num1, Num2, operation)}`);