// Sample Data: History of the Printed Book
const bookHistoryEvents = [
  {
    id: "evt-3000bce",
    date: "3000 BCE",
    summary: "Clay Tablets in Mesopotamia",
    title: "Cuneiform Tablets of Mesopotamia",
    content: "The Sumerians developed cuneiform script written on wet clay tablets. Kept in organized state archives, these tablets recorded administrative, political, and spiritual accounts, establishing the foundation of permanent document storage.",
    tags: ["technology", "cultural"]
  },
  {
    id: "evt-2ndbce",
    date: "2nd Century BCE",
    summary: "Invention of Parchment",
    title: "Parchment Offers an Alternative to Papyrus",
    content: "Developed in Pergamon as an alternative to scarce Egyptian papyrus, parchment made from processed animal skins offered unprecedented durability. It allowed pages to be folded and written on both sides, setting the stage for the codex.",
    tags: ["technology"]
  },
  {
    id: "evt-105ce",
    date: "105 CE",
    summary: "Invention of Paper in China",
    title: "Cai Lun Invents Rag Paper",
    content: "In Han Dynasty China, court official Cai Lun synthesized papermaking using mulberry bark, hemp, rags, and water. This highly cost-effective, lightweight surface slowly migrated westward, eventually replacing parchment in Europe centuries later.",
    tags: ["technology", "business"]
  },
  {
    id: "evt-868ce",
    date: "868 CE",
    summary: "The Diamond Sutra Printed",
    title: "The World's Oldest Dated Printed Book",
    content: "A woodblock printed Buddhist text discovered in Dunhuang, China, represents the earliest known dated, complete book. The craftsmanship reveals a highly sophisticated technology of block printing that preceded western developments by centuries.",
    tags: ["cultural", "technology"]
  },
  {
    id: "evt-1040ce",
    date: "1040 CE",
    summary: "Bi Sheng's Movable Type",
    title: "First Movable Type Invented in China",
    content: "Bi Sheng created clay movable type during the Song dynasty. While the vast quantity of Chinese characters made the technology complex to manage, this invention marked the conceptual birth of modular typesetting.",
    tags: ["technology"]
  },
  {
    id: "evt-1440ce",
    date: "1440 CE",
    summary: "Gutenberg's Printing Press",
    title: "Johannes Gutenberg's Metal Alloy Press",
    content: "In Mainz, Germany, silversmith Johannes Gutenberg synthesized durable oil-based inks, a hand mold for casting metal type, and a wooden screw press. This breakthrough allowed rapid, uniform replication of text for the first time in Europe.",
    tags: ["technology", "business"]
  },
  {
    id: "evt-1455ce",
    date: "1455 CE",
    summary: "The Gutenberg Bible",
    title: "The Forty-Two-Line Bible is Completed",
    content: "Marking the commercial debut of Europe's movable type, the Gutenberg Bible proved that machine-printed books could match the aesthetic beauty of manuscript codices. Its success initiated the rapid rise of print shops across the continent.",
    tags: ["cultural", "business"]
  },
  {
    id: "evt-1501ce",
    date: "1501 CE",
    summary: "Aldus Manutius & the Octavo",
    title: "Aldus Manutius Standardizes the Pocket Book",
    content: "In Venice, printer Aldus Manutius introduced the 'octavo' format—portable, smaller volumes that did not require a heavy desk to read. He also introduced italic type to fit more text on smaller pages, democratizing casual daily reading.",
    tags: ["business", "cultural"]
  },
  {
    id: "evt-1605ce",
    date: "1605 CE",
    summary: "The First Newspaper",
    title: "Public Sphere Born with 'Relation'",
    content: "Johann Carolus began printing the first regular weekly newspaper in Strasbourg. High-speed, high-density print runs revolutionized how communities processed current affairs, giving birth to modern journalism and political discourse.",
    tags: ["business", "cultural"]
  },
  {
    id: "evt-1843ce",
    date: "1843 CE",
    summary: "The Rotary Printing Press",
    title: "Industrial-Scale Printing Arrives",
    content: "Richard March Hoe patented the rotary printing press in the United States, replacing flatbed systems with continuous rotating cylinders. This allowed tens of thousands of newspaper pages to be printed hourly, feeding a mass-literacy market.",
    tags: ["technology", "business"]
  },
  {
    id: "evt-1971ce",
    date: "1971 CE",
    summary: "Project Gutenberg (E-Books)",
    title: "Michael S. Hart Digitizes the Declaration of Independence",
    content: "By typing the United States Declaration of Independence into a mainframe computer, Michael S. Hart launched Project Gutenberg. This created the world's first e-book and established the world's oldest digital open-access library.",
    tags: ["technology", "cultural"]
  },
  {
    id: "evt-2007ce",
    date: "2007 CE",
    summary: "Launch of the Kindle",
    title: "E-ink and Ecosystems Collide",
    content: "Amazon launched the Kindle e-reader, utilizing high-contrast electronic ink screens. Backed by a seamless instant-download digital ecosystem, electronic books established a permanent, mainstream market foothold.",
    tags: ["business", "technology"]
  }
];

