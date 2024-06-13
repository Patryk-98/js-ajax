function LoadContent(page) {
  var filePath = `${page}.html`;

  var ajax = new XMLHttpRequest();

  ajax.open("GET", filePath, true);

  ajax.onload = function () {
    if (ajax.status == 200) {
      const container = document.getElementById("main-content");
      if (container) {
        container.innerHTML = ajax.responseText;
      }
    } else {
      console.error("Error loading the page: ", ajax.status);
    }
  };

  ajax.onerror = function () {
    console.error("Request failed");
  };

  ajax.send();
}

// load contnent fuction loads the content from the contact, home and about page

// var filePath = `${page}.html`; creates the file path

// ajax.open("GET", filePath, true); creates a fetch request

// (ajax.status == 200) request was successfful

//    console.error("Error loading the page: ", ajax.status);
//   }
// };

// ajax.onerror = function () {
//   console.error("Request failed");
// }; error handling fuctions in case of an error a console log is pprinted

// ajax.send initiates the request to fectch the specified conbtent to then be dispayed on the wwebpage in the main contnent div
