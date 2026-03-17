const products = [
  {
    name: "Varal Retrátil Parede Automático",
    price: "R$ 129,90",
    rating: 4.9,
    image: "varal.png",
    link: `https://shopee.com.br/opaanlp/464586953/23197436883?__mobile__=1&exp_group=rollout&gads_t_sig=VTJGc2RHVmtYMTlxTFVSVVRrdENkVEdTU3BlMW9zMXB6bGYrZ0J1VEdQdmZvUXQ3NFJOMExDMUdUTnhsVHJCd096SE94QzNqRXJ0cGxCdk8xQkVvL2NHYk9SOEdlVzBHVW91T3lRQ0hxaFRqbnBkbzNETW5LWFBXK0FiY1dIQmZxNTdyNVo2RjBCUkRJWmhsMzc4V0xob3k5Q2tjcFlRbVZyeFAzSlZnclhBPQ&mmp_pid=an_18336740273&uls_trackid=5566d84j003v&utm_campaign=id_DvJD3KvQMl&utm_content=----&utm_medium=affiliates&utm_source=an_18336740273&utm_term=em5euii986nb`
  },
  {
    name: "Mini Controle sem fio com Teclado Air Mouse",
    price: "R$ 39,98",
    rating: 4.8,
    image: "controle.png",
    link: 'https://shopee.com.br/opaanlp/1258151997/19299263808?__mobile__=1&exp_group=rollout&gads_t_sig=VTJGc2RHVmtYMTlxTFVSVVRrdENkU1hZSjF1Ym94QW1tdXlLQVFLQ3hjNVkyaHE3aUNyNGd1V0k2Q3RjRFRaajcvZldiZnFIdTY4MEl0dTlMYnFIcUFFOGVOLzRPKzRteFVUQlRjblZpbGhBb2dyV0pOMWRsQll1UnRvc2RhczhxSW1RRlk3TDR4SFY2WFE2WSsrWHpQaDBVTCt2R1dROE9DakNUYmFnY0h3PQ&mmp_pid=an_18336740273&uls_trackid=5566d9v900fq&utm_campaign=id_9I1H5Cu50l&utm_content=----&utm_medium=affiliates&utm_source=an_18336740273&utm_term=em5ew1g2gsts'
  },
  {
    name: "Mini Processador Triturador Sem Fio Elétrico 250ML",
    price: "R$ 25,99",
    rating: 4.7,
    image: "triturador.png",
    link: `https://shopee.com.br/opaanlp/832036467/18931705150?__mobile__=1&exp_group=rollout&gads_t_sig=VTJGc2RHVmtYMTlxTFVSVVRrdENkVEdTU3BlMW9zMXB6bGYrZ0J1VEdQdWVQMWpXRHcxcklXLzV5NmpUU1dmR1hqZmhCM3M4dk5IZmNDbXNTSFh4SmdwUjRXYlZxWDdYSzNjeGMvcmhpODR4Yk5uTjZpNFQvdk5zS3B0ZjhHSGtUUjlUb1hhNkRuY0pBeGc3K1F6NVhHR3A3RzhWWGNtWFdUQ2JNeUxwQ1dJPQ&mmp_pid=an_18336740273&uls_trackid=5566dc1s00fq&utm_campaign=id_CW56lWNjjn&utm_content=----&utm_medium=affiliates&utm_source=an_18336740273&utm_term=em5exq4f2g8f`
  },
  {
    name: "Chaleira Elétrica Inox Bule Térmica 1,8L",
    price: "R$ 44,90",
    rating: 4.8,
    image: "chaleira.png",
    link: `https://shopee.com.br/opaanlp/482786640/23893183902?__mobile__=1&exp_group=rollout&gads_t_sig=VTJGc2RHVmtYMTlxTFVSVVRrdENkVEdTU3BlMW9zMXB6bGYrZ0J1VEdQc1hPL2J2Q1I2UXl0MHd6Y2Q5Ymk1TGpIKzZPVGorWEdsTUhoNXdFNU1TNExMT1hjMUw2ZnFpRmlFeG5BSS9TUUlBQjBZNW1TT2NjTEExSVZlQ0lVUmpEMjdjMUptRGlja2xZemoyYVZmalluOXdLWEx2WDE2QUliMHZVOEdUelNvPQ&mmp_pid=an_18336740273&uls_trackid=5566de4800ud&utm_campaign=id_9XTTomLiT5&utm_content=----&utm_medium=affiliates&utm_source=an_18336740273&utm_term=em5ezeudi4rs`
  },
  {
    name: "Inox Torneira banheiro Alavanca Moderna",
    price: "R$ 49,90",
    rating: 4.9,
    image: "torneira.png",
    link: `https://shopee.com.br/opaanlp/807581166/22792666247?__mobile__=1&exp_group=rollout&gads_t_sig=VTJGc2RHVmtYMTlxTFVSVVRrdENkVEdTU3BlMW9zMXB6bGYrZ0J1VEdQdGM2aU5HSndWVUtiNFdnN2FoMThybUUzN3ltbW1pM1ZCQkovako5TlZDUlF6ZURGRitkYnM4cE14ekJKU3lJMkUwaVNxcFBhbElhSXdtVktHdllYaGw2M3RTQ1NBZVhDM0FNYzdod3ltYTlDbVZROWNhUlRuN1lFZyt0S3B1aFhBPQ&mmp_pid=an_18336740273&uls_trackid=5566dga2003u&utm_campaign=id_nklEa7yau3&utm_content=----&utm_medium=affiliates&utm_source=an_18336740273&utm_term=em5f27gqsd5q`
  },
  {
    name: "Jogo De Chave Catraca Caixa De Ferramentas Completa Reversível Soquetes Maleta",
    price: "R$ 30,99",
    rating: 4.8,
    image: "caixa.png",
    link: `https://shopee.com.br/opaanlp/832036467/22892833180?__mobile__=1&exp_group=rollout&gads_t_sig=VTJGc2RHVmtYMTlxTFVSVVRrdENkVEdTU3BlMW9zMXB6bGYrZ0J1VEdQdWVQMWpXRHcxcklXLzV5NmpUU1dmR3k0ZDc3RjNmQVoxTC9wbHN2T3I5YlgxQUJnU2lsLyt0dXZlMVJzNm56ZUJhWE1EaEZXNnh3WmtvSXVmVmRIb2dVT0hFNG1EWEZQTzB2a3lScStEY1ZtRnB4dWFualk0Z3h1N0ROYXo0QXVzPQ&mmp_pid=an_18336740273&uls_trackid=5566dhta01r0&utm_campaign=id_K5w7WcWLyt&utm_content=----&utm_medium=affiliates&utm_source=an_18336740273&utm_term=em5f3i8fg5vw`
  },
  {
    name: "Petisqueira Redonda Flower com 7 Divisórias",
    price: "R$ 19,69",
    rating: 4.7,
    image: "comida.png",
    link: `https://shopee.com.br/opaanlp/1540804628/22793987540?__mobile__=1&exp_group=rollout&gads_t_sig=VTJGc2RHVmtYMTlxTFVSVVRrdENkU1hZSjF1Ym94QW1tdXlLQVFLQ3hjNnVJbW5vUmJMVEgxNENmWlJITkRXK1NpNXl0NkFiRlVwbnQ5WE1QS0F2bTlGMUVlWXYzUG5QUGEwazJFa1ZDZmtkcFFNYWl4N3BOdHI4UGpYc3NxZGFURVd2bFFlV3JGL0s3N3l4dnorMXh4UDIwaGpaVWFWNEVkNEtNN2ZlQ0xZPQ&mmp_pid=an_18336740273&uls_trackid=5566dja800af&utm_campaign=id_ypnvgstlVj&utm_content=----&utm_medium=affiliates&utm_source=an_18336740273&utm_term=em5f4o8yzf3u`
  },
  {
    name: "KIT 1/2/5 Suporte De Parede Multifuncional",
    price: "R$ 10,99",
    rating: 4.7,
    image: "suporte.png",
    link: `https://shopee.com.br/opaanlp/832040275/23096150316?__mobile__=1&exp_group=rollout&gads_t_sig=VTJGc2RHVmtYMTlxTFVSVVRrdENkVEdTU3BlMW9zMXB6bGYrZ0J1VEdQdWVQMWpXRHcxcklXLzV5NmpUU1dmR0l5Si9ORWkvOE8wajB0c3NJYkpHblkvWXk5NmVxOFdhenlqMmZLY3RWS3lSalBxdUp5emYzMHpVc1R1YnluR3dTTWJDaHN1dUdCYlhMNFVSdmxUUGZacXRhOEhiRWQxTDFKL1FCbkdpT2VBPQ&mmp_pid=an_18336740273&uls_trackid=5566dmmk003u&utm_campaign=id_VDqPQNFHqV&utm_content=----&utm_medium=affiliates&utm_source=an_18336740273&utm_term=em5f7ffidk4w`
  }
];

