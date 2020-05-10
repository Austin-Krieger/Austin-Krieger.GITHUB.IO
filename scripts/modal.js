// Get the modal
var modal = document.getElementById("myModal");
var closeModal = document.getElementById("myModal").addEventListener('click', closeModal);

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img;
//var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

/*img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}*/

function displayModal(elem){
    img = this.id;
    modal.style.display = "block";
    modalImg.src = elem.src;
    captionText.innerHTML = elem.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

function closeModal() {
    modal.style.display = "none";
}