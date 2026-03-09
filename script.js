// Link base de afiliado: substitua pelo seu link real para rastrear vendas.
const affiliateBase = "https://shopee.com.br/";

const products = [
  {
    name: "Varal Retrátil Parede Automático",
    price: "R$ 129,90",
    rating: 4.9,
    image: "varal.png",
    link: `https://s.shopee.com.br/2qPg2PjgIV`
  },
  {
    name: "Mini Controle sem fio com Teclado Air Mouse",
    price: "R$ 39,98",
    rating: 4.8,
    image: "controle.png",
    link: 'https://s.shopee.com.br/7VBVag4nCp'
  },
  {
    name: "Mini Processador Triturador Sem Fio Elétrico 250ML",
    price: "R$ 25,99",
    rating: 4.7,
    image: "triturador.png",
    link: `https://s.shopee.com.br/qebexCNDq`
  },
  {
    name: "Chaleira Elétrica Inox Bule Térmica 1,8L",
    price: "R$ 44,90",
    rating: 4.8,
    image: "chaleira.png",
    link: `https://s.shopee.com.br/7AYfCmwxTn`
  },
  {
    name: "Inox Torneira banheiro Alavanca Moderna",
    price: "R$ 49,90",
    rating: 4.9,
    image: "torneira.png",
    link: `https://s.shopee.com.br/6VIyPpEkye`
  },
  {
    name: "Jogo De Chave Catraca Caixa De Ferramentas Completa Reversível Soquetes Maleta",
    price: "R$ 30,99",
    rating: 4.8,
    image: "caixa.png",
    link: `https://s.shopee.com.br/40bdRvotx2`
  },
  {
    name: "Petisqueira Redonda Flower com 7 Divisórias",
    price: "R$ 19,69",
    rating: 4.7,
    image: "comida.png",
    link: `https://s.shopee.com.br/7fUvoxybhq`
  },
  {
    name: "KIT 1/2/5 Suporte De Parede Multifuncional",
    price: "R$ 10,99",
    rating: 4.7,
    image: "suporte.png",
    link: `https://s.shopee.com.br/8fNTk0kbKB`
  }
];

const featured = [
  {
    name: "Calibrador Compressor Pneu Digital Carro Bike Sem Fio",
    description: "Compacto e leve (300g), ideal para encher pneus de carros e outros itens com rapidez. Possui display digital, motor de 40W e acompanha 4 bicos, cabo USB e mangueira extensora para mais praticidade.",
    price: "R$ 79,90",
    link: `https://s.shopee.com.br/9fG0wCBdLq`
  },
  {
    name: "Escova De Limpeza 9 Em1 Recarregavél Elétrica Giratória Com Cabo Alongador",
    description: "Escova elétrica prática e sem fio, ideal para limpar cozinha, banheiro, carro, sofá e azulejos. Possui várias pontas de limpeza, bateria recarregável USB-C e design portátil que facilita a remoção de sujeiras difíceis com rapidez.",
    price: "R$ 159,90",
    link: `https://s.shopee.com.br/6KzYy65uuD`
  },
  {
    name: "Depilador de Sombrancelha Buço Nariz Orelha Rosto",
    description: "Prático e portátil, remove pelos de sobrancelha, buço, nariz e orelha com precisão e sem dor. Possui design compacto, cabeça removível e carregamento USB, ideal para cuidados rápidos no dia a dia",
    price: "R$ 119,90",
    link: `https://s.shopee.com.br/8pgtwbyQ2s`
  }
];

function getStars(rating) {
  const full = "★".repeat(Math.floor(rating));
  const empty = "☆".repeat(5 - Math.floor(rating));
  return `${full}${empty} ${rating.toFixed(1)}`;
}

function createProductCard(product) {
  return `
    <article class="product-card">
      <div class="product-image-wrap">
        <img class="product-image" src="${product.image}" alt="${product.name}" loading="lazy" />
      </div>
      <div class="product-content">
        <h3 class="product-title">${product.name}</h3>
        <div class="price-row">
          <span class="price">${product.price}</span>
          <span class="rating">${getStars(product.rating)}</span>
        </div>
        <a class="product-link" href="${product.link}" target="_blank" rel="noopener noreferrer">
          Ver na Shopee
        </a>
      </div>
    </article>
  `;
}

function createFeaturedCard(item) {
  return `
    <article class="featured-card">
      <div>
        <h3>${item.name}</h3>
        <p>${item.description}</p>
      </div>
      <div>
        <div class="featured-price">${item.price}</div>
        <a href="${item.link}" target="_blank" rel="noopener noreferrer">Ver na Shopee</a>
      </div>
    </article>
  `;
}

function renderProducts() {
  const grid = document.getElementById("products-grid");
  const featuredGrid = document.getElementById("featured-grid");
  if (!grid || !featuredGrid) return;

  grid.innerHTML = products.map(createProductCard).join("");
  featuredGrid.innerHTML = featured.map(createFeaturedCard).join("");
}

function setupMobileMenu() {
  const body = document.body;
  const toggle = document.getElementById("nav-toggle");
  const nav = document.getElementById("primary-nav");
  if (!toggle || !nav) return;

  const desktopQuery = window.matchMedia("(min-width: 860px)");

  function closeMenu() {
    body.classList.remove("nav-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Abrir menu de navegação");
  }

  function openMenu() {
    body.classList.add("nav-open");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Fechar menu de navegação");
  }

  toggle.addEventListener("click", () => {
    const isOpen = body.classList.contains("nav-open");
    if (isOpen) {
      closeMenu();
      return;
    }
    openMenu();
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  document.addEventListener("click", (event) => {
    if (!body.classList.contains("nav-open")) return;
    if (!(event.target instanceof Element)) return;

    const clickedInsideMenu = event.target.closest("#primary-nav");
    const clickedToggle = event.target.closest("#nav-toggle");
    if (!clickedInsideMenu && !clickedToggle) closeMenu();
  });

  if (desktopQuery.addEventListener) {
    desktopQuery.addEventListener("change", (event) => {
      if (event.matches) closeMenu();
    });
  } else if (desktopQuery.addListener) {
    desktopQuery.addListener((event) => {
      if (event.matches) closeMenu();
    });
  }

  closeMenu();
}

function setupScrollReveal() {
  const elements = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  elements.forEach((element) => observer.observe(element));
}

function setFooterYear() {
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
}

renderProducts();
setupMobileMenu();
setupScrollReveal();
setFooterYear();
