// AI Tools Data - PDF'den çıkarılan veriler
const aiTools = [
    // Text & Writing
    {
        name: "ChatGPT",
        category: "Text & Writing",
        description: "OpenAI tarafından geliştirilen gelişmiş dil modeli. Metin yazma, soru cevaplama, kod yazma ve daha birçok görevde kullanılabilir.",
        features: ["Metin Yazma", "Kod Üretme", "Çeviri", "Soru Cevaplama"],
        url: "https://chat.openai.com",
        color: "#10B981"
    },
    {
        name: "Copy.ai",
        category: "Text & Writing", 
        description: "AI destekli içerik yazma platformu. Blog yazıları, reklam metinleri ve sosyal medya içeriği oluşturur.",
        features: ["Blog Yazıları", "Reklam Metinleri", "Sosyal Medya", "E-posta"],
        url: "https://www.copy.ai",
        color: "#10B981"
    },
    {
        name: "Jasper",
        category: "Text & Writing",
        description: "Pazarlama odaklı AI yazma asistanı. Marka sesini koruyarak profesyonel içerik üretir.",
        features: ["Pazarlama Metinleri", "SEO İçeriği", "Marka Sesi", "Uzun Form"],
        url: "https://jasper.ai",
        color: "#10B981"
    },
    {
        name: "Writesonic",
        category: "Text & Writing",
        description: "Çoklu dil desteği olan AI yazma platformu. Landing page'lerden e-kitaplara kadar geniş içerik yelpazesi.",
        features: ["Landing Sayfaları", "E-kitap", "Çoklu Dil", "SEO"],
        url: "https://writesonic.com",
        color: "#10B981"
    },
    {
        name: "Grammarly",
        category: "Text & Writing",
        description: "AI destekli yazım ve dilbilgisi kontrolü. Metnin kalitesini artırır ve yazım hatalarını düzeltir.",
        features: ["Dilbilgisi", "Yazım Kontrolü", "Stil Önerileri", "Ton Analizi"],
        url: "https://app.grammarly.com",
        color: "#10B981"
    },

    // Image Generation
    {
        name: "DALL-E 2",
        category: "Image Generation",
        description: "OpenAI'ın metin açıklamalarından gerçekçi görüntüler üreten AI sistemi.",
        features: ["Metin-Görsel", "Yüksek Kalite", "Çeşitli Stiller", "Düzenleme"],
        url: "https://openai.com/dall-e-2",
        color: "#8B5CF6"
    },
    {
        name: "Midjourney",
        category: "Image Generation",
        description: "Discord üzerinden erişilebilen sanatsal AI görsel üretme platformu. Benzersiz ve yaratıcı görseller oluşturur.",
        features: ["Sanatsal Stiller", "Discord Bot", "Yüksek Kalite", "Topluluk"],
        url: "https://www.midjourney.com",
        color: "#8B5CF6"
    },
    {
        name: "Stable Diffusion",
        category: "Image Generation",
        description: "Açık kaynak AI görsel üretme modeli. Ücretsiz olarak kullanılabilir ve özelleştirilebilir.",
        features: ["Açık Kaynak", "Ücretsiz", "Özelleştirilebilir", "Yerel Kurulum"],
        url: "https://stability.ai",
        color: "#8B5CF6"
    },
    {
        name: "Adobe Firefly",
        category: "Image Generation",
        description: "Adobe'nin yaratıcı AI'sı. Ticari kullanım için güvenli görsel üretimi.",
        features: ["Ticari Güvenlik", "Adobe Entegrasyonu", "Profesyonel", "Telif Güvenli"],
        url: "https://firefly.adobe.com",
        color: "#8B5CF6"
    },
    {
        name: "Leonardo AI",
        category: "Image Generation",
        description: "Oyun geliştirme ve prodüksiyon odaklı AI görsel üretme platformu.",
        features: ["Oyun Asset'leri", "Karakter Tasarımı", "Konsept Sanatı", "3D Modelleme"],
        url: "https://leonardo.ai",
        color: "#8B5CF6"
    },

    // Video & Audio
    {
        name: "Synthesia",
        category: "Video & Audio",
        description: "AI avatarlar kullanarak video oluşturma platformu. Metin girdisiyle profesyonel videolar üretir.",
        features: ["AI Avatarlar", "Çoklu Dil", "Kurumsal Video", "Eğitim İçeriği"],
        url: "https://synthesia.io",
        color: "#EF4444"
    },
    {
        name: "Murf AI",
        category: "Video & Audio",
        description: "Metni gerçekçi seslendirmeye dönüştüren AI platform. Podcast ve video seslendirme için ideal.",
        features: ["Metin-Ses", "Çoklu Dil", "Farklı Sesler", "Podcast"],
        url: "https://murf.ai",
        color: "#EF4444"
    },
    {
        name: "RunwayML",
        category: "Video & Audio",
        description: "Video düzenleme ve yaratıcı AI araçları koleksiyonu. Magic tools ile hızlı video üretimi.",
        features: ["Video Düzenleme", "Magic Tools", "Green Screen", "Style Transfer"],
        url: "https://runwayml.com",
        color: "#EF4444"
    },
    {
        name: "Fliki",
        category: "Video & Audio",
        description: "Blog yazılarını videolara dönüştüren AI platform. Otomatik ses ve görsel ekler.",
        features: ["Blog-Video", "Otomatik Ses", "Görsel Ekleme", "Sosyal Medya"],
        url: "https://fliki.ai",
        color: "#EF4444"
    },
    {
        name: "Descript",
        category: "Video & Audio",
        description: "Ses ve video düzenleme için AI destekli platform. Metinle düzenleme yapabilirsiniz.",
        features: ["Metin Düzenleme", "Overdub", "Ses Temizleme", "Transkripsiyon"],
        url: "https://descript.com",
        color: "#EF4444"
    },

    // Code Development
    {
        name: "GitHub Copilot",
        category: "Code Development",
        description: "Microsoft ve OpenAI işbirliğiyle geliştirilen AI kod asistanı. Gerçek zamanlı kod önerileri sunar.",
        features: ["Kod Tamamlama", "Çoklu Dil", "IDE Entegrasyonu", "Açıklama Üretme"],
        url: "https://github.com/features/copilot",
        color: "#F59E0B"
    },
    {
        name: "Replit Ghostwriter",
        category: "Code Development",
        description: "Replit'in AI kod yazma asistanı. Tarayıcı tabanlı geliştirme ortamında çalışır.",
        features: ["Tarayıcı IDE", "Gerçek Zamanlı", "Çoklu Dil", "Proje Paylaşımı"],
        url: "https://replit.com",
        color: "#F59E0B"
    },
    {
        name: "Tabnine",
        category: "Code Development",
        description: "AI destekli kod tamamlama platformu. Tüm popüler IDE'leri destekler.",
        features: ["IDE Desteği", "Takım Öğrenme", "Güvenlik", "Özel Modeller"],
        url: "https://www.tabnine.com",
        color: "#F59E0B"
    },
    {
        name: "Codeium",
        category: "Code Development",
        description: "Ücretsiz AI kod asistanı. 70+ programlama dilini destekler.",
        features: ["Ücretsiz", "70+ Dil", "Chat Özelliği", "Hız"],
        url: "https://www.codeium.com",
        color: "#F59E0B"
    },
    {
        name: "Amazon CodeWhisperer",
        category: "Code Development",
        description: "Amazon'un AI kod asistanı. AWS servisleri için özelleştirilmiş öneriler.",
        features: ["AWS Entegrasyonu", "Güvenlik Taraması", "Referans İzleme", "Ücretsiz Tier"],
        url: "https://aws.amazon.com/codewhisperer",
        color: "#F59E0B"
    },

    // Business & Marketing
    {
        name: "HubSpot AI",
        category: "Business & Marketing",
        description: "CRM ve pazarlama otomasyon platformuna entegre AI araçları.",
        features: ["CRM Entegrasyonu", "E-posta Pazarlama", "İçerik Üretimi", "Analitik"],
        url: "https://hubspot.com",
        color: "#3B82F6"
    },
    {
        name: "Mailchimp AI",
        category: "Business & Marketing",
        description: "E-posta pazarlama kampanyaları için AI destekli içerik ve optimizasyon.",
        features: ["E-posta Optimizasyonu", "A/B Testing", "Segment AI", "İçerik Önerileri"],
        url: "https://mailchimp.com",
        color: "#3B82F6"
    },
    {
        name: "Canva AI",
        category: "Business & Marketing",
        description: "Tasarım platformu Canva'nın AI destekli özellikleri. Magic tools ile hızlı tasarım.",
        features: ["Magic Design", "Background Remover", "Text to Image", "Brand Kit"],
        url: "https://canva.com",
        color: "#3B82F6"
    },
    {
        name: "Hootsuite AI",
        category: "Business & Marketing",
        description: "Sosyal medya yönetimi için AI destekli içerik üretimi ve zamanlama.",
        features: ["İçerik Üretimi", "Optimal Zamanlama", "Hashtag Önerileri", "Analitik"],
        url: "https://hootsuite.com",
        color: "#3B82F6"
    },
    {
        name: "AdCreative.ai",
        category: "Business & Marketing",
        description: "Reklam kampanyaları için AI destekli kreatif üretimi. Yüksek performanslı reklam görselleri oluşturur.",
        features: ["Reklam Kreatifleri", "A/B Testing", "Performans Analizi", "Çoklu Platform"],
        url: "https://adcreative.ai",
        color: "#3B82F6"
    },

    // Research & Education
    {
        name: "Perplexity AI",
        category: "Research & Education",
        description: "Kaynak destekli AI arama motoru. Güvenilir bilgi kaynakları ile detaylı cevaplar sunar.",
        features: ["Kaynak Belirtme", "Güncel Bilgi", "Akademik Arama", "Detaylı Cevaplar"],
        url: "https://perplexity.ai",
        color: "#06B6D4"
    },
    {
        name: "Elicit",
        category: "Research & Education",
        description: "Akademik araştırmalar için AI asistanı. Makaleleri analiz eder ve özetler çıkarır.",
        features: ["Makale Analizi", "Literatür Taraması", "Özet Çıkarma", "Veri Analizi"],
        url: "https://elicit.org",
        color: "#06B6D4"
    },
    {
        name: "Consensus",
        category: "Research & Education",
        description: "Bilimsel literatürde konsensüs bulmak için AI arama motoru.",
        features: ["Bilimsel Konsensüs", "Meta-analiz", "Kaynak Doğrulama", "Akademik"],
        url: "https://consensus.app",
        color: "#06B6D4"
    },
    {
        name: "Scholarcy",
        category: "Research & Education",
        description: "Akademik makaleleri özetleyen ve anahtar noktaları çıkaran AI araç.",
        features: ["Makale Özeti", "Anahtar Noktalar", "Referans Analizi", "Hızlı Okuma"],
        url: "https://scholarcy.com",
        color: "#06B6D4"
    },
    {
        name: "Socratic by Google",
        category: "Research & Education",
        description: "Öğrenciler için AI destekli ödev yardımcısı. Matematik, fen ve dil dersleri için.",
        features: ["Ödev Yardımı", "Adım Adım Çözüm", "Çoklu Ders", "Görsel Tanıma"],
        url: "https://socratic.org",
        color: "#06B6D4"
    },

    // Design & Creativity
    {
        name: "Figma AI",
        category: "Design & Creativity",
        description: "Figma'nın AI destekli tasarım özellikleri. Otomatik layout ve içerik üretimi.",
        features: ["Auto Layout", "İçerik Üretimi", "Tasarım Sistemi", "Prototipleme"],
        url: "https://figma.com",
        color: "#EC4899"
    },
    {
        name: "Uizard",
        category: "Design & Creativity",
        description: "Sketch'lerden dijital tasarımlara dönüştürme AI'sı. Hızlı prototyping için ideal.",
        features: ["Sketch-Digital", "Wireframe", "Prototyping", "Hızlı Tasarım"],
        url: "https://uizard.io",
        color: "#EC4899"
    },
    {
        name: "Looka",
        category: "Design & Creativity",
        description: "AI destekli logo tasarım platformu. Marka kimliği oluşturma araçları.",
        features: ["Logo Tasarımı", "Marka Kimliği", "Business Card", "Sosyal Medya"],
        url: "https://looka.com",
        color: "#EC4899"
    },
    {
        name: "Remove.bg",
        category: "Design & Creativity",
        description: "Fotoğraflardan arka planı otomatik olarak kaldıran AI araç.",
        features: ["Arka Plan Kaldırma", "Toplu İşlem", "API", "Yüksek Kalite"],
        url: "https://remove.bg",
        color: "#EC4899"
    },
    {
        name: "Photosonic",
        category: "Design & Creativity",
        description: "Writesonic'in AI görsel üretme platformu. Metin açıklamalarından görsel yaratır.",
        features: ["Metin-Görsel", "Sanatsal Stiller", "Yüksek Çözünürlük", "Ticari Kullanım"],
        url: "https://photosonic.ai",
        color: "#EC4899"
    },

    // Productivity
    {
        name: "Notion AI",
        category: "Productivity",
        description: "Notion workspace'ine entegre AI asistanı. Yazma, düzenleme ve organize etme.",
        features: ["Yazma Asistanı", "İçerik Düzenleme", "Özetleme", "Çeviri"],
        url: "https://notion.so",
        color: "#F97316"
    },
    {
        name: "Otter.ai",
        category: "Productivity",
        description: "Toplantıları otomatik olarak yazıya döken AI platform. Gerçek zamanlı transkripsiyon.",
        features: ["Gerçek Zamanlı", "Konuşmacı Tanıma", "Özet Çıkarma", "Entegrasyon"],
        url: "https://otter.ai",
        color: "#F97316"
    },
    {
        name: "Calendly AI",
        category: "Productivity",
        description: "Akıllı zamanlama asistanı. Optimal toplantı zamanları önerir.",
        features: ["Akıllı Zamanlama", "Çakışma Önleme", "Zaman Dilimi", "Entegrasyon"],
        url: "https://calendly.com",
        color: "#F97316"
    },
    {
        name: "Zapier AI",
        category: "Productivity",
        description: "İş akışı otomasyonu için AI. Uygulamalar arası akıllı bağlantılar kurar.",
        features: ["Otomasyon", "App Entegrasyonu", "AI Workflow", "Trigger Önerileri"],
        url: "https://zapier.com",
        color: "#F97316"
    },
    {
        name: "Motion",
        category: "Productivity",
        description: "AI destekli görev ve zaman yönetimi. Otomatik takvim ve öncelik planlaması.",
        features: ["Otomatik Planlama", "Görev Yönetimi", "Takvim Optimizasyonu", "Zaman Takibi"],
        url: "https://usemotion.com",
        color: "#F97316"
    },

    // Chat & Conversation
    {
        name: "Claude",
        category: "Chat & Conversation",
        description: "Anthropic'in güvenli ve yardımcı AI asistanı. Uzun konuşmalar ve detaylı analizler.",
        features: ["Güvenli AI", "Uzun Konuşma", "Analiz", "Kod Yardımı"],
        url: "https://claude.ai",
        color: "#8B5CF6"
    },
    {
        name: "Character.AI",
        category: "Chat & Conversation",
        description: "Çeşitli karakterlerle sohbet edebileceğiniz AI platform. Rol yapma ve eğlence odaklı.",
        features: ["Karakter Rolleri", "Yaratıcı Yazım", "Çoklu Karakter", "Topluluk"],
        url: "https://character.ai",
        color: "#8B5CF6"
    },
    {
        name: "Replika",
        category: "Chat & Conversation",
        description: "Kişisel AI arkadaş. Duygusal destek ve günlük sohbet için tasarlanmış.",
        features: ["Kişisel AI", "Duygusal Destek", "Öğrenme", "Günlük Sohbet"],
        url: "https://replika.com",
        color: "#8B5CF6"
    },
    {
        name: "Pi by Inflection",
        category: "Chat & Conversation",
        description: "Kişisel zeka asistanı. Empati ve anlayış odaklı konuşmalar.",
        features: ["Empatik AI", "Kişisel Asistan", "Anlayışlı", "Destekleyici"],
        url: "https://pi.ai",
        color: "#8B5CF6"
    },
    {
        name: "Poe by Quora",
        category: "Chat & Conversation",
        description: "Farklı AI modellerine tek platformdan erişim. Çoklu AI karşılaştırması.",
        features: ["Çoklu Model", "Karşılaştırma", "Topluluk", "Özelleştirme"],
        url: "https://poe.com",
        color: "#8B5CF6"
    },

    // Data & Analytics
    {
        name: "DataRobot",
        category: "Data & Analytics",
        description: "Kurumsal AI ve makine öğrenmesi platformu. Otomatik model geliştirme.",
        features: ["AutoML", "Model Deployment", "Kurumsal", "Ölçeklenebilir"],
        url: "https://datarobot.com",
        color: "#14B8A6"
    },
    {
        name: "H2O.ai",
        category: "Data & Analytics",
        description: "Açık kaynak makine öğrenmesi platformu. Driverless AI ile otomatik ML.",
        features: ["Açık Kaynak", "Driverless AI", "MLOps", "Veri Bilimi"],
        url: "https://h2o.ai",
        color: "#14B8A6"
    },
    {
        name: "Obviously AI",
        category: "Data & Analytics",
        description: "Kod yazmadan makine öğrenmesi modelleri oluşturma platformu.",
        features: ["No-Code ML", "Tahmin Modelleri", "AutoML", "Hızlı Deployment"],
        url: "https://obviously.ai",
        color: "#14B8A6"
    },
    {
        name: "MonkeyLearn",
        category: "Data & Analytics",
        description: "Metin analizi ve NLP için no-code platform. Sentiment analizi ve sınıflandırma.",
        features: ["Text Analytics", "Sentiment Analizi", "No-Code", "API"],
        url: "https://monkeylearn.com",
        color: "#14B8A6"
    },
    {
        name: "Akkio",
        category: "Data & Analytics",
        description: "İş analistleri için kolay makine öğrenmesi platformu. Görsel arayüzle ML.",
        features: ["Business Analytics", "Görsel ML", "Tahmin", "Kolay Kullanım"],
        url: "https://akkio.com",
        color: "#14B8A6"
    },

    // Gaming & Entertainment
    {
        name: "AI Dungeon",
        category: "Gaming & Entertainment",
        description: "AI destekli metin tabanlı macera oyunu. Sınırsız hikaye yaratma.",
        features: ["Metin Macera", "Sınırsız Hikaye", "Yaratıcılık", "Multiplayer"],
        url: "https://play.aidungeon.io",
        color: "#F59E0B"
    },
    {
        name: "Scenario",
        category: "Gaming & Entertainment",
        description: "Oyun geliştiricileri için AI destekli asset üretimi. Tutarlı stil ile sanat üretimi.",
        features: ["Game Assets", "Stil Tutarlılığı", "Batch Generation", "Unity Plugin"],
        url: "https://scenario.gg",
        color: "#F59E0B"
    },
    {
        name: "Ludo AI",
        category: "Gaming & Entertainment",
        description: "Oyun geliştirme sürecini destekleyen AI platform. Oyun konsepti ve trend analizi.",
        features: ["Oyun Konsepti", "Trend Analizi", "Market Research", "Geliştirici Araçları"],
        url: "https://ludo.ai",
        color: "#F59E0B"
    },
    {
        name: "Leonardo AI for Games",
        category: "Gaming & Entertainment",
        description: "Oyun geliştiricileri için özelleştirilmiş AI görsel üretimi.",
        features: ["Karakter Tasarımı", "Environment Art", "Concept Art", "Game Ready"],
        url: "https://leonardo.ai",
        color: "#F59E0B"
    },
    {
        name: "Promethean AI",
        category: "Gaming & Entertainment",
        description: "3D sanatçılar için AI asistanı. Sahneleme ve asset yerleştirme.",
        features: ["3D Scene Building", "Asset Placement", "Environment Design", "Blender Plugin"],
        url: "https://prometheanai.com",
        color: "#F59E0B"
    },

    // Music & Audio
    {
        name: "AIVA",
        category: "Music & Audio",
        description: "AI besteci. Klasik müzikten modern müziğe kadar çeşitli türlerde kompozisyon yapar.",
        features: ["Müzik Kompozisyonu", "Çeşitli Türler", "Telif Güvenli", "MIDI Export"],
        url: "https://aiva.ai",
        color: "#EF4444"
    },
    {
        name: "Mubert",
        category: "Music & Audio",
        description: "Gerçek zamanlı AI müzik üretimi. Canlı yayın ve içerik üreticileri için.",
        features: ["Gerçek Zamanlı", "Telif Güvenli", "Çeşitli Mood", "API"],
        url: "https://mubert.com",
        color: "#EF4444"
    },
    {
        name: "Boomy",
        category: "Music & Audio",
        description: "Hiç müzik bilgisi olmadan şarkı yaratma platformu. AI ile otomatik müzik üretimi.",
        features: ["Otomatik Üretim", "Kolay Kullanım", "Streaming", "Monetization"],
        url: "https://boomy.com",
        color: "#EF4444"
    },
    {
        name: "Soundful",
        category: "Music & Audio",
        description: "İçerik üreticileri için AI müzik platformu. Özelleştirilebilir enstrümantal müzik.",
        features: ["İçerik Müziği", "Özelleştirme", "Loop Library", "High Quality"],
        url: "https://soundful.com",
        color: "#EF4444"
    },
    {
        name: "Endel",
        category: "Music & Audio",
        description: "Kişiselleştirilmiş ses ortamları üreten AI. Odaklanma ve rahatlamaya yardımcı.",
        features: ["Adaptif Müzik", "Wellness", "Odaklanma", "Kişiselleştirme"],
        url: "https://endel.io",
        color: "#EF4444"
    },

    // Finance & Legal
    {
        name: "DoNotPay",
        category: "Finance & Legal",
        description: "Robot avukat uygulaması. Hukuki işlemleri otomatikleştirir ve basitleştirir.",
        features: ["Hukuki Otomasyon", "Dava Takibi", "Belge Oluşturma", "Tüketici Hakları"],
        url: "https://donotpay.com",
        color: "#059669"
    },
    {
        name: "LawGeex",
        category: "Finance & Legal",
        description: "Sözleşme inceleme ve analizi için AI platform. Hukuk büroları için profesyonel çözüm.",
        features: ["Sözleşme Analizi", "Risk Değerlendirme", "Hukuk Büroları", "Otomasyon"],
        url: "https://lawgeex.com",
        color: "#059669"
    },
    {
        name: "Kira Systems",
        category: "Finance & Legal",
        description: "Sözleşme analizi ve veri çıkarımı için AI platform. Kurumsal hukuk departmanları için.",
        features: ["Veri Çıkarımı", "Sözleşme Yönetimi", "Kurumsal", "Machine Learning"],
        url: "https://kirasystems.com",
        color: "#059669"
    },
    {
        name: "ROSS Intelligence",
        category: "Finance & Legal",
        description: "Hukuk araştırması için AI asistanı. Yasal precedent ve case law analizi.",
        features: ["Hukuk Araştırması", "Case Law", "Precedent Analizi", "Natural Language"],
        url: "https://rossintelligence.com",
        color: "#059669"
    },
    {
        name: "Lex Machina",
        category: "Finance & Legal",
        description: "Hukuk analytics platformu. Dava tahminleri ve strateji geliştirme.",
        features: ["Litigation Analytics", "Dava Tahmini", "Strateji", "Veri Analizi"],
        url: "https://lexmachina.com",
        color: "#059669"
    },

    // Health & Wellness
    {
        name: "Ada Health",
        category: "Health & Wellness",
        description: "AI destekli sağlık değerlendirme uygulaması. Semptom analizi ve sağlık önerileri.",
        features: ["Semptom Analizi", "Sağlık Değerlendirme", "Doktor Önerileri", "Kişisel Takip"],
        url: "https://ada.com",
        color: "#DC2626"
    },
    {
        name: "Babylon Health",
        category: "Health & Wellness",
        description: "AI destekli sağlık hizmetleri platformu. Telemedicine ve health monitoring.",
        features: ["Telemedicine", "Health Monitoring", "AI Consultation", "Prescription"],
        url: "https://babylonhealth.com",
        color: "#DC2626"
    },
    {
        name: "Woebot",
        category: "Health & Wellness",
        description: "Mental sağlık için AI chatbot. CBT temelli therapy ve duygusal destek.",
        features: ["Mental Health", "CBT Therapy", "Daily Check-ins", "Mood Tracking"],
        url: "https://woebot.io",
        color: "#DC2626"
    },
    {
        name: "Wysa",
        category: "Health & Wellness",
        description: "AI destekli mental wellness uygulaması. Anonim therapy ve mindfulness.",
        features: ["Anonymous Therapy", "Mindfulness", "Mood Tools", "Crisis Support"],
        url: "https://wysa.io",
        color: "#DC2626"
    },
    {
        name: "Medopad",
        category: "Health & Wellness",
        description: "Dijital sağlık platformu. Hasta takibi ve AI destekli sağlık analizi.",
        features: ["Patient Monitoring", "Digital Therapeutics", "Clinical Trials", "Data Analytics"],
        url: "https://medopad.com",
        color: "#DC2626"
    },

    // Real Estate & Architecture
    {
        name: "Interior AI",
        category: "Real Estate & Architecture",
        description: "İç mekan tasarımı için AI platform. Fotoğraflardan farklı dekorasyon stilleri üretir.",
        features: ["İç Mekan", "Stil Dönüşümü", "Virtual Staging", "Dekorasyon"],
        url: "https://interiorai.com",
        color: "#7C3AED"
    },
    {
        name: "GetFloorPlan",
        category: "Real Estate & Architecture",
        description: "2D ve 3D kat planları oluşturan AI araç. Emlak ve mimarlık için.",
        features: ["2D/3D Planlar", "Emlak", "Mimarlık", "Otomatik Ölçüm"],
        url: "https://getfloorplan.com",
        color: "#7C3AED"
    },
    {
        name: "Maket",
        category: "Real Estate & Architecture",
        description: "Mimari plan üretimi için AI platform. Zonlama ve layout optimizasyonu.",
        features: ["Mimari Planlar", "Zonlama", "Layout Optimizasyonu", "Regulatory Compliance"],
        url: "https://maket.ai",
        color: "#7C3AED"
    },
    {
        name: "Finch 3D",
        category: "Real Estate & Architecture",
        description: "Sürdürülebilir mimari tasarım için AI araçları. Performans optimizasyonu.",
        features: ["Sürdürülebilir Tasarım", "Performans Analizi", "Optimizasyon", "Grasshopper Plugin"],
        url: "https://finch3d.com",
        color: "#7C3AED"
    },
    {
        name: "Spacemaker",
        category: "Real Estate & Architecture",
        description: "Şehir planlama ve site tasarımı için AI platform. Autodesk tarafından geliştirilmiş.",
        features: ["Site Planning", "Urban Design", "Analysis", "Autodesk Integration"],
        url: "https://spacemaker.ai",
        color: "#7C3AED"
    }
];

