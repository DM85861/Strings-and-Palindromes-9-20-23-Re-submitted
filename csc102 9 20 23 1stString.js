//Sending a string command to the computer for 
//replacements, toLowerCase strings, and text reversals and joining strings //

function commonstrings()
{
    var coms1 = document.getElementById("initString").value;
    var coms2 = coms1.substring(0,3);

    str2 = coms1.replace(/iop/, "jkl");
    str2 = coms2.replace(/iop/i, "jkl")// i = case Insensitive 
    
    coms1 = coms1.toLowerCase(); 
    coms2 = coms1.replace(/iop/g, "jkl");
    
       //reverse a string
    var splitString = coms1.split("");
    var reverseString = splitString.reverse();
    var joinString = reverseString.join("");    
 
  if (coms1 ==joinString)
  {
    ("This is a palindrome");
  }
  else
  {
    ("This is NOT a palindrome");
  }  
  
  
}


//https://www.programiz.com/css/background
//code snippet placed in CSS is from url