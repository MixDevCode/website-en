let typed, typed2, typed3;

// Write to terminal
typed = new Typed("#terminal__prompt--text", {
  strings: ["node hello.js^2000"],
  cursorChar: "▐",
  typeSpeed: 40,
  backSpeed: 0,
  loop: false,
  onComplete: (self) => {
    self.cursor.remove();
    typed2 = new Typed("#terminal__prompt--text-2", {
      strings: [
        '\n<h1>Hello! My name is Lucas.</h1>^1000\n<h3>I am a Software Developer, currently graduated as a <b>Superior Technician in Software Development</b>.</h3>^1000\n<h3>I am 22 years old and <b>passionate</b> about programming (evidenced by my <a href="https://github.com/MixDevCode/" class="text-decoration-none" target="_blank">GitHub</a>).</h3>^1000<h3>I have worked on projects using languages like NodeJS, PHP, C#, and Python; you can check out some of my projects by clicking <a href="#" onClick="moveToProjects();return false;" class="text-decoration-none">here</a>.</h3>^1000',
      ],
      typeSpeed: 0,
      loop: false,
      showCursor: false,
      onComplete: (self) => {
        $("#terminal__prompt-3").show();
      },
    });
  },
});

// Move terminal
const terminal = interact("#terminal");
terminal.draggable({
  allowFrom: "#terminal__bar",
  listeners: {
    move: dragMoveListener,
  },
  modifiers: [
    interact.modifiers.restrictRect({
      restriction: "parent",
    }),
  ],
});

function dragMoveListener(event) {
  var target = event.target;
  // keep the dragged position in the data-x/data-y attributes
  var x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx;
  var y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;

  // translate the element
  target.style.transform = "translate(" + x + "px, " + y + "px)";

  // update the posiion attributes
  target.setAttribute("data-x", x);
  target.setAttribute("data-y", y);
}
