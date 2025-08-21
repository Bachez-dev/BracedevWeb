const TEMPLATES = [
  {
    id: 'modern-business',
    title: 'Modern Business',
    desc: 'Clean corporate website for agencies and startups.',
    price: 29,
    tags: ['Business', 'SaaS', 'Landing'],
    thumb: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop',
    screenshot: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?q=80&w=1400&auto=format&fit=crop',
    demo: 'https://example.com/template1',
    buy: '#'
  },
  {
    id: 'portfolio-pro',
    title: 'Portfolio Pro',
    desc: 'Showcase your work with elegant galleries.',
    price: 24,
    tags: ['Portfolio', 'Creator', 'Minimal'],
    thumb: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
    screenshot: 'https://images.unsplash.com/photo-1521939094609-93aba1af40d4?q=80&w=1400&auto=format&fit=crop',
    demo: 'https://example.com/template2',
    buy: '#'
  },
  {
    id: 'elegant-blog',
    title: 'Elegant Blog',
    desc: 'Typography-first layout for writers & bloggers.',
    price: 19,
    tags: ['Blog', 'Content', 'Magazine'],
    thumb: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop',
    screenshot: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1400&auto=format&fit=crop',
    demo: 'https://example.com/template3',
    buy: '#'
  },
  {
    id: 'startup-hero',
    title: 'Startup Hero',
    desc: 'Conversion-focused landing page with CTA blocks.',
    price: 32,
    tags: ['Startup', 'Landing', 'Marketing'],
    thumb: 'https://images.unsplash.com/photo-1551281044-8ea9f52f26e3?q=80&w=1200&auto=format&fit=crop',
    screenshot: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1400&auto=format&fit=crop',
    demo: 'https://example.com/template4',
    buy: '#'
  },
  {
    id: 'modern-business',
    title: 'Modern Business',
    desc: 'Clean corporate website for agencies and startups.',
    price: 29,
    tags: ['Business', 'SaaS', 'Landing'],
    thumb: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop',
    screenshot: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?q=80&w=1400&auto=format&fit=crop',
    demo: 'https://example.com/template1',
    buy: '#'
  },
  {
    id: 'portfolio-pro',
    title: 'Portfolio Pro',
    desc: 'Showcase your work with elegant galleries.',
    price: 24,
    tags: ['Portfolio', 'Creator', 'Minimal'],
    thumb: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
    screenshot: 'https://images.unsplash.com/photo-1521939094609-93aba1af40d4?q=80&w=1400&auto=format&fit=crop',
    demo: 'https://example.com/template2',
    buy: '#'
  },
  {
    id: 'elegant-blog',
    title: 'Elegant Blog',
    desc: 'Typography-first layout for writers & bloggers.',
    price: 19,
    tags: ['Blog', 'Content', 'Magazine'],
    thumb: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop',
    screenshot: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1400&auto=format&fit=crop',
    demo: 'https://example.com/template3',
    buy: '#'
  },
  {
    id: 'startup-hero',
    title: 'Startup Hero',
    desc: 'Conversion-focused landing page with CTA blocks.',
    price: 32,
    tags: ['Startup', 'Landing', 'Marketing'],
    thumb: 'https://images.unsplash.com/photo-1551281044-8ea9f52f26e3?q=80&w=1200&auto=format&fit=crop',
    screenshot: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1400&auto=format&fit=crop',
    demo: 'https://example.com/template4',
    buy: '#'
  },
  {
    id: 'modern-business',
    title: 'Modern Business',
    desc: 'Clean corporate website for agencies and startups.',
    price: 29,
    tags: ['Business', 'SaaS', 'Landing'],
    thumb: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop',
    screenshot: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?q=80&w=1400&auto=format&fit=crop',
    demo: 'https://example.com/template1',
    buy: '#'
  },
  {
    id: 'portfolio-pro',
    title: 'Portfolio Pro',
    desc: 'Showcase your work with elegant galleries.',
    price: 24,
    tags: ['Portfolio', 'Creator', 'Minimal'],
    thumb: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
    screenshot: 'https://images.unsplash.com/photo-1521939094609-93aba1af40d4?q=80&w=1400&auto=format&fit=crop',
    demo: 'https://example.com/template2',
    buy: '#'
  },
  {
    id: 'elegant-blog',
    title: 'Elegant Blog',
    desc: 'Typography-first layout for writers & bloggers.',
    price: 19,
    tags: ['Blog', 'Content', 'Magazine'],
    thumb: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop',
    screenshot: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1400&auto=format&fit=crop',
    demo: 'https://example.com/template3',
    buy: '#'
  },
  {
    id: 'startup-hero',
    title: 'Startup Hero',
    desc: 'Conversion-focused landing page with CTA blocks.',
    price: 32,
    tags: ['Startup', 'Landing', 'Marketing'],
    thumb: 'https://images.unsplash.com/photo-1551281044-8ea9f52f26e3?q=80&w=1200&auto=format&fit=crop',
    screenshot: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1400&auto=format&fit=crop',
    demo: 'https://example.com/template4',
    buy: '#'
  }
  ,
  {
    id: 'modern-business',
    title: 'Modern Business',
    desc: 'Clean corporate website for agencies and startups.',
    price: 29,
    tags: ['Business', 'SaaS', 'Landing'],
    thumb: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop',
    screenshot: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?q=80&w=1400&auto=format&fit=crop',
    demo: 'https://example.com/template1',
    buy: '#'
  },
  {
    id: 'portfolio-pro',
    title: 'Portfolio Pro',
    desc: 'Showcase your work with elegant galleries.',
    price: 24,
    tags: ['Portfolio', 'Creator', 'Minimal'],
    thumb: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
    screenshot: 'https://images.unsplash.com/photo-1521939094609-93aba1af40d4?q=80&w=1400&auto=format&fit=crop',
    demo: 'https://example.com/template2',
    buy: '#'
  },
  {
    id: 'elegant-blog',
    title: 'Elegant Blog',
    desc: 'Typography-first layout for writers & bloggers.',
    price: 19,
    tags: ['Blog', 'Content', 'Magazine'],
    thumb: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop',
    screenshot: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1400&auto=format&fit=crop',
    demo: 'https://example.com/template3',
    buy: '#'
  },
  {
    id: 'startup-hero',
    title: 'Startup Hero',
    desc: 'Conversion-focused landing page with CTA blocks.',
    price: 32,
    tags: ['Startup', 'Landing', 'Marketing'],
    thumb: 'https://images.unsplash.com/photo-1551281044-8ea9f52f26e3?q=80&w=1200&auto=format&fit=crop',
    screenshot: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1400&auto=format&fit=crop',
    demo: 'https://example.com/template4',
    buy: '#'
  }
  ,
  {
    id: 'modern-business',
    title: 'Modern Business',
    desc: 'Clean corporate website for agencies and startups.',
    price: 29,
    tags: ['Business', 'SaaS', 'Landing'],
    thumb: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop',
    screenshot: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?q=80&w=1400&auto=format&fit=crop',
    demo: 'https://example.com/template1',
    buy: '#'
  },
  {
    id: 'portfolio-pro',
    title: 'Portfolio Pro',
    desc: 'Showcase your work with elegant galleries.',
    price: 24,
    tags: ['Portfolio', 'Creator', 'Minimal'],
    thumb: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
    screenshot: 'https://images.unsplash.com/photo-1521939094609-93aba1af40d4?q=80&w=1400&auto=format&fit=crop',
    demo: 'https://example.com/template2',
    buy: '#'
  },
  {
    id: 'elegant-blog',
    title: 'Elegant Blog',
    desc: 'Typography-first layout for writers & bloggers.',
    price: 19,
    tags: ['Blog', 'Content', 'Magazine'],
    thumb: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop',
    screenshot: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1400&auto=format&fit=crop',
    demo: 'https://example.com/template3',
    buy: '#'
  },
  {
    id: 'startup-hero',
    title: 'Startup Hero',
    desc: 'Conversion-focused landing page with CTA blocks.',
    price: 32,
    tags: ['Startup', 'Landing', 'Marketing'],
    thumb: 'https://images.unsplash.com/photo-1551281044-8ea9f52f26e3?q=80&w=1200&auto=format&fit=crop',
    screenshot: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1400&auto=format&fit=crop',
    demo: 'https://example.com/template4',
    buy: '#'
  }
  ,
  {
    id: 'modern-business',
    title: 'Modern Business',
    desc: 'Clean corporate website for agencies and startups.',
    price: 29,
    tags: ['Business', 'SaaS', 'Landing'],
    thumb: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop',
    screenshot: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?q=80&w=1400&auto=format&fit=crop',
    demo: 'https://example.com/template1',
    buy: '#'
  },
  {
    id: 'portfolio-pro',
    title: 'Portfolio Pro',
    desc: 'Showcase your work with elegant galleries.',
    price: 24,
    tags: ['Portfolio', 'Creator', 'Minimal'],
    thumb: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
    screenshot: 'https://images.unsplash.com/photo-1521939094609-93aba1af40d4?q=80&w=1400&auto=format&fit=crop',
    demo: 'https://example.com/template2',
    buy: '#'
  },
  {
    id: 'elegant-blog',
    title: 'Elegant Blog',
    desc: 'Typography-first layout for writers & bloggers.',
    price: 19,
    tags: ['Blog', 'Content', 'Magazine'],
    thumb: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop',
    screenshot: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1400&auto=format&fit=crop',
    demo: 'https://example.com/template3',
    buy: '#'
  },
  {
    id: 'startup-hero',
    title: 'Startup Hero',
    desc: 'Conversion-focused landing page with CTA blocks.',
    price: 32,
    tags: ['Startup', 'Landing', 'Marketing'],
    thumb: 'https://images.unsplash.com/photo-1551281044-8ea9f52f26e3?q=80&w=1200&auto=format&fit=crop',
    screenshot: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1400&auto=format&fit=crop',
    demo: 'https://example.com/template4',
    buy: '#'
  }
];

const grid = document.getElementById('grid');
grid.innerHTML = TEMPLATES.map((t, idx) => `
      <article class="card" data-index="${idx}">
        <img class="thumb" src="${t.thumb}" alt="${t.title} preview"/>
        <div class="body">
          <h3 class="title">${t.title}</h3>
          <p class="desc">${t.desc}</p>
          <div class="tags">${t.tags.map(tag => `<span class='tag'>${tag}</span>`).join('')}</div>
          <div class="row">
            <div class="price">$${t.price}</div>
            <div class="row" style="gap:8px">
              <button class="btn secondary" data-action="demo">Preview</button>
              <button class="btn" data-action="buy">Buy</button>
            </div>
          </div>
        </div>
      </article>
    `).join('')
;