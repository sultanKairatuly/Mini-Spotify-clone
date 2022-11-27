import { createStore } from "vuex";

export default createStore({
  state: {
    recentlyPlayed: [],
    allRefs: {},
    currentTrack: null,
    playlists: [],
    onRepeat: false,
    currentAuido: null,
    liked: JSON.parse(localStorage.getItem("liked")) || [],
    currentPlaylist: {},
    musics: [
      {
        type: "metal",
        tracks: [
          {
            title: "Never Broke Again",
            author: "xxxmanera",
            cover:
              "https://images.genius.com/63865006967966b278e3b3060e7f78a3.1000x1000x1.jpg",
            url: "/metal/xxxmanera_-_Never_Broke_Again_(musmore.com)",
            genre: "metal",
            id: 1,
            playing: false,
          },
          {
            title: "Nothing To Fear",
            author: "HIDE & DREAM",
            cover:
              "https://usercontent.jamendo.com/?type=album&id=171589&width=300&trackid=1484347",
            url: "/metal/2._Nothing_To_Fear_-_Hide_amp_Dream",
            genre: "metal",
            id: 2,
            playing: false,
          },
          {
            title: "Far Away From Home",
            author: "THORNWILL",
            cover:
              "https://usercontent.jamendo.com/?type=album&id=71238&width=300&trackid=615568",
            url: "/metal/Far_Away_From_Home_-_Thornwill",
            genre: "metal",
            id: 3,
            playing: false,
          },
          {
            title: "Forgotten Dream",
            author: "THE RINN",
            cover:
              "https://usercontent.jamendo.com/?type=album&id=175351&width=300&trackid=1530450",
            url: "/metal/Forgotten_Dream_-_The_Rinn",
            genre: "metal",
            id: 4,
            playing: false,
          },
          {
            title: "Kill City Kills - Ride into the Badlands",
            author: "KILL CITY KILLS",
            cover:
              "https://usercontent.jamendo.com/?type=album&id=462679&width=300&trackid=1901190",
            url: "/metal/Kill_City_Kills_-_Ride_into_the_Badlands_-_Kill_City_Kills",
            genre: "metal",
            id: 5,
            playing: false,
          },
          {
            title: "Mahidevran - Maze of sorrow",
            author: "MAHIDEVRAN ROCK BAND",
            cover:
              "https://usercontent.jamendo.com/?type=album&id=456498&width=300&trackid=1888584",
            url: "/metal/Mahidevran_-_Maze_of_sorrow_-_Mahidevran",
            genre: "metal",
            id: 6,
            playing: false,
          },
          {
            title: "Machinegun",
            author: "SCREAM INC.",
            cover:
              "https://usercontent.jamendo.com/?type=album&id=169451&width=300&trackid=1460214",
            url: "/metal/Machinegun_-_Scream_Inc._(3)",
            genre: "metal",
            id: 7,
            playing: false,
          },
          {
            title: "Road",
            author: "KOLONY",
            cover:
              "https://usercontent.jamendo.com/?type=album&id=140765&width=300&trackid=1169826",
            url: "/metal/Road_-_Kolony",
            genre: "metal",
            id: 8,
            playing: false,
          },
          {
            title: "Threadbare",
            author: "HANDS OF ATTRITION",
            cover:
              "https://usercontent.jamendo.com/?type=album&id=261841&width=300&trackid=1814443",
            url: "/metal/Threadbare_-_Hands_of_Attrition",
            genre: "metal",
            id: 9,
            playing: false,
          },
          {
            title: "x-_-x-_.+._-",
            author: "POUND",
            cover:
              "https://usercontent.jamendo.com/?type=album&id=447032&width=300&trackid=1867878",
            url: "/metal/x-_-x-_.+._-_-_Pound",
            genre: "metal",
            id: 10,
            playing: false,
          },
        ],
      },

      {
        type: "fresh",
        tracks: [
          {
            title: "One Day We'll Be A Song",
            author: "EXPLOSIVE EAR CANDY",
            cover:
              "https://usercontent.jamendo.com/?type=album&id=496639&width=300&trackid=1974740",
            url: "/fresh/Explosive_Ear_Candy_-_One_Day_We'll_Be_A_Song",
            genre: "fresh",
            id: 11,
            playing: false,
          },
          {
            title: "One Day",
            author: "I. D. F. X.",
            cover:
              "https://usercontent.jamendo.com/?type=album&id=487547&width=300&trackid=1955723",
            url: "/fresh/I._D._F._X._-_One_Day",
            genre: "fresh",
            id: 12,
            playing: false,
          },
          {
            title: "JekK - Keep me Alive (After Lofi)",
            author: "JEKK",
            cover:
              "https://usercontent.jamendo.com/?type=album&id=493437&width=300&trackid=1968662",
            url: "/fresh/JekK_-_JekK__-_Keep_me_Alive_(After_Lofi)",
            genre: "fresh",
            id: 13,
            playing: false,
          },
          {
            title: "This Island",
            author: "LAURENCE DANOVA",
            cover:
              "https://usercontent.jamendo.com/?type=album&id=495036&width=300&trackid=1971660",
            url: "/fresh/Laurence_DaNova_-_This_Island",
            genre: "fresh",
            id: 14,
            playing: false,
          },
          {
            title: "Lady (feat Kid Randie & Myster Sandman)",
            author: "LE_J_JAMES",
            cover:
              "https://usercontent.jamendo.com/?type=album&id=499722&width=300&trackid=1980009",
            url: "/fresh/Le_J_James_-_Lady_(feat_Kid_Randie_&amp;_Myster_Sandman)",
            genre: "fresh",
            id: 15,
            playing: false,
          },
          {
            title: "In the Summer",
            author: "MAIYA",
            cover:
              "https://usercontent.jamendo.com/?type=album&id=498429&width=300&trackid=1977273",
            url: "/fresh/Maiya_-_In_the_Summer",
            genre: "fresh",
            id: 16,
            playing: false,
          },
          {
            title: "Star in the Sky",
            author: "SQUARE A SAW",
            cover:
              "https://usercontent.jamendo.com/?type=album&id=489247&width=300&trackid=1960209",
            url: "/fresh/Square_a_Saw_-_Star_in_the_Sky",
            genre: "fresh",
            id: 17,
            playing: false,
          },
          {
            title: "Live It Up",
            author: "THE.MADPIX.PROJECT",
            cover:
              "https://usercontent.jamendo.com/?type=album&id=497419&width=300&trackid=1975586",
            url: "/fresh/The.madpix.project_-_Live_It_Up",
            genre: "fresh",
            id: 18,
            playing: false,
          },
        ],
      },

      {
        type: "phonk",
        tracks: [
          {
            title: "Close Eyes",
            author: "DVRST",
            cover: "https://i.ytimg.com/vi/iubSQbAeb9c/maxresdefault.jpg",
            url: "/phonk/DVRST - Close Eyes",
            genre: "phonk",
            id: 19,
            playing: false,
          },
          {
            title: "Sahara",
            author: "Hensonn",
            cover:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyX1kDLK4vda-L5XveAhL94JgYCVOhqIlT8w&usqp=CAU",
            url: "/phonk/Hensonn - Sahara",
            genre: "phonk",
            id: 20,
            playing: false,
          },
          {
            title: "METAMORPHOSIS",
            author: "INTERWORLD",
            cover:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt045xttjoKia65-wgHby0Q97M6xGwywfdGA&usqp=CAU",
            url: "/phonk/INTERWORLD - METAMORPHOSIS",
            genre: "phonk",
            id: 21,
            playing: false,
          },
          {
            title: "Override",
            author: "KSLV Noh",
            cover:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOnDia9paOuVeaywX5235k_lBfgXIbktek8Q&usqp=CAU",
            url: "/phonk/KSLV Noh - Override",
            genre: "phonk",
            id: 22,
            playing: false,
          },
          {
            title: "Keraunos Killer",
            author: "4WHEEL",
            cover:
              "https://avatars.yandex.net/get-music-content/5718717/43173809.a.21405409-1/m1000x1000",
            url: "/phonk/PlayaPhonk - KERAUNOS",
            genre: "phonk",
            id: 23,
            playing: false,
          },
          {
            title: "Live Another Day",
            author: "Kordhell",
            cover:
              "https://i1.sndcdn.com/artworks-xIKYFG7WxtMucLZg-WXHkEw-t500x500.jpg",
            url: "/phonk/KORDHELL - LIVE ANOTHER DAY",
            genre: "phonk",
            id: 24,
            playing: false,
          },
          {
            title: "PHONKY TOWN",
            author: "PlayaPhonk",
            cover: "https://i1.sndcdn.com/artworks-7jqlnzfN33Hr-0-t500x500.jpg",
            url: "/phonk/PlayaPhonk - PHONKY TOWN",
            genre: "phonk",
            id: 25,
            playing: false,
          },
          {
            title: "Scary Garry",
            author: "Kaito Shome, DJ Paul",
            cover:
              "https://i1.sndcdn.com/artworks-LW20AIwYvmYIzYpc-oVezdg-t500x500.jpg",
            url: "/phonk/Kaito Shoma, DJ Paul - Scary Garry",
            genre: "phonk",
            id: 26,
            playing: false,
          },
        ],
      },

      {
        type: "popular",
        tracks: [
          {
            title: "Bad Guy",
            author: "Billie Eilish",
            cover: "https://m-zona.net/uploads/posts/2019-06/1560274395_1.jpg",
            url: "/popular/billie-eilish-bad-guy (1)",
            genre: "popular",
            id: 27,
            playing: false,
          },
          {
            title: "Another Love",
            author: "Tom Odell",
            cover:
              "https://aydym.com/images/fc5f5595-55d9-4007-a837-f680ab500224.webp",
            url: "/popular/Tom Odell - Another Love (Explicit Edit)",
            genre: "popular",
            id: 28,
            playing: false,
          },
          {
            title: "Set Fire To The Rain",
            author: "Adele",
            cover:
              "https://learnsongs.ru/images/photos/albums/adele-21-2011.jpg",
            url: "/popular/Adele - Set the fire into the rain (original)",
            genre: "popular",
            id: 29,
            playing: false,
          },
          {
            title: "LIPSI HA",
            author: "INSTASAMKA",
            cover:
              "https://genius-lyrics.com/wp-content/uploads/2021/09/Lipsi-Ha-%D0%A2%D0%B5%D0%BA%D1%81%D1%82-%D0%BF%D0%B5%D1%81%D0%BD%D0%B8-INSTASAMKA-300x300.jpg",
            url: "/popular/INSTASAMKA - LIPSI HA",
            genre: "popular",
            id: 30,
            playing: false,
          },
          {
            title: "Любимка",
            author: "NILETTO",
            cover: "https://i.ytimg.com/vi/xSgT4ZtT5M0/maxresdefault.jpg",
            url: "/popular/NILETTO - Любимка",
            genre: "popular",
            id: 31,
            playing: false,
          },
          {
            title: "POPSTAR",
            author: "INSTASAMKA",
            cover:
              "https://images.genius.com/98f860503d2a68583a8cd0c320df1c4a.1000x1000x1.png",
            url: "/popular/INSTASAMKA - POPSTAR",
            genre: "popular",
            id: 32,
            playing: false,
          },
          {
            title: "Mockingbird",
            author: "Eminem",
            cover:
              "https://upload.wikimedia.org/wikipedia/en/f/fc/Mockingbird_%28Eminem_song%29_cover.jpg",
            url: "/popular/Eminem - Mockin' Bird",
            genre: "popular",
            id: 33,
            playing: false,
          },
          {
            title: "2 типа людей",
            author: "Макс Корж",
            cover:
              "https://i.discogs.com/dbaGvBDAOnSX-sCSqCY9NlaoGPRB3mFuC7HVjXorn2w/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE0OTcx/MjE2LTE1ODQ5MDE3/MjktMzM4MS5qcGVn.jpeg",
            url: "/popular/Макс Корж - 2 типа людей",
            genre: "popular",
            id: 34,
            playing: false,
          },
        ],
      },

      {
        tracks: [],
        type: "mix",
        mixs: [
          {
            title: "Микс для релакса",
            author:
              "Lil Uzi Vert, MORGENSHTERN, ROCKET, Timati BUSHIDO ZHO, Shiloh Dinasty, Timmies, GONE.Fludd, G-Eazy & Mally Mall",
            cover:
              "https://images.squarespace-cdn.com/content/v1/5b788d28697a98e17a6d4c7a/1555975312476-6UPOZLGEAJVLNAI98JSX/image3.png",
            name: "relax-mix",
            mixId: 1,
            songs: [
              {
                title: "Boys don't cry",
                author: "GONE.Fludd",
                cover:
                  "https://is5-ssl.mzstatic.com/image/thumb/Music124/v4/1b/4f/fb/1b4ffb74-9aac-ba4c-cfff-a874912daa6c/886447070024.jpg/600x600bf-60.jpg",
                url: "/mixs/mix1/Gone.Fludd - Boys don't cry",
                genre: "mix",
                id: 35,
                playing: false,
              },
              {
                title: "Trap Day",
                author: "ROCKET",
                cover:
                  "https://images.genius.com/228f0a52f9dcdbb43c0f9cd8086da09b.1000x1000x1.jpg",
                url: "/mixs/mix1/ROCKET - Trap Day",
                genre: "mix",
                id: 36,
                playing: false,
              },
              {
                title: "Кубик льда",
                author: "GONE.Fludd",
                cover:
                  "https://i1.sndcdn.com/artworks-000467123481-sf220f-t500x500.jpg",
                url: "/mixs/mix1/Gone.Fludd - Кубик льда",
                genre: "mix",
                id: 37,
                playing: false,
              },
              {
                title: "Кадиллак",
                author: "MORGENSHTERN",
                cover:
                  "https://i1.sndcdn.com/artworks-zZzzLb3SAgdyfBo5-uTDp7Q-t500x500.jpg",
                url: "/mixs/mix1/morgenshtern-eldzhej-kadillak-mp3",
                genre: "mix",
                id: 38,
                playing: false,
              },
              {
                title: "Infinite Tsukuyomi",
                author: "ROCKET",
                cover:
                  "https://cdns-images.dzcdn.net/images/cover/59392d3c12deb5e19433b464f4b591cc/350x350.jpg",
                url: "/mixs/mix1/ROCKET - Infinite Tsukuyomi",
                genre: "mix",
                id: 39,
                playing: false,
              },
              {
                title: "СТОМАТОЛОГИЧКА",
                author: "BUSHIDO ZHO",
                cover:
                  "https://images.genius.com/2d9860c858eb0b3b47266d0257b7c3d2.1000x1000x1.png",
                url: "/mixs/mix1/163ONMYNECK, BUSHIDO ZHO - СТОМАТОЛОГИЧКА",
                genre: "mix",
                id: 40,
                playing: false,
              },
              {
                title: "Проснулся в темноте",
                author: "GONE.Fludd",
                cover:
                  "http://sun9-88.userapi.com/impf/c856032/v856032924/157567/tHet5snQp8U.jpg?size=604x604&quality=96&sign=265dca94f711e3e956c69e2cb25b805f&type=album",
                url: "/mixs/mix1/gone-fludd-prosnulsya-v-temnote-mp3",
                genre: "mix",
                id: 41,
                playing: false,
              },
              {
                title: "Loosing Interest",
                author: "Shiloh Dynasty, Timmies",
                cover:
                  "https://cdns-images.dzcdn.net/images/cover/d6ee7e5735dc8712a5cdb0d71bd26fd4/500x500.jpg",
                url: "/mixs/mix1/Timmies_Shiloh_-_Loosing_Interest_(musmore.com)",
                genre: "mix",
                id: 42,
                playing: false,
              },
              {
                title: "Motti",
                author: "Lil Uzi Vert, G-Eazy & Mally Mall",
                cover:
                  "https://townsquare.media/site/812/files/2021/05/trippie-redd-photo-7.jpg?w=980&q=75",
                url: "/mixs/mix1/David Guetta & Steve Aoki feat. Lil Uzi Vert, G-Eazy & Mally Mall - Motto",
                genre: "mix",
                id: 43,
                playing: false,
              },
              {
                title: "Цвет Настроения Чёрный",
                author: "Тимати feat. Филипп Киркоров",
                cover:
                  "https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/8d/b8/da/8db8dadb-246d-c1d2-7243-b43fe194f277/cover.jpg/1200x1200bf-60.jpg",
                url: "/mixs/mix1/Егор Крид feat. Филипп Киркоров - Цвет Настроения Чёрный",
                genre: "mix",
                id: 44,
                playing: false,
              },
              {
                title: "Гучи",
                author: "Тимати feat. Егор Крид ",
                cover:
                  "https://cdns-images.dzcdn.net/images/cover/9a66907b3af79861a6e2a1361cd2280e/350x350.jpg",
                url: "/mixs/mix1/Тимати feat. Егор Крид - Гучи",
                genre: "mix",
                id: 45,
                playing: false,
              },
              {
                title: "Multi Millionaire",
                author: "Lil Pump feat. Lil Uzi Vert",
                cover:
                  "https://townsquare.media/site/812/files/2018/10/Lil-Pump-Lil-Uzi-Vert-Multi-Millionaire-Cover-Full.jpg?w=1080&q=75",
                url: "/mixs/mix1/Lil Pump feat. Lil Uzi Vert - Multi Millionaire",
                genre: "mix",
                id: 46,
                playing: false,
              },
              {
                title: "CRYSTAL & МОЁТ",
                author: "MORGENSHTERN",
                cover:
                  "https://cdns-images.dzcdn.net/images/cover/36f4f0531315cb4e4324249b3a20dc93/500x500.jpg",
                url: "/mixs/mix1/morgenshtern-cristal-moyot-mp3-mp3",
                genre: "mix",
                id: 47,
                playing: false,
              },
              {
                title: "That's A Rack",
                author: "Lil Uzi Vert",
                cover:
                  "https://i1.sndcdn.com/artworks-2jXb7LWeszpI-0-t500x500.jpg",
                url: "/mixs/mix1/Lil Uzi Vert - That's A Rack",
                genre: "mix",
                id: 48,
                playing: false,
              },
              {
                title: "XO TOUR Llif3",
                author: "Lil Uzi Vert",
                cover:
                  "https://i1.sndcdn.com/artworks-000209741436-qfq484-t500x500.jpg",
                url: "/mixs/mix1/Lil Uzi Vert - XO TOUR Llif3",
                genre: "mix",
                id: 49,
                playing: false,
              },
              {
                title: "Водила",
                author: "BUSHIDO ZHO",
                cover:
                  "https://is4-ssl.mzstatic.com/image/thumb/Music112/v4/d1/a1/ac/d1a1acc8-72b8-5d92-34ee-1c053240c020/cover.jpg/1200x1200bf-60.jpg",
                url: "/mixs/mix1/bushido-zho-vodila-mp3",
                genre: "mix",
                id: 50,
                playing: false,
              },
              {
                title: "Tell Me Why Im Waiting",
                author: "Shiloh Dynasty, Timmies",
                cover:
                  "https://i1.sndcdn.com/artworks-000335702556-f48jlp-t500x500.jpg",
                url: "/mixs/mix1/Timmies_Shiloh_-_Tell_Me_Why_Im_Waiting_(musmore.com)",
                genre: "mix",
                id: 51,
                playing: false,
              },
              {
                title: "El Problema",
                author: "MORGENSHTERN",
                cover:
                  "https://cdns-images.dzcdn.net/images/cover/6783287c57bd3607e0a66562ab3aee16/350x350.jpg",
                url: "/mixs/mix1/morgenshtern-timati-el-problema-mp3",
                genre: "mix",
                id: 52,
                playing: false,
              },
              {
                title: "Мамбл",
                author: "GONE.Fludd",
                cover:
                  "https://images.genius.com/96e721f851e8b5ab8501639ddee7777a.1000x1000x1.png",
                url: "/mixs/mix1/Gone.Fludd - Мамбл",
                genre: "mix",
                id: 53,
                playing: false,
              },
              {
                title: "Инкассатор",
                author: "ROCKET",
                cover:
                  "https://images.genius.com/2f95edbed0dedf35251d9e0aee80e3d2.1000x1000x1.jpg",
                url: "/mixs/mix1/ROCKET - Инкассатор",
                genre: "mix",
                id: 54,
                playing: false,
              },
            ],
          },

          {
            title: "Микс дня #1",
            author:
              "Johny, Oxxxymiron, Алёна Швец, Miyagi & Эндшпиль, Король и Шут, Post Malone, Konfuz, Slava Marlow",
            cover:
              "https://lh3.googleusercontent.com/CedjLhgWA8IfDZEg0-Ebqdn2IKJFCCjIuFEtkH_nLehfYdWdRrZeklT7_I6YmsgB_eCUkRu3Ml5jiQ=w544-h544-p-l90-rj",
            name: "mix-of-day-1",
            mixId: 2,
            songs: [
              {
                title: "Антигерой",
                author: "Elman",
                cover:
                  "https://avatars.yandex.net/get-music-content/108289/f1076a1b.a.7693526-1/m1000x1000",
                url: "/mixs/mix2/Elman - Антигерой",
                genre: "mix",
                id: 55,
                playing: false,
              },
              {
                title: "Федерико Феллини",
                author: "Galibri & Mavik",
                cover:
                  "https://cdns-images.dzcdn.net/images/cover/b4fdf484f8484c947779243a0fa49754/350x350.jpg",
                url: "/mixs/mix2/Galibri & Mavik - Федерико Феллини",
                genre: "mix",
                id: 56,
                playing: false,
              },
              {
                title: "Лали",
                author: "Jony",
                cover:
                  "https://i1.sndcdn.com/artworks-000639715108-it6b96-t500x500.jpg",
                url: "/mixs/mix2/Jony - Лали",
                genre: "mix",
                id: 57,
                playing: false,
              },
              {
                title: "Little Dark Age",
                author: "MGMT_",
                cover:
                  "https://upload.wikimedia.org/wikipedia/en/8/8d/MGMT_-_Little_Dark_Age.png",
                url: "/mixs/mix2/MGMT_-_little_dark_age",
                genre: "mix",
                id: 58,
                playing: false,
              },
              {
                title: "Комета",
                author: "Jony",
                cover: "https://i.ytimg.com/vi/yM1QjdoLmxQ/maxresdefault.jpg",
                url: "/mixs/mix2/Jony - Комета",
                genre: "mix",
                id: 59,
                playing: false,
              },
              {
                title: "Биполярочка",
                author: "Oxxxymiron",
                cover:
                  "https://cdns-images.dzcdn.net/images/cover/7a7b820331312b58f5af1573bb1cf3a0/350x350.jpg",
                url: "/mixs/mix2/Oxxxymiron - Биполярочка",
                genre: "mix",
                id: 60,
                playing: false,
              },
              {
                title: "Без Тебя Я Не Я",
                author: "HammAli & Navai feat. Jony",
                cover:
                  "https://i1.sndcdn.com/artworks-000522641739-z2uvx5-t500x500.jpg",
                url: "/mixs/mix2/HammAli & Navai feat. Jony - Без Тебя Я Не Я",
                genre: "mix",
                id: 61,
                playing: false,
              },
              {
                title: "Fire Man",
                author: "MiyaGi & Эндшпиль",
                cover:
                  "https://cdns-images.dzcdn.net/images/cover/1a9299c8f22babb0239f31405e1bc9c2/350x350.jpg",
                url: "/mixs/mix2/MiyaGi & Эндшпиль - Fire Man",
                genre: "mix",
                id: 62,
                playing: false,
              },
              {
                title: "Где Нас Нет",
                author: "Oxxxymiron",
                cover:
                  "https://cdns-images.dzcdn.net/images/cover/f5cd227ac880aa0d8c04dbfea6541de6/350x350.jpg",
                url: "/mixs/mix2/Oxxxymiron - Где Нас Нет",
                genre: "mix",
                id: 63,
                playing: false,
              },
              {
                title: "Kosandra",
                author: "MiyaGi & Andy Panda",
                cover:
                  "https://i1.sndcdn.com/artworks-tvLTK2nj2MhrGmWe-gRIBpA-t500x500.jpg",
                url: "/mixs/mix2/MiyaGi & Andy Panda - Kosandra",
                genre: "mix",
                id: 64,
                playing: false,
              },
              {
                title: "Rolex",
                author: "Ayo & Teo",
                cover:
                  "https://cdns-images.dzcdn.net/images/cover/97d1455f019921bfc6ae28d93f0c3a6c/500x500.jpg",
                url: "/mixs/mix2/Rolex_320(PaglaSongs)",
                genre: "mix",
                id: 65,
                playing: false,
              },
              {
                title: "Город Под Подошвой",
                author: "Oxxxymiron",
                cover:
                  "https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/84/c4/e2/84c4e29d-6608-7b11-2b47-320f307a5615/5060450231565.jpg/600x600bf-60.jpg",
                url: "/mixs/mix2/Oxxxymiron - Город Под Подошвой",
                genre: "mix",
                id: 66,
                playing: false,
              },
              {
                title: "Rockstar",
                author: "Post Malone",
                cover:
                  "https://upload.wikimedia.org/wikipedia/en/1/1c/PostMaloneRockstar.jpg",
                url: "/mixs/mix2/Rockstar_320(PaglaSongs)",
                genre: "mix",
                id: 67,
                playing: false,
              },
              {
                title: "Переплетено",
                author: "Oxxxymiron",
                cover:
                  "https://i1.sndcdn.com/artworks-000246032699-m9xi74-t500x500.jpg",
                url: "/mixs/mix2/Oxxxymiron - Переплетено",
                genre: "mix",
                id: 68,
                playing: false,
              },
              {
                title: "Кайф Ты Поймала",
                author: "Konfuz",
                cover:
                  "https://cdns-images.dzcdn.net/images/cover/fdb42dd0e067ee90c2942e58b0b03507/500x500.jpg",
                url: "/mixs/mix2/Konfuz - Кайф Ты Поймала",
                genre: "mix",
                id: 69,
                playing: false,
              },
              {
                title: "Кукла Колдуна",
                author: "Король и Шут",
                cover:
                  "https://i1.sndcdn.com/artworks-7bkxB1Zdtf6myRsp-qW5KZw-t500x500.jpg",
                url: "/mixs/mix2/Король и Шут - Кукла Колдуна",
                genre: "mix",
                id: 70,
                playing: false,
              },
              {
                title: "Кто Убил Марка",
                author: "Oxxxymiron",
                cover:
                  "https://upload.wikimedia.org/wikipedia/ru/9/9c/%D0%9A%D1%82%D0%BE_%D1%83%D0%B1%D0%B8%D0%BB_%D0%9C%D0%B0%D1%80%D0%BA%D0%B0%3F.jpg",
                url: "/mixs/mix2/Oxxxymiron - Кто Убил Марка",
                genre: "mix",
                id: 71,
                playing: false,
              },
              {
                title: "Снова Я Напиваюсь",
                author: "Slava Marlow",
                cover:
                  "https://cdn.promodj.com/afs/d1031e27a722b04a98bd3a91fa40fdd812%3Aresize%3A2000x2000%3Asame%3A875f71",
                url: "/mixs/mix2/Slava Marlow - Снова Я Напиваюсь",
                genre: "mix",
                id: 72,
                playing: false,
              },
              {
                title: "Первое Свидание",
                author: "Алёна Швец",
                cover:
                  "https://i.scdn.co/image/ab67616d0000b273ff275380ee7d9da58e23f104",
                url: "/mixs/mix2/Elman - Антигерой",
                genre: "mix",
                id: 73,
                playing: false,
              },
              {
                title: "Ты Горишь Как Огонь",
                author: "Slava Marlow",
                cover: "https://i.ytimg.com/vi/oqls_8L9R28/maxresdefault.jpg",
                url: "/mixs/mix2/Slava Marlow - Ты Горишь Как Огонь",
                genre: "mix",
                id: 74,
                playing: false,
              },
            ],
          },
          {
            title: "Микс дня #2",
            author:
              "INFRACTION, Benz Truck, Swagg Milly, Gee Flaggz, Waveyblvd, CarterBeatz, Legend_47, _Archangeur, Kevin Katana",
            cover:
              "https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/50bc8165-1022-4164-ab1c-e8743b105c74/93.jpg",
            name: "mix-of-day-2",
            mixId: 3,
            songs: [
              {
                title: "BLESKSOUND",
                author: "Hip Hop Chill Vlogs",
                cover:
                  "https://usercontent.jamendo.com/?type=album&id=469142&width=300&trackid=1915739",
                url: "/mixs/mix3/BLESKSOUND_-_Hip_Hop_Chill_Vlogs",
                genre: "mix",
                id: 75,
                playing: false,
              },
              {
                title: "Bamboo",
                author: "INFRACTION",
                cover:
                  "https://usercontent.jamendo.com/?type=album&id=452073&width=300&trackid=1879269",
                url: "/mixs/mix3/Bamboo_-_Infraction",
                genre: "mix",
                id: 76,
                playing: false,
              },
              {
                title: "RALPH DA GOD",
                author: "Benz Truck ft. Swagg Milly",
                cover:
                  "https://usercontent.jamendo.com/?type=album&id=445630&width=300&trackid=1864205",
                url: "/mixs/mix3/Benz_Truck_ft._Swagg_Milly_-_Ralph_Da_God_(3)",
                genre: "mix",
                id: 77,
                playing: false,
              },
              {
                title: "CARBON CASCA",
                author: "Carbon Casca - Coming Up (Feat. Gee Flaggz)",
                cover:
                  "https://usercontent.jamendo.com/?type=album&id=447856&width=300&trackid=1869796",
                url: "/mixs/mix3/Carbon_Casca_-_Coming_Up_(Feat._Gee_Flaggz)_-_Carbon_Casca",
                genre: "mix",
                id: 78,
                playing: false,
              },
              {
                title: "CARTERBEATZ",
                author:
                  "CarterBeatz ft. Waveyblvd & Legend 47 - Private (REMIX)",
                cover:
                  "https://usercontent.jamendo.com/?type=album&id=460248&width=300&trackid=1896172",
                url: "/mixs/mix3/CarterBeatz_ft._Waveyblvd_&amp;_Legend_47_-_Private_(REMIX)_-_CarterBeatz",
                genre: "mix",
                id: 79,
                playing: false,
              },
              {
                title: "EDFISH",
                author: "Cerebro reptiliano(Prod.K.El Nigromante)",
                cover:
                  "https://usercontent.jamendo.com/?type=album&id=448087&width=300&trackid=1870140",
                url: "/mixs/mix3/Cerebro_reptiliano(Prod.K.El_Nigromante)_-_Edfish_(3)",
                genre: "mix",
                id: 80,
                playing: false,
              },
              {
                title: "GET IT",
                author: "ARCHANGEUR",
                cover:
                  "https://usercontent.jamendo.com/?type=album&id=477293&width=300&trackid=1932665",
                url: "/mixs/mix3/GET_IT_-_Archangeur",
                genre: "mix",
                id: 81,
                playing: false,
              },
              {
                title: "NOAH MUTEB",
                author: "Hero by Noah Muteb",
                cover:
                  "https://usercontent.jamendo.com/?type=album&id=460612&width=300&trackid=1897207",
                url: "/mixs/mix3/Hero_by_Noah_Muteb_-_Noah_Muteb_(3)",
                genre: "mix",
                id: 82,
                playing: false,
              },
              {
                title: "RALPH DA GOD",
                author: "How Can I Trust ft. Swagg Milly",
                cover:
                  "https://usercontent.jamendo.com/?type=album&id=445630&width=300&trackid=1864203",
                url: "/mixs/mix3/How_Can_I_Trust_ft._Swagg_Milly_-_Ralph_Da_God_(3)",
                genre: "mix",
                id: 83,
                playing: false,
              },
              {
                title: "LOWDOWN BRASS BAND",
                author: "LowDown Mini Reel #6 (No Ceiling)",
                cover:
                  "https://usercontent.jamendo.com/?type=album&id=355714&width=300&trackid=1848396",
                url: "/mixs/mix3/LowDown_Mini_Reel_#6_(No_Ceiling)_-_LowDown_Brass_Band_(2)",
                genre: "mix",
                id: 84,
                playing: false,
              },
              {
                title: "OSHEA IV",
                author: "PYRO Prod. By Kevin Katana",
                cover:
                  "https://usercontent.jamendo.com/?type=album&id=460152&width=300&trackid=1895932",
                url: "/mixs/mix3/PYRO_Prod._By_Kevin_Katana_-_OSHEA_IV",
                genre: "mix",
                id: 85,
                playing: false,
              },
              {
                title: "The Girl I Haven't Met",
                author: "DREAMHEAVEN",
                cover:
                  "https://usercontent.jamendo.com/?type=album&id=380078&width=300&trackid=1846870",
                url: "/mixs/mix3/The_Girl_I_Haven't_Met_-_DreamHeaven",
                genre: "mix",
                id: 86,
                playing: false,
              },
              {
                title: "Viktor",
                author: "Vlogs",
                cover:
                  "https://usercontent.jamendo.com/?type=album&id=461958&width=300&trackid=1900052",
                url: "/mixs/mix3/Vlogs_-_Viktor_SK",
                genre: "mix",
                id: 87,
                playing: false,
              },
              {
                title: "volshebniki",
                author: "KBKBTS.",
                cover:
                  "https://usercontent.jamendo.com/?type=album&id=468099&width=300&trackid=1913154",
                url: "/mixs/mix3/volshebniki_-_kbkbts.",
                genre: "mix",
                id: 88,
                playing: false,
              },
              {
                title: "Все вы кому там",
                author: "САНТЬЯГО",
                cover:
                  "https://usercontent.jamendo.com/?type=album&id=460129&width=300&trackid=1895899",
                url: "/mixs/mix3/Все_вы_кому_там_-__(2772)",
                genre: "mix",
                id: 89,
                playing: false,
              },
              {
                title:
                  "Los money - Pueto pa lo mio records presenta Neycom Ft Choque Dineral",
                author: "PUETO PA LO MIO RECORDS",
                cover:
                  "https://usercontent.jamendo.com/?type=album&id=470389&width=300&trackid=1916728",
                url: "/mixs/mix3/Los_money_-_Pueto_pa_lo_mio_records_presenta_Neycom_Ft_Choque_Dineral_-_puetopalomiocom",
                genre: "mix",
                id: 90,
                playing: false,
              },
              {
                title: "Lucid Dreams",
                author: "EL J",
                cover:
                  "https://usercontent.jamendo.com/?type=album&id=477977&width=300&trackid=1934397",
                url: "/mixs/mix3/Lucid_Dreams_(feat._Mpsta)_-_El_J",
                genre: "mix",
                id: 91,
                playing: false,
              },
              {
                title: "Fool in Love",
                author: "TOM ORLANDO",
                cover:
                  "https://usercontent.jamendo.com/?type=album&id=494157&width=300&trackid=1967938",
                url: "/mixs/mix3/Tom_Orlando_-_Fool_in_Love_(feat._Mary_Dee)_[Radio_Edit]",
                genre: "mix",
                id: 92,
                playing: false,
              },
              {
                title: "My Life",
                author: "BOULVARD X-AUDI",
                cover:
                  "https://usercontent.jamendo.com/?type=album&id=475937&width=300&trackid=1929478",
                url: "/mixs/mix3/My_Life_-_xTrain",
                genre: "mix",
                id: 93,
                playing: false,
              },
              {
                title: "Why You So Quiet?",
                author: "!MC'LAIN!",
                cover:
                  "https://usercontent.jamendo.com/?type=album&id=394553&width=300&trackid=1608034",
                url: "/mixs/mix3/Why_You_So_Quiet__-_Mc'Lain",
                genre: "mix",
                id: 94,
                playing: false,
              },
            ],
          },
          {
            title: "Микс дня #3",
            author:
              "Mango, RASA, Ramil, St1nk, XXXTENTACION, Travis Scott, 10AGE, Сателлит",
            cover:
              "https://creativereview.imgix.net/content/uploads/2022/09/oliver-sim-cover.jpg?auto=compress,format&q=60&w=500&h=500",
            name: "mix-of-day-3",
            mixId: 4,
            songs: [
              {
                title: "Моя Пленница",
                author: "LKN & Ramil",
                cover:
                  "https://is5-ssl.mzstatic.com/image/thumb/Music123/v4/b9/a0/a9/b9a0a95c-6308-d51d-c9b7-8caf7b5136ab/cover.jpg/400x400cc.jpg",
                url: "/mixs/mix4/LKN & Ramil' - Моя Пленница",
                genre: "mix",
                id: 95,
                playing: false,
              },
              {
                title: "Газ в Пол",
                author: "Mango",
                cover:
                  "https://cdns-images.dzcdn.net/images/cover/2a6c4cdcd0a48ef84584104903ac3800/264x264.jpg",
                url: "/mixs/mix4/Mango - Газ в Пол",
                genre: "mix",
                id: 96,
                playing: false,
              },
              {
                title: "Пчеловод",
                author: "RASA",
                cover:
                  "https://cdns-images.dzcdn.net/images/cover/94b1f7248c7ff88d4cb77fc02cd274d4/500x500.jpg",
                url: "/mixs/mix4/RASA - Пчеловод",
                genre: "mix",
                id: 97,
                playing: false,
              },
              {
                title: "Сияй",
                author: "Ramil",
                cover:
                  "https://i1.sndcdn.com/artworks-MORwpRNr4NPmyW6q-g48etQ-t500x500.jpg",
                url: "/mixs/mix4/Ramil' - Сияй",
                genre: "mix",
                id: 98,
                playing: false,
              },
              {
                title: "Инсомния",
                author: "St1nk",
                cover:
                  "https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/05/c2/eb/05c2ebe5-2093-0001-66da-f9d318adde4a/0110Stellar.jpg/600x600bf-60.jpg",
                url: "/mixs/mix4/St1nk - Инсомния",
                genre: "mix",
                id: 99,
                playing: false,
              },
              {
                title: "Сердце На Двоих",
                author: "Сателлит",
                cover:
                  "https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/ea/dc/fe/eadcfecb-cf92-4cd5-e49f-32288708a03c/cover.jpg/500x500bb.jpg",
                url: "/mixs/mix4/Сателлит - Сердце На Двоих",
                genre: "mix",
                id: 100,
                playing: false,
              },
              {
                title: "HOPE",
                author: "XXXTENTACION",
                cover:
                  "https://i1.sndcdn.com/artworks-000364991487-r9h0za-t500x500.jpg",
                url: "/mixs/mix4/Xxxtentacion - HOPE",
                genre: "mix",
                id: 101,
                playing: false,
              },
              {
                title: "Закружила",
                author: "Mango",
                cover:
                  "https://cdns-images.dzcdn.net/images/cover/5efd3c0aed867d987e9526e1fc0c099f/500x500.jpg",
                url: "/mixs/mix4/Mango - Закружила",
                genre: "mix",
                id: 102,
                playing: false,
              },
              {
                title: "Antidote",
                author: "Travis Scott",
                cover:
                  "https://i1.sndcdn.com/artworks-000329334765-w0w0gc-t500x500.jpg",
                url: "/mixs/mix4/Travi Scott - Antidote",
                genre: "mix",
                id: 103,
                playing: false,
              },
              {
                title: "Под фонарём",
                author: "RASA",
                cover:
                  "https://cdns-images.dzcdn.net/images/cover/3a24d0d88e811017ca52c8e884e2ce13/500x500.jpg",
                url: "/mixs/mix4/RASA - Под фонарём",
                genre: "mix",
                id: 104,
                playing: false,
              },
              {
                title: "Не Убежать",
                author: "St1nk",
                cover:
                  "https://sun9-49.userapi.com/impf/If5J8wrmCTsTx5YCLaUtaKvKND6xIneKwZpPfg/PQRaBS96U-k.jpg?size=300x0&quality=90&sign=43f5daa0702d050c86e5497b0a5d13c2",
                url: "/mixs/mix4/St1nk - Не Убежать",
                genre: "mix",
                id: 105,
                playing: false,
              },
              {
                title: "Hell of a Night",
                author: "Travis Scott",
                cover:
                  "https://i1.sndcdn.com/artworks-000048622882-92hn84-t500x500.jpg",
                url: "/mixs/mix4/Travi Scott - Hell of a Night",
                genre: "mix",
                id: 106,
                playing: false,
              },
              {
                title: "Ультрафиолет",
                author: "St1nk",
                cover:
                  "https://cdns-images.dzcdn.net/images/cover/34bf136e2d641f64274d159148ef40d2/264x264.jpg",
                url: "/mixs/mix4/St1nk - Ультрафиолет",
                genre: "mix",
                id: 107,
                playing: false,
              },
              {
                title: "Маяк",
                author: "Сателлит feat. Т.ГРОСС",
                cover:
                  "data:image/jpeg;base64,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",
                url: "/mixs/mix4/Сателлит feat. Т.ГРОСС - Маяк",
                genre: "mix",
                id: 108,
                playing: false,
              },
              {
                title: "Goosebumps",
                author: "Travis Scott",
                cover:
                  "https://i.scdn.co/image/ab67616d0000b273f54b99bf27cda88f4a7403ce",
                url: "/mixs/mix4/Travi Scott - Goosebumps (ft. Kendrick Lamar)",
                genre: "mix",
                id: 109,
                playing: false,
              },
              {
                title: "Скучаю",
                author: "Mango",
                cover:
                  "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/26/04/6d/26046dc1-b0d5-4648-b0f9-fb743babf7c1/cover.jpg/375x375bb.jpg",
                url: "/mixs/mix4/Mango - Скучаю",
                genre: "mix",
                id: 110,
                playing: false,
              },
              {
                title: "Look At Me",
                author: "XXXTENTACION",
                cover:
                  "https://i1.sndcdn.com/artworks-000364991487-r9h0za-t500x500.jpg",
                url: "/mixs/mix4/Xxxtentacion - look at me",
                genre: "mix",
                id: 111,
                playing: false,
              },
              {
                title: "Кошка",
                author: "RASA",
                cover:
                  "https://cdns-images.dzcdn.net/images/cover/132427d7f1bebb5ecc1e038a2b53e796/264x264.jpg",
                url: "/mixs/mix4/RASA - Кошка",
                genre: "mix",
                id: 112,
                playing: false,
              },
              {
                title: "До Луны",
                author: "Ramil' feat. 10AGE & LK",
                cover:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaQIhZS3yZB-G2ydswD10uUPATYyngUMdhWEEDsD3M-DFbjBYH3jE-hjoF87TY_yL0mLw&usqp=CAU",
                url: "/mixs/mix4/Ramil' feat. 10AGE & LKN - До Луны",
                genre: "mix",
                id: 113,
                playing: false,
              },
              {
                title: "Малый повзрослел",
                author: "Макс Корж",
                cover:
                  "https://is3-ssl.mzstatic.com/image/thumb/Music124/v4/bc/14/e2/bc14e2aa-1fba-b087-fa3d-f1520dd6df9a/cover.jpg/1200x1200bf-60.jpg",
                url: "/mixs/mix4/Макс Корж - Малый повзрослел",
                genre: "mix",
                id: 114,
                playing: false,
              },
            ],
          },
          {
            title: "Именно для тебя",
            author:
              "Mango, RASA, Ramil, St1nk, XXXTENTACION, Travis Scott, 10AGE, Сателлит",
            cover:
              "https://images-platform.99static.com/MfS9H7_pGGYYRYT1sxCVq33X1sg=/150x150:1350x1350/500x500/top/smart/99designs-contests-attachments/128/128456/attachment_128456291",
            name: "for-you",
            mixId: 5,
            songs: [
              {
                title: "Мой Калашников",
                author: "Face",
                cover:
                  "https://i1.sndcdn.com/artworks-zDYX2EfSHna9Dfc4-2agz4w-t500x500.jpg",
                url: "/mixs/mix5/Face - Мой Калашников",
                genre: "mix",
                id: 115,
                playing: false,
              },
              {
                title: "Juicy",
                author: "INSTASAMKA",
                cover:
                  "https://cdns-images.dzcdn.net/images/cover/27434d04a25edf9fc8134436af52a407/500x500.jpg",
                url: "/mixs/mix5/INSTASAMKA - Juicy",
                genre: "mix",
                id: 116,
                playing: false,
              },
              {
                title: "Порнозвезда",
                author: "PHARAON",
                cover:
                  "https://cdns-images.dzcdn.net/images/cover/becd8d65ad45553214c445ae696c6e6b/500x500.jpg",
                url: "/mixs/mix5/ЛСП - Порнозвезда  (ft. Pharaon)",
                genre: "mix",
                id: 117,
                playing: false,
              },
              {
                title: "Спасательный круг",
                author: "Face",
                cover:
                  "https://is2-ssl.mzstatic.com/image/thumb/Music123/v4/4e/03/cf/4e03cfee-f144-f32b-b312-3f663543438f/cover.jpg/1200x1200bf-60.jpg",
                url: "/mixs/mix5/Face - Спасательный круг",
                genre: "mix",
                id: 118,
                playing: false,
              },
              {
                title: "Praise God",
                author: "Kanye West",
                cover:
                  "https://i1.sndcdn.com/artworks-GFAoWoyAcAhtMvBz-kYlzxQ-t500x500.jpg",
                url: "/mixs/mix5/Kanye West - Praise God",
                genre: "mix",
                id: 119,
                playing: false,
              },
              {
                title: "Wide Awake",
                author: "Katty Perry",
                cover:
                  "https://upload.wikimedia.org/wikipedia/id/4/4f/Katy_Perry_Wide_Awake_Single_Cover.png",
                url: "/mixs/mix5/Katty Perry - Wide Awake",
                genre: "mix",
                id: 120,
                playing: false,
              },
              {
                title: "Bloody Party",
                author: "INSTASAMKA",
                cover:
                  "https://i1.sndcdn.com/artworks-B7Hm1YKzK1y8xG5v-sM5xLw-t500x500.jpg",
                url: "/mixs/mix5/INSTASAMKA - Bloody Party",
                genre: "mix",
                id: 121,
                playing: false,
              },
              {
                title: "30 Hours",
                author: "Kanye West",
                cover: "http://i.imgur.com/P9DC6bb.jpg",
                url: "/mixs/mix5/Kanye West - 30 Hours",
                genre: "mix",
                id: 122,
                playing: false,
              },
              {
                title: "Hellboy",
                author: "LiL Peep",
                cover:
                  "https://upload.wikimedia.org/wikipedia/commons/9/9e/LilPeep-Hellboy_%28cropped%29.jpg",
                url: "/mixs/mix5/LiL Peep - Hellboy",
                genre: "mix",
                id: 123,
                playing: false,
              },
              {
                title: "Я всегда на суете",
                author: "PHARAON",
                cover:
                  "https://pp.userapi.com/c845323/v845323203/1c14ad/OZsPeZtjRCU.jpg",
                url: "/mixs/mix5/PHARAON - Я всегда на суете",
                genre: "mix",
                id: 124,
                playing: false,
              },
              {
                title: "Roar",
                author: "Katty Perry",
                cover:
                  "https://i1.sndcdn.com/artworks-000064580393-14t7qm-t500x500.jpg",
                url: "/mixs/mix5/Katty Perry - Roar",
                genre: "mix",
                id: 125,
                playing: false,
              },
              {
                title: "Юморист",
                author: "Face",
                cover:
                  "https://lastfm.freetls.fastly.net/i/u/770x0/fde3a71d770312d9f67737ca67d625b7.jpg",
                url: "/mixs/mix5/Face - Юморист (Original Motion Picture Soundtrack)",
                genre: "mix",
                id: 126,
                playing: false,
              },
              {
                title: "Boss Ass Bitch",
                author: "Nicki Minaj",
                cover:
                  "https://lastfm.freetls.fastly.net/i/u/770x0/c391f27fb52c482dc8d01867de40c5b1.jpg",
                url: "/mixs/mix5/Nicki Minaj - Boss Ass Bitch",
                genre: "mix",
                id: 127,
                playing: false,
              },
              {
                title: "White Wine",
                author: "LiL Peep",
                cover:
                  "https://is2-ssl.mzstatic.com/image/thumb/Music124/v4/7d/b3/3d/7db33d35-0e32-052b-af52-331a8a154d2f/5054526393950_1.jpg/1200x1200bf-60.jpg",
                url: "/mixs/mix5/LiL Peep - White Wine (ft. Lil Tracy)",
                genre: "mix",
                id: 128,
                playing: false,
              },
              {
                title: "Anaconda",
                author: "Nicki Minaj",
                cover:
                  "https://upload.wikimedia.org/wikipedia/en/2/20/Nicki_Minaj_Anaconda.png",
                url: "/mixs/mix5/Nicki Minaj - Anaconda",
                genre: "mix",
                id: 129,
                playing: false,
              },
              {
                title: "Не По Пути",
                author: "PHARAON",
                cover:
                  "https://is4-ssl.mzstatic.com/image/thumb/Music128/v4/c1/05/5d/c1055d4d-3874-937b-2985-8a46559fc9ad/cover.jpg/1200x1200bf-60.jpg",
                url: "/mixs/mix5/PHARAON - не по пути",
                genre: "mix",
                id: 130,
                playing: false,
              },
              {
                title: "Star Shopping",
                author: "LiL Peep",
                cover:
                  "https://lastfm.freetls.fastly.net/i/u/ar0/262f8b7d976e084cec735dc2f5259811.jpg",
                url: "/mixs/mix5/LiL Peep - Star Shopping",
                genre: "mix",
                id: 131,
                playing: false,
              },
              {
                title: "Stronger",
                author: "Kanye West",
                cover:
                  "https://upload.wikimedia.org/wikipedia/en/d/d7/KW-Stronger.jpg",
                url: "/mixs/mix5/Kanye West - Stronger",
                genre: "mix",
                id: 132,
                playing: false,
              },
              {
                title: "Superbass",
                author: "Nicki Minaj",
                cover:
                  "https://upload.wikimedia.org/wikipedia/en/e/e3/Superbass_single_cover.png",
                url: "/mixs/mix5/Nicki Minaj - Superbass",
                genre: "mix",
                id: 133,
                playing: false,
              },
              {
                title: "Firework",
                author: "Katty Perry",
                cover:
                  "https://upload.wikimedia.org/wikipedia/en/6/60/Firework_cover.png",
                url: "/mixs/mix5/Katty Perry - Firework",
                genre: "mix",
                id: 134,
                playing: false,
              },
            ],
          },
          {
            title: "Микс поп-музыки",
            author:
              "6IX9INE, Billie Eilish, Пошлая Молли, The Weeknd, Feduk, LIZARD, Twenty One Pistols, Imagine Dragons",
            cover:
              "https://live.staticflickr.com/6222/6883727628_5fe4f1470d_c.jpg",
            name: "mix-of-day-4",
            mixId: 6,
            songs: [
              {
                title: "BILLY",
                author: "6IX9INE",
                cover:
                  "https://i.scdn.co/image/ab67616d0000b27314d3a2a7a92b85a06c93e544",
                url: "/mixs/mix6/6ix9ine - Billy",
                genre: "mix",
                id: 135,
                playing: false,
              },
              {
                title: "Billie Bossa Nova",
                author: "Billie Eilish ",
                cover:
                  "https://i.scdn.co/image/ab67616d0000b2732a038d3bf875d23e4aeaa84e",
                url: "/mixs/mix6/Billie Eilish - Billie Bossa Nova",
                genre: "mix",
                id: 136,
                playing: false,
              },
              {
                title: "Нон Стоп",
                author: "Пошлая Молли",
                cover:
                  "https://cdns-images.dzcdn.net/images/cover/398d1e64dba83ecc62a676d4fb8b35ff/350x350.jpg",
                url: "/mixs/mix6/Пошлая Молли - Нон Стоп (Рефлекс rmx)",
                genre: "mix",
                id: 137,
                playing: false,
              },
              {
                title: "Blinding Lights",
                author: " The Weeknd",
                cover:
                  "https://miro.medium.com/max/1200/1*hakRYnOITyX8fKtlD_eAcQ.jpeg",
                url: "/mixs/mix6/Weeknd - Blinding Lights",
                genre: "mix",
                id: 138,
                playing: false,
              },
              {
                title: "Пойдем гулять",
                author: "Lizer",
                cover:
                  "https://cdns-images.dzcdn.net/images/cover/884fba558880599a2c567a04cda7e8d9/350x350.jpg",
                url: "/mixs/mix6/Lizer - Пойдем гулять",
                genre: "mix",
                id: 139,
                playing: false,
              },
              {
                title: "Heathens",
                author: "Twenty One Pistols",
                cover:
                  "https://cdns-images.dzcdn.net/images/cover/3dfc8c9e406cf1bba8ce0695a44a9b7e/500x500.jpg",
                url: "/mixs/mix6/Twenty One Pistols - Heathens (OST Suicide Squad)",
                genre: "mix",
                id: 140,
                playing: false,
              },
              {
                title: "Bones",
                author: "Imagine Dragons",
                cover:
                  "https://i1.sndcdn.com/artworks-AxXbcRzIQgJDYLF2-mWHdzg-t500x500.jpg",
                url: "/mixs/mix6/Imagine Dragons - Bones",
                genre: "mix",
                id: 141,
                playing: false,
              },
              {
                title: "Не Ангел",
                author: "Lizer",
                cover:
                  "https://i.scdn.co/image/ab67616d0000b2733e7874d0a99fe4be799a9d72",
                url: "/mixs/mix6/Lizer - Не Ангел",
                genre: "mix",
                id: 142,
                playing: false,
              },
              {
                title: "GOOBA",
                author: "6IX9INE",
                cover:
                  "https://c.saavncdn.com/024/GOOBA-English-2020-20200512222317-500x500.jpg",
                url: "/mixs/mix6/6ix9ine - Gooba",
                genre: "mix",
                id: 143,
                playing: false,
              },
              {
                title: "All The Good Girls Go To Hell",
                author: "Billie Eilish",
                cover:
                  "https://upload.wikimedia.org/wikipedia/en/5/58/Billie_Eilish_-_All_the_Good_Girls_Go_to_Hell.png",
                url: "/mixs/mix6/Billie Eilish - all the good girls go to hell",
                genre: "mix",
                id: 144,
                playing: false,
              },
              {
                title: "Tears In The Club",
                author: "The Weeknd",
                cover:
                  "https://upload.wikimedia.org/wikipedia/en/f/ff/FKA_Twigs_-_Tears_in_the_Club.png",
                url: "/mixs/mix6/FKA twigs feat. The Weeknd - Tears In The Club (feat. The Weeknd)",
                genre: "mix",
                id: 145,
                playing: false,
              },
              {
                title: "Enemy",
                author: "Imagine Dragons",
                cover:
                  "https://upload.wikimedia.org/wikipedia/en/5/5c/Enemy_Imagine_Dragons.jpg",
                url: "/mixs/mix6/Imagine Dragons - Enemy (Feat. JID)",
                genre: "mix",
                id: 146,
                playing: false,
              },
              {
                title: "Set the fire into the rain",
                author: "Adele",
                cover:
                  "https://upload.wikimedia.org/wikipedia/ru/7/74/Set_Fire_to_the_Rain_%28Adele_Single_Cover%29.jpg",
                url: "/mixs/mix6/Adele - Set the fire into the rain (original) (1)",
                genre: "mix",
                id: 147,
                playing: false,
              },
              {
                title: "Пачка сигарет",
                author: "Lizer",
                cover:
                  "https://e.snmc.io/i/600/s/aa6de5dff0ff5a0b4a7e36e0de0d9247/6891487/lizer-my-soul-cover-art.png",
                url: "/mixs/mix6/Lizer - Пачка сигарет",
                genre: "mix",
                id: 148,
                playing: false,
              },
              {
                title: "Bury A Friend",
                author: "Billie Eilish",
                cover:
                  "https://i1.sndcdn.com/artworks-000510945771-p4xnkn-t500x500.jpg",
                url: "/mixs/mix6/Billie Eilish - bury a friend",
                genre: "mix",
                id: 149,
                playing: false,
              },
              {
                title: "Out Of Time",
                author: "The Weeknd",
                cover:
                  "https://upload.wikimedia.org/wikipedia/en/9/9b/R.E.M._-_Out_of_Time.jpg",
                url: "/mixs/mix6/Weeknd - Out Of Time",
                genre: "mix",
                id: 150,
                playing: false,
              },
              {
                title: "Последний День Лета",
                author: "Feduk",
                cover:
                  "https://is2-ssl.mzstatic.com/image/thumb/Music124/v4/23/0b/80/230b8047-807e-e5a4-dd9d-46131f05faee/cover.jpg/1200x1200bb.jpg",
                url: "/mixs/mix6/Feduk - Последний День Лета (ft. Лия)",
                genre: "mix",
                id: 151,
                playing: false,
              },
              {
                title: "Контракт",
                author: "Пошлая Молли",
                cover:
                  "https://cdns-images.dzcdn.net/images/cover/f022f116ac893be5ac45415887dda30b/500x500.jpg",
                url: "/mixs/mix6/ПОШЛАЯ МОЛЛИ - Контракт",
                genre: "mix",
                id: 152,
                playing: false,
              },
              {
                title: "Stressed out",
                author: "Twenty One Pistols",
                cover:
                  "https://upload.wikimedia.org/wikipedia/ru/9/98/Twenty_one_pilots_stressed_out_cover.jpg",
                url: "/mixs/mix6/Twenty One Pistols - Stressed out",
                genre: "mix",
                id: 153,
                playing: false,
              },
              {
                title: "Моряк",
                author: "Feduk",
                cover:
                  "https://forum-static.fra1.cdn.digitaloceanspaces.com/images/7e314d6d-f2c6-48a5-9a71-008c5bcfe24f/blog/1519759849-feduk-moryak.jpg",
                url: "/mixs/mix6/Feduk - Моряк",
                genre: "mix",
                id: 154,
                playing: false,
              },
            ],
          },
          {
            title: "Меланхоличный",
            author:
              "6IX9INE, Billie Eilish, Пошлая Молли, The Weeknd, Feduk, LIZARD, Twenty One Pistols, Imagine Dragons",
            cover: "https://i.mdel.net/i/db/2019/12/1254988/1254988-800w.jpg",
            name: "melancholic",
            mixId: 7,
            songs: [
              {
                title: " Let Me Down Slowly",
                author: "Alec Benjamin",
                cover:
                  "https://cdns-images.dzcdn.net/images/cover/1a2ff1ad7241739d524583d6f775c379/500x500.jpg",
                url: "/mixs/mix7/Alec Benjamin - Let Me Down Slowly",
                genre: "mix",
                id: 155,
                playing: false,
              },
              {
                title: "Runaway",
                author: "Aurora",
                cover:
                  "https://i1.sndcdn.com/artworks-slmY38Kbt6vMWUbC-rPBeTA-t500x500.jpg",
                url: "/mixs/mix7/Aurora - Runaway",
                genre: "mix",
                id: 156,
                playing: false,
              },
              {
                title: "Beach House",
                author: "Space Song",
                cover:
                  "https://cdns-images.dzcdn.net/images/cover/399cffa2434760d22746a10a44c80bc2/350x350.jpg",
                url: "/mixs/mix7/Beach_House_-_Space_Song",
                genre: "mix",
                id: 157,
                playing: false,
              },
              {
                title: "Wings",
                author: "Birdy",
                cover:
                  "https://i1.sndcdn.com/artworks-000056568308-2qgvs4-t500x500.jpg",
                url: "/mixs/mix7/Birdy - Wings (Nu Logic Remix)",
                genre: "mix",
                id: 158,
                playing: false,
              },
              {
                title: "IDFC",
                author: "Blackbear",
                cover:
                  "https://i1.sndcdn.com/artworks-m4ytLJHzTiZycvD9-GygboQ-t500x500.jpg",
                url: "/mixs/mix7/Blackbear - Idfc (Tarro Remix)",
                genre: "mix",
                id: 159,
                playing: false,
              },
              {
                title: "Sia",
                author: "Chandelier",
                cover:
                  "https://upload.wikimedia.org/wikipedia/ru/c/c8/Chandelier_by_Sia_coverwork.jpg",
                url: "/mixs/mix7/Chandelier - Sia",
                genre: "mix",
                id: 160,
                playing: false,
              },
              {
                title: "ApocalypseC",
                author: "Cigarettes After Sex",
                cover:
                  "https://i1.sndcdn.com/artworks-3kTNTXn1UonZGvo6-9WQ7EQ-t500x500.jpg",
                url: "/mixs/mix7/Cigarettes_After_Sex_-_Apocalypse_(musmore.com)",
                genre: "mix",
                id: 161,
                playing: false,
              },
              {
                title: "Middle Of The Night",
                author: "Elley Duhe",
                cover:
                  "https://i1.sndcdn.com/artworks-BKR1hv0b96ET-0-t500x500.jpg",
                url: "/mixs/mix7/Elley Duhe - MIDDLE OF THE NIGHT",
                genre: "mix",
                id: 162,
                playing: false,
              },
              {
                title: "Jealous",
                author: "Labrinth",
                cover:
                  "https://cdns-images.dzcdn.net/images/cover/0c6b3af7f03fea43549c39ac0e957b5e/500x500.jpg",
                url: "/mixs/mix7/Labrinth_-_Jealous_(Jesusful.com)",
                genre: "mix",
                id: 163,
                playing: false,
              },
              {
                title: "Nothing Breaks Like a Heart",
                author: "Mark Ronson",
                cover:
                  "https://i.scdn.co/image/ab67616d0000b273ad79d30f49891b2a2f7757f8",
                url: "/mixs/mix7/Mark-Ronson-feat-Miley-Cyrus_-_Nothing-Breaks-Like-a-Heart_sonq.ru",
                genre: "mix",
                id: 164,
                playing: false,
              },
              {
                title: "Are You With Me",
                author: "Nilu",
                cover:
                  "https://i.scdn.co/image/ab67616d0000b273e9bf0e1c6f27d95f7730b9d9",
                url: "/mixs/mix7/Nilu - Are You With Me",
                genre: "mix",
                id: 165,
                playing: false,
              },
              {
                title: "Je Te Laisserai Des Mot",
                author: "Patrick Watson",
                cover:
                  "https://cdns-images.dzcdn.net/images/cover/1af2ff9c749201f12273ee81c7c1d5c5/500x500.jpg",
                url: "/mixs/mix7/Patrick_Watson_-_Je_te_laisserai_des_mots_(musmore.com)",
                genre: "mix",
                id: 166,
                playing: false,
              },
              {
                title: "Elastic Heart",
                author: "The Weeknd",
                cover:
                  "https://i1.sndcdn.com/artworks-000115274361-e0pb5n-t500x500.jpg",
                url: "/mixs/mix7/Sia feat. The Weeknd & Diplo - Elastic Heart",
                genre: "mix",
                id: 167,
                playing: false,
              },
              {
                title: "Freaks",
                author: "Surf Curse",
                cover:
                  "https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/Freaks_Surf_Curse.jpg/220px-Freaks_Surf_Curse.jpg",
                url: "/mixs/mix7/Surf Curse - Freaks",
                genre: "mix",
                id: 168,
                playing: false,
              },
              {
                title: "Sweater Weather",
                author: "The Neighbourhood",
                cover:
                  "https://i1.sndcdn.com/artworks-3AunzuuSdv4ErCC1-oE7meg-t500x500.jpg",
                url: "/mixs/mix7/The Neighbourhood - Sweater Weather",
                genre: "mix",
                id: 169,
                playing: false,
              },
              {
                title: "The Wisp Sings",
                author: "Winter Aid",
                cover:
                  "https://i1.sndcdn.com/artworks-000062366136-zpo14e-t500x500.jpg",
                url: "/mixs/mix7/Winter_Aid_-_The_Wisp_Sings_(musmore.com)",
                genre: "mix",
                id: 170,
                playing: false,
              },
              {
                title: "Broken Parts",
                author: "Clide",
                cover:
                  "https://i.scdn.co/image/ab67616d0000b27393b08bffd5126970b5aade36",
                url: "/mixs/mix7/clide - broken parts",
                genre: "mix",
                id: 171,
                playing: false,
              },
              {
                title: "In My Room Speed",
                author: "Chance Pena",
                cover:
                  "https://i1.sndcdn.com/artworks-nsWKD0ZURH8ZXOKn-0DgqcA-t500x500.jpg",
                url: "/mixs/mix7/in-my-room-speed-up-chance-pe241a_456242706",
                genre: "mix",
                id: 172,
                playing: false,
              },
              {
                title: "The Night We Met",
                author: "Lord Huron",
                cover:
                  "https://i.scdn.co/image/ab67616d0000b273e5d72e7141406c974ff5f8f7",
                url: "/mixs/mix7/lord huron - the night we met",
                genre: "mix",
                id: 173,
                playing: false,
              },
              {
                title: "I Love You So",
                author: "The Walters",
                cover:
                  "https://i1.sndcdn.com/artworks-000098822307-nwhex2-t500x500.jpg",
                url: "/mixs/mix7/the-walters-i-love-you-so_98472069",
                genre: "mix",
                id: 174,
                playing: false,
              },
            ],
          },
          {
            title: "Послушая сегодня",
            author:
              "6IX9INE, Billie Eilish, Пошлая Молли, The Weeknd, Feduk, LIZARD, Twenty One Pistols, Imagine Dragons",
            cover:
              "https://townsquare.media/site/812/files/2022/11/attachment-Girl-Drake-21-Savage-Her-Loss-album-cover-edit.jpg?w=980&q=75",
            name: "listen-today",
            mixId: 6,
            songs: [
              {
                title: "Ivoxygen",
                author: "Young Kid",
                cover:
                  "https://cdns-images.dzcdn.net/images/cover/31fd5c58b4180c719468be9f7eecafce/264x264.jpg",
                url: "/mixs/mix8/ivoxygen_-_young_kid_muzati.net",
                genre: "mix",
                id: 175,
                playing: false,
              },
              {
                title: "А помнишь вечер",
                author: "Cvetocek7",
                cover:
                  "https://cdns-images.dzcdn.net/images/cover/f35692d3866b37ac1e1efbfa38b783ff/264x264.jpg",
                url: "/mixs/mix8/Cvetocek7 - А помнишь вечер (Slowed Down Remix)",
                genre: "mix",
                id: 176,
                playing: false,
              },
              {
                title: "Мираж",
                author: "Dead Blonde",
                cover:
                  "https://cdns-images.dzcdn.net/images/cover/56632edc27c6a083a50135b728caad40/500x500.jpg",
                url: "/mixs/mix8/Dead Blonde - Мираж",
                genre: "mix",
                id: 177,
                playing: false,
              },
              {
                title: "Улети",
                author: "T-Fest",
                cover:
                  "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/31/34/4c/31344ce0-2366-4292-350d-1bcdd2b9e619/cover.jpg/1200x1200bf-60.jpg",
                url: "/mixs/mix8/T-Fest - Улети",
                genre: "mix",
                id: 178,
                playing: false,
              },
              {
                title: "Disaster",
                author: "MRNR1",
                cover:
                  "https://i.scdn.co/image/ab67616d00001e027e2ef88f33d358a1254a677a",
                url: "/mixs/mix8/MRNR1 - Disaster",
                genre: "mix",
                id: 179,
                playing: false,
              },
              {
                title: "Captain",
                author: "Nutcase 22",
                cover:
                  "https://cdns-images.dzcdn.net/images/cover/14b55fc85d4a96e5ca0d20d6e5c12e02/264x264.jpg",
                url: "/mixs/mix8/Nutcase 22 - Captain",
                genre: "mix",
                id: 180,
                playing: false,
              },
              {
                title: "Посмотри",
                author: "ReverBeat",
                cover:
                  "https://sun9-61.userapi.com/impg/p0BwA5LJDnxgSM9T-A8sSVlJs-JMXXdLLRpr9g/aNwMV_rhApc.jpg?size=604x604&quality=96&sign=3fd36e3f39f451ccc87f36cd476660ff&type=album",
                url: "/mixs/mix8/ReverBeat - Посмотри",
                genre: "mix",
                id: 181,
                playing: false,
              },
              {
                title: "Фото",
                author: "Шаузи",
                cover:
                  "https://m.media-amazon.com/images/I/A1Kj+PUYQSL._SS500_.jpg",
                url: "/mixs/mix8/Шаузи - Фото",
                genre: "mix",
                id: 182,
                playing: false,
              },
              {
                title: "Night Before Christma",
                author: "Sam Smith",
                cover:
                  "https://i2-prod.manchestereveningnews.co.uk/incoming/article25319944.ece/ALTERNATES/s1200c/0_FflOb-LWAAM_CnK.jpg",
                url: "/mixs/mix8/Sam Smith - Night Before Christmas",
                genre: "mix",
                id: 183,
                playing: false,
              },
              {
                title: "Лепесток",
                author: "Парнишка, Стереополина",
                cover:
                  "https://sun9-55.userapi.com/impg/0d1C7tj6J9tE-1RAR3pqh4DfucLuCnToEu6sAg/8Ps9Hhl9i7k.jpg?size=604x604&quality=95&sign=1db9da6ac41c89a3e9bbf06b82a5e620&type=album",
                url: "/mixs/mix8/Парнишка, Стереополина - Лепесток",
                genre: "mix",
                id: 184,
                playing: false,
              },
              {
                title: "Метель",
                author: "Леона Молотова",
                cover:
                  "http://sun9-81.userapi.com/impf/ywnRLEgtVFlzC2GGghu71gQo1SVJdNcLg2Hc5A/3HizLKdKhlA.jpg?size=604x437&quality=96&sign=a468131006640063618c0179d9769b1c&type=album",
                url: "/mixs/mix8/Леона Молотова - Метель (feat. Stories Band)",
                genre: "mix",
                id: 185,
                playing: false,
              },
              {
                title: "Одно я знал",
                author: "T-Fest",
                cover:
                  "https://cdns-images.dzcdn.net/images/cover/61f5be84dd1fe504a9a17b07e504fb69/500x500.jpg",
                url: "/mixs/mix8/T-Fest - Одно я знал",
                genre: "mix",
                id: 186,
                playing: false,
              },
              {
                title: "Время",
                author: "Леона Молотова",
                cover:
                  "https://sun9-41.userapi.com/impg/FyUk5yAXE0PhM0Vs1gNWm0fVOzSOAlZxcmiPAA/BD0vkno4rRU.jpg?size=604x604&quality=95&sign=1ecc5d17a1bd63f2c266353152266627&type=album",
                url: "/mixs/mix8/Леона Молотова - Время (feat. Stories Band)",
                genre: "mix",
                id: 187,
                playing: false,
              },
              {
                title: "Летаю",
                author: "nkeeei, Tenderlybae",
                cover:
                  "https://sun9-82.userapi.com/impg/DZbEqR2PQl47TLpchrubUT54MxtN8AFz6qJYNg/vCJeBbSuzK4.jpg?size=604x604&quality=95&sign=6d200e88b78ed335507b768976c61c3a&type=album",
                url: "/mixs/mix8/nkeeei, Tenderlybae - Летаю",
                genre: "mix",
                id: 188,
                playing: false,
              },
              {
                title: "Ламбада",
                author: "T-Fest",
                cover:
                  "https://is4-ssl.mzstatic.com/image/thumb/Music114/v4/60/42/e0/6042e0bb-dc59-ce1f-f073-c29079d195cb/cover.jpg/600x600bf-60.jpg",
                url: "/mixs/mix8/T-Fest - Ламбада (ft. Скриптонит)",
                genre: "mix",
                id: 189,
                playing: false,
              },
              {
                title: "Someday",
                author: "Леона Молотова",
                cover:
                  "data:image/jpeg;base64,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",
                url: "/mixs/mix8/Леона Молотова - Someday (feat. Stories Band)",
                genre: "mix",
                id: 190,
                playing: false,
              },
              {
                title: "Катана",
                author: "Simple",
                cover:
                  "https://wallpapercrafter.com/th800/112127-video-games-women-Nier-Automata-2B-cleavage-mask-katana-2B-Nier-Automata-simple-background-digital-art-NieR.jpg",
                url: "/mixs/mix8/Simple - Катана",
                genre: "mix",
                id: 191,
                playing: false,
              },
              {
                title: "Baby",
                author: "Sweet Dukalis Love",
                cover:
                  "https://sun9-32.userapi.com/impg/0Mv6XppAGDCTNlEb7Ue65GCNpXd7PwL7HskC9A/HlmUMtjkdQs.jpg?size=604x604&quality=95&sign=b84eff0658cd432d1430c97837b6b760&type=album",
                url: "/mixs/mix8/Sweet Dukalis Love - Baby",
                genre: "mix",
                id: 192,
                playing: false,
              },
              {
                title: "Полярная звезда",
                author: "MOSOVICH",
                cover:
                  "https://is3-ssl.mzstatic.com/image/thumb/Music112/v4/26/a1/78/26a178ae-6c01-fe84-6b33-3cd5038a1e26/0.jpg/400x400cc.jpg",
                url: "/mixs/mix8/MOSOVICH - Полярная звезда (feat. Batrai)",
                genre: "mix",
                id: 193,
                playing: false,
              },
              {
                title: "Лепесток",
                author: "Парнишка, Стереополина",
                cover:
                  "data:image/jpeg;base64,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",
                url: "/mixs/mix8/Парнишка, Стереополина - Лепесток",
                genre: "mix",
                id: 194,
                playing: false,
              },
            ],
          },
        ],
      },
      {
        tracks: [],
        type: "genres",
        genres: [
          {
            genre: "Поп",
            title: "Поп",
            songs: [
              {
                subtitle: "Новинки поп-музыки",
                subsongs: [
                  {
                    title: "Alone",
                    author: "COLOR OUT",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=455221&width=300&trackid=1886257",
                    url: "/genres/pop/Alone_-_Color_Out",
                    genre: "pop",
                    id: 195,
                    playing: false,
                  },
                  {
                    title: "Molotov Heart",
                    author: "RADIO NOWHERE",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=452261&width=300&trackid=1879171",
                    url: "/genres/pop/Molotov_Heart_-_radionowhere",
                    genre: "pop",
                    id: 196,
                    playing: false,
                  },
                  {
                    title: "No Rest Or Endless Rest",
                    author: "LISOFV",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=453562&width=300&trackid=1882761",
                    url: "/genres/pop/No_Rest_Or_Endless_Rest_-_Lisofv",
                    genre: "pop",
                    id: 197,
                    playing: false,
                  },
                  {
                    title: "Old Money",
                    author: "TAB",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=452579&width=300&trackid=1880064",
                    url: "/genres/pop/Old_Money_(feat._Jade_Gritty_&amp;_AURC)_-_Tab_(2)",
                    genre: "pop",
                    id: 198,
                    playing: false,
                  },
                  {
                    title: "The Deep",
                    author: "ANITEK",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=454439&width=300&trackid=1884527",
                    url: "/genres/pop/The_Deep_-_Anitek",
                    genre: "pop",
                    id: 199,
                    playing: false,
                  },
                  {
                    title: "Confession_",
                    author: "QUASABE",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=448067&width=300&trackid=1870094",
                    url: "/genres/pop/Confession_-_Quesabe",
                    genre: "pop",
                    id: 200,
                    playing: false,
                  },
                  {
                    title: "Work N' Play",
                    author: "SAMIE BOWER",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=447171&width=300&trackid=1863814",
                    url: "/genres/pop/Work_N'_Play_-_samiebower_(2)",
                    genre: "pop",
                    id: 201,
                    playing: false,
                  },
                  {
                    title: "Lo Fi Chill Hop",
                    author: "LART",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=447552&width=300&trackid=1869045",
                    url: "/genres/pop/Lo_Fi_Chill_Hop_-_Lart",
                    genre: "pop",
                    id: 202,
                    playing: false,
                  },
                ],
              },
              {
                subtitle: "Вся поп-музыка",
                subsongs: [
                  {
                    title: "B U R N",
                    author: "BESSONN&SA",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=326129&width=300&trackid=1860716",
                    url: "/genres/pop/B_U_R_N_-_bessonnitsa",
                    genre: "pop",
                    id: 203,
                    playing: false,
                  },
                  {
                    title: "MUAKI",
                    author: "LESSKY",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=315701&width=300&trackid=1840801",
                    url: "/genres/pop/MUAKI_-_Lessky",
                    genre: "pop",
                    id: 204,
                    playing: false,
                  },
                  {
                    title: "Chocolate",
                    author: "ALFONSO LUGO",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=253357&width=300&trackid=1823379",
                    url: "/genres/pop/Chocolate_-_Alfonso_Lugo",
                    genre: "pop",
                    id: 205,
                    playing: false,
                  },
                  {
                    title: "Blood",
                    author: "ALL MY FRIENDS HATE ME",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=261326&width=300&trackid=1765024",
                    url: "/genres/pop/Blood_-_All_My_Friends_Hate_Me",
                    genre: "pop",
                    id: 206,
                    playing: false,
                  },
                  {
                    title: "Tiptoe",
                    author: "RIVERS AND LEAVES",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=262021&width=300&trackid=1845306",
                    url: "/genres/pop/Tiptoe_-_Rivers_and_Leafs_(2)",
                    genre: "pop",
                    id: 207,
                    playing: false,
                  },
                  {
                    title: "In My Mind",
                    author: "LAMINAR",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=448427&width=300&trackid=1871070",
                    url: "/genres/pop/In_My_Mind_-_Laminar",
                    genre: "pop",
                    id: 208,
                    playing: false,
                  },
                  {
                    title: "Lover",
                    author: "SQUARE A SAW",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=345413&width=300&trackid=1831809",
                    url: "/genres/pop/Lover_-_Square_a_Saw",
                    genre: "pop",
                    id: 209,
                    playing: false,
                  },
                  {
                    title: "A Moment in Time",
                    author: "GRAHAM COE",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=280815&width=300&trackid=1861493",
                    url: "/genres/pop/A_Moment_in_Time_-_Graham_Coe",
                    genre: "pop",
                    id: 210,
                    playing: false,
                  },
                ],
              },
            ],
          },
          {
            genre: "Хип-хоп",
            title: "Хип-хоп",
            songs: [
              {
                subtitle: "Новинки поп-музыки",
                subsongs: [
                  {
                    title: "Alone",
                    author: "COLOR OUT",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=455221&width=300&trackid=1886257",
                    url: "/genres/pop/Alone_-_Color_Out",
                    genre: "pop",
                    id: 195,
                    playing: false,
                  },
                  {
                    title: "Molotov Heart",
                    author: "RADIO NOWHERE",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=452261&width=300&trackid=1879171",
                    url: "/genres/pop/Molotov_Heart_-_radionowhere",
                    genre: "pop",
                    id: 196,
                    playing: false,
                  },
                  {
                    title: "No Rest Or Endless Rest",
                    author: "LISOFV",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=453562&width=300&trackid=1882761",
                    url: "/genres/pop/No_Rest_Or_Endless_Rest_-_Lisofv",
                    genre: "pop",
                    id: 197,
                    playing: false,
                  },
                  {
                    title: "Old Money",
                    author: "TAB",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=452579&width=300&trackid=1880064",
                    url: "/genres/pop/Old_Money_(feat._Jade_Gritty_&amp;_AURC)_-_Tab_(2)",
                    genre: "pop",
                    id: 198,
                    playing: false,
                  },
                  {
                    title: "The Deep",
                    author: "ANITEK",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=454439&width=300&trackid=1884527",
                    url: "/genres/pop/The_Deep_-_Anitek",
                    genre: "pop",
                    id: 199,
                    playing: false,
                  },
                  {
                    title: "Confession_",
                    author: "QUASABE",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=448067&width=300&trackid=1870094",
                    url: "/genres/pop/Confession_-_Quesabe",
                    genre: "pop",
                    id: 200,
                    playing: false,
                  },
                  {
                    title: "Work N' Play",
                    author: "SAMIE BOWER",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=447171&width=300&trackid=1863814",
                    url: "/genres/pop/Work_N'_Play_-_samiebower_(2)",
                    genre: "pop",
                    id: 201,
                    playing: false,
                  },
                  {
                    title: "Lo Fi Chill Hop",
                    author: "LART",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=447552&width=300&trackid=1869045",
                    url: "/genres/pop/Lo_Fi_Chill_Hop_-_Lart",
                    genre: "pop",
                    id: 202,
                    playing: false,
                  },
                ],
              },
              {
                subtitle: "Вся хип-хоп музыка",
                subsongs: [
                  {
                    title: "B U R N",
                    author: "BESSONN&SA",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=326129&width=300&trackid=1860716",
                    url: "/genres/pop/B_U_R_N_-_bessonnitsa",
                    genre: "pop",
                    id: 203,
                    playing: false,
                  },
                  {
                    title: "MUAKI",
                    author: "LESSKY",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=315701&width=300&trackid=1840801",
                    url: "/genres/pop/MUAKI_-_Lessky",
                    genre: "pop",
                    id: 204,
                    playing: false,
                  },
                  {
                    title: "Chocolate",
                    author: "ALFONSO LUGO",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=253357&width=300&trackid=1823379",
                    url: "/genres/pop/Chocolate_-_Alfonso_Lugo",
                    genre: "pop",
                    id: 205,
                    playing: false,
                  },
                  {
                    title: "Blood",
                    author: "ALL MY FRIENDS HATE ME",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=261326&width=300&trackid=1765024",
                    url: "/genres/pop/Blood_-_All_My_Friends_Hate_Me",
                    genre: "pop",
                    id: 206,
                    playing: false,
                  },
                  {
                    title: "Tiptoe",
                    author: "RIVERS AND LEAVES",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=262021&width=300&trackid=1845306",
                    url: "/genres/pop/Tiptoe_-_Rivers_and_Leafs_(2)",
                    genre: "pop",
                    id: 207,
                    playing: false,
                  },
                  {
                    title: "In My Mind",
                    author: "LAMINAR",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=448427&width=300&trackid=1871070",
                    url: "/genres/pop/In_My_Mind_-_Laminar",
                    genre: "pop",
                    id: 208,
                    playing: false,
                  },
                  {
                    title: "Lover",
                    author: "SQUARE A SAW",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=345413&width=300&trackid=1831809",
                    url: "/genres/pop/Lover_-_Square_a_Saw",
                    genre: "pop",
                    id: 209,
                    playing: false,
                  },
                  {
                    title: "A Moment in Time",
                    author: "GRAHAM COE",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=280815&width=300&trackid=1861493",
                    url: "/genres/pop/A_Moment_in_Time_-_Graham_Coe",
                    genre: "pop",
                    id: 210,
                    playing: false,
                  },
                ],
              },
            ],
          },
          {
            genre: "Dance",
            title: "Dance",
            songs: [
              {
                subtitle: "DJ",
                subsongs: [
                  {
                    title: "Alone",
                    author: "COLOR OUT",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=455221&width=300&trackid=1886257",
                    url: "/genres/pop/Alone_-_Color_Out",
                    genre: "pop",
                    id: 195,
                    playing: false,
                  },
                  {
                    title: "Molotov Heart",
                    author: "RADIO NOWHERE",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=452261&width=300&trackid=1879171",
                    url: "/genres/pop/Molotov_Heart_-_radionowhere",
                    genre: "pop",
                    id: 196,
                    playing: false,
                  },
                  {
                    title: "No Rest Or Endless Rest",
                    author: "LISOFV",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=453562&width=300&trackid=1882761",
                    url: "/genres/pop/No_Rest_Or_Endless_Rest_-_Lisofv",
                    genre: "pop",
                    id: 197,
                    playing: false,
                  },
                  {
                    title: "Old Money",
                    author: "TAB",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=452579&width=300&trackid=1880064",
                    url: "/genres/pop/Old_Money_(feat._Jade_Gritty_&amp;_AURC)_-_Tab_(2)",
                    genre: "pop",
                    id: 198,
                    playing: false,
                  },
                  {
                    title: "The Deep",
                    author: "ANITEK",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=454439&width=300&trackid=1884527",
                    url: "/genres/pop/The_Deep_-_Anitek",
                    genre: "pop",
                    id: 199,
                    playing: false,
                  },
                  {
                    title: "Confession_",
                    author: "QUASABE",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=448067&width=300&trackid=1870094",
                    url: "/genres/pop/Confession_-_Quesabe",
                    genre: "pop",
                    id: 200,
                    playing: false,
                  },
                  {
                    title: "Work N' Play",
                    author: "SAMIE BOWER",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=447171&width=300&trackid=1863814",
                    url: "/genres/pop/Work_N'_Play_-_samiebower_(2)",
                    genre: "pop",
                    id: 201,
                    playing: false,
                  },
                  {
                    title: "Lo Fi Chill Hop",
                    author: "LART",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=447552&width=300&trackid=1869045",
                    url: "/genres/pop/Lo_Fi_Chill_Hop_-_Lart",
                    genre: "pop",
                    id: 202,
                    playing: false,
                  },
                ],
              },
              {
                subtitle: "Популярные",
                subsongs: [
                  {
                    title: "B U R N",
                    author: "BESSONN&SA",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=326129&width=300&trackid=1860716",
                    url: "/genres/pop/B_U_R_N_-_bessonnitsa",
                    genre: "pop",
                    id: 203,
                    playing: false,
                  },
                  {
                    title: "MUAKI",
                    author: "LESSKY",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=315701&width=300&trackid=1840801",
                    url: "/genres/pop/MUAKI_-_Lessky",
                    genre: "pop",
                    id: 204,
                    playing: false,
                  },
                  {
                    title: "Chocolate",
                    author: "ALFONSO LUGO",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=253357&width=300&trackid=1823379",
                    url: "/genres/pop/Chocolate_-_Alfonso_Lugo",
                    genre: "pop",
                    id: 205,
                    playing: false,
                  },
                  {
                    title: "Blood",
                    author: "ALL MY FRIENDS HATE ME",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=261326&width=300&trackid=1765024",
                    url: "/genres/pop/Blood_-_All_My_Friends_Hate_Me",
                    genre: "pop",
                    id: 206,
                    playing: false,
                  },
                  {
                    title: "Tiptoe",
                    author: "RIVERS AND LEAVES",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=262021&width=300&trackid=1845306",
                    url: "/genres/pop/Tiptoe_-_Rivers_and_Leafs_(2)",
                    genre: "pop",
                    id: 207,
                    playing: false,
                  },
                  {
                    title: "In My Mind",
                    author: "LAMINAR",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=448427&width=300&trackid=1871070",
                    url: "/genres/pop/In_My_Mind_-_Laminar",
                    genre: "pop",
                    id: 208,
                    playing: false,
                  },
                  {
                    title: "Lover",
                    author: "SQUARE A SAW",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=345413&width=300&trackid=1831809",
                    url: "/genres/pop/Lover_-_Square_a_Saw",
                    genre: "pop",
                    id: 209,
                    playing: false,
                  },
                  {
                    title: "A Moment in Time",
                    author: "GRAHAM COE",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=280815&width=300&trackid=1861493",
                    url: "/genres/pop/A_Moment_in_Time_-_Graham_Coe",
                    genre: "pop",
                    id: 210,
                    playing: false,
                  },
                ],
              },
            ],
          },
          {
            genre: "В дорогу",
            title: "В дорогу",
            songs: [
              {
                subtitle: "Свежие",
                subsongs: [
                  {
                    title: "Alone",
                    author: "COLOR OUT",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=455221&width=300&trackid=1886257",
                    url: "/genres/pop/Alone_-_Color_Out",
                    genre: "pop",
                    id: 195,
                    playing: false,
                  },
                  {
                    title: "Molotov Heart",
                    author: "RADIO NOWHERE",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=452261&width=300&trackid=1879171",
                    url: "/genres/pop/Molotov_Heart_-_radionowhere",
                    genre: "pop",
                    id: 196,
                    playing: false,
                  },
                  {
                    title: "No Rest Or Endless Rest",
                    author: "LISOFV",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=453562&width=300&trackid=1882761",
                    url: "/genres/pop/No_Rest_Or_Endless_Rest_-_Lisofv",
                    genre: "pop",
                    id: 197,
                    playing: false,
                  },
                  {
                    title: "Old Money",
                    author: "TAB",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=452579&width=300&trackid=1880064",
                    url: "/genres/pop/Old_Money_(feat._Jade_Gritty_&amp;_AURC)_-_Tab_(2)",
                    genre: "pop",
                    id: 198,
                    playing: false,
                  },
                  {
                    title: "The Deep",
                    author: "ANITEK",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=454439&width=300&trackid=1884527",
                    url: "/genres/pop/The_Deep_-_Anitek",
                    genre: "pop",
                    id: 199,
                    playing: false,
                  },
                  {
                    title: "Confession_",
                    author: "QUASABE",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=448067&width=300&trackid=1870094",
                    url: "/genres/pop/Confession_-_Quesabe",
                    genre: "pop",
                    id: 200,
                    playing: false,
                  },
                  {
                    title: "Work N' Play",
                    author: "SAMIE BOWER",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=447171&width=300&trackid=1863814",
                    url: "/genres/pop/Work_N'_Play_-_samiebower_(2)",
                    genre: "pop",
                    id: 201,
                    playing: false,
                  },
                  {
                    title: "Lo Fi Chill Hop",
                    author: "LART",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=447552&width=300&trackid=1869045",
                    url: "/genres/pop/Lo_Fi_Chill_Hop_-_Lart",
                    genre: "pop",
                    id: 202,
                    playing: false,
                  },
                ],
              },
              {
                subtitle: "Популярные",
                subsongs: [
                  {
                    title: "B U R N",
                    author: "BESSONN&SA",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=326129&width=300&trackid=1860716",
                    url: "/genres/pop/B_U_R_N_-_bessonnitsa",
                    genre: "pop",
                    id: 203,
                    playing: false,
                  },
                  {
                    title: "MUAKI",
                    author: "LESSKY",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=315701&width=300&trackid=1840801",
                    url: "/genres/pop/MUAKI_-_Lessky",
                    genre: "pop",
                    id: 204,
                    playing: false,
                  },
                  {
                    title: "Chocolate",
                    author: "ALFONSO LUGO",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=253357&width=300&trackid=1823379",
                    url: "/genres/pop/Chocolate_-_Alfonso_Lugo",
                    genre: "pop",
                    id: 205,
                    playing: false,
                  },
                  {
                    title: "Blood",
                    author: "ALL MY FRIENDS HATE ME",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=261326&width=300&trackid=1765024",
                    url: "/genres/pop/Blood_-_All_My_Friends_Hate_Me",
                    genre: "pop",
                    id: 206,
                    playing: false,
                  },
                  {
                    title: "Tiptoe",
                    author: "RIVERS AND LEAVES",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=262021&width=300&trackid=1845306",
                    url: "/genres/pop/Tiptoe_-_Rivers_and_Leafs_(2)",
                    genre: "pop",
                    id: 207,
                    playing: false,
                  },
                  {
                    title: "In My Mind",
                    author: "LAMINAR",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=448427&width=300&trackid=1871070",
                    url: "/genres/pop/In_My_Mind_-_Laminar",
                    genre: "pop",
                    id: 208,
                    playing: false,
                  },
                  {
                    title: "Lover",
                    author: "SQUARE A SAW",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=345413&width=300&trackid=1831809",
                    url: "/genres/pop/Lover_-_Square_a_Saw",
                    genre: "pop",
                    id: 209,
                    playing: false,
                  },
                  {
                    title: "A Moment in Time",
                    author: "GRAHAM COE",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=280815&width=300&trackid=1861493",
                    url: "/genres/pop/A_Moment_in_Time_-_Graham_Coe",
                    genre: "pop",
                    id: 210,
                    playing: false,
                  },
                ],
              },
            ],
          },
          {
            genre: "Для дома",
            title: "Для дома",
            songs: [
              {
                subtitle: "Спокойные",
                subsongs: [
                  {
                    title: "Alone",
                    author: "COLOR OUT",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=455221&width=300&trackid=1886257",
                    url: "/genres/pop/Alone_-_Color_Out",
                    genre: "pop",
                    id: 195,
                    playing: false,
                  },
                  {
                    title: "Molotov Heart",
                    author: "RADIO NOWHERE",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=452261&width=300&trackid=1879171",
                    url: "/genres/pop/Molotov_Heart_-_radionowhere",
                    genre: "pop",
                    id: 196,
                    playing: false,
                  },
                  {
                    title: "No Rest Or Endless Rest",
                    author: "LISOFV",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=453562&width=300&trackid=1882761",
                    url: "/genres/pop/No_Rest_Or_Endless_Rest_-_Lisofv",
                    genre: "pop",
                    id: 197,
                    playing: false,
                  },
                  {
                    title: "Old Money",
                    author: "TAB",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=452579&width=300&trackid=1880064",
                    url: "/genres/pop/Old_Money_(feat._Jade_Gritty_&amp;_AURC)_-_Tab_(2)",
                    genre: "pop",
                    id: 198,
                    playing: false,
                  },
                  {
                    title: "The Deep",
                    author: "ANITEK",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=454439&width=300&trackid=1884527",
                    url: "/genres/pop/The_Deep_-_Anitek",
                    genre: "pop",
                    id: 199,
                    playing: false,
                  },
                  {
                    title: "Confession_",
                    author: "QUASABE",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=448067&width=300&trackid=1870094",
                    url: "/genres/pop/Confession_-_Quesabe",
                    genre: "pop",
                    id: 200,
                    playing: false,
                  },
                  {
                    title: "Work N' Play",
                    author: "SAMIE BOWER",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=447171&width=300&trackid=1863814",
                    url: "/genres/pop/Work_N'_Play_-_samiebower_(2)",
                    genre: "pop",
                    id: 201,
                    playing: false,
                  },
                  {
                    title: "Lo Fi Chill Hop",
                    author: "LART",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=447552&width=300&trackid=1869045",
                    url: "/genres/pop/Lo_Fi_Chill_Hop_-_Lart",
                    genre: "pop",
                    id: 202,
                    playing: false,
                  },
                ],
              },
              {
                subtitle: "Новинки",
                subsongs: [
                  {
                    title: "B U R N",
                    author: "BESSONN&SA",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=326129&width=300&trackid=1860716",
                    url: "/genres/pop/B_U_R_N_-_bessonnitsa",
                    genre: "pop",
                    id: 203,
                    playing: false,
                  },
                  {
                    title: "MUAKI",
                    author: "LESSKY",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=315701&width=300&trackid=1840801",
                    url: "/genres/pop/MUAKI_-_Lessky",
                    genre: "pop",
                    id: 204,
                    playing: false,
                  },
                  {
                    title: "Chocolate",
                    author: "ALFONSO LUGO",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=253357&width=300&trackid=1823379",
                    url: "/genres/pop/Chocolate_-_Alfonso_Lugo",
                    genre: "pop",
                    id: 205,
                    playing: false,
                  },
                  {
                    title: "Blood",
                    author: "ALL MY FRIENDS HATE ME",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=261326&width=300&trackid=1765024",
                    url: "/genres/pop/Blood_-_All_My_Friends_Hate_Me",
                    genre: "pop",
                    id: 206,
                    playing: false,
                  },
                  {
                    title: "Tiptoe",
                    author: "RIVERS AND LEAVES",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=262021&width=300&trackid=1845306",
                    url: "/genres/pop/Tiptoe_-_Rivers_and_Leafs_(2)",
                    genre: "pop",
                    id: 207,
                    playing: false,
                  },
                  {
                    title: "In My Mind",
                    author: "LAMINAR",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=448427&width=300&trackid=1871070",
                    url: "/genres/pop/In_My_Mind_-_Laminar",
                    genre: "pop",
                    id: 208,
                    playing: false,
                  },
                  {
                    title: "Lover",
                    author: "SQUARE A SAW",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=345413&width=300&trackid=1831809",
                    url: "/genres/pop/Lover_-_Square_a_Saw",
                    genre: "pop",
                    id: 209,
                    playing: false,
                  },
                  {
                    title: "A Moment in Time",
                    author: "GRAHAM COE",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=280815&width=300&trackid=1861493",
                    url: "/genres/pop/A_Moment_in_Time_-_Graham_Coe",
                    genre: "pop",
                    id: 210,
                    playing: false,
                  },
                ],
              },
            ],
          },
          {
            genre: "Сон",
            title: "Сон",
            songs: [
              {
                subtitle: "Звуки природы",
                subsongs: [
                  {
                    title: "Alone",
                    author: "COLOR OUT",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=455221&width=300&trackid=1886257",
                    url: "/genres/pop/Alone_-_Color_Out",
                    genre: "pop",
                    id: 195,
                    playing: false,
                  },
                  {
                    title: "Molotov Heart",
                    author: "RADIO NOWHERE",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=452261&width=300&trackid=1879171",
                    url: "/genres/pop/Molotov_Heart_-_radionowhere",
                    genre: "pop",
                    id: 196,
                    playing: false,
                  },
                  {
                    title: "No Rest Or Endless Rest",
                    author: "LISOFV",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=453562&width=300&trackid=1882761",
                    url: "/genres/pop/No_Rest_Or_Endless_Rest_-_Lisofv",
                    genre: "pop",
                    id: 197,
                    playing: false,
                  },
                  {
                    title: "Old Money",
                    author: "TAB",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=452579&width=300&trackid=1880064",
                    url: "/genres/pop/Old_Money_(feat._Jade_Gritty_&amp;_AURC)_-_Tab_(2)",
                    genre: "pop",
                    id: 198,
                    playing: false,
                  },
                  {
                    title: "The Deep",
                    author: "ANITEK",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=454439&width=300&trackid=1884527",
                    url: "/genres/pop/The_Deep_-_Anitek",
                    genre: "pop",
                    id: 199,
                    playing: false,
                  },
                  {
                    title: "Confession_",
                    author: "QUASABE",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=448067&width=300&trackid=1870094",
                    url: "/genres/pop/Confession_-_Quesabe",
                    genre: "pop",
                    id: 200,
                    playing: false,
                  },
                  {
                    title: "Work N' Play",
                    author: "SAMIE BOWER",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=447171&width=300&trackid=1863814",
                    url: "/genres/pop/Work_N'_Play_-_samiebower_(2)",
                    genre: "pop",
                    id: 201,
                    playing: false,
                  },
                  {
                    title: "Lo Fi Chill Hop",
                    author: "LART",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=447552&width=300&trackid=1869045",
                    url: "/genres/pop/Lo_Fi_Chill_Hop_-_Lart",
                    genre: "pop",
                    id: 202,
                    playing: false,
                  },
                ],
              },
              {
                subtitle: "Мелодия",
                subsongs: [
                  {
                    title: "B U R N",
                    author: "BESSONN&SA",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=326129&width=300&trackid=1860716",
                    url: "/genres/pop/B_U_R_N_-_bessonnitsa",
                    genre: "pop",
                    id: 203,
                    playing: false,
                  },
                  {
                    title: "MUAKI",
                    author: "LESSKY",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=315701&width=300&trackid=1840801",
                    url: "/genres/pop/MUAKI_-_Lessky",
                    genre: "pop",
                    id: 204,
                    playing: false,
                  },
                  {
                    title: "Chocolate",
                    author: "ALFONSO LUGO",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=253357&width=300&trackid=1823379",
                    url: "/genres/pop/Chocolate_-_Alfonso_Lugo",
                    genre: "pop",
                    id: 205,
                    playing: false,
                  },
                  {
                    title: "Blood",
                    author: "ALL MY FRIENDS HATE ME",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=261326&width=300&trackid=1765024",
                    url: "/genres/pop/Blood_-_All_My_Friends_Hate_Me",
                    genre: "pop",
                    id: 206,
                    playing: false,
                  },
                  {
                    title: "Tiptoe",
                    author: "RIVERS AND LEAVES",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=262021&width=300&trackid=1845306",
                    url: "/genres/pop/Tiptoe_-_Rivers_and_Leafs_(2)",
                    genre: "pop",
                    id: 207,
                    playing: false,
                  },
                  {
                    title: "In My Mind",
                    author: "LAMINAR",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=448427&width=300&trackid=1871070",
                    url: "/genres/pop/In_My_Mind_-_Laminar",
                    genre: "pop",
                    id: 208,
                    playing: false,
                  },
                  {
                    title: "Lover",
                    author: "SQUARE A SAW",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=345413&width=300&trackid=1831809",
                    url: "/genres/pop/Lover_-_Square_a_Saw",
                    genre: "pop",
                    id: 209,
                    playing: false,
                  },
                  {
                    title: "A Moment in Time",
                    author: "GRAHAM COE",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=280815&width=300&trackid=1861493",
                    url: "/genres/pop/A_Moment_in_Time_-_Graham_Coe",
                    genre: "pop",
                    id: 210,
                    playing: false,
                  },
                ],
              },
            ],
          },
          {
            genre: "Инди",
            title: "Инди",
            songs: [
              {
                subtitle: "Новинки инди",
                subsongs: [
                  {
                    title: "Alone",
                    author: "COLOR OUT",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=455221&width=300&trackid=1886257",
                    url: "/genres/pop/Alone_-_Color_Out",
                    genre: "pop",
                    id: 195,
                    playing: false,
                  },
                  {
                    title: "Molotov Heart",
                    author: "RADIO NOWHERE",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=452261&width=300&trackid=1879171",
                    url: "/genres/pop/Molotov_Heart_-_radionowhere",
                    genre: "pop",
                    id: 196,
                    playing: false,
                  },
                  {
                    title: "No Rest Or Endless Rest",
                    author: "LISOFV",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=453562&width=300&trackid=1882761",
                    url: "/genres/pop/No_Rest_Or_Endless_Rest_-_Lisofv",
                    genre: "pop",
                    id: 197,
                    playing: false,
                  },
                  {
                    title: "Old Money",
                    author: "TAB",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=452579&width=300&trackid=1880064",
                    url: "/genres/pop/Old_Money_(feat._Jade_Gritty_&amp;_AURC)_-_Tab_(2)",
                    genre: "pop",
                    id: 198,
                    playing: false,
                  },
                  {
                    title: "The Deep",
                    author: "ANITEK",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=454439&width=300&trackid=1884527",
                    url: "/genres/pop/The_Deep_-_Anitek",
                    genre: "pop",
                    id: 199,
                    playing: false,
                  },
                  {
                    title: "Confession_",
                    author: "QUASABE",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=448067&width=300&trackid=1870094",
                    url: "/genres/pop/Confession_-_Quesabe",
                    genre: "pop",
                    id: 200,
                    playing: false,
                  },
                  {
                    title: "Work N' Play",
                    author: "SAMIE BOWER",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=447171&width=300&trackid=1863814",
                    url: "/genres/pop/Work_N'_Play_-_samiebower_(2)",
                    genre: "pop",
                    id: 201,
                    playing: false,
                  },
                  {
                    title: "Lo Fi Chill Hop",
                    author: "LART",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=447552&width=300&trackid=1869045",
                    url: "/genres/pop/Lo_Fi_Chill_Hop_-_Lart",
                    genre: "pop",
                    id: 202,
                    playing: false,
                  },
                ],
              },
              {
                subtitle: "Популярные",
                subsongs: [
                  {
                    title: "B U R N",
                    author: "BESSONN&SA",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=326129&width=300&trackid=1860716",
                    url: "/genres/pop/B_U_R_N_-_bessonnitsa",
                    genre: "pop",
                    id: 203,
                    playing: false,
                  },
                  {
                    title: "MUAKI",
                    author: "LESSKY",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=315701&width=300&trackid=1840801",
                    url: "/genres/pop/MUAKI_-_Lessky",
                    genre: "pop",
                    id: 204,
                    playing: false,
                  },
                  {
                    title: "Chocolate",
                    author: "ALFONSO LUGO",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=253357&width=300&trackid=1823379",
                    url: "/genres/pop/Chocolate_-_Alfonso_Lugo",
                    genre: "pop",
                    id: 205,
                    playing: false,
                  },
                  {
                    title: "Blood",
                    author: "ALL MY FRIENDS HATE ME",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=261326&width=300&trackid=1765024",
                    url: "/genres/pop/Blood_-_All_My_Friends_Hate_Me",
                    genre: "pop",
                    id: 206,
                    playing: false,
                  },
                  {
                    title: "Tiptoe",
                    author: "RIVERS AND LEAVES",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=262021&width=300&trackid=1845306",
                    url: "/genres/pop/Tiptoe_-_Rivers_and_Leafs_(2)",
                    genre: "pop",
                    id: 207,
                    playing: false,
                  },
                  {
                    title: "In My Mind",
                    author: "LAMINAR",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=448427&width=300&trackid=1871070",
                    url: "/genres/pop/In_My_Mind_-_Laminar",
                    genre: "pop",
                    id: 208,
                    playing: false,
                  },
                  {
                    title: "Lover",
                    author: "SQUARE A SAW",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=345413&width=300&trackid=1831809",
                    url: "/genres/pop/Lover_-_Square_a_Saw",
                    genre: "pop",
                    id: 209,
                    playing: false,
                  },
                  {
                    title: "A Moment in Time",
                    author: "GRAHAM COE",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=280815&width=300&trackid=1861493",
                    url: "/genres/pop/A_Moment_in_Time_-_Graham_Coe",
                    genre: "pop",
                    id: 210,
                    playing: false,
                  },
                ],
              },
            ],
          },
          {
            genre: "Джаз",
            title: "Джаз",
            songs: [
              {
                subtitle: "Современный джаз",
                subsongs: [
                  {
                    title: "Alone",
                    author: "COLOR OUT",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=455221&width=300&trackid=1886257",
                    url: "/genres/pop/Alone_-_Color_Out",
                    genre: "pop",
                    id: 195,
                    playing: false,
                  },
                  {
                    title: "Molotov Heart",
                    author: "RADIO NOWHERE",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=452261&width=300&trackid=1879171",
                    url: "/genres/pop/Molotov_Heart_-_radionowhere",
                    genre: "pop",
                    id: 196,
                    playing: false,
                  },
                  {
                    title: "No Rest Or Endless Rest",
                    author: "LISOFV",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=453562&width=300&trackid=1882761",
                    url: "/genres/pop/No_Rest_Or_Endless_Rest_-_Lisofv",
                    genre: "pop",
                    id: 197,
                    playing: false,
                  },
                  {
                    title: "Old Money",
                    author: "TAB",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=452579&width=300&trackid=1880064",
                    url: "/genres/pop/Old_Money_(feat._Jade_Gritty_&amp;_AURC)_-_Tab_(2)",
                    genre: "pop",
                    id: 198,
                    playing: false,
                  },
                  {
                    title: "The Deep",
                    author: "ANITEK",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=454439&width=300&trackid=1884527",
                    url: "/genres/pop/The_Deep_-_Anitek",
                    genre: "pop",
                    id: 199,
                    playing: false,
                  },
                  {
                    title: "Confession_",
                    author: "QUASABE",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=448067&width=300&trackid=1870094",
                    url: "/genres/pop/Confession_-_Quesabe",
                    genre: "pop",
                    id: 200,
                    playing: false,
                  },
                  {
                    title: "Work N' Play",
                    author: "SAMIE BOWER",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=447171&width=300&trackid=1863814",
                    url: "/genres/pop/Work_N'_Play_-_samiebower_(2)",
                    genre: "pop",
                    id: 201,
                    playing: false,
                  },
                  {
                    title: "Lo Fi Chill Hop",
                    author: "LART",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=447552&width=300&trackid=1869045",
                    url: "/genres/pop/Lo_Fi_Chill_Hop_-_Lart",
                    genre: "pop",
                    id: 202,
                    playing: false,
                  },
                ],
              },
              {
                subtitle: "Джаз 80-х",
                subsongs: [
                  {
                    title: "B U R N",
                    author: "BESSONN&SA",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=326129&width=300&trackid=1860716",
                    url: "/genres/pop/B_U_R_N_-_bessonnitsa",
                    genre: "pop",
                    id: 203,
                    playing: false,
                  },
                  {
                    title: "MUAKI",
                    author: "LESSKY",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=315701&width=300&trackid=1840801",
                    url: "/genres/pop/MUAKI_-_Lessky",
                    genre: "pop",
                    id: 204,
                    playing: false,
                  },
                  {
                    title: "Chocolate",
                    author: "ALFONSO LUGO",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=253357&width=300&trackid=1823379",
                    url: "/genres/pop/Chocolate_-_Alfonso_Lugo",
                    genre: "pop",
                    id: 205,
                    playing: false,
                  },
                  {
                    title: "Blood",
                    author: "ALL MY FRIENDS HATE ME",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=261326&width=300&trackid=1765024",
                    url: "/genres/pop/Blood_-_All_My_Friends_Hate_Me",
                    genre: "pop",
                    id: 206,
                    playing: false,
                  },
                  {
                    title: "Tiptoe",
                    author: "RIVERS AND LEAVES",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=262021&width=300&trackid=1845306",
                    url: "/genres/pop/Tiptoe_-_Rivers_and_Leafs_(2)",
                    genre: "pop",
                    id: 207,
                    playing: false,
                  },
                  {
                    title: "In My Mind",
                    author: "LAMINAR",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=448427&width=300&trackid=1871070",
                    url: "/genres/pop/In_My_Mind_-_Laminar",
                    genre: "pop",
                    id: 208,
                    playing: false,
                  },
                  {
                    title: "Lover",
                    author: "SQUARE A SAW",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=345413&width=300&trackid=1831809",
                    url: "/genres/pop/Lover_-_Square_a_Saw",
                    genre: "pop",
                    id: 209,
                    playing: false,
                  },
                  {
                    title: "A Moment in Time",
                    author: "GRAHAM COE",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=280815&width=300&trackid=1861493",
                    url: "/genres/pop/A_Moment_in_Time_-_Graham_Coe",
                    genre: "pop",
                    id: 210,
                    playing: false,
                  },
                ],
              },
            ],
          },
          {
            genre: "Романтика",
            title: "Романтика",
            songs: [
              {
                subtitle: "Для вечера",
                subsongs: [
                  {
                    title: "Alone",
                    author: "COLOR OUT",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=455221&width=300&trackid=1886257",
                    url: "/genres/pop/Alone_-_Color_Out",
                    genre: "pop",
                    id: 195,
                    playing: false,
                  },
                  {
                    title: "Molotov Heart",
                    author: "RADIO NOWHERE",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=452261&width=300&trackid=1879171",
                    url: "/genres/pop/Molotov_Heart_-_radionowhere",
                    genre: "pop",
                    id: 196,
                    playing: false,
                  },
                  {
                    title: "No Rest Or Endless Rest",
                    author: "LISOFV",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=453562&width=300&trackid=1882761",
                    url: "/genres/pop/No_Rest_Or_Endless_Rest_-_Lisofv",
                    genre: "pop",
                    id: 197,
                    playing: false,
                  },
                  {
                    title: "Old Money",
                    author: "TAB",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=452579&width=300&trackid=1880064",
                    url: "/genres/pop/Old_Money_(feat._Jade_Gritty_&amp;_AURC)_-_Tab_(2)",
                    genre: "pop",
                    id: 198,
                    playing: false,
                  },
                  {
                    title: "The Deep",
                    author: "ANITEK",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=454439&width=300&trackid=1884527",
                    url: "/genres/pop/The_Deep_-_Anitek",
                    genre: "pop",
                    id: 199,
                    playing: false,
                  },
                  {
                    title: "Confession_",
                    author: "QUASABE",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=448067&width=300&trackid=1870094",
                    url: "/genres/pop/Confession_-_Quesabe",
                    genre: "pop",
                    id: 200,
                    playing: false,
                  },
                  {
                    title: "Work N' Play",
                    author: "SAMIE BOWER",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=447171&width=300&trackid=1863814",
                    url: "/genres/pop/Work_N'_Play_-_samiebower_(2)",
                    genre: "pop",
                    id: 201,
                    playing: false,
                  },
                  {
                    title: "Lo Fi Chill Hop",
                    author: "LART",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=447552&width=300&trackid=1869045",
                    url: "/genres/pop/Lo_Fi_Chill_Hop_-_Lart",
                    genre: "pop",
                    id: 202,
                    playing: false,
                  },
                ],
              },
              {
                subtitle: "Инструментальные",
                subsongs: [
                  {
                    title: "B U R N",
                    author: "BESSONN&SA",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=326129&width=300&trackid=1860716",
                    url: "/genres/pop/B_U_R_N_-_bessonnitsa",
                    genre: "pop",
                    id: 203,
                    playing: false,
                  },
                  {
                    title: "MUAKI",
                    author: "LESSKY",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=315701&width=300&trackid=1840801",
                    url: "/genres/pop/MUAKI_-_Lessky",
                    genre: "pop",
                    id: 204,
                    playing: false,
                  },
                  {
                    title: "Chocolate",
                    author: "ALFONSO LUGO",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=253357&width=300&trackid=1823379",
                    url: "/genres/pop/Chocolate_-_Alfonso_Lugo",
                    genre: "pop",
                    id: 205,
                    playing: false,
                  },
                  {
                    title: "Blood",
                    author: "ALL MY FRIENDS HATE ME",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=261326&width=300&trackid=1765024",
                    url: "/genres/pop/Blood_-_All_My_Friends_Hate_Me",
                    genre: "pop",
                    id: 206,
                    playing: false,
                  },
                  {
                    title: "Tiptoe",
                    author: "RIVERS AND LEAVES",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=262021&width=300&trackid=1845306",
                    url: "/genres/pop/Tiptoe_-_Rivers_and_Leafs_(2)",
                    genre: "pop",
                    id: 207,
                    playing: false,
                  },
                  {
                    title: "In My Mind",
                    author: "LAMINAR",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=448427&width=300&trackid=1871070",
                    url: "/genres/pop/In_My_Mind_-_Laminar",
                    genre: "pop",
                    id: 208,
                    playing: false,
                  },
                  {
                    title: "Lover",
                    author: "SQUARE A SAW",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=345413&width=300&trackid=1831809",
                    url: "/genres/pop/Lover_-_Square_a_Saw",
                    genre: "pop",
                    id: 209,
                    playing: false,
                  },
                  {
                    title: "A Moment in Time",
                    author: "GRAHAM COE",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=280815&width=300&trackid=1861493",
                    url: "/genres/pop/A_Moment_in_Time_-_Graham_Coe",
                    genre: "pop",
                    id: 210,
                    playing: false,
                  },
                ],
              },
            ],
          },
          {
            genre: "Вечеринка",
            title: "Вечеринка",
            songs: [
              {
                subtitle: "Популярные",
                subsongs: [
                  {
                    title: "Alone",
                    author: "COLOR OUT",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=455221&width=300&trackid=1886257",
                    url: "/genres/pop/Alone_-_Color_Out",
                    genre: "pop",
                    id: 195,
                    playing: false,
                  },
                  {
                    title: "Molotov Heart",
                    author: "RADIO NOWHERE",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=452261&width=300&trackid=1879171",
                    url: "/genres/pop/Molotov_Heart_-_radionowhere",
                    genre: "pop",
                    id: 196,
                    playing: false,
                  },
                  {
                    title: "No Rest Or Endless Rest",
                    author: "LISOFV",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=453562&width=300&trackid=1882761",
                    url: "/genres/pop/No_Rest_Or_Endless_Rest_-_Lisofv",
                    genre: "pop",
                    id: 197,
                    playing: false,
                  },
                  {
                    title: "Old Money",
                    author: "TAB",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=452579&width=300&trackid=1880064",
                    url: "/genres/pop/Old_Money_(feat._Jade_Gritty_&amp;_AURC)_-_Tab_(2)",
                    genre: "pop",
                    id: 198,
                    playing: false,
                  },
                  {
                    title: "The Deep",
                    author: "ANITEK",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=454439&width=300&trackid=1884527",
                    url: "/genres/pop/The_Deep_-_Anitek",
                    genre: "pop",
                    id: 199,
                    playing: false,
                  },
                  {
                    title: "Confession_",
                    author: "QUASABE",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=448067&width=300&trackid=1870094",
                    url: "/genres/pop/Confession_-_Quesabe",
                    genre: "pop",
                    id: 200,
                    playing: false,
                  },
                  {
                    title: "Work N' Play",
                    author: "SAMIE BOWER",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=447171&width=300&trackid=1863814",
                    url: "/genres/pop/Work_N'_Play_-_samiebower_(2)",
                    genre: "pop",
                    id: 201,
                    playing: false,
                  },
                  {
                    title: "Lo Fi Chill Hop",
                    author: "LART",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=447552&width=300&trackid=1869045",
                    url: "/genres/pop/Lo_Fi_Chill_Hop_-_Lart",
                    genre: "pop",
                    id: 202,
                    playing: false,
                  },
                ],
              },
              {
                subtitle: "Новинки",
                subsongs: [
                  {
                    title: "B U R N",
                    author: "BESSONN&SA",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=326129&width=300&trackid=1860716",
                    url: "/genres/pop/B_U_R_N_-_bessonnitsa",
                    genre: "pop",
                    id: 203,
                    playing: false,
                  },
                  {
                    title: "MUAKI",
                    author: "LESSKY",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=315701&width=300&trackid=1840801",
                    url: "/genres/pop/MUAKI_-_Lessky",
                    genre: "pop",
                    id: 204,
                    playing: false,
                  },
                  {
                    title: "Chocolate",
                    author: "ALFONSO LUGO",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=253357&width=300&trackid=1823379",
                    url: "/genres/pop/Chocolate_-_Alfonso_Lugo",
                    genre: "pop",
                    id: 205,
                    playing: false,
                  },
                  {
                    title: "Blood",
                    author: "ALL MY FRIENDS HATE ME",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=261326&width=300&trackid=1765024",
                    url: "/genres/pop/Blood_-_All_My_Friends_Hate_Me",
                    genre: "pop",
                    id: 206,
                    playing: false,
                  },
                  {
                    title: "Tiptoe",
                    author: "RIVERS AND LEAVES",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=262021&width=300&trackid=1845306",
                    url: "/genres/pop/Tiptoe_-_Rivers_and_Leafs_(2)",
                    genre: "pop",
                    id: 207,
                    playing: false,
                  },
                  {
                    title: "In My Mind",
                    author: "LAMINAR",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=448427&width=300&trackid=1871070",
                    url: "/genres/pop/In_My_Mind_-_Laminar",
                    genre: "pop",
                    id: 208,
                    playing: false,
                  },
                  {
                    title: "Lover",
                    author: "SQUARE A SAW",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=345413&width=300&trackid=1831809",
                    url: "/genres/pop/Lover_-_Square_a_Saw",
                    genre: "pop",
                    id: 209,
                    playing: false,
                  },
                  {
                    title: "A Moment in Time",
                    author: "GRAHAM COE",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=280815&width=300&trackid=1861493",
                    url: "/genres/pop/A_Moment_in_Time_-_Graham_Coe",
                    genre: "pop",
                    id: 210,
                    playing: false,
                  },
                ],
              },
            ],
          },
          {
            genre: "Для геймеров",
            title: "Для геймеров",
            songs: [
              {
                subtitle: "Спокойные",
                subsongs: [
                  {
                    title: "Alone",
                    author: "COLOR OUT",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=455221&width=300&trackid=1886257",
                    url: "/genres/pop/Alone_-_Color_Out",
                    genre: "pop",
                    id: 195,
                    playing: false,
                  },
                  {
                    title: "Molotov Heart",
                    author: "RADIO NOWHERE",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=452261&width=300&trackid=1879171",
                    url: "/genres/pop/Molotov_Heart_-_radionowhere",
                    genre: "pop",
                    id: 196,
                    playing: false,
                  },
                  {
                    title: "No Rest Or Endless Rest",
                    author: "LISOFV",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=453562&width=300&trackid=1882761",
                    url: "/genres/pop/No_Rest_Or_Endless_Rest_-_Lisofv",
                    genre: "pop",
                    id: 197,
                    playing: false,
                  },
                  {
                    title: "Old Money",
                    author: "TAB",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=452579&width=300&trackid=1880064",
                    url: "/genres/pop/Old_Money_(feat._Jade_Gritty_&amp;_AURC)_-_Tab_(2)",
                    genre: "pop",
                    id: 198,
                    playing: false,
                  },
                  {
                    title: "The Deep",
                    author: "ANITEK",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=454439&width=300&trackid=1884527",
                    url: "/genres/pop/The_Deep_-_Anitek",
                    genre: "pop",
                    id: 199,
                    playing: false,
                  },
                  {
                    title: "Confession_",
                    author: "QUASABE",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=448067&width=300&trackid=1870094",
                    url: "/genres/pop/Confession_-_Quesabe",
                    genre: "pop",
                    id: 200,
                    playing: false,
                  },
                  {
                    title: "Work N' Play",
                    author: "SAMIE BOWER",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=447171&width=300&trackid=1863814",
                    url: "/genres/pop/Work_N'_Play_-_samiebower_(2)",
                    genre: "pop",
                    id: 201,
                    playing: false,
                  },
                  {
                    title: "Lo Fi Chill Hop",
                    author: "LART",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=447552&width=300&trackid=1869045",
                    url: "/genres/pop/Lo_Fi_Chill_Hop_-_Lart",
                    genre: "pop",
                    id: 202,
                    playing: false,
                  },
                ],
              },
              {
                subtitle: "Для боссфайтов",
                subsongs: [
                  {
                    title: "B U R N",
                    author: "BESSONN&SA",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=326129&width=300&trackid=1860716",
                    url: "/genres/pop/B_U_R_N_-_bessonnitsa",
                    genre: "pop",
                    id: 203,
                    playing: false,
                  },
                  {
                    title: "MUAKI",
                    author: "LESSKY",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=315701&width=300&trackid=1840801",
                    url: "/genres/pop/MUAKI_-_Lessky",
                    genre: "pop",
                    id: 204,
                    playing: false,
                  },
                  {
                    title: "Chocolate",
                    author: "ALFONSO LUGO",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=253357&width=300&trackid=1823379",
                    url: "/genres/pop/Chocolate_-_Alfonso_Lugo",
                    genre: "pop",
                    id: 205,
                    playing: false,
                  },
                  {
                    title: "Blood",
                    author: "ALL MY FRIENDS HATE ME",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=261326&width=300&trackid=1765024",
                    url: "/genres/pop/Blood_-_All_My_Friends_Hate_Me",
                    genre: "pop",
                    id: 206,
                    playing: false,
                  },
                  {
                    title: "Tiptoe",
                    author: "RIVERS AND LEAVES",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=262021&width=300&trackid=1845306",
                    url: "/genres/pop/Tiptoe_-_Rivers_and_Leafs_(2)",
                    genre: "pop",
                    id: 207,
                    playing: false,
                  },
                  {
                    title: "In My Mind",
                    author: "LAMINAR",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=448427&width=300&trackid=1871070",
                    url: "/genres/pop/In_My_Mind_-_Laminar",
                    genre: "pop",
                    id: 208,
                    playing: false,
                  },
                  {
                    title: "Lover",
                    author: "SQUARE A SAW",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=345413&width=300&trackid=1831809",
                    url: "/genres/pop/Lover_-_Square_a_Saw",
                    genre: "pop",
                    id: 209,
                    playing: false,
                  },
                  {
                    title: "A Moment in Time",
                    author: "GRAHAM COE",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=280815&width=300&trackid=1861493",
                    url: "/genres/pop/A_Moment_in_Time_-_Graham_Coe",
                    genre: "pop",
                    id: 210,
                    playing: false,
                  },
                ],
              },
            ],
          },
          {
            genre: "Тренировка",
            title: "Тренировка",
            songs: [
              {
                subtitle: "Для взрывного настроя",
                subsongs: [
                  {
                    title: "Alone",
                    author: "COLOR OUT",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=455221&width=300&trackid=1886257",
                    url: "/genres/pop/Alone_-_Color_Out",
                    genre: "pop",
                    id: 195,
                    playing: false,
                  },
                  {
                    title: "Molotov Heart",
                    author: "RADIO NOWHERE",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=452261&width=300&trackid=1879171",
                    url: "/genres/pop/Molotov_Heart_-_radionowhere",
                    genre: "pop",
                    id: 196,
                    playing: false,
                  },
                  {
                    title: "No Rest Or Endless Rest",
                    author: "LISOFV",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=453562&width=300&trackid=1882761",
                    url: "/genres/pop/No_Rest_Or_Endless_Rest_-_Lisofv",
                    genre: "pop",
                    id: 197,
                    playing: false,
                  },
                  {
                    title: "Old Money",
                    author: "TAB",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=452579&width=300&trackid=1880064",
                    url: "/genres/pop/Old_Money_(feat._Jade_Gritty_&amp;_AURC)_-_Tab_(2)",
                    genre: "pop",
                    id: 198,
                    playing: false,
                  },
                  {
                    title: "The Deep",
                    author: "ANITEK",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=454439&width=300&trackid=1884527",
                    url: "/genres/pop/The_Deep_-_Anitek",
                    genre: "pop",
                    id: 199,
                    playing: false,
                  },
                  {
                    title: "Confession_",
                    author: "QUASABE",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=448067&width=300&trackid=1870094",
                    url: "/genres/pop/Confession_-_Quesabe",
                    genre: "pop",
                    id: 200,
                    playing: false,
                  },
                  {
                    title: "Work N' Play",
                    author: "SAMIE BOWER",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=447171&width=300&trackid=1863814",
                    url: "/genres/pop/Work_N'_Play_-_samiebower_(2)",
                    genre: "pop",
                    id: 201,
                    playing: false,
                  },
                  {
                    title: "Lo Fi Chill Hop",
                    author: "LART",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=447552&width=300&trackid=1869045",
                    url: "/genres/pop/Lo_Fi_Chill_Hop_-_Lart",
                    genre: "pop",
                    id: 202,
                    playing: false,
                  },
                ],
              },
              {
                subtitle: "Лучшие",
                subsongs: [
                  {
                    title: "B U R N",
                    author: "BESSONN&SA",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=326129&width=300&trackid=1860716",
                    url: "/genres/pop/B_U_R_N_-_bessonnitsa",
                    genre: "pop",
                    id: 203,
                    playing: false,
                  },
                  {
                    title: "MUAKI",
                    author: "LESSKY",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=315701&width=300&trackid=1840801",
                    url: "/genres/pop/MUAKI_-_Lessky",
                    genre: "pop",
                    id: 204,
                    playing: false,
                  },
                  {
                    title: "Chocolate",
                    author: "ALFONSO LUGO",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=253357&width=300&trackid=1823379",
                    url: "/genres/pop/Chocolate_-_Alfonso_Lugo",
                    genre: "pop",
                    id: 205,
                    playing: false,
                  },
                  {
                    title: "Blood",
                    author: "ALL MY FRIENDS HATE ME",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=261326&width=300&trackid=1765024",
                    url: "/genres/pop/Blood_-_All_My_Friends_Hate_Me",
                    genre: "pop",
                    id: 206,
                    playing: false,
                  },
                  {
                    title: "Tiptoe",
                    author: "RIVERS AND LEAVES",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=262021&width=300&trackid=1845306",
                    url: "/genres/pop/Tiptoe_-_Rivers_and_Leafs_(2)",
                    genre: "pop",
                    id: 207,
                    playing: false,
                  },
                  {
                    title: "In My Mind",
                    author: "LAMINAR",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=448427&width=300&trackid=1871070",
                    url: "/genres/pop/In_My_Mind_-_Laminar",
                    genre: "pop",
                    id: 208,
                    playing: false,
                  },
                  {
                    title: "Lover",
                    author: "SQUARE A SAW",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=345413&width=300&trackid=1831809",
                    url: "/genres/pop/Lover_-_Square_a_Saw",
                    genre: "pop",
                    id: 209,
                    playing: false,
                  },
                  {
                    title: "A Moment in Time",
                    author: "GRAHAM COE",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=280815&width=300&trackid=1861493",
                    url: "/genres/pop/A_Moment_in_Time_-_Graham_Coe",
                    genre: "pop",
                    id: 210,
                    playing: false,
                  },
                ],
              },
            ],
          },
          {
            genre: "Поп",
            title: "Поп",
            songs: [
              {
                subtitle: "Новинки поп-музыки",
                subsongs: [
                  {
                    title: "Alone",
                    author: "COLOR OUT",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=455221&width=300&trackid=1886257",
                    url: "/genres/pop/Alone_-_Color_Out",
                    genre: "pop",
                    id: 195,
                    playing: false,
                  },
                  {
                    title: "Molotov Heart",
                    author: "RADIO NOWHERE",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=452261&width=300&trackid=1879171",
                    url: "/genres/pop/Molotov_Heart_-_radionowhere",
                    genre: "pop",
                    id: 196,
                    playing: false,
                  },
                  {
                    title: "No Rest Or Endless Rest",
                    author: "LISOFV",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=453562&width=300&trackid=1882761",
                    url: "/genres/pop/No_Rest_Or_Endless_Rest_-_Lisofv",
                    genre: "pop",
                    id: 197,
                    playing: false,
                  },
                  {
                    title: "Old Money",
                    author: "TAB",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=452579&width=300&trackid=1880064",
                    url: "/genres/pop/Old_Money_(feat._Jade_Gritty_&amp;_AURC)_-_Tab_(2)",
                    genre: "pop",
                    id: 198,
                    playing: false,
                  },
                  {
                    title: "The Deep",
                    author: "ANITEK",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=454439&width=300&trackid=1884527",
                    url: "/genres/pop/The_Deep_-_Anitek",
                    genre: "pop",
                    id: 199,
                    playing: false,
                  },
                  {
                    title: "Confession_",
                    author: "QUASABE",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=448067&width=300&trackid=1870094",
                    url: "/genres/pop/Confession_-_Quesabe",
                    genre: "pop",
                    id: 200,
                    playing: false,
                  },
                  {
                    title: "Work N' Play",
                    author: "SAMIE BOWER",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=447171&width=300&trackid=1863814",
                    url: "/genres/pop/Work_N'_Play_-_samiebower_(2)",
                    genre: "pop",
                    id: 201,
                    playing: false,
                  },
                  {
                    title: "Lo Fi Chill Hop",
                    author: "LART",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=447552&width=300&trackid=1869045",
                    url: "/genres/pop/Lo_Fi_Chill_Hop_-_Lart",
                    genre: "pop",
                    id: 202,
                    playing: false,
                  },
                ],
              },
              {
                subtitle: "Вся поп-музыка",
                subsongs: [
                  {
                    title: "B U R N",
                    author: "BESSONN&SA",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=326129&width=300&trackid=1860716",
                    url: "/genres/pop/B_U_R_N_-_bessonnitsa",
                    genre: "pop",
                    id: 203,
                    playing: false,
                  },
                  {
                    title: "MUAKI",
                    author: "LESSKY",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=315701&width=300&trackid=1840801",
                    url: "/genres/pop/MUAKI_-_Lessky",
                    genre: "pop",
                    id: 204,
                    playing: false,
                  },
                  {
                    title: "Chocolate",
                    author: "ALFONSO LUGO",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=253357&width=300&trackid=1823379",
                    url: "/genres/pop/Chocolate_-_Alfonso_Lugo",
                    genre: "pop",
                    id: 205,
                    playing: false,
                  },
                  {
                    title: "Blood",
                    author: "ALL MY FRIENDS HATE ME",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=261326&width=300&trackid=1765024",
                    url: "/genres/pop/Blood_-_All_My_Friends_Hate_Me",
                    genre: "pop",
                    id: 206,
                    playing: false,
                  },
                  {
                    title: "Tiptoe",
                    author: "RIVERS AND LEAVES",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=262021&width=300&trackid=1845306",
                    url: "/genres/pop/Tiptoe_-_Rivers_and_Leafs_(2)",
                    genre: "pop",
                    id: 207,
                    playing: false,
                  },
                  {
                    title: "In My Mind",
                    author: "LAMINAR",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=448427&width=300&trackid=1871070",
                    url: "/genres/pop/In_My_Mind_-_Laminar",
                    genre: "pop",
                    id: 208,
                    playing: false,
                  },
                  {
                    title: "Lover",
                    author: "SQUARE A SAW",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=345413&width=300&trackid=1831809",
                    url: "/genres/pop/Lover_-_Square_a_Saw",
                    genre: "pop",
                    id: 209,
                    playing: false,
                  },
                  {
                    title: "A Moment in Time",
                    author: "GRAHAM COE",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=280815&width=300&trackid=1861493",
                    url: "/genres/pop/A_Moment_in_Time_-_Graham_Coe",
                    genre: "pop",
                    id: 210,
                    playing: false,
                  },
                ],
              },
            ],
          },
          {
            genre: "Поп",
            title: "Поп",
            songs: [
              {
                subtitle: "Новинки поп-музыки",
                subsongs: [
                  {
                    title: "Alone",
                    author: "COLOR OUT",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=455221&width=300&trackid=1886257",
                    url: "/genres/pop/Alone_-_Color_Out",
                    genre: "pop",
                    id: 195,
                    playing: false,
                  },
                  {
                    title: "Molotov Heart",
                    author: "RADIO NOWHERE",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=452261&width=300&trackid=1879171",
                    url: "/genres/pop/Molotov_Heart_-_radionowhere",
                    genre: "pop",
                    id: 196,
                    playing: false,
                  },
                  {
                    title: "No Rest Or Endless Rest",
                    author: "LISOFV",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=453562&width=300&trackid=1882761",
                    url: "/genres/pop/No_Rest_Or_Endless_Rest_-_Lisofv",
                    genre: "pop",
                    id: 197,
                    playing: false,
                  },
                  {
                    title: "Old Money",
                    author: "TAB",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=452579&width=300&trackid=1880064",
                    url: "/genres/pop/Old_Money_(feat._Jade_Gritty_&amp;_AURC)_-_Tab_(2)",
                    genre: "pop",
                    id: 198,
                    playing: false,
                  },
                  {
                    title: "The Deep",
                    author: "ANITEK",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=454439&width=300&trackid=1884527",
                    url: "/genres/pop/The_Deep_-_Anitek",
                    genre: "pop",
                    id: 199,
                    playing: false,
                  },
                  {
                    title: "Confession_",
                    author: "QUASABE",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=448067&width=300&trackid=1870094",
                    url: "/genres/pop/Confession_-_Quesabe",
                    genre: "pop",
                    id: 200,
                    playing: false,
                  },
                  {
                    title: "Work N' Play",
                    author: "SAMIE BOWER",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=447171&width=300&trackid=1863814",
                    url: "/genres/pop/Work_N'_Play_-_samiebower_(2)",
                    genre: "pop",
                    id: 201,
                    playing: false,
                  },
                  {
                    title: "Lo Fi Chill Hop",
                    author: "LART",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=447552&width=300&trackid=1869045",
                    url: "/genres/pop/Lo_Fi_Chill_Hop_-_Lart",
                    genre: "pop",
                    id: 202,
                    playing: false,
                  },
                ],
              },
              {
                subtitle: "Вся поп-музыка",
                subsongs: [
                  {
                    title: "B U R N",
                    author: "BESSONN&SA",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=326129&width=300&trackid=1860716",
                    url: "/genres/pop/B_U_R_N_-_bessonnitsa",
                    genre: "pop",
                    id: 203,
                    playing: false,
                  },
                  {
                    title: "MUAKI",
                    author: "LESSKY",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=315701&width=300&trackid=1840801",
                    url: "/genres/pop/MUAKI_-_Lessky",
                    genre: "pop",
                    id: 204,
                    playing: false,
                  },
                  {
                    title: "Chocolate",
                    author: "ALFONSO LUGO",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=253357&width=300&trackid=1823379",
                    url: "/genres/pop/Chocolate_-_Alfonso_Lugo",
                    genre: "pop",
                    id: 205,
                    playing: false,
                  },
                  {
                    title: "Blood",
                    author: "ALL MY FRIENDS HATE ME",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=261326&width=300&trackid=1765024",
                    url: "/genres/pop/Blood_-_All_My_Friends_Hate_Me",
                    genre: "pop",
                    id: 206,
                    playing: false,
                  },
                  {
                    title: "Tiptoe",
                    author: "RIVERS AND LEAVES",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=262021&width=300&trackid=1845306",
                    url: "/genres/pop/Tiptoe_-_Rivers_and_Leafs_(2)",
                    genre: "pop",
                    id: 207,
                    playing: false,
                  },
                  {
                    title: "In My Mind",
                    author: "LAMINAR",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=448427&width=300&trackid=1871070",
                    url: "/genres/pop/In_My_Mind_-_Laminar",
                    genre: "pop",
                    id: 208,
                    playing: false,
                  },
                  {
                    title: "Lover",
                    author: "SQUARE A SAW",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=345413&width=300&trackid=1831809",
                    url: "/genres/pop/Lover_-_Square_a_Saw",
                    genre: "pop",
                    id: 209,
                    playing: false,
                  },
                  {
                    title: "A Moment in Time",
                    author: "GRAHAM COE",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=280815&width=300&trackid=1861493",
                    url: "/genres/pop/A_Moment_in_Time_-_Graham_Coe",
                    genre: "pop",
                    id: 210,
                    playing: false,
                  },
                ],
              },
            ],
          },
          {
            genre: "Поп",
            title: "Поп",
            songs: [
              {
                subtitle: "Новинки поп-музыки",
                subsongs: [
                  {
                    title: "Alone",
                    author: "COLOR OUT",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=455221&width=300&trackid=1886257",
                    url: "/genres/pop/Alone_-_Color_Out",
                    genre: "pop",
                    id: 195,
                    playing: false,
                  },
                  {
                    title: "Molotov Heart",
                    author: "RADIO NOWHERE",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=452261&width=300&trackid=1879171",
                    url: "/genres/pop/Molotov_Heart_-_radionowhere",
                    genre: "pop",
                    id: 196,
                    playing: false,
                  },
                  {
                    title: "No Rest Or Endless Rest",
                    author: "LISOFV",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=453562&width=300&trackid=1882761",
                    url: "/genres/pop/No_Rest_Or_Endless_Rest_-_Lisofv",
                    genre: "pop",
                    id: 197,
                    playing: false,
                  },
                  {
                    title: "Old Money",
                    author: "TAB",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=452579&width=300&trackid=1880064",
                    url: "/genres/pop/Old_Money_(feat._Jade_Gritty_&amp;_AURC)_-_Tab_(2)",
                    genre: "pop",
                    id: 198,
                    playing: false,
                  },
                  {
                    title: "The Deep",
                    author: "ANITEK",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=454439&width=300&trackid=1884527",
                    url: "/genres/pop/The_Deep_-_Anitek",
                    genre: "pop",
                    id: 199,
                    playing: false,
                  },
                  {
                    title: "Confession_",
                    author: "QUASABE",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=448067&width=300&trackid=1870094",
                    url: "/genres/pop/Confession_-_Quesabe",
                    genre: "pop",
                    id: 200,
                    playing: false,
                  },
                  {
                    title: "Work N' Play",
                    author: "SAMIE BOWER",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=447171&width=300&trackid=1863814",
                    url: "/genres/pop/Work_N'_Play_-_samiebower_(2)",
                    genre: "pop",
                    id: 201,
                    playing: false,
                  },
                  {
                    title: "Lo Fi Chill Hop",
                    author: "LART",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=447552&width=300&trackid=1869045",
                    url: "/genres/pop/Lo_Fi_Chill_Hop_-_Lart",
                    genre: "pop",
                    id: 202,
                    playing: false,
                  },
                ],
              },
              {
                subtitle: "Вся поп-музыка",
                subsongs: [
                  {
                    title: "B U R N",
                    author: "BESSONN&SA",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=326129&width=300&trackid=1860716",
                    url: "/genres/pop/B_U_R_N_-_bessonnitsa",
                    genre: "pop",
                    id: 203,
                    playing: false,
                  },
                  {
                    title: "MUAKI",
                    author: "LESSKY",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=315701&width=300&trackid=1840801",
                    url: "/genres/pop/MUAKI_-_Lessky",
                    genre: "pop",
                    id: 204,
                    playing: false,
                  },
                  {
                    title: "Chocolate",
                    author: "ALFONSO LUGO",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=253357&width=300&trackid=1823379",
                    url: "/genres/pop/Chocolate_-_Alfonso_Lugo",
                    genre: "pop",
                    id: 205,
                    playing: false,
                  },
                  {
                    title: "Blood",
                    author: "ALL MY FRIENDS HATE ME",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=261326&width=300&trackid=1765024",
                    url: "/genres/pop/Blood_-_All_My_Friends_Hate_Me",
                    genre: "pop",
                    id: 206,
                    playing: false,
                  },
                  {
                    title: "Tiptoe",
                    author: "RIVERS AND LEAVES",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=262021&width=300&trackid=1845306",
                    url: "/genres/pop/Tiptoe_-_Rivers_and_Leafs_(2)",
                    genre: "pop",
                    id: 207,
                    playing: false,
                  },
                  {
                    title: "In My Mind",
                    author: "LAMINAR",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=448427&width=300&trackid=1871070",
                    url: "/genres/pop/In_My_Mind_-_Laminar",
                    genre: "pop",
                    id: 208,
                    playing: false,
                  },
                  {
                    title: "Lover",
                    author: "SQUARE A SAW",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=345413&width=300&trackid=1831809",
                    url: "/genres/pop/Lover_-_Square_a_Saw",
                    genre: "pop",
                    id: 209,
                    playing: false,
                  },
                  {
                    title: "A Moment in Time",
                    author: "GRAHAM COE",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=280815&width=300&trackid=1861493",
                    url: "/genres/pop/A_Moment_in_Time_-_Graham_Coe",
                    genre: "pop",
                    id: 210,
                    playing: false,
                  },
                ],
              },
            ],
          },
          {
            genre: "Рок",
            title: "Рок",
            songs: [
              {
                subtitle: "Соло",
                subsongs: [
                  {
                    title: "Alone",
                    author: "COLOR OUT",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=455221&width=300&trackid=1886257",
                    url: "/genres/pop/Alone_-_Color_Out",
                    genre: "pop",
                    id: 195,
                    playing: false,
                  },
                  {
                    title: "Molotov Heart",
                    author: "RADIO NOWHERE",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=452261&width=300&trackid=1879171",
                    url: "/genres/pop/Molotov_Heart_-_radionowhere",
                    genre: "pop",
                    id: 196,
                    playing: false,
                  },
                  {
                    title: "No Rest Or Endless Rest",
                    author: "LISOFV",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=453562&width=300&trackid=1882761",
                    url: "/genres/pop/No_Rest_Or_Endless_Rest_-_Lisofv",
                    genre: "pop",
                    id: 197,
                    playing: false,
                  },
                  {
                    title: "Old Money",
                    author: "TAB",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=452579&width=300&trackid=1880064",
                    url: "/genres/pop/Old_Money_(feat._Jade_Gritty_&amp;_AURC)_-_Tab_(2)",
                    genre: "pop",
                    id: 198,
                    playing: false,
                  },
                  {
                    title: "The Deep",
                    author: "ANITEK",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=454439&width=300&trackid=1884527",
                    url: "/genres/pop/The_Deep_-_Anitek",
                    genre: "pop",
                    id: 199,
                    playing: false,
                  },
                  {
                    title: "Confession_",
                    author: "QUASABE",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=448067&width=300&trackid=1870094",
                    url: "/genres/pop/Confession_-_Quesabe",
                    genre: "pop",
                    id: 200,
                    playing: false,
                  },
                  {
                    title: "Work N' Play",
                    author: "SAMIE BOWER",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=447171&width=300&trackid=1863814",
                    url: "/genres/pop/Work_N'_Play_-_samiebower_(2)",
                    genre: "pop",
                    id: 201,
                    playing: false,
                  },
                  {
                    title: "Lo Fi Chill Hop",
                    author: "LART",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=447552&width=300&trackid=1869045",
                    url: "/genres/pop/Lo_Fi_Chill_Hop_-_Lart",
                    genre: "pop",
                    id: 202,
                    playing: false,
                  },
                ],
              },
              {
                subtitle: "Группа",
                subsongs: [
                  {
                    title: "B U R N",
                    author: "BESSONN&SA",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=326129&width=300&trackid=1860716",
                    url: "/genres/pop/B_U_R_N_-_bessonnitsa",
                    genre: "pop",
                    id: 203,
                    playing: false,
                  },
                  {
                    title: "MUAKI",
                    author: "LESSKY",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=315701&width=300&trackid=1840801",
                    url: "/genres/pop/MUAKI_-_Lessky",
                    genre: "pop",
                    id: 204,
                    playing: false,
                  },
                  {
                    title: "Chocolate",
                    author: "ALFONSO LUGO",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=253357&width=300&trackid=1823379",
                    url: "/genres/pop/Chocolate_-_Alfonso_Lugo",
                    genre: "pop",
                    id: 205,
                    playing: false,
                  },
                  {
                    title: "Blood",
                    author: "ALL MY FRIENDS HATE ME",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=261326&width=300&trackid=1765024",
                    url: "/genres/pop/Blood_-_All_My_Friends_Hate_Me",
                    genre: "pop",
                    id: 206,
                    playing: false,
                  },
                  {
                    title: "Tiptoe",
                    author: "RIVERS AND LEAVES",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=262021&width=300&trackid=1845306",
                    url: "/genres/pop/Tiptoe_-_Rivers_and_Leafs_(2)",
                    genre: "pop",
                    id: 207,
                    playing: false,
                  },
                  {
                    title: "In My Mind",
                    author: "LAMINAR",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=448427&width=300&trackid=1871070",
                    url: "/genres/pop/In_My_Mind_-_Laminar",
                    genre: "pop",
                    id: 208,
                    playing: false,
                  },
                  {
                    title: "Lover",
                    author: "SQUARE A SAW",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=345413&width=300&trackid=1831809",
                    url: "/genres/pop/Lover_-_Square_a_Saw",
                    genre: "pop",
                    id: 209,
                    playing: false,
                  },
                  {
                    title: "A Moment in Time",
                    author: "GRAHAM COE",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=280815&width=300&trackid=1861493",
                    url: "/genres/pop/A_Moment_in_Time_-_Graham_Coe",
                    genre: "pop",
                    id: 210,
                    playing: false,
                  },
                ],
              },
            ],
          },
          {
            genre: "Классика",
            title: "Классика",
            songs: [
              {
                subtitle: "Популярные",
                subsongs: [
                  {
                    title: "Alone",
                    author: "COLOR OUT",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=455221&width=300&trackid=1886257",
                    url: "/genres/pop/Alone_-_Color_Out",
                    genre: "pop",
                    id: 195,
                    playing: false,
                  },
                  {
                    title: "Molotov Heart",
                    author: "RADIO NOWHERE",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=452261&width=300&trackid=1879171",
                    url: "/genres/pop/Molotov_Heart_-_radionowhere",
                    genre: "pop",
                    id: 196,
                    playing: false,
                  },
                  {
                    title: "No Rest Or Endless Rest",
                    author: "LISOFV",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=453562&width=300&trackid=1882761",
                    url: "/genres/pop/No_Rest_Or_Endless_Rest_-_Lisofv",
                    genre: "pop",
                    id: 197,
                    playing: false,
                  },
                  {
                    title: "Old Money",
                    author: "TAB",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=452579&width=300&trackid=1880064",
                    url: "/genres/pop/Old_Money_(feat._Jade_Gritty_&amp;_AURC)_-_Tab_(2)",
                    genre: "pop",
                    id: 198,
                    playing: false,
                  },
                  {
                    title: "The Deep",
                    author: "ANITEK",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=454439&width=300&trackid=1884527",
                    url: "/genres/pop/The_Deep_-_Anitek",
                    genre: "pop",
                    id: 199,
                    playing: false,
                  },
                  {
                    title: "Confession_",
                    author: "QUASABE",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=448067&width=300&trackid=1870094",
                    url: "/genres/pop/Confession_-_Quesabe",
                    genre: "pop",
                    id: 200,
                    playing: false,
                  },
                  {
                    title: "Work N' Play",
                    author: "SAMIE BOWER",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=447171&width=300&trackid=1863814",
                    url: "/genres/pop/Work_N'_Play_-_samiebower_(2)",
                    genre: "pop",
                    id: 201,
                    playing: false,
                  },
                  {
                    title: "Lo Fi Chill Hop",
                    author: "LART",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=447552&width=300&trackid=1869045",
                    url: "/genres/pop/Lo_Fi_Chill_Hop_-_Lart",
                    genre: "pop",
                    id: 202,
                    playing: false,
                  },
                ],
              },
              {
                subtitle: "Новинки",
                subsongs: [
                  {
                    title: "B U R N",
                    author: "BESSONN&SA",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=326129&width=300&trackid=1860716",
                    url: "/genres/pop/B_U_R_N_-_bessonnitsa",
                    genre: "pop",
                    id: 203,
                    playing: false,
                  },
                  {
                    title: "MUAKI",
                    author: "LESSKY",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=315701&width=300&trackid=1840801",
                    url: "/genres/pop/MUAKI_-_Lessky",
                    genre: "pop",
                    id: 204,
                    playing: false,
                  },
                  {
                    title: "Chocolate",
                    author: "ALFONSO LUGO",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=253357&width=300&trackid=1823379",
                    url: "/genres/pop/Chocolate_-_Alfonso_Lugo",
                    genre: "pop",
                    id: 205,
                    playing: false,
                  },
                  {
                    title: "Blood",
                    author: "ALL MY FRIENDS HATE ME",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=261326&width=300&trackid=1765024",
                    url: "/genres/pop/Blood_-_All_My_Friends_Hate_Me",
                    genre: "pop",
                    id: 206,
                    playing: false,
                  },
                  {
                    title: "Tiptoe",
                    author: "RIVERS AND LEAVES",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=262021&width=300&trackid=1845306",
                    url: "/genres/pop/Tiptoe_-_Rivers_and_Leafs_(2)",
                    genre: "pop",
                    id: 207,
                    playing: false,
                  },
                  {
                    title: "In My Mind",
                    author: "LAMINAR",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=448427&width=300&trackid=1871070",
                    url: "/genres/pop/In_My_Mind_-_Laminar",
                    genre: "pop",
                    id: 208,
                    playing: false,
                  },
                  {
                    title: "Lover",
                    author: "SQUARE A SAW",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=345413&width=300&trackid=1831809",
                    url: "/genres/pop/Lover_-_Square_a_Saw",
                    genre: "pop",
                    id: 209,
                    playing: false,
                  },
                  {
                    title: "A Moment in Time",
                    author: "GRAHAM COE",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=280815&width=300&trackid=1861493",
                    url: "/genres/pop/A_Moment_in_Time_-_Graham_Coe",
                    genre: "pop",
                    id: 210,
                    playing: false,
                  },
                ],
              },
            ],
          },
          {
            genre: "RADAR",
            title: "RADAR",
            songs: [
              {
                subtitle: "Плейлист RADAR",
                subsongs: [
                  {
                    title: "Alone",
                    author: "COLOR OUT",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=455221&width=300&trackid=1886257",
                    url: "/genres/pop/Alone_-_Color_Out",
                    genre: "pop",
                    id: 195,
                    playing: false,
                  },
                  {
                    title: "Molotov Heart",
                    author: "RADIO NOWHERE",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=452261&width=300&trackid=1879171",
                    url: "/genres/pop/Molotov_Heart_-_radionowhere",
                    genre: "pop",
                    id: 196,
                    playing: false,
                  },
                  {
                    title: "No Rest Or Endless Rest",
                    author: "LISOFV",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=453562&width=300&trackid=1882761",
                    url: "/genres/pop/No_Rest_Or_Endless_Rest_-_Lisofv",
                    genre: "pop",
                    id: 197,
                    playing: false,
                  },
                  {
                    title: "Old Money",
                    author: "TAB",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=452579&width=300&trackid=1880064",
                    url: "/genres/pop/Old_Money_(feat._Jade_Gritty_&amp;_AURC)_-_Tab_(2)",
                    genre: "pop",
                    id: 198,
                    playing: false,
                  },
                  {
                    title: "The Deep",
                    author: "ANITEK",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=454439&width=300&trackid=1884527",
                    url: "/genres/pop/The_Deep_-_Anitek",
                    genre: "pop",
                    id: 199,
                    playing: false,
                  },
                  {
                    title: "Confession_",
                    author: "QUASABE",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=448067&width=300&trackid=1870094",
                    url: "/genres/pop/Confession_-_Quesabe",
                    genre: "pop",
                    id: 200,
                    playing: false,
                  },
                  {
                    title: "Work N' Play",
                    author: "SAMIE BOWER",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=447171&width=300&trackid=1863814",
                    url: "/genres/pop/Work_N'_Play_-_samiebower_(2)",
                    genre: "pop",
                    id: 201,
                    playing: false,
                  },
                  {
                    title: "Lo Fi Chill Hop",
                    author: "LART",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=447552&width=300&trackid=1869045",
                    url: "/genres/pop/Lo_Fi_Chill_Hop_-_Lart",
                    genre: "pop",
                    id: 202,
                    playing: false,
                  },
                ],
              },
              {
                subtitle: "Новинки от RADAR",
                subsongs: [
                  {
                    title: "B U R N",
                    author: "BESSONN&SA",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=326129&width=300&trackid=1860716",
                    url: "/genres/pop/B_U_R_N_-_bessonnitsa",
                    genre: "pop",
                    id: 203,
                    playing: false,
                  },
                  {
                    title: "MUAKI",
                    author: "LESSKY",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=315701&width=300&trackid=1840801",
                    url: "/genres/pop/MUAKI_-_Lessky",
                    genre: "pop",
                    id: 204,
                    playing: false,
                  },
                  {
                    title: "Chocolate",
                    author: "ALFONSO LUGO",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=253357&width=300&trackid=1823379",
                    url: "/genres/pop/Chocolate_-_Alfonso_Lugo",
                    genre: "pop",
                    id: 205,
                    playing: false,
                  },
                  {
                    title: "Blood",
                    author: "ALL MY FRIENDS HATE ME",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=261326&width=300&trackid=1765024",
                    url: "/genres/pop/Blood_-_All_My_Friends_Hate_Me",
                    genre: "pop",
                    id: 206,
                    playing: false,
                  },
                  {
                    title: "Tiptoe",
                    author: "RIVERS AND LEAVES",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=262021&width=300&trackid=1845306",
                    url: "/genres/pop/Tiptoe_-_Rivers_and_Leafs_(2)",
                    genre: "pop",
                    id: 207,
                    playing: false,
                  },
                  {
                    title: "In My Mind",
                    author: "LAMINAR",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=448427&width=300&trackid=1871070",
                    url: "/genres/pop/In_My_Mind_-_Laminar",
                    genre: "pop",
                    id: 208,
                    playing: false,
                  },
                  {
                    title: "Lover",
                    author: "SQUARE A SAW",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=345413&width=300&trackid=1831809",
                    url: "/genres/pop/Lover_-_Square_a_Saw",
                    genre: "pop",
                    id: 209,
                    playing: false,
                  },
                  {
                    title: "A Moment in Time",
                    author: "GRAHAM COE",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=280815&width=300&trackid=1861493",
                    url: "/genres/pop/A_Moment_in_Time_-_Graham_Coe",
                    genre: "pop",
                    id: 210,
                    playing: false,
                  },
                ],
              },
            ],
          },
          {
            genre: "EQUAL",
            title: "EQUAL",
            songs: [
              {
                subtitle: "Плейлист EQUAL",
                subsongs: [
                  {
                    title: "Alone",
                    author: "COLOR OUT",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=455221&width=300&trackid=1886257",
                    url: "/genres/pop/Alone_-_Color_Out",
                    genre: "pop",
                    id: 195,
                    playing: false,
                  },
                  {
                    title: "Molotov Heart",
                    author: "RADIO NOWHERE",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=452261&width=300&trackid=1879171",
                    url: "/genres/pop/Molotov_Heart_-_radionowhere",
                    genre: "pop",
                    id: 196,
                    playing: false,
                  },
                  {
                    title: "No Rest Or Endless Rest",
                    author: "LISOFV",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=453562&width=300&trackid=1882761",
                    url: "/genres/pop/No_Rest_Or_Endless_Rest_-_Lisofv",
                    genre: "pop",
                    id: 197,
                    playing: false,
                  },
                  {
                    title: "Old Money",
                    author: "TAB",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=452579&width=300&trackid=1880064",
                    url: "/genres/pop/Old_Money_(feat._Jade_Gritty_&amp;_AURC)_-_Tab_(2)",
                    genre: "pop",
                    id: 198,
                    playing: false,
                  },
                  {
                    title: "The Deep",
                    author: "ANITEK",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=454439&width=300&trackid=1884527",
                    url: "/genres/pop/The_Deep_-_Anitek",
                    genre: "pop",
                    id: 199,
                    playing: false,
                  },
                  {
                    title: "Confession_",
                    author: "QUASABE",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=448067&width=300&trackid=1870094",
                    url: "/genres/pop/Confession_-_Quesabe",
                    genre: "pop",
                    id: 200,
                    playing: false,
                  },
                  {
                    title: "Work N' Play",
                    author: "SAMIE BOWER",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=447171&width=300&trackid=1863814",
                    url: "/genres/pop/Work_N'_Play_-_samiebower_(2)",
                    genre: "pop",
                    id: 201,
                    playing: false,
                  },
                  {
                    title: "Lo Fi Chill Hop",
                    author: "LART",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=447552&width=300&trackid=1869045",
                    url: "/genres/pop/Lo_Fi_Chill_Hop_-_Lart",
                    genre: "pop",
                    id: 202,
                    playing: false,
                  },
                ],
              },
              {
                subtitle: "Новинки от EQUAL",
                subsongs: [
                  {
                    title: "B U R N",
                    author: "BESSONN&SA",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=326129&width=300&trackid=1860716",
                    url: "/genres/pop/B_U_R_N_-_bessonnitsa",
                    genre: "pop",
                    id: 203,
                    playing: false,
                  },
                  {
                    title: "MUAKI",
                    author: "LESSKY",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=315701&width=300&trackid=1840801",
                    url: "/genres/pop/MUAKI_-_Lessky",
                    genre: "pop",
                    id: 204,
                    playing: false,
                  },
                  {
                    title: "Chocolate",
                    author: "ALFONSO LUGO",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=253357&width=300&trackid=1823379",
                    url: "/genres/pop/Chocolate_-_Alfonso_Lugo",
                    genre: "pop",
                    id: 205,
                    playing: false,
                  },
                  {
                    title: "Blood",
                    author: "ALL MY FRIENDS HATE ME",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=261326&width=300&trackid=1765024",
                    url: "/genres/pop/Blood_-_All_My_Friends_Hate_Me",
                    genre: "pop",
                    id: 206,
                    playing: false,
                  },
                  {
                    title: "Tiptoe",
                    author: "RIVERS AND LEAVES",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=262021&width=300&trackid=1845306",
                    url: "/genres/pop/Tiptoe_-_Rivers_and_Leafs_(2)",
                    genre: "pop",
                    id: 207,
                    playing: false,
                  },
                  {
                    title: "In My Mind",
                    author: "LAMINAR",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=448427&width=300&trackid=1871070",
                    url: "/genres/pop/In_My_Mind_-_Laminar",
                    genre: "pop",
                    id: 208,
                    playing: false,
                  },
                  {
                    title: "Lover",
                    author: "SQUARE A SAW",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=345413&width=300&trackid=1831809",
                    url: "/genres/pop/Lover_-_Square_a_Saw",
                    genre: "pop",
                    id: 209,
                    playing: false,
                  },
                  {
                    title: "A Moment in Time",
                    author: "GRAHAM COE",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=280815&width=300&trackid=1861493",
                    url: "/genres/pop/A_Moment_in_Time_-_Graham_Coe",
                    genre: "pop",
                    id: 210,
                    playing: false,
                  },
                ],
              },
            ],
          },
          {
            genre: "Латино",
            title: "Латино",
            songs: [
              {
                subtitle: "Прослушиваемые",
                subsongs: [
                  {
                    title: "Alone",
                    author: "COLOR OUT",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=455221&width=300&trackid=1886257",
                    url: "/genres/pop/Alone_-_Color_Out",
                    genre: "pop",
                    id: 195,
                    playing: false,
                  },
                  {
                    title: "Molotov Heart",
                    author: "RADIO NOWHERE",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=452261&width=300&trackid=1879171",
                    url: "/genres/pop/Molotov_Heart_-_radionowhere",
                    genre: "pop",
                    id: 196,
                    playing: false,
                  },
                  {
                    title: "No Rest Or Endless Rest",
                    author: "LISOFV",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=453562&width=300&trackid=1882761",
                    url: "/genres/pop/No_Rest_Or_Endless_Rest_-_Lisofv",
                    genre: "pop",
                    id: 197,
                    playing: false,
                  },
                  {
                    title: "Old Money",
                    author: "TAB",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=452579&width=300&trackid=1880064",
                    url: "/genres/pop/Old_Money_(feat._Jade_Gritty_&amp;_AURC)_-_Tab_(2)",
                    genre: "pop",
                    id: 198,
                    playing: false,
                  },
                  {
                    title: "The Deep",
                    author: "ANITEK",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=454439&width=300&trackid=1884527",
                    url: "/genres/pop/The_Deep_-_Anitek",
                    genre: "pop",
                    id: 199,
                    playing: false,
                  },
                  {
                    title: "Confession_",
                    author: "QUASABE",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=448067&width=300&trackid=1870094",
                    url: "/genres/pop/Confession_-_Quesabe",
                    genre: "pop",
                    id: 200,
                    playing: false,
                  },
                  {
                    title: "Work N' Play",
                    author: "SAMIE BOWER",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=447171&width=300&trackid=1863814",
                    url: "/genres/pop/Work_N'_Play_-_samiebower_(2)",
                    genre: "pop",
                    id: 201,
                    playing: false,
                  },
                  {
                    title: "Lo Fi Chill Hop",
                    author: "LART",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=447552&width=300&trackid=1869045",
                    url: "/genres/pop/Lo_Fi_Chill_Hop_-_Lart",
                    genre: "pop",
                    id: 202,
                    playing: false,
                  },
                ],
              },
              {
                subtitle: "Новинки",
                subsongs: [
                  {
                    title: "B U R N",
                    author: "BESSONN&SA",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=326129&width=300&trackid=1860716",
                    url: "/genres/pop/B_U_R_N_-_bessonnitsa",
                    genre: "pop",
                    id: 203,
                    playing: false,
                  },
                  {
                    title: "MUAKI",
                    author: "LESSKY",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=315701&width=300&trackid=1840801",
                    url: "/genres/pop/MUAKI_-_Lessky",
                    genre: "pop",
                    id: 204,
                    playing: false,
                  },
                  {
                    title: "Chocolate",
                    author: "ALFONSO LUGO",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=253357&width=300&trackid=1823379",
                    url: "/genres/pop/Chocolate_-_Alfonso_Lugo",
                    genre: "pop",
                    id: 205,
                    playing: false,
                  },
                  {
                    title: "Blood",
                    author: "ALL MY FRIENDS HATE ME",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=261326&width=300&trackid=1765024",
                    url: "/genres/pop/Blood_-_All_My_Friends_Hate_Me",
                    genre: "pop",
                    id: 206,
                    playing: false,
                  },
                  {
                    title: "Tiptoe",
                    author: "RIVERS AND LEAVES",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=262021&width=300&trackid=1845306",
                    url: "/genres/pop/Tiptoe_-_Rivers_and_Leafs_(2)",
                    genre: "pop",
                    id: 207,
                    playing: false,
                  },
                  {
                    title: "In My Mind",
                    author: "LAMINAR",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=448427&width=300&trackid=1871070",
                    url: "/genres/pop/In_My_Mind_-_Laminar",
                    genre: "pop",
                    id: 208,
                    playing: false,
                  },
                  {
                    title: "Lover",
                    author: "SQUARE A SAW",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=345413&width=300&trackid=1831809",
                    url: "/genres/pop/Lover_-_Square_a_Saw",
                    genre: "pop",
                    id: 209,
                    playing: false,
                  },
                  {
                    title: "A Moment in Time",
                    author: "GRAHAM COE",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=280815&width=300&trackid=1861493",
                    url: "/genres/pop/A_Moment_in_Time_-_Graham_Coe",
                    genre: "pop",
                    id: 210,
                    playing: false,
                  },
                ],
              },
            ],
          },
          {
            genre: "K-POP",
            title: "K-POP",
            songs: [
              {
                subtitle: "Популярные",
                subsongs: [
                  {
                    title: "Alone",
                    author: "COLOR OUT",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=455221&width=300&trackid=1886257",
                    url: "/genres/pop/Alone_-_Color_Out",
                    genre: "pop",
                    id: 195,
                    playing: false,
                  },
                  {
                    title: "Molotov Heart",
                    author: "RADIO NOWHERE",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=452261&width=300&trackid=1879171",
                    url: "/genres/pop/Molotov_Heart_-_radionowhere",
                    genre: "pop",
                    id: 196,
                    playing: false,
                  },
                  {
                    title: "No Rest Or Endless Rest",
                    author: "LISOFV",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=453562&width=300&trackid=1882761",
                    url: "/genres/pop/No_Rest_Or_Endless_Rest_-_Lisofv",
                    genre: "pop",
                    id: 197,
                    playing: false,
                  },
                  {
                    title: "Old Money",
                    author: "TAB",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=452579&width=300&trackid=1880064",
                    url: "/genres/pop/Old_Money_(feat._Jade_Gritty_&amp;_AURC)_-_Tab_(2)",
                    genre: "pop",
                    id: 198,
                    playing: false,
                  },
                  {
                    title: "The Deep",
                    author: "ANITEK",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=454439&width=300&trackid=1884527",
                    url: "/genres/pop/The_Deep_-_Anitek",
                    genre: "pop",
                    id: 199,
                    playing: false,
                  },
                  {
                    title: "Confession_",
                    author: "QUASABE",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=448067&width=300&trackid=1870094",
                    url: "/genres/pop/Confession_-_Quesabe",
                    genre: "pop",
                    id: 200,
                    playing: false,
                  },
                  {
                    title: "Work N' Play",
                    author: "SAMIE BOWER",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=447171&width=300&trackid=1863814",
                    url: "/genres/pop/Work_N'_Play_-_samiebower_(2)",
                    genre: "pop",
                    id: 201,
                    playing: false,
                  },
                  {
                    title: "Lo Fi Chill Hop",
                    author: "LART",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=447552&width=300&trackid=1869045",
                    url: "/genres/pop/Lo_Fi_Chill_Hop_-_Lart",
                    genre: "pop",
                    id: 202,
                    playing: false,
                  },
                ],
              },
              {
                subtitle: "Вся K-POP музыка",
                subsongs: [
                  {
                    title: "B U R N",
                    author: "BESSONN&SA",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=326129&width=300&trackid=1860716",
                    url: "/genres/pop/B_U_R_N_-_bessonnitsa",
                    genre: "pop",
                    id: 203,
                    playing: false,
                  },
                  {
                    title: "MUAKI",
                    author: "LESSKY",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=315701&width=300&trackid=1840801",
                    url: "/genres/pop/MUAKI_-_Lessky",
                    genre: "pop",
                    id: 204,
                    playing: false,
                  },
                  {
                    title: "Chocolate",
                    author: "ALFONSO LUGO",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=253357&width=300&trackid=1823379",
                    url: "/genres/pop/Chocolate_-_Alfonso_Lugo",
                    genre: "pop",
                    id: 205,
                    playing: false,
                  },
                  {
                    title: "Blood",
                    author: "ALL MY FRIENDS HATE ME",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=261326&width=300&trackid=1765024",
                    url: "/genres/pop/Blood_-_All_My_Friends_Hate_Me",
                    genre: "pop",
                    id: 206,
                    playing: false,
                  },
                  {
                    title: "Tiptoe",
                    author: "RIVERS AND LEAVES",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=262021&width=300&trackid=1845306",
                    url: "/genres/pop/Tiptoe_-_Rivers_and_Leafs_(2)",
                    genre: "pop",
                    id: 207,
                    playing: false,
                  },
                  {
                    title: "In My Mind",
                    author: "LAMINAR",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=448427&width=300&trackid=1871070",
                    url: "/genres/pop/In_My_Mind_-_Laminar",
                    genre: "pop",
                    id: 208,
                    playing: false,
                  },
                  {
                    title: "Lover",
                    author: "SQUARE A SAW",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=345413&width=300&trackid=1831809",
                    url: "/genres/pop/Lover_-_Square_a_Saw",
                    genre: "pop",
                    id: 209,
                    playing: false,
                  },
                  {
                    title: "A Moment in Time",
                    author: "GRAHAM COE",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=280815&width=300&trackid=1861493",
                    url: "/genres/pop/A_Moment_in_Time_-_Graham_Coe",
                    genre: "pop",
                    id: 210,
                    playing: false,
                  },
                ],
              },
            ],
          },
          {
            genre: "Релакс",
            title: "Релакс",
            songs: [
              {
                subtitle: "СНГ",
                subsongs: [
                  {
                    title: "Alone",
                    author: "COLOR OUT",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=455221&width=300&trackid=1886257",
                    url: "/genres/pop/Alone_-_Color_Out",
                    genre: "pop",
                    id: 195,
                    playing: false,
                  },
                  {
                    title: "Molotov Heart",
                    author: "RADIO NOWHERE",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=452261&width=300&trackid=1879171",
                    url: "/genres/pop/Molotov_Heart_-_radionowhere",
                    genre: "pop",
                    id: 196,
                    playing: false,
                  },
                  {
                    title: "No Rest Or Endless Rest",
                    author: "LISOFV",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=453562&width=300&trackid=1882761",
                    url: "/genres/pop/No_Rest_Or_Endless_Rest_-_Lisofv",
                    genre: "pop",
                    id: 197,
                    playing: false,
                  },
                  {
                    title: "Old Money",
                    author: "TAB",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=452579&width=300&trackid=1880064",
                    url: "/genres/pop/Old_Money_(feat._Jade_Gritty_&amp;_AURC)_-_Tab_(2)",
                    genre: "pop",
                    id: 198,
                    playing: false,
                  },
                  {
                    title: "The Deep",
                    author: "ANITEK",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=454439&width=300&trackid=1884527",
                    url: "/genres/pop/The_Deep_-_Anitek",
                    genre: "pop",
                    id: 199,
                    playing: false,
                  },
                  {
                    title: "Confession_",
                    author: "QUASABE",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=448067&width=300&trackid=1870094",
                    url: "/genres/pop/Confession_-_Quesabe",
                    genre: "pop",
                    id: 200,
                    playing: false,
                  },
                  {
                    title: "Work N' Play",
                    author: "SAMIE BOWER",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=447171&width=300&trackid=1863814",
                    url: "/genres/pop/Work_N'_Play_-_samiebower_(2)",
                    genre: "pop",
                    id: 201,
                    playing: false,
                  },
                  {
                    title: "Lo Fi Chill Hop",
                    author: "LART",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=447552&width=300&trackid=1869045",
                    url: "/genres/pop/Lo_Fi_Chill_Hop_-_Lart",
                    genre: "pop",
                    id: 202,
                    playing: false,
                  },
                ],
              },
              {
                subtitle: "Европа",
                subsongs: [
                  {
                    title: "B U R N",
                    author: "BESSONN&SA",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=326129&width=300&trackid=1860716",
                    url: "/genres/pop/B_U_R_N_-_bessonnitsa",
                    genre: "pop",
                    id: 203,
                    playing: false,
                  },
                  {
                    title: "MUAKI",
                    author: "LESSKY",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=315701&width=300&trackid=1840801",
                    url: "/genres/pop/MUAKI_-_Lessky",
                    genre: "pop",
                    id: 204,
                    playing: false,
                  },
                  {
                    title: "Chocolate",
                    author: "ALFONSO LUGO",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=253357&width=300&trackid=1823379",
                    url: "/genres/pop/Chocolate_-_Alfonso_Lugo",
                    genre: "pop",
                    id: 205,
                    playing: false,
                  },
                  {
                    title: "Blood",
                    author: "ALL MY FRIENDS HATE ME",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=261326&width=300&trackid=1765024",
                    url: "/genres/pop/Blood_-_All_My_Friends_Hate_Me",
                    genre: "pop",
                    id: 206,
                    playing: false,
                  },
                  {
                    title: "Tiptoe",
                    author: "RIVERS AND LEAVES",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=262021&width=300&trackid=1845306",
                    url: "/genres/pop/Tiptoe_-_Rivers_and_Leafs_(2)",
                    genre: "pop",
                    id: 207,
                    playing: false,
                  },
                  {
                    title: "In My Mind",
                    author: "LAMINAR",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=448427&width=300&trackid=1871070",
                    url: "/genres/pop/In_My_Mind_-_Laminar",
                    genre: "pop",
                    id: 208,
                    playing: false,
                  },
                  {
                    title: "Lover",
                    author: "SQUARE A SAW",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=345413&width=300&trackid=1831809",
                    url: "/genres/pop/Lover_-_Square_a_Saw",
                    genre: "pop",
                    id: 209,
                    playing: false,
                  },
                  {
                    title: "A Moment in Time",
                    author: "GRAHAM COE",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=280815&width=300&trackid=1861493",
                    url: "/genres/pop/A_Moment_in_Time_-_Graham_Coe",
                    genre: "pop",
                    id: 210,
                    playing: false,
                  },
                ],
              },
            ],
          },
          {
            genre: "Рекомендации",
            title: "Рекомендации",
            songs: [
              {
                subtitle: "Что вы лайкаете",
                subsongs: [
                  {
                    title: "Alone",
                    author: "COLOR OUT",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=455221&width=300&trackid=1886257",
                    url: "/genres/pop/Alone_-_Color_Out",
                    genre: "pop",
                    id: 195,
                    playing: false,
                  },
                  {
                    title: "Molotov Heart",
                    author: "RADIO NOWHERE",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=452261&width=300&trackid=1879171",
                    url: "/genres/pop/Molotov_Heart_-_radionowhere",
                    genre: "pop",
                    id: 196,
                    playing: false,
                  },
                  {
                    title: "No Rest Or Endless Rest",
                    author: "LISOFV",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=453562&width=300&trackid=1882761",
                    url: "/genres/pop/No_Rest_Or_Endless_Rest_-_Lisofv",
                    genre: "pop",
                    id: 197,
                    playing: false,
                  },
                  {
                    title: "Old Money",
                    author: "TAB",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=452579&width=300&trackid=1880064",
                    url: "/genres/pop/Old_Money_(feat._Jade_Gritty_&amp;_AURC)_-_Tab_(2)",
                    genre: "pop",
                    id: 198,
                    playing: false,
                  },
                  {
                    title: "The Deep",
                    author: "ANITEK",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=454439&width=300&trackid=1884527",
                    url: "/genres/pop/The_Deep_-_Anitek",
                    genre: "pop",
                    id: 199,
                    playing: false,
                  },
                  {
                    title: "Confession_",
                    author: "QUASABE",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=448067&width=300&trackid=1870094",
                    url: "/genres/pop/Confession_-_Quesabe",
                    genre: "pop",
                    id: 200,
                    playing: false,
                  },
                  {
                    title: "Work N' Play",
                    author: "SAMIE BOWER",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=447171&width=300&trackid=1863814",
                    url: "/genres/pop/Work_N'_Play_-_samiebower_(2)",
                    genre: "pop",
                    id: 201,
                    playing: false,
                  },
                  {
                    title: "Lo Fi Chill Hop",
                    author: "LART",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=447552&width=300&trackid=1869045",
                    url: "/genres/pop/Lo_Fi_Chill_Hop_-_Lart",
                    genre: "pop",
                    id: 202,
                    playing: false,
                  },
                ],
              },
              {
                subtitle: "Что вы слушаете",
                subsongs: [
                  {
                    title: "B U R N",
                    author: "BESSONN&SA",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=326129&width=300&trackid=1860716",
                    url: "/genres/pop/B_U_R_N_-_bessonnitsa",
                    genre: "pop",
                    id: 203,
                    playing: false,
                  },
                  {
                    title: "MUAKI",
                    author: "LESSKY",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=315701&width=300&trackid=1840801",
                    url: "/genres/pop/MUAKI_-_Lessky",
                    genre: "pop",
                    id: 204,
                    playing: false,
                  },
                  {
                    title: "Chocolate",
                    author: "ALFONSO LUGO",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=253357&width=300&trackid=1823379",
                    url: "/genres/pop/Chocolate_-_Alfonso_Lugo",
                    genre: "pop",
                    id: 205,
                    playing: false,
                  },
                  {
                    title: "Blood",
                    author: "ALL MY FRIENDS HATE ME",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=261326&width=300&trackid=1765024",
                    url: "/genres/pop/Blood_-_All_My_Friends_Hate_Me",
                    genre: "pop",
                    id: 206,
                    playing: false,
                  },
                  {
                    title: "Tiptoe",
                    author: "RIVERS AND LEAVES",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=262021&width=300&trackid=1845306",
                    url: "/genres/pop/Tiptoe_-_Rivers_and_Leafs_(2)",
                    genre: "pop",
                    id: 207,
                    playing: false,
                  },
                  {
                    title: "In My Mind",
                    author: "LAMINAR",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=448427&width=300&trackid=1871070",
                    url: "/genres/pop/In_My_Mind_-_Laminar",
                    genre: "pop",
                    id: 208,
                    playing: false,
                  },
                  {
                    title: "Lover",
                    author: "SQUARE A SAW",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=345413&width=300&trackid=1831809",
                    url: "/genres/pop/Lover_-_Square_a_Saw",
                    genre: "pop",
                    id: 209,
                    playing: false,
                  },
                  {
                    title: "A Moment in Time",
                    author: "GRAHAM COE",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=280815&width=300&trackid=1861493",
                    url: "/genres/pop/A_Moment_in_Time_-_Graham_Coe",
                    genre: "pop",
                    id: 210,
                    playing: false,
                  },
                ],
              },
            ],
          },
          {
            genre: "Новые релизы",
            title: "Новые релизы",
            songs: [
              {
                subtitle: "Популярные артисты",
                subsongs: [
                  {
                    title: "Alone",
                    author: "COLOR OUT",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=455221&width=300&trackid=1886257",
                    url: "/genres/pop/Alone_-_Color_Out",
                    genre: "pop",
                    id: 195,
                    playing: false,
                  },
                  {
                    title: "Molotov Heart",
                    author: "RADIO NOWHERE",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=452261&width=300&trackid=1879171",
                    url: "/genres/pop/Molotov_Heart_-_radionowhere",
                    genre: "pop",
                    id: 196,
                    playing: false,
                  },
                  {
                    title: "No Rest Or Endless Rest",
                    author: "LISOFV",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=453562&width=300&trackid=1882761",
                    url: "/genres/pop/No_Rest_Or_Endless_Rest_-_Lisofv",
                    genre: "pop",
                    id: 197,
                    playing: false,
                  },
                  {
                    title: "Old Money",
                    author: "TAB",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=452579&width=300&trackid=1880064",
                    url: "/genres/pop/Old_Money_(feat._Jade_Gritty_&amp;_AURC)_-_Tab_(2)",
                    genre: "pop",
                    id: 198,
                    playing: false,
                  },
                  {
                    title: "The Deep",
                    author: "ANITEK",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=454439&width=300&trackid=1884527",
                    url: "/genres/pop/The_Deep_-_Anitek",
                    genre: "pop",
                    id: 199,
                    playing: false,
                  },
                  {
                    title: "Confession_",
                    author: "QUASABE",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=448067&width=300&trackid=1870094",
                    url: "/genres/pop/Confession_-_Quesabe",
                    genre: "pop",
                    id: 200,
                    playing: false,
                  },
                  {
                    title: "Work N' Play",
                    author: "SAMIE BOWER",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=447171&width=300&trackid=1863814",
                    url: "/genres/pop/Work_N'_Play_-_samiebower_(2)",
                    genre: "pop",
                    id: 201,
                    playing: false,
                  },
                  {
                    title: "Lo Fi Chill Hop",
                    author: "LART",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=447552&width=300&trackid=1869045",
                    url: "/genres/pop/Lo_Fi_Chill_Hop_-_Lart",
                    genre: "pop",
                    id: 202,
                    playing: false,
                  },
                ],
              },
              {
                subtitle: "Сегодня",
                subsongs: [
                  {
                    title: "B U R N",
                    author: "BESSONN&SA",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=326129&width=300&trackid=1860716",
                    url: "/genres/pop/B_U_R_N_-_bessonnitsa",
                    genre: "pop",
                    id: 203,
                    playing: false,
                  },
                  {
                    title: "MUAKI",
                    author: "LESSKY",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=315701&width=300&trackid=1840801",
                    url: "/genres/pop/MUAKI_-_Lessky",
                    genre: "pop",
                    id: 204,
                    playing: false,
                  },
                  {
                    title: "Chocolate",
                    author: "ALFONSO LUGO",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=253357&width=300&trackid=1823379",
                    url: "/genres/pop/Chocolate_-_Alfonso_Lugo",
                    genre: "pop",
                    id: 205,
                    playing: false,
                  },
                  {
                    title: "Blood",
                    author: "ALL MY FRIENDS HATE ME",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=261326&width=300&trackid=1765024",
                    url: "/genres/pop/Blood_-_All_My_Friends_Hate_Me",
                    genre: "pop",
                    id: 206,
                    playing: false,
                  },
                  {
                    title: "Tiptoe",
                    author: "RIVERS AND LEAVES",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=262021&width=300&trackid=1845306",
                    url: "/genres/pop/Tiptoe_-_Rivers_and_Leafs_(2)",
                    genre: "pop",
                    id: 207,
                    playing: false,
                  },
                  {
                    title: "In My Mind",
                    author: "LAMINAR",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=448427&width=300&trackid=1871070",
                    url: "/genres/pop/In_My_Mind_-_Laminar",
                    genre: "pop",
                    id: 208,
                    playing: false,
                  },
                  {
                    title: "Lover",
                    author: "SQUARE A SAW",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=345413&width=300&trackid=1831809",
                    url: "/genres/pop/Lover_-_Square_a_Saw",
                    genre: "pop",
                    id: 209,
                    playing: false,
                  },
                  {
                    title: "A Moment in Time",
                    author: "GRAHAM COE",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=280815&width=300&trackid=1861493",
                    url: "/genres/pop/A_Moment_in_Time_-_Graham_Coe",
                    genre: "pop",
                    id: 210,
                    playing: false,
                  },
                ],
              },
            ],
          },
          {
            genre: "R&B",
            title: "R&B",
            songs: [
              {
                subtitle: "Плейлист R&B",
                subsongs: [
                  {
                    title: "Alone",
                    author: "COLOR OUT",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=455221&width=300&trackid=1886257",
                    url: "/genres/pop/Alone_-_Color_Out",
                    genre: "pop",
                    id: 195,
                    playing: false,
                  },
                  {
                    title: "Molotov Heart",
                    author: "RADIO NOWHERE",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=452261&width=300&trackid=1879171",
                    url: "/genres/pop/Molotov_Heart_-_radionowhere",
                    genre: "pop",
                    id: 196,
                    playing: false,
                  },
                  {
                    title: "No Rest Or Endless Rest",
                    author: "LISOFV",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=453562&width=300&trackid=1882761",
                    url: "/genres/pop/No_Rest_Or_Endless_Rest_-_Lisofv",
                    genre: "pop",
                    id: 197,
                    playing: false,
                  },
                  {
                    title: "Old Money",
                    author: "TAB",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=452579&width=300&trackid=1880064",
                    url: "/genres/pop/Old_Money_(feat._Jade_Gritty_&amp;_AURC)_-_Tab_(2)",
                    genre: "pop",
                    id: 198,
                    playing: false,
                  },
                  {
                    title: "The Deep",
                    author: "ANITEK",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=454439&width=300&trackid=1884527",
                    url: "/genres/pop/The_Deep_-_Anitek",
                    genre: "pop",
                    id: 199,
                    playing: false,
                  },
                  {
                    title: "Confession_",
                    author: "QUASABE",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=448067&width=300&trackid=1870094",
                    url: "/genres/pop/Confession_-_Quesabe",
                    genre: "pop",
                    id: 200,
                    playing: false,
                  },
                  {
                    title: "Work N' Play",
                    author: "SAMIE BOWER",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=447171&width=300&trackid=1863814",
                    url: "/genres/pop/Work_N'_Play_-_samiebower_(2)",
                    genre: "pop",
                    id: 201,
                    playing: false,
                  },
                  {
                    title: "Lo Fi Chill Hop",
                    author: "LART",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=447552&width=300&trackid=1869045",
                    url: "/genres/pop/Lo_Fi_Chill_Hop_-_Lart",
                    genre: "pop",
                    id: 202,
                    playing: false,
                  },
                ],
              },
              {
                subtitle: "Вся R&B музыка",
                subsongs: [
                  {
                    title: "B U R N",
                    author: "BESSONN&SA",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=326129&width=300&trackid=1860716",
                    url: "/genres/pop/B_U_R_N_-_bessonnitsa",
                    genre: "pop",
                    id: 203,
                    playing: false,
                  },
                  {
                    title: "MUAKI",
                    author: "LESSKY",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=315701&width=300&trackid=1840801",
                    url: "/genres/pop/MUAKI_-_Lessky",
                    genre: "pop",
                    id: 204,
                    playing: false,
                  },
                  {
                    title: "Chocolate",
                    author: "ALFONSO LUGO",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=253357&width=300&trackid=1823379",
                    url: "/genres/pop/Chocolate_-_Alfonso_Lugo",
                    genre: "pop",
                    id: 205,
                    playing: false,
                  },
                  {
                    title: "Blood",
                    author: "ALL MY FRIENDS HATE ME",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=261326&width=300&trackid=1765024",
                    url: "/genres/pop/Blood_-_All_My_Friends_Hate_Me",
                    genre: "pop",
                    id: 206,
                    playing: false,
                  },
                  {
                    title: "Tiptoe",
                    author: "RIVERS AND LEAVES",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=262021&width=300&trackid=1845306",
                    url: "/genres/pop/Tiptoe_-_Rivers_and_Leafs_(2)",
                    genre: "pop",
                    id: 207,
                    playing: false,
                  },
                  {
                    title: "In My Mind",
                    author: "LAMINAR",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=448427&width=300&trackid=1871070",
                    url: "/genres/pop/In_My_Mind_-_Laminar",
                    genre: "pop",
                    id: 208,
                    playing: false,
                  },
                  {
                    title: "Lover",
                    author: "SQUARE A SAW",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=345413&width=300&trackid=1831809",
                    url: "/genres/pop/Lover_-_Square_a_Saw",
                    genre: "pop",
                    id: 209,
                    playing: false,
                  },
                  {
                    title: "A Moment in Time",
                    author: "GRAHAM COE",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=280815&width=300&trackid=1861493",
                    url: "/genres/pop/A_Moment_in_Time_-_Graham_Coe",
                    genre: "pop",
                    id: 210,
                    playing: false,
                  },
                ],
              },
            ],
          },
          {
            genre: "Эпохи",
            title: "Эпохи",
            songs: [
              {
                subtitle: "Прошедшая",
                subsongs: [
                  {
                    title: "Alone",
                    author: "COLOR OUT",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=455221&width=300&trackid=1886257",
                    url: "/genres/pop/Alone_-_Color_Out",
                    genre: "pop",
                    id: 195,
                    playing: false,
                  },
                  {
                    title: "Molotov Heart",
                    author: "RADIO NOWHERE",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=452261&width=300&trackid=1879171",
                    url: "/genres/pop/Molotov_Heart_-_radionowhere",
                    genre: "pop",
                    id: 196,
                    playing: false,
                  },
                  {
                    title: "No Rest Or Endless Rest",
                    author: "LISOFV",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=453562&width=300&trackid=1882761",
                    url: "/genres/pop/No_Rest_Or_Endless_Rest_-_Lisofv",
                    genre: "pop",
                    id: 197,
                    playing: false,
                  },
                  {
                    title: "Old Money",
                    author: "TAB",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=452579&width=300&trackid=1880064",
                    url: "/genres/pop/Old_Money_(feat._Jade_Gritty_&amp;_AURC)_-_Tab_(2)",
                    genre: "pop",
                    id: 198,
                    playing: false,
                  },
                  {
                    title: "The Deep",
                    author: "ANITEK",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=454439&width=300&trackid=1884527",
                    url: "/genres/pop/The_Deep_-_Anitek",
                    genre: "pop",
                    id: 199,
                    playing: false,
                  },
                  {
                    title: "Confession_",
                    author: "QUASABE",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=448067&width=300&trackid=1870094",
                    url: "/genres/pop/Confession_-_Quesabe",
                    genre: "pop",
                    id: 200,
                    playing: false,
                  },
                  {
                    title: "Work N' Play",
                    author: "SAMIE BOWER",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=447171&width=300&trackid=1863814",
                    url: "/genres/pop/Work_N'_Play_-_samiebower_(2)",
                    genre: "pop",
                    id: 201,
                    playing: false,
                  },
                  {
                    title: "Lo Fi Chill Hop",
                    author: "LART",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=447552&width=300&trackid=1869045",
                    url: "/genres/pop/Lo_Fi_Chill_Hop_-_Lart",
                    genre: "pop",
                    id: 202,
                    playing: false,
                  },
                ],
              },
              {
                subtitle: "Текущая",
                subsongs: [
                  {
                    title: "B U R N",
                    author: "BESSONN&SA",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=326129&width=300&trackid=1860716",
                    url: "/genres/pop/B_U_R_N_-_bessonnitsa",
                    genre: "pop",
                    id: 203,
                    playing: false,
                  },
                  {
                    title: "MUAKI",
                    author: "LESSKY",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=315701&width=300&trackid=1840801",
                    url: "/genres/pop/MUAKI_-_Lessky",
                    genre: "pop",
                    id: 204,
                    playing: false,
                  },
                  {
                    title: "Chocolate",
                    author: "ALFONSO LUGO",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=253357&width=300&trackid=1823379",
                    url: "/genres/pop/Chocolate_-_Alfonso_Lugo",
                    genre: "pop",
                    id: 205,
                    playing: false,
                  },
                  {
                    title: "Blood",
                    author: "ALL MY FRIENDS HATE ME",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=261326&width=300&trackid=1765024",
                    url: "/genres/pop/Blood_-_All_My_Friends_Hate_Me",
                    genre: "pop",
                    id: 206,
                    playing: false,
                  },
                  {
                    title: "Tiptoe",
                    author: "RIVERS AND LEAVES",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=262021&width=300&trackid=1845306",
                    url: "/genres/pop/Tiptoe_-_Rivers_and_Leafs_(2)",
                    genre: "pop",
                    id: 207,
                    playing: false,
                  },
                  {
                    title: "In My Mind",
                    author: "LAMINAR",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=448427&width=300&trackid=1871070",
                    url: "/genres/pop/In_My_Mind_-_Laminar",
                    genre: "pop",
                    id: 208,
                    playing: false,
                  },
                  {
                    title: "Lover",
                    author: "SQUARE A SAW",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=345413&width=300&trackid=1831809",
                    url: "/genres/pop/Lover_-_Square_a_Saw",
                    genre: "pop",
                    id: 209,
                    playing: false,
                  },
                  {
                    title: "A Moment in Time",
                    author: "GRAHAM COE",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=280815&width=300&trackid=1861493",
                    url: "/genres/pop/A_Moment_in_Time_-_Graham_Coe",
                    genre: "pop",
                    id: 210,
                    playing: false,
                  },
                ],
              },
            ],
          },
          {
            genre: "Disney",
            title: "Disney",
            songs: [
              {
                subtitle: "Популярные",
                subsongs: [
                  {
                    title: "Alone",
                    author: "COLOR OUT",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=455221&width=300&trackid=1886257",
                    url: "/genres/pop/Alone_-_Color_Out",
                    genre: "pop",
                    id: 195,
                    playing: false,
                  },
                  {
                    title: "Molotov Heart",
                    author: "RADIO NOWHERE",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=452261&width=300&trackid=1879171",
                    url: "/genres/pop/Molotov_Heart_-_radionowhere",
                    genre: "pop",
                    id: 196,
                    playing: false,
                  },
                  {
                    title: "No Rest Or Endless Rest",
                    author: "LISOFV",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=453562&width=300&trackid=1882761",
                    url: "/genres/pop/No_Rest_Or_Endless_Rest_-_Lisofv",
                    genre: "pop",
                    id: 197,
                    playing: false,
                  },
                  {
                    title: "Old Money",
                    author: "TAB",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=452579&width=300&trackid=1880064",
                    url: "/genres/pop/Old_Money_(feat._Jade_Gritty_&amp;_AURC)_-_Tab_(2)",
                    genre: "pop",
                    id: 198,
                    playing: false,
                  },
                  {
                    title: "The Deep",
                    author: "ANITEK",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=454439&width=300&trackid=1884527",
                    url: "/genres/pop/The_Deep_-_Anitek",
                    genre: "pop",
                    id: 199,
                    playing: false,
                  },
                  {
                    title: "Confession_",
                    author: "QUASABE",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=448067&width=300&trackid=1870094",
                    url: "/genres/pop/Confession_-_Quesabe",
                    genre: "pop",
                    id: 200,
                    playing: false,
                  },
                  {
                    title: "Work N' Play",
                    author: "SAMIE BOWER",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=447171&width=300&trackid=1863814",
                    url: "/genres/pop/Work_N'_Play_-_samiebower_(2)",
                    genre: "pop",
                    id: 201,
                    playing: false,
                  },
                  {
                    title: "Lo Fi Chill Hop",
                    author: "LART",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=447552&width=300&trackid=1869045",
                    url: "/genres/pop/Lo_Fi_Chill_Hop_-_Lart",
                    genre: "pop",
                    id: 202,
                    playing: false,
                  },
                ],
              },
              {
                subtitle: "Лучшие",
                subsongs: [
                  {
                    title: "B U R N",
                    author: "BESSONN&SA",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=326129&width=300&trackid=1860716",
                    url: "/genres/pop/B_U_R_N_-_bessonnitsa",
                    genre: "pop",
                    id: 203,
                    playing: false,
                  },
                  {
                    title: "MUAKI",
                    author: "LESSKY",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=315701&width=300&trackid=1840801",
                    url: "/genres/pop/MUAKI_-_Lessky",
                    genre: "pop",
                    id: 204,
                    playing: false,
                  },
                  {
                    title: "Chocolate",
                    author: "ALFONSO LUGO",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=253357&width=300&trackid=1823379",
                    url: "/genres/pop/Chocolate_-_Alfonso_Lugo",
                    genre: "pop",
                    id: 205,
                    playing: false,
                  },
                  {
                    title: "Blood",
                    author: "ALL MY FRIENDS HATE ME",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=261326&width=300&trackid=1765024",
                    url: "/genres/pop/Blood_-_All_My_Friends_Hate_Me",
                    genre: "pop",
                    id: 206,
                    playing: false,
                  },
                  {
                    title: "Tiptoe",
                    author: "RIVERS AND LEAVES",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=262021&width=300&trackid=1845306",
                    url: "/genres/pop/Tiptoe_-_Rivers_and_Leafs_(2)",
                    genre: "pop",
                    id: 207,
                    playing: false,
                  },
                  {
                    title: "In My Mind",
                    author: "LAMINAR",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=448427&width=300&trackid=1871070",
                    url: "/genres/pop/In_My_Mind_-_Laminar",
                    genre: "pop",
                    id: 208,
                    playing: false,
                  },
                  {
                    title: "Lover",
                    author: "SQUARE A SAW",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=345413&width=300&trackid=1831809",
                    url: "/genres/pop/Lover_-_Square_a_Saw",
                    genre: "pop",
                    id: 209,
                    playing: false,
                  },
                  {
                    title: "A Moment in Time",
                    author: "GRAHAM COE",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=280815&width=300&trackid=1861493",
                    url: "/genres/pop/A_Moment_in_Time_-_Graham_Coe",
                    genre: "pop",
                    id: 210,
                    playing: false,
                  },
                ],
              },
            ],
          },
          {
            genre: "Фокус",
            title: "Фокус",
            songs: [
              {
                subtitle: "Для работы",
                subsongs: [
                  {
                    title: "Alone",
                    author: "COLOR OUT",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=455221&width=300&trackid=1886257",
                    url: "/genres/pop/Alone_-_Color_Out",
                    genre: "pop",
                    id: 195,
                    playing: false,
                  },
                  {
                    title: "Molotov Heart",
                    author: "RADIO NOWHERE",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=452261&width=300&trackid=1879171",
                    url: "/genres/pop/Molotov_Heart_-_radionowhere",
                    genre: "pop",
                    id: 196,
                    playing: false,
                  },
                  {
                    title: "No Rest Or Endless Rest",
                    author: "LISOFV",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=453562&width=300&trackid=1882761",
                    url: "/genres/pop/No_Rest_Or_Endless_Rest_-_Lisofv",
                    genre: "pop",
                    id: 197,
                    playing: false,
                  },
                  {
                    title: "Old Money",
                    author: "TAB",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=452579&width=300&trackid=1880064",
                    url: "/genres/pop/Old_Money_(feat._Jade_Gritty_&amp;_AURC)_-_Tab_(2)",
                    genre: "pop",
                    id: 198,
                    playing: false,
                  },
                  {
                    title: "The Deep",
                    author: "ANITEK",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=454439&width=300&trackid=1884527",
                    url: "/genres/pop/The_Deep_-_Anitek",
                    genre: "pop",
                    id: 199,
                    playing: false,
                  },
                  {
                    title: "Confession_",
                    author: "QUASABE",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=448067&width=300&trackid=1870094",
                    url: "/genres/pop/Confession_-_Quesabe",
                    genre: "pop",
                    id: 200,
                    playing: false,
                  },
                  {
                    title: "Work N' Play",
                    author: "SAMIE BOWER",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=447171&width=300&trackid=1863814",
                    url: "/genres/pop/Work_N'_Play_-_samiebower_(2)",
                    genre: "pop",
                    id: 201,
                    playing: false,
                  },
                  {
                    title: "Lo Fi Chill Hop",
                    author: "LART",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=447552&width=300&trackid=1869045",
                    url: "/genres/pop/Lo_Fi_Chill_Hop_-_Lart",
                    genre: "pop",
                    id: 202,
                    playing: false,
                  },
                ],
              },
              {
                subtitle: "Для учёбы",
                subsongs: [
                  {
                    title: "B U R N",
                    author: "BESSONN&SA",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=326129&width=300&trackid=1860716",
                    url: "/genres/pop/B_U_R_N_-_bessonnitsa",
                    genre: "pop",
                    id: 203,
                    playing: false,
                  },
                  {
                    title: "MUAKI",
                    author: "LESSKY",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=315701&width=300&trackid=1840801",
                    url: "/genres/pop/MUAKI_-_Lessky",
                    genre: "pop",
                    id: 204,
                    playing: false,
                  },
                  {
                    title: "Chocolate",
                    author: "ALFONSO LUGO",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=253357&width=300&trackid=1823379",
                    url: "/genres/pop/Chocolate_-_Alfonso_Lugo",
                    genre: "pop",
                    id: 205,
                    playing: false,
                  },
                  {
                    title: "Blood",
                    author: "ALL MY FRIENDS HATE ME",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=261326&width=300&trackid=1765024",
                    url: "/genres/pop/Blood_-_All_My_Friends_Hate_Me",
                    genre: "pop",
                    id: 206,
                    playing: false,
                  },
                  {
                    title: "Tiptoe",
                    author: "RIVERS AND LEAVES",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=262021&width=300&trackid=1845306",
                    url: "/genres/pop/Tiptoe_-_Rivers_and_Leafs_(2)",
                    genre: "pop",
                    id: 207,
                    playing: false,
                  },
                  {
                    title: "In My Mind",
                    author: "LAMINAR",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=448427&width=300&trackid=1871070",
                    url: "/genres/pop/In_My_Mind_-_Laminar",
                    genre: "pop",
                    id: 208,
                    playing: false,
                  },
                  {
                    title: "Lover",
                    author: "SQUARE A SAW",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=345413&width=300&trackid=1831809",
                    url: "/genres/pop/Lover_-_Square_a_Saw",
                    genre: "pop",
                    id: 209,
                    playing: false,
                  },
                  {
                    title: "A Moment in Time",
                    author: "GRAHAM COE",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=280815&width=300&trackid=1861493",
                    url: "/genres/pop/A_Moment_in_Time_-_Graham_Coe",
                    genre: "pop",
                    id: 210,
                    playing: false,
                  },
                ],
              },
            ],
          },
          {
            genre: "Соул",
            title: "Соул",
            songs: [
              {
                subtitle: "Новинки соул музыки",
                subsongs: [
                  {
                    title: "Alone",
                    author: "COLOR OUT",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=455221&width=300&trackid=1886257",
                    url: "/genres/pop/Alone_-_Color_Out",
                    genre: "pop",
                    id: 195,
                    playing: false,
                  },
                  {
                    title: "Molotov Heart",
                    author: "RADIO NOWHERE",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=452261&width=300&trackid=1879171",
                    url: "/genres/pop/Molotov_Heart_-_radionowhere",
                    genre: "pop",
                    id: 196,
                    playing: false,
                  },
                  {
                    title: "No Rest Or Endless Rest",
                    author: "LISOFV",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=453562&width=300&trackid=1882761",
                    url: "/genres/pop/No_Rest_Or_Endless_Rest_-_Lisofv",
                    genre: "pop",
                    id: 197,
                    playing: false,
                  },
                  {
                    title: "Old Money",
                    author: "TAB",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=452579&width=300&trackid=1880064",
                    url: "/genres/pop/Old_Money_(feat._Jade_Gritty_&amp;_AURC)_-_Tab_(2)",
                    genre: "pop",
                    id: 198,
                    playing: false,
                  },
                  {
                    title: "The Deep",
                    author: "ANITEK",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=454439&width=300&trackid=1884527",
                    url: "/genres/pop/The_Deep_-_Anitek",
                    genre: "pop",
                    id: 199,
                    playing: false,
                  },
                  {
                    title: "Confession_",
                    author: "QUASABE",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=448067&width=300&trackid=1870094",
                    url: "/genres/pop/Confession_-_Quesabe",
                    genre: "pop",
                    id: 200,
                    playing: false,
                  },
                  {
                    title: "Work N' Play",
                    author: "SAMIE BOWER",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=447171&width=300&trackid=1863814",
                    url: "/genres/pop/Work_N'_Play_-_samiebower_(2)",
                    genre: "pop",
                    id: 201,
                    playing: false,
                  },
                  {
                    title: "Lo Fi Chill Hop",
                    author: "LART",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=447552&width=300&trackid=1869045",
                    url: "/genres/pop/Lo_Fi_Chill_Hop_-_Lart",
                    genre: "pop",
                    id: 202,
                    playing: false,
                  },
                ],
              },
              {
                subtitle: "Вся соул музыка",
                subsongs: [
                  {
                    title: "B U R N",
                    author: "BESSONN&SA",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=326129&width=300&trackid=1860716",
                    url: "/genres/pop/B_U_R_N_-_bessonnitsa",
                    genre: "pop",
                    id: 203,
                    playing: false,
                  },
                  {
                    title: "MUAKI",
                    author: "LESSKY",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=315701&width=300&trackid=1840801",
                    url: "/genres/pop/MUAKI_-_Lessky",
                    genre: "pop",
                    id: 204,
                    playing: false,
                  },
                  {
                    title: "Chocolate",
                    author: "ALFONSO LUGO",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=253357&width=300&trackid=1823379",
                    url: "/genres/pop/Chocolate_-_Alfonso_Lugo",
                    genre: "pop",
                    id: 205,
                    playing: false,
                  },
                  {
                    title: "Blood",
                    author: "ALL MY FRIENDS HATE ME",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=261326&width=300&trackid=1765024",
                    url: "/genres/pop/Blood_-_All_My_Friends_Hate_Me",
                    genre: "pop",
                    id: 206,
                    playing: false,
                  },
                  {
                    title: "Tiptoe",
                    author: "RIVERS AND LEAVES",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=262021&width=300&trackid=1845306",
                    url: "/genres/pop/Tiptoe_-_Rivers_and_Leafs_(2)",
                    genre: "pop",
                    id: 207,
                    playing: false,
                  },
                  {
                    title: "In My Mind",
                    author: "LAMINAR",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=448427&width=300&trackid=1871070",
                    url: "/genres/pop/In_My_Mind_-_Laminar",
                    genre: "pop",
                    id: 208,
                    playing: false,
                  },
                  {
                    title: "Lover",
                    author: "SQUARE A SAW",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=345413&width=300&trackid=1831809",
                    url: "/genres/pop/Lover_-_Square_a_Saw",
                    genre: "pop",
                    id: 209,
                    playing: false,
                  },
                  {
                    title: "A Moment in Time",
                    author: "GRAHAM COE",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=280815&width=300&trackid=1861493",
                    url: "/genres/pop/A_Moment_in_Time_-_Graham_Coe",
                    genre: "pop",
                    id: 210,
                    playing: false,
                  },
                ],
              },
            ],
          },
          {
            genre: "Чарты",
            title: "Чарты",
            songs: [
              {
                subtitle: "Топ 5",
                subsongs: [
                  {
                    title: "Alone",
                    author: "COLOR OUT",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=455221&width=300&trackid=1886257",
                    url: "/genres/pop/Alone_-_Color_Out",
                    genre: "pop",
                    id: 195,
                    playing: false,
                  },
                  {
                    title: "Molotov Heart",
                    author: "RADIO NOWHERE",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=452261&width=300&trackid=1879171",
                    url: "/genres/pop/Molotov_Heart_-_radionowhere",
                    genre: "pop",
                    id: 196,
                    playing: false,
                  },
                  {
                    title: "No Rest Or Endless Rest",
                    author: "LISOFV",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=453562&width=300&trackid=1882761",
                    url: "/genres/pop/No_Rest_Or_Endless_Rest_-_Lisofv",
                    genre: "pop",
                    id: 197,
                    playing: false,
                  },
                  {
                    title: "Old Money",
                    author: "TAB",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=452579&width=300&trackid=1880064",
                    url: "/genres/pop/Old_Money_(feat._Jade_Gritty_&amp;_AURC)_-_Tab_(2)",
                    genre: "pop",
                    id: 198,
                    playing: false,
                  },
                  {
                    title: "The Deep",
                    author: "ANITEK",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=454439&width=300&trackid=1884527",
                    url: "/genres/pop/The_Deep_-_Anitek",
                    genre: "pop",
                    id: 199,
                    playing: false,
                  },
                  {
                    title: "Confession_",
                    author: "QUASABE",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=448067&width=300&trackid=1870094",
                    url: "/genres/pop/Confession_-_Quesabe",
                    genre: "pop",
                    id: 200,
                    playing: false,
                  },
                  {
                    title: "Work N' Play",
                    author: "SAMIE BOWER",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=447171&width=300&trackid=1863814",
                    url: "/genres/pop/Work_N'_Play_-_samiebower_(2)",
                    genre: "pop",
                    id: 201,
                    playing: false,
                  },
                  {
                    title: "Lo Fi Chill Hop",
                    author: "LART",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=447552&width=300&trackid=1869045",
                    url: "/genres/pop/Lo_Fi_Chill_Hop_-_Lart",
                    genre: "pop",
                    id: 202,
                    playing: false,
                  },
                ],
              },
              {
                subtitle: "Все песни с чартов",
                subsongs: [
                  {
                    title: "B U R N",
                    author: "BESSONN&SA",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=326129&width=300&trackid=1860716",
                    url: "/genres/pop/B_U_R_N_-_bessonnitsa",
                    genre: "pop",
                    id: 203,
                    playing: false,
                  },
                  {
                    title: "MUAKI",
                    author: "LESSKY",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=315701&width=300&trackid=1840801",
                    url: "/genres/pop/MUAKI_-_Lessky",
                    genre: "pop",
                    id: 204,
                    playing: false,
                  },
                  {
                    title: "Chocolate",
                    author: "ALFONSO LUGO",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=253357&width=300&trackid=1823379",
                    url: "/genres/pop/Chocolate_-_Alfonso_Lugo",
                    genre: "pop",
                    id: 205,
                    playing: false,
                  },
                  {
                    title: "Blood",
                    author: "ALL MY FRIENDS HATE ME",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=261326&width=300&trackid=1765024",
                    url: "/genres/pop/Blood_-_All_My_Friends_Hate_Me",
                    genre: "pop",
                    id: 206,
                    playing: false,
                  },
                  {
                    title: "Tiptoe",
                    author: "RIVERS AND LEAVES",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=262021&width=300&trackid=1845306",
                    url: "/genres/pop/Tiptoe_-_Rivers_and_Leafs_(2)",
                    genre: "pop",
                    id: 207,
                    playing: false,
                  },
                  {
                    title: "In My Mind",
                    author: "LAMINAR",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=448427&width=300&trackid=1871070",
                    url: "/genres/pop/In_My_Mind_-_Laminar",
                    genre: "pop",
                    id: 208,
                    playing: false,
                  },
                  {
                    title: "Lover",
                    author: "SQUARE A SAW",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=345413&width=300&trackid=1831809",
                    url: "/genres/pop/Lover_-_Square_a_Saw",
                    genre: "pop",
                    id: 209,
                    playing: false,
                  },
                  {
                    title: "A Moment in Time",
                    author: "GRAHAM COE",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=280815&width=300&trackid=1861493",
                    url: "/genres/pop/A_Moment_in_Time_-_Graham_Coe",
                    genre: "pop",
                    id: 210,
                    playing: false,
                  },
                ],
              },
            ],
          },
          {
            genre: "Настроение",
            title: "Настроение",
            songs: [
              {
                subtitle: "Когда грустно",
                subsongs: [
                  {
                    title: "Alone",
                    author: "COLOR OUT",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=455221&width=300&trackid=1886257",
                    url: "/genres/pop/Alone_-_Color_Out",
                    genre: "pop",
                    id: 195,
                    playing: false,
                  },
                  {
                    title: "Molotov Heart",
                    author: "RADIO NOWHERE",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=452261&width=300&trackid=1879171",
                    url: "/genres/pop/Molotov_Heart_-_radionowhere",
                    genre: "pop",
                    id: 196,
                    playing: false,
                  },
                  {
                    title: "No Rest Or Endless Rest",
                    author: "LISOFV",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=453562&width=300&trackid=1882761",
                    url: "/genres/pop/No_Rest_Or_Endless_Rest_-_Lisofv",
                    genre: "pop",
                    id: 197,
                    playing: false,
                  },
                  {
                    title: "Old Money",
                    author: "TAB",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=452579&width=300&trackid=1880064",
                    url: "/genres/pop/Old_Money_(feat._Jade_Gritty_&amp;_AURC)_-_Tab_(2)",
                    genre: "pop",
                    id: 198,
                    playing: false,
                  },
                  {
                    title: "The Deep",
                    author: "ANITEK",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=454439&width=300&trackid=1884527",
                    url: "/genres/pop/The_Deep_-_Anitek",
                    genre: "pop",
                    id: 199,
                    playing: false,
                  },
                  {
                    title: "Confession_",
                    author: "QUASABE",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=448067&width=300&trackid=1870094",
                    url: "/genres/pop/Confession_-_Quesabe",
                    genre: "pop",
                    id: 200,
                    playing: false,
                  },
                  {
                    title: "Work N' Play",
                    author: "SAMIE BOWER",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=447171&width=300&trackid=1863814",
                    url: "/genres/pop/Work_N'_Play_-_samiebower_(2)",
                    genre: "pop",
                    id: 201,
                    playing: false,
                  },
                  {
                    title: "Lo Fi Chill Hop",
                    author: "LART",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=447552&width=300&trackid=1869045",
                    url: "/genres/pop/Lo_Fi_Chill_Hop_-_Lart",
                    genre: "pop",
                    id: 202,
                    playing: false,
                  },
                ],
              },
              {
                subtitle: "Для хорошего настроения",
                subsongs: [
                  {
                    title: "B U R N",
                    author: "BESSONN&SA",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=326129&width=300&trackid=1860716",
                    url: "/genres/pop/B_U_R_N_-_bessonnitsa",
                    genre: "pop",
                    id: 203,
                    playing: false,
                  },
                  {
                    title: "MUAKI",
                    author: "LESSKY",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=315701&width=300&trackid=1840801",
                    url: "/genres/pop/MUAKI_-_Lessky",
                    genre: "pop",
                    id: 204,
                    playing: false,
                  },
                  {
                    title: "Chocolate",
                    author: "ALFONSO LUGO",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=253357&width=300&trackid=1823379",
                    url: "/genres/pop/Chocolate_-_Alfonso_Lugo",
                    genre: "pop",
                    id: 205,
                    playing: false,
                  },
                  {
                    title: "Blood",
                    author: "ALL MY FRIENDS HATE ME",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=261326&width=300&trackid=1765024",
                    url: "/genres/pop/Blood_-_All_My_Friends_Hate_Me",
                    genre: "pop",
                    id: 206,
                    playing: false,
                  },
                  {
                    title: "Tiptoe",
                    author: "RIVERS AND LEAVES",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=262021&width=300&trackid=1845306",
                    url: "/genres/pop/Tiptoe_-_Rivers_and_Leafs_(2)",
                    genre: "pop",
                    id: 207,
                    playing: false,
                  },
                  {
                    title: "In My Mind",
                    author: "LAMINAR",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=448427&width=300&trackid=1871070",
                    url: "/genres/pop/In_My_Mind_-_Laminar",
                    genre: "pop",
                    id: 208,
                    playing: false,
                  },
                  {
                    title: "Lover",
                    author: "SQUARE A SAW",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=345413&width=300&trackid=1831809",
                    url: "/genres/pop/Lover_-_Square_a_Saw",
                    genre: "pop",
                    id: 209,
                    playing: false,
                  },
                  {
                    title: "A Moment in Time",
                    author: "GRAHAM COE",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=280815&width=300&trackid=1861493",
                    url: "/genres/pop/A_Moment_in_Time_-_Graham_Coe",
                    genre: "pop",
                    id: 210,
                    playing: false,
                  },
                ],
              },
            ],
          },
          {
            genre: "Панк",
            title: "Панк",
            songs: [
              {
                subtitle: "Новинки",
                subsongs: [
                  {
                    title: "Alone",
                    author: "COLOR OUT",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=455221&width=300&trackid=1886257",
                    url: "/genres/pop/Alone_-_Color_Out",
                    genre: "pop",
                    id: 195,
                    playing: false,
                  },
                  {
                    title: "Molotov Heart",
                    author: "RADIO NOWHERE",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=452261&width=300&trackid=1879171",
                    url: "/genres/pop/Molotov_Heart_-_radionowhere",
                    genre: "pop",
                    id: 196,
                    playing: false,
                  },
                  {
                    title: "No Rest Or Endless Rest",
                    author: "LISOFV",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=453562&width=300&trackid=1882761",
                    url: "/genres/pop/No_Rest_Or_Endless_Rest_-_Lisofv",
                    genre: "pop",
                    id: 197,
                    playing: false,
                  },
                  {
                    title: "Old Money",
                    author: "TAB",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=452579&width=300&trackid=1880064",
                    url: "/genres/pop/Old_Money_(feat._Jade_Gritty_&amp;_AURC)_-_Tab_(2)",
                    genre: "pop",
                    id: 198,
                    playing: false,
                  },
                  {
                    title: "The Deep",
                    author: "ANITEK",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=454439&width=300&trackid=1884527",
                    url: "/genres/pop/The_Deep_-_Anitek",
                    genre: "pop",
                    id: 199,
                    playing: false,
                  },
                  {
                    title: "Confession_",
                    author: "QUASABE",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=448067&width=300&trackid=1870094",
                    url: "/genres/pop/Confession_-_Quesabe",
                    genre: "pop",
                    id: 200,
                    playing: false,
                  },
                  {
                    title: "Work N' Play",
                    author: "SAMIE BOWER",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=447171&width=300&trackid=1863814",
                    url: "/genres/pop/Work_N'_Play_-_samiebower_(2)",
                    genre: "pop",
                    id: 201,
                    playing: false,
                  },
                  {
                    title: "Lo Fi Chill Hop",
                    author: "LART",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=447552&width=300&trackid=1869045",
                    url: "/genres/pop/Lo_Fi_Chill_Hop_-_Lart",
                    genre: "pop",
                    id: 202,
                    playing: false,
                  },
                ],
              },
              {
                subtitle: "Популярные",
                subsongs: [
                  {
                    title: "B U R N",
                    author: "BESSONN&SA",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=326129&width=300&trackid=1860716",
                    url: "/genres/pop/B_U_R_N_-_bessonnitsa",
                    genre: "pop",
                    id: 203,
                    playing: false,
                  },
                  {
                    title: "MUAKI",
                    author: "LESSKY",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=315701&width=300&trackid=1840801",
                    url: "/genres/pop/MUAKI_-_Lessky",
                    genre: "pop",
                    id: 204,
                    playing: false,
                  },
                  {
                    title: "Chocolate",
                    author: "ALFONSO LUGO",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=253357&width=300&trackid=1823379",
                    url: "/genres/pop/Chocolate_-_Alfonso_Lugo",
                    genre: "pop",
                    id: 205,
                    playing: false,
                  },
                  {
                    title: "Blood",
                    author: "ALL MY FRIENDS HATE ME",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=261326&width=300&trackid=1765024",
                    url: "/genres/pop/Blood_-_All_My_Friends_Hate_Me",
                    genre: "pop",
                    id: 206,
                    playing: false,
                  },
                  {
                    title: "Tiptoe",
                    author: "RIVERS AND LEAVES",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=262021&width=300&trackid=1845306",
                    url: "/genres/pop/Tiptoe_-_Rivers_and_Leafs_(2)",
                    genre: "pop",
                    id: 207,
                    playing: false,
                  },
                  {
                    title: "In My Mind",
                    author: "LAMINAR",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=448427&width=300&trackid=1871070",
                    url: "/genres/pop/In_My_Mind_-_Laminar",
                    genre: "pop",
                    id: 208,
                    playing: false,
                  },
                  {
                    title: "Lover",
                    author: "SQUARE A SAW",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=345413&width=300&trackid=1831809",
                    url: "/genres/pop/Lover_-_Square_a_Saw",
                    genre: "pop",
                    id: 209,
                    playing: false,
                  },
                  {
                    title: "A Moment in Time",
                    author: "GRAHAM COE",
                    cover:
                      "https://usercontent.jamendo.com/?type=album&id=280815&width=300&trackid=1861493",
                    url: "/genres/pop/A_Moment_in_Time_-_Graham_Coe",
                    genre: "pop",
                    id: 210,
                    playing: false,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  actions: {
    callTrackUpdation(ctx, track) {
      ctx.commit("updateTrack", track);
    },
    callRefsUpdation(ctx, refs) {
      ctx.commit("updateRefs", refs);
    },
    callRecentUpdation(ctx, track) {
      let props = { ...track };
      ctx.commit("updateRecent", props);
    },
    callRepeatUpdation(ctx, prop) {
      ctx.commit("updateRepeat", prop);
    },
    callAudioUpdation(ctx, prop) {
      ctx.commit("updateAudio", prop);
    },
    callLikedUpdation({ commit, state }, prop) {
      // const likedFromLC = JSON.parse(localStorage.getItem("liked")) || [];
      let counter = 0;

      state.liked.forEach((item) => {
        if (item?.id === prop.id) {
          counter++;
        }
      });

      if (!counter) {
        commit("updateLiked", prop);
      }
    },
    callLikedFiltration({ commit }, prop) {
      commit("filterLiked", prop);
    },
    callPlaylistsUpdation({ commit }, prop) {
      commit("updatePlaylist", prop);
    },
    callPlaylistsFiltration({ commit }, prop) {
      commit("filterPlaylists", prop);
    },
    callCurrentPlaylistUpdation({ commit }, prop) {
      commit("updateCurrentPlaylist", prop);
    },
  },
  mutations: {
    updateTrack(state, prop) {
      localStorage.setItem("currentTrack", JSON.stringify(prop));
      state.currentTrack = prop;
    },
    updateRefs(state, prop) {
      localStorage.setItem("allRefs", JSON.stringify(prop));
      state.allRefs = { ...state.allRefs, ...prop };
    },
    updateRepeat(state, prop) {
      state.onRepeat = !prop;
    },
    updateLiked(state, prop) {
      prop.playing = false;
      prop.hovered = false;
      state.liked.push(prop);
      localStorage.setItem("liked", JSON.stringify(state.liked));
    },
    filterLiked(state, prop) {
      state.liked = state.liked.filter((i) => i?.id !== prop.id);
      localStorage.setItem("liked", JSON.stringify(state.liked));
    },
    updatePlaylist(state, prop) {
      state.playlists.push(prop);
    },
    filterPlaylists(state, prop) {
      state.playlists = state.playlists.filter((i) => i.id !== prop.id);
    },
    updateCurrentPlaylist(state, prop) {
      state.currentPlaylist = prop;
    },
  },
  getters: {
    getAllTracks(state) {
      return state.musics;
    },
    getMetalTracks(state) {
      return state.musics
        .filter((m) => m.type === "metal")[0]
        .tracks.slice(0, 8);
    },
    getFreshTracks(state) {
      return state.musics.filter((m) => m.type === "fresh")[0].tracks;
    },
    getPhonkTracks(state) {
      return state.musics.filter((m) => m.type === "phonk")[0].tracks;
    },
    getPopularTracks(state) {
      return state.musics.filter((m) => m.type === "popular")[0].tracks;
    },
    getCurrentTrack(state) {
      return state.currentTrack;
    },
    getAllRefs(state) {
      return state.allRefs;
    },
    getAllMixes(state) {
      return state.musics.filter((m) => m.type === "mix")[0].mixs;
    },
    getMix1(state) {
      return state.musics.filter((m) => m.type === "mix")[0].mixs[0];
    },
    getMix2(state) {
      return state.musics.filter((m) => m.type === "mix")[0].mixs[1];
    },
    getRecentlyPlayedSongs(state) {
      return state.recentlyPlayed;
    },
    getAllGenres(state) {
      return state.musics.filter((m) => m.type === "genres")[0].genres;
    },
    getLikedSongs(state) {
      return state.liked;
    },
    getPlaylists(state) {
      return state.playlists;
    },
  },
});
