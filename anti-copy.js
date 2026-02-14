// Chặn chuột phải
document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
});

// Chặn copy, cut, paste
document.addEventListener("copy", function(e) {
    e.preventDefault();
});

document.addEventListener("cut", function(e) {
    e.preventDefault();
});

document.addEventListener("paste", function(e) {
    e.preventDefault();
});

// Chặn bôi đen
document.addEventListener("selectstart", function(e) {
    e.preventDefault();
});

// Chặn kéo thả ảnh
document.addEventListener("dragstart", function(e) {
    e.preventDefault();
});

// Chặn phím tắt DevTools và copy
document.addEventListener("keydown", function(e) {

    // Ctrl+C
    if (e.ctrlKey && e.key.toLowerCase() === "c") {
        e.preventDefault();
    }

    // Ctrl+X
    if (e.ctrlKey && e.key.toLowerCase() === "x") {
        e.preventDefault();
    }

    // Ctrl+V
    if (e.ctrlKey && e.key.toLowerCase() === "v") {
        e.preventDefault();
    }

    // Ctrl+U
    if (e.ctrlKey && e.key.toLowerCase() === "u") {
        e.preventDefault();
    }

    // Ctrl+Shift+I
    if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "i") {
        e.preventDefault();
    }

    // Ctrl+Shift+J
    if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "j") {
        e.preventDefault();
    }

    // F12
    if (e.key === "F12") {
        e.preventDefault();
    }

});
