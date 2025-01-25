document
  .querySelector(".face-container")
  .addEventListener("mousemove", function (t) {
    let e = this.getBoundingClientRect(),
      i = t.clientX - e.left - e.width / 2,
      n = t.clientY - e.top - e.height / 2,
      a = (n / e.height) * 25,
      l = -((i / e.width) * 25);
    this.style.transform = `rotateX(${a}deg) rotateY(${l}deg)`;
  }),
  document
    .querySelector(".face-container")
    .addEventListener("mouseleave", function () {
      this.style.transform = "";
    });
const textLines = [
    "gm big thinkers",
    "Trump AI has entered the chat.",
    "",
    "They call it chance",
    "I call it calculated victory",
    "",
    "CA : Comingsoon"
  ],
  targetElement = document.getElementById("typewriter");
let lineIndex = 0,
  charIndex = 0,
  typingSign = !0;
function typeText() {
  lineIndex < textLines.length
    ? charIndex < textLines[lineIndex].length
      ? ((targetElement.innerHTML =
          targetElement.innerHTML.replace(/\|$/, "") +
          textLines[lineIndex].charAt(charIndex) +
          (typingSign ? "|" : "")),
        charIndex++,
        setTimeout(typeText, 50))
      : ((targetElement.innerHTML =
          targetElement.innerHTML.replace(/\|$/, "") + "<br>"),
        (charIndex = 0),
        lineIndex++,
        setTimeout(typeText, 500))
    : (targetElement.innerHTML = targetElement.innerHTML.replace(/\|$/, ""));
}
function toggleTypingSign() {
  (lineIndex < textLines.length || charIndex < textLines[lineIndex]?.length) &&
    ((typingSign = !typingSign),
    targetElement.innerHTML.length > 0 &&
      (targetElement.innerHTML =
        targetElement.innerHTML.replace(/\|$/, "") + (typingSign ? "|" : ""))),
    setTimeout(toggleTypingSign, 500);
}
document.addEventListener("DOMContentLoaded", function () {
  typeText(), toggleTypingSign();
});
class Accordion {
  static activeAccordion = null;
  constructor(t) {
    (this.el = t),
      (this.summary = t.querySelector("summary")),
      (this.content = t.querySelector(".accordion-content")),
      (this.expandIcon = this.summary.querySelector(".accordion-icon")),
      (this.animation = null),
      (this.isClosing = !1),
      (this.isExpanding = !1),
      this.summary.addEventListener("click", (t) => this.onClick(t));
  }
  onClick(t) {
    t.preventDefault(),
      (this.el.style.overflow = "hidden"),
      Accordion.activeAccordion &&
        Accordion.activeAccordion !== this &&
        Accordion.activeAccordion.shrink(),
      this.isClosing || !this.el.open
        ? this.open()
        : (this.isExpanding || this.el.open) && this.shrink();
  }
  shrink() {
    this.isClosing = !0;
    let t = `${this.el.offsetHeight}px`,
      e = `${this.summary.offsetHeight}px`;
    this.animation && this.animation.cancel(),
      (this.animation = this.el.animate(
        { height: [t, e] },
        { duration: 400, easing: "ease-out" }
      )),
      (this.animation.onfinish = () => this.onAnimationFinish(!1)),
      (this.animation.oncancel = () => (this.isClosing = !1));
  }
  open() {
    (this.el.style.height = `${this.el.offsetHeight}px`),
      (this.el.open = !0),
      window.requestAnimationFrame(() => this.expand());
  }
  expand() {
    this.isExpanding = !0;
    let t = `${this.el.offsetHeight}px`,
      e = `${this.summary.offsetHeight + this.content.offsetHeight}px`;
    this.animation && this.animation.cancel(),
      (this.animation = this.el.animate(
        { height: [t, e] },
        { duration: 350, easing: "ease-out" }
      )),
      (this.animation.onfinish = () => this.onAnimationFinish(!0)),
      (this.animation.oncancel = () => (this.isExpanding = !1));
  }
  onAnimationFinish(t) {
    (this.el.open = t),
      (this.animation = null),
      (this.isClosing = !1),
      (this.isExpanding = !1),
      (this.el.style.height = this.el.style.overflow = ""),
      t
        ? (Accordion.activeAccordion = this)
        : Accordion.activeAccordion === this &&
          (Accordion.activeAccordion = null);
  }
}
document.querySelectorAll("details").forEach((t) => {
  new Accordion(t);
});
var particles,
  ParticleEngine = (function () {
    "use strict";
    function t(e) {
      if (!(this instanceof t)) return new t(args);
      var i,
        n = this;
      function a(t) {
        var e = range(0.3, 1),
          i = range(t.initX - t.distance, t.initX + t.distance),
          n = range(t.initY - t.distance, t.initY + t.distance),
          s = t.speed;
        TweenMax.to(t, s, {
          scaleX: e,
          scaleY: e,
          x: i,
          y: n,
          onComplete: a,
          onCompleteParams: [t],
          ease: Cubic.easeInOut,
        }),
          TweenMax.to(t, s / 2, {
            alpha: range(0.1, t.alphaMax),
            onComplete: l,
            onCompleteParams: [t, s],
          });
      }
      function l(t, e) {
        (t.speed = range(2, 10)), TweenMax.to(t, e / 2, { alpha: 0 });
      }
      (this.canvas_id = e),
        (this.stage = new createjs.Stage(e)),
        (this.totalWidth =
          this.canvasWidth =
          document.getElementById(e).width =
            document.getElementById(e).offsetWidth),
        (this.totalHeight =
          this.canvasHeight =
          document.getElementById(e).height =
            document.getElementById(e).offsetHeight),
        (this.compositeStyle = "lighter"),
        (this.particleSettings = [
          {
            id: "small",
            num: 300,
            fromX: 0,
            toX: this.totalWidth,
            ballwidth: 3,
            alphamax: 0.4,
            areaHeight: 0.5,
            color: "#F0F0F0",
            fill: !1,
          },
          {
            id: "medium",
            num: 100,
            fromX: 0,
            toX: this.totalWidth,
            ballwidth: 8,
            alphamax: 0.3,
            areaHeight: 1,
            color: "#C0C0C0",
            fill: !0,
          },
          {
            id: "large",
            num: 10,
            fromX: 0,
            toX: this.totalWidth,
            ballwidth: 30,
            alphamax: 0.2,
            areaHeight: 1,
            color: "#A0A0A0",
            fill: !0,
          },
        ]),
        (this.particleArray = []),
        (this.lights = [
          {
            ellipseWidth: 400,
            ellipseHeight: 100,
            alpha: 0.6,
            offsetX: 0,
            offsetY: 0,
            color: "#D0D0D0",
          },
          {
            ellipseWidth: 350,
            ellipseHeight: 250,
            alpha: 0.3,
            offsetX: -50,
            offsetY: 0,
            color: "#B8B8B8",
          },
          {
            ellipseWidth: 100,
            ellipseHeight: 80,
            alpha: 0.2,
            offsetX: 80,
            offsetY: -50,
            color: "#F8F8F8",
          },
        ]),
        (this.stage.compositeOperation = n.compositeStyle),
        (this.applySettings = function (t, e, i, a) {
          (t.speed = range(1, 3)),
            (t.initY = weightedRange(
              0,
              n.totalHeight,
              1,
              [
                (n.totalHeight * (2 - a / 2)) / 4,
                (n.totalHeight * (2 + a / 2)) / 4,
              ],
              0.8
            )),
            (t.initX = weightedRange(
              e,
              i,
              1,
              [e + (i - e) / 4, e + ((i - e) * 3) / 4],
              0.6
            ));
        }),
        (function t() {
          for (var e, i, a, l = 0, s = n.lights.length; l < s; l++)
            (e = new createjs.Shape()).graphics
              .beginFill(n.lights[l].color)
              .drawEllipse(
                0,
                0,
                n.lights[l].ellipseWidth,
                n.lights[l].ellipseHeight
              ),
              (e.regX = n.lights[l].ellipseWidth / 2),
              (e.regY = n.lights[l].ellipseHeight / 2),
              (e.y = e.initY = n.totalHeight / 2 + n.lights[l].offsetY),
              (e.x = e.initX = n.totalWidth / 2 + n.lights[l].offsetX),
              (i = (a = new createjs.BlurFilter(
                n.lights[l].ellipseWidth,
                n.lights[l].ellipseHeight,
                1
              )).getBounds()),
              (e.filters = [a]),
              e.cache(
                i.x - n.lights[l].ellipseWidth / 2,
                i.y - n.lights[l].ellipseHeight / 2,
                2 * i.width,
                2 * i.height
              ),
              (e.alpha = n.lights[l].alpha),
              (e.compositeOperation = "screen"),
              n.stage.addChildAt(e, 0),
              (n.lights[l].elem = e);
          TweenMax.fromTo(
            n.lights[0].elem,
            10,
            {
              scaleX: 1.5,
              x: n.lights[0].elem.initX,
              y: n.lights[0].elem.initY,
            },
            {
              yoyo: !0,
              repeat: -1,
              ease: Power1.easeInOut,
              scaleX: 2,
              scaleY: 0.7,
            }
          ),
            TweenMax.fromTo(
              n.lights[1].elem,
              12,
              { x: n.lights[1].elem.initX, y: n.lights[1].elem.initY },
              {
                delay: 5,
                yoyo: !0,
                repeat: -1,
                ease: Power1.easeInOut,
                scaleY: 2,
                scaleX: 2,
                y: n.totalHeight / 2 - 50,
                x: n.totalWidth / 2 + 100,
              }
            ),
            TweenMax.fromTo(
              n.lights[2].elem,
              8,
              { x: n.lights[2].elem.initX, y: n.lights[2].elem.initY },
              {
                delay: 2,
                yoyo: !0,
                repeat: -1,
                ease: Power1.easeInOut,
                scaleY: 1.5,
                scaleX: 1.5,
                y: n.totalHeight / 2,
                x: n.totalWidth / 2 - 200,
              }
            );
        })(),
        (function t() {
          for (var e = 0, l = n.particleSettings.length; e < l; e++)
            for (var s, o = n.particleSettings[e], h = 0; h < o.num; h++) {
              if (((s = new createjs.Shape()), o.fill)) {
                s.graphics.beginFill(o.color).drawCircle(0, 0, o.ballwidth),
                  (i = new createjs.BlurFilter(
                    o.ballwidth / 2,
                    o.ballwidth / 2,
                    1
                  )),
                  (s.filters = [i]);
                var r = i.getBounds();
                s.cache(-50 + r.x, -50 + r.y, 100 + r.width, 100 + r.height);
              } else
                s.graphics
                  .beginStroke(o.color)
                  .setStrokeStyle(1)
                  .drawCircle(0, 0, o.ballwidth);
              (s.alpha = range(0, 0.1)),
                (s.alphaMax = o.alphamax),
                (s.distance = 2 * o.ballwidth),
                (s.ballwidth = o.ballwidth),
                (s.flag = o.id),
                n.applySettings(s, o.fromX, o.toX, o.areaHeight),
                (s.speed = range(2, 10)),
                (s.y = s.initY),
                (s.x = s.initX),
                (s.scaleX = s.scaleY = range(0.3, 1)),
                n.stage.addChild(s),
                a(s),
                n.particleArray.push(s);
            }
        })();
    }
    return (
      (t.prototype.render = function () {
        this.stage.update();
      }),
      (t.prototype.resize = function () {
        (this.totalWidth =
          this.canvasWidth =
          document.getElementById(this.canvas_id).width =
            document.getElementById(this.canvas_id).offsetWidth),
          (this.totalHeight =
            this.canvasHeight =
            document.getElementById(this.canvas_id).height =
              document.getElementById(this.canvas_id).offsetHeight),
          this.render();
        for (var t = 0, e = this.particleArray.length; t < e; t++)
          this.applySettings(
            this.particleArray[t],
            0,
            this.totalWidth,
            this.particleArray[t].areaHeight
          );
        for (var i = 0, n = this.lights.length; i < n; i++)
          (this.lights[i].elem.initY =
            this.totalHeight / 2 + this.lights[i].offsetY),
            (this.lights[i].elem.initX =
              this.totalWidth / 2 + this.lights[i].offsetX),
            TweenMax.to(this.lights[i].elem, 0.5, {
              x: this.lights[i].elem.initX,
              y: this.lights[i].elem.initY,
            });
      }),
      t
    );
  })();
