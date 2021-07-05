let keyboardListRu = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Delete',
    'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
    'ShiftLeft', '\\', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '↑', 'ShiftRight',
    'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', '←', '↓', '→'];

let keyboardListEn = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Delete',
    'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter',
    'ShiftLeft', '\\', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '↑', 'ShiftRight',
    'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', '←', '↓', '→'];

let unChangedBtns = ['ControlLeft', 'AltLeft', 'MetaLeft', 'ControlRight', 'AltRight', 'ShiftLeft', 'ShiftRight', 'Tab', 'CapsLock', 'Enter', 'Delete', 'Backspace', 'ArrowLeft', 'ArrowRight', 'ArrowDown', 'ArrowUp', ' '];
let symbols = ['[', ']', '\\', ';', '\'', ',', '.', '/', '-', '=', '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
let symbolsShift = ['{', '}', '|', ':', '"', '<', '>', '?', '_', '+', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '&amp;', "&gt;", '&lt;'];

let caps = false;

function init() {



    let display = '<input type="text" id = display_input ></input>';
    document.querySelector('#output').innerHTML = display;
    let out = '';
    for (let i = 0; i < keyboardListEn.length; i++) {
        if (i === 14 || i === 29 || i === 42 || i === 56) {
            out += '<div class="clearfix"></div>';
        }
        if (keyboardListEn[i] === 'Backspace') {
            out += '<div class="keybord_btn Backspace" id="Backspace" data="' + keyboardListEn[i] + '" >' + 'Backspace' + '</div>';
            continue;
        }
        if (keyboardListEn[i] === '`') {
            out += '<div class="keybord_btn tilda" id="tilda" data="' + keyboardListEn[i] + '" >' + '`' + '</div>';
            continue;
        }
        if (keyboardListEn[i] === 'Tab') {
            out += '<div class="keybord_btn Tab" id="Tab" data="' + keyboardListEn[i] + '" >' + "Tab" + '</div>';
            continue;
        }
        if (keyboardListEn[i] === 'Delete') {
            out += '<div class="keybord_btn Delete" id="Delete"  data="' + keyboardListEn[i] + '" >' + "Del" + '</div>';
            continue;
        }
        if (keyboardListEn[i] === 'CapsLock') {
            out += '<div class="keybord_btn CapsLock" id="CapsLock" data="' + keyboardListEn[i] + '" >' + "CapsLock" + '</div>';
            continue;
        }
        if (keyboardListEn[i] === 'Enter') {
            out += '<div class="keybord_btn Enter" id="Enter" data="' + keyboardListEn[i] + '" >' + "Enter" + '</div>';
            continue;
        }
        if (keyboardListEn[i] === 'ShiftLeft') {
            out += '<div class="keybord_btn ShiftLeft" id="ShiftLeft" data="' + keyboardListEn[i] + '" >' + "Shift" + '</div>';
            continue;
        }
        if (keyboardListEn[i] === 'ShiftRight') {
            out += '<div class="keybord_btn ShiftRight" id="ShiftRight" data="' + keyboardListEn[i] + '" >' + "Shift" + '</div>';
            continue;
        }
        if (keyboardListEn[i] === 'ControlLeft') {
            out += '<div class="keybord_btn CtrlLeft" id="ControlLeft" data="' + keyboardListEn[i] + '" >' + "Ctrl" + '</div>';
            continue;
        }
        if (keyboardListEn[i] === 'ControlRight') {
            out += '<div class="keybord_btn CtrlRight" id="ControlRight" data="' + keyboardListEn[i] + '" >' + "Ctrl" + '</div>';
            continue;
        }
        if (keyboardListEn[i] === 'MetaLeft') {
            out += '<div class="keybord_btn Win" id="MetaLeft" data="' + keyboardListEn[i] + '" >' + "Win" + '</div>';
            continue;
        }
        if (keyboardListEn[i] === 'AltLeft') {
            out += '<div class="keybord_btn alt" id="AltLeft" data="' + keyboardListEn[i] + '" >' + "Alt" + '</div>';
            continue;
        }
        if (keyboardListEn[i] === 'AltRight') {
            out += '<div class="keybord_btn alt" id="AltRight" data="' + keyboardListEn[i] + '" >' + "Alt" + '</div>';
            continue;
        }
        // Space
        if (keyboardListEn[i] === 'Space') {
            out += '<div class="keybord_btn space" data=" " >' + "" + '</div>';
            continue;
        }
        // Arrow top
        if (keyboardListEn[i] === '↑') {
            out += '<div class="keybord_btn arrow" data="ArrowUp"  >' + "↑" + '</div>';
            continue;
        }
        // Arrow left
        if (keyboardListEn[i] === '←') {
            out += '<div class="keybord_btn arrow" data="ArrowLeft"  >' + "←" + '</div>';
            continue;
        }
        // Arrow bottom
        if (keyboardListEn[i] === '↓') {
            out += '<div class="keybord_btn arrow" data="ArrowDown"  >' + "↓" + '</div>';
            continue;
        }
        // Arrow right
        if (keyboardListEn[i] === '→') {
            out += '<div class="keybord_btn arrow" data="ArrowRight"  >' + "→" + '</div>';
            continue;
        }
        if (keyboardListEn[i] === 'Backslash') {
            out += '<div class="keybord_btn Backslash" id="Backslash" data="\\" >' + '\\' + '</div>';
            continue;
        }

        out += '<div class="keybord_btn" " data="' + keyboardListEn[i] + '" >' + keyboardListEn[i] + '</div>';
    }

    keyboard_buttons.innerHTML = out;

}
init();


// onKeyDown
document.onkeydown = function (event) {
    //     console.log('key_DOWN: ACTIVE BTN');
    console.log(event);
    if (unChangedBtns.includes(event.code) || unChangedBtns.includes(event.key)) {
        document.querySelector('#keyboard_buttons .keybord_btn[data="' + event.code + '"]').classList.add('active_button');
    }


};

// onPRESS
document.onkeypress = function (event) {

    if (event.code !== 'Backspace' && 'INPUT' !== document.activeElement.tagName) {
        document.querySelector('#keyboard_buttons .keybord_btn[data="' + event.key + '"]').classList.add('active_button');
        // console.log('key_PRESS: ' + event.key);
        display_input.value += event.key;
    }

    document.querySelector('#keyboard_buttons .keybord_btn[data="' + event.key + '"]').classList.add('active_button');

};

// onKeyUp
document.onkeyup = function (event) {
    // console.log('key_UP: ' + event.key);
    document.querySelectorAll('#keyboard_buttons .keybord_btn').forEach(function (element) {
        element.classList.remove('active_button');
    })

    // CapsLock work
    if (event.key === 'CapsLock') {
        if (caps === false) {
            caps = true;
            document.querySelector('#keyboard_buttons .keybord_btn[data="' + event.key + '"]').classList.add('caps_active');

            // Update lowerCase to upperCase
            document.querySelectorAll('#keyboard_buttons .keybord_btn').forEach(function (element) {
                // Update only letters
                if (!unChangedBtns.includes(element.getAttribute('data'))) {
                    element.innerHTML = element.innerHTML.toUpperCase();
                    element.setAttribute('data', element.innerHTML);
                }
            })

        } else {
            caps = false;
            document.querySelectorAll('#keyboard_buttons .keybord_btn').forEach(function (element) {
                element.classList.remove('caps_active');
            })

            // Update upperCase to lowerCase
            document.querySelectorAll('#keyboard_buttons .keybord_btn').forEach(function (element) {
                if (!unChangedBtns.includes(element.getAttribute('data'))) {
                    element.innerHTML = element.innerHTML.toLowerCase();
                    element.setAttribute('data', element.innerHTML);
                }
            })
        }
    }

};

// Click on buttons
document.querySelectorAll('#keyboard_buttons .keybord_btn').forEach(function (element) {
    element.onclick = function (event) {
        document.querySelectorAll('#keyboard_buttons .keybord_btn').forEach(function (element) {
            element.classList.remove('active_button');
        })

        let code = this.getAttribute('data');
        this.classList.add('active_button');

        console.log(code);

        if (!unChangedBtns.includes(code) || code === " ") {
            display_input.value += code;
        }

        if (code === 'Backspace') {
            display_input.value = display_input.value.slice(0, -1);
        }

        if (code === 'Delete') {
            display_input.value = display_input.value.slice(-1, 0);
        }
        if (code === 'CapsLock') {

            if (caps === false) {
                caps = true;
                // Update lowerCase to upperCase
                document.querySelectorAll('#keyboard_buttons .keybord_btn').forEach(function (element) {
                    // Update only letters
                    if (!unChangedBtns.includes(element.getAttribute('data'))) {
                        element.innerHTML = element.innerHTML.toUpperCase();
                        element.setAttribute('data', element.innerHTML);
                    }
                })

            } else {
                caps = false;
                document.querySelectorAll('#keyboard_buttons .keybord_btn').forEach(function (element) {
                    element.classList.remove('caps_active');
                })

                // Update upperCase to lowerCase
                document.querySelectorAll('#keyboard_buttons .keybord_btn').forEach(function (element) {
                    if (!unChangedBtns.includes(element.getAttribute('data'))) {
                        element.innerHTML = element.innerHTML.toLowerCase();
                        element.setAttribute('data', element.innerHTML);
                    }
                })
            }

        }

        if (code === 'ShiftLeft' || code === 'ShiftRight') {
            if (caps === false) {
                caps = true;
                // Update lowerCase to upperCase
                document.querySelectorAll('#keyboard_buttons .keybord_btn').forEach(function (element) {
                    // Update letters
                    if (!unChangedBtns.includes(element.getAttribute('data'))) {
                        element.innerHTML = element.innerHTML.toUpperCase();
                        element.setAttribute('data', element.innerHTML);
                    }

                    // Update symbols
                    if (symbols.includes(element.getAttribute('data'))) {
                        element.innerHTML = symbolsShift[symbols.indexOf(element.getAttribute('data'))];
                        element.setAttribute('data', element.innerHTML);
                    }
                })


            }
            else {
                caps = false;
                // Update upperCase to lowerCase
                document.querySelectorAll('#keyboard_buttons .keybord_btn').forEach(function (element) {
                    if (!unChangedBtns.includes(element.getAttribute('data'))) {
                        element.innerHTML = element.innerHTML.toLowerCase();
                        element.setAttribute('data', element.innerHTML);
                    }

                    // Update symbols back to default
                    if (symbolsShift.includes(element.getAttribute('data'))) {

                        if (element.innerHTML === "&amp;" || element.innerHTML === "&gt;" || element.innerHTML === '&lt;') {
                            element.innerHTML === "&amp;" ? element.innerHTML = '7' : '?';
                            element.innerHTML === "&lt;" ? element.innerHTML = '.' : '?';
                            element.innerHTML === "&gt;" ? element.innerHTML = ',' : '?';
                            element.setAttribute('data', element.innerHTML);
                            return;
                        }

                        element.innerHTML = symbols[symbolsShift.indexOf(element.getAttribute('data'))];
                        element.setAttribute('data', element.innerHTML);
                    }
                })
            }


        }
    }
});

// SHIFT
document.addEventListener('keydown', function (event) {
    if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
        // console.log("EventListener_Shift");

        if (caps === false) {
            caps = true;
            // Update lowerCase to upperCase
            document.querySelectorAll('#keyboard_buttons .keybord_btn').forEach(function (element) {
                // Update letters
                if (!unChangedBtns.includes(element.getAttribute('data'))) {
                    element.innerHTML = element.innerHTML.toUpperCase();
                    element.setAttribute('data', element.innerHTML);
                }

                // Update symbols
                if (symbols.includes(element.getAttribute('data'))) {
                    element.innerHTML = symbolsShift[symbols.indexOf(element.getAttribute('data'))];
                    element.setAttribute('data', element.innerHTML);
                }
            })

            // Change Symbols

        } else {
            caps = false;
            // Update upperCase to lowerCase
            document.querySelectorAll('#keyboard_buttons .keybord_btn').forEach(function (element) {
                if (!unChangedBtns.includes(element.getAttribute('data'))) {
                    element.innerHTML = element.innerHTML.toLowerCase();
                    element.setAttribute('data', element.innerHTML);
                }

                // Update symbols back to default
                if (symbolsShift.includes(element.getAttribute('data'))) {

                    if (element.innerHTML === "&amp;" || element.innerHTML === "&gt;" || element.innerHTML === '&lt;') {
                        element.innerHTML === "&amp;" ? element.innerHTML = '7' : '?';
                        element.innerHTML === "&lt;" ? element.innerHTML = '.' : '?';
                        element.innerHTML === "&gt;" ? element.innerHTML = ',' : '?';
                        element.setAttribute('data', element.innerHTML);
                        return;
                    }

                    element.innerHTML = symbols[symbolsShift.indexOf(element.getAttribute('data'))];
                    element.setAttribute('data', element.innerHTML);
                }
            })
        }
    }
});

