import logo from 'url:../../img/favicon.png';

import View from './View';

class Nav extends View {
  _parentEl = document.body;

  _generateMarkup() {
    return `
        <header>
            <nav>
                <div class="container d-flex flex-wrap justify-content-center align-items-center py-3 border-bottom">
                    <a href="/" class="d-none d-md-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                        <img src="${logo}" alt="Logo Brand" width="55">
                        <span class="fs-1 roboto-medium d-none d-lg-inline" style="letter-spacing: 0.9rem;">EPORU</span>
                    </a>
                    
                    <ul class="nav">
                        <li class="nav-item">
                            <a href="#" class="nav-link active">
                                <i class="text-white d-md-none display-5 bi-house-fill"></i>
                                <span class="d-none d-md-inline">Home</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link">
                                <i class="text-white d-md-none display-5 bi-gear-wide-connected"></i>
                                <span class="d-none d-md-inline">Features</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link">
                                <i class="text-white d-md-none display-5 bi-question-circle-fill"></i>
                                <span class="d-none d-md-inline">FAQs</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link">
                                <i class="text-white d-md-none display-5 bi-info-circle-fill"></i>
                                <span class="d-none d-md-inline">About</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
        `;
  }
}

export default new Nav();
