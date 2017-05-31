(function() {
  window.onload = function(){
    var incrementButton = document.querySelector("#increment");
    var decrementButton = document.querySelector("#decrement");
    var counter = document.querySelector("#counter");

    incrementButton.addEventListener("click", function(){
        console.log("+ button clicked");

      var newCounterValue = parseInt(counter.innerHTML) + 1;

      if(newCounterValue >= 10){
          counter.style.color = "red";
        }
          counter.innerHTML = newCounterValue;
    })//closes increment

    decrementButton.addEventListener("click", function(){
        console.log("+ button clicked");

        var newCounterValue = parseInt(counter.innerHTML) - 1;

        if(newCounterValue < 10){
          counter.style.color = "black";
        }

        if(counter.innerHTML > 0){
          counter.innerHTML = newCounterValue;
        }
      })//closes decrement

  }
})();
