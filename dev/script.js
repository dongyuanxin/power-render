setTimeout(() => {
  test1();
  test2();
  test3();
  test4();
  test5();
  test6();
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

/**
 * 绘制圆形
 */
function test3() {
  const { PowerRender, Shape } = window.prender;
  const canvas = document.querySelector("#canvas3");

  const circle = new Shape.Circle({
    start: [10, 10],
    shape: {
      r: 5
    }
  });

  const pr = new PowerRender(canvas);
  pr.add(circle);
  pr.fill();

  circle.updateStart([30, 30]);
  circle.updateShape({
    r: 10
  });
  pr.add(circle);
  pr.stroke();
}

/**
 * 绘制扇形
 */
function test4() {
  const { PowerRender, Shape } = window.prender;
  const canvas = document.querySelector("#canvas4");
  const pr = new PowerRender(canvas);

  const sector = new Shape.Sector({
    start: [100, 100],
    shape: {
      r: 50,
      startAngle: 0,
      endAngle: 120
    }
  });

  pr.add(sector);
  pr.fill();

  sector.updateShape({
    r: 50,
    startAngle: 180,
    endAngle: 240
  });
  pr.add(sector);
  pr.stroke();
}

/**
 * 绘制弓形
 */
function test5() {
  const { PowerRender, Shape } = window.prender;
  const canvas = document.querySelector("#canvas5");
  const pr = new PowerRender(canvas);

  const bow = new Shape.Bow({
    start: [100, 100],
    shape: {
      r: 50,
      startAngle: 0,
      endAngle: 120
    }
  });

  pr.add(bow);
  pr.fill();

  bow.updateShape({
    r: 50,
    startAngle: 180,
    endAngle: 240
  });
  pr.add(bow);
  pr.stroke();
}

function test6() {
  const { PowerRender, Shape } = window.prender;
  const canvas = document.querySelector("#canvas6");
  const pr = new PowerRender(canvas);

  const polygon = new Shape.Polygon({
    start: [100, 100],
    shape: {
      r: 50,
      side: 6
    }
  });

  pr.add(polygon);
  pr.stroke();
}
