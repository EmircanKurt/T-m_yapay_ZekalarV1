// AI Tools and Prompts Data
const aiTools = [
    {
        id: 1,
        name: "ChatGPT",
        category: "yazma",
        pricing: "Freemium",
        description: "OpenAI tarafından geliştirilen gelişmiş dil modeli. Metin yazma, soru cevaplama, kod yazma gibi birçok görevde kullanılabilir.",
        features: ["Doğal dil işleme", "Kod yazma", "Metin çevirisi", "Yaratıcı yazım", "Problem çözme"],
        link: "https://chat.openai.com",
        prompts: [
            "Bir blog yazısı için 10 başlık önerisi ver: [konu]",
            "Bu metni daha çekici hale getir: [metin]",
            "X konusunda 5 paragraflik bir makale yaz",
            "Bu ürün için pazarlama metni oluştur: [ürün bilgisi]"
        ]
    },
    {
        id: 2,
        name: "DALL-E 3",
        category: "gorsel",
        pricing: "Ücretli",
        description: "OpenAI'ın metin açıklamalarından yüksek kaliteli görseller üreten yapay zeka aracı.",
        features: ["Metin'den görsel", "Yüksek çözünürlük", "Sanatsal stiller", "Konsept tasarım"],
        link: "https://openai.com/dall-e-3",
        prompts: [
            "Modern minimalist logo tasarla: [şirket adı]",
            "Fütüristik şehir manzarası, neon ışıklar, gece",
            "Sürreal sanat tarzında [konu] görseli",
            "Ürün mockup'ı: [ürün açıklaması]"
        ]
    },
    {
        id: 3,
        name: "Midjourney",
        category: "gorsel",
        pricing: "Ücretli",
        description: "Discord üzerinden çalışan sanatsal görsel üretim AI'ı. Özellikle yaratıcı ve sanatsal projeler için ideal.",
        features: ["Sanatsal görseller", "Yüksek kalite", "Stil kontrolü", "Topluluuk desteği"],
        link: "https://midjourney.com",
        prompts: [
            "photorealistic [konu] --ar 16:9 --v 6",
            "minimalist logo design for [brand] --style raw",
            "fantasy landscape with [elements] --quality 2",
            "portrait photography [description] --ar 3:4"
        ]
    },
    {
        id: 4,
        name: "GitHub Copilot",
        category: "kod",
        pricing: "Ücretli",
        description: "GitHub ve OpenAI işbirliğiyle geliştirilen AI kod asistanı. Gerçek zamanlı kod önerileri sunar.",
        features: ["Kod tamamlama", "Fonksiyon yazma", "Bug düzeltme", "Kod açıklaması"],
        link: "https://github.com/features/copilot",
        prompts: [
            "// Function to [açıklama]",
            "# Create a [dil] script that [görev]",
            "/* TODO: [yapılacak iş] */",
            "// Optimize this code for [hedef]"
        ]
    },
    {
        id: 5,
        name: "ElevenLabs",
        category: "ses",
        pricing: "Freemium",
        description: "Gerçekçi ses klonlama ve metin okuma yapay zekası. Çok dilli destek ve özel ses modelleri.",
        features: ["Ses klonlama", "Metin okuma", "Çok dilli", "Özel ses modelleri"],
        link: "https://elevenlabs.io",
        prompts: [
            "Bu metni [ses tonu] ile oku: [metin]",
            "Podcast için giriş sesi oluştur: [içerik]",
            "Reklam seslendirmesi: [reklam metni]",
            "E-kitap sesli versiyonu için: [bölüm]"
        ]
    },
    {
        id: 6,
        name: "Runway ML",
        category: "video",
        pricing: "Freemium",
        description: "Video düzenleme ve AI video üretimi için gelişmiş araçlar sunan platform.",
        features: ["AI video üretimi", "Video düzenleme", "Efekt ekleme", "Arka plan değiştirme"],
        link: "https://runwayml.com",
        prompts: [
            "Video'dan belirli nesneleri kaldır: [nesne]",
            "Bu video için slow motion efekti ekle",
            "Video arka planını değiştir: [yeni arka plan]",
            "Metin'den video oluştur: [açıklama]"
        ]
    },
    {
        id: 7,
        name: "Jasper AI",
        category: "yazma",
        pricing: "Ücretli",
        description: "Pazarlama odaklı yapay zeka yazım asistanı. Blog yazıları, reklamlar ve sosyal medya içerikleri için ideal.",
        features: ["Blog yazma", "Reklam metinleri", "Sosyal medya", "E-posta pazarlama"],
        link: "https://jasper.ai",
        prompts: [
            "Blog yazısı yaz: [başlık] [hedef kitle]",
            "Facebook reklamı oluştur: [ürün] [hedef]",
            "Instagram caption'ı: [içerik] [hashtag'ler]",
            "E-posta pazarlama metni: [kampanya]"
        ]
    },
    {
        id: 8,
        name: "Synthesia",
        category: "video",
        pricing: "Ücretli",
        description: "AI avatarlar kullanarak video oluşturma platformu. Eğitim ve sunum videoları için mükemmel.",
        features: ["AI avatarlar", "Çok dilli sunum", "Özel avatarlar", "Marka entegrasyonu"],
        link: "https://synthesia.io",
        prompts: [
            "Eğitim videosu: [konu] [süre]",
            "Şirket tanıtım sunumu: [şirket bilgisi]",
            "Ürün lansmanı videosu: [ürün detayları]",
            "Müşteri onayı videosu: [testimonial]"
        ]
    },
    {
        id: 9,
        name: "Notion AI",
        category: "is",
        pricing: "Freemium",
        description: "Notion içine entegre AI asistanı. Dokümantasyon, not alma ve proje yönetimi için güçlü özellikler.",
        features: ["Metin yazma", "Özetleme", "Çeviri", "Tablo oluşturma"],
        link: "https://notion.so",
        prompts: [
            "Bu notları özetle: [notlar]",
            "Proje planı oluştur: [proje detayları]",
            "Meeting notlarını düzenle: [notlar]",
            "İçerik takvimi hazırla: [konu] [süre]"
        ]
    },
    {
        id: 10,
        name: "Canva AI",
        category: "gorsel",
        pricing: "Freemium",
        description: "Canva'nın AI destekli tasarım araçları. Otomatik tasarım önerileri ve Magic Resize gibi özellikler.",
        features: ["Otomatik tasarım", "Magic Resize", "Arka plan kaldırma", "Brand Kit"],
        link: "https://canva.com",
        prompts: [
            "Logo tasarla: [şirket] [sektör] [stil]",
            "Sosyal medya görseli: [platform] [içerik]",
            "Sunum şablonu: [konu] [sayfa sayısı]",
            "İnfografik: [veri] [stil]"
        ]
    },
    // Daha fazla araç eklenebilir...
];

