function range(n) {
  return Array.from({ length: n }, (_, i) => i);
}

function asDom(html) {
  const template = document.createElement("template");
  template.innerHTML = html;
  return template.content.firstChild;
}

function createSlider() {
  const slider = asDom(
    `<input type="range" min="1" max="100" value="1" class="slider" id="myRange">`
  );
  return slider;
}

function injectCss(size) {
  const target = document.querySelector("#style");
  if (!target) throw `Could not find #style element`;
  const widths = range(size).map((i) => `.w${i} { width: ${i}rem; }`);
  const heights = range(size).map((i) => `.h${i} { height: ${i}rem; }`);
  const borderWidths = range(size).map(
    (i) => `.bw${i} { border-width: ${i}rem; }`
  );
  const baseColors = range(size).map(
    (i) => `lch(100 var(--seed) ${(i * 360) / size})`
  );
  const contrastColors = range(size).map(
    (i) => `lch(var(--seed) 80 ${180 + (i * 360) / size})`
  );
  const complementColors = range(size).map(
    (i) => `lch(10 var(--seed) ${120 + (i * 360) / size})`
  );
  const borderColors = contrastColors.map(
    (c, i) => `.bc${i} { border-color: ${c}; }`
  );
  const textColors = baseColors.map((c, i) => `.tc${i} { color: ${c}; }`);
  const textSizes = range(size).map((i) => `.ts${i} { font-size: ${i}rem; }`);
  const bgColors = complementColors.map(
    (c, i) => `.bgc${i} { background-color: ${c}; }`
  );
  const opacity = range(size).map((i) => `.o${i} { opacity: 0.${i}; }`);
  const borderStyles =
    "solid, dashed, dotted, double, groove, ridge, inset, outset, none, hidden"
      .split(", ")
      .map((s) => `.${s} { border-style: ${s}; }`);
  const displayStyles = "block, inline, inline-block, flex, grid, none"
    .split(", ")
    .map((s) => `.${s} { display: ${s}; }`);
  const padding = range(size).map((i) => `.p${i} { padding: ${i}rem; }`);
  const margin = range(size).map((i) => `.m${i} { margin: ${i}rem; }`);
  const paddingRight = range(size).map(
    (i) => `.pr${i} { padding-right: ${i}rem; }`
  );

  const cssOther = [
    `.flex-wrap { flex-wrap: wrap; }`,
    `.center { text-align: center; }`,
    `.capitalize { text-transform: capitalize; }`,
    `.font1 { font-family: courier; }`,
    `.nowrap { white-space: nowrap; }`,
  ];

  const css = [
    ...cssOther,
    ...widths,
    ...heights,
    ...borderWidths,
    ...textColors,
    ...textSizes,
    ...borderColors,
    ...borderStyles,
    ...displayStyles,
    ...bgColors,
    ...opacity,
    ...padding,
    ...margin,
    ...paddingRight,
  ];

  const macros = {
    wrap: "flex flex-wrap",
    b: "bw1 solid bgc0 bc0 tc0 p1 m0 ts2 block m1 center",
    c1: "bgc1 bc1 tc1",
    c2: "bgc2 bc2 tc2",
    "page-title": "font1 nowrap m0 p2 ts6 bw1 solid center bc1 tc4 capitalize",
  };

  const macroCss = [];
  Object.keys(macros).forEach((k) => {
    selectors = macros[k].split(" ");
    const cssValues = selectors.map((s) => {
      console.log(s);
      return css
        .find((c) => c.startsWith(`.${s} `))
        .split("{")[1]
        .split("}")[0];
    });
    macroCss.push(`.${k} { ${cssValues.join("")} }`);
  });
  css.unshift(...macroCss);

  target.innerHTML = css.join("\n");
  console.log(target.innerHTML);

  const samples = document.querySelector(".samples");
  if (!samples) throw `Could not find .samples element`;

  baseColors.forEach((c, i) =>
    samples.appendChild(
      asDom(
        `<span class="b w1 h1 bc${i} bgc${i} tc${i}">${i}</span>`
      )
    )
  );

  Object.keys(macros).forEach((k) => {
    samples.appendChild(asDom(`<div class="b w2 h2">${k}</div>`));
  });

  textColors.forEach((c, i) =>
    samples.appendChild(
      asDom(`<div class="m1 p1 tc${i} w1 h1 ts2 center">tc${i}</div>`)
    )
  );
  bgColors.forEach((c, i) =>
    samples.appendChild(
      asDom(
        `<div class="m1 p1 tc${i} w8 h5 center bgc${i}">bgc${i}</div>`
      )
    )
  );
  borderColors.forEach((c, i) =>
    samples.appendChild(
      asDom(
        `<div class="m1 p1 bw2 center solid tc${i} w5 h5 bgc${i} bc${i}">bc${i}</div>`
      )
    )
  );

  const slider = createSlider();
  slider.addEventListener("input", (e) => {
    const seed = e.target.value;
    console.log(seed);
    // modify the css variable "seed"
    document.documentElement.style.setProperty("--seed", seed);
  });
  slider.value = 10;
  // trigger
  slider.dispatchEvent(new Event("input"));
  samples.appendChild(slider);
}

injectCss(8);