const featured = [
  {
    name: "Calibrador Compressor Pneu Digital Carro Bike Sem Fio",
    description: "Compacto e leve (300g), ideal para encher pneus de carros e outros itens com rapidez. Possui display digital, motor de 40W e acompanha 4 bicos, cabo USB e mangueira extensora para mais praticidade.",
    price: "R$ 75,90",
    link: `https://shopee.com.br/product/432069203/20497420250?exp_group=rollout&gads_t_sig=VTJGc2RHVmtYMTlxTFVSVVRrdENkVEdTU3BlMW9zMXB6bGYrZ0J1VEdQdWtXZlNWQWNDT1k5Y1lxNnVhd2FEekJhTFdudzBKYjVNRU9yODQycVR6MHBlWUxRUDdPcFdnN1dYeXRoRHgyZkg3QVEyTm8vVlNaeFRqTVl0aU5FTm13VjJVQ3B4YUdTbXJrdlpvVE9IclI0ak5vMmR3dEFQc3JRdjM3MjMvVWFnPQ&mmp_pid=an_18336740273&uls_trackid=5566d2sp006m&utm_campaign=id_VcnRo90cqJ&utm_content=----&utm_medium=affiliates&utm_source=an_18336740273&utm_term=em5eq8mymnqu`
  },
  {
    name: "Escova De Limpeza 9 Em1 Recarregavél Elétrica Giratória Com Cabo Alongador",
    description: "Escova elétrica prática e sem fio, ideal para limpar cozinha, banheiro, carro, sofá e azulejos. Possui várias pontas de limpeza, bateria recarregável USB-C e design portátil que facilita a remoção de sujeiras difíceis com rapidez.",
    price: "R$ 69,80",
    link: `https://shopee.com.br/product/1285485572/18698147487?exp_group=rollout&gads_t_sig=VTJGc2RHVmtYMTlxTFVSVVRrdENkU1hZSjF1Ym94QW1tdXlLQVFLQ3hjNWNqc0xWZnFmQTlhNlJ0b1RiNGNUSHNCRHhuVWpySWx4WjNSQ1BvN0JMNkZWV2NMcHRmZ1J6NXNGNGJWT1MxdFg2U010MHJ0SnRoZWJ3alVaeUJYc0RtdTlROGdCZXJpUWtIUEw1b1dqcGM3S0JIUnh2L1pFaHh1azE4UDRJeDl3PQ&mmp_pid=an_18336740273&uls_trackid=5566culg003u&utm_campaign=id_FakMXY9zj1&utm_content=----&utm_medium=affiliates&utm_source=an_18336740273&utm_term=em5ems88txf1`
  },
  {
    name: "Depilador de Sombrancelha Buço Nariz Orelha Rosto",
    description: "Prático e portátil, remove pelos de sobrancelha, buço, nariz e orelha com precisão e sem dor. Possui design compacto, cabeça removível e carregamento USB, ideal para cuidados rápidos no dia a dia",
    price: "R$ 19,99",
    link: `https://shopee.com.br/opaanlp/1215185317/21899305305?__mobile__=1&exp_group=rollout&gads_t_sig=VTJGc2RHVmtYMTlxTFVSVVRrdENkU1hZSjF1Ym94QW1tdXlLQVFLQ3hjN0p5WlN0ajFLTzdqaTlQaERUZG41M3BuSG44UFlBR0lFeHBWc1gwTTRLdko2T1AvbEVDUHVLNG1na0dvZ3NobjZkV2lKTGRLV3o0WStpL0dpR0M1SWN0VFVMTW5Qcm9JNXZyWTZvOXdTT2hBLzdXbWRNQllGL3l0VWtVRzNqQlJvPQ&mmp_pid=an_18336740273&uls_trackid=5566d56h013v&utm_campaign=id_DeUqSCo7T1&utm_content=----&utm_medium=affiliates&utm_source=an_18336740273&utm_term=em5es4s5v4um`
  }
];

function getStars(rating) {
  const full = "★".repeat(Math.floor(rating));
  const empty = "☆".repeat(5 - Math.floor(rating));
  return `${full}${empty} ${rating.toFixed(1)}`;
}

function createProductCard(product) {
  const stats = getFakeStats();

  return `
    <article class="product-card">
      <div class="product-image-wrap">
        <img class="product-image" src="${product.image}" alt="${product.name}" loading="lazy" />
      </div>
      <div class="product-content">
        <h3 class="product-title">${product.name}</h3>

        <div class="fake-stats">
          👀 ${stats.viewing} vendo agora
        </div>

        <div class="price-row">
          <span class="price">${product.price}</span>
          <span class="rating">${getStars(product.rating)}</span>
        </div>

        <div class="fake-sold">
          🔥 ${stats.sold}+ vendidos hoje
        </div>

        <a class="product-link" href="${product.link}" target="_blank" rel="noopener noreferrer">
          🔥 Comprar Agora
        </a>
      </div>
    </article>
  `;
  function getFakeStats() {
  const viewing = Math.floor(Math.random() * 40) + 10;
  const sold = Math.floor(Math.random() * 500) + 50;
  return {
    viewing,
    sold
  };
}
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
