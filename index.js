
function takeANumber(currentLine,personName){
  currentLine.push(personName);
  var statement="Welcome, "+personName+". You are number "+currentLine.length+" in line.";
  // console.log(statement);
  return statement;
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length==0){
    return "There is nobody waiting to be served!";
  }else{
// <<<<<<< HEAD
    var first="Currently serving "+katzDeliLine[0]+".";
// =======
//     var first=katzDeliLine[0];
// >>>>>>> 8baab25ef11b2481ab4976d9a7e2dd53cde033dc
    katzDeliLine.shift();
    return first;
  }
}

function currentLine(line){
  if(line.length>0){
    var peopleInLine="The line is currently: "
    for (var i = 0; i < line.length; i++) {
      var number=i+1;
// <<<<<<< HEAD
      // if(i!=line.length-1){
      //   peopleInLine+=number+". "+line[i]+", ";
      // }else{
      //   peopleInLine+=number+". "+line[i];
      // }
// =======
      peopleInLine+= i+"."+line[i]+", ";
// >>>>>>> 8baab25ef11b2481ab4976d9a7e2dd53cde033dc
    }
    return peopleInLine;
  }else{
    return "The line is currently empty.";
  }
}
