function validator(){
    var myInt = prompt("Enter the number");

            // Getting the string as a parameter
            // and typecasting it into an integer
            let myFunc = num => Number(num);

            var number = Array.from(String(myInt), myFunc);

            // Print the result array
            console.log(number);

            if (number.length > 16 || number.length < 16) {
                alert("Enter the valid 16 Digit number");
            } else {
                var type="";
                if(number[0]===3){
                     type="American Express";
                }
                else if(number[0]===4){
                     type="VISA";
                }
                else if(number[0]===5){
                    type="Mastercard";
               }
               else if(number[0]===6){
                    type="RuPay";
                }
            }
               

                var sumOdd = 0;
                var sumEven = 0;
                var specific = 0;
                for (let i = 0; i < 8; i++) {
                    specific = (number[2 * i]) * 2;
                    if (specific >= 10 || specific <= 99) {
                        var lastDigit = specific % 10;
                        var firstDigit = Math.floor(specific / 10);
                        specific = lastDigit + firstDigit;
                    }
                    sumEven = specific + sumEven;
                }
                for (let i = 1; i < 9; i++) {
                    sumOdd = number[2 * i - 1] + sumOdd;
                }

                function validCard() {
                    if (((sumOdd + sumEven) % 10) === 0) {
                        document.getElementById("message").textContent="Your "+type+" debit Card is Valid 😊";
                    }else{
                        document.getElementById("message").textContent="Card is Not Valid 😢";
                    }
                }
                validCard();

            }
        