const promptCategories = {
    content: [
        {
            title: "Blog Yazısı Başlıkları",
            tags: ["SEO", "Blog", "Başlık"],
            content: "10 çekici blog yazısı başlığı oluştur: [konu]. Başlıklar SEO dostu, tıklanabilir ve hedef kitlenin ilgisini çekecek şekilde olsun.",
            tools: ["ChatGPT", "Jasper AI", "Copy.ai"]
        },
        {
            title: "Sosyal Medya İçeriği",
            tags: ["Instagram", "Twitter", "LinkedIn"],
            content: "[Platform] için 5 farklı post önerisi oluştur. Konunuz: [konu]. Her post farklı format olsun (soru, ipucu, hikaye, istatistik, alıntı).",
            tools: ["ChatGPT", "Jasper AI", "Later"]
        },
        {
            title: "Video Script Yazımı",
            tags: ["YouTube", "TikTok", "Video"],
            content: "[Süre] dakikalık [platform] videosu için script yaz. Konu: [konu]. Hook, ana içerik ve CTA içersin.",
            tools: ["ChatGPT", "Jasper AI", "Synthesia"]
        }
    ],
    marketing: [
        {
            title: "Email Pazarlama",
            tags: ["Email", "Newsletter", "Dönüşüm"],
            content: "[Ürün/Hizmet] için email pazarlama serisini oluştur. 5 farklı email: Hoşgeldin, değer sunma, sosyal kanıt, aciliyet, son şans.",
            tools: ["ChatGPT", "Mailchimp", "ConvertKit"]
        },
        {
            title: "Ürün Açıklaması",
            tags: ["E-ticaret", "Ürün", "Satış"],
            content: "[Ürün] için ikna edici ürün açıklaması yaz. Özellikleri faydaya çevir, hedef kitlenin dil tarzını kullan ve CTA ekle.",
            tools: ["ChatGPT", "Copy.ai", "Jasper AI"]
        }
    ],
    design: [
        {
            title: "Logo Tasarım Prompts",
            tags: ["Logo", "Marka", "Tasarım"],
            content: "[Şirket adı] için minimalist logo tasarla. Sektör: [sektör]. Renkler: [renkler]. Stil: modern, temiz, profesyonel.",
            tools: ["DALL-E", "Midjourney", "Canva AI"]
        },
        {
            title: "Web Sitesi Mockup",
            tags: ["Web", "UI", "Mockup"],
            content: "[İş türü] için landing page tasarımı. Modern, responsive, [renk paleti] kullan. Header, hero section, özellikler ve CTA dahil et.",
            tools: ["DALL-E", "Figma AI", "Canva AI"]
        }
    ],
    business: [
        {
            title: "İş Planı Oluşturma",
            tags: ["İş Planı", "Girişim", "Strateji"],
            content: "[İş fikri] için detaylı iş planı oluştur. Pazar analizi, hedef kitle, gelir modeli, pazarlama stratejisi ve finansal projeksiyonlar dahil et.",
            tools: ["ChatGPT", "Notion AI", "Claude"]
        },
        {
            title: "SWOT Analizi",
            tags: ["Analiz", "Strateji", "Karar"],
            content: "[Şirket/Proje] için SWOT analizi yap. Güçlü yönler, zayıf yönler, fırsatlar ve tehditleri detaylı şekilde analiz et.",
            tools: ["ChatGPT", "Claude", "Notion AI"]
        }
    ]
};

