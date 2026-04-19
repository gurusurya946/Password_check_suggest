function counter(password) {
    var countList = [0, 0, 0, 0]; // [num_char, u_alpha, l_alpha, special_char]

    for (var i = 0; i < password.length; i++) {
        var char = String(password[i]);

        if (/[0-9]/.test(char)) {
            countList[0]++;
        } else if (/[A-Z]/.test(char)) {
            countList[1]++;
        } else if (/[a-z]/.test(char)) {
            countList[2]++;
        } else {
            countList[3]++;
        }
    }

    return countList;
}
function eachRatio(passwordLength) {
    let result = [];
  
    if (passwordLength < 8) {
      return "Your password is weak. It should be at least 8 characters.";
    } else {
      if (passwordLength % 4 === 0) {
        let eachValue = passwordLength / 4;
        result = [eachValue, eachValue, eachValue, eachValue];
      } else if (passwordLength % 4 === 1) {
        let eachValue = Math.floor(passwordLength / 4);
        result = [eachValue, eachValue, eachValue, eachValue + 1];
      } else if (passwordLength % 4 === 2) {
        let eachValue = Math.floor(passwordLength / 4);
        result = [eachValue, eachValue, eachValue + 1, eachValue + 1];
      } else {
        let eachValue = Math.floor(passwordLength / 4);
        result = [eachValue, eachValue + 1, eachValue + 1, eachValue + 1];
      }
  
      return result;
    }
  }
  
  function checker(password, passwordLength) {
    if (passwordLength < 8) {
      return "Your password is weak. It should be at least 8 characters.";
    } else if (
      passwordLength > 7 &&
      passwordLength < 12 
    ) {
      let best = eachRatio(passwordLength);
      let calc = counter(password);
      let output = "";
      let c = 0;
      let name = ["numbers", "uppercase letters", "lowercase letters", "special characters"];
  
      for (let i = 0; i < name.length; i++) {
        let miss = best[i] - calc[i];
  
        if (miss === 0) {
          output += `You have perfectly included the ${name[i]} in your password.\n`;
          c++;
        } else if (miss > 0) {
          output += `You have to include ${miss} ${name[i]} in your password.\n`;
        } else {
          output += `You have to remove ${Math.abs(miss)} ${name[i]} from your password.\n`;
        }
      }
  
      if (c === 4) {
        output = `The entered password is secure in ${passwordLength}-digit password. If you want to make your password more secure, increase the length to 12 characters.`;
      }
      return output;
    } else {
      let calc = counter(password);
      c1=0;
      for (let i = 0; i < calc.length; i++) {
        if(calc[i] === 0){
          c1=c1+1;
        }
      }
      if (c1 === 3 || c1 === 2){
        return "your password is  weak use any two combination of sepcial characters,uppercase letters and lowercase letters in your password.";
      }
      return "You have entered a very secure password.";
    }
  }
  

 function dis(){
    var password = document.getElementById('pass').value;
    let passwordLength = password.length;
    document.getElementById("demo").innerHTML = checker(password, passwordLength);
    document.getElementById("demo").style.display = "block"
 } 
  // Example usage

