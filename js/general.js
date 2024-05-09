!(function e(t, n, i) {
  function o(a, l) {
    if (!n[a]) {
      if (!t[a]) {
        var c = "function" == typeof require && require;
        if (!l && c) return c(a, !0);
        if (r) return r(a, !0);
        throw new Error("Cannot find module '" + a + "'");
      }
      var s = (n[a] = { exports: {} });
      t[a][0].call(
        s.exports,
        function (e) {
          var n = t[a][1][e];
          return o(n || e);
        },
        s,
        s.exports,
        e,
        t,
        n,
        i
      );
    }
    return n[a].exports;
  }
  for (
    var r = "function" == typeof require && require, a = 0;
    a < i.length;
    a++
  )
    o(i[a]);
  return o;
})(
  {
    1: [
      function (e, t, n) {
        jQuery(document).ready(function (e) {
          let t = [];
          var n,
            i = [
              "/wp-content/themes/in4out-theme/img/favicon/1.gif",
              "/wp-content/themes/in4out-theme/img/favicon/2.gif",
              "/wp-content/themes/in4out-theme/img/favicon/3.gif",
              "/wp-content/themes/in4out-theme/img/favicon/4.gif",
            ],
            o = "/wp-content/themes/in4out-theme/img/favicon/normal.gif",
            r = 0;
          let a = 300,
            l = 4e3,
            c = arrClaims.length,
            s = 1,
            u = 0,
            d = 0;
          var m,
            h,
            f,
            p,
            w,
            g,
            v,
            y = "";
          function x() {
            e(".prefooter").detach().appendTo("#header"),
              e(".prefooter--inner").css("display", "block");
          }
          function _() {
            window.innerWidth > 960 && (t = arrClaims),
              window.innerWidth <= 960 && (t = arrClaimsTablet),
              window.innerWidth <= 480 && (t = arrClaimsMobile);
          }
          function b() {
            clearTimeout(f),
              clearTimeout(p),
              clearTimeout(w),
              clearTimeout(g),
              clearTimeout(v),
              (f = null),
              (p = null),
              (w = null),
              (g = null),
              (v = null),
              (u = 0),
              (d = 0),
              (s = 1),
              e(".wrapper__animation--container").html("");
          }
          function C() {
            document[m]
              ? (b(),
                (n = setInterval(function () {
                  e("link[rel='icon']").remove(),
                    e("link[rel='shortcut icon']").remove(),
                    e("head").append(
                      '<link rel="icon" href="' + i[r] + '" type="image/gif">'
                    ),
                    r == i.length - 1 ? (r = 0) : r++;
                }, 200)),
                (y = document.title),
                e("head").append(
                  '<link rel="icon" href="/wp-content/themes/in4out-theme/img/favicon/4.gif" type="image/x-icon">'
                ),
                (document.title = "Hallo ... ? ðŸ˜¥"))
              : (e(".wrapper__animation").length > 0 && q(0),
                clearInterval(n),
                e("head").append(
                  '<link rel="icon" href="' + o + '" type="image/x-icon">'
                ),
                (document.title = y));
          }
          function q(n) {
            f = setTimeout(function () {
              !(function (n) {
                try {
                  !(function (n) {
                    let i = t[n],
                      o = i[i.length - 1],
                      r = "";
                    for (
                      e(".wrapper__animation--container").html(""),
                        countRow = 1;
                      countRow <= o;
                      countRow++
                    ) {
                      var a =
                        '<div class="titlecontainer ' +
                        (r = "animation_" + countRow) +
                        '">\n                            <div class="title">\n                                <h1><span class="textleft_' +
                        r +
                        '"></span><span class="bg textmiddle_' +
                        r +
                        '"></span><span class="textright_' +
                        r +
                        '"></span></h1> \n                            </div>\n                            <div class="shadow">\n                                <span class="textleft_' +
                        r +
                        '"></span><span class="bg textmiddle_' +
                        r +
                        '"></span><span class="textright_' +
                        r +
                        '"></span>  \n                            </div>           \n                        </div>';
                      e(".wrapper__animation--container").append(a),
                        document
                          .getElementsByClassName("textleft_" + r)[0]
                          .setAttribute("style", "padding-right:24px"),
                        document
                          .getElementsByClassName("textright_" + r)[0]
                          .setAttribute("style", "padding-left:24px"),
                        document
                          .getElementsByClassName("textleft_" + r)[1]
                          .setAttribute("style", "padding-right:24px"),
                        document
                          .getElementsByClassName("textright_" + r)[1]
                          .setAttribute("style", "padding-left:24px"),
                        document
                          .getElementsByClassName(r)[0]
                          .setAttribute("style", "margin-bottom:15px");
                    }
                  })(n);
                  let i = t[n],
                    o = i[i.length - 1];
                  for (row = 1; row <= o; row++)
                    !(function (e) {
                      p = setTimeout(function () {
                        A(e, i);
                      }, a * e);
                    })(row);
                } catch (e) {
                  console.log("Restart generateAnimation"), b();
                }
              })(u);
              let n = t[u],
                i = n[n.length - 1];
              u + 1 == c ? (u = 0) : u++,
                (timerIntervalInner = i * a * 2 + l),
                q(timerIntervalInner);
            }, n);
          }
          function A(e, t) {
            try {
              let n = t[t.length - 1],
                i = "animation_" + e,
                o = document.querySelectorAll(".textleft_" + i),
                r = document.querySelectorAll(".textmiddle_" + i),
                c = document.querySelectorAll(".textright_" + i),
                u = 1;
              for (
                s = u = 1 == e ? 1 : s + 3, countCurrentClaimWords = 1;
                countCurrentClaimWords < t.length - 1;
                countCurrentClaimWords++
              )
                (o[0].textContent = t[u]),
                  (o[1].textContent = t[u]),
                  (r[0].textContent = t[u + 1]),
                  (r[1].textContent = t[u + 1]),
                  (c[0].textContent = t[u + 2]),
                  (c[1].textContent = t[u + 2]);
              document
                .querySelector("." + i + "  .shadow")
                .classList.add("shadow_in"),
                document
                  .querySelector("." + i + " .title")
                  .classList.add("title_in"),
                n == e &&
                  (w = setTimeout(function () {
                    !(function (e) {
                      try {
                        for (let t = e; t >= 1; t--)
                          g = setTimeout(function () {
                            let t = "animation_" + e;
                            try {
                              document
                                .querySelector("." + t + " .title")
                                .classList.add("title_out");
                            } catch (e) {
                              console.log("Restart titleOutTimeout"), b();
                            }
                            let n = t;
                            !(function (e) {
                              v = setTimeout(function () {
                                try {
                                  document
                                    .querySelector("." + e + "  .shadow")
                                    .classList.add("shadow_out");
                                } catch (e) {
                                  console.log("Restart shadowOutTimeout"), b();
                                }
                              }, a);
                            })(n),
                              (e -= 1);
                          }, t * a);
                      } catch (e) {
                        console.log("Restart removeAnimation"), b();
                      }
                    })(n);
                  }, l - 1200));
            } catch (e) {
              console.log("Restart animateRow"), b();
            }
          }
          e(".mobileMenue").click(function () {
            e("#container").addClass("mobileMenuVisible"),
              e("body").css("overflow", "hidden");
          }),
            e(".close").click(function () {
              e("#container").removeClass("mobileMenuVisible"),
                e("body").css("overflow-y", "auto");
            }),
            e(window).resize(function () {
              window.innerWidth < 960 && x(),
                e(".wrapper__animation").length > 0 &&
                  (b(),
                  clearTimeout(window.resizedFinished),
                  (window.resizedFinished = setTimeout(function () {
                    _(), q(250);
                  }, 250)));
            }),
            (window.onload = function () {
              let t = 0.01 * window.innerHeight;
              document.documentElement.style.setProperty("--vh", `${t}px`),
                e(".footer").css("opacity", "1"),
                window.innerWidth < 668 && x(),
                e(".marqueetiles").length > 0 &&
                  (function () {
                    var t = null;
                    const n = document.querySelector(".marqueetiles__inner");
                    document.querySelector(".marqueetiles__inner--itemimage");
                    e(".marqueetiles").addClass("marqueetiles--active");
                    var i = 0,
                      o = 10,
                      r = 0;
                    (i = Math.ceil(i)),
                      (o = Math.floor(o)),
                      (r = Math.floor(Math.random() * (o - i + 1)) + i),
                      "ontouchstart" in document.documentElement
                        ? (t = new Flickity(n, {
                            prevNextButtons: !0,
                            pageDots: !1,
                            wrapAround: !0,
                            freeScroll: !1,
                            contain: !0,
                            initialIndex: r,
                          }))
                        : (((t = new Flickity(n, {
                            prevNextButtons: !1,
                            pageDots: !1,
                            wrapAround: !0,
                            freeScroll: !0,
                            contain: !0,
                          })).x = 1e3 * r),
                          (function e() {
                            t.x--;
                            t.integratePhysics();
                            t.settle(t.x);
                            window.requestAnimationFrame(e.bind(this));
                          })());
                  })(),
                e(".marqueetext").length > 0 &&
                  (function () {
                    var t = null;
                    const n = document.querySelector(".marqueetext__inner");
                    e(".marqueetext").addClass("marqueetext--active");
                    var i = 0,
                      o = 10,
                      r = 0;
                    (i = Math.ceil(i)),
                      (o = Math.floor(o)),
                      (r = Math.floor(Math.random() * (o - i + 1)) + i),
                      "ontouchstart" in document.documentElement
                        ? (t = new Flickity(n, {
                            prevNextButtons: !0,
                            pageDots: !1,
                            wrapAround: !0,
                            freeScroll: !1,
                            contain: !0,
                            initialIndex: r,
                          }))
                        : (((t = new Flickity(n, {
                            prevNextButtons: !1,
                            pageDots: !1,
                            wrapAround: !0,
                            freeScroll: !0,
                            contain: !0,
                          })).x = 1e3 * r),
                          (function e() {
                            t.x--;
                            t.integratePhysics();
                            t.settle(t.x);
                            window.requestAnimationFrame(e.bind(this));
                          })());
                  })(),
                (function () {
                  e(".wrapper__animation").length > 0 && _();
                  void 0 !== document.hidden
                    ? ((m = "hidden"), (h = "visibilitychange"))
                    : void 0 !== document.msHidden
                    ? ((m = "msHidden"), (h = "msvisibilitychange"))
                    : void 0 !== document.webkitHidden &&
                      ((m = "webkitHidden"), (h = "webkitvisibilitychange"));
                  void 0 === document.addEventListener || void 0 === m
                    ? e(".wrapper__animation").length > 0 && b()
                    : document.addEventListener(h, C, !1);
                  e(".wrapper__animation").length > 0 && q(0);
                })();
            });
        });
      },
      {},
    ],
  },
  {},
  [1]
);
