setTimeout(() => {
  test0();
  // test1();
  // test2();
  // test3();
  // test4();
  // test5();
  // test6();
  // test7();
}, 500);

/**
 * 支持不同图层渲染
 */
function test0() {
  const { PowerRender, Shape } = window.prender;
  const canvas = document.querySelector("#canvas0");
  const pr = new PowerRender(canvas);

  const rectangle1 = new Shape.Rectangle({
    start: [0, 0],
    shape: {
      width: 100,
      height: 120
    }
  });
  pr.add(rectangle1, "stroke", 0);

  const rectangle2 = new Shape.Rectangle({
    start: [10, 10],
    shape: {
      width: 50,
      height: 60
    }
  });
  pr.add(rectangle2, "stroke", 1);

  const rectangle3 = new Shape.Rectangle({
    start: [10, 10],
    shape: {
      width: 25,
      height: 30
    }
  });
  pr.add(rectangle3, "fill", 1);
  pr.draw();

  setTimeout(() => {
    pr.clear(1);
  }, 500);

  setTimeout(() => {
    pr.clearAll();
  }, 1000);
}

// /**
//  * 绘制三角形
//  */
// function test1() {
//   const { PowerRender, Shape } = window.prender;
//   const canvas = document.querySelector("#canvas1");

//   const triangle = new Shape.Triangle({
//     points: [[20, 20], [10, 90], [90, 90]]
//   });

//   const pr = new PowerRender(canvas);
//   pr.add(triangle);
//   pr.fill();

//   triangle.updatePoints([[110, 20], [100, 90], [180, 90]]);
//   pr.add(triangle);
//   pr.stroke();
// }

// /**
//  * 绘制矩形
//  */
// function test2() {
//   const { PowerRender, Shape } = window.prender;
//   const canvas = document.querySelector("#canvas2");

//   const rectangle = new Shape.Rectangle({
//     start: [0, 0],
//     shape: {
//       width: 100,
//       height: 120
//     }
//   });

//   const pr = new PowerRender(canvas);
//   pr.add(rectangle);
//   pr.fill();

//   rectangle.updateStart([200, 200]);
//   rectangle.updateShape({
//     width: 50,
//     height: 50
//   });
//   pr.add(rectangle);
//   pr.stroke();
// }

// /**
//  * 绘制圆形
//  */
// function test3() {
//   const { PowerRender, Shape } = window.prender;
//   const canvas = document.querySelector("#canvas3");

//   const circle = new Shape.Circle({
//     start: [10, 10],
//     shape: {
//       r: 5
//     }
//   });

//   const pr = new PowerRender(canvas);
//   pr.add(circle);
//   pr.fill();

//   circle.updateStart([30, 30]);
//   circle.updateShape({
//     r: 10
//   });
//   pr.add(circle);
//   pr.stroke();
// }

// /**
//  * 绘制扇形
//  */
// function test4() {
//   const { PowerRender, Shape } = window.prender;
//   const canvas = document.querySelector("#canvas4");
//   const pr = new PowerRender(canvas);

//   const sector = new Shape.Sector({
//     start: [100, 100],
//     shape: {
//       r: 50,
//       startAngle: 0,
//       endAngle: 120
//     }
//   });

//   pr.add(sector);
//   pr.fill();

//   sector.updateShape({
//     r: 50,
//     startAngle: 180,
//     endAngle: 240
//   });
//   pr.add(sector);
//   pr.stroke();
// }

// /**
//  * 绘制弓形
//  */
// function test5() {
//   const { PowerRender, Shape } = window.prender;
//   const canvas = document.querySelector("#canvas5");
//   const pr = new PowerRender(canvas);

//   const bow = new Shape.Bow({
//     start: [100, 100],
//     shape: {
//       r: 50,
//       startAngle: 0,
//       endAngle: 120
//     }
//   });

//   pr.add(bow);
//   pr.fill();

//   bow.updateShape({
//     r: 50,
//     startAngle: 180,
//     endAngle: 240
//   });
//   pr.add(bow);
//   pr.stroke();
// }

// /**
//  * 绘制多边形
//  */
// function test6() {
//   const { PowerRender, Shape } = window.prender;
//   const canvas = document.querySelector("#canvas6");
//   const pr = new PowerRender(canvas);

//   const polygon = new Shape.Polygon({
//     start: [100, 100],
//     shape: {
//       r: 50,
//       side: 6
//     }
//   });

//   pr.add(polygon);
//   pr.stroke();
// }

// /**
//  * 绘制椭圆
//  */
// function test7() {
//   const { PowerRender, Shape } = window.prender;
//   const canvas = document.querySelector("#canvas7");
//   const pr = new PowerRender(canvas);

//   const ellipse = new Shape.Ellipse({
//     start: [100, 100],
//     shape: {
//       a: 20,
//       b: 15
//     },
//     method: "iterate"
//   });

//   pr.add(ellipse);
//   pr.stroke();

//   ellipse.updateMethod("scale");
//   ellipse.updateShape({
//     a: 10,
//     b: 7.5
//   });
//   pr.add(ellipse);
//   pr.fill();
// }
