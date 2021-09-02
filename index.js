$(document).ready(function () {
  $("#light").hide();
  $("#pastel").hide();
  window.count = 0;
  localStorage.setItem("oldLangCode", "de");
  localStorage.setItem("langCode", "de");
  renderNormal();
  loadLanguage("de");

  values = {
    weather: "all",
    time: "all",
    holiday: "all",
    kids: "all",
    open: "all",
  };
  localStorage.setItem("values", JSON.stringify(values));
});

function reset() {
  resetcount();
  var collection = $(".row");
  collection.each(function () {
    $(this).remove();
  });
  var count = 0;
  $.getJSON("events.json", function (data) {
    events = data.items;
    $.each(events, function (key, val) {
      count = inc(count);
      $(
        `<tr class="row" id="row">  <td>${val.name}</td>  <td>${getWord(
          val.kids
        )}</td>  <td>${getWord(val.weather)}</td>  <td>${getWord(
          val.time
        )}</td>  <td>${getWord(val.open)}</td>  <td>${getWord(
          val.holiday
        )}</td>  </tr> `
      ).insertAfter("#firstrow");
    });
    col = $(".select-btn");
    col.each(function () {
      $(".select-btn").css("background-color", "transparent");
    });
  });
  values = {
    weather: "all",
    time: "all",
    holiday: "all",
    kids: "all",
    open: "all",
  };
  localStorage.setItem("values", JSON.stringify(values));
}

function renderNormal() {
  var counter = 0;
  $.getJSON("events.json", function (data) {
    events = data.items;
    $.each(events, function (key, val) {
      counter = inc(counter);
      $(
        `<tr class="row" id="row">  <td>${val.name}</td>  <td>${getWord(
          val.kids
        )}</td>  <td>${getWord(val.weather)}</td>  <td>${getWord(
          val.time
        )}</td>  <td>${getWord(val.open)}</td>  <td>${getWord(
          val.holiday
        )}</td>  </tr> `
      ).insertAfter("#firstrow");
    });
    col = $(".select-btn");
    col.each(function () {
      $(".select-btn").css("background-color", "transparent");
    });
  });
}

function inc(current) {
  var count = current;
  count++;
  window.count = count;
  $("#count").text(count);
  return count;
}
function resetcount() {
  window.count = 0;
  $("#count").text("0");
}

function rerender() {
  empty();
  values = localStorage.getItem("values");
  values = JSON.parse(values);
  $.getJSON("events.json", function (data) {
    events = data.items;
    var newcount = 0;
    $.each(events, function (key, val) {
      resetcount();
      correct = 0;
      correct =
        val.weather == values.weather ||
        val.weather == "all" ||
        values.weather == "all"
          ? correct + 1
          : correct;
      correct =
        val.time == values.time || val.time == "all" || values.time == "all"
          ? correct + 1
          : correct;
      correct =
        val.holiday == values.holiday ||
        val.holiday == "all" ||
        values.holiday == "all"
          ? correct + 1
          : correct;
      correct =
        val.kids == values.kids || val.kids == "all" || values.kids == "all"
          ? correct + 1
          : correct;
      correct =
        val.open == values.open || val.open == "all" || values.open == "all"
          ? correct + 1
          : correct;
      if (correct >= 5) {
        newcount = inc(newcount);
        $(
          `<tr class="row" id="row">  <td>${val.name}</td>  <td>${getWord(
            val.kids
          )}</td>  <td>${getWord(val.weather)}</td>  <td>${getWord(
            val.time
          )}</td>  <td>${getWord(val.open)}</td>  <td>${getWord(
            val.holiday
          )}</td>  </tr> `
        ).insertAfter("#firstrow");
      }
    });
  });
}

function empty() {
  var collection = $(".row");
  collection.each(function () {
    $(this).remove();
  });
}
