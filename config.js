/* REBRAND: ganti nama/tagline/warna di sini. Fitur dari _engine (dibagi). */
window.APP = {
  "id": "planner-Solace",
  "nama": "Solace",
  "tagline": "Rencanakan hari sakralmu dengan tenang",
  "logo": "",
  "modul": [
    "beranda",
    "fokus",
    "checklist",
    "ritme",
    "timeline",
    "anggaran",
    "vendor",
    "tamu",
    "rundown",
    "seserahan",
    "sasaran",
    "kalender",
    "pustaka",
    "jurnal",
    "catatan",
    "tinjau",
    "skor",
    "tantangan",
    "pencapaian",
    "cetak",
    "panduan"
  ],
  "labels": {
    "beranda": "Beranda",
    "fokus": "Fokus Hari Ini",
    "checklist": "Checklist & Tugas",
    "ritme": "Ritme",
    "sasaran": "Sasaran",
    "kalender": "Kalender",
    "pustaka": "Pustaka",
    "jurnal": "Jurnal",
    "catatan": "Catatan",
    "tinjau": "Tinjauan",
    "skor": "Skor Kesiapan",
    "tantangan": "Tantangan",
    "pencapaian": "Pencapaian",
    "cetak": "Studio Cetak",
    "panduan": "Panduan",
    "timeline": "Timeline Nikah",
    "anggaran": "Anggaran Nikah",
    "vendor": "Vendor",
    "tamu": "Tamu & RSVP",
    "rundown": "Rundown Acara",
    "seserahan": "Seserahan"
  },
  "navGroups": [
    {
      "label": "Hari Ini",
      "ids": [
        "beranda",
        "fokus",
        "checklist",
        "ritme"
      ]
    },
    {
      "label": "Pernikahan",
      "ids": [
        "timeline",
        "anggaran",
        "vendor",
        "tamu",
        "rundown",
        "seserahan"
      ]
    },
    {
      "label": "Rencana",
      "ids": [
        "sasaran",
        "kalender",
        "pustaka"
      ]
    },
    {
      "label": "Refleksi",
      "ids": [
        "jurnal",
        "catatan",
        "tinjau"
      ]
    },
    {
      "label": "Progres",
      "ids": [
        "skor",
        "tantangan",
        "pencapaian",
        "cetak",
        "panduan"
      ]
    }
  ],
  "ai": {
    "provider": "gemini",
    "model": "gemini-2.0-flash"
  },
  "spec": {
    "onboardHabits": [
      {
        "nama": "Cek & update anggaran",
        "domain": "anggaran",
        "p": 0.62
      },
      {
        "nama": "Follow up 1 vendor",
        "domain": "vendor",
        "p": 0.55
      },
      {
        "nama": "Ngobrol berdua soal rencana",
        "domain": "pribadi",
        "p": 0.6
      },
      {
        "nama": "Rawat diri (skincare/olahraga)",
        "domain": "pribadi",
        "p": 0.5
      },
      {
        "nama": "Update list tamu/RSVP",
        "domain": "tamu",
        "p": 0.45
      }
    ],
    "onboardRoutine": {
      "nama": "Rutinitas Pagi",
      "waktu": "pagi",
      "items": [
        "Mulai dengan tenang",
        "Tetapkan 1 niat utama",
        "Siapkan yang dibutuhkan hari ini"
      ]
    },
    "habitPacks": [
      {
        "nama": "Paket Anggaran",
        "icon": "flame",
        "warna": "#fbbf24",
        "habits": [
          {
            "nama": "Cek & update anggaran",
            "domain": "anggaran"
          },
          {
            "nama": "Simpan bukti bayar/kontrak",
            "domain": "anggaran"
          }
        ]
      },
      {
        "nama": "Paket Vendor",
        "icon": "flame",
        "warna": "#38bdf8",
        "habits": [
          {
            "nama": "Follow up 1 vendor",
            "domain": "vendor"
          }
        ]
      },
      {
        "nama": "Paket Diri & Pasangan",
        "icon": "flame",
        "warna": "#9caf88",
        "habits": [
          {
            "nama": "Ngobrol berdua soal rencana",
            "domain": "pribadi"
          },
          {
            "nama": "Rawat diri (skincare/olahraga)",
            "domain": "pribadi"
          }
        ]
      }
    ],
    "goalTemplates": [
      {
        "judul": "Kunci venue & tanggal",
        "domain": "acara",
        "horizon": "bulan",
        "sub": [
          "Survei 3 venue",
          "Bandingkan paket & harga",
          "Bayar DP venue terpilih",
          "Kunci tanggal"
        ]
      },
      {
        "judul": "Anggaran fix & tidak jebol",
        "domain": "anggaran",
        "horizon": "kuartal",
        "sub": [
          "Tetapkan pagu total",
          "Alokasi per pos",
          "Sisihkan dana darurat 10%"
        ]
      },
      {
        "judul": "Vendor inti lengkap",
        "domain": "vendor",
        "horizon": "kuartal",
        "sub": [
          "Katering",
          "Dekor",
          "Foto & video",
          "MUA & busana"
        ]
      }
    ],
    "kind": "wedding",
    "kindLabel": "persiapan pernikahan",
    "scoreLabel": "Skor Kesiapan",
    "wheelLabel": "Roda Persiapan",
    "heroTitle": "Menuju hari sakral,<br>dengan hati yang tenang.",
    "heroSub": "Nikmati prosesnya — satu ceklis kecil setiap hari.",
    "niatPh": "Fokus hari ini… mis. Fiksasi vendor katering",
    "goalPh": "mis. Booking venue impian",
    "domains": [
      {
        "key": "acara",
        "label": "Acara & Venue",
        "color": "#d9b48a"
      },
      {
        "key": "anggaran",
        "label": "Anggaran",
        "color": "#fbbf24"
      },
      {
        "key": "vendor",
        "label": "Vendor",
        "color": "#38bdf8"
      },
      {
        "key": "tamu",
        "label": "Tamu & Undangan",
        "color": "#e79ab0"
      },
      {
        "key": "pribadi",
        "label": "Diri & Pasangan",
        "color": "#9caf88"
      }
    ],
    "seedBrain": {
      "nama": "Calon Pengantin",
      "peran": "sedang menyiapkan pernikahan",
      "musim": "Musim Persiapan Bahagia",
      "nilai": [
        "kebersamaan",
        "syukur",
        "tenang"
      ],
      "fokus": "beres vendor besar & jaga anggaran",
      "tantangan": "gampang overwhelmed & overspending"
    },
    "seedHabits": [
      {
        "nama": "Cek & update anggaran",
        "domain": "anggaran",
        "p": 0.62
      },
      {
        "nama": "Follow up 1 vendor",
        "domain": "vendor",
        "p": 0.55
      },
      {
        "nama": "Ngobrol berdua soal rencana",
        "domain": "pribadi",
        "p": 0.6
      },
      {
        "nama": "Rawat diri (skincare/olahraga)",
        "domain": "pribadi",
        "p": 0.5
      },
      {
        "nama": "Update list tamu/RSVP",
        "domain": "tamu",
        "p": 0.45
      },
      {
        "nama": "Simpan bukti bayar/kontrak",
        "domain": "anggaran",
        "p": 0.66
      }
    ],
    "seedGoals": [
      {
        "judul": "Kunci venue & tanggal",
        "domain": "acara",
        "horizon": "bulan",
        "kenapa": "fondasi semua rencana lain",
        "sub": [
          "Survei 3 venue",
          "Bandingkan paket & harga",
          "Bayar DP venue terpilih",
          "Kunci tanggal"
        ],
        "doneN": 2,
        "deadline": "2026-08-04"
      },
      {
        "judul": "Anggaran fix & tidak jebol",
        "domain": "anggaran",
        "horizon": "kuartal",
        "kenapa": "mulai rumah tangga tanpa utang",
        "sub": [
          "Tetapkan pagu total",
          "Alokasi per pos",
          "Sisihkan dana darurat 10%"
        ],
        "doneN": 1,
        "deadline": "2026-09-03"
      },
      {
        "judul": "Vendor inti lengkap",
        "domain": "vendor",
        "horizon": "kuartal",
        "sub": [
          "Katering",
          "Dekor",
          "Foto & video",
          "MUA & busana"
        ],
        "doneN": 1,
        "deadline": "2026-09-23"
      }
    ],
    "checklistTemplates": [
      {
        "jenis": "rutinitas",
        "nama": "Ritual Persiapan Mingguan",
        "waktu": "kapan",
        "icon": "heart",
        "warna": "#b0895c",
        "items": [
          "Follow up 1 vendor",
          "Update anggaran & bukti bayar",
          "Ngobrol berdua soal rencana",
          "Rawat diri (skincare/olahraga)"
        ]
      },
      {
        "jenis": "proyek",
        "nama": "H-30 Menuju Hari-H",
        "waktu": null,
        "icon": "hourglass",
        "warna": "#d9b48a",
        "items": [
          "Rekap RSVP tamu",
          "Pelunasan semua vendor",
          "Fitting akhir busana",
          "Gladi bersih",
          "Siapkan kotak darurat hari-H"
        ]
      }
    ],
    "guide": {
      "intro": "Rencanakan hari sakralmu dengan tenang. Timeline, anggaran, vendor, tamu — tertata, tanpa overwhelmed.",
      "sub": null,
      "start": [
        {
          "j": "Ikuti Timeline",
          "d": "Menu Timeline Nikah: kerjakan checklist sesuai fase waktu ke hari-H."
        },
        {
          "j": "Jaga anggaran",
          "d": "Di Anggaran Nikah & Vendor, pantau biaya biar tidak jebol."
        },
        {
          "j": "Kelola tamu",
          "d": "Daftar tamu & RSVP di menu Tamu."
        }
      ],
      "faq": [
        {
          "q": "Persiapan terasa berat?",
          "a": "Fokus satu fase saja sesuai timeline. Tidak perlu urus semua sekaligus — satu ceklis kecil tiap hari cukup."
        }
      ]
    },
    "challenges": [
      {
        "nama": "7 Hari Beres 1 Ceklis Nikah",
        "hari": 7,
        "icon": "heart",
        "warna": "#b0895c",
        "desc": "Satu tugas timeline tiap hari — tanpa panik."
      }
    ]
  },
  "tema": {
    "theme": "light",
    "vars": {
      "--bg": "#fbf7f1",
      "--surface": "#ffffff",
      "--surface2": "#f2e9dc",
      "--ink": "#2a231d",
      "--muted": "#7c6f61",
      "--primary": "#b0895c",
      "--primary-deep": "#977244",
      "--accent": "#d0ad7f",
      "--on-primary": "#ffffff",
      "--line": "#ece0d1",
      "--line2": "#ddccb6",
      "--ok": "#34d399",
      "--warn": "#fbbf24",
      "--danger": "#f87171",
      "--font-d": "\"Fraunces\", serif",
      "--font-b": "\"Jost\", sans-serif",
      "--font-m": "\"JetBrains Mono\", monospace"
    }
  },
  "themes": [
    {
      "key": "gading",
      "nama": "Gading",
      "light": true,
      "vars": {
        "--bg": "#fbf7f1",
        "--surface": "#ffffff",
        "--surface2": "#f2e9dc",
        "--ink": "#2a231d",
        "--muted": "#7c6f61",
        "--primary": "#b0895c",
        "--primary-deep": "#977244",
        "--accent": "#d0ad7f",
        "--on-primary": "#ffffff",
        "--line": "#ece0d1",
        "--line2": "#ddccb6",
        "--ok": "#34d399",
        "--warn": "#fbbf24",
        "--danger": "#f87171"
      }
    },
    {
      "key": "rose",
      "nama": "Rosé Lembut",
      "light": true,
      "vars": {
        "--bg": "#fdf5f6",
        "--surface": "#ffffff",
        "--surface2": "#f8e6ea",
        "--ink": "#2c2126",
        "--muted": "#836b72",
        "--primary": "#d18096",
        "--primary-deep": "#b3647c",
        "--accent": "#e8a8ba",
        "--on-primary": "#ffffff",
        "--line": "#f0e0e3",
        "--line2": "#e6ccd2",
        "--ok": "#34d399",
        "--warn": "#fbbf24",
        "--danger": "#f87171"
      }
    },
    {
      "key": "sage",
      "nama": "Sage Elegan",
      "light": true,
      "vars": {
        "--bg": "#f4f7f1",
        "--surface": "#ffffff",
        "--surface2": "#e9f0e3",
        "--ink": "#232b1e",
        "--muted": "#69725f",
        "--primary": "#7f9e6f",
        "--primary-deep": "#647d56",
        "--accent": "#a8c398",
        "--on-primary": "#ffffff",
        "--line": "#e0e8d7",
        "--line2": "#cedcc2",
        "--ok": "#34d399",
        "--warn": "#fbbf24",
        "--danger": "#f87171"
      }
    },
    {
      "key": "malam",
      "nama": "Sampanye Malam",
      "vars": {
        "--bg": "#141010",
        "--surface": "#1e1817",
        "--surface2": "#28201e",
        "--ink": "#f2e9e2",
        "--muted": "#a29288",
        "--primary": "#d9b48a",
        "--primary-deep": "#b8935f",
        "--accent": "#ecd3ad",
        "--on-primary": "#1c1208",
        "--line": "#332a26",
        "--line2": "#463a34",
        "--ok": "#34d399",
        "--warn": "#fbbf24",
        "--danger": "#f87171"
      }
    }
  ]
};