// Global variables
let currentToolsPage = 1;
let currentPromptsPage = 1;
let filteredTools = [...aiTools];
let filteredPrompts = [];
const toolsPerPage = 12;
const promptsPerPage = 10;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    loadTools();
    loadPrompts('all');
    setupEventListeners();
    setupAnimations();
});

// Navigation functionality
function initializeNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
            
            // Update active link
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            // Close mobile menu
            navMenu.classList.remove('active');
        });
    });
}

// Smooth scroll to section
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const navHeight = document.querySelector('.navbar').offsetHeight;
        const elementPosition = element.offsetTop - navHeight;
        
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    }
}

// Load AI tools
function loadTools() {
    const toolsGrid = document.getElementById('toolsGrid');
    const startIndex = (currentToolsPage - 1) * toolsPerPage;
    const endIndex = startIndex + toolsPerPage;
    const toolsToShow = filteredTools.slice(startIndex, endIndex);

    if (currentToolsPage === 1) {
        toolsGrid.innerHTML = '';
    }

    toolsToShow.forEach(tool => {
        const toolCard = createToolCard(tool);
        toolsGrid.appendChild(toolCard);
    });

    // Update load more button
    const loadMoreBtn = document.getElementById('loadMoreTools');
    if (endIndex >= filteredTools.length) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'block';
    }
}