const timelineBar = document.getElementById('timeline-bar');
const articleArea = document.getElementById('article-area');
const mobileTimeline = document.getElementById('mobile-timeline');
const headerLogo = document.querySelector('.header-logo');
const mainContent = document.querySelector('.main-content');
const homeView = document.getElementById('home-view');
const backButton = document.getElementById('back-button');
const subheader = document.getElementById('subheader');

// 1. Render Elements Dynamically
function renderLayout() {
  timelineBar.innerHTML = '';
  articleArea.innerHTML = '';
  mobileTimeline.innerHTML = '';

  bookHistoryEvents.forEach((evt) => {
    // Render timeline line
    const line = document.createElement('div');
    line.className = 'timeline-line';
    line.setAttribute('data-target', evt.id);
    line.setAttribute('data-tags', evt.tags.join(' '));
    
    line.innerHTML = `
      <div class="label">
        <span class="label-date">${evt.date}</span>
        <span class="label-sum">${evt.summary}</span>
      </div>
    `;
    timelineBar.appendChild(line);

    // Render collapsible article card
    const card = document.createElement('article');
    card.className = 'article-card';
    card.id = evt.id;
    card.setAttribute('data-tags', evt.tags.join(' '));
    
    const tagBadges = evt.tags.map(t => `<span class="card-tag">${t}</span>`).join('');

    card.innerHTML = `
      <div class="article-card-header">
        <h2>${evt.title}</h2>
        <span class="article-toggle">▼</span>
      </div>
      <div class="article-card-content">
        <div class="card-meta">
          <span>${evt.date}</span>
          ${tagBadges}
        </div>
        <p>${evt.content}</p>
      </div>
    `;
    articleArea.appendChild(card);

    // Render mobile timeline item
    const mobileItem = document.createElement('div');
    mobileItem.className = 'mobile-timeline-item';
    mobileItem.setAttribute('data-target', evt.id);
    mobileItem.setAttribute('data-tags', evt.tags.join(' '));
    mobileItem.innerHTML = `
      <div class="mobile-timeline-date">${evt.date}</div>
      <div class="mobile-timeline-title">${evt.summary}</div>
    `;
    mobileTimeline.appendChild(mobileItem);
  });

  setupTimelineInteractions();
}

renderLayout();

