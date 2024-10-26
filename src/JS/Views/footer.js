import View from "./View";
import favicon from "url:../../img/favicon.png";

class Footer extends View {
  _parentEl = document.body;

  _generateMarkup() {
    return `
    <footer class="text-bg-dark mt-5">
      <div class="container py-5">
        <div class="row">
          <div class="col-12 col-lg-4 text-center">
            <img src="${favicon}" alt="Logo Brand" width="150">
            <address>
              Jl.Pelangi Ndasmu, Surabaya, Jawa Tengah,
              Indonesia
            </address>
            <ul class="list-inline">
              <li class="list-inline-item">
                <a class="sosial-icon" href="">
                  <i class="bi-whatsapp"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a class="sosial-icon" href="">
                  <i class="bi-facebook"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a class="sosial-icon" href="">
                  <i class="bi-youtube"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a class="sosial-icon" href="">
                  <i class="bi-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
          <div class="col-12 col-lg-8">
            <div class="row">
              <div class="col-12 col-sm-3 mt-3 m-lg-0">
                <h6>Produk Produk Perusahaan</h6>
                <ul class="list-unstyled">
                  <li>
                    <a class="footer-link" href="#produk">
                      Produk 1
                    </a>
                  </li>
                  <li>
                    <a class="footer-link" href="#produk">
                      Produk 2
                    </a>
                  </li>
                  <li>
                    <a class="footer-link" href="#produk">
                      Produk 3
                    </a>
                  </li>
                  <li>
                    <a class="footer-link" href="#produk">
                      Produk 4
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-12 col-sm-3 mt-3 m-lg-0">
                <h6>Kenapa Memilih Perusahaan</h6>
                <ul class="list-unstyled">
                  <li>
                    <a class="footer-link" href="">
                      Testimoni
                    </a>
                  </li>
                  <li>
                    <a class="footer-link" href="">
                      Penghargaan Perusahaan
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-12 col-sm-3 mt-3 m-lg-0">
                <h6>Informasi Perusahaan</h6>
                <ul class="list-unstyled">
                  <li>
                    <a class="footer-link" href="">Tentang Kami</a>
                  </li>
                </ul>
              </div>
              <div class="col-12 col-sm-3 mt-3 m-lg-0">
                <h6>Help</h6>
                <ul class="list-unstyled">
                  <li>
                    <a class="footer-link" href="">Kebijakan Privasi</a>
                  </li>
                  <li>
                    <a class="footer-link" href="./karir.html">Karir</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row py-4 border-top text-center">
        <div class="col-12">
          <p class="m-0">
            &copy; 2024 Neporu. All Rights Reserved.
          </p>
        <div>
      </div>
    </footer>
    `;
  }
}

export default new Footer();