// Create tool card
function createToolCard(tool) {
    const card = document.createElement('div');
    card.className = 'tool-card';
    card.onclick = () => openToolModal(tool);
    
    card.innerHTML = `
        <div class="tool-header">
            <div class="tool-info">
                <h3 class="tool-name">${tool.name}</h3>
                <span class="tool-category">${getCategoryName(tool.category)}</span>
            </div>
            <span class="tool-pricing">${tool.pricing}</span>
        </div>
        <p class="tool-description">${tool.description}</p>
        <div class="tool-features">
            <h4>Özellikler:</h4>
            <div class="features-list">
                ${tool.features.map(feature => `<span class="feature-tag">${feature}</span>`).join('')}
            </div>
        </div>
        <div class="tool-actions">
            <button class="btn btn-primary btn-sm" onclick="event.stopPropagation(); window.open('${tool.link}', '_blank')">
                <i class="fas fa-external-link-alt"></i>
                Kullan
            </button>
            <button class="btn btn-secondary btn-sm" onclick="event.stopPropagation(); showToolPrompts(${tool.id})">
                <i class="fas fa-magic"></i>
                Prompts
            </button>
        </div>
    `;
    
    return card;
}

// Get category name in Turkish
function getCategoryName(category) {
    const categoryNames = {
        'yazma': 'Yazma & İçerik',
        'gorsel': 'Görsel & Tasarım',
        'video': 'Video & Animasyon',
        'kod': 'Kodlama',
        'ses': 'Ses & Müzik',
        'analiz': 'Analiz & Veri',
        'egitim': 'Eğitim',
        'is': 'İş & Verimlilik'
    };
    return categoryNames[category] || category;
}

// Load prompts
function loadPrompts(category) {
    const promptsGrid = document.getElementById('promptsGrid');
    const categoryTitle = document.getElementById('currentPromptCategory');
    
    // Update category title
    const categoryNames = {
        'all': 'Tüm Prompts',
        'content': 'İçerik Üretimi',
        'marketing': 'Pazarlama',
        'design': 'Tasarım & Görsel',
        'business': 'İş Geliştirme',
        'coding': 'Kodlama',
        'social': 'Sosyal Medya',
        'education': 'Eğitim & Öğretim',
        'writing': 'Yaratıcı Yazım',
        'analysis': 'Analiz & Araştırma',
        'automation': 'Otomasyon'
    };
    
    categoryTitle.textContent = categoryNames[category] || 'Tüm Prompts';
    
    // Get prompts for category
    if (category === 'all') {
        filteredPrompts = Object.values(promptCategories).flat();
    } else {
        filteredPrompts = promptCategories[category] || [];
    }
    
    // Clear and load prompts
    promptsGrid.innerHTML = '';
    currentPromptsPage = 1;
    
    const startIndex = 0;
    const endIndex = promptsPerPage;
    const promptsToShow = filteredPrompts.slice(startIndex, endIndex);
    
    promptsToShow.forEach(prompt => {
        const promptCard = createPromptCard(prompt);
        promptsGrid.appendChild(promptCard);
    });
    
    // Update load more button
    const loadMoreBtn = document.getElementById('loadMorePrompts');
    if (endIndex >= filteredPrompts.length) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'block';
    }
}

// Create prompt card
function createPromptCard(prompt) {
    const card = document.createElement('div');
    card.className = 'prompt-card';
    
    card.innerHTML = `
        <div class="prompt-header">
            <h3 class="prompt-title">${prompt.title}</h3>
        </div>
        <div class="prompt-tags">
            ${prompt.tags.map(tag => `<span class="prompt-tag">${tag}</span>`).join('')}
        </div>
        <div class="prompt-content">${prompt.content}</div>
        <div class="prompt-meta">
            <small>Uyumlu araçlar: ${prompt.tools.join(', ')}</small>
        </div>
        <div class="prompt-actions">
            <button class="btn-copy" onclick="copyPrompt('${prompt.content.replace(/'/g, "\\'")}')">
                <i class="fas fa-copy"></i>
                Kopyala
            </button>
        </div>
    `;
    
    return card;
}

