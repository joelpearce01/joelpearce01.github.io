const select = document.querySelector('select');
const html = document.querySelector('.output');

select.addEventListener('change', () => {
  const choice = select.value;

    switch (choice) {
        case "black":
            update("black", "white");
            break;

        case "white":
            update("white", "black");
            break;

        case "purple":
            update("purple", "lavender");
            break;

        case "yellow":
            update("yellow", "white");
            break;

        case "psych":
            update("lime", "purple");
            break;
    }

});

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}
