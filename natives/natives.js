const splash = document.querySelector(".splash");
document.addEventListener("DOMContentLoaded", (e) => {
  setTimeout(() => {
    splash.classList.add("display-none");
  }, 3000);
});

$(document).ready(function () {
  $("#link1").hover(function () {
    if ($("#natives1").hasClass("invisible")) {
      $("#natives1").toggleClass("dark");
    }
    if ($("#natives1").hasClass("dark")) {
      $("#link1, #natives1").mouseover(function () {
        $("#natives1").css("opacity", "1");
      });
      $("#link1, #natives1").mouseout(function () {
        $("#natives1").css("opacity", "0.3");
      });
    }
  });

  $("#natives1").hover(function () {
    if ($("natives1").css("opacity", "0.3")) {
      $("#link1").toggleClass("red");
    }
  });

  $("#link2").hover(function () {
    if ($("#natives2").hasClass("invisible")) {
      $("#natives2").toggleClass("dark");
    }
    if ($("#natives2").hasClass("dark")) {
      $("#link2, #natives2").mouseover(function () {
        $("#natives2").css("opacity", "1");
      });
      $("#link2, #natives2").mouseout(function () {
        $("#natives2").css("opacity", "0.3");
      });
    }
  });

  $("#natives2").hover(function () {
    if ($("natives2").css("opacity", "0.3")) {
      $("#link2").toggleClass("red");
    }
  });

  $("#link3").hover(function () {
    if ($("#natives3").hasClass("invisible")) {
      $("#natives3").toggleClass("dark");
    }
    if ($("#natives3").hasClass("dark")) {
      $("#link3, #natives3").mouseover(function () {
        $("#natives3").css("opacity", "1");
      });
      $("#link3, #natives3").mouseout(function () {
        $("#natives3").css("opacity", "0.3");
      });
    }
  });

  $("#natives3").hover(function () {
    if ($("natives3").css("opacity", "0.3")) {
      $("#link3").toggleClass("red");
    }
  });

  $("#link4").hover(function () {
    if ($("#natives4").hasClass("invisible")) {
      $("#natives4").toggleClass("dark");
    }
    if ($("#natives4").hasClass("dark")) {
      $("#link4, #natives4").mouseover(function () {
        $("#natives4").css("opacity", "1");
      });
      $("#link4, #natives4").mouseout(function () {
        $("#natives4").css("opacity", "0.3");
      });
    }
  });

  $("#natives4").hover(function () {
    if ($("natives4").css("opacity", "0.3")) {
      $("#link4").toggleClass("red");
    }
  });

  $("#link5").hover(function () {
    if ($("#natives5").hasClass("invisible")) {
      $("#natives5").toggleClass("dark");
    }
    if ($("#natives5").hasClass("dark")) {
      $("#link5, #natives5").mouseover(function () {
        $("#natives5").css("opacity", "1");
      });
      $("#link5, #natives5").mouseout(function () {
        $("#natives5").css("opacity", "0.3");
      });
    }
  });

  $("#natives5").hover(function () {
    if ($("natives5").css("opacity", "0.3")) {
      $("#link5").toggleClass("red");
    }
  });

  $("#link6").hover(function () {
    if ($("#natives6").hasClass("invisible")) {
      $("#natives6").toggleClass("dark");
    }
    if ($("#natives6").hasClass("dark")) {
      $("#link6, #natives6").mouseover(function () {
        $("#natives6").css("opacity", "1");
      });
      $("#link6, #natives6").mouseout(function () {
        $("#natives6").css("opacity", "0.3");
      });
    }
  });

  $("#natives6").hover(function () {
    if ($("natives6").css("opacity", "0.3")) {
      $("#link6").toggleClass("red");
    }
  });

  $("#link7").hover(function () {
    if ($("#natives7").hasClass("invisible")) {
      $("#natives7").toggleClass("dark");
    }
    if ($("#natives7").hasClass("dark")) {
      $("#link7, #natives7").mouseover(function () {
        $("#natives7").css("opacity", "1");
      });
      $("#link7, #natives7").mouseout(function () {
        $("#natives7").css("opacity", "0.3");
      });
    }
  });

  $("#natives7").hover(function () {
    if ($("natives7").css("opacity", "0.3")) {
      $("#link7").toggleClass("red");
    }
  });



});