// Open tool modal
function openToolModal(tool) {
    const modal = document.getElementById('toolModal');
    const modalToolName = document.getElementById('modalToolName');
    const modalToolCategory = document.getElementById('modalToolCategory');
    const modalToolPricing = document.getElementById('modalToolPricing');
    const modalToolDescription = document.getElementById('modalToolDescription');
    const modalToolFeatures = document.getElementById('modalToolFeatures');
    const modalToolPrompts = document.getElementById('modalToolPrompts');
    const modalToolLink = document.getElementById('modalToolLink');
    
    modalToolName.textContent = tool.name;
    modalToolCategory.textContent = getCategoryName(tool.category);
    modalToolCategory.className = `tool-category`;
    modalToolPricing.textContent = tool.pricing;
    modalToolDescription.textContent = tool.description;
    modalToolLink.href = tool.link;
    
    // Features
    modalToolFeatures.innerHTML = tool.features.map(feature => `<li>${feature}</li>`).join('');
    
    // Prompts
    modalToolPrompts.innerHTML = tool.prompts.map(prompt => 
        `<div class="modal-prompt">${prompt}</div>`
    ).join('');
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    const modal = document.getElementById('toolModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Copy prompt to clipboard
function copyPrompt(text) {
    navigator.clipboard.writeText(text).then(() => {
        // Show success feedback
        showNotification('Prompt kopyalandı!', 'success');
    }).catch(() => {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showNotification('Prompt kopyalandı!', 'success');
    });
}

// Copy tool prompts
function copyToolPrompts() {
    const prompts = document.querySelectorAll('.modal-prompt');
    const allPrompts = Array.from(prompts).map(p => p.textContent).join('\n\n');
    copyPrompt(allPrompts);
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>${message}</span>
    `;
    
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #48bb78;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        z-index: 3000;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease forwards';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Setup event listeners
function setupEventListeners() {
    // Tool search
    const toolSearch = document.getElementById('toolSearch');
    toolSearch.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        filteredTools = aiTools.filter(tool => 
            tool.name.toLowerCase().includes(searchTerm) ||
            tool.description.toLowerCase().includes(searchTerm) ||
            tool.features.some(feature => feature.toLowerCase().includes(searchTerm))
        );
        currentToolsPage = 1;
        loadTools();
    });
    
    // Tool filters
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Update active button
            filterButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Filter tools
            const filter = this.dataset.filter;
            if (filter === 'all') {
                filteredTools = [...aiTools];
            } else {
                filteredTools = aiTools.filter(tool => tool.category === filter);
            }
            
            currentToolsPage = 1;
            loadTools();
        });
    });
    
    // Prompt category buttons
    const promptCategoryButtons = document.querySelectorAll('.prompt-category-btn');
    promptCategoryButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Update active button
            promptCategoryButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Load prompts for category
            const category = this.dataset.category;
            loadPrompts(category);
        });
    });
    
    // Prompt search
    const promptSearch = document.getElementById('promptSearch');
    promptSearch.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const filtered = filteredPrompts.filter(prompt =>
            prompt.title.toLowerCase().includes(searchTerm) ||
            prompt.content.toLowerCase().includes(searchTerm) ||
            prompt.tags.some(tag => tag.toLowerCase().includes(searchTerm))
        );
        
        const promptsGrid = document.getElementById('promptsGrid');
        promptsGrid.innerHTML = '';
        
        filtered.forEach(prompt => {
            const promptCard = createPromptCard(prompt);
            promptsGrid.appendChild(promptCard);
        });
    });
    
    // Load more buttons
    const loadMoreTools = document.getElementById('loadMoreTools');
    loadMoreTools.addEventListener('click', function() {
        currentToolsPage++;
        loadTools();
    });
    
    const loadMorePrompts = document.getElementById('loadMorePrompts');
    loadMorePrompts.addEventListener('click', function() {
        currentPromptsPage++;
        const startIndex = (currentPromptsPage - 1) * promptsPerPage;
        const endIndex = startIndex + promptsPerPage;
        const promptsToShow = filteredPrompts.slice(startIndex, endIndex);
        
        const promptsGrid = document.getElementById('promptsGrid');
        promptsToShow.forEach(prompt => {
            const promptCard = createPromptCard(prompt);
            promptsGrid.appendChild(promptCard);
        });
        
        if (endIndex >= filteredPrompts.length) {
            loadMorePrompts.style.display = 'none';
        }
    });
    
    // Category cards
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const category = this.dataset.category;
            
            // Filter tools and scroll to tools section
            const filterBtn = document.querySelector(`[data-filter="${category}"]`);
            if (filterBtn) {
                filterBtn.click();
                scrollToSection('tools');
            }
        });
    });
    
    // Modal close on outside click
    const modal = document.getElementById('toolModal');
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Contact form
    const contactForm = document.querySelector('.form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        showNotification('Mesajınız alınmıştır. Teşekkürler!', 'success');
        this.reset();
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });
}

// Setup animations
function setupAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.category-card, .tool-card, .prompt-card');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
}

// Show tool prompts
function showToolPrompts(toolId) {
    const tool = aiTools.find(t => t.id === toolId);
    if (tool) {
        openToolModal(tool);
    }
}

// Add CSS animations dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateX(100%);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes slideOut {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100%);
        }
    }
    
    .notification {
        animation: slideIn 0.3s ease !important;
    }
`;
document.head.appendChild(style);

// Generate more AI tools data
const additionalTools = [
    {
        id: 11,
        name: "Copy.ai",
        category: "yazma",
        pricing: "Freemium",
        description: "AI destekli metin yazma aracı. Pazarlama metinleri, blog yazıları ve sosyal medya içerikleri oluşturur.",
        features: ["Pazarlama metinleri", "Blog yazıları", "Sosyal medya", "E-posta yazma"],
        link: "https://copy.ai",
        prompts: [
            "Facebook reklamı yaz: [ürün] [hedef kitle]",
            "Blog giriş paragrafı: [başlık]",
            "Product description: [ürün özellikleri]",
            "Email subject line: [kampanya]"
        ]
    },
    {
        id: 12,
        name: "Pictory",
        category: "video",
        pricing: "Ücretli",
        description: "Metinden otomatik video oluşturan AI aracı. Blog yazılarını ve makaleleri videoya dönüştürür.",
        features: ["Metin'den video", "Otomatik altyazı", "Stock görseller", "Marka özelleştirme"],
        link: "https://pictory.ai",
        prompts: [
            "Bu blog yazısını videoya çevir: [URL]",
            "Ürün tanıtım videosu: [ürün bilgisi]",
            "Eğitim içeriği videosu: [konu]",
            "Sosyal medya videosu: [metin]"
        ]
    },
    {
        id: 13,
        name: "Murf AI",
        category: "ses",
        pricing: "Freemium",
        description: "Doğal sesli metin okuma AI'ı. 100+ farklı ses ve 15+ dilde içerik oluşturabilir.",
        features: ["Doğal ses", "Çok dilli", "Ses düzenleme", "Podcast oluşturma"],
        link: "https://murf.ai",
        prompts: [
            "Podcast intro: [podcast adı] [açıklama]",
            "Eğitim videosu narasyonu: [metin]",
            "Reklam seslendirmesi: [script]",
            "Sesli kitap: [bölüm metni]"
        ]
    },
    {
        id: 14,
        name: "Grammarly",
        category: "yazma",
        pricing: "Freemium",
        description: "AI destekli yazım ve gramer kontrol aracı. Metin kalitesini artırır ve profesyonel yazım sağlar.",
        features: ["Gramer kontrolü", "Yazım denetimi", "Ton analizi", "Plagiarism checker"],
        link: "https://grammarly.com",
        prompts: [
            "Bu metni düzelt ve iyileştir: [metin]",
            "Daha profesyonel hale getir: [metin]",
            "Yazım tonunu değiştir: [metin] [hedef ton]",
            "Kısalt ve özetle: [uzun metin]"
        ]
    },
    {
        id: 15,
        name: "DeepL",
        category: "yazma",
        pricing: "Freemium",
        description: "En gelişmiş AI çeviri aracı. Doğal ve akıcı çeviriler için yapay zeka kullanır.",
        features: ["Yüksek kalite çeviri", "30+ dil", "Dosya çevirisi", "API desteği"],
        link: "https://deepl.com",
        prompts: [
            "Bu metni [dil]'a çevir: [metin]",
            "Teknik dökümanı çevir: [metin]",
            "Web sitesi içeriği çevirisi: [URL]",
            "E-posta çevirisi: [metin]"
        ]
    }
];

// Add additional tools to main array
aiTools.push(...additionalTools);

// Add more prompt categories
promptCategories.coding = [
    {
        title: "Code Review & Optimization",
        tags: ["Review", "Optimization", "Best Practices"],
        content: "Bu kodu incele ve iyileştirme önerileri sun: [kod]. Performans, okunabilirlik ve best practice'ler açısından değerlendir.",
        tools: ["GitHub Copilot", "ChatGPT", "CodeT5"]
    },
    {
        title: "Bug Fixing",
        tags: ["Debug", "Error", "Fix"],
        content: "Bu kodda hata var, düzelt: [hatalı kod]. Hatanın nedenini açıkla ve çözümü sun.",
        tools: ["GitHub Copilot", "ChatGPT", "DeepCode"]
    },
    {
        title: "Documentation Generator",
        tags: ["Documentation", "Comments", "README"],
        content: "[Kod/Proje] için detaylı dokümantasyon hazırla. Kurulum, kullanım, API referansı ve örnekler dahil et.",
        tools: ["ChatGPT", "GitHub Copilot", "Mintlify"]
    }
];

promptCategories.social = [
    {
        title: "Instagram Caption Generator",
        tags: ["Instagram", "Caption", "Hashtag"],
        content: "[Görsel açıklaması] için yaratıcı Instagram caption'ı yaz. İlgi çekici hook, değer katacak içerik ve uygun hashtag'ler ekle.",
        tools: ["ChatGPT", "Jasper AI", "Later"]
    },
    {
        title: "TikTok Video İdeas",
        tags: ["TikTok", "Video", "Viral"],
        content: "[Niche/Konu] için 10 viral TikTok video fikri oluştur. Her biri farklı format olsun (eğitim, eğlence, trend, challenge vb.).",
        tools: ["ChatGPT", "Jasper AI", "TikTok Creator Fund"]
    },
    {
        title: "LinkedIn Post Strategy",
        tags: ["LinkedIn", "Professional", "Networking"],
        content: "[Sektör/Pozisyon] için profesyonel LinkedIn postu yaz. Değer katacak bilgi, kişisel deneyim ve network kurma odaklı olsun.",
        tools: ["ChatGPT", "Jasper AI", "LinkedIn Sales Navigator"]
    }
];

promptCategories.education = [
    {
        title: "Ders Planı Oluşturma",
        tags: ["Eğitim", "Ders", "Plan"],
        content: "[Konu] için [süre] saatlik ders planı hazırla. Öğrenme hedefleri, aktiviteler, değerlendirme yöntemleri dahil et.",
        tools: ["ChatGPT", "Claude", "Notion AI"]
    },
    {
        title: "Quiz ve Test Soruları",
        tags: ["Quiz", "Test", "Değerlendirme"],
        content: "[Konu] hakkında [sayı] adet test sorusu oluştur. Farklı zorluk seviyelerinde olsun ve açıklamalı cevaplar ekle.",
        tools: ["ChatGPT", "Quizlet AI", "Kahoot"]
    }
];

promptCategories.writing = [
    {
        title: "Hikaye Yazımı",
        tags: ["Hikaye", "Yaratıcı", "Kurgu"],
        content: "[Tür] türünde kısa hikaye yaz. Karakter: [karakter], Setting: [ortam], Conflict: [çatışma]. Yaklaşık [kelime sayısı] kelime olsun.",
        tools: ["ChatGPT", "Jasper AI", "Sudowrite"]
    },
    {
        title: "Şiir Oluşturucu",
        tags: ["Şiir", "Poem", "Yaratıcı"],
        content: "[Tema/Duygu] hakkında [tür] şiir yaz. [Kıta sayısı] kıta olsun ve [stil] stilinde yazılsın.",
        tools: ["ChatGPT", "Claude", "Verse by Verse"]
    }
];

promptCategories.analysis = [
    {
        title: "Veri Analizi",
        tags: ["Data", "Analysis", "İstatistik"],
        content: "Bu veri setini analiz et: [veri]. Ana eğilimleri, örüntüleri ve önemli bulguları özetle. Görselleştirme önerileri sun.",
        tools: ["ChatGPT", "DataRobot", "Tableau AI"]
    },
    {
        title: "Pazar Araştırması",
        tags: ["Pazar", "Research", "Competitor"],
        content: "[Sektör/Ürün] için pazar araştırması yap. Hedef kitle analizi, rakip analizi ve fırsat alanları belirle.",
        tools: ["ChatGPT", "Perplexity", "SimilarWeb"]
    }
];

promptCategories.automation = [
    {
        title: "Workflow Otomasyonu",
        tags: ["Automation", "Workflow", "Process"],
        content: "[İş süreci] için otomasyon planı hazırla. Hangi adımlar otomatikleştirilebilir, hangi araçlar kullanılabilir, ROI hesaplaması yap.",
        tools: ["ChatGPT", "Zapier", "Make"]
    },
    {
        title: "Email Automation",
        tags: ["Email", "Automation", "Sequence"],
        content: "[Amaç] için email otomasyon serisini tasarla. Tetikleyici eventi, email sayısını, içerik stratejisini ve segmentasyonu belirle.",
        tools: ["ChatGPT", "Mailchimp", "ActiveCampaign"]
    }
];

// Mobile menu toggle
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');
    
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
}

// Search functionality enhancement
function enhancedSearch() {
    const searchInput = document.getElementById('toolSearch');
    const suggestions = document.createElement('div');
    suggestions.className = 'search-suggestions';
    suggestions.style.cssText = `
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: white;
        border: 2px solid #e2e8f0;
        border-top: none;
        border-radius: 0 0 8px 8px;
        max-height: 200px;
        overflow-y: auto;
        display: none;
        z-index: 100;
    `;
    
    searchInput.parentNode.appendChild(suggestions);
    searchInput.parentNode.style.position = 'relative';
    
    searchInput.addEventListener('input', function() {
        const value = this.value.toLowerCase();
        if (value.length < 2) {
            suggestions.style.display = 'none';
            return;
        }
        
        const matches = aiTools.filter(tool => 
            tool.name.toLowerCase().includes(value)
        ).slice(0, 5);
        
        if (matches.length > 0) {
            suggestions.innerHTML = matches.map(tool => `
                <div class="suggestion-item" style="padding: 0.75rem; cursor: pointer; border-bottom: 1px solid #e2e8f0;" 
                     onclick="selectSuggestion('${tool.name}')">
                    <strong>${tool.name}</strong>
                    <div style="font-size: 0.875rem; color: #718096;">${getCategoryName(tool.category)}</div>
                </div>
            `).join('');
            suggestions.style.display = 'block';
        } else {
            suggestions.style.display = 'none';
        }
    });
    
    // Hide suggestions when clicking outside
    document.addEventListener('click', function(e) {
        if (!searchInput.parentNode.contains(e.target)) {
            suggestions.style.display = 'none';
        }
    });
}

function selectSuggestion(toolName) {
    const searchInput = document.getElementById('toolSearch');
    searchInput.value = toolName;
    searchInput.dispatchEvent(new Event('input'));
    document.querySelector('.search-suggestions').style.display = 'none';
}

// Initialize enhanced features
document.addEventListener('DOMContentLoaded', function() {
    enhancedSearch();
});

// Add scroll to top button
function addScrollToTop() {
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: #667eea;
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        font-size: 1.2rem;
        box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
        z-index: 1000;
        transition: all 0.3s ease;
        opacity: 0;
        transform: translateY(100px);
    `;
    
    scrollBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    document.body.appendChild(scrollBtn);
    
    // Show/hide scroll button
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            scrollBtn.style.opacity = '1';
            scrollBtn.style.transform = 'translateY(0)';
        } else {
            scrollBtn.style.opacity = '0';
            scrollBtn.style.transform = 'translateY(100px)';
        }
    });
}

// Initialize scroll to top
document.addEventListener('DOMContentLoaded', function() {
    addScrollToTop();
});