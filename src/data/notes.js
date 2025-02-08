const NotesData = [
    {
      id: 1,
      title: 'Another Day in the Island',
      cover: '/cover1.webp',
      
      category: {
        en: 'Game UIX',
        id: 'Permainan UIX'
      },
  
      extUrl: 'https://anotherisland.netlify.app',
      intImg: '/process.svg',
      intText: {
        en: 'See Process',
        id: 'Lihat Proses'
      },
  
      extImg: '/web.svg',
      extText: {
        en: 'See Page',
        id: 'Lihat Halaman'
      },
  
      content1: {
        text: {
          en: 'This project is a simple arcade-survival game called Another Day in the Island, which I designed as research for my final project as a computer science student at the Kalimantan Institute of Technology.',
          id: 'Proyek ini adalah permainan arkade-survival sederhana yang disebut Hari Lain di Pulau, yang saya desain sebagai riset untuk proyek akhir saya sebagai mahasiswa ilmu komputer di Institut Teknologi Kalimantan.'
        }
      },
      content2: {
        text: {
          en: "In this game, players take on the role of a mysterious character, whose objective is to gather as many points as possible by defeating monsters scattered throughout the area.",
          id: "Dalam permainan ini, pemain mengambil peran sebagai karakter misterius, dengan tujuan untuk mengumpulkan sebanyak mungkin poin dengan mengalahkan monster yang tersebar di seluruh area."
        }
      },
      content3: {
        text: {
          en: "This research employs the User-Centered Design (UCD) approach, a method that places users as the primary focus in the product, application, or experience design process as illustrated in the image below.",
          id: "Penelitian ini menggunakan pendekatan User-Centered Design (UCD), yaitu metode yang menempatkan pengguna sebagai fokus utama dalam proses desain produk, aplikasi, atau pengalaman seperti yang digambarkan dalam gambar di bawah."
        }
      },
      content4: {
        img: "/anotherisland/ucd.webp",
        desc: {
          en: "UCD Cycle according to usability.gov",
          id: "Siklus UCD menurut usability.gov"
        }
      },
      content5: {
        title: {
          en: "Identify Need",
          id: "Identifikasi Kebutuhan"
        },
        text: {
          en: "This is a stage where the researcher identifies the requirements that users will have while playing the designed game. A questionnaire can serve as a tool to assist the researcher in the process of identifying user needs throughout the project.",
          id: "Ini adalah tahap di mana peneliti mengidentifikasi kebutuhan yang akan dimiliki pengguna saat bermain game yang dirancang. Kuesioner dapat berfungsi sebagai alat untuk membantu peneliti dalam proses mengidentifikasi kebutuhan pengguna selama proyek."
        }
      },
      content6: {
        img: "/example2.jpg",
        desc: {
          en: "Questionnaire Results (Feb 4, 2023)",
          id: "Hasil Kuesioner (Feb 4, 2023)"
        }
      },
      content7: {
        text: {
          en: "The questions presented to participants consist of several sections. The first part includes questions about the participants' profiles, such as age range, their preferences for games and reasons behind them, and the players' experiences with arcade games.",
          id: "Pertanyaan yang diajukan kepada peserta terdiri dari beberapa bagian. Bagian pertama mencakup pertanyaan tentang profil peserta, seperti rentang usia, preferensi mereka terhadap permainan dan alasan di baliknya, serta pengalaman pemain dengan permainan arkade."
        }
      },
      content8: {
        text: {
          en: "The second part involves questions from the participants' perspective on arcade games in terms of gameplay, visuals, overall impressions, and finally, their preference for the desired game model to be developed.",
          id: "Bagian kedua melibatkan pertanyaan dari perspektif peserta tentang permainan arkade dalam hal gameplay, visual, kesan keseluruhan, dan akhirnya, preferensi mereka untuk model permainan yang ingin dikembangkan."
        }
      },
      content9: {
        text: {
          en: "To understand the participants more deeply, the next stage is creating user personas to gain a clear understanding of what users are currently experiencing and needing. These personas are fictional characters based on the data gathered from the questionnaires, which help in shaping the design process by representing the primary users.",
          id: "Untuk memahami peserta lebih dalam, tahap berikutnya adalah membuat persona pengguna untuk mendapatkan pemahaman yang jelas tentang apa yang saat ini dialami dan dibutuhkan pengguna. Persona ini adalah karakter fiksi yang didasarkan pada data yang dikumpulkan dari kuesioner, yang membantu membentuk proses desain dengan mewakili pengguna utama."
        }
      },
      content10: {
        img: "/example2.jpg",
        desc: {
          en: "User Persona's that have been created",
          id: "Persona Pengguna yang telah dibuat"
        }
      },
      content11: {
        text: {
          en: "The results obtained from the questionnaire participants will be used to identify user preferences in the game to be developed. These points will be used as references in the design of the Another Day in the Island arcade game. Here are the key points identified from the research:",
          id: "Hasil yang diperoleh dari peserta kuesioner akan digunakan untuk mengidentifikasi preferensi pengguna dalam permainan yang akan dikembangkan. Poin-poin ini akan digunakan sebagai referensi dalam desain permainan arcade Another Day in the Island. Berikut adalah poin-poin kunci yang diidentifikasi dari riset:"
        }
      },
      content12: {
        img: "/example2.jpg",
        desc: {
          en: "This is the description for the image.",
          id: "Ini adalah deskripsi untuk gambar."
        }
      },
      content13: {
        text: {
          en: "In this stage, the researcher will establish the necessary requirements for the game design by conducting research on competitors, such as similar or related games. The research is carried out to understand how their products function, identify areas for improvement, and create features that are more appealing than those of competitors. This helps in shaping a better user experience in the new game.",
          id: "Pada tahap ini, peneliti akan menetapkan persyaratan yang diperlukan untuk desain permainan dengan melakukan riset pada pesaing, seperti permainan serupa atau terkait. Riset dilakukan untuk memahami bagaimana produk mereka berfungsi, mengidentifikasi area yang perlu diperbaiki, dan menciptakan fitur yang lebih menarik daripada pesaing. Ini membantu dalam membentuk pengalaman pengguna yang lebih baik dalam permainan baru."
        }
      },
      content14: {
        text: {
          en: "In this case, the researcher has selected a game with a similar mechanism, namely the arcade game series from Bandai Namco called Galaga. The game mechanics, enemy behavior, and power-ups are analyzed to understand what makes the game engaging and how those aspects can be improved or adapted for 'Another Day in the Island'.",
          id: "Dalam hal ini, peneliti telah memilih permainan dengan mekanisme serupa, yaitu seri permainan arkade dari Bandai Namco yang disebut Galaga. Mekanika permainan, perilaku musuh, dan power-up dianalisis untuk memahami apa yang membuat permainan ini menarik dan bagaimana aspek-aspek tersebut dapat ditingkatkan atau diadaptasi untuk 'Another Day in the Island'."
        }
      },
      content15: {
        img: "/example2.jpg",
        desc: {
          en: "This is the description for the image.",
          id: "Ini adalah deskripsi untuk gambar."
        }
      },
      content16: {
        text: {
          en: 'Based on the attached data, the design of the Another Day in the Island game can be done by creating a simple game with a more modern interface and characters. One advantage is that the player character can move freely, enhancing the gaming experience. The integration of modern design elements, such as smoother animations and responsive controls, will help create a more immersive experience for players.',
          id: 'Berdasarkan data yang terlampir, desain permainan Another Day in the Island dapat dilakukan dengan membuat permainan sederhana dengan antarmuka dan karakter yang lebih modern. Salah satu keuntungannya adalah bahwa karakter pemain dapat bergerak dengan bebas, meningkatkan pengalaman bermain. Integrasi elemen desain modern, seperti animasi yang lebih halus dan kontrol yang responsif, akan membantu menciptakan pengalaman yang lebih imersif bagi pemain.'
        },
      },
    },
    {
      id: 2,
      title: 'Another Day in the Island',
      cover: '/cover1.webp',
      
      category: {
        en: 'Game UIX',
        id: 'Permainan UIX'
      },
  
      extUrl: 'https://anotherisland.netlify.app',
      intImg: '/process.svg',
      intText: {
        en: 'See Process',
        id: 'Lihat Proses'
      },
  
      extImg: '/web.svg',
      extText: {
        en: 'See Page',
        id: 'Lihat Halaman'
      },
  
      content1: {
        text: {
          en: 'This project is a simple arcade-survival game called Another Day in the Island, which I designed as research for my final project as a computer science student at the Kalimantan Institute of Technology.',
          id: 'Proyek ini adalah permainan arkade-survival sederhana yang disebut Hari Lain di Pulau, yang saya desain sebagai riset untuk proyek akhir saya sebagai mahasiswa ilmu komputer di Institut Teknologi Kalimantan.'
        }
      },
      content2: {
        text: {
          en: "In this game, players take on the role of a mysterious character, whose objective is to gather as many points as possible by defeating monsters scattered throughout the area.",
          id: "Dalam permainan ini, pemain mengambil peran sebagai karakter misterius, dengan tujuan untuk mengumpulkan sebanyak mungkin poin dengan mengalahkan monster yang tersebar di seluruh area."
        }
      },
      content3: {
        text: {
          en: "This research employs the User-Centered Design (UCD) approach, a method that places users as the primary focus in the product, application, or experience design process as illustrated in the image below.",
          id: "Penelitian ini menggunakan pendekatan User-Centered Design (UCD), yaitu metode yang menempatkan pengguna sebagai fokus utama dalam proses desain produk, aplikasi, atau pengalaman seperti yang digambarkan dalam gambar di bawah."
        }
      },
      content4: {
        img: "/anotherisland/ucd.webp",
        desc: {
          en: "UCD Cycle according to usability.gov",
          id: "Siklus UCD menurut usability.gov"
        }
      },
      content5: {
        title: {
          en: "Identify Need",
          id: "Identifikasi Kebutuhan"
        },
        text: {
          en: "This is a stage where the researcher identifies the requirements that users will have while playing the designed game. A questionnaire can serve as a tool to assist the researcher in the process of identifying user needs throughout the project.",
          id: "Ini adalah tahap di mana peneliti mengidentifikasi kebutuhan yang akan dimiliki pengguna saat bermain game yang dirancang. Kuesioner dapat berfungsi sebagai alat untuk membantu peneliti dalam proses mengidentifikasi kebutuhan pengguna selama proyek."
        }
      },
      content6: {
        img: "/example2.jpg",
        desc: {
          en: "Questionnaire Results (Feb 4, 2023)",
          id: "Hasil Kuesioner (Feb 4, 2023)"
        }
      },
      content7: {
        text: {
          en: "The questions presented to participants consist of several sections. The first part includes questions about the participants' profiles, such as age range, their preferences for games and reasons behind them, and the players' experiences with arcade games.",
          id: "Pertanyaan yang diajukan kepada peserta terdiri dari beberapa bagian. Bagian pertama mencakup pertanyaan tentang profil peserta, seperti rentang usia, preferensi mereka terhadap permainan dan alasan di baliknya, serta pengalaman pemain dengan permainan arkade."
        }
      },
      content8: {
        text: {
          en: "The second part involves questions from the participants' perspective on arcade games in terms of gameplay, visuals, overall impressions, and finally, their preference for the desired game model to be developed.",
          id: "Bagian kedua melibatkan pertanyaan dari perspektif peserta tentang permainan arkade dalam hal gameplay, visual, kesan keseluruhan, dan akhirnya, preferensi mereka untuk model permainan yang ingin dikembangkan."
        }
      },
      content9: {
        text: {
          en: "To understand the participants more deeply, the next stage is creating user personas to gain a clear understanding of what users are currently experiencing and needing. These personas are fictional characters based on the data gathered from the questionnaires, which help in shaping the design process by representing the primary users.",
          id: "Untuk memahami peserta lebih dalam, tahap berikutnya adalah membuat persona pengguna untuk mendapatkan pemahaman yang jelas tentang apa yang saat ini dialami dan dibutuhkan pengguna. Persona ini adalah karakter fiksi yang didasarkan pada data yang dikumpulkan dari kuesioner, yang membantu membentuk proses desain dengan mewakili pengguna utama."
        }
      },
      content10: {
        img: "/example2.jpg",
        desc: {
          en: "User Persona's that have been created",
          id: "Persona Pengguna yang telah dibuat"
        }
      },
      content11: {
        text: {
          en: "The results obtained from the questionnaire participants will be used to identify user preferences in the game to be developed. These points will be used as references in the design of the Another Day in the Island arcade game. Here are the key points identified from the research:",
          id: "Hasil yang diperoleh dari peserta kuesioner akan digunakan untuk mengidentifikasi preferensi pengguna dalam permainan yang akan dikembangkan. Poin-poin ini akan digunakan sebagai referensi dalam desain permainan arcade Another Day in the Island. Berikut adalah poin-poin kunci yang diidentifikasi dari riset:"
        }
      },
      content12: {
        img: "/example2.jpg",
        desc: {
          en: "This is the description for the image.",
          id: "Ini adalah deskripsi untuk gambar."
        }
      },
      content13: {
        text: {
          en: "In this stage, the researcher will establish the necessary requirements for the game design by conducting research on competitors, such as similar or related games. The research is carried out to understand how their products function, identify areas for improvement, and create features that are more appealing than those of competitors. This helps in shaping a better user experience in the new game.",
          id: "Pada tahap ini, peneliti akan menetapkan persyaratan yang diperlukan untuk desain permainan dengan melakukan riset pada pesaing, seperti permainan serupa atau terkait. Riset dilakukan untuk memahami bagaimana produk mereka berfungsi, mengidentifikasi area yang perlu diperbaiki, dan menciptakan fitur yang lebih menarik daripada pesaing. Ini membantu dalam membentuk pengalaman pengguna yang lebih baik dalam permainan baru."
        }
      },
      content14: {
        text: {
          en: "In this case, the researcher has selected a game with a similar mechanism, namely the arcade game series from Bandai Namco called Galaga. The game mechanics, enemy behavior, and power-ups are analyzed to understand what makes the game engaging and how those aspects can be improved or adapted for 'Another Day in the Island'.",
          id: "Dalam hal ini, peneliti telah memilih permainan dengan mekanisme serupa, yaitu seri permainan arkade dari Bandai Namco yang disebut Galaga. Mekanika permainan, perilaku musuh, dan power-up dianalisis untuk memahami apa yang membuat permainan ini menarik dan bagaimana aspek-aspek tersebut dapat ditingkatkan atau diadaptasi untuk 'Another Day in the Island'."
        }
      },
      content15: {
        img: "/example2.jpg",
        desc: {
          en: "This is the description for the image.",
          id: "Ini adalah deskripsi untuk gambar."
        }
      },
      content16: {
        text: {
          en: 'Based on the attached data, the design of the Another Day in the Island game can be done by creating a simple game with a more modern interface and characters. One advantage is that the player character can move freely, enhancing the gaming experience. The integration of modern design elements, such as smoother animations and responsive controls, will help create a more immersive experience for players.',
          id: 'Berdasarkan data yang terlampir, desain permainan Another Day in the Island dapat dilakukan dengan membuat permainan sederhana dengan antarmuka dan karakter yang lebih modern. Salah satu keuntungannya adalah bahwa karakter pemain dapat bergerak dengan bebas, meningkatkan pengalaman bermain. Integrasi elemen desain modern, seperti animasi yang lebih halus dan kontrol yang responsif, akan membantu menciptakan pengalaman yang lebih imersif bagi pemain.'
        },
      },
    },
  ];
  
  export default NotesData;