//MODAL FAQ

var faqmodal = document.getElementById("faq");

var faqbtn = document.getElementById("faqbutton");

faqbtn.onclick = function () {
  faqmodal.style.display = "block";
};

var faqspan = document.getElementsByClassName("faqclose")[0];

faqspan.onclick = function () {
  faqmodal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == faqmodal) {
    faqmodal.style.display = "none";
  }
};

//WAORANI

var waoranimodal = document.getElementById("modalwaorani");

var waoranibtn1 = document.getElementById("link1");
var waoranibtn2 = document.getElementById("natives1");

var waoranispan = document.getElementsByClassName("waoraniclose")[0];

waoranibtn1.onclick = function () {
  waoranimodal.style.display = "block";
};
waoranibtn2.onclick = function () {
  waoranimodal.style.display = "block";
};

waoranispan.onclick = function () {
  waoranimodal.style.display = "none";
};

//MAPUCHE

var mapuchemodal = document.getElementById("modalmapuche");

var mapuchebtn1 = document.getElementById("link2");
var mapuchebtn2 = document.getElementById("natives2");

var mapuchespan = document.getElementsByClassName("mapucheclose")[0];

mapuchebtn1.onclick = function () {
  mapuchemodal.style.display = "block";
};
mapuchebtn2.onclick = function () {
  mapuchemodal.style.display = "block";
};

mapuchespan.onclick = function () {
  mapuchemodal.style.display = "none";
};

//PIJAO

var pijaomodal = document.getElementById("modalpijao");

var pijaobtn1 = document.getElementById("link3");
var pijaobtn2 = document.getElementById("natives3");

var pijaospan = document.getElementsByClassName("pijaoclose")[0];

pijaobtn1.onclick = function () {
  pijaomodal.style.display = "block";
};
pijaobtn2.onclick = function () {
  pijaomodal.style.display = "block";
};

pijaospan.onclick = function () {
  pijaomodal.style.display = "none";
};

//SAMI


var samimodal = document.getElementById("modalsami");

var samibtn1 = document.getElementById("link4");
var samibtn2 = document.getElementById("natives4");

var samispan = document.getElementsByClassName("samiclose")[0];

samibtn1.onclick = function () {
  samimodal.style.display = "block";
};
samibtn2.onclick = function () {
  samimodal.style.display = "block";
};

samispan.onclick = function () {
  samimodal.style.display = "none";
};

//WICHI

var wichimodal = document.getElementById("modalwichi");

var wichibtn1 = document.getElementById("link5");
var wichibtn2 = document.getElementById("natives5");

var wichispan = document.getElementsByClassName("wichiclose")[0];

wichibtn1.onclick = function () {
  wichimodal.style.display = "block";
};
wichibtn2.onclick = function () {
  wichimodal.style.display = "block";
};

wichispan.onclick = function () {
  wichimodal.style.display = "none";
};

//HIMBA

var himbamodal = document.getElementById("modalhimba");

var himbabtn1 = document.getElementById("link6");
var himbabtn2 = document.getElementById("natives6");

var himbaspan = document.getElementsByClassName("himbaclose")[0];

himbabtn1.onclick = function () {
  himbamodal.style.display = "block";
};
himbabtn2.onclick = function () {
  himbamodal.style.display = "block";
};

himbaspan.onclick = function () {
  himbamodal.style.display = "none";
};

//CHUKCHI


var chukchimodal = document.getElementById("modalchukchi");

var chukchibtn1 = document.getElementById("link7");
var chukchibtn2 = document.getElementById("natives7");

var chukchispan = document.getElementsByClassName("chukchiclose")[0];

chukchibtn1.onclick = function () {
  chukchimodal.style.display = "block";
};
chukchibtn2.onclick = function () {
  chukchimodal.style.display = "block";
};

chukchispan.onclick = function () {
  chukchimodal.style.display = "none";
};
