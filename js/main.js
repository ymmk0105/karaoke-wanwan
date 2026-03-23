/* =========================================
   Karaoke Wanwan — main.js
   ========================================= */

// ── Translations ──
const i18n = {
  en: {
    heroLabel:    'JAPAN\'S KARAOKE EXPERIENCE',
    heroH1:       'Sing Together.<br>Create Memories.',
    heroSub:      'Private karaoke rooms for groups of all sizes — open 24 hours, welcoming guests from around the world.',
    ctaReserve:   'Reserve a Room',
    ctaMenu:      'View Menu',
    navAbout:     'About',
    navMenu:      'Menu',
    navStores:    'Stores',
    navReserve:   'Reserve',
    aboutLabel:   'ABOUT',
    aboutTitle:   'Experience Authentic<br>Japanese Karaoke',
    aboutDesc:    'Karaoke Wanwan offers private rooms for 1 to 30+ guests, available 24 hours a day. Whether you\'re a solo visitor or a large group, we have the perfect room for your stay in Japan.',
    ab1Title:     'All-Night Private Rooms',
    ab1Desc:      'Open 24 hours, 365 days. Book by the hour with no closing time.',
    ab2Title:     'Bring Your Own Food &amp; Drinks',
    ab2Desc:      'Unique to Wanwan — outside food and drinks welcome. Enjoy your favorite snacks while singing.',
    feat1Title:   'Open 24H',
    feat1Sub:     '365 days a year',
    feat2Title:   '1–30+ Guests',
    feat2Sub:     'All room sizes',
    feat3Title:   'Multilingual',
    feat3Sub:     'EN / 한 / 繁 / 简',
    menuLabel:    'MENU',
    menuTitle:    'Food &amp; Drinks',
    menuDesc:     'Enjoy our selection of Japanese comfort food and drinks, delivered right to your room.',
    menuItem1:    'Fried Chicken Set',
    menuItem2:    'Draft Beer',
    menuItem3:    'Party Pizza',
    menuItem4:    'Soft Drinks',
    menuSeeAll:   'See Full Menu',
    locLabel:     'LOCATIONS',
    locTitle:     'Find Us in<br>Major Cities',
    locDesc:      'English-speaking staff available. Easy access from major train stations.',
    store1Name:   'Shibuya Honten',
    store1Sub:    '3 min walk · Shibuya Station',
    recommended:  'RECOMMENDED',
    store2Name:   'Shinjuku',
    store2Sub:    '2 min walk · Shinjuku East Exit',
    store3Name:   'Umeda, Osaka',
    store3Sub:    'Direct access · Umeda Station',
    payTitle:     'Accepted Payments',
    payCash:      'Cash',
    payCard:      'Card',
    payEpay:      'e-Pay',
    payBrands:    'Visa · Mastercard · JCB · UnionPay · PayPay · LINE Pay',
    resJp:        'ご予約',
    resTitle:     'Ready to Book<br>Your Room?',
    resSub:       'Available 24 hours · Instant confirmation · No hidden fees',
    resBtn:       'RESERVE NOW',
    trust1:       'English support',
    trust2:       'Secure booking',
    footerDesc:   'Japan\'s authentic karaoke experience for international visitors.',
    footerExplore:'EXPLORE',
    footerServices:'Services',
    footerLegal:  'LEGAL',
    footerTerms:  'Terms of Use',
    footerPrivacy:'Privacy Policy',
    footerFaq:    'FAQ',
    footerCopy:   '© 2026 Karaoke Wanwan. All rights reserved.',
    relKorea:     'Wanwan Korea',
    relMalaysia:  'Wanwan Malaysia',
    relCafe:      'CAFE ECLA',
  },

  kr: {
    heroLabel:    '일본의 가라오케 경험',
    heroH1:       '함께 노래해요.<br>추억을 만들어요.',
    heroSub:      '모든 규모의 그룹을 위한 프라이빗 가라오케룸 — 24시간 오픈, 전 세계 손님 환영합니다.',
    ctaReserve:   '룸 예약하기',
    ctaMenu:      '메뉴 보기',
    navAbout:     '소개',
    navMenu:      '메뉴',
    navStores:    '지점',
    navReserve:   '예약',
    aboutLabel:   '소개',
    aboutTitle:   '정통 일본 가라오케를<br>경험하세요',
    aboutDesc:    'Karaoke Wanwan은 1명부터 30명 이상까지 프라이빗 룸을 제공하며, 24시간 연중무휴로 운영됩니다. 혼자든 대규모 그룹이든, 일본 여행에 딱 맞는 완벽한 룸을 찾아보세요.',
    ab1Title:     '심야 프라이빗 룸',
    ab1Desc:      '24시간, 365일 오픈. 마감 시간 없이 시간 단위로 예약하세요.',
    ab2Title:     '음식 &amp; 음료 반입 가능',
    ab2Desc:      'Wanwan만의 특별함 — 외부 음식과 음료를 가져오실 수 있습니다. 좋아하는 간식을 즐기며 노래하세요.',
    feat1Title:   '24시간 오픈',
    feat1Sub:     '연중무휴',
    feat2Title:   '1–30명 이상',
    feat2Sub:     '모든 룸 규모',
    feat3Title:   '다국어 지원',
    feat3Sub:     'EN / 한 / 繁 / 简',
    menuLabel:    '메뉴',
    menuTitle:    '음식 &amp; 음료',
    menuDesc:     '룸으로 직접 배달되는 일본 가정식과 음료를 즐겨보세요.',
    menuItem1:    '후라이드 치킨 세트',
    menuItem2:    '생맥주',
    menuItem3:    '파티 피자',
    menuItem4:    '소프트 드링크',
    menuSeeAll:   '전체 메뉴 보기',
    locLabel:     '위치',
    locTitle:     '주요 도시에서<br>찾아보세요',
    locDesc:      '영어 구사 직원 상주. 주요 기차역에서 쉽게 오실 수 있습니다.',
    store1Name:   '시부야 본점',
    store1Sub:    '도보 3분 · 시부야역',
    recommended:  '추천',
    store2Name:   '신주쿠',
    store2Sub:    '도보 2분 · 신주쿠 동쪽 출구',
    store3Name:   '우메다, 오사카',
    store3Sub:    '직접 연결 · 우메다역',
    payTitle:     '결제 수단',
    payCash:      '현금',
    payCard:      '카드',
    payEpay:      '전자 결제',
    payBrands:    'Visa · Mastercard · JCB · UnionPay · PayPay · LINE Pay',
    resJp:        '예약',
    resTitle:     '지금 룸을<br>예약하시겠어요?',
    resSub:       '24시간 이용 가능 · 즉시 확인 · 숨겨진 수수료 없음',
    resBtn:       '지금 예약하기',
    trust1:       '영어 지원',
    trust2:       '안전한 예약',
    footerDesc:   '전 세계 방문객을 위한 정통 일본 가라오케 경험.',
    footerExplore:'탐색',
    footerServices:'서비스',
    footerLegal:  '법적 고지',
    footerTerms:  '이용 약관',
    footerPrivacy:'개인정보 처리방침',
    footerFaq:    '자주 묻는 질문',
    footerCopy:   '© 2026 Karaoke Wanwan. All rights reserved.',
    relKorea:     'Wanwan Korea',
    relMalaysia:  'Wanwan Malaysia',
    relCafe:      'CAFE ECLA',
  },

  tw: {
    heroLabel:    '日本的卡拉OK體驗',
    heroH1:       '一起歌唱。<br>創造回憶。',
    heroSub:      '為各種規模的團體提供私人卡拉OK包廂 — 24小時開放，歡迎來自世界各地的賓客。',
    ctaReserve:   '預訂包廂',
    ctaMenu:      '查看菜單',
    navAbout:     '關於我們',
    navMenu:      '菜單',
    navStores:    '門店',
    navReserve:   '預訂',
    aboutLabel:   '關於我們',
    aboutTitle:   '體驗道地的<br>日本卡拉OK',
    aboutDesc:    'Karaoke Wanwan提供1至30人以上的私人包廂，全年24小時開放。無論您是獨自一人還是大型團體，我們都有適合您在日本旅途中的完美包廂。',
    ab1Title:     '通宵私人包廂',
    ab1Desc:      '全年24小時開放，按小時預訂，無打烊時間。',
    ab2Title:     '可攜帶自備食物 &amp; 飲料',
    ab2Desc:      'Wanwan的獨特之處 — 歡迎攜帶外食和飲料。邊享用您最愛的零食，邊盡情歌唱。',
    feat1Title:   '24小時開放',
    feat1Sub:     '全年無休',
    feat2Title:   '1至30人以上',
    feat2Sub:     '各種房間大小',
    feat3Title:   '多語言服務',
    feat3Sub:     'EN / 한 / 繁 / 简',
    menuLabel:    '菜單',
    menuTitle:    '餐飲',
    menuDesc:     '享用直送到您包廂的日式料理和飲料。',
    menuItem1:    '炸雞套餐',
    menuItem2:    '生啤酒',
    menuItem3:    '派對披薩',
    menuItem4:    '軟性飲料',
    menuSeeAll:   '查看完整菜單',
    locLabel:     '門店位置',
    locTitle:     '在主要城市<br>找到我們',
    locDesc:      '提供英語服務人員，鄰近主要車站，交通方便。',
    store1Name:   '澀谷本店',
    store1Sub:    '步行3分鐘 · 澀谷車站',
    recommended:  '推薦',
    store2Name:   '新宿',
    store2Sub:    '步行2分鐘 · 新宿東口',
    store3Name:   '梅田，大阪',
    store3Sub:    '直接連通 · 梅田車站',
    payTitle:     '接受付款方式',
    payCash:      '現金',
    payCard:      '信用卡',
    payEpay:      '電子支付',
    payBrands:    'Visa · Mastercard · JCB · UnionPay · PayPay · LINE Pay',
    resJp:        '預訂',
    resTitle:     '準備好預訂<br>您的包廂了嗎？',
    resSub:       '24小時可用 · 即時確認 · 無隱藏費用',
    resBtn:       '立即預訂',
    trust1:       '英語支援',
    trust2:       '安全預訂',
    footerDesc:   '為國際旅客提供的正宗日本卡拉OK體驗。',
    footerExplore:'探索',
    footerServices:'服務',
    footerLegal:  '法律資訊',
    footerTerms:  '使用條款',
    footerPrivacy:'隱私政策',
    footerFaq:    '常見問題',
    footerCopy:   '© 2026 Karaoke Wanwan. All rights reserved.',
    relKorea:     'Wanwan Korea',
    relMalaysia:  'Wanwan Malaysia',
    relCafe:      'CAFE ECLA',
  },

  cn: {
    heroLabel:    '日本卡拉OK体验',
    heroH1:       '一起歌唱。<br>创造回忆。',
    heroSub:      '为各种规模的团体提供私人卡拉OK包厢 — 24小时开放，欢迎来自世界各地的宾客。',
    ctaReserve:   '预订包厢',
    ctaMenu:      '查看菜单',
    navAbout:     '关于我们',
    navMenu:      '菜单',
    navStores:    '门店',
    navReserve:   '预订',
    aboutLabel:   '关于我们',
    aboutTitle:   '体验正宗的<br>日本卡拉OK',
    aboutDesc:    'Karaoke Wanwan提供1至30人以上的私人包厢，全年24小时开放。无论您是独自一人还是大型团体，我们都有适合您在日本旅途中的完美包厢。',
    ab1Title:     '通宵私人包厢',
    ab1Desc:      '全年24小时开放，按小时预订，无打烊时间。',
    ab2Title:     '可携带自备食物 &amp; 饮料',
    ab2Desc:      'Wanwan的独特之处 — 欢迎携带外食和饮料。边享用您最爱的零食，边尽情歌唱。',
    feat1Title:   '24小时开放',
    feat1Sub:     '全年无休',
    feat2Title:   '1至30人以上',
    feat2Sub:     '各种房间大小',
    feat3Title:   '多语言服务',
    feat3Sub:     'EN / 한 / 繁 / 简',
    menuLabel:    '菜单',
    menuTitle:    '餐饮',
    menuDesc:     '享用直送到您包厢的日式料理和饮料。',
    menuItem1:    '炸鸡套餐',
    menuItem2:    '生啤酒',
    menuItem3:    '派对披萨',
    menuItem4:    '软饮料',
    menuSeeAll:   '查看完整菜单',
    locLabel:     '门店位置',
    locTitle:     '在主要城市<br>找到我们',
    locDesc:      '提供英语服务人员，邻近主要车站，交通方便。',
    store1Name:   '涩谷本店',
    store1Sub:    '步行3分钟 · 涩谷车站',
    recommended:  '推荐',
    store2Name:   '新宿',
    store2Sub:    '步行2分钟 · 新宿东口',
    store3Name:   '梅田，大阪',
    store3Sub:    '直接连通 · 梅田车站',
    payTitle:     '接受付款方式',
    payCash:      '现金',
    payCard:      '信用卡',
    payEpay:      '电子支付',
    payBrands:    'Visa · Mastercard · JCB · UnionPay · PayPay · LINE Pay',
    resJp:        '预订',
    resTitle:     '准备好预订<br>您的包厢了吗？',
    resSub:       '24小时可用 · 即时确认 · 无隐藏费用',
    resBtn:       '立即预订',
    trust1:       '英语支持',
    trust2:       '安全预订',
    footerDesc:   '为国际旅客提供的正宗日本卡拉OK体验。',
    footerExplore:'探索',
    footerServices:'服务',
    footerLegal:  '法律信息',
    footerTerms:  '使用条款',
    footerPrivacy:'隐私政策',
    footerFaq:    '常见问题',
    footerCopy:   '© 2026 Karaoke Wanwan. All rights reserved.',
    relKorea:     'Wanwan Korea',
    relMalaysia:  'Wanwan Malaysia',
    relCafe:      'CAFE ECLA',
  },
};

// ── Apply translations ──
function applyLang(lang) {
  const dict = i18n[lang] || i18n.en;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });
  document.documentElement.lang = { en: 'en', kr: 'ko', tw: 'zh-TW', cn: 'zh-CN' }[lang] || 'en';
}

// ── Language selector ──
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    applyLang(btn.dataset.lang);
  });
});

// ── Lucide icons ──
if (typeof lucide !== 'undefined') {
  lucide.createIcons();
}

// ── Quick-nav active state on scroll ──
const sections = Array.from(document.querySelectorAll('section[id]'));
const navLinks  = Array.from(document.querySelectorAll('.qnav-link[href^="#"]'));
const HEADER_H  = 56 + 44;

const activateNav = () => {
  const scrollY = window.scrollY + HEADER_H + 10;
  let current = sections[0].id;
  sections.forEach(sec => {
    if (sec.offsetTop <= scrollY) current = sec.id;
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
};

window.addEventListener('scroll', activateNav, { passive: true });
activateNav();

// ── Smooth-scroll ──
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const top = target.getBoundingClientRect().top + window.scrollY - HEADER_H + 4;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});
