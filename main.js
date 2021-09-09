const rangeTopLeft = document.getElementById('tlr'),
      rangeTopRight = document.getElementById('trr'),
      rangeBottomLeft = document.getElementById('blr'),
      rangeBottomRight = document.getElementById('brr');

const resultTopLeft = document.getElementById('result-tlr'),
      resultTopRight = document.getElementById('result-trr'),
      resultBottomLeft = document.getElementById('result-blr'),
      resultBottomRight = document.getElementById('result-brr');

const allInputs = document.querySelectorAll('.input');
const cube = document.getElementById('cube');
const totalResult = document.getElementById('totalResult');
const btn = document.getElementById('btn');

function changeRadius () {
    resultTopLeft.innerHTML = rangeTopLeft.value;
    resultTopRight.innerHTML = rangeTopRight.value;
    resultBottomLeft.innerHTML = rangeBottomLeft.value;
    resultBottomRight.innerHTML = rangeBottomRight.value;

    cube.style.borderRadius = rangeTopLeft.value + 'px ' + rangeTopRight.value + 'px ' +
                              rangeBottomRight.value + 'px ' + rangeBottomLeft.value + 'px ';

    btn.addEventListener('click', function () {
        totalResult.innerHTML =  cube.style.borderRadius;
    });
}

for (input of allInputs) {
    input.addEventListener('input', changeRadius);
}