// Category definitions
const categories = [
    {
        id: "text-writing",
        name: "Text & Writing",
        description: "Metin yazma, düzenleme ve içerik üretimi için AI araçları",
        icon: "pen-tool",
        color: "#10B981",
        colorLight: "#34D399"
    },
    {
        id: "image-generation",
        name: "Image Generation",
        description: "Görsel oluşturma, düzenleme ve sanatsal yaratım araçları",
        icon: "image",
        color: "#8B5CF6",
        colorLight: "#A78BFA"
    },
    {
        id: "video-audio",
        name: "Video & Audio",
        description: "Video düzenleme, ses üretimi ve multimedya araçları",
        icon: "video",
        color: "#EF4444",
        colorLight: "#F87171"
    },
    {
        id: "code-development",
        name: "Code Development", 
        description: "Yazılım geliştirme, kod üretimi ve programlama asistanları",
        icon: "code",
        color: "#F59E0B",
        colorLight: "#FBBF24"
    },
    {
        id: "business-marketing",
        name: "Business & Marketing",
        description: "İş süreçleri, pazarlama ve satış optimizasyonu araçları",
        icon: "trending-up",
        color: "#3B82F6",
        colorLight: "#60A5FA"
    },
    {
        id: "research-education",
        name: "Research & Education",
        description: "Araştırma, eğitim ve akademik çalışmalar için AI desteği",
        icon: "book-open",
        color: "#06B6D4",
        colorLight: "#22D3EE"
    },
    {
        id: "design-creativity",
        name: "Design & Creativity",
        description: "Tasarım, yaratıcılık ve sanatsal çalışmalar için araçlar",
        icon: "palette",
        color: "#EC4899",
        colorLight: "#F472B6"
    },
    {
        id: "productivity",
        name: "Productivity",
        description: "Verimlilik artırma, görev yönetimi ve organizasyon araçları",
        icon: "zap",
        color: "#F97316",
        colorLight: "#FB923C"
    },
    {
        id: "chat-conversation",
        name: "Chat & Conversation",
        description: "Sohbet robotları, asistanlar ve konuşma AI'ları",
        icon: "message-circle",
        color: "#8B5CF6",
        colorLight: "#A78BFA"
    },
    {
        id: "data-analytics",
        name: "Data & Analytics",
        description: "Veri analizi, makine öğrenmesi ve iş zekası araçları",
        icon: "bar-chart",
        color: "#14B8A6",
        colorLight: "#2DD4BF"
    },
    {
        id: "gaming-entertainment",
        name: "Gaming & Entertainment",
        description: "Oyun geliştirme, eğlence ve yaratıcı içerik üretimi",
        icon: "gamepad-2",
        color: "#F59E0B",
        colorLight: "#FBBF24"
    },
    {
        id: "music-audio",
        name: "Music & Audio",
        description: "Müzik üretimi, ses düzenleme ve audio araçları",
        icon: "music",
        color: "#EF4444",
        colorLight: "#F87171"
    },
    {
        id: "finance-legal",
        name: "Finance & Legal",
        description: "Finans, hukuk ve compliance alanında AI çözümler",
        icon: "scale",
        color: "#059669",
        colorLight: "#10B981"
    },
    {
        id: "health-wellness",
        name: "Health & Wellness",
        description: "Sağlık, wellness ve tıbbi AI uygulamaları",
        icon: "heart",
        color: "#DC2626",
        colorLight: "#EF4444"
    },
    {
        id: "real-estate-architecture",
        name: "Real Estate & Architecture",
        description: "Emlak, mimarlık ve inşaat sektörü için AI araçları",
        icon: "home",
        color: "#7C3AED",
        colorLight: "#8B5CF6"
    }
];

// Export data
window.aiToolsData = aiTools;
window.categoriesData = categories;