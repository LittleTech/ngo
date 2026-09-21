/**
 * Trauma Healing Childcare and Development Association (THECCODA)
 * Initial Seed Data Repository — Established 1997
 * Registered National and Local NGO in Uganda
 * Headquarters: Makalama Village, Bukibino Sub-County, Manjiya County, Bududa District, Uganda
 * Slogan: "Building a community driven with faith and hope"
 */

window.KATOSI_INITIAL_DATA = {
  settings: {
    orgName: "THECCODA",
    legalName: "Trauma Healing Childcare and Development Association",
    acronym: "THECCODA",
    slogan: "Building a community driven with faith and hope",
    tagline: "Building a community driven with faith and hope",
    vision: "A world enabling vulnerable individuals have access to better social services.",
    mission: "Bring people together to build hope, peace and community.",
    coreValues: [
      { number: 1, title: "Compassion and dignity", desc: "Serving every hurting heart and vulnerable individual with boundless love, deep empathy, and profound respect." },
      { number: 2, title: "Resilience", desc: "Cultivating inner strength, psychological healing, and endurance that outlasts crisis, poverty, and displacement." },
      { number: 3, title: "Integrity & equity", desc: "Ensuring upright moral conduct, fairness, and nondiscriminatory access to social assistance for all persons." },
      { number: 4, title: "Accountability", desc: "Practicing rigorous transparency, verifiable donor reporting, and faithful stewardship before our community." },
      { number: 5, title: "Collaboration", desc: "Building trusted coalitions with local residents, health leaders, institutions, and global supporters for shared impact." }
    ],
    description: "Trauma Healing Childcare and Development Association (THECCODA) is a registered national and local NGO founded in 1997 in Bududa District, Uganda. We are devoted to caring for vulnerable persons, providing clinical counseling and trauma healing guidance, holistic childcare, and sustainable community development rooted in faith and hope.",
    foundingYear: 1997,
    status: "Registered National & Local Non-Governmental Organisation (Uganda NGO Board Reg. #INBR199708)",
    address: "Makalama Village, Bukibino Sub-County, Manjiya County, Bududa District, Uganda, East Africa",
    regionalOffice: "Plot 14, Cathedral Road, Mbale City & National Liaison Office, Kampala, Uganda",
    poBox: "P.O. Box 244, Bududa / P.O. Box 1120, Mbale, Uganda",
    phone: "+256 (0) 772 458 912 / +256 (0) 750 314 628",
    crisisHotline: "+256 800 222 888 (24/7 Toll-Free Community & Child Crisis Helpline)",
    email: "info@theccoda.org",
    secondaryEmail: "traumahealingassociation@gmail.com",
    safeguardingEmail: "safeguarding@theccoda.org",
    officeHours: "Monday – Saturday: 8:00 AM – 5:30 PM (EAT) | 24/7 Crisis Response & Vulnerable Persons Intake",
    socialLinks: {
      facebook: "https://facebook.com",
      twitter: "https://x.com",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
      youtube: "https://youtube.com"
    },
    emergencyBanner: {
      enabled: true,
      text: "Bududa Vulnerable Persons & Child Trauma Recovery Appeal is active.",
      link: "donate.html"
    },
    // Donation Account Details for Local and International Donors
    donationDetails: {
      mobileMoney: {
        mtn: {
          name: "MTN Mobile Money",
          merchantCode: "984210",
          registeredName: "THECCODA TRAUMA HEALING",
          ussdCode: "*165*3#",
          instructions: "Dial *165*3# -> Enter Merchant Code 984210 -> Enter Amount -> Enter Reference: DONATION -> Confirm with PIN",
          contactNumber: "+256 772 458 912"
        },
        airtel: {
          name: "Airtel Money",
          merchantCode: "1204892",
          registeredName: "THECCODA TRAUMA HEALING",
          ussdCode: "*185*9#",
          instructions: "Dial *185*9# -> Enter Merchant Code 1204892 -> Enter Amount -> Enter Reference: DONATION -> Confirm with PIN",
          contactNumber: "+256 750 314 628"
        }
      },
      bank: {
        localUGX: {
          bankName: "Centenary Bank Uganda",
          branch: "Mbale / Bududa Service Center",
          accountName: "Trauma Healing Childcare and Development Association",
          accountNumber: "310008472910",
          currency: "UGX (Ugandan Shillings)",
          swiftCode: "CERBUGKA"
        },
        intlUSD: {
          bankName: "Centenary Bank Uganda (Foreign Currency Operations)",
          branch: "Mbale Corporate Branch / Kampala Main",
          accountName: "Trauma Healing Childcare and Development Association",
          accountNumber: "9030018472911",
          currency: "USD ($ United States Dollars)",
          swiftCode: "CERBUGKA",
          bankAddress: "Plot 7, Cathedral Avenue, P.O. Box 988, Mbale / Kampala, Uganda"
        },
        intlEUR: {
          bankName: "Centenary Bank Uganda",
          branch: "Mbale Corporate Branch / Kampala Main",
          accountName: "Trauma Healing Childcare and Development Association",
          accountNumber: "9030018472912",
          currency: "EUR (€ Euros)",
          swiftCode: "CERBUGKA",
          bankAddress: "Mbale / Kampala, Uganda"
        },
        stanbicUGX: {
          bankName: "Stanbic Bank Uganda",
          branch: "Mbale Branch",
          accountName: "Trauma Healing Childcare and Development Association (THECCODA)",
          accountNumber: "9030005829143",
          currency: "UGX / USD Multicurrency",
          swiftCode: "SBICUGKX"
        }
      },
      remittance: {
        services: ["Sendwave", "WorldRemit", "Remitly", "Western Union", "MoneyGram"],
        guidance: "International donors can transfer funds instantly from abroad straight to our MTN (+256 772 458 912) or Airtel (+256 750 314 628) mobile money lines or to our Centenary Bank USD account. Recipient Name: Trauma Healing Childcare and Development Association."
      }
    }
  },

  stats: [
    { id: "stat-years", value: "29+", label: "Years of Community Service (Since 1997)", icon: "calendar" },
    { id: "stat-vulnerable", value: "38,500+", label: "Vulnerable Persons & Children Cared For", icon: "users" },
    { id: "stat-counseling", value: "19,200+", label: "Counseling & Trauma Healing Sessions", icon: "heart" },
    { id: "stat-havens", value: "3,400+", label: "Safe Haven Placements & Rescues", icon: "shield-check" },
    { id: "stat-circles", value: "120+", label: "Faith & Hope Community Support Circles", icon: "map-pin" }
  ],

  programmes: [
    {
      id: "vulnerable-persons",
      slug: "caring-for-vulnerable-persons",
      title: "Caring for Vulnerable Persons",
      shortDesc: "Compassionate social assistance, emergency nourishment, shelter, and medical support for orphans, destitute widows, the elderly, and persons with disabilities in Bududa and across Uganda.",
      fullDesc: "Founded in 1997 in the high-need landscape of Bududa District, THECCODA provides comprehensive social safety nets for vulnerable members of our society. This includes orphaned children, elderly persons without kinship support, people living with severe physical or cognitive disabilities, and families displaced by recurring landslides and poverty. Our field caseworkers deliver direct material aid, warm bedding, balanced food rations, assistive mobility devices, and dignified home-based care.",
      lead: "Reverend Stephen Watuwa, Community Welfare Director",
      metrics: [
        { label: "Vulnerable Persons Reached", value: "38,500+ Individuals" },
        { label: "Elderly & Disabled Home Visits", value: "6,400+ Visits" },
        { label: "Emergency Food & Relief Packages", value: "12,800+ Distributed" }
      ],
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80",
      featured: true
    },
    {
      id: "counseling-guidance",
      slug: "counseling-and-guidance-trauma-healing",
      title: "Counseling, Guidance & Trauma Healing",
      shortDesc: "Professional psychosocial therapy, bereavement counseling, faith-and-hope guidance circles, and trauma recovery for individuals, youth, and families recovering from crisis.",
      fullDesc: "Deep emotional trauma from natural disasters, sudden loss, domestic conflict, and severe hardship often paralyzes individuals and fractures families. THECCODA's certified counselors and community faith leaders provide structured, empathetic counseling and guidance. Through one-on-one psychotherapy, expressive art therapy for children, bereavement support, and faith-and-hope community healing circles, survivors find peace, rebuild self-worth, and regain strength to rebuild their lives.",
      lead: "Dr. Grace Nabukwasi, Clinical Psychologist & Trauma Lead",
      metrics: [
        { label: "Individual Counseling Sessions", value: "19,200+ Sessions" },
        { label: "Faith & Hope Support Circles", value: "120+ Active Groups" },
        { label: "Trauma Symptom Remission Rate", value: "95% Documented" }
      ],
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80",
      featured: true
    },
    {
      id: "childcare-protection",
      slug: "childcare-protection-education-support",
      title: "Childcare, Protection & Education Support",
      shortDesc: "Protective safe haven shelters, early childhood daycare, full education sponsorships, scholastic kits, pediatric nutrition, and child rights safeguarding.",
      fullDesc: "Every child deserves a secure childhood free from danger, hunger, and illiteracy. THECCODA manages safe transitional havens in Makalama and Bududa, provides early childhood daycare for struggling single mothers, and awards comprehensive school fee sponsorships. We supply uniforms, textbooks, daily meals, and mentorship, while maintaining a 24/7 child crisis protection desk working in partnership with local probation officers and law enforcement.",
      lead: "Miriam Khabuya, Head of Child Welfare & Protection",
      metrics: [
        { label: "Children on School Sponsorship", value: "7,800+ Students" },
        { label: "Children in Safe Sanctuary Care", value: "3,400+ Placements" },
        { label: "Partner Schools Trained", value: "48 Primary & Secondary" }
      ],
      image: "images/hero-tcdo.jpg",
      featured: true
    },
    {
      id: "community-development",
      slug: "community-development-livelihoods-faith-hope",
      title: "Community Development & Livelihood Empowerment",
      shortDesc: "Sustainable livelihood skills, Village Savings and Loan Associations (VSLAs), regenerative agriculture, clean water access, and community faith-and-hope initiatives.",
      fullDesc: "True long-term trauma healing requires economic dignity and self-reliance. THECCODA organizes community-driven development programs across Bukibino and neighboring sub-counties. We train vulnerable mothers and youth in tailoring, carpentry, sustainable slope farming, and agro-forestry. Our 80+ Village Savings and Loan Associations (VSLAs) provide seed capital for family micro-enterprises, breaking intergenerational poverty cycles.",
      lead: "David Masaba, Livelihoods & Community Development Lead",
      metrics: [
        { label: "Active Caregiver VSLAs", value: "84 Cooperatives" },
        { label: "Youth & Women Trained in Trades", value: "4,900+ Graduates" },
        { label: "Clean Gravity Water Points Built", value: "26 Springs Protected" }
      ],
      image: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=1200&q=80",
      featured: true
    }
  ],

  projects: [
    {
      id: "proj-1",
      slug: "makalama-vulnerable-persons-child-haven",
      title: "Makalama Vulnerable Persons & Child Haven Center",
      programmeId: "childcare-protection",
      programmeName: "Childcare, Protection & Education Support",
      district: "Bududa District (Manjiya County)",
      location: "Makalama Village, Bukibino Sub-County",
      status: "Active",
      year: "1997 - Present (Continuous Expansion)",
      budget: "$180,000 USD Annual",
      fundedPercent: 86,
      targetBeneficiaries: "2,500 Vulnerable Persons & Children",
      currentBeneficiaries: "2,150 Persons Supported",
      leadPartner: "District Local Government & Community Elders",
      heroImage: "images/hero-tcdo.jpg",
      overview: "Our central headquarters hub in Makalama village providing emergency haven beds, infant daycare, psychological counseling suites, and community food distribution.",
      problem: "Remote mountain villages in Bududa face severe geographic isolation, frequent mudslides, poverty, and limited access to formal social welfare and child protection services.",
      approach: "A grassroots, faith-and-hope community sanctuary providing multi-sectoral support under one roof: safe beds, hot meals, clinical counseling, and educational support.",
      activities: [
        "24/7 emergency residential haven for abandoned, abused, or orphaned children",
        "Weekly counseling and guidance clinics for traumatized families and disaster survivors",
        "Daily nutritious porridge and lunch feeding program for over 350 vulnerable children",
        "Distribution of clothing, blankets, and hygiene kits to destitute elderly villagers"
      ],
      results: [
        "Over 3,400 children safely accommodated and nurtured since project inception",
        "100% of children restored to healthy growth parameters and enrolled in school",
        "Recognized by district leadership as the cornerstone child and family haven in Manjiya county"
      ],
      featured: true,
      gallery: [
        "images/hero-tcdo.jpg",
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: "proj-2",
      slug: "bududa-trauma-healing-counseling-circles",
      title: "Faith & Hope Community Trauma Healing Circles",
      programmeId: "counseling-guidance",
      programmeName: "Counseling, Guidance & Trauma Healing",
      district: "Bududa, Mbale & Namisindwa Districts",
      location: "Bukibino, Bushika, Bubita & Regional Field Outreaches",
      status: "Active",
      year: "2024 - 2026",
      budget: "$95,000 USD",
      fundedPercent: 82,
      targetBeneficiaries: "4,000 Crisis Survivors",
      currentBeneficiaries: "3,420 Individuals Enrolled",
      leadPartner: "Inter-Religious Council & Community Leaders",
      heroImage: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80",
      overview: "Community-based mental health and spiritual recovery circles helping landslide survivors, grieving widows, and traumatized youths process pain through faith, fellowship, and guided therapy.",
      problem: "Trauma from loss of loved ones, destruction of homes, and chronic poverty causes silent depression, anxiety, and familial conflict that traditional medical clinics cannot treat.",
      approach: "Integrating professional clinical psychology with community faith-and-hope traditions, storytelling, and peer support groups led by trained community counselors.",
      activities: [
        "Bi-weekly community healing circles held in 24 villages across Bukibino sub-county",
        "Specialized play and expressive art therapy sessions for traumatized children",
        "Training of 60 local religious leaders, teachers, and elders in psychological first aid",
        "Mobile counseling visits for bedridden elders and severely traumatized survivors"
      ],
      results: [
        "92% of participants reported restored hope, improved sleep, and reduced panic symptoms",
        "Significant decrease in domestic violence reported across participating parishes",
        "Creation of durable mutual-aid fellowship groups that support each other in times of need"
      ],
      featured: true,
      gallery: [
        "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: "proj-3",
      slug: "vulnerable-children-education-sponsorship-bursary",
      title: "Orphan & Vulnerable Child Education Bursary Scheme",
      programmeId: "childcare-protection",
      programmeName: "Childcare, Protection & Education Support",
      district: "Bududa & Eastern Uganda Corridor",
      location: "Bukibino Sub-County & 48 Partner Schools",
      status: "Active",
      year: "Ongoing Since 1999",
      budget: "$130,000 USD Annual",
      fundedPercent: 79,
      targetBeneficiaries: "1,200 Students Annually",
      currentBeneficiaries: "980 Students Currently Sponsored",
      leadPartner: "Ministry of Education & District Education Office",
      heroImage: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1200&q=80",
      overview: "Ensuring that no child in Makalama or Bududa is denied an education due to the loss of parents, disability, or acute economic deprivation.",
      problem: "Over 45% of children in vulnerable households drop out before completing primary school due to inability to afford tuition, uniforms, books, and exam fees.",
      approach: "Holistic scholarship packages that cover 100% of school requirements, coupled with trauma-sensitive teacher mentorship and remedial academic clinics.",
      activities: [
        "Full payment of tuition and examination fees directly to registered primary and secondary schools",
        "Distribution of uniforms, sturdy shoes, backpacks, notebooks, and mathematical instruments",
        "Termly academic progress tracking and counseling for students struggling with grief or trauma",
        "Holiday reading camps and character mentorship clinics at Makalama community center"
      ],
      results: [
        "Over 7,800 students educated through this scheme since 1999, including 240+ university and tertiary graduates",
        "97.4% primary leaving examination (PLE) passing rate among sponsored students",
        "Zero dropouts among currently enrolled bursary beneficiaries over the past 3 academic years"
      ],
      featured: true,
      gallery: [
        "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80",
        "images/hero-tcdo.jpg"
      ]
    },
    {
      id: "proj-4",
      slug: "caregiver-livelihoods-vsla-resilience",
      title: "Vulnerable Mothers & Widows Economic Empowerment (VSLA)",
      programmeId: "community-development",
      programmeName: "Community Development & Livelihood Empowerment",
      district: "Bududa District",
      location: "Bukibino, Manjiya County",
      status: "Active",
      year: "2023 - 2026",
      budget: "$85,000 USD",
      fundedPercent: 94,
      targetBeneficiaries: "1,500 Women Caregivers & Widows",
      currentBeneficiaries: "1,380 Caregivers Enrolled",
      leadPartner: "Uganda Women Entrepreneurship Programme (UWEP)",
      heroImage: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=1200&q=80",
      overview: "Equipping widowed mothers and caregivers of vulnerable children with vocational skills, financial literacy, and savings groups to foster independent family security.",
      problem: "When breadwinners pass away or are incapacitated, surviving mothers face acute economic vulnerability, forcing children into hazardous child labor or early marriage.",
      approach: "Establishing community-managed Village Savings and Loan Associations (VSLAs) combined with seed micro-grants for tailoring, high-value coffee farming, and poultry rearing.",
      activities: [
        "Formation and mentoring of 84 community savings and loan cooperatives",
        "Hands-on vocational workshops in commercial tailoring, knitting, baking, and modern vegetable gardening",
        "Provision of start-up sewing machines, improved seedlings, and veterinary supplies",
        "Financial literacy training covering bookkeeping, savings discipline, and market linkage"
      ],
      results: [
        "Average household income increased by 280% within 12 months of VSLA participation",
        "Over 98% of participating caregivers now comfortably feed and clothe their children without external emergency aid",
        "100% loan recovery rate across all community-managed credit cycles"
      ],
      featured: false,
      gallery: [
        "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=800&q=80"
      ]
    }
  ],

  stories: [
    {
      id: "story-1",
      slug: "mary-journey-from-loss-to-hope",
      title: "From Grief to Hope: Mary's Story of Renewal in Makalama",
      person: "Mary Namono, 16 Years Old",
      location: "Makalama Village, Bududa",
      quote: "When landslides took my parents, I thought my life was over. THECCODA took me into their safe haven, gave me counseling, and put me back in school. Today I know God has a purpose for me.",
      body: "In 2019, catastrophic mudslides swept through Mary's village, claiming both her parents and their family home. At age 10, Mary was left completely destitute, suffering from intense panic attacks and night terrors. THECCODA's community outreach team brought Mary to our Makalama Safe Haven, where she received continuous trauma therapy, grief counseling, balanced meals, and a full educational scholarship. Seven years later, Mary is an honor student preparing for her Uganda Certificate of Education (UCE) exams, aspiring to become a clinical psychologist to heal other traumatized children.",
      image: "images/hero-tcdo.jpg",
      programme: "Childcare & Trauma Healing"
    },
    {
      id: "story-2",
      slug: "mama-florence-faith-and-resilience",
      title: "Restoring Dignity: How Mama Florence Rebuilt Her Family",
      person: "Florence Nabulo, 54, Widow & Grandmother",
      location: "Bukibino Sub-County, Manjiya",
      quote: "I was left with six grandchildren and no food. The counseling gave me peace of mind, and the VSLA gave me the capital to start my bakery. Faith and hope carried us through.",
      body: "Widowed and caring for six orphaned grandchildren, Florence was on the verge of emotional and financial collapse. Through THECCODA's Faith & Hope Counseling Circles, she found spiritual strength and emotional release. Joining our Bukibino Caregiver VSLA, she received financial training and a start-up grant of 200,000 UGX to purchase baking supplies. Today, her small bakery earns over 450,000 UGX monthly, allowing her to keep all six grandchildren well-fed and thriving in school.",
      image: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=800&q=80",
      programme: "Community Development & Counseling"
    },
    {
      id: "story-3",
      slug: "peter-pathway-to-healing",
      title: "Breaking the Silence: Peter's Triumph Over Severe Trauma",
      person: "Peter Masaba, 12 Years Old",
      location: "Bududa District",
      quote: "Before coming to THECCODA, I could not speak. The art counseling room was the first place where I felt nobody would hurt me. Now I can smile and play with friends again.",
      body: "Peter suffered severe domestic neglect and emotional shock during early childhood, rendering him selectively mute and withdrawn. After being referred to the Makalama Trauma Recovery Hub by the district probation officer, our child counselors engaged him in non-verbal play and watercolor therapy. Over 14 months of patient, compassionate care, Peter gradually began to speak, regain trust in adults, and express his joy. He is now at the top of his primary class.",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80",
      programme: "Counseling, Guidance & Trauma Healing"
    }
  ],

  news: [
    {
      id: "news-1",
      slug: "theccoda-29-years-community-anniversary",
      title: "Celebrating 29 Years of Faith, Hope, and Community Service in Bududa (1997 – 2026)",
      date: "March 12, 2026",
      category: "Milestone",
      author: "Secretariat, THECCODA Bududa",
      summary: "Over two thousand community members, church leaders, local government officials, and international partners gathered at Makalama to celebrate 29 years of uninterrupted humanitarian impact.",
      body: "Established in 1997, Trauma Healing Childcare and Development Association (THECCODA) marked its 29th anniversary with an inspiring day of prayer, community testimonies, medical screenings, and scholarship award ceremonies at our Makalama Headquarters. Over the past nearly three decades, THECCODA has grown from a humble grassroots prayer and relief group into an accredited national and local NGO reaching more than 38,500 vulnerable persons across Uganda.",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "news-2",
      slug: "new-mobile-money-and-bank-channels-launched",
      title: "Direct Giving Launched for Local and International Donors via Mobile Money & Global Bank Wires",
      date: "March 5, 2026",
      category: "Donations & Transparency",
      author: "Finance Directorate",
      summary: "THECCODA has expanded official donation channels with verified MTN MoMo and Airtel Money merchant codes, plus international SWIFT accounts and remittance integrations.",
      body: "To support our ongoing vulnerable persons and childcare operations, THECCODA has upgraded its public giving portal. Local supporters can now contribute seamlessly using MTN Mobile Money (Merchant: 984210) and Airtel Money (Merchant: 1204892), while international donors in the US, Europe, and worldwide can use direct bank wire transfers, international remittance apps (Sendwave, WorldRemit, Remitly), and major cards.",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "news-3",
      slug: "community-trauma-healing-outreach-bukibino",
      title: "Over 450 Vulnerable Individuals Receive Specialized Counseling in Bukibino Sub-County Outreach",
      date: "February 22, 2026",
      category: "Field Operations",
      author: "Counseling Team",
      summary: "A 5-day community psychosocial clinic delivered bereavement counseling, trauma guidance, and family preservation support across remote mountain villages in Manjiya county.",
      body: "Our clinical team and community mentors conducted intensive trauma healing circles in Makalama, Bushika, and surrounding villages. Special attention was given to elderly widows caring for orphans, disaster-affected farmers, and school dropouts seeking a pathway back to education and livelihood stability.",
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80"
    }
  ],

  partners: [
    {
      id: "partner-gov",
      name: "Bududa District Local Government",
      type: "Local Authority",
      logo: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=240&q=80"
    },
    {
      id: "partner-mglsd",
      name: "Ministry of Gender, Labour and Social Development (Uganda)",
      type: "Government Ministry",
      logo: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=240&q=80"
    },
    {
      id: "partner-church",
      name: "Inter-Religious Council of Uganda & Bududa Churches",
      type: "Faith & Community Partner",
      logo: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=240&q=80"
    },
    {
      id: "partner-ucrnn",
      name: "Uganda Child Rights NGO Network (UCRNN)",
      type: "Civil Society Coalition",
      logo: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=240&q=80"
    },
    {
      id: "partner-intl",
      name: "Global Hope & Child Protection Alliance",
      type: "International Donors & Philanthropy",
      logo: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=240&q=80"
    }
  ],

  donations: [
    {
      id: "DON-2026-1049",
      donorName: "Dr. Elizabeth Mugeni",
      email: "e.mugeni@example.com",
      amount: 250000,
      currency: "UGX",
      frequency: "Monthly",
      programme: "Caring for Vulnerable Persons",
      status: "Completed",
      paymentMethod: "MTN Mobile Money",
      date: "2026-03-14",
      isAnonymous: false
    },
    {
      id: "DON-2026-1048",
      donorName: "Grace Fellowship International",
      email: "giving@gracefellowship.org",
      amount: 500,
      currency: "USD",
      frequency: "One-Time",
      programme: "Counseling, Guidance & Trauma Healing",
      status: "Completed",
      paymentMethod: "Bank Transfer (SWIFT Wire)",
      date: "2026-03-12",
      isAnonymous: false
    },
    {
      id: "DON-2026-1047",
      donorName: "Patrick Wambete",
      email: "p.wambete@example.ug",
      amount: 100000,
      currency: "UGX",
      frequency: "One-Time",
      programme: "Childcare, Protection & Education Support",
      status: "Completed",
      paymentMethod: "Airtel Money",
      date: "2026-03-10",
      isAnonymous: false
    },
    {
      id: "DON-2026-1046",
      donorName: "Anonymous Well-Wisher",
      email: "supporter@donorbox.org",
      amount: 150,
      currency: "EUR",
      frequency: "Monthly",
      programme: "Makalama Vulnerable Persons & Child Haven",
      status: "Completed",
      paymentMethod: "Credit Card (Visa)",
      date: "2026-03-08",
      isAnonymous: true
    }
  ],

  volunteerApplications: [
    {
      id: "VOL-2026-201",
      name: "Sarah Namukwaya",
      email: "sarah.namuk@example.com",
      phone: "+256 772 112 334",
      country: "Uganda",
      skills: "Child Counseling, Expressive Art, Faith Mentorship",
      interests: "Counseling & Guidance, Play Therapy",
      availability: "Weekends / 10 hrs per week",
      motivation: "Passionate about helping vulnerable children and trauma survivors in rural Bududa find healing and hope.",
      status: "Review",
      date: "2026-03-09"
    }
  ],

  careers: [
    {
      id: "job-1",
      title: "Senior Community Counselor & Trauma Healing Lead",
      department: "Counseling & Psychosocial Guidance",
      location: "Makalama Headquarters, Bududa District",
      employmentType: "Full-time",
      deadline: "April 15, 2026",
      description: "Leading trauma healing circles, supervising individual guidance sessions, and mentoring community volunteer counselors in Bukibino and surrounding sub-counties.",
      requirements: [
        "Degree or Postgraduate Diploma in Counseling Psychology, Social Work, or Guidance",
        "Minimum 3 years of field experience in community psychosocial support or trauma rehabilitation",
        "Fluency in Lumasaaba (Lugisu) and English is essential",
        "Deep empathy and commitment to faith-and-hope community building"
      ]
    },
    {
      id: "job-2",
      title: "Child Welfare & Safeguarding Officer",
      department: "Child Protection & Social Welfare",
      location: "Makalama Center & Bududa Field Outreaches",
      employmentType: "Full-time",
      deadline: "April 20, 2026",
      description: "Managing safe haven intake, conducting family tracing, coordinating school bursaries, and liaising with district probation authorities.",
      requirements: [
        "Degree in Social Work and Social Administration (SWASA), Child Development, or Community Psychology",
        "Proven experience handling child protection and vulnerable persons cases",
        "Strong reporting, documentation, and case management skills"
      ]
    }
  ],

  safeguardingReports: [
    {
      id: "SAFE-2026-901",
      date: "2026-03-04",
      category: "Vulnerable Child Protection Concern",
      location: "Bukibino Sub-County",
      isAnonymous: true,
      status: "Resolved",
      summary: "Alert received regarding two orphaned children living in severe neglect following caregiver illness. Team intervened promptly; children safe in haven care while extended family support was established."
    }
  ],

  feedbackMessages: [
    {
      id: "FB-2026-501",
      date: "2026-03-06",
      name: "Wanjala Moses",
      email: "wanjala.m@example.com",
      category: "Community Commendation",
      message: "Thank you THECCODA for the counseling and school support you provided to our village after the recent heavy rains. The children are back in school and full of hope.",
      status: "Acknowledged"
    }
  ],

  events: [
    {
      id: "ev-1",
      slug: "29th-anniversary-community-assembly",
      title: "29th Anniversary Community Assembly & Thanksgiving (1997-2026)",
      date: "April 18, 2026",
      time: "9:00 AM - 4:30 PM EAT",
      location: "Makalama Haven Grounds, Bukibino Sub-County, Bududa",
      category: "Milestone Assembly",
      description: "Community gathering of elders, church leaders, caregivers, and sponsored youth celebrating 29 years of uninterrupted humanitarian care, trauma healing, and community empowerment in Bududa.",
      capacity: 500,
      registeredCount: 380,
      image: "images/hero-tcdo.jpg"
    },
    {
      id: "ev-2",
      slug: "bukibino-faith-hope-trauma-healing-circle",
      title: "Bukibino Faith & Hope Trauma Healing Seminar",
      date: "May 6, 2026",
      time: "10:00 AM - 3:00 PM EAT",
      location: "Bukibino Community Hall, Manjiya County",
      category: "Psychosocial Guidance",
      description: "Practical trauma recovery workshop for disaster survivors, bereaved caregivers, and community peer counselors. Guided sessions on grief processing and restorative hope.",
      capacity: 150,
      registeredCount: 112,
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "ev-3",
      slug: "bududa-vulnerable-children-outreach",
      title: "Bududa Vulnerable Children Scholastic & Health Outreach",
      date: "May 24, 2026",
      time: "8:30 AM - 5:00 PM EAT",
      location: "Makalama Childcare Sanctuary, Bududa District",
      category: "Childcare & Protection",
      description: "Free pediatric medical checks, distribution of school supplies and uniforms, nutritional counseling, and child rights safeguarding sensitization for 400+ vulnerable families.",
      capacity: 400,
      registeredCount: 295,
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "ev-4",
      slug: "caregiver-vsla-cooperative-expo",
      title: "Caregiver Livelihoods & VSLA Cooperative Expo",
      date: "June 12, 2026",
      time: "9:30 AM - 3:30 PM EAT",
      location: "Manjiya County Development Grounds, Bududa",
      category: "Community Development",
      description: "Annual exhibition of tailoring, high-yield agriculture, crafts, and micro-savings models led by 84 women caregiver VSLAs across Bukibino and neighboring sub-counties.",
      capacity: 300,
      registeredCount: 210,
      image: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=800&q=80"
    }
  ],

  resources: [
    {
      id: "res-1",
      title: "2025 Statutory Annual Audit & Financial Statements",
      category: "Audits & Financials",
      year: "2025",
      fileType: "PDF",
      fileSize: "2.8 MB",
      description: "Full independent external auditor's report detailing public transparency, local mobile money and international bank wire stewardship across THECCODA programs.",
      downloadUrl: "#"
    },
    {
      id: "res-2",
      title: "THECCODA Child Protection & Safeguarding Charter (2026)",
      category: "Policy Guidelines",
      year: "2026",
      fileType: "PDF",
      fileSize: "1.4 MB",
      description: "Comprehensive institutional safeguarding standards, zero-tolerance child abuse protocols, and child-safe shelter management rules for all staff and volunteers.",
      downloadUrl: "#"
    },
    {
      id: "res-3",
      title: "Community-Based Trauma Counseling & Guidance Field Manual",
      category: "Clinical & Training",
      year: "2025",
      fileType: "PDF",
      fileSize: "3.2 MB",
      description: "Practical guide for grassroots counselors and church mentors conducting trauma recovery circles, grief therapy, and psychological first aid in rural communities.",
      downloadUrl: "#"
    },
    {
      id: "res-4",
      title: "29-Year Impact & Longitudinal Beneficiary Assessment (1997 - 2026)",
      category: "Impact Reports",
      year: "2026",
      fileType: "PDF",
      fileSize: "4.5 MB",
      description: "Independent longitudinal study evaluating 29 years of community interventions, educational retention, and family restoration across 38,500+ vulnerable persons.",
      downloadUrl: "#"
    },
    {
      id: "res-5",
      title: "Caregiver VSLA Formation & Micro-Enterprise Guide",
      category: "Community Development",
      year: "2025",
      fileType: "PDF",
      fileSize: "1.9 MB",
      description: "Step-by-step operating guidelines for establishing, auditing, and managing community Village Savings and Loan Associations for vulnerable widows and mothers.",
      downloadUrl: "#"
    }
  ]
};

// Aliases for global backwards compatibility
window.TCDO_INITIAL_DATA = window.KATOSI_INITIAL_DATA;
window.THECCODA_INITIAL_DATA = window.KATOSI_INITIAL_DATA;
