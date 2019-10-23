module.exports = function() {
    return {
        add: function(num1, num2) {
            console.log('The sum is :', num1 + num2);
        },
        multiply: function(num1, num2) {
            return num1 * num2;
        },
        square: function(num) {
            return num ** 2;
        },
        random: function(num1, num2) {
            return Math.floor(Math.random() * (num2 - num1) + num1);
        }
    };
};