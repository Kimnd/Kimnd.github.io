/* Taken from
https://medium.com/wdstack/fixing-html5-2d-canvas-blur-8ebe27db07da
*/
console.log("In canvas!");

let something = 1;

function init(something) {
  console.log("inited!");
  canvas = document.getElementById('gameCanvas');
  ctx = canvas.getContext('2d');
}
/*
let canvas = canvas_obj(document.getElementById("gameCanvas"));
let { ctx, dpi, set, get } = canvas;

function canvas_obj(ele) {
  let returnable = {
    canvas: ele,
    ctx: ele.getContext("2d"),
    dpi: window.devicePixelRatio
  };
  returnable.get = {
    style: {
      height() {
        return +getComputedStyle(ele).getPropertyValue("height").slice(0, -2);
      },
      width() {
        return +getComputedStyle(ele).getPropertyValue("width").slice(0, -2);
      }
    },
    attr: {
      height() {
        return returnable.ele.getAttribute("height");
      },
      width() {
        return returnable.ele.getAttribute("height");
      }
    }
  };
  returnable.set = {
    style: {
      height(ht) {
        ele.style.height = ht + "px";
      },
      width(wth) {
        ele.style.width = wth + "px";
      }
    },
    attr: {
      height(ht) {
        ele.setAttribute("height", ht);
      },
      width(wth) {
        ele.setAttribute("width", wth);
      }
    }
  };
  return returnable;
}
*/
//requestAnimationFrame(animate);
//console.log("animation requested");

function dpi_adjust() {
  console.log("In dpi_adjust!");
  set.attr.height(get.style.height() * dpi);
  set.attr.width(get.style.width() * dpi);
}
/*
function animate() {
//  dpi_adjust();
  ctx.beginPath();
  ctx.fillRect(25, 50, 25, 25);
  ctx.beginPath();
  ctx.arc(500, 50, 300, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.font = "30px Arial";
  ctx.fillText("Hello World", 10, 50);
  requestAnimationFrame(animate);
}
*/