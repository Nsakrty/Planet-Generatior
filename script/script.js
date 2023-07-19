/*
setDisp = (willDispVar) => {
  var checked = document.getElementById(willDispVar).checked;
  document.getElementById(willDispVar.slice(0, -4)).style.opacity = checked ? 1 : 0;
};
setVar = (varName) => {
  if (/Disp/.test(varName)) {
    setDisp(varName);
  } else {
    var value = document.getElementById(varName).value;
    document.getElementById("star").style.setProperty(`--${varName}`, value);
  }
};
function generate() {
  ["color", "size", "atmosphereSize", "cloudDisp", "cloudRotate", "detailDisp", "detailRotate", "shadowRotate"].forEach(setVar);
}

function loading() {
  document.body.style.display = "block";
  let params = decodeURIComponent(document.location.search).split("?")[1].split("&");
  for (let param of params) {
    if (param) {
      x = param.split("=")[0];
      value = param.split("=")[1];
      document.getElementById("star").style.setProperty(`--${x}`, value);
      document.getElementById(x).value = value;
      document.getElementById(x).checked = value;
    }
  }
  generate()
}
function randomStar() {
  document.getElementById("color").value = `#${Math.random().toString(16).slice(2, 8)}`;
  document.getElementById("size").value = `${Math.round(Math.random() * 400) / 10}`;
  document.getElementById("atmosphereSize").value = `${Math.round(Math.random() * 100) / 10}`;
  document.getElementById("cloudDisp").checked = Math.round(Math.random() * 10000) % 3 != 0 ? true : false;
  document.getElementById("cloudRotate").value = Math.round(Math.random() * 10000) % 3 != 0 ? `${Math.round(Math.random() * 1800) / 10 - 90}` : "";
  document.getElementById("detailDisp").checked = Math.round(Math.random() * 10000) % 3 != 0 ? true : false;
  document.getElementById("detailRotate").value = Math.round(Math.random() * 10000) % 3 != 0 ? `${Math.round(Math.random() * 1800) / 10 - 90}` : "";
  document.getElementById("shadowRotate").value = `${Math.round(Math.random() * 1800) / 10 - 90}`;
  generate();
}

*/


const starVars = {
  color: "",
  size: "",
  atmosphereSize: "",
  cloudDisp: false,
  cloudRotate: "",
  detailDisp: false,
  detailRotate: "",
  shadowRotate: "",
};

function setDisp(willDispVar) {
  const checked = document.getElementById(willDispVar).checked;
  document.getElementById(willDispVar.slice(0, -4)).style.opacity = checked ? 1 : 0;
}

function setVar(varName) {
  if (/Disp/.test(varName)) {
    setDisp(varName);
  } else {
    const value = document.getElementById(varName).value;
    document.getElementById("star").style.setProperty(`--${varName}`, value);
  }
}

function generate() {
  Object.keys(starVars).forEach(setVar);
}

function loading() {
  document.body.style.display = "block";
  const params = decodeURIComponent(document.location.search).split("?")[1].split("&");
  for (let param of params) {
    if (param) {
      const [x, value] = param.split("=");
      document.getElementById("star").style.setProperty(`--${x}`, value);
      document.getElementById(x).value = value;
      document.getElementById(x).checked = value;
    }
  }
  generate();
}

function randomStar() {
  starVars.color = `#${Math.random().toString(16).slice(2, 8)}`;
  starVars.size = `${Math.round(Math.random() * 400) / 10}`;
  starVars.atmosphereSize = `${Math.round(Math.random() * 100) / 10}`;
  starVars.cloudDisp = Math.round(Math.random() * 10000) % 3 != 0;
  starVars.cloudRotate = Math.round(Math.random() * 10000) % 3 != 0 ? `${Math.round(Math.random() * 1800) / 10 - 90}` : "";
  starVars.detailDisp = Math.round(Math.random() * 10000) % 3 != 0;
  starVars.detailRotate = Math.round(Math.random() * 10000) % 3 != 0 ? `${Math.round(Math.random() * 1800) / 10 - 90}` : "";
  starVars.shadowRotate = `${Math.round(Math.random() * 1800) / 10 - 90}`;

  Object.keys(starVars).forEach((key) => {
    const el = document.getElementById(key);
    if (el.type === "checkbox") {
      el.checked = starVars[key];
    } else {
      el.value = starVars[key];
    }
  });
  generate();
}
