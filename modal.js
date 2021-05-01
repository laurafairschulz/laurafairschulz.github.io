function openModal(fileName, title) {
    var mobile = window.innerWidth < 801;
    var modal = document.getElementById('theModal');
    var body = document.getElementsByTagName('body');
    if (modal.style.display !== 'block' && !mobile){
        body[0].style.margin = 0;
        pic = document.createElement('img')
        pic.src = fileName;
        pic.setAttribute('class','slide');
        pic.setAttribute('id','theSlide');
        modal.appendChild(pic);
        var title = document.createTextNode(title);
        var heading = document.createElement('h1');
        heading.setAttribute('id','theHeading');
        heading.append(title);
        modal.appendChild(heading);
        modal.style.display = 'block';
        modal.addEventListener('click',closeModal);
        document.onkeydown = function(e){
            e = e || window.event;
            if (e.keyCode === 27){
                closeModal();
            }
        }
    }
    
}

function closeModal() {
    var modal = document.getElementById('theModal');
    var pic = document.getElementById('theSlide');
    var heading = document.getElementById('theHeading');
    var body = document.getElementsByTagName('body');
    modal.removeEventListener('click',closeModal);
    modal.removeChild(pic);
    modal.removeChild(heading);
    modal.style.display = 'none';
    body[0].style.margin = '8px';
}

var images = document.getElementsByTagName('img');

for (var i = 0; i < images.length; i++){
    images[i].addEventListener('click', function(e){
        openModal(this.src, this.alt);
    });
}