/* ===== tac-diaphragm.com - Translations ===== */
/* Stores original English text and provides Chinese translations */

const originalTexts = new Map();

function saveOriginals() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (!originalTexts.has(key)) {
      originalTexts.set(key, el.innerHTML);
    }
  });
}

const translations = {
  zh: {
    /* Nav */
    'nav.home': '首页',
    'nav.about': '关于我们',
    'nav.technology': '技术',
    'nav.products': '产品',
    'nav.applications': '应用',
    'nav.case-studies': '案例',
    'nav.quality': '质量',
    'nav.contact': '联系',

    /* Company name */
    'company.name': '天勃科技',
    'company.name.full': '广东天勃科技有限公司',
    'company.name.brand': '天勃科技 — ta-C 钻石镀膜振膜专家',

    /* Home - Hero */
    'hero.badge': '新一代扬声器振膜技术',
    'hero.title': 'ta-C 钻石镀膜扬声器振膜',
    'hero.title.highlight': '高性能音频的新一代标准',
    'hero.desc': '采用磁过滤阴极真空电弧（FCVA）技术，在PET、PEEK和PEI基材上沉积高纯度ta-C（四面体非晶碳）涂层。SP³键含量超过85%，兼具钻石的刚性与高分子材料的阻尼特性。',
    'hero.cta.primary': '申请样品',
    'hero.cta.secondary': '了解技术',
    'metric.sp3': '85%+',
    'metric.sp3.label': 'SP³ 钻石键含量',
    'metric.ym': '8,500',
    'metric.ym.label': '杨氏模量 (MPa)',
    'metric.partner': 'Cleer',
    'metric.partner.label': '标杆客户',

    /* Home - Features */
    'features.title': '为什么选择 ta-C 钻石镀膜振膜',
    'features.subtitle': '高性能扬声器振膜的理想解决方案',
    'feature.stiffness.title': '超高刚性',
    'feature.stiffness.desc': 'ta-C涂层显著提升振膜的杨氏模量和刚性，将分割振动频率推向人耳可听范围之外，实现更宽的频响和更低的失真。',
    'feature.damping.title': '优异阻尼特性',
    'feature.damping.desc': '与纯铍或纯钻石振膜不同，ta-C镀膜兼顾了涂层的高刚性和基材的高阻尼，提供可控的振动前沿和后沿。',
    'feature.thermal.title': '热稳定性 & 耐久性',
    'feature.thermal.desc': 'ta-C涂层耐高温、抗湿度变化，保护振膜在长时间高功率使用下仍保持结构完整性和声音一致性。',
    'feature.cost.title': '显著成本优势',
    'feature.cost.desc': '与铍振膜相比，ta-C镀膜方案成本降低80-90%，同时提供接近的性能。无毒性，符合REACH法规。',

    /* Home - Process */
    'process.title': '我们的技术',
    'process.subtitle': '从高纯度石墨到ta-C钻石镀膜振膜的完整工艺链',
    'process.step1.title': '高纯度石墨靶材',
    'process.step1.desc': '选用高纯度石墨作为碳源',
    'process.step2.title': 'FCVA 电弧沉积',
    'process.step2.desc': '磁过滤阴极真空电弧将石墨电离为碳离子',
    'process.step3.title': '筛选纯碳离子',
    'process.step3.desc': '磁过滤偏转筛选掉大颗粒和中性粒子',
    'process.step4.title': 'ta-C 薄膜沉积',
    'process.step4.desc': '纯碳离子沉积在振膜表面，形成sp³ >85%的ta-C膜层',

    /* Home - Comparison */
    'comparison.title': '材料性能对比',
    'comparison.subtitle': 'ta-C vs 传统振膜材料',
    'table.material': '材料',
    'table.stiffness': '刚性',
    'table.damping': '阻尼特性',
    'table.cost': '相对成本',
    'table.toxicity': '毒性',
    'table.freq': '高频延伸',
    'table.taC': 'ta-C 镀膜振膜',
    'table.taC.s': '极高',
    'table.taC.d': '优秀',
    'table.taC.c': '低',
    'table.taC.t': '无',
    'table.taC.f': '极佳',
    'table.beryllium': '铍振膜',
    'table.beryllium.s': '高',
    'table.beryllium.d': '一般',
    'table.beryllium.c': '极高',
    'table.beryllium.t': '有毒',
    'table.beryllium.f': '优秀',
    'table.aluminum': '铝/钛振膜',
    'table.aluminum.s': '中等',
    'table.aluminum.d': '一般',
    'table.aluminum.c': '中等',
    'table.aluminum.t': '无',
    'table.aluminum.f': '良好',
    'table.standard': '标准PET振膜',
    'table.standard.s': '低',
    'table.standard.d': '中等',
    'table.standard.c': '低',
    'table.standard.t': '无',
    'table.standard.f': '有限',

    /* Home - Case Study */
    'casestudy.title': '客户案例',
    'casestudy.tag': '成功案例',
    'casestudy.client': 'Cleer — ARC 6 音乐版',
    'casestudy.desc': 'Cleer，高端音频品牌，在其旗舰产品ARC 6音乐版中采用天勃的ta-C钻石镀膜振膜。ARC 6音乐版搭载16.2mm类金刚石镀层复合振膜，实现了卓越的音质表现。',
    'casestudy.bullet1': 'THX认证 + 杜比全景声 2.0（支持头部追踪）',
    'casestudy.bullet2': '支持LDAC和aptX Lossless高清无线传输（24bit/96kHz）',
    'casestudy.bullet3': '类金刚石（DLC/ta-C）镀层复合振膜提供极佳高频延伸和瞬态响应',
    'casestudy.bullet4': '16.2mm超大动圈单元，实现高保真音质',

    /* Home - CTA */
    'cta.title': '为您的下一代产品配备 ta-C 钻石振膜',
    'cta.desc': '立即联系我们获取技术资料和样品。我们的工程师团队随时为您提供支持。',
    'cta.btn': '联系我们',

    /* Home - Why us */
    'whyus.title': '为什么选择天勃',
    'whyus.subtitle': '扬声器振膜领域的可靠合作伙伴',
    'whyus.1.title': '日本进口基材',
    'whyus.1.desc': 'PET、PEEK、PEI振膜材料均从日本进口，品质稳定可靠',
    'whyus.2.title': '自有沉积工艺',
    'whyus.2.desc': '自主研发的低能耗FCVA工艺，确保镀膜品质和一致性',
    'whyus.3.title': '完整的测试能力',
    'whyus.3.desc': '拥有全消声室和专业测试设备，从振膜到成品全面质量把控',
    'whyus.4.title': '客户验证',
    'whyus.4.desc': 'Cleer等高端品牌的实际量产验证，技术成熟可靠',

    /* Footer */
    'footer.brand': '天勃科技 — ta-C 钻石镀膜振膜专家',
    'footer.desc': '广东天勃科技有限公司（Senioracoustic）专注于ta-C钻石镀膜扬声器振膜的研发与生产，采用日本进口基材和自主FCVA沉积工艺，为全球音频品牌提供高性能振膜解决方案。',
    'footer.products': '产品',
    'footer.products.pet': 'PET + ta-C 钻石膜',
    'footer.products.peek': 'PEEK + ta-C 钻石膜',
    'footer.products.pei': 'PEI + ta-C 钻石膜',
    'footer.company': '公司',
    'footer.company.about': '关于天勃',
    'footer.company.technology': '技术',
    'footer.company.quality': '质量控制',
    'footer.company.contact': '联系我们',
    'footer.support': '支持',
    'footer.support.case': '客户案例',
    'footer.support.apps': '应用领域',
    'footer.support.sample': '申请样品',
    'footer.copyright': '© 2026 广东天勃科技有限公司（Senioracoustic）。保留所有权利。',

    /* About Page */
    'about.page.title': '关于天勃科技',
    'about.page.desc': '了解我们的公司、使命与核心技术能力',
    'about.intro.title': '我们的故事',
    'about.intro.p1': '广东天勃科技有限公司（Senioracoustic）是一家总部位于广东东莞的音频技术公司，专注于高端扬声器振膜及音频检测设备的研发与生产。',
    'about.intro.p2': '天勃科技在音频检测设备领域拥有多年研发与生产经验，独立自主开发了音频分析软件系统。公司拥有大型全消声室、音频分析仪、电声测试仪、蓝牙分析仪、人工嘴、人工耳、人工头等全套专业测试设备。',
    'about.philosophy.title': '我们的信念',
    'about.philosophy.p1': '我们坚信：振膜是决定扬声器品质的核心。理想的振膜需要同时具备轻量化、高杨氏模量、适当的阻尼以及小的分割振动。关键在于振动的前沿与延迟——收到信号立即振动，信号消失及时停止。',
    'about.philosophy.p2': 'ta-C钻石振膜在声传导速度和内阻方面实现了"完美平衡"，具有理想的前沿与延迟特性、超高灵敏度和出色的瞬态响应。',
    'about.tech.title': '技术实力',
    'about.tech.item1': '成熟的ta-C（四面体非晶碳/钻石）振膜生产线',
    'about.tech.item2': '磁过滤阴极真空电弧沉积技术（FCVA）',
    'about.tech.item3': '自主研发生长的低能耗加工方法，实现量产',
    'about.tech.item4': '严格完善的质量检验体系',
    'about.tech.item5': '全消声室及多种专业测试设备',

    /* Technology Page */
    'tech.page.title': 'ta-C 钻石镀膜技术',
    'tech.page.desc': '深入了解四面体非晶碳（ta-C）技术如何在分子层面改变扬声器振膜的性能',
    'tech.what.title': '什么是 ta-C？',
    'tech.what.p1': 'ta-C（四面体非晶碳，Tetrahedral Amorphous Carbon）是类金刚石碳（DLC）家族中最纯净的形式。它由高比例的SP³杂化碳原子组成（>85%），这些碳原子以类似钻石的四面体结构键合，但缺乏长程有序性，因此称为"非晶"或"无定形"。',
    'tech.what.p2': '与含氢的常规DLC（a-C:H）不同，ta-C不含氢元素，这使得其SP³含量和机械性能远高于普通DLC。实际上，ta-C的硬度和刚性介于普通DLC和天然钻石之间，是扬声器振膜应用的理想材料。',
    'tech.process.title': 'FCVA 沉积工艺',
    'tech.process.p1': '磁过滤阴极真空电弧（FCVA）是制备高质量ta-C薄膜的核心技术。该工艺在真空环境中利用高电流电弧将高纯度石墨靶材电离，产生高能碳等离子体。',
    'tech.process.p2': '碳离子通过磁过滤系统偏转，筛选掉未电离的石墨颗粒和宏观粒子，仅允许纯碳离子通过。这些高能碳离子沉积在振膜基底表面，形成致密的ta-C薄膜。',
    'tech.process.p3': '天勃科技开发的低能耗FCVA工艺沉积温度低（<100°C），可与PET、PEEK、PEI等聚合物基材兼容，且大幅降低了制造难度和成本。',
    'tech.benefits.title': 'ta-C 镀膜振膜的声学优势',
    'tech.benefit1.title': '降低失真',
    'tech.benefit1.desc': 'ta-C涂层提升振膜刚性，将分割振动频率推高。显著降低谐波失真，特别是在高频区域。THD可低至0.03%以下。',
    'tech.benefit2.title': '改善瞬态响应',
    'tech.benefit2.desc': '高刚性和优化的阻尼使振膜对音频信号的响应更快、更精确，精准再现打击乐器和人声的细节。',
    'tech.benefit3.title': '扩展高频延伸',
    'tech.benefit3.desc': 'ta-C涂层的声速可达18.3 km/s（远超铝的5.2 km/s和铍的12.3 km/s），使高频延伸超过常规材料。',
    'tech.benefit4.title': '提高声学效率',
    'tech.benefit4.desc': '增强的机械性能使电能到声能的转换更高效，产生更高的声压级和更好的动态范围。',

    /* Products Page */
    'products.page.title': 'ta-C 钻石镀膜振膜产品',
    'products.page.desc': '适用于不同应用场景的ta-C镀膜振膜解决方案',
    'products.pet.title': 'PET + ta-C 钻石镀膜',
    'products.pet.desc': 'PET（聚酯薄膜）是最广泛使用的振膜材料之一，重量轻、柔韧性好、抗拉强度高。ta-C涂层弥补了PET在高频刚性不足的缺点，提供更精准、更清晰的高频声音。',
    'products.pet.app': '适用：高端入耳式耳机（IEM）、TWS耳机、消费类扬声器',
    'products.peek.title': 'PEEK + ta-C 钻石镀膜',
    'products.peek.desc': 'PEEK（聚醚醚酮）是高端振膜材料，以刚性高、重量轻和热稳定性强著称。ta-C涂层进一步增强了PEEK的机械性能，使其成为高保真耳机的理想选择。',
    'products.peek.app': '适用：高保真耳机、监听耳机、汽车音响',
    'products.pei.title': 'PEI + ta-C 钻石镀膜',
    'products.pei.desc': 'PEI（聚醚酰亚胺）具有出色的机械强度、耐高温性和电绝缘性能。ta-C涂层增强了PEI振膜的散热和抗蠕变能力，适合需要长时间高功率运行的扬声器。',
    'products.pei.app': '适用：高端音箱高音单元、专业音响、汽车音响',
    'products.custom.title': '定制服务',
    'products.custom.desc': '除标准PET/PEEK/PEI基材外，我们还提供定制基底材料和ta-C镀膜服务。欢迎联系我们讨论您的特定需求。',

    /* Applications Page */
    'apps.page.title': '应用领域',
    'apps.page.desc': 'ta-C钻石镀膜振膜在各音频应用中的卓越表现',
    'apps.headphones.title': '高端耳机 & IEM',
    'apps.headphones.desc': '在耳机和入耳式监听器（IEM）中，ta-C镀膜振膜提供极低的失真和出色的高频延伸。小巧的振膜尺寸使得镀膜效果尤为显著。已在实际产品中验证（Cleer ARC6音乐版）。',
    'apps.speakers.title': '扬声器系统',
    'apps.speakers.desc': '对于高音单元和中音单元，ta-C镀膜振膜的刚性和轻量化结构使得分割振动频率远高于可听范围，实现纯净的高频重放，无需复杂的分频器补偿。',
    'apps.automotive.title': '汽车音响',
    'apps.automotive.desc': '汽车音响对振膜的耐热性和环境稳定性有极高要求。ta-C镀膜的耐高温和抗湿度特性使其非常适合车载环境。电动汽车市场的快速发展进一步推动了高端汽车音响的需求。',

    /* Quality Page */
    'quality.page.title': '质量控制 & 测试能力',
    'quality.page.desc': '从材料到成品的全面质量把控体系',
    'quality.facility.title': '测试设施',
    'quality.facility.desc': '拥有大型全消声室，为振膜和扬声器产品的声学测试提供专业环境。配备音频分析仪、电声测试仪、蓝牙分析仪、人工嘴、人工耳、人工头等全套测试设备。',
    'quality.process.title': '质量流程',
    'quality.process.1': '日本进口基材来料检验',
    'quality.process.2': 'FCVA镀膜过程在线监控',
    'quality.process.3': 'ta-C膜层厚度与硬度检测',
    'quality.process.4': '振膜声学性能全检',
    'quality.process.5': '环境适应性测试（温湿度循环）',
    'quality.system.title': '自有软件分析系统',
    'quality.system.desc': '独立自主开发的分析软件系统，结合多年音频检测设备研发经验，确保每一批产品的声学性能都经过严格验证。',

    /* Contact Page */
    'contact.page.title': '联系我们',
    'contact.page.desc': '获取技术资料、样品或咨询合作',
    'contact.form.title': '发送询盘',
    'contact.form.name': '姓名 *',
    'contact.form.email': '邮箱 *',
    'contact.form.company': '公司名称 *',
    'contact.form.phone': '电话',
    'contact.form.message': '留言',
    'contact.form.sample': '我需要申请技术样品',
    'contact.form.submit': '发送询盘',
    'contact.form.sent': '感谢您的询盘！我们会尽快与您联系。',
    'contact.info.title': '联系信息',
    'contact.info.response': '我们承诺在24小时内回复所有询盘。',
    'contact.info.address.title': '地址',
    'contact.info.address.value': '广东省东莞市松山湖园区科技二路5号B栋1301室',
    'contact.info.phone.title': '电话',
    'contact.info.phone.value': '+86 188 1921 3579',
    'contact.info.email.title': '邮箱',
    'contact.info.email.value': 'johnsonloveusa@gmail.com',
    'contact.info.person.title': '联系人',
    'contact.info.person.value': '朱国强 (Johnson Zhu)',

    /* General */
    'learn.more': '了解更多',
    'contact.us': '联系我们',
    'request.sample': '申请样品',
  }
};

function getCurrentLang() {
  return document.documentElement.lang || 'en';
}

function applyTranslations(lang) {
  if (lang === 'en') {
    // Restore original English text
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (originalTexts.has(key)) {
        el.innerHTML = originalTexts.get(key);
      }
    });
    document.documentElement.lang = 'en';
  } else {
    // Apply Chinese translations
    const t = translations[lang];
    if (!t) return;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (t[key]) {
        el.innerHTML = t[key];
      }
    });
    document.documentElement.lang = lang;
  }

  localStorage.setItem('tac_lang', lang);

  // Update lang buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

function switchLang(lang) {
  applyTranslations(lang);
}

// Save originals when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', saveOriginals);
} else {
  saveOriginals();
}
