function updateTime() {
  let pragueElement = document.querySelector("#prague");
  pragueElement;
  let pragueDateElement = pragueElement.querySelector(".date");
  let pragueTimeElement = pragueElement.querySelector(".time");
  let pragueTime = moment().tz("Europe/Prague");

  pragueDateElement.innerHTML = moment()
    .tz("Europe/Prague")
    .format("MMM D, YYYY");
  pragueTimeElement.innerHTML = pragueTime.format(
    "h:mm:ss:SS [<small>]A[</small]"
  );

  let seoulElement = document.querySelector("#seoul");
  seoulElement;
  let seoulDateElement = seoulElement.querySelector(".date");
  let seoulTimeElement = seoulElement.querySelector(".time");
  let seoulTime = moment().tz("Asia/Seoul");

  seoulDateElement.innerHTML = moment().tz("Asia/Seoul").format("MMM D, YYYY");
  seoulTimeElement.innerHTML = seoulTime.format(
    "h:mm:ss:SS [<small>]A[</small]"
  );

  let berlinElement = document.querySelector("#berlin");
  berlinElement;
  let berlinDateElement = berlinElement.querySelector(".date");
  let berlinTimeElement = berlinElement.querySelector(".time");
  let berlinTime = moment().tz("Europe/Berlin");

  berlinDateElement.innerHTML = moment()
    .tz("Europe/Berlin")
    .format("MMM D, YYYY");
  berlinTimeElement.innerHTML = berlinTime.format(
    "h:mm:ss:SS [<small>]A[</small]"
  );

  let parisElement = document.querySelector("#paris");
  parisElement;
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let parisTime = moment().tz("Europe/Paris");

  parisDateElement.innerHTML = moment()
    .tz("Europe/Paris")
    .format("MMM D, YYYY");
  parisTimeElement.innerHTML = parisTime.format(
    "h:mm:ss:SS [<small>]A[</small]"
  );
}

updateTime();
setInterval(updateTime, 1);
