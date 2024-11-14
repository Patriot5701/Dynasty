let currentPage = 0;
const totalPage = 3;
let startY = 0;

function scrollToPage(page) {
    window.scrollTo({
      top: page * window.innerHeight,
      behavior: 'smooth'
    });
    document.querySelector('.arrow-down').style.display = 'flex';
    document.querySelector('.arrow-up').style.display = 'flex';
    if(page==0){
        document.querySelector('.arrow-up').style.display = 'none';
    }
    if(page==2){
        document.querySelector('.arrow-down').style.display = 'none';
    }
}


function handleScroll(event) {
    if (event.deltaY > 0) {
        // Scroll Down
        if (currentPage < totalPage - 1) {
        currentPage++;
        }
    } else {
        // Scroll Up
        if (currentPage > 0) {
        currentPage--;
        }
    }
    scrollToPage(currentPage);
    event.preventDefault();
}

function handleTouchStart(event) {
    startY = event.touches[0].clientY;
}

function handleTouchMove(event) {
    event.preventDefault();
  }

function handleTouchEnd(event) {
    const endY = event.changedTouches[0].clientY;
    if (startY - endY > 50) {
      // Swipe Up
      if (currentPage < totalPage - 1) {
        currentPage++;
      }
    } else if (endY - startY > 50) {
      // Swipe Down
      if (currentPage > 0) {
        currentPage--;
      }
    }
    scrollToPage(currentPage);
}

function isElementAfter(element1, element2) {
    // Vérifiez si element1 est après element2 en utilisant compareDocumentPosition
    return element2.compareDocumentPosition(element1) & Node.DOCUMENT_POSITION_FOLLOWING;
}

export function checkDeviceOrientation(){
    let app = document.getElementById('app');
    let familyElement = document.getElementById('royal-family');
    let gameElement = document.getElementById('game');
    let familyParchment = document.getElementById('parchment-family');
    let gameParchment = document.getElementById('parchment-game');
    if(window.innerHeight <= window.innerWidth){
        if(isElementAfter(familyElement, gameElement)){
            app.insertBefore(familyElement, gameParchment);
            app.insertBefore(familyParchment, familyElement);
        }
        // Retirer les écouteurs d'événements
        window.removeEventListener('wheel', handleScroll);
        window.removeEventListener('touchstart', handleTouchStart);
        window.removeEventListener('touchmove', handleTouchMove);
        window.removeEventListener('touchend', handleTouchEnd);
    }else{
        //mobile
        if(!isElementAfter(familyElement, gameElement)){
            app.insertBefore(gameElement, familyParchment);
            app.insertBefore(gameParchment, gameElement);
        }
        // Ajouter les écouteurs d'événements
        window.addEventListener('wheel', handleScroll);
        window.addEventListener('touchstart', handleTouchStart);
        window.addEventListener('touchmove', handleTouchMove, { passive: false });
        window.addEventListener('touchend', handleTouchEnd);
    }
}