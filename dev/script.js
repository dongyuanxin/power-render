setTimeout(() => {
  test1();
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
