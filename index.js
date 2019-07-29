var zodiac = $(".zodiac");
var instructions = $("h3");
//var instructions = $("#instructions");
var button= $("button");
var input = $(".input").val();
var container = $('.container');

var one=["<h3>something that your sign hates: </h3>","knowing the right thing to say but not being able to say it","being told that they can't do something","having their ideas challenged by someone else","asking or talking to someone who will only give half hearted responses",
"being neglected because someone they really dislike is getting all the attention", "giving good advice but not being appreciated for it","being called a goody two shoes","trying to stop or solve a conflict only to be blamed for it instead",
"failing to do something because of an uncontrollable event","making friends with a bunch of people only to find those friends becoming closer","trying to do something really important but failing because others won't cooperate with their plans",
"working really hard on something, then finding out that others who didn't even try succeed"];

var two=["<h3><p>1 good and 1 bad thing about your sign:</p></h3>","passionate but agressive","calm but confused","artistic but mystical","caring but a smartass","humorous but arrogant","smart but explosive","passionate but offending",
"creative but insecure","funny but basic","adventurous but selfish","loving but insecure","unique but unconfident"]

button.on("click",zodiacInfo)

function zodiacInfo(){
  var input = $(".input").val();
  var container = $('.container');
  var body=$('body');
  if (input=="leo"){
      container.append("<h2>Leo</h2>")
      container.append(one[0]+one[7]);
      container.append(two[0]+two[7]);
      body.css('backgroundColor','#DE4097');
  }else if (input=="pisces"){
      container.append("<h2>pisces</h2>")
      container.append(one[0]+one[2]);
      container.append(two[0]+two[2]);
      body.css('backgroundColor','#8AC32B');
  }else if (input=="scorpio"){
      container.append("<h2>scorpio</h2>")
      container.append(one[0]+one[10]);
      container.append(two[0]+two[10]);
      body.css('backgroundColor','#EC8C32');
  }else if (input=="cancer"){
      container.append("<h2>cancer</h2>")
      container.append(one[0]+one[6]);
      container.append(two[0]+two[6]);
      body.css('backgroundColor','#9F8BE5');
  }else if (input=="aquarius"){
      container.append("<h2>aquarius</h2>")
      container.append(one[0]+one[1]);
      container.append(two[0]+two[1]);
      body.css('backgroundColor','#C8F57A');
  }else if (input=="aries"){
      container.append("<h2>aries</h2>")
      container.append(one[0]+one[3]);
      container.append(two[0]+two[3]);
      body.css('backgroundColor','#4eb7d9');
  }else if (input=="taurus"){
      container.append("<h2>taurus</h2>")
      container.append(one[0]+one[4]);
      container.append(two[0]+two[4]);
      body.css('backgroundColor','#5BA9FF');
  }else if (input=="gemini"){
    container.append("<h2>Gemini</h2>")
    container.append(one[0]+one[6]);
    container.append(two[0]+two[6]);
    body.css('backgroundColor','#444BFF');
  }else if (input=="virgo"){
    container.append("<h2>virgo</h2>")
    container.append(one[0]+one[8]);
    container.append(two[0]+two[8]);
    body.css('backgroundColor','red');
  }else if (input=="libra"){
      container.append("<h2>Libra</h2>")
      container.append(one[0]+one[9]);
      container.append(two[0]+two[9]);
      body.css('backgroundColor','#F07928');
  }else if (input=="sagittarius"){
        container.append("<h2>Sagittarius</h2>")
        container.append(one[0]+one[11]);
        container.append(two[0]+two[11]);
        body.css('backgroundColor','#ECC100');
  }else if (input=="capricorn"){
          container.append("<h2>Capricorn</h2>")
          container.append(one[0]+one[12]);
          container.append(two[0]+two[12]);
          body.css('backgroundColor','#FAF057');
  }else {
    container.append("<h3>That's not a sign, try again!</h3>")
  }
  $('.input').val("");

}
