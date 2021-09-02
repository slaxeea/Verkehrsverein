function submitForm() {
  var eventname = $("#name")[0].value;
  var eventdate = $("#date")[0].value;

  for (i = 1; i < 4; i++) {
    if ($("#weather" + i)[0].checked) {
      var eventweather = $("#weather" + i)[0].value;
    }
  }
  for (i = 1; i < 4; i++) {
    if ($("#time" + i)[0].checked) {
      var eventtime = $("#time" + i)[0].value;
    }
  }
  for (i = 1; i < 4; i++) {
    if ($("#open" + i)[0].checked) {
      var eventopen = $("#open" + i)[0].value;
    }
  }
  for (i = 1; i < 4; i++) {
    if ($("#kids" + i)[0].checked) {
      var eventkids = $("#kids" + i)[0].value;
    }
  }
  for (i = 1; i < 4; i++) {
    if ($("#holiday" + i)[0].checked) {
      var eventholiday = $("#holiday" + i)[0].value;
    }
  }

  newevent = {
    name: eventname,
    date: eventdate,
    weather: eventweather,
    time: eventtime,
    open: eventopen,
    kids: eventkids,
    holiday: eventholiday,
  };

  localStorage.setItem("event", JSON.stringify(newevent));
  window.location.href = "index.html";
}

$(document).ready(function () {
  $("#light").hide();
  $("#pastel").hide();
});
