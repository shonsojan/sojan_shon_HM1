console.log("JS file connected");

const vectorGraphic = document.querySelector('#badge');

function logThisId() {
    console. log(this);
    console.log('clicked on this element', this.id)
}

vectorGraphic.addEventListener('click', logThisId);