function range(t, e) {
  return t + (e - t) * Math.random();
}
function round(t, e) {
  var i = Math.pow(10, e);
  return Math.round(i * t) / i;
}
function weightedRange(t, e, i, n, a) {
  var l;
  return (null == e && (e = 0),
  null == i && (i = 0),
  null == n && (n = 0),
  null == a && (a = 0),
  t == e)
    ? t
    : (l =
        n && Math.random() <= a
          ? round(Math.random() * (n[1] - n[0]) + n[0], i)
          : round(Math.random() * (t - e) + e, i));
}
document.addEventListener("DOMContentLoaded", () => {
  let t = document.querySelector(".table-container"),
    e = t.querySelectorAll("tbody tr");
  t.addEventListener("scroll", () => {
    e.forEach((e) => {
      let i = e.getBoundingClientRect().top,
        n = t.getBoundingClientRect().top;
      i - n < 40
        ? (e.style.visibility = "hidden")
        : (e.style.visibility = "visible");
    });
  });
}),
  document.addEventListener("DOMContentLoaded", async () => {
    let t =
      "localhost" === window.location.hostname ||
      "127.0.0.1" === window.location.hostname
        ? "http://localhost:5000/api/portfolio"
        : "https://server.trisigma.ai/api/portfolio";
    try {
      let e = await fetch(t);
      if (!e.ok) throw Error(`Error fetching data: ${e.statusText}`);
      let i = await e.json();
      i.forEach((t) => {
        let e = document.createElement("tr");
        e.innerHTML = `
		  <td>${t.date}</td>
		  <td>${t.token}</td>
		  <td>${t.ca}</td>
		  <td>${t.mc}</td>
		  <td>${t.ath}</td>
		  <td>${t.performance.toFixed(2)}</td> <!-- Rounded to 2 decimal places -->
		  <td>${t.value}</td>
		`;
        let i = document.getElementsByTagName("tbody")[0] ?? !1;
        i && i.appendChild(e);
      });
    } catch (n) {
      console.error("Failed to load data:", n);
    }
  }),
  (particles = new ParticleEngine("projector")),
  createjs.Ticker.addEventListener("tick", function t() {
    particles.render();
  }),
  window.addEventListener(
    "resize",
    function t() {
      particles.resize();
    },
    !1
  );
