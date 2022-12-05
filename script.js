
function toggelContent(){
    const currentContentElement = this.nextElementSibling;
    const isContentCollapsed = currentContentElement.classList.contains("collapse");

    accordionHeader.forEach((head) => {
        const currentElement = head.nextElementSibling;
        if (!currentElement.classList.contains("collapse")) {
            currentElement.classList.add("collapse");
        }
    });

    if (isContentCollapsed) {
        currentContentElement.classList.remove("collapse");
      }
        
}


const accordionHeader = document.querySelectorAll('.accordion-header');
accordionHeader.forEach((header)=> {
    header.addEventListener("click", toggelContent);
    
});