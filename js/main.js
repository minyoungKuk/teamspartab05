// 운성
function scrollToElement(selector, block = 'center') {
    const element = document.querySelector(selector);
    element.scrollIntoView({ behavior: 'smooth', block: block });
}
// 운성
