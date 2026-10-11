import { Article } from '../types';

export const ARTICLES: Article[] = [
  {
    id: 'avatar-floating-mountains',
    slug: 'avatar-floating-mountains',
    fieldNoteNumber: 'FIELD NOTE 001',
    title: 'Pandora Unexplained: Can Mountains Really Float?',
    subtitle: 'A closer look at magnetic levitation, superconductivity, and the limits of Pandora\'s fictional geology.',
    film: 'Avatar',
    filmYear: 2009,
    director: 'James Cameron',
    category: 'Magnetism',
    summary: 'Explore magnetic levitation, superconductivity, and the physical scaling limits behind Pandora\'s iconic Hallelujah Mountains.',
    readTimeMinutes: 8,
    updatedAt: 'October 2026',
    scientificEditor: 'Dr. Elena Vance, Condensed Matter Physics Lab',
    heroImage: {
      src: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1600&q=80',
      alt: 'Massive karst mountain peaks emerging through dense mist and cloud layers',
      credit: 'Visual reference: Karst geomorphology & atmospheric scattering analogues (Zhangjiajie / Fox / Lightstorm Entertainment lore)'
    },
    primaryStatusBadges: ['established_physics', 'fiction'],
    shortAnswer: {
      mainStatement: 'Batuan dapat dilayangkan melalui mekanisme fisik tertentu dalam kondisi khusus di laboratorium.',
      qualifier: 'Namun, formasi gunung batu raksasa seberat miliaran ton yang melayang stabil di atmosfer seperti di Pandora tidak dapat dianggap realistis hanya dengan mengasumsikan batuan superkonduktor.'
    },
    sections: [
      {
        id: 'the-scene',
        index: '01',
        title: 'The Floating Mountains of Pandora',
        paragraphs: [
          'Dalam film Avatar (2009) karya James Cameron, salah satu lanskap paling memukau secara visual adalah Pegunungan Hallelujah di bulan ekstrasurya Pandora. Gugusan batu karang raksasa dengan vegetasi lebat dan air terjun melayang bebas di udara, melayang perlahan melintasi langit tanpa penyangga mekanis apa pun.',
          'Penjelasan dalam semesta cerita film (film lore) menyebutkan bahwa batuan ini kaya akan Unobtanium, yaitu mineral superkonduktor suhu kamar alami. Pegunungan tersebut mengapung karena berinteraksi dengan medan magnet Pandora yang luar biasa kuat yang dihasilkan oleh planet induk raksasa gas Polyphemus.'
        ],
        keyQuote: '"The spectacle is fictional. The questions are real: can magnetic repulsion lift mountains?"',
        callout: {
          type: 'fiction',
          title: 'Cinematic Lore vs. Natural Physics',
          content: 'Unobtanium adalah istilah fiksi klasik dalam rekayasa dan sci-fi untuk material hipotetis dengan sifat sempurna yang belum pernah ditemukan di alam semesta nyata.'
        }
      },
      {
        id: 'the-physics',
        index: '02',
        title: 'How Magnetic Levitation and Superconductivity Work',
        paragraphs: [
          'Dalam fisika eksperimental, levitasi magnetik adalah fenomena nyata yang telah diamati secara rutin. Mekanisme paling kuat yang memungkinkan levitasi stabil tanpa daya eksternal konstan adalah Efek Meissner dan Penguncian Fluks (Flux Pinning) pada superkonduktor tipe II.',
          'Ketika superkonduktor didinginkan di bawah suhu kritisnya (Tc) di hadapan medan magnet eksternal, garis gaya magnet tidak hanya ditolak (diamagnetisme sempurna / Efek Meissner), melainkan terperangkap dalam pusaran kuantum (vorteks Abrikosov). Fenomena penguncian kuantum ini menciptakan gaya pemulih ke segala arah, memungkinkan benda melayang tidak hanya tegak lurus ke atas, tetapi juga terkunci miring atau bahkan terbalik di bawah rel magnet.'
        ],
        equation: {
          id: 'magnetic-force-balance',
          formula: 'F_mag = -∇(m · B) ≥ M · g',
          name: 'Magnetic Levitation Balance Condition',
          description: 'Syarat levitasi stabil: gradien gaya magnet ke atas harus minimal mengimbangi berat total massa batuan.',
          variables: [
            { symbol: 'F_mag', meaning: 'Gaya tolak magnetik bersih', unit: 'Newton (N)' },
            { symbol: 'M', meaning: 'Massa batuan total', unit: 'Kilogram (kg)' },
            { symbol: 'g', meaning: 'Percepatan gravitasi lokal', unit: 'm/s² (~8.0 m/s² di Pandora)' },
            { symbol: 'B', meaning: 'Kerapatan fluks medan magnetik', unit: 'Tesla (T)' },
            { symbol: '∇B', meaning: 'Gradien medan magnetik vertikal', unit: 'Tesla per meter (T/m)' }
          ]
        },
        diagram: {
          id: 'meissner_levitation',
          type: 'meissner_levitation',
          title: 'Quantum Flux Pinning vs. Earnshaw\'s Theorem',
          caption: 'Diagram interaksi: superkonduktor tipe II mengunci fluks magnetik dalam tabung fluks terkuantisasi, menghasilkan gaya pemulih stabil tiga dimensi yang mengatasi teorema Earnshaw.',
          credit: 'Beyond the Frame Technical Reference / Condensed Matter Archive',
          labels: [
            { x: 50, y: 30, text: 'Magnetic Flux Lines (B)' },
            { x: 50, y: 65, text: 'Superconducting Rock Mass (Type II)' },
            { x: 50, y: 85, text: 'Planetary Dipole Gradient (∇B)' }
          ]
        }
      },
      {
        id: 'film-vs-science',
        index: '03',
        title: 'Film vs. Science: Scaling Up From Laboratory to Landscape',
        paragraphs: [
          'Di laboratorium, kita dapat melayangkan wafer superkonduktor YBCO (Yttrium Barium Copper Oxide) seberat 20 gram di atas magnet neodymium berkekuatan 1,2 Tesla. Namun, menskalakan fenomena ini menjadi gunung seberat 10 miliar kilogram (10¹⁰ kg) menimbulkan rintangan fisika fundamental:',
          '1. Kuat Medan Magnet yang Dibutuhkan: Untuk mengangkat batuan silikat padat dengan massa jenis 2.700 kg/m³, medan magnet permukaan Pandora harus mencapai puluhan ribu Tesla dengan gradien medan yang sangat curam (ribuan T/m). Sebagai perbandingan, medan magnet Bumi hanya sekitar 0,00005 Tesla (50 mikrotesla), dan magnet MRI rumah sakit terkuat beroperasi di 3–7 Tesla.',
          '2. Dampak Biologis Ekstrem: Jika medan magnet sekuat itu ada di atmosfer bebas, atom besi dalam hemoglobin darah manusia dan fauna Pandora akan mengalami distorsi gaya Lorentz yang mematikan, dan setiap molekul air diamagnetik dalam tubuh akan tertekan hebat.',
          '3. Batas Kritis Superkonduktor (Hc2): Setiap superkonduktor nyata memiliki batas medan magnet kritis atas. Jika medan luar melebihi Hc2, sifat superkonduktivitas seketika runtuh kembali menjadi konduktor biasa, dan gunung akan jatuh seketika.'
        ],
        comparisonItems: [
          {
            cinematicDepiction: 'Batu gunung mengapung santai tanpa efek samping pada helikopter Samson atau manusia.',
            scientificReality: 'Gradien medan magnet ribuan Tesla akan menghancurkan semua elektronika dan memagnetisasi rotor logam pesawat.',
            verdict: 'fiction',
            physicsExplanation: 'Induksi Faraday ekstrem dan arus pusar (eddy currents) akan membakar mesin pesawat logam yang melintas.'
          },
          {
            cinematicDepiction: 'Material superkonduktor bersuhu kamar mengunci posisi batuan di udara.',
            scientificReality: 'Superkonduktivitas kuantum memang mampu mengunci posisi (flux pinning) secara tiga dimensi.',
            verdict: 'established_physics',
            physicsExplanation: 'Prinsip penguncian fluks kuantum terbukti valid pada superkonduktor tipe II di laboratorium.'
          },
          {
            cinematicDepiction: 'Medan magnet planet induk Polyphemus menghasilkan gaya angkat terpusat.',
            scientificReality: 'Medan magnet dipol planet berkurang drastis sebanding jarak kubik (1/r³), menghasilkan gradien terlalu landai.',
            verdict: 'speculative_science',
            physicsExplanation: 'Dibutuhkan anomali fluks magnetik lokal kerak yang amat masif dan abnormal.'
          }
        ]
      },
      {
        id: 'what-the-evidence-says',
        index: '04',
        title: 'What the Evidence Says: What We Know vs. What We Don\'t',
        paragraphs: [
          'Apakah konsep gunung melayang murni omong kosong? Tidak sepenuhnya. James Cameron mempekerjakan konsultan astrofisika dan ilmuwan material untuk merancang penjelasan dasar yang berakar pada hukum fisika yang ada. Namun penting untuk membedakan antara prinsip yang sudah terbukti di laboratorium dengan lompatan fiksi yang melompati batasan termodinamika.'
        ]
      }
    ],
    whatWeKnowVsDont: {
      whatWeKnow: [
        'Levitasi magnetik dan penguncian fluks kuantum (flux pinning) adalah fakta eksperimental yang kokoh pada superkonduktor tipe II.',
        'Superkonduktor dapat menahan beban melawan gravitasi tanpa membutuhkan pasokan daya listrik terus-menerus selama suhu di bawah Tc.',
        'Gravitasi bulan Pandora (sekitar 0,8 g) sedikit mempermudah rasio gaya angkat dibanding gravitasi Bumi.'
      ],
      whatWeDont: [
        'Belum ada bukti ilmiah mengenai superkonduktor suhu kamar dan tekanan atmosfer stabil di alam semesta.',
        'Tidak ada mekanisme geologis yang diketahui yang dapat menghasilkan dan menahan gradien medan magnet ribuan Tesla di atmosfer terbuka.',
        'Sistem biologis berbasis karbon dan air tidak akan mampu bertahan hidup di dalam pusaran fluks magnetik berkekuatan puluhan ribu Tesla.'
      ]
    },
    references: [
      {
        id: 'ref-tinkham',
        authorOrInstitution: 'Michael Tinkham (Harvard University)',
        title: 'Introduction to Superconductivity (2nd Edition)',
        publication: 'McGraw-Hill Physics Series',
        year: 1996,
        type: 'book',
        citationNote: 'Fondasi matematika teori BCS, Efek Meissner, dan vorteks fluks magnetik Abrikosov tipe II.'
      },
      {
        id: 'ref-berry-geim',
        authorOrInstitution: 'M.V. Berry & A.K. Geim (Radboud / Manchester)',
        title: 'Of Flying Frogs and Levitrons: Diamagnetic Levitation in High Fields',
        publication: 'European Journal of Physics, 18(4): 307-313',
        year: 1997,
        url: 'https://doi.org/10.1088/0143-0807/18/4/012',
        type: 'journal',
        citationNote: 'Demonstrasi eksperimental levitasi diamagnetik stabil objek biologis bermassa air pada 16 Tesla.'
      },
      {
        id: 'ref-avatar-lore',
        authorOrInstitution: 'James Cameron / Lightstorm Entertainment',
        title: 'James Cameron\'s Avatar: An Activist Survival Guide (Pandorapedia)',
        publication: 'HarperCollins Publishers',
        year: 2009,
        type: 'book',
        citationNote: 'Dokumentasi resmi lore fiksi mengenai sifat Unobtanium dan vorteks magnetik Hallelujah.'
      }
    ],
    relatedArticleSlugs: ['interstellar-time-dilation', 'the-martian-survival-on-mars']
  },
  {
    id: 'interstellar-time-dilation',
    slug: 'interstellar-time-dilation',
    fieldNoteNumber: 'FIELD NOTE 002',
    title: 'A Different Flow of Time: The Physics of Interstellar',
    subtitle: 'Relativity, gravitational wells, and the extreme spacetime distortion near rotating supermassive black holes.',
    film: 'Interstellar',
    filmYear: 2014,
    director: 'Christopher Nolan',
    category: 'Relativity',
    summary: 'How gravity and velocity bend the flow of time: dissecting Miller\'s Planet, the Kerr metric, and Kip Thorne\'s relativistic calculations.',
    readTimeMinutes: 10,
    updatedAt: 'October 2026',
    scientificEditor: 'Prof. Julian Vance, Institute of Gravitational Physics',
    heroImage: {
      src: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1600&q=80',
      alt: 'Luminous accretion disk encircling the dark silhouette of a supermassive black hole with gravitational lensing curvature',
      credit: 'Visual reference: Gravitational lensing & Kerr spacetime simulation (Caltech / Double Negative / Kip Thorne)'
    },
    primaryStatusBadges: ['established_physics', 'theoretical_possibility'],
    shortAnswer: {
      mainStatement: 'Dilatasi waktu adalah kenyataan fisika teruji yang dibuktikan oleh GPS dan jam atom presisi tinggi setiap hari.',
      qualifier: 'Rasio ekstrim "1 jam = 7 tahun" di Miller\'s Planet membutuhkan black hole berputar mendekati kecepatan cahaya absolut (spin ekstrem 0.999999999999998) yang secara teoretis mungkin namun berada di batas kritis stabilitas astrofisika.'
    },
    sections: [
      {
        id: 'the-scene',
        index: '01',
        title: 'One Mission, Different Clocks: Miller\'s Planet',
        paragraphs: [
          'Dalam Interstellar (2014), kru pesawat Endurance mendarat di Miller\'s Planet, sebuah dunia berair dangkal yang mengorbit tepat di pinggir lubang hitam supermasif bernama Gargantua. Akibat sumur gravitasi raksasa Gargantua, waktu di permukaan planet berjalan jauh lebih lambat dibanding waktu di luar angkasa bebas.',
          'Satu jam yang dihabiskan Cooper dan Brand di permukaan planet setara dengan 7 tahun bagi Romilly yang menunggu di orbit kapal induk. Saat mereka kembali ke kapal setelah hanya beberapa jam, Romilly telah menua 23 tahun, 4 bulan, dan 8 hari.'
        ],
        keyQuote: '"Seven years per hour here. Let\'s not make any mistakes."',
        callout: {
          type: 'established',
          title: 'Relativity is Not a Theory of Perception',
          content: 'Dilatasi waktu bukan ilusi jam mekanik yang melambat karena tekanan gravitasi; ini adalah peregangan geometri ruang waktu itu sendiri. Seluruh proses metabolisme, peluruhan partikel subatomik, dan jam atom melambat persis sama.'
        }
      },
      {
        id: 'the-physics',
        index: '02',
        title: 'Einstein\'s Relativity: Kinematic vs. Gravitational Time Dilation',
        paragraphs: [
          'Fisika modern membedakan dua jenis dilatasi waktu:',
          '1. Dilatasi Waktu Kinematik (Relativitas Khusus, 1905): Ketika sebuah objek bergerak relatif terhadap pengamat dengan kecepatan v, waktu proper objek (Δτ) berjalan lebih lambat dibanding waktu pengamat diam (Δt).',
          '2. Dilatasi Waktu Gravitasi (Relativitas Umum, 1915): Jam yang berada lebih dalam di medan potensial gravitasi yang kuat berdetak lebih lambat daripada jam yang berada di potensial gravitasi lebih lemah.'
        ],
        equation: {
          id: 'special-relativity-dilation',
          formula: 'Δτ = Δt · √(1 - v²/c²) = Δt / γ',
          name: 'Special Relativistic Time Dilation (Constant Velocity)',
          description: 'Hubungan waktu proper (Δτ) dan waktu pengamat koordinat (Δt) untuk kerangka inersial dengan kecepatan relatif v.',
          variables: [
            { symbol: 'Δτ', meaning: 'Waktu proper (jam pengelana/bergerak)', unit: 'Detik (s) atau tahun' },
            { symbol: 'Δt', meaning: 'Waktu koordinat (pengamat diam)', unit: 'Detik (s) atau tahun' },
            { symbol: 'v', meaning: 'Kecepatan relatif pengelana', unit: 'm/s atau fraksi c' },
            { symbol: 'c', meaning: 'Kecepatan cahaya di vakum (~299.792.458 m/s)', unit: 'm/s' },
            { symbol: 'γ', meaning: 'Faktor Lorentz (1 / √(1 - v²/c²))', unit: 'Tak berdimensi' }
          ]
        },
        diagram: {
          id: 'spacetime_curvature',
          type: 'spacetime_curvature',
          title: 'Spacetime Curvature and Gravitational Redshift near Gargantua',
          caption: 'Geometri ruang waktu berputar (Kerr metric): sumur potensial gravitasi ekstrem mendilatasikan koordinat waktu dan menggeser frekuensi foton ke panjang gelombang lebih panjang.',
          credit: 'Beyond the Frame Technical Reference / General Relativity Model',
          labels: [
            { x: 30, y: 25, text: 'Flat Spacetime (Endurance Mothercraft)' },
            { x: 65, y: 75, text: 'Miller\'s Planet Orbit (Near ISCO)' },
            { x: 80, y: 88, text: 'Kerr Event Horizon (r_+)' }
          ]
        }
      },
      {
        id: 'film-vs-science',
        index: '03',
        title: 'Film vs. Science: Miller\'s Planet and Kip Thorne\'s Equations',
        paragraphs: [
          'Astrofisikawan pemenang Hadiah Nobel Kip Thorne menjabat sebagai penasihat ilmiah utama dan produser eksekutif film. Thorne menetapkan aturan ketat: tidak ada hukum fisika yang mapan boleh dilanggar.',
          'Untuk menghasilkan faktor dilatasi waktu sebesar 61.320 kali lipat (1 jam = 7 tahun), lubang hitam Gargantua harus memenuhi syarat astronomi yang sangat spesifik:',
          '1. Gargantua tidak boleh lubang hitam Schwarzschild (diam), karena radius orbit stabil terakhir (ISCO) akan berada terlalu jauh dari horizon untuk menghasilkan dilatasi waktu sebesar itu tanpa menelan planet.',
          '2. Gargantua harus merupakan lubang hitam Kerr (berputar cepat) dengan kecepatan spin nyaris maksimal: a/M = 1 - 10⁻¹⁴. Pada kecepatan putar ini, efek frame-dragging menarik ruang waktu di sekitarnya sehingga orbit stabil dapat berada sangat dekat dengan horizon tanpa hancur terhisap.',
          '3. Massa Gargantua harus sekitar 100 juta kali massa Matahari kita agar gaya pasang surut gravitasi (tidal forces) pada radius tersebut cukup lembut sehingga tidak merobek planet Miller atau tubuh manusia menjadi spageti (spaghettification).'
        ],
        comparisonItems: [
          {
            cinematicDepiction: 'Waktu melambat 60.000x lipat di dekat Gargantua sementara astronot tetap berinteraksi secara fisik.',
            scientificReality: 'Secara matematis konsisten dalam kerangka solusi Kerr relativitas umum jika parameter spin Gargantua mendekati 0.999999999999998.',
            verdict: 'theoretical_possibility',
            physicsExplanation: 'Diperlukan spin mendekati batas absolut Thorne, yang secara teoretis konsisten dengan persamaan medan Einstein.'
          },
          {
            cinematicDepiction: 'Ombak air setinggi 1,2 kilometer berulang secara periodik di planet dangkal.',
            scientificReality: 'Tidal bulge dari gravitasi Gargantua akan menarik air menjadi gelombang pasang masif terkunci secara gravitasi.',
            verdict: 'established_physics',
            physicsExplanation: 'Gaya pasang surut diferensial pada samudra planet dekat lubang hitam masif.'
          },
          {
            cinematicDepiction: 'Matahari buatan tidak diperlukan; cahaya terang berasal dari cincin akresi.',
            scientificReality: 'Cincin akresi gas nyata yang jatuh ke black hole akan memancarkan radiasi sinar-X dan sinar gamma yang mematikan.',
            verdict: 'fiction',
            physicsExplanation: 'Thorne mengasumsikan cincin akresi Gargantua adalah cincin "anemik" (sudah dingin dan kehabisan materi) agar kru tidak terbakar radiasi ionisasi.'
          }
        ]
      },
      {
        id: 'what-the-evidence-says',
        index: '04',
        title: 'What the Evidence Says: Theoretical Reality vs. Observational Bounds',
        paragraphs: [
          'Interstellar adalah salah satu film sci-fi paling teliti secara ilmiah yang pernah diproduksi. Simulasi visual Gargantua yang dikerjakan oleh studio visual effect Double Negative bersama Kip Thorne bahkan menghasilkan dua makalah ilmiah peer-reviewed tentang perambatan sinar cahaya pada ruang waktu Kerr berotasi kencang.'
        ]
      }
    ],
    whatWeKnowVsDont: {
      whatWeKnow: [
        'Dilatasi waktu gravitasi dan kecepatan telah terkonfirmasi dengan presisi kuantum melalui jam optik atom dan koreksi konstan 38 mikrodetik per hari pada satelit GPS.',
        'Lubang hitam supermasif berputar (Kerr black holes) benar-benar ada di pusat galaksi, dikonfirmasi oleh teleskop Event Horizon Telescope (EHT) pada pengamatan M87* dan Sgr A*.',
        'Frame-dragging (efek Lense-Thirring) telah diukur di sekitar Bumi oleh satelit Gravity Probe B.'
      ],
      whatWeDont: [
        'Belum pernah diamati lubang hitam di alam semesta nyata dengan laju spin mendekati batas ekstrim 1 - 10⁻¹⁴ (kebanyakan berada di bawah a/M ~ 0,998 karena hambatan radiasi Thorne).',
        'Kondisi iklim dan stabilitas orbit planet di lingkungan radiasi cincin akresi lubang hitam masih merupakan spekulasi pemodelan astrofisika.',
        'Fisika di dalam singularitas (tesseract) berada di luar cakupan Relativitas Umum dan membutuhkan teori Gravitasi Kuantum yang belum tervalidasi.'
      ]
    },
    references: [
      {
        id: 'ref-thorne-book',
        authorOrInstitution: 'Kip Thorne (California Institute of Technology)',
        title: 'The Science of Interstellar',
        publication: 'W. W. Norton & Company',
        year: 2014,
        type: 'book',
        citationNote: 'Penjelasan matematis lengkap seluruh asumsi orbit Miller\'s Planet, spin Gargantua, dan transfer energi.'
      },
      {
        id: 'ref-james-gravitational-lensing',
        authorOrInstitution: 'Oliver James, Eugénie von Tunzelmann, Paul Franklin, & Kip Thorne',
        title: 'Gravitational Lensing by Spinning Black Holes in Astrophysics, and in the Movie Interstellar',
        publication: 'Classical and Quantum Gravity, 32(6): 065001',
        year: 2015,
        url: 'https://doi.org/10.1088/0264-9381/32/6/065001',
        type: 'journal',
        citationNote: 'Makalah peer-reviewed yang merumuskan kode ray-tracing kamera ruang waktu Kerr.'
      },
      {
        id: 'ref-nasa-blackholes',
        authorOrInstitution: 'NASA Astrophysics Division',
        title: 'Black Hole Basics & Relativistic Effects FAQ',
        publication: 'NASA Science Directorate',
        year: 2023,
        url: 'https://science.nasa.gov/universe/black-holes/',
        type: 'institutional',
        citationNote: 'Referensi resmi NASA mengenai batasan horizon peristiwa dan dilatasi waktu teramati.'
      }
    ],
    relatedArticleSlugs: ['avatar-floating-mountains', 'the-martian-survival-on-mars']
  },
  {
    id: 'dune-desert-physics',
    slug: 'dune-desert-physics',
    fieldNoteNumber: 'FIELD NOTE 003',
    title: 'The Desert Equation: Physics of Arrakis',
    subtitle: 'Aeolian dynamics, atmospheric moisture balance, and the severe thermodynamics of an all-desert world.',
    film: 'Dune',
    filmYear: 2021,
    director: 'Denis Villeneuve',
    category: 'Planetary Science',
    summary: 'From Bagnold sand migration to stillsuit metabolic cooling: evaluating the physical thermodynamics of Herbert\'s desert planet.',
    readTimeMinutes: 9,
    updatedAt: 'October 2026',
    scientificEditor: 'Dr. Soraya Hansen, Desert Geomorphology Institute',
    heroImage: {
      src: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1600&q=80',
      alt: 'Towering curved sand dunes with razor sharp crests casting deep shadows across orange desert sands under scorching sun',
      credit: 'Visual reference: Aeolian dune morphology & planetary desert climate (Rub\' al Khali / Wadi Rum / Legendary Pictures)'
    },
    primaryStatusBadges: ['established_physics', 'speculative_science'],
    shortAnswer: {
      mainStatement: 'Dinamika pergerakan pasir, formasi gumuk raksasa, dan transfer panas gurun di Arrakis berakar pada fisika geomorfologi nyata di Bumi dan Mars.',
      qualifier: 'Namun teknologi daur ulang air 100% pada pakaian Stillsuit dan ekologi raksasa tanpa fotosintesis vegetasi menghadapi batasan termodinamika pelepasan panas tubuh yang sulit diatasi.'
    },
    sections: [
      {
        id: 'the-scene',
        index: '01',
        title: 'Reading the Landscape of Arrakis',
        paragraphs: [
          'Dalam novel legendaris Frank Herbert dan adaptasi film karya Denis Villeneuve (2021), Arrakis adalah planet gurun tanpa presipitasi hujan alami. Bentang alamnya didominasi oleh erg luas (lautan pasir), bukit pasir raksasa yang terus bergeser, suhu siang hari melebihi 60°C, dan badai Coriolis yang diklaim mampu mengelupas daging dari tulang.',
          'Masyarakat adat Fremen bertahan hidup dengan mengenakan "Stillsuit" (pakaian penyuling tubuh) yang menangkap keringat, urine, dan embusan napas, menyaringnya secara mekanis melalui pompa tumit kaki sehingga tubuh hanya kehilangan kurang dari satu sendok teh air per hari.'
        ],
        keyQuote: '"A world without rain. Where water is the only currency of survival."',
        callout: {
          type: 'established',
          title: 'Real Climate Simulations of Arrakis',
          content: 'Pada tahun 2021, tim ilmuwan iklim dari Universitas Bristol (Farnsworth dkk.) menjalankan model sirkulasi iklim global resolusi tinggi pada Arrakis dan menemukan bahwa sebagian besar iklimnya secara meteorologi konsisten dan dapat dihuni manusia, meski daerah tropisnya akan mengalami suhu melebihi batas basah (wet-bulb) fatal.'
        }
      },
      {
        id: 'the-physics',
        index: '02',
        title: 'Wind, Sand, and Dune Formation: The Physics of Saltation',
        paragraphs: [
          'Bagaimana bukit pasir raksasa bergerak dan mempertahankan bentuk geometrisnya di dunia tanpa air? Fisika transportasi sedimen eolian (aeolian sediment transport) pertama kali dirumuskan secara ilmiah oleh brigadir jenderal dan fisikawan Inggris Ralph Bagnold dalam ekspedisinya di Gurun Sahara pada 1930-an.',
          'Partikel pasir berdiameter 0,1 hingga 0,5 mm tidak terbang melayang bebas seperti debu, melainkan melompat-lompat dalam fenomena yang disebut Saltasi (Saltation). Ketika butiran pasir menabrak permukaan dengan kecepatan kritis, momentumnya terpantul dan melontarkan 2–6 partikel lain ke aliran angin, membentuk gelombang transversal dan bukit barchan yang stabil secara dinamis.'
        ],
        equation: {
          id: 'bagnold-sand-transport',
          formula: 'q = C · √(d/D) · (ρ_udara / g) · u*³',
          name: 'Bagnold\'s Sand Transport Equation',
          description: 'Fluks massa pasir per satuan lebar dan waktu (q) berbanding lurus dengan massa jenis udara dan pangkat tiga kecepatan gesekan angin (u*).',
          variables: [
            { symbol: 'q', meaning: 'Fluks transportasi massa pasir', unit: 'kg / (m · s)' },
            { symbol: 'C', meaning: 'Konstanta empiris sortasi pasir (1.5 - 2.8)', unit: 'Tak berdimensi' },
            { symbol: 'd/D', meaning: 'Rasio diameter butir rata-rata terhadap pasir standar', unit: 'Tak berdimensi' },
            { symbol: 'ρ_udara', meaning: 'Kerapatan udara atmosfer', unit: 'kg/m³ (~1.2 kg/m³)' },
            { symbol: 'g', meaning: 'Gravitasi permukaan planet', unit: 'm/s²' },
            { symbol: 'u*', meaning: 'Kecepatan geser permukaan (shear velocity)', unit: 'm/s' }
          ]
        },
        diagram: {
          id: 'aeolian_saltation',
          type: 'aeolian_saltation',
          title: 'Aeolian Saltation & Reptation Dynamics on High-Angle Dune Slips',
          caption: 'Dinamika transportasi sedimen: partikel pasir melompat (saltasi) pada lereng landai (stoss) dan longsor secara gravitasi saat melebihi sudut henti (angle of repose ~34°) pada sisi gelincir (slip face).',
          credit: 'Beyond the Frame Technical Reference / Desert Geomorphology Laboratory',
          labels: [
            { x: 25, y: 35, text: 'Prevailing Wind Stream (u*)' },
            { x: 45, y: 60, text: 'Saltation Trajectory (Impact & Rebound)' },
            { x: 80, y: 70, text: 'Avalanche Slip Face (Angle of Repose 34°)' }
          ]
        }
      },
      {
        id: 'film-vs-science',
        index: '03',
        title: 'Film vs. Science: Stillsuit Thermodynamics & Metabolic Cooling',
        paragraphs: [
          'Teknologi stillsuit dalam film dan novel adalah mahakarya fiksi desain, tetapi pengoperasiannya di dunia nyata menemui benturan hukum pertama dan kedua termodinamika:',
          '1. Panas Laten Penguapan (Latent Heat of Vaporization): Manusia berkeringat bukan untuk membuang air, melainkan untuk mendinginkan tubuh melalui penyerapan kalor penguapan air (2,26 Megajoule per liter keringat yang menguap).',
          '2. Jebakan Panas Tertutup: Jika stillsuit menangkap uap air tersebut dan mengembunkannya kembali menjadi air cair di dalam pakaian, panas laten sebesar 2,26 MJ/liter harus dilepaskan kembali ke dalam sistem pakaian! Jika pakaian tidak memiliki sirip radiator eksternal berdaya tinggi atau pompa kalor termoelektrik aktif, pemakainya akan mengalami heat stroke fatal dalam hitungan jam karena terperangkap dalam sauna beruap.',
          '3. Tenaga Mekanik Pompa: Memompa air melalui membran filtrasi osmosis terbalik berpori submikron membutuhkan tekanan tinggi (30–60 bar). Langkah kaki manusia biasa tidak menghasilkan daya mekanik yang memadai untuk memompa cairan dengan laju filtrasi mikro yang dibutuhkan tubuh saat bekerja berat di padang pasir.'
        ],
        comparisonItems: [
          {
            cinematicDepiction: 'Stillsuit menyerap keringat dan mengembalikan air dingin langsung ke mulut pemakai.',
            scientificReality: 'Mengembunkan uap keringat melepaskan kembali energi kalor laten ke pakaian, menyebabkan overheating ekstrem tanpa pendingin aktif.',
            verdict: 'speculative_science',
            physicsExplanation: 'Hukum termodinamika: kalor laten penguapan 2,26 MJ/kg air harus dibuang ke lingkungan luar yang sudah bersuhu 60°C.'
          },
          {
            cinematicDepiction: 'Bentang alam gumuk pasir raksasa yang berpindah ratusan meter secara periodik.',
            scientificReality: 'Perpindahan bukit pasir eolian teramati nyata di Gurun Rub\' al Khali Bumi dan gumuk pasir kutub Mars.',
            verdict: 'established_physics',
            physicsExplanation: 'Persamaan Bagnold dan mekanika fluida sedimen memvalidasi morfologi bukit pasir bintang dan barchan.'
          },
          {
            cinematicDepiction: 'Cacing pasir raksasa Shai-Hulud sepanjang 400 meter memproduksi seluruh oksigen di atmosfer.',
            scientificReality: 'Hukum metabolisme kuadrat kubus (Square-Cube law) membuat organisme raksasa dengan massa ratusan ribu ton runtuh di bawah gravitasinya sendiri.',
            verdict: 'fiction',
            physicsExplanation: 'Biologi fiktif yang melanggar skala kekuatan material kerangka biologis dan stoikiometri oksigen planet.'
          }
        ]
      },
      {
        id: 'what-the-evidence-says',
        index: '04',
        title: 'What the Evidence Says: Climate Models & Water Budgets',
        paragraphs: [
          'Bumi memiliki gurun hiperarid seperti Atacama di Chili di mana beberapa stasiun cuaca tidak pernah mencatat tetes hujan selama beberapa dekade. Gurun Atacama menjadi bukti nyata bahwa ekosistem dapat mempertahankan kelembapan mikro dari kabut adveksi laut tanpa hujan tahunan.'
        ]
      }
    ],
    whatWeKnowVsDont: {
      whatWeKnow: [
        'Prinsip pergerakan butiran pasir akibat angin dan pembentukan gumuk pasir (dune formation) sepenuhnya dikonfirmasi oleh fisika sedimen eolian.',
        'Atmosfer planet dapat mempertahankan suhu ekstrem dan gradien Coriolis yang menciptakan badai debu berkekuatan tinggi.',
        'Daur ulang air evaporatif mikro dapat dilakukan melalui sistem membran desalinasi bertingkat di fasilitas stasioner.'
      ],
      whatWeDont: [
        'Belum ada teknologi material fleksibel pasif yang mampu mendinginkan tubuh manusia saat menyaring uap air di lingkungan 60°C tanpa sumber energi listrik besar.',
        'Asal usul oksigen atmosfer Arrakis tanpa keberadaan fitoplankton atau fotosintesis hutan skala planet tidak memiliki padanan biogeokimia yang masuk akal.',
        'Mekanika lokomosi bawah tanah organisme biologis sebesar cacing pasir di dalam media butiran pasir padat (granular media friction).'
      ]
    },
    references: [
      {
        id: 'ref-bagnold',
        authorOrInstitution: 'Ralph A. Bagnold (The Royal Society)',
        title: 'The Physics of Blown Sand and Desert Dunes',
        publication: 'Methuen & Co., London / Dover Earth Science',
        year: 1941,
        type: 'book',
        citationNote: 'Karya pionir yang menetapkan persamaan matematis transportasi sedimen eolian dan saltasi butiran pasir.'
      },
      {
        id: 'ref-bristol-arrakis',
        authorOrInstitution: 'Alexander Farnsworth, Michael Farnsworth, & Sebastian Steinig (Bristol University)',
        title: 'Climate Model of Arrakis: Simulating Dune\'s Desert World with Supercomputers',
        publication: 'The Conversation / Bristol Paleoclimate Group',
        year: 2021,
        url: 'https://theconversation.com/dune-we-simulated-the-desert-planet-of-arrakis-to-see-if-humans-could-survive-there-170150',
        type: 'journal',
        citationNote: 'Simulasi iklim Hadley Centre HadCM3L terhadap topografi, albedo, dan komposisi atmosfer Arrakis.'
      },
      {
        id: 'ref-nasa-earth-deserts',
        authorOrInstitution: 'NASA Earth Observatory',
        title: 'Dune Morphology and Sand Seas of the Rub\' al Khali',
        publication: 'NASA Landsat Science Program',
        year: 2022,
        url: 'https://earthobservatory.nasa.gov',
        type: 'institutional',
        citationNote: 'Analisis satelit terhadap struktur geomorfologi bukit pasir bintang dan dinamika angin hiper-arid.'
      }
    ],
    relatedArticleSlugs: ['the-martian-survival-on-mars', 'avatar-floating-mountains']
  },
  {
    id: 'the-martian-survival-on-mars',
    slug: 'the-martian-survival-on-mars',
    fieldNoteNumber: 'FIELD NOTE 004',
    title: 'Surviving the Red Planet: Can Science Save You on Mars?',
    subtitle: 'Atmospheric pressure, radiation budgets, soil chemistry, and the real engineering challenges of human survival.',
    film: 'The Martian',
    filmYear: 2015,
    director: 'Ridley Scott',
    category: 'Planetary Science',
    summary: 'From 6.36 mbar CO2 to toxic soil perchlorates: examining the hard physics and engineering triumphs of Mark Watney\'s survival.',
    readTimeMinutes: 9,
    updatedAt: 'October 2026',
    scientificEditor: 'Dr. Marcus Vance, Aerospace Systems & Life Support Group',
    heroImage: {
      src: '/images/martian-hero.jpg',
      alt: 'Desolate rust-red Martian plains with rocky basalt boulders under a pale dusty amber sky',
      credit: 'Visual reference: Mars landscape & surface geology (Acidalia Planitia / 20th Century Fox)'
    },
    primaryStatusBadges: ['established_physics', 'fiction'],
    shortAnswer: {
      mainStatement: 'The Martian adalah salah satu film fiksi ilmiah paling akurat dalam sejarah modern perihal botani, daur ulang air, dan mekanika orbit.',
      qualifier: 'Namun seluruh premis pemicu bencana film, yaitu badai debu dahsyat yang merusak wahana MAV dan melukai tubuh astronot, secara fisika mustahil terjadi karena tekanan atmosfer Mars hanya 0,6 persen dari Bumi.'
    },
    sections: [
      {
        id: 'the-scene',
        index: '01',
        title: 'The Challenge of Living on Mars: Left Behind on Sol 18',
        paragraphs: [
          'Dalam The Martian (2015) berdasarkan novel Andy Weir, misi Ares 3 di wilayah Acidalia Planitia dilanda badai debu ganas berkecepatan 175 km/jam. Debu dan angin kencang mengancam akan menggulingkan Mars Ascent Vehicle (MAV). Saat evakuasi darurat, antena parabola terhempas angin dan menusuk pakaian antariksa serta tubuh Mark Watney.',
          'Ditinggalkan karena dikira gugur, Watney harus bertahan hidup sendirian di planet tandus menggunakan ilmu pengetahuan rekayasa: memproduksi air dari sisa bahan bakar hidrazin (N₂H₄), membudidayakan kentang di dalam modul habitat (Hab), dan menghangatkan rover dengan generator termoelektrik radioisotop (RTG).'
        ],
        keyQuote: '"I\'m gonna have to science the shit out of this."',
        callout: {
          type: 'fiction',
          title: 'Andy Weir\'s Deliberate Inaccuracy',
          content: 'Penulis Andy Weir sendiri mengakui bahwa dia sengaja menciptakan badai debu fiktif yang merusak MAV semata-mata sebagai pemicu naratif (dramatic catalyst) agar sang astronot dapat terdampar sendirian.'
        }
      },
      {
        id: 'the-physics',
        index: '02',
        title: 'The Atmosphere Problem: Dynamic Pressure and Thin Air',
        paragraphs: [
          'Mengapa badai debu Mars tidak bisa menggulingkan roket atau menghancurkan Hab? Jawabannya ada pada persamaan Tekanan Dinamis (Dynamic Pressure) mekanika fluida.',
          'Gaya dorong angin yang dirasakan sebuah benda bukanlah fungsi kecepatan semata, melainkan perkalian kerapatan fluida udara (ρ) dengan kuadrat kecepatan angin (v²).',
          'Menurut pengukuran stasiun cuaca Viking, Pathfinder, Curiosity, dan Perseverance milik NASA, tekanan atmosfer rata-rata Mars di permukaan hanya sekitar 6,36 mbar (0,0063 atm), dengan kerapatan udara hanya sekitar 0,020 kg/m³, atau kurang dari 1 persen dari kerapatan udara Bumi (1,225 kg/m³).'
        ],
        equation: {
          id: 'dynamic-wind-pressure',
          formula: 'q = ½ · ρ_Mars · v²',
          name: 'Dynamic Wind Pressure Equation',
          description: 'Gaya dorong mekanis angin berbanding lurus dengan kerapatan fluida dan kuadrat kecepatannya.',
          variables: [
            { symbol: 'q', meaning: 'Tekanan dinamis angin', unit: 'Pascal (N/m²)' },
            { symbol: 'ρ_Mars', meaning: 'Kerapatan atmosfer Mars di permukaan (~0.020 kg/m³)', unit: 'kg/m³' },
            { symbol: 'v', meaning: 'Kecepatan angin (175 km/jam = ~48.6 m/s)', unit: 'm/s' },
            { symbol: 'F_drag', meaning: 'Gaya hambat total = q · Cd · A', unit: 'Newton (N)' }
          ]
        },
        diagram: {
          id: 'mars_pressure_gradient',
          type: 'mars_pressure_gradient',
          title: 'Mars vs Earth Atmospheric Profile & The Armstrong Limit',
          caption: 'Profil tekanan vertikal: atmosfer Mars berada jauh di bawah Garis Batas Armstrong (63 mbar). Tanpa pakaian bertekanan, air dan cairan tubuh manusia akan mendidih spontan pada suhu tubuh 37°C.',
          credit: 'Beyond the Frame Technical Reference / NASA Glenn Research Center',
          labels: [
            { x: 30, y: 20, text: 'Earth Sea Level: 1013 mbar' },
            { x: 50, y: 55, text: 'Armstrong Limit: 63 mbar (Water boils at 37°C)' },
            { x: 80, y: 85, text: 'Mars Surface: 6.36 mbar (95.3% CO2)' }
          ]
        }
      },
      {
        id: 'film-vs-science',
        index: '03',
        title: 'Film vs. Science: What The Martian Gets Right and Wrong',
        paragraphs: [
          'Perhitungan konkret:',
          'Sebuah badai 175 km/jam di Mars hanya menghasilkan tekanan dinamis sekitar 23,6 Pascal. Di Bumi, tekanan angin sebesar 23,6 Pascal hanya dihasilkan oleh angin sepoi-sepoi berkecepatan 22 km/jam (Beaufort skala 4)! Angin tersebut hanya sanggup menerbangkan debu halus dan mengibarkan rambut, namun mustahil membengkokkan antena logam berkekuatan tinggi apalagi menggulingkan roket seberat puluhan ton.',
          'Namun di sisi lain, film ini mengeksekusi banyak konsep ilmiah secara brilian:',
          '1. Pembuatan Air: Reaksi kimia katalitik dekomposisi hidrazin di atas iridium menghasilkan nitrogen dan hidrogen (N₂H₄ → N₂ + 2H₂), yang kemudian dibakar dengan oksigen menghasilkan air (2H₂ + O₂ → 2H₂O). Kimianya sangat presisi, lengkap dengan bahaya ledakan eksotermik nyata.',
          '2. Masalah Tanah Regolit: Di film, Watney mencampur tanah Mars dengan kotoran manusia untuk menanam kentang. Di dunia nyata, data penjelajah NASA Phoenix (2008) membuktikan bahwa tanah Mars mengandung 0,5–1% garam perklorat beracun (ClO₄⁻). Tanpa mencuci perklorat terlebih dahulu, tanaman kentang akan menyerap racun tiroid yang mematikan bagi manusia.',
          '3. Radiasi Kosmik: Mars tidak memiliki medan magnet pelindung (magnetosfer) global dan memiliki atmosfer tipis. Paparan radiasi sinar kosmik galaksi (GCR) dan badai partikel matahari (SPE) di permukaan Mars adalah sekitar 0,67 mSv per hari, jauh melampaui batas aman jangka panjang tanpa pelindung regolit bawah tanah tebal.'
        ],
        comparisonItems: [
          {
            cinematicDepiction: 'Badai angin dahsyat menerbangkan puing logam dan merusak tiang antena pemancar.',
            scientificReality: 'Karena kerapatan udara Mars hanya 1%, badai 175 km/jam hanya memiliki tenaga dorong setara angin 22 km/jam di Bumi.',
            verdict: 'fiction',
            physicsExplanation: 'Tekanan dinamis q = 0.5 · ρ · v² menghasilkan daya dorong kurang dari 25 N/m², tidak sanggup mematahkan struktur logam.'
          },
          {
            cinematicDepiction: 'Gravitasi Mars lebih rendah membuat pergerakan astronot lebih ringan.',
            scientificReality: 'Gravitasi Mars adalah 3,71 m/s² (~0,38 g), memungkinkan astronot membawa muatan 2,6x lebih berat dengan usaha sama.',
            verdict: 'established_physics',
            physicsExplanation: 'Pengukuran gravitasi langsung oleh wahana pendarat NASA Viking, InSight, dan Curiosity.'
          },
          {
            cinematicDepiction: 'Menambal dinding Hab yang meledak robek hanya dengan plastik terpal dan lakban duct tape.',
            scientificReality: 'Perbedaan tekanan 1000 mbar (100.000 N/m²) antara dalam Hab dan luar ruangan akan memberikan gaya dorong puluhan ton pada tambalan plastik.',
            verdict: 'fiction',
            physicsExplanation: 'Tegangan tarik material plastik sederhana akan seketika pecah akibat gaya diferensial tekanan atmosfer internal.'
          }
        ]
      },
      {
        id: 'what-the-evidence-says',
        index: '04',
        title: 'What the Evidence Says: The Engineering Path Forward',
        paragraphs: [
          'Eksperimen MOXIE (Mars Oxygen ISRU Experiment) pada rover Perseverance NASA telah berhasil memproduksi oksigen bernapas langsung dari atmosfer karbon dioksida Mars melalui elektrolisis oksida padat (2CO₂ → 2CO + O₂). Hal ini membuktikan bahwa rekayasa in situ resource utilization (ISRU) seperti yang dilakukan Mark Watney bukan lagi fiksi masa depan, melainkan realitas teknologi yang sedang diuji hari ini.'
        ]
      }
    ],
    whatWeKnowVsDont: {
      whatWeKnow: [
        'Tekanan permukaan rata-rata Mars adalah 6,36 mbar dengan variasi musiman karena kondensasi CO2 di kutub (terukur oleh NASA NSSDCA).',
        'Gravitasi permukaan Mars adalah 3,71 m/s² (~0,38 gravitasi Bumi) sesuai data NASA Glenn Research Center.',
        'Ekstraksi oksigen dari atmosfer CO2 Mars telah berhasil didemonstrasikan di permukaan planet oleh instrumen MOXIE NASA.'
      ],
      whatWeDont: [
        'Dampak kesehatan jangka panjang dari gravitasi parsial 0,38 g terhadap kepadatan tulang dan degenerasi otot manusia belum pernah diuji secara empiris.',
        'Metode remediasi biologis paling hemat biaya untuk membersihkan perklorat beracun dari tanah Mars skala hektar.',
        'Daya tahan modul habitat fleksibel terhadap mikrometeoroid dan radiasi berenergi tinggi selama periode lebih dari 1000 Sol.'
      ]
    },
    references: [
      {
        id: 'ref-nasa-mars-factsheet',
        authorOrInstitution: 'David R. Williams / NASA Goddard Space Flight Center (NSSDCA)',
        title: 'Mars Fact Sheet: Planetary Constants and Atmospheric Data',
        publication: 'NASA Space Science Data Coordinated Archive',
        year: 2024,
        url: 'https://nssdc.gsfc.nasa.gov/planetary/factsheet/marsfact.html',
        type: 'institutional',
        citationNote: 'Data resmi parameter massa, radius, gravitasi permukaan 3.71 m/s², dan tekanan atmosfer 6.36 mbar.'
      },
      {
        id: 'ref-nasa-glenn-gravity',
        authorOrInstitution: 'NASA Glenn Research Center',
        title: 'Atmospheric and Gravity Environments for Planetary Flight',
        publication: 'NASA Technical Reports Server',
        year: 2021,
        url: 'https://www.nasa.gov/glenn',
        type: 'institutional',
        citationNote: 'Penelitian perbandingan dinamika atmosfer dan traksi gerak permukaan Bumi vs Mars.'
      },
      {
        id: 'ref-moxie-science',
        authorOrInstitution: 'Michael Hecht et al. / MIT & NASA JPL',
        title: 'Mars Oxygen ISRU Experiment (MOXIE) Surface Performance on the Mars 2020 Mission',
        publication: 'Science Advances, 8(35): eabp8919',
        year: 2022,
        url: 'https://doi.org/10.1126/sciadv.abp8919',
        type: 'journal',
        citationNote: 'Laporan ilmiah pertama demonstrasi produksi oksigen dari atmosfer Mars di kawah Jezero.'
      }
    ],
    relatedArticleSlugs: ['dune-desert-physics', 'interstellar-time-dilation']
  }
];
