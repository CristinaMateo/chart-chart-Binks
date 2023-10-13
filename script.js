fetch('https://swapi.dev/api/films/')
  .then(res => res.json())
  .then(elements => {

    let titulos = []
    let estreno = []
    for (let i = 0; i < elements.results.length; i++) {
      titulos.push(elements.results[i].title)
      estreno.push(elements.results[i].release_date.slice(0, 4))
    }

    var data = {

      labels: titulos,

      series: [estreno]
    };

    var options = {
    };

    var responsiveOptions = [
      ['screen and (min-width: 641px) and (max-width: 1024px)', {
        showPoint: false,
        axisX: {
          labelInterpolationFnc: function (value) {
            // Will return Mon, Tue, Wed etc. on medium screens
            return value.slice(0, 3);
          }
        }
      }],
      ['screen and (max-width: 640px)', {
        showLine: false,
        axisX: {
          labelInterpolationFnc: function (value) {
            // Will return M, T, W etc. on small screens
            return value[0];
          }
        }
      }]
    ];

    new Chartist.Line('#pelis', data, options, responsiveOptions);

    const pelisLoader = document.getElementById("pelis_loader")
    pelisLoader.style.display = 'none';
  })

fetch('https://swapi.dev/api/people/')
  .then(res => res.json())
  .then(elements => {

    let personajes = []
    let part = []
    for (let i = 0; i < elements.results.length; i++) {
      personajes.push(elements.results[i].name)
      part.push(elements.results[i].films.length)
    }

    var data = {

      labels: personajes,

      series: [part]
    };

    var options = {
      seriesBarDistance: 5,
      axisY: {
        onlyInteger: true
      }
    };

    var responsiveOptions = [
      ['screen and (min-width: 641px) and (max-width: 1024px)', {
        seriesBarDistance: 10,
        axisX: {
          labelInterpolationFnc: function (value) {
            return value;
          }
        }
      }],
      ['screen and (max-width: 640px)', {
        seriesBarDistance: 5,
        axisX: {
          labelInterpolationFnc: function (value) {
            return value[0];
          }
        }
      }]
    ];

    new Chartist.Bar('#pers', data, options, responsiveOptions);

    const persLoader = document.getElementById("pers_loader")
    persLoader.style.display = 'none';
  })