// Setup timeline interactions
function setupTimelineInteractions() {
  const lines = Array.from(document.querySelectorAll('.timeline-line'));
  const articles = Array.from(document.querySelectorAll('.article-card'));
  const mobileItems = Array.from(document.querySelectorAll('.mobile-timeline-item'));

  let collapseTimeoutId = null;

  // 2. Interactive "Peak" Magnifying Hover Effect
  lines.forEach((line, index) => {
    line.addEventListener('mouseenter', () => {
      if (collapseTimeoutId) {
        clearTimeout(collapseTimeoutId);
        collapseTimeoutId = null;
      }

      lines.forEach(l => l.classList.remove('hovered', 'hovered-above', 'hovered-below', 'hovered-near'));
      
      line.classList.add('hovered');
      
      if (index > 0) lines[index - 1].classList.add('hovered-above');
      if (index < lines.length - 1) lines[index + 1].classList.add('hovered-below');
      
      if (index > 1) lines[index - 2].classList.add('hovered-near');
      if (index < lines.length - 2) lines[index + 2].classList.add('hovered-near');
    });

    line.addEventListener('mouseleave', () => {
      collapseTimeoutId = setTimeout(() => {
        lines.forEach(l => l.classList.remove('hovered', 'hovered-above', 'hovered-below', 'hovered-near'));
      }, 800);
    });

    line.addEventListener('click', () => {
      const targetId = line.getAttribute('data-target');
      const targetArticle = document.getElementById(targetId);
      if (targetArticle) {
        targetArticle.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  });

  // 3. Collapsible Articles - Click Header to Toggle
  articles.forEach((card) => {
    const header = card.querySelector('.article-card-header');
    header.addEventListener('click', (e) => {
      e.stopPropagation();
      card.classList.toggle('expanded');
    });
  });

  // 4. Mobile Timeline Item Clicks
  mobileItems.forEach((item) => {
    item.addEventListener('click', () => {
      const targetId = item.getAttribute('data-target');
      const targetArticle = document.getElementById(targetId);
      
      mobileItems.forEach(mi => mi.classList.remove('active'));
      item.classList.add('active');
      
      if (targetArticle) {
        targetArticle.scrollIntoView({ behavior: 'smooth', block: 'center' });
        targetArticle.classList.add('expanded');
      }
    });
  });

  // 5. Continuous Scroll Sync
  const observerOptions = {
    root: articleArea,
    rootMargin: '-30% 0px -50% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const activeId = entry.target.id;
        
        lines.forEach(line => {
          if (line.getAttribute('data-target') === activeId) {
            line.classList.add('active');
          } else {
            line.classList.remove('active');
          }
        });

        mobileItems.forEach(item => {
          if (item.getAttribute('data-target') === activeId) {
            item.classList.add('active');
          } else {
            item.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  articles.forEach(article => observer.observe(article));
}

// 6. Filtering System
const filterButtons = document.querySelectorAll('.filter-btn');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filterVal = btn.getAttribute('data-filter');
    const lines = Array.from(document.querySelectorAll('.timeline-line'));
    const articles = Array.from(document.querySelectorAll('.article-card'));
    const mobileItems = Array.from(document.querySelectorAll('.mobile-timeline-item'));

    let firstVisibleArticle = null;

    articles.forEach((art, index) => {
      const artTags = art.getAttribute('data-tags').split(' ');
      const correspondingLine = lines[index];
      const correspondingMobile = mobileItems[index];

      if (filterVal === 'all' || artTags.includes(filterVal)) {
        art.classList.remove('filtered-out');
        correspondingLine.classList.remove('filtered-out');
        correspondingMobile.style.display = 'block';
        
        if (!firstVisibleArticle) {
          firstVisibleArticle = art;
        }
      } else {
        art.classList.add('filtered-out');
        correspondingLine.classList.add('filtered-out');
        correspondingMobile.style.display = 'none';
      }
    });

    if (firstVisibleArticle) {
      firstVisibleArticle.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });
});

// 7. Navigation between views
headerLogo.addEventListener('click', () => {
  mainContent.style.display = 'none';
  homeView.style.display = 'block';
  subheader.classList.add('hidden');
});

backButton.addEventListener('click', () => {
  homeView.style.display = 'none';
  mainContent.style.display = 'flex';
  subheader.classList.remove('hidden');
});