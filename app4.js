'use strict';

        /**
         * Функция производит сложение двух чисел.
         * @param {Number} a первое число; 
         * @param {Number} b второе число;
         * @returns {Number} возвращает результат суммы.
         */

        function sumNumbers(a, b) {
            let sum = a + b;
            return sum;
        }

        /**
         * Функция вычитает из первого числа второе.
         * @param {Number} a первое число; 
         * @param {Number} b второе число;
         * @returns {Number} возвращает результат разности.
         */

        function deductNumbers(a, b) {
            let deduct = a - b;
            return deduct;
        }

        /**
         * Функция производит умножение двух чисел.
         * @param {Number} a первое число; 
         * @param {Number} b второе число;
         * @returns {Number} возвращает результат произведения.
         */

        function multiplyNumbers(a, b) {
            let multiply = a * b;
            return multiply;
        }

        /**
         * Функция производит деление первого числа на второе.
         * @param {Number} a первое число; 
         * @param {Number} b второе число;
         * @returns {Number} возвращает результат деления.
         */

        function divideNumbers(a, b) {
            let divide = a / b;
            return divide;
        }

        let Num1 = +prompt('Введите первое любое число');
        let Num2 = +prompt('Введите второе любое число');

        let sum = sumNumbers(Num1, Num2);
        alert(`Сумма чисел равна ${sum}`);

        let deduction = deductNumbers(Num1, Num2);
        alert(`Разница чисел равна ${deduction}`);

        let multiplication = multiplyNumbers(Num1, Num2);
        alert(`Произведение чисел равно ${multiplication}`);

        let division = divideNumbers(Num1, Num2);
        alert(`Деление чисел равно ${division}`);