
// This funciton accepts user input in the form of a grade number and 
//displays the equivalent letter grade
    function myGrade() {
    
      var letterGrade;
      var score = document.getElementById("numberGrade").value;
    
      switch(true) {
        case (score > 100):
          letterGrade = 'INVALID SCORE';
          document.getElementById("gScore").value = letterGrade;
            break; 
        case (score >= 90):
           letterGrade = 'A+';
           document.getElementById("gScore").value = letterGrade;
            break;
        case (score >=80):
          letterGrade = 'A';
          document.getElementById("gScore").value = letterGrade;
             break;
        case (score >=75):
          letterGrade = 'B+';
          document.getElementById("gScore").value = letterGrade;
             break;
        case (score >= 70):
          letterGrade = 'B';
          document.getElementById("gScore").value = letterGrade;
             break;
        case (score >= 65):
          letterGrade = 'C+';
          document.getElementById("gScore").value = letterGrade;
            break;
        case (score >= 60):
          letterGrade = 'C';
          document.getElementById("gScore").value = letterGrade;
            break;
        case (score >= 55):
          letterGrade = 'D+';
          document.getElementById("gScore").value = letterGrade;
            break;
        case (score >= 50):
          letterGrade = 'D';
          document.getElementById("gScore").value = letterGrade;
            break;    
        case (score >= 40):
          letterGrade = 'E';
          document.getElementById("gScore").value = letterGrade;
            break;   
        case (score >= 1):
          letterGrade = 'F';
          document.getElementById("gScore").value = letterGrade;
            break;      
        case (score <= 0):
          letterGrade = 'INVALID SCORE';
          document.getElementById("gScore").value = letterGrade;
            break; 
  
      }
  }
