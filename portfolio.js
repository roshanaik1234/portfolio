const text = "ROSHAN S. NAIK";
let index = 0;
let typingSpeed = 300;  
let deletingSpeed = 100; 
let delayAfterTyping = 1000;  
let delayAfterDeleting = 500; 

function type() {
    if (index < text.length) {
        document.querySelector('.typed-text').textContent += text.charAt(index);
        index++;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(deleteText, delayAfterTyping); 
    }
}

function deleteText() {
    if (index > 0) {
        document.querySelector('.typed-text').textContent = text.substring(0, index - 1);
        index--;
        setTimeout(deleteText, deletingSpeed);
    } else {
        setTimeout(type, delayAfterDeleting); 
    }
}

document.addEventListener("DOMContentLoaded", function () {
    type();
});
