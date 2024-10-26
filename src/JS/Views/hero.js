import View from "./View";

class Hero extends View {
  _parentEl = document.getElementById("hero");

  _generateMarkup() {
    return `
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6 text-center">
            <i class="bi-spotify gradient-text" style="font-size: 15rem; color: #1ed760;"></i>
          </div>
          <div class="col-lg-6">
            <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Try out My Music via Spotify WebAPI</h1>
            <p class="lead">With <strong>Spotify</strong> free API and my Premium Account i can play music from Spotify WebAPI in here, why don't you try out...</p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
              <a href="#" class="btn btn-lg hover-success rounded-4">Try</a>
            </div>
          </div>
        </div>
        `;
  }
}

export default new Hero();
