setTimeout(() => {
  test1();
  test2();
}, 500);

/**
 * 绘制三角形
 */
function test1() {
  const { PowerRender, Shape } = window.prender;
  const canvas = document.querySelector("#canvas1");

  const triangle = new Shape.Triangle({
    points: [[20, 20], [10, 90], [90, 90]]
  });

  const pr = new PowerRender(canvas);
  pr.add(triangle);
  pr.fill();

  triangle.updatePoints([[110, 20], [100, 90], [180, 90]]);
  pr.add(triangle);
  pr.stroke();
}

/**
 * 绘制矩形
 */
function test2() {
  const { PowerRender, Shape } = window.prender;
  const canvas = document.querySelector("#canvas2");

  const rectangle = new Shape.Rectangle({
    start: [0, 0],
    shape: {
      width: 100,
      height: 120
    }
  });

  const pr = new PowerRender(canvas);
  pr.add(rectangle);
  pr.fill();

  rectangle.updateStart([200, 200]);
  rectangle.updateShape({
    width: 50,
    height: 50
  });
  pr.add(rectangle);
  pr.stroke();
}
