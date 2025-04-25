"use client";

import { createContext, useContext, useState, useEffect } from "react";

const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const translations = {
    en: {
      aboutUs: "About Us",
      services: "Services",
      Blog: "Blog",
      Contacts: "Contacts",
      OrderAProject: "Order a project",
      FromIdeaToVisual:
        "From idea to visual, from code to site. Developing your brand online.",
      SMMPackages: "SMM Packages",
      WebsiteDeveloping: "Website Developing",
      BrandIdentityDesign: "Brand Identity Design",
      CreatingMaterials: "Creating of print materials",
      individualServiceOptions: "Individual service options",
      SmmText:
        "We offer flexible monthly subscription plans. Packages can be adjusted or upgraded at the end of each billing cycle to suit your needs",
      SmmComments1:
        "*The budget for targeted advertising is not included in the package price.",
      SmmComments2:
        "**Social Media Management (SMM) includes copywriting, responding to messages, content creation, and working with stories.",
      StarterPackage: "Starter Package",
      GraphicPosts: "Graphic posts",
      Reels: "Reels",
      SMM: "SMM",
      Target: "Target",
      MotionPosts: "Motion posts",
      monthly: "monthly",
      GrowthPackage: "Growth Package",
      ProPackage: "Pro Package",
      ElitePackage: "Elite package",
      Choose: "Choose",
      Website: "Website",
      Developing: "Developing",
      WeOffer:
        "We offer flexible monthly subscription plans. Packages can be adjusted or upgraded at the end of each billing cycle to suit your needs.",
      DraftingABrief: "Drafting a brief",
      DefiningProjectGoals:
        "Defining project goals, target audience, and key requirements for the website.",
      MarketingAnalysisAndPrototyping: "Marketing analysis and prototyping",
      AnalyzingTheMarket:
        "Analyzing the market and designing a website prototype.",
      WebsiteDesign: "Website design",
      WebsiteLayoutAndDevelopment: "Website layout and development.",
      CodingAndBuilding: "Coding and building the website'sfunctionality.",
      LaunchOfTheWebsite: "Launch of the website",
      MakingTheWebsite: "Making the website live and ready for users.",
      CreatingOfPrintMaterials: "Creating of print materials",
      WeSpecialize:
        "We specialize in creating high-quality print materials tailored to meet your business or personal needs. Our designs are visually appealing, professional, and aligned with your brand identity, ensuring effective communication with your target audience. From concept to final print-ready files, we provide a full range of print material solutions for marketing, events, or corporate purposes.",
      WeSpecializeText:
        "Choose the print materials you need and contact us to get started!",
      B: "B",
      Banners: "Banners",
      Billboards: "Billboards",
      Booklets: "Booklets",
      Brochures: "Brochures",
      BusinessCards: "Business Cards",
      C: "C",
      Calendars: "Calendars",
      Catalogs: "Catalogs",
      Certificates: "Certificates",
      E: "E",
      Envelopes: "Envelopes",
      EventTickets: "Event Tickets",
      F: "F",
      Flyers: "Flyers",
      I: "I",
      Invitations: "Invitations",
      L: "L",
      Labels: "Labels",
      Letterheads: "Letterheads",
      N: "N",
      Notepads: "Notepads",
      P: "P",
      PackagingDesign: "Packaging Design",
      Postcards: "Postcards",
      Posters: "Posters",
      M: "M",
      Magazines: "Magazines",
      Menu: "Menu",
      S: "S",
      Stickers: "Stickers",
      WeOfferCustomized:
        "We offer customized services tailored to your specific needs. Our individual options include a range of creative and marketing solutions to help you achieve your goals effectively:",
      EngagingShortVideosForSocialMedia:
        "Engaging short videos for social media",
      days: "days",
      GraphicPoster: "Graphic Poster",
      HighQuality: "High-quality visual designs for events or promotions",
      day: "day",
      AnimatedPostersThaCaptureAttention:
        "Animated posters that capture attention",
      VideoEditing: "Video Editing",
      ProfessionalEditingToEnhanceYourFootage:
        "Professional editing to enhance your footage",
      ProfessionalCameraShooting: "Professional Camera Shooting",
      HighQualityVideoPhoto:
        "High-quality video/photo shooting with expert equipment",
      TargetedAdSetup: "Targeted Ad Setup",
      Effective: "Effective ad campaigns to reach your audience",
      PresentationCreation: "Presentation Creation",
      VisuallyAppealing: "Visually appealing and impactful presentations",
      ComprehensiveSocial: "Comprehensive social media account management",
      WithABlend:
        "With a blend of strategy, creativity, and data-driven insights, we craft campaigns that amplify your message, engage your followers, and drive tangible results. From creating impactful content to optimizing ad strategies, we’re dedicated to growing your brand in the ever-evolving digital landscape. Your success is our mission, and we’re here to ensure your brand stands out, connects meaningfully, and thrives online.",
      WhoWeAre: "Who We Are:",
      AYoungMarketing:
        "A young marketing agency from Azerbaijan, uniting talented and skilled professionals.",
      OurApproach: "Our Approach:",
      WeStay:
        "We stay up-to-date with the latest trends and tailor strategies to meet each client’s unique needs.",
      OurGoal: "Our Goal:",
      ToHelp:
        "To help businesses grow online by providing modern and effective marketing solutions.",
      OurValues: "Our Values:",
      OurValues1: "Quality:",
      OurValues4: "Every detail is carefully crafted.",
      OurValues2: "Client Focus:",
      OurValues5: " We prioritize each client`s goals and needs.",
      OurValues3: "Results-Oriented:",
      OurValues6: " We focus on delivering measurable outcomes.",
      WhatWeDo: "What We Do:",
      BrandCreationAndDevelopment: "Brand creation and development.",
      SocialMediaManagement: "Social media management.",
      PhotoAndVideoContentProduction: "Photo and video content production.",
      CreativeAndAdvertisingPostDesign: "Creative and advertising post design.",
      OurPlans: "Our Plans:",
      WeAre:
        "We are committed to continuous growth and expanding our range of services to meet evolving client demands.",
      ExperiencedTeamProfessionals: "Experienced Team of Professionals",
      Ourteamconsists:
        "Our team consists of skilled programmers, designers, video editors, and photographers who bring years of hands-on experience to every project. We combine creativity and technical expertise to deliver outstanding results.",
      ClientOriented: "Client-Oriented Approach",
      WePrioritizeYourNeedsVision:
        "We prioritize your needs and vision. By focusing on personalized solutions and open communication, we ensure that each project aligns with your goals and exceeds your expectations.",
      ProvenQualityAndReliability: "Proven Quality and Reliability",
      WithAStrong:
        "With a strong background working in top companies and real-world projects, we know how to deliver high-quality work on time. Trust us to provide reliable solutions that make a lasting impact.",
      DoYouHaveIdea: "Do you have an idea? let’s discuss it!",
      LeaveUsA:
        "Leave us a request, and we’ll get back to you as soon as possible. Together, we’ll bring your ideas to life!",
      IAgreeTo: "I agree to the terms of personal data processing.",
      Send: "Send",
      Phone: "Phone",
      EMail: "E-mail",
      WeInSocialNetworks: "We in social networks",
      AllRightsReserved: "All rights reserved.",
    },
    ru: {
      aboutUs: "О нас",
      services: "Услуги",
      Blog: "Блог",
      Contacts: "Контакты",
      OrderAProject: "Заказать проект",
      FromIdeaToVisual:
        "От идеи до визуализации, от кода до сайта. Разработка вашего бренда онлайн.",
      SMMPackages: "SMM-пакеты",
      WebsiteDeveloping: "Веб-сайт Разработка",
      BrandIdentityDesign: "Разработка фирменного стиля",
      CreatingMaterials: "Создание печатных материалов",
      individualServiceOptions: "Создание печатных материалов",
      SmmText:
        "Мы предлагаем гибкие ежемесячные планы подписки. Пакеты могут быть скорректированы или улучшены в конце каждого платежного цикла в соответствии с вашими потребностями",
      SmmComments1:
        "*Бюджет на таргетированную рекламу не включен в стоимость пакета.",
      SmmComments2:
        "**Управление социальными сетями (SMM) включает копирайтинг, реагирование на сообщения, создание контента и работу с историями.",
      StarterPackage: "Стартовый пакет",
      GraphicPosts: "Графические посты",
      Reels: "Катушки",
      SMM: "СММ",
      Target: "Цель",
      MotionPosts: "Движение Посты",
      monthly: "ежемесячно",
      GrowthPackage: "Пакет роста",
      ProPackage: "Пакет Pro",
      ElitePackage: "Элитный пакет",
      Choose: "Выбирать",
      Website: "Веб-сайт",
      Developing: "Разработка",
      WeOffer:
        "Мы предлагаем гибкие ежемесячные планы подписки. Пакеты могут быть скорректированы или улучшены в конце каждого платежного цикла в соответствии с вашими потребностями.",
      DraftingABrief: "Составление брифа",
      DefiningProjectGoals:
        "Определение целей проекта, целевой аудитории и основных требований к сайту.",
      MarketingAnalysisAndPrototyping: "Marketing Analysis Andes Prototyping",
      AnalyzingTheMarket: "Анализ рынка и разработка прототипа сайта.",
      WebsiteDesign: "Веб-сайт Дизайн",
      WebsiteLayoutAndDevelopment: "Макет и разработка веб-сайта.",
      CodingAndBuilding: "Кодирование и создание функциональности сайта.",
      LaunchOfTheWebsite: "Запуск сайта",
      MakingTheWebsite:
        "Создание сайта, готового к использованию пользователями.",

      CreatingOfPrintMaterials:
        "Создание сайта, готового к использованию пользователями.",
      WeSpecialize:
        "Мы специализируемся на создании высококачественных печатных материалов, адаптированных под ваши деловые или личные нужды. Наши дизайны визуально привлекательны, профессиональны и соответствуют идентичности вашего бренда, обеспечивая эффективную коммуникацию с вашей целевой аудиторией. От концепции до готовых к печати файлов мы предоставляем полный спектр решений для печатных материалов для маркетинга, мероприятий или корпоративных целей.",
      WeSpecializeText:
        "Выберите необходимые вам печатные материалы и свяжитесь с нами, чтобы начать работу!",
      B: "Б",
      Banners: "Баннеры",
      Billboards: "Рекламные щиты",
      Booklets: "Буклеты",
      Brochures: "Брошюры",
      BusinessCards: "Визитные карточки",
      C: "C",
      Calendars: "Календари",
      Catalogs: "Каталоги",
      Certificates: "Сертификаты",
      E: "E",
      Envelopes: "Конверты",
      EventTickets: "Билеты на мероприятия",
      F: "Ф",
      Flyers: "Листовки",
      I: "И",
      Invitations: "Приглашения",
      L: "Л",
      Labels: "Этикетки",
      Letterheads: "Фирменные бланки",
      N: "Н",
      Notepads: "Блокноты",
      P: "П",
      PackagingDesign: "Дизайн упаковки",
      Postcards: "Открытки",
      Posters: "Плакаты",
      M: "M",
      Magazines: "Журналы",
      Menu: "Меню",
      S: "С",
      Stickers: "Наклейки",
      WeOfferCustomized:
        "Мы предлагаем индивидуальные услуги, соответствующие вашим конкретным потребностям. Наши индивидуальные возможности включают ряд креативных и маркетинговых решений, которые помогут вам эффективно достичь ваших целей:",
      EngagingShortVideosForSocialMedia:
        "Короткие увлекательные видеоролики для социальных сетей",
      days: "дней",
      GraphicPoster: "Графический постер",
      HighQuality:
        "Высококачественный визуальный дизайн для мероприятий и рекламных акций",
      day: "день",
      AnimatedPostersThaCaptureAttention:
        "Анимированные постеры, привлекающие внимание",
      VideoEditing: "Видеомонтаж",
      ProfessionalEditingToEnhanceYourFootage:
        "Профессиональное редактирование для улучшения вашего материала",
      ProfessionalCameraShooting: "Профессио-нальная съемка на камеру",
      HighQualityVideoPhoto:
        "Качественная видео/фотосъемка с использованием профессионального оборудования",
      TargetedAdSetup: "Настройка целевой рекламы",
      Effective: "Эффективные рекламные кампании для охвата вашей аудитории",
      PresentationCreation: "Создание презентаций",
      VisuallyAppealing: "Визуально привлекательные и эффективные презентации",
      ComprehensiveSocial:
        "Комплексное управление аккаунтами в социальных сетях",
      WithABlend:
        "Благодаря сочетанию стратегии, креативности и основанных на данных идей мы создаем кампании, которые усиливают ваше сообщение, вовлекают ваших подписчиков и добиваются ощутимых результатов. От создания эффективного контента до оптимизации рекламных стратегий мы стремимся развивать ваш бренд в постоянно меняющемся цифровом ландшафте. Ваш успех — наша миссия, и мы здесь, чтобы гарантировать, что ваш бренд выделяется, имеет значимые связи и процветает в сети.",
      WhoWeAre: "Кто мы:",
      AYoungMarketing:
        "Молодое маркетинговое агентство из Азербайджана, объединяющее талантливых и опытных специалистов.",
      OurApproach: "Наш подход:",
      WeStay:
        "Мы следим за последними тенденциями и разрабатываем стратегии, отвечающие уникальным потребностям каждого клиента.",
      OurGoal: "Наша цель:",
      ToHelp:
        "Помогать бизнесу развиваться в Интернете, предоставляя современные и эффективные маркетинговые решения.",
      OurValues: "Наши ценности:",
      OurValues1: "Качество:",
      OurValues4: " Каждая деталь тщательно продумана.",
      OurValues2: "Ориентация на клиента:",
      OurValues5: " мы отдаем приоритет целям и потребностям каждого клиента.",
      OurValues3: "Ориентация на результат:",
      OurValues6: " мы фокусируемся на достижении измеримых результатов.",
      WhatWeDo: "Что мы делаем:",
      BrandCreationAndDevelopment: "Создание и развитие бренда.",
      SocialMediaManagement: "Управление социальными сетями.",
      PhotoAndVideoContentProduction: "Производство фото и видеоконтента.",
      CreativeAndAdvertisingPostDesign: "Креативный и рекламный дизайн постов.",
      OurPlans: "Наши планы:",
      WeAre:
        "Мы стремимся к постоянному росту и расширению спектра наших услуг для удовлетворения меняющихся потребностей клиентов.",
      ExperiencedTeamProfessionals: "Опытная команда профессионалов",
      Ourteamconsists:
        "Наша команда состоит из опытных программистов, дизайнеров, видеоредакторов и фотографов, которые привносят многолетний практический опыт в каждый проект. Мы объединяем креативность и техническую экспертизу, чтобы добиться выдающихся результатов.",
      ClientOriented: "Клиентоориентированный подход",
      WePrioritizeYourNeedsVision:
        "Мы отдаем приоритет вашим потребностям и видению. Сосредоточившись на индивидуальных решениях и открытом общении, мы гарантируем, что каждый проект будет соответствовать вашим целям и превзойдет ваши ожидания.",
      ProvenQualityAndReliability: "Проверенное качество и надежность",
      WithAStrong:
        "Имея большой опыт работы в ведущих компаниях и реальных проектах, мы знаем, как выполнять высококачественную работу в срок. Доверьтесь нам, и мы предоставим надежные решения, которые окажут долгосрочное влияние.",
      DoYouHaveIdea: "У вас есть идея? Давайте обсудим ее!",
      LeaveUsA:
        "Оставьте нам запрос, и мы свяжемся с вами как можно скорее. Вместе мы воплотим ваши идеи в жизнь!",
      IAgreeTo:
        "Оставьте нам запрос, и мы свяжемся с вами как можно скорее. Вместе мы воплотим ваши идеи в жизнь!",
      Send: "Отправлять",
      Phone: "Телефон",
      EMail: "Электронная почта",
      WeInSocialNetworks: "Мы в социальных сетях",
      AllRightsReserved: "Все права защищены",
    },
    az: {
      aboutUs: "Haqqımızda",
      services: "Xidmətlər",
      Blog: "Bloq",
      Contacts: "Əlaqələr",
      OrderAProject: "Layihə sifariş edin",
      FromIdeaToVisual:
        "İdeyadan vizuala, koddan sayta. Brendinizi onlayn inkişaf etdirin.",
      SMMPackages: "SMM paketləri",
      WebsiteDeveloping: "Veb saytın hazırlanması",
      BrandIdentityDesign: "Brend Kimliyi Dizaynı",
      CreatingMaterials: "Çap materiallarının yaradılması",
      individualServiceOptions: "Çap materiallarının yaradılması",
      SmmText:
        "Biz çevik aylıq abunə planları təklif edirik. Paketlər ehtiyaclarınıza uyğun olaraq hər hesablaşma dövrünün sonunda düzəldilə və ya təkmilləşdirilə bilər",
      SmmComments1: "*Hədəfli reklam üçün büdcə paketin qiymətinə daxil deyil.",
      SmmComments2:
        "**Sosial Media İdarəçiliyinə (SMM) kopirayterlik, mesajlara cavab vermək, məzmun yaratmaq və hekayələrlə işləmək daxildir.",
      StarterPackage: "Başlanğıc Paketi",
      GraphicPosts: "Qrafik yazılar",
      Reels: "Makaralar",
      SMM: "SMM",
      Target: "Hədəf",
      MotionPosts: "Hərəkət Yazıları",
      monthly: "aylıq",
      GrowthPackage: "Artım Paketi",
      ProPackage: "Pro Paketi",
      ElitePackage: "Elit Paket",
      Choose: "Seçin",
      Website: "Veb saytın",
      Developing: "Hazırlanması",
      WeOffer:
        "Biz çevik aylıq abunə planları təklif edirik. Paketlər ehtiyaclarınıza uyğun olaraq hər hesablaşma dövrünün sonunda düzəldilə və ya təkmilləşdirilə bilər.",
      DraftingABrief: "Qısa mətnin hazırlanması",
      DefiningProjectGoals:
        "Layihənin səsini, hədəf auditoriyasını və internet üçün əsas tövsiyələri müəyyənləşdirmək.",
      MarketingAnalysisAndPrototyping: "Marketinq Təhlili və Prototipləşdirmə",
      AnalyzingTheMarket:
        "Bazarın təhlili və veb sayt prototipinin hazırlanması.",
      WebsiteDesign: "Veb sayt dizaynı",
      WebsiteLayoutAndDevelopment: "Veb sayt tərtibatı və inkişaf.",
      CodingAndBuilding:
        "Veb saytın funksionallığının kodlaşdırılması və qurulması.",
      LaunchOfTheWebsite: "Saytın işə salınması",
      MakingTheWebsite: "Veb saytı canlı və istifadəçilər üçün hazır etmək.",
      CreatingOfPrintMaterials:
        "Veb saytı canlı və istifadəçilər üçün hazır etmək.",
      WeSpecialize:
        "Biz biznes və ya şəxsi ehtiyaclarınızı ödəmək üçün hazırlanmış yüksək keyfiyyətli çap materiallarının yaradılmasında ixtisaslaşmışıq. Dizaynlarımız vizual olaraq cəlbedicidir, peşəkardır və hədəf auditoriyanızla effektiv ünsiyyəti təmin etməklə brend şəxsiyyətinizə uyğundur. Konseptdən tutmuş son çapa hazır fayllara qədər biz marketinq, tədbirlər və ya korporativ məqsədlər üçün çap materialı həllərinin tam çeşidini təqdim edirik.",
      WeSpecializeText:
        "Lazım olan çap materiallarını seçin və başlamaq üçün bizimlə əlaqə saxlayın!",
      B: "B",
      Banners: "Bannerlər",
      Billboards: "Bilbordlar",
      Booklets: "Bukletlər",
      Brochures: "Broşuralar",
      BusinessCards: "Vizit Kartları",
      C: "C",
      Calendars: "Təqvimlər",
      Catalogs: "Kataloqlar",
      Certificates: "Sertifikatlar",
      E: "E",
      Envelopes: "Zərflər",
      EventTickets: "Tədbir biletləri",
      F: "F",
      Flyers: "Flyers",
      I: "I",
      Invitations: "Dəvətlər",
      L: "L",
      Labels: "Etiketlər",
      Letterheads: "Blanklar",
      N: "N",
      Notepads: "Bloknotlar",
      P: "P",
      PackagingDesign: "Qablaşdırma Dizaynı",
      Postcards: "Açıqcalar",
      Posters: "Plakatlar",
      M: "M",
      Magazines: "Jurnallar",
      Menu: "Menyu",
      S: "S",
      Stickers: "Stikerlər",
      WeOfferCustomized:
        "Biz sizin xüsusi ehtiyaclarınıza uyğunlaşdırılmış xidmətlər təklif edirik. Fərdi seçimlərimiz hədəflərinizə effektiv şəkildə çatmağınıza kömək edəcək bir sıra yaradıcı və marketinq həllərini əhatə edir:",
      EngagingShortVideosForSocialMedia:
        "Sosial media üçün cəlbedici qısa videolar",
      days: "günlər",
      GraphicPoster: "Qrafik poster",
      HighQuality:
        "Tədbirlər və ya promosyonlar üçün yüksək kalibrli vizual dizaynlar",
      day: "gün",
      AnimatedPostersThaCaptureAttention:
        "Diqqəti cəlb edən animasiya plakatları",
      VideoEditing: "Video Redaktə",
      ProfessionalEditingToEnhanceYourFootage:
        "Çəkilişlərinizi yaxşılaşdırmaq üçün peşəkar montaj",
      ProfessionalCameraShooting: "Professional Kamera Çəkilişləri",
      HighQualityVideoPhoto:
        "Mütəxəssis avadanlıqla yüksək keyfiyyətli video/foto çəkilişi",
      TargetedAdSetup: "Məqsədli Reklam Quraşdırması",
      Effective: "Auditoriyanıza çatmaq üçün effektiv reklam kampaniyaları",
      PresentationCreation: "Təqdimat yaradılması",
      VisuallyAppealing: "Vizual cəhətdən cəlbedici və təsirli təqdimatlar",
      ComprehensiveSocial: "Hərtərəfli sosial media hesabının idarə edilməsi",
      WithABlend:
        "Strategiya, yaradıcılıq və məlumatlara əsaslanan fikirlərin qarışığı ilə biz mesajınızı gücləndirən, izləyicilərinizi cəlb edən və nəzərəçarpacaq nəticələr əldə edən kampaniyalar hazırlayırıq. Təsirli məzmun yaratmaqdan tutmuş reklam strategiyalarını optimallaşdırmağa kimi biz daim inkişaf edən rəqəmsal mənzərədə brendinizi böyütməyə çalışırıq. Uğurunuz bizim missiyamızdır və biz sizin brendinizin seçilməsini, mənalı şəkildə bağlanmasını və onlayn inkişafını təmin etmək üçün buradayıq.",
      WhoWeAre: "Biz kimik:",
      AYoungMarketing:
        "İstedadlı və bacarıqlı mütəxəssisləri birləşdirən Azərbaycandan gənc marketinq agentliyi.",
      OurApproach: "Bizim yanaşmamız:",
      WeStay:
        "Biz hər bir müştərinin unikal ehtiyaclarını ödəmək üçün ən son tendensiyalar və fərdi strategiyalarla yenilənirik.",
      OurGoal: "Məqsədimiz:",
      ToHelp:
        "Müasir və effektiv marketinq həlləri təqdim etməklə bizneslərin onlayn böyüməsinə kömək etmək.",
      OurValues: "Dəyərlərimiz:",
      OurValues1: "Keyfiyyət:",
      OurValues2: "Müştəri Focus:",
      OurValues5:
        " Biz hər bir müştərinin məqsəd və ehtiyaclarını prioritetləşdiririk.",
      OurValues4: " Hər bir detal diqqətlə işlənib.",
      OurValues3: "Nəticə yönümlü:",
      OurValues6:
        " Biz ölçülə bilən nəticələrin çatdırılmasına diqqət yetiririk.",
      WhatWeDo: "Biz nə edirik:",
      BrandCreationAndDevelopment: "Brendin yaradılması və inkişafı.",
      SocialMediaManagement: "Sosial media menecmenti.",
      PhotoAndVideoContentProduction: "Foto və video məzmun istehsalı.",
      CreativeAndAdvertisingPostDesign:
        "Kreativ və reklam postlarının dizaynı.",
      OurPlans: "Planlarımız:",
      WeAre:
        "Biz davamlı inkişafa və inkişaf edən müştəri tələblərinə cavab vermək üçün xidmət çeşidimizi genişləndirməyə sadiqik.",
      ExperiencedTeamProfessionals: "Təcrübəli Peşəkarlar Komandası",
      Ourteamconsists:
        "Komandamız hər bir layihəyə illərlə praktiki təcrübə gətirən təcrübəli proqramçılar, dizaynerlər, video redaktorlar və fotoqraflardan ibarətdir. Biz əla nəticələr əldə etmək üçün yaradıcılığı və texniki təcrübəni birləşdiririk.",
      ClientOriented: "Müştəri yönümlü yanaşma",
      WePrioritizeYourNeedsVision:
        "Biz sizin ehtiyaclarınızı və vizyonunuzu prioritetləşdiririk. Fərdi həllər və açıq ünsiyyət üzərində fokuslanaraq, biz hər bir layihənin məqsədlərinizə uyğun olmasını və gözləntilərinizi aşmasını təmin edirik.",
      ProvenQualityAndReliability: "Kanıtlanmış Keyfiyyət və Etibarlılıq",
      WithAStrong:
        "Ən yaxşı şirkətlərdə və real layihələrdə işləyən güclü təcrübə ilə biz yüksək keyfiyyətli işi vaxtında necə çatdıracağımızı bilirik. Davamlı təsir göstərən etibarlı həllər təmin etmək üçün bizə etibar edin.",
      DoYouHaveIdea: "Fikriniz var? müzakirə edək!",
      LeaveUsA:
        "Bizə sorğu buraxın və biz ən qısa zamanda sizinlə əlaqə saxlayacağıq. Birlikdə, biz sizin ideyalarınızı həyata keçirəcəyik!",
      IAgreeTo:
        "Bizə sorğu buraxın və biz ən qısa zamanda sizinlə əlaqə saxlayacağıq. Birlikdə, biz sizin ideyalarınızı həyata keçirəcəyik!",
      Send: "Göndər",
      Phone: "Telefon",
      EMail: "E-poçt",
      WeInSocialNetworks: "Biz sosial şəbəkələrdə",
      AllRightsReserved: "Bütün hüquqlar qorunur",
    },
  };

  const [language, setLanguage] = useState("en");
  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  return (
    <MyContext.Provider
      value={{
        handleLanguageChange,
        language,
        translations,
        setLanguage,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext должен использоваться внутри MyProvider");
  }
  return context;
};
