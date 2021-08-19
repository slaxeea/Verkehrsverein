

function loadLanguage(langCode) {
    localStorage.clear();
  localStorage.setItem("langCode", langCode);
  $.getJSON(`lang/${langCode}.json`, function (data) {
    for (var i = 0; i < 5; i++) {
      $(`#selector${i}`).text(data.selectors[i].title);
      $(`#sel-btn${i}-good`).text(data.selectors[i].good);
      $(`#sel-btn${i}-bad`).text(data.selectors[i].bad);
      $(`#sel-btn${i}-all`).text(data.selectors[i].all);
    }

    for (var i = 0; i < 6; i++) {
      $(`#th${i}`).text(data.th[i]);
    }

    $("#reset").text(data.reset);

    $("#search").text(data.search);

    $("#results").text(data.results);

    localStorage.setItem("ja", data.yes);
    localStorage.setItem("nein", data.no);
    localStorage.setItem("tag", data.day);
    localStorage.setItem("nacht", data.night);
    localStorage.setItem("all", data.all);
    localStorage.setItem("schlecht", data.bad);
    localStorage.setItem("gut", data.good);
    
    empty();
    renderNormal();
  });
}

function getWord(word) {
  let data = localStorage.getItem(word);
  return data;
}