document.addEventListener('keyup', function (event) {
    if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {


        if (caps === false) {
            caps = true;
            // Update lowerCase to upperCase
            document.querySelectorAll('#keyboard_buttons .keybord_btn').forEach(function (element) {
                // Update only letters
                if (!unChangedBtns.includes(element.getAttribute('data'))) {
                    element.innerHTML = element.innerHTML.toUpperCase();
                    element.setAttribute('data', element.innerHTML);
                }

            })


        }

        else {
            caps = false;
            // Update upperCase to lowerCase
            document.querySelectorAll('#keyboard_buttons .keybord_btn').forEach(function (element) {
                if (!unChangedBtns.includes(element.getAttribute('data'))) {
                    element.innerHTML = element.innerHTML.toLowerCase();
                    element.setAttribute('data', element.innerHTML);
                }

                // Update symbols back to default
                if (symbolsShift.includes(element.getAttribute('data'))) {

                    if (element.innerHTML === "&amp;" || element.innerHTML === "&gt;" || element.innerHTML === '&lt;') {
                        element.innerHTML === "&amp;" ? element.innerHTML = '7' : '?';
                        element.innerHTML === "&lt;" ? element.innerHTML = '.' : '?';
                        element.innerHTML === "&gt;" ? element.innerHTML = ',' : '?';
                        element.setAttribute('data', element.innerHTML);
                        return;
                    }

                    element.innerHTML = symbols[symbolsShift.indexOf(element.getAttribute('data'))];
                    element.setAttribute('data', element.innerHTML);
                }
            })
        }

    }
});

// Backspace
document.addEventListener('keydown', function (event) {
    if (event.code === 'Backspace') {
        display_input.value = display_input.value.slice(0, -1);
    }
});



// It's a trap
function runOnKeys(func, ...codes) {
    let pressed = new Set();

    document.addEventListener('keydown', function (event) {
        pressed.add(event.key);

        for (let key of codes) { // все ли клавиши из набора нажаты?
            if (!pressed.has(key)) {
                return;
            }
        }

        pressed.clear();

        func();
    });

    document.addEventListener('keyup', function (event) {
        pressed.delete(event.key);
    });

}
runOnKeys(
    () => alert(`    He-he, you find a BUG, only English language is implemented!
    +5 point to Gryffindor!!!`),
    "Control",
    "Alt"
);

