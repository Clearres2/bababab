   let shuffledFavorites = [];
let shuffledAlbums = [];
let shuffledAlbumTracks = {}

function parseDate(str) {
  const [day, month, year] = str.split('.');
  return new Date(`${year}-${month}-${day}`);
}

    const albomsT = [
      {
      titleDate: '09.12.2025',title: '1 ТГК МУЗ-ЧАТ',
      album: [
          { titleDate: '09.12.2011', title: 'Городской маршрут', url: 'https://nextjs-boilerplate-lemon-pi-53.vercel.app/Русская%20душа%20-%20Городской%20маршрут.mp3' },
          { titleDate: '09.12.2012', title: 'Неважно', url: 'https://nextjs-boilerplate-lemon-pi-53.vercel.app/tagmp3_2.-Русская-душа---Неважно.mp3' },
          { titleDate: '09.12.2012', title: 'Здесь лапы у ели', url: 'https://nextjs-boilerplate-lemon-pi-53.vercel.app/tagmp3_3.-Русская-душа---Здесь-лапы-у-ели.mp3' },
          { titleDate: '09.12.2023', title: 'Булгаков', url: 'https://nextjs-boilerplate-lemon-pi-53.vercel.app/tagmp3_4.-Русская-душа---Булгаков.mp3' },
          { titleDate: '09.12.2012', title: 'В чем сила, брат', url: 'https://nextjs-boilerplate-lemon-pi-53.vercel.app/5.%20Русская%20душа%20-%20В%20чем%20сила,%20брат.mp3' },
          { titleDate: '09.12.2012', title: 'Дерзкий вечер', url: 'https://nextjs-boilerplate-lemon-pi-53.vercel.app/tagmp3_6.-Русская-душа---Дерзкий-вечер.mp3' },
          { titleDate: '09.12.2012', title: 'Пушкин', url: 'https://nextjs-boilerplate-lemon-pi-53.vercel.app/tagmp3_7.-Русская-душа---Пушкин.mp3' },
          { titleDate: '09.12.2024', title: 'Санкции', url: 'https://nextjs-boilerplate-lemon-pi-53.vercel.app/tagmp3_8_Русская-душа_Новости_смотрю_и_плачу.mp3' },
          { titleDate: '09.12.2012', title: 'Здесь лапы у ели 2', url: 'https://nextjs-boilerplate-lemon-pi-53.vercel.app/tagmp3_9.-Русская-душа---Здесь-лапы-у-ели.mp3' },
        ]
      },
      {
      titleDate: '09.12.2024', title: '2 ТГК МУЗ-ЧАТ',
      album: [
        { titleDate: '09.12.2025',title: 'Очень', url: 'https://nextjs-boilerplate-lemon-pi-53.vercel.app/2.%20Русская%20душа%20-%20Очень.wav--online-audio-convert.com%20(1).mp3' },
        { titleDate: '09.12.2000',title: 'Воронье', url: 'https://nextjs-boilerplate-lemon-pi-53.vercel.app/воронье.mp3' },
        { titleDate: '09.12.2012',title: 'Тишина', url: 'https://nextjs-boilerplate-lemon-pi-53.vercel.app/тишина.mp3' },
        { titleDate: '09.12.2024',title: 'Туман', url: 'https://nextjs-boilerplate-lemon-pi-53.vercel.app/5.%20Русская%20душа%20-%20Туман.wav--online-audio-convert.com.mp3' },
        { titleDate: '09.12.2024',title: 'Дети 20-го века', url: 'https://nextjs-boilerplate-lemon-pi-53.vercel.app/6.%20Русская%20душа%20-%20Дети%2020-го%20века.wav--online-audio-convert.com.mp3' },
        { titleDate: '09.12.2024',title: 'Застава', url: 'https://nextjs-boilerplate-lemon-pi-53.vercel.app/7.%20Русская%20душа%20-%20Застава.wav--online-audio-convert.com.mp3' },
        { titleDate: '09.12.2024',title: 'Великая держава', url: 'https://nextjs-boilerplate-lemon-pi-53.vercel.app/1. Русская душа - Великая держава.mp3' },
      ]
      },
      {
      titleDate: '09.12.2012',title: '3 ТГК МУЗ-ЧАТ',
      album: [
        { titleDate: '09.12.2023',title: 'Гафт', url: 'https://nextjs-boil-delta.vercel.app/гафт.mp3' },
        { titleDate: '09.12.2024',title: 'Читаю строки ветхого завета', url: 'https://nextjs-boil-delta.vercel.app/Читаю-строки-ветхого-завета_.mp3' },
        { titleDate: '09.12.2024',title: 'Женщина до утра', url: 'https://nextjs-boil-delta.vercel.app/женщина%20до%20утра.mp3' },
        { titleDate: '09.12.2024',title: 'Одесса', url: 'https://nextjs-boil-delta.vercel.app/4.%20Русская%20душа%20-%20Одесса%20(1).mp3' },
        { titleDate: '09.12.2024',title: 'Трепещет сердце от безумства', url: 'https://nextjs-boil-delta.vercel.app/5_Русская_душа_Трепещет_сердце_от_безумства.mp3' },
        { titleDate: '09.12.2024',title: 'Мой город', url: 'https://nextjs-boil-delta.vercel.app/мой-город.mp3' },
        { titleDate: '09.12.2024',title: 'За деньги', url: 'https://nextjs-boil-delta.vercel.app/за-деньги.mp3' },
        { titleDate: '09.12.2024',title: 'Не стыдно', url: 'https://nextjs-boil-delta.vercel.app/Не-стыдно.mp3' },
      ]
      },
      {
      titleDate: '09.12.2014',title: 'ГЕРОИ В МУЗЫКЕ',
      album: [
        { titleDate: '09.12.2024',title: 'Блокада Ленинграда', url: 'https://nextjs-boil-delta.vercel.app/tagmp3_Блокада-Ленинграда-(2).mp3' },
        { titleDate: '09.12.2024',title: 'Крестов молчания', url: 'https://nextjs-boilerplate-i6pd.vercel.app/tagmp3_Русская-душа---Крестов-молчания%20(1).mp3' },
        { titleDate: '09.12.2024',title: 'Вагнера', url: 'https://nextjs-boil-delta.vercel.app/tagmp3_РД-Вагнера.mp3' },
        { titleDate: '09.12.2024',title: 'Без страха и упрека четвертной', url: 'https://nextjs-boil-delta.vercel.app/Без%20страха%20и%20упрёка%20%20четвертной,.mp3' },
        { titleDate: '09.12.2024',title: 'Стрелок', url: 'https://nextjs-boil-delta.vercel.app/tagmp3_стрелок.mp3' },
        { titleDate: '09.12.2024',title: 'Ну, здравствуй, мама!', url: 'https://nextjs-boil-delta.vercel.app/Ну,%20здравствуй,%20мама!.mp3' },
        { titleDate: '09.12.2024',title: 'Мать', url: 'https://nextjs-boil-delta.vercel.app/tagmp3_Русская-душа---мать.mp3' },
        { titleDate: '09.12.2024',title: 'Там, где маки лютуют', url: 'https://nextjs-boil-delta.vercel.app/Там, где маки лютуют.mp3' },
        { titleDate: '09.12.2024',title: 'Как заставить молчать', url: 'https://nextjs-boil-delta.vercel.app/3_Русская_Душа_Как_заставить_молчать.mp3' },
        { titleDate: '09.12.2024',title: 'Горит свеча', url: 'https://nextjs-boil-delta.vercel.app/tagmp3_Свеча-(2).mp3' },
      ]

      },
      {
        titleDate: '09.12.2004',title: 'ЛИРИКА ДУШИ',
        album: [
          { titleDate: '01.12.2024',title: 'Романс', url: 'https://nextjs-boil-delta.vercel.app/Русская%20душа%20-%20Романс%20.mp3' },
          { titleDate: '02.12.2024',title: 'Венчание', url: 'https://nextjs-boil-delta.vercel.app/Венчание%20(4).mp3' },
          { titleDate: '03.12.2024',title: 'Случайно встретились глазами', url: 'https://nextjs-boil-delta.vercel.app/tagmp3_Случайно-встретились-глазами.mp3' },
          { titleDate: '04.12.2024',title: 'Люди бывают разными', url: 'https://nextjs-boil-delta.vercel.app/tagmp3_Русская-душа-Люди-бывают-разные.mp3' },
          { titleDate: '06.12.2024',title: 'Брат', url: 'https://nextjs-boil-delta.vercel.app/tagmp3_Брат-версия.mp3' },
          { titleDate: '09.12.2024',title: 'Недописанный стих', url: 'https://nextjs-boil-delta.vercel.app/tagmp3_Русская_душа_Недописанный_стих_.mp3' },
          { titleDate: '10.12.2024',title: 'Испачканной карандашом', url: 'https://nextjs-boil-delta.vercel.app/tagmp3_Русская_душа_Испачканной_карандашом_.mp3' },
          { titleDate: '12.12.2024',title: 'Одни и те же имена', url: 'https://nextjs-boil-delta.vercel.app/tagmp3_Русская-душа-–-Одни-и-те-же-имена.mp3' },
          { titleDate: '13.12.2024',title: 'Пройдусь по парку', url: 'https://nextjs-boil-delta.vercel.app/tagmp3_Русская-душа---Пройдусь-по-парку.mp3' },
        ]
      },
      {
      titleDate: '09.12.2024',title: 'ПОБЕДНЫЙ МАЙ',
      album: [
        { titleDate: '01.12.2024',title: 'Слезы кончились', url: 'https://nextjs-boil-delta.vercel.app/Слезы%20кончились.mp3' },
        { titleDate: '02.12.2024',title: 'Не прячь, слезу мой друг', url: 'https://nextjs-boil-delta.vercel.app/Не прячь, мой друг слезу.mp3' },
        { titleDate: '03.12.2024',title: 'Там на обычном и завьюженном холме', url: 'https://nextjs-boil-delta.vercel.app/Там_на_обычном_и_завьюженном_холме.mp3' },
        { titleDate: '04.12.2024',title: 'Вечная память героям', url: 'https://nextjs-boil-delta.vercel.app/Вечная%20память%20героям!%20(2).mp3' },
        { titleDate: '05.12.2024',title: 'Вы слышите?', url: 'https://nextjs-boil-delta.vercel.app/cromulentarrangements461%20–%20Вы%20слышите_.mp3' },
        { titleDate: '06.12.2024',title: 'Уже не стало ветеранов', url: 'https://nextjs-boil-delta.vercel.app/Уже%20не%20стало%20ветеранов.mp3' },
        { titleDate: '07.12.2024',title: 'Мы часто о героях говорим', url: 'https://nextjs-boil-delta.vercel.app/Мы%20часто%20о%20героях%20говорим%20(2).mp3' },
        { titleDate: '08.12.2024',title: 'Война дошла до Сталинграда', url: 'https://nextjs-boil-delta.vercel.app/Война%20дошла%20до%20Сталинграда%20(2).mp3' },
        { titleDate: '09.12.2024',title: 'На выжженной земле', url: 'https://nextjs-boil-delta.vercel.app/На выжженной земле.mp3' },
        { titleDate: '10.12.2024',title: 'Девятый десяток', url: 'https://nextjs-boil-delta.vercel.app/Девятый_десяток_для_вечности_миг_1.mp3' },        
      ]
      },
      {
      titleDate: '09.12.2024',title: 'ШАНСОНЬЕ',
      album: [
        { titleDate: '09.01.2024', title: 'Путник', url: 'https://nextjs-boil-delta.vercel.app/tagmp3_Русская-душа---Путник.mp3' },
          { titleDate: '09.01.2024', titleNumber: '105', title: 'Ну что пришла', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Ну что пришла.mp3' },
        { titleDate: '09.01.2024', titleNumber: '106', title: 'Остановите землю', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Остановите земле .mp3' },
        { titleDate: '09.01.2024', titleNumber: '107', title: 'Бродяге', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Бродяга.mp3' },
    { titleDate: '09.01.2024', titleNumber: '108', title: 'Ну что застыл', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Ну что застыл.mp3' },
    { titleDate: '09.01.2024', titleNumber: '109', title: 'Налетает грусть', url: 'https://nextjs-boil-delta.vercel.app/' },
    { titleDate: '09.01.2024', titleNumber: '110', title: 'Мой мир таков, каким он мне открылся', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Мой мир таков, каким он мне открылся .mp3' },
    { titleDate: '09.01.2024', titleNumber: '111', title: 'Плачу два счетчика', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Плачу два счетчика.mp3 '},
    { titleDate: '09.01.2024', titleNumber: '112', title: 'Про СВО', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Про СВО.mp3' },
    { titleDate: '09.01.2024', titleNumber: '113', title: 'Пять лет назад', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Пять лет назад.mp3' },
    { titleDate: '09.01.2024', titleNumber: '114', title: 'Русский язык 2.0', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Русский язык .mp3' },
    { titleDate: '09.01.2024', titleNumber: '115', title: 'Скрипач', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Скрипач .mp3' },
    { titleDate: '09.01.2024', titleNumber: '116', title: 'Я же вам говорил', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Я же вам говорил .mp3' },
    { titleDate: '09.01.2024', titleNumber: '117', title: 'Я уже не спешу', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Я уже не спешу .mp3'},
      ]
      },
      {
     titleDate: '09.12.2024', title: 'МОЯ РОССИЯ',
      album: [
        { titleDate: '09.01.2024', title: 'Над Курском взрывы', url: 'https://nextjs-boil-delta.vercel.app/Над Курском взрывы.mp3' },
        ]
      }, 
      ];

      const albomsBaze = [
      {
      titleDate: '09.12.2025',title: '1 ТГК МУЗ-ЧАТ',
      album: [
          { titleDate: '09.12.2012', title: 'Городской маршрут', url: 'https://nextjs-boilerplate-lemon-pi-53.vercel.app/Русская%20душа%20-%20Городской%20маршрут.mp3' },
          { titleDate: '09.12.2012', title: 'Неважно', url: 'https://nextjs-boilerplate-lemon-pi-53.vercel.app/tagmp3_2.-Русская-душа---Неважно.mp3' },
          { titleDate: '09.12.2012', title: 'Здесь лапы у ели', url: 'https://nextjs-boilerplate-lemon-pi-53.vercel.app/tagmp3_3.-Русская-душа---Здесь-лапы-у-ели.mp3' },
          { titleDate: '09.12.2023', title: 'Булгаков', url: 'https://nextjs-boilerplate-lemon-pi-53.vercel.app/tagmp3_4.-Русская-душа---Булгаков.mp3' },
          { titleDate: '09.12.2012', title: 'В чем сила, брат', url: 'https://nextjs-boilerplate-lemon-pi-53.vercel.app/5.%20Русская%20душа%20-%20В%20чем%20сила,%20брат.mp3' },
          { titleDate: '09.12.2012', title: 'Дерзкий вечер', url: 'https://nextjs-boilerplate-lemon-pi-53.vercel.app/tagmp3_6.-Русская-душа---Дерзкий-вечер.mp3' },
          { titleDate: '09.12.2012', title: 'Пушкин', url: 'https://nextjs-boilerplate-lemon-pi-53.vercel.app/tagmp3_7.-Русская-душа---Пушкин.mp3' },
          { titleDate: '09.12.2024', title: 'Санкции', url: 'https://nextjs-boilerplate-lemon-pi-53.vercel.app/tagmp3_8_Русская-душа_Новости_смотрю_и_плачу.mp3' },
          { titleDate: '09.12.2012', title: 'Здесь лапы у ели 2', url: 'https://nextjs-boilerplate-lemon-pi-53.vercel.app/tagmp3_9.-Русская-душа---Здесь-лапы-у-ели.mp3' },
        ]
      },
      {
      titleDate: '09.12.2024', title: '2 ТГК МУЗ-ЧАТ',
      album: [
        { titleDate: '09.12.2024',title: 'Очень', url: 'https://nextjs-boilerplate-lemon-pi-53.vercel.app/2.%20Русская%20душа%20-%20Очень.wav--online-audio-convert.com%20(1).mp3' },
        { titleDate: '09.12.2024',title: 'Воронье', url: 'https://nextjs-boilerplate-lemon-pi-53.vercel.app/воронье.mp3' },
        { titleDate: '09.12.2024',title: 'Тишина', url: 'https://nextjs-boilerplate-lemon-pi-53.vercel.app/тишина.mp3' },
        { titleDate: '09.12.2024',title: 'Туман', url: 'https://nextjs-boilerplate-lemon-pi-53.vercel.app/5.%20Русская%20душа%20-%20Туман.wav--online-audio-convert.com.mp3' },
        { titleDate: '09.12.2024',title: 'Дети 20-го века', url: 'https://nextjs-boilerplate-lemon-pi-53.vercel.app/6.%20Русская%20душа%20-%20Дети%2020-го%20века.wav--online-audio-convert.com.mp3' },
        { titleDate: '09.12.2024',title: 'Застава', url: 'https://nextjs-boilerplate-lemon-pi-53.vercel.app/7.%20Русская%20душа%20-%20Застава.wav--online-audio-convert.com.mp3' },
        { titleDate: '09.12.2024',title: 'Великая держава', url: 'https://nextjs-boilerplate-lemon-pi-53.vercel.app/1. Русская душа - Великая держава.mp3' },
      ]
      },
      {
      titleDate: '09.12.2012',title: '3 ТГК МУЗ-ЧАТ',
      album: [
        { titleDate: '09.12.2024',title: 'Гафт', url: 'https://nextjs-boil-delta.vercel.app/гафт.mp3' },
        { titleDate: '09.12.2024',title: 'Читаю строки ветхого завета', url: 'https://nextjs-boil-delta.vercel.app/Читаю-строки-ветхого-завета_.mp3' },
        { titleDate: '09.12.2024',title: 'Женщина до утра', url: 'https://nextjs-boil-delta.vercel.app/женщина%20до%20утра.mp3' },
        { titleDate: '09.12.2024',title: 'Одесса', url: 'https://nextjs-boil-delta.vercel.app/4.%20Русская%20душа%20-%20Одесса%20(1).mp3' },
        { titleDate: '09.12.2024',title: 'Трепещет сердце от безумства', url: 'https://nextjs-boil-delta.vercel.app/5_Русская_душа_Трепещет_сердце_от_безумства.mp3' },
        { titleDate: '09.12.2024',title: 'Мой город', url: 'https://nextjs-boil-delta.vercel.app/мой-город.mp3' },
        { titleDate: '09.12.2024',title: 'За деньги', url: 'https://nextjs-boil-delta.vercel.app/за-деньги.mp3' },
        { titleDate: '09.12.2024',title: 'Не стыдно', url: 'https://nextjs-boil-delta.vercel.app/Не-стыдно.mp3' },
      ]
      },
      {
      titleDate: '09.12.2004',title: 'ГЕРОИ В МУЗЫКЕ',
      album: [
        { titleDate: '09.01.2024',title: 'Блокада Ленинграда', url: 'https://nextjs-boil-delta.vercel.app/tagmp3_Блокада-Ленинграда-(2).mp3' },
        { titleDate: '09.12.2024',title: 'Крестов молчания', url: 'https://nextjs-boilerplate-i6pd.vercel.app/tagmp3_Русская-душа---Крестов-молчания%20(1).mp3' },
        { titleDate: '05.09.2024',title: 'Вагнера', url: 'https://nextjs-boil-delta.vercel.app/tagmp3_РД-Вагнера.mp3' },
        { titleDate: '09.12.2024',title: 'Без страха и упрека четвертной', url: 'https://nextjs-boil-delta.vercel.app/Без%20страха%20и%20упрёка%20%20четвертной,.mp3' },
        { titleDate: '09.12.2024',title: 'Стрелок', url: 'https://nextjs-boil-delta.vercel.app/tagmp3_стрелок.mp3' },
        { titleDate: '12.12.2012',title: 'Ну, здравствуй, мама!', url: 'https://nextjs-boil-delta.vercel.app/Ну,%20здравствуй,%20мама!.mp3' },
        { titleDate: '09.12.2024',title: 'Мать', url: 'https://nextjs-boil-delta.vercel.app/tagmp3_Русская-душа---мать.mp3' },
        { titleDate: '09.12.2024',title: 'Там, где маки лютуют', url: 'https://nextjs-boil-delta.vercel.app/Там, где маки лютуют.mp3' },
        { titleDate: '09.12.2024',title: 'Как заставить молчать', url: 'https://nextjs-boil-delta.vercel.app/3_Русская_Душа_Как_заставить_молчать.mp3' },
        { titleDate: '09.12.2024',title: 'Горит свеча', url: 'https://nextjs-boil-delta.vercel.app/tagmp3_Свеча-(2).mp3' },
      ]

      },
      {
        titleDate: '09.12.2004',title: 'ЛИРИКА ДУШИ',
        album: [
          { titleDate: '01.12.2024',title: 'Романс', url: 'https://nextjs-boil-delta.vercel.app/Русская%20душа%20-%20Романс%20.mp3' },
          { titleDate: '02.12.2024',title: 'Венчание', url: 'https://nextjs-boil-delta.vercel.app/Венчание%20(4).mp3' },
          { titleDate: '03.12.2024',title: 'Случайно встретились глазами', url: 'https://nextjs-boil-delta.vercel.app/tagmp3_Случайно-встретились-глазами.mp3' },
          { titleDate: '04.12.2024',title: 'Люди бывают разными', url: 'https://nextjs-boil-delta.vercel.app/tagmp3_Русская-душа-Люди-бывают-разные.mp3' },
          { titleDate: '05.12.2024',title: 'Брат', url: 'https://nextjs-boil-delta.vercel.app/tagmp3_Брат-версия.mp3' },
          { titleDate: '06.12.2024',title: 'Недописанный стих', url: 'https://nextjs-boil-delta.vercel.app/tagmp3_Русская_душа_Недописанный_стих_.mp3' },
          { titleDate: '07.12.2024',title: 'Испачканной карандашом', url: 'https://nextjs-boil-delta.vercel.app/tagmp3_Русская_душа_Испачканной_карандашом_.mp3' },
          { titleDate: '08.12.2024',title: 'Одни и те же имена', url: 'https://nextjs-boil-delta.vercel.app/tagmp3_Русская-душа-–-Одни-и-те-же-имена.mp3' },
          { titleDate: '09.12.2024',title: 'Пройдусь по парку', url: 'https://nextjs-boil-delta.vercel.app/tagmp3_Русская-душа---Пройдусь-по-парку.mp3' },
        ]
      },
      {
      titleDate: '09.12.2024',title: 'ПОБЕДНЫЙ МАЙ',
      album: [
        { titleDate: '01.12.2024',title: 'Слезы кончились', url: 'https://nextjs-boil-delta.vercel.app/Слезы%20кончились.mp3' },
        { titleDate: '02.12.2024',title: 'Не прячь, слезу мой друг', url: 'https://nextjs-boil-delta.vercel.app/Не прячь, мой друг слезу.mp3' },
        { titleDate: '03.12.2024',title: 'Там на обычном и завьюженном холме', url: 'https://nextjs-boil-delta.vercel.app/Там_на_обычном_и_завьюженном_холме.mp3' },
        { titleDate: '04.12.2024',title: 'Вечная память героям', url: 'https://nextjs-boil-delta.vercel.app/Вечная%20память%20героям!%20(2).mp3' },
        { titleDate: '05.12.2024',title: 'Вы слышите?', url: 'https://nextjs-boil-delta.vercel.app/cromulentarrangements461%20–%20Вы%20слышите_.mp3' },
        { titleDate: '06.12.2024',title: 'Уже не стало ветеранов', url: 'https://nextjs-boil-delta.vercel.app/Уже%20не%20стало%20ветеранов.mp3' },
        { titleDate: '07.12.2024',title: 'Мы часто о героях говорим', url: 'https://nextjs-boil-delta.vercel.app/Мы%20часто%20о%20героях%20говорим%20(2).mp3' },
        { titleDate: '08.12.2024',title: 'Война дошла до Сталинграда', url: 'https://nextjs-boil-delta.vercel.app/Война%20дошла%20до%20Сталинграда%20(2).mp3' },
        { titleDate: '09.12.2024',title: 'На выжженной земле', url: 'https://nextjs-boil-delta.vercel.app/На выжженной земле.mp3' },
        { titleDate: '10.12.2024',title: 'Девятый десяток', url: 'https://nextjs-boil-delta.vercel.app/Девятый_десяток_для_вечности_миг_1.mp3' },        
      ]
      },
      {
      titleDate: '09.12.2024',title: 'ШАНСОНЬЕ',
      album: [
        { titleDate: '01.01.2024', title: 'Путник', url: 'https://nextjs-boil-delta.vercel.app/tagmp3_Русская-душа---Путник.mp3' },
              { titleDate: '02.01.2024', titleNumber: '105', title: 'Ну что пришла', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Ну что пришла.mp3' },
        { titleDate: '03.01.2024', titleNumber: '106', title: 'Остановите землю', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Остановите земле .mp3' },
        { titleDate: '04.01.2024', titleNumber: '107', title: 'Бродяге', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Бродяга.mp3' },
    { titleDate: '05.01.2024', titleNumber: '108', title: 'Ну что застыл', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Ну что застыл.mp3' },
    { titleDate: '06.01.2024', titleNumber: '109', title: 'Налетает грусть', url: 'https://nextjs-boil-delta.vercel.app/Русская%20душа%20-%20Налетает%20грусть%20.mp3' },
    { titleDate: '07.01.2024', titleNumber: '110', title: 'Мой мир таков, каким он мне открылся', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Мой мир таков, каким он мне открылся .mp3' },
    { titleDate: '08.01.2024', titleNumber: '111', title: 'Плачу два счетчика', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Плачу два счетчика.mp3 '},
    { titleDate: '09.01.2024', titleNumber: '112', title: 'Про СВО', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Про СВО.mp3' },
    { titleDate: '10.01.2024', titleNumber: '113', title: 'Пять лет назад', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Пять лет назад.mp3' },
    { titleDate: '11.01.2024', titleNumber: '114', title: 'Русский язык 2.0', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Русский язык .mp3' },
    { titleDate: '12.01.2024', titleNumber: '115', title: 'Скрипач', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Скрипач .mp3' },
    { titleDate: '13.01.2024', titleNumber: '116', title: 'Я же вам говорил', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Я же вам говорил .mp3' },
    { titleDate: '14.01.2024', titleNumber: '117', title: 'Я уже не спешу', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Я уже не спешу .mp3'},
      ]
      },
      ];

let tracks = [
       { date: '02.07.2024', titleNumber: '1', title: 'Богеме Ивлеевой', url: 'https://nextjs-boilerplate-i6pd.vercel.app/Русская%20душа%20-%20Богеме%20Ивлеевой%20(5).mp3' },
    { date: '15.07.2024', titleNumber: '2', title: 'Я музыкант, я делаю рок', url: 'https://nextjs-boilerplate-i6pd.vercel.app/Русская_душа_Я_музыкант,_я_делаю_рок,.mp3' },
    { date: '20.07.2024', titleNumber: '3', title: 'В голове с утра забота', url: 'https://nextjs-boilerplate-i6pd.vercel.app/В_голове_с_утра_забота__едит_повар_на_ра-_1_-_1_.mp3' },
    { date: '22.07.2024', titleNumber: '4', title: 'Есенин', url: 'https://nextjs-boilerplate-i6pd.vercel.app/Кем_был_Есенин__мечтатель_иль_повеса__1.mp3' },
    { date: '05.09.2024', titleNumber: '5', title: 'Крестов молчания', url: 'https://nextjs-boilerplate-i6pd.vercel.app/tagmp3_Русская-душа---Крестов-молчания%20(1).mp3' },
    { date: '28.11.2024', titleNumber: '6', title: 'Богата русская природа', url: 'https://nextjs-boilerplate-i6pd.vercel.app/Русская%20душа%20-%20Богата%20Русская%20природа.mp3' },
    { date: '11.07.2024', titleNumber: '7', title: 'Без страха и упрека четвертной', url: 'https://nextjs-boil-delta.vercel.app/Без%20страха%20и%20упрёка%20%20четвертной,.mp3' },
    { date: '17.12.2024', titleNumber: '8', title: 'Жизнь прекрасна', url: 'https://nextjs-boilerplate-i6pd.vercel.app/Жизнь_прекрасна,_словно_светлый_день,_1.mp3' },
    { date: '19.12.2024', titleNumber: '9', title: 'Кружит снег', url: 'https://nextjs-boilerplate-i6pd.vercel.app/Кружит%20снег.mp3' },
    { date: '24.12.2024', titleNumber: '10', title: 'Если б не пришла зима', url: 'https://nextjs-boilerplate-i6pd.vercel.app/Если%20б%20не%20пришла%20зима.mp3' },
    { date: '28.12.2024', titleNumber: '11', title: 'На дворе снежинки кружат', url: 'https://nextjs-boilerplate-i6pd.vercel.app/На%20дворе%20снежинки%20кружат.mp3' },
    { date: '31.12.2024', titleNumber: '12', title: 'Новый год', url: 'https://nextjs-boilerplate-i6pd.vercel.app/Русская%20душа%20Новый%20год.mp3' },
    { date: '08.01.2025', titleNumber: '13', title: 'Рождество', url: 'https://nextjs-boilerplate-i6pd.vercel.app/рождeство%20(1).mp3' },
    { date: '10.01.2025', titleNumber: '14', title: 'Дальнобой', url: 'https://nextjs-boilerplate-i6pd-git-main-ds-projects-d772f088.vercel.app/DALNOBOY_03-_1_-_1_.mp3' },
    { date: '14.01.2025', titleNumber: '15', title: 'Старый Новый Год', url: 'https://nextjs-boilerplate-i6pd.vercel.app/Русская%20душа%20Старый%20новый%20год.mp3' },
    { date: '19.01.2025', titleNumber: '16', title: 'Крещение', url: 'https://nextjs-boilerplate-i6pd.vercel.app/Русская%20душа%20-%20Крещение.mp3' },
    { date: '25.01.2025', titleNumber: '17', title: 'Выпускной', url: 'https://nextjs-boilerplate-i6pd.vercel.app/Бау-Выпускной.mp3' },
    { date: '29.01.2025', titleNumber: '18', title: 'Высоцкий', url: 'https://nextjs-boilerplate-i6pd.vercel.app/Русская%20душа%20-%20Высоцкий.mp3' },
    { date: '08.03.2025', titleNumber: '19', title: 'Венеры', url: 'https://nextjs-boilerplate-i6pd.vercel.app/венеры.mp3' },
    { date: '08.03.2025', titleNumber: '20', title: 'Женщинам', url: 'https://nextjs-boilerplate-i6pd.vercel.app/Русская%20душа%20-%20Женщинам.MP3' },
    { date: '23.02.2025', titleNumber: '21', title: 'Слова', url: 'https://nextjs-boilerplate-i6pd.vercel.app/Русская%20душа%20-%20Слова.mp3' },
    { date: '09.05.2025', titleNumber: '22', title: '1941-1945', url: 'https://nextjs-boilerplate-i6pd.vercel.app/1941-1945%20гг..MP3' },
    { date: '15.05.2025', titleNumber: '23', title: 'Семья', url: 'https://nextjs-boilerplate-i6pd.vercel.app/Семья.mp3' },
    { date: '19.05.2025', titleNumber: '24', title: 'Пионеры', url: 'https://nextjs-boilerplate-i6pd.vercel.app/Пионеры%20(1).mp3' },
    { date: '27.05.2025', titleNumber: '25', title: 'День библиотек', url: 'https://nextjs-boilerplate-i6pd.vercel.app/День%20библиотек.mp3' },
    { date: '28.05.2025', titleNumber: '26', title: 'Пограничники', url: 'https://nextjs-boilerplate-i6pd.vercel.app/Русская%20душа%20-%20Пограничники.mp3' },
    { date: '01.06.2025', titleNumber: '27', title: 'Первое июня', url: 'https://nextjs-boilerplate-i6pd.vercel.app/1%20июня%20(1).mp3' },
    { date: '06.06.2025', titleNumber: '28', title: 'Русский язык', url: 'https://nextjs-boilerplate-i6pd.vercel.app/Мой%20язык%20(2).mp3' },
    { date: '08.06.2025', titleNumber: '29', title: 'Троица', url: 'https://nextjs-boilerplate-i6pd.vercel.app/Славься,%20Троица-Святая,%20(Remix).mp3' },
    { date: '12.06.2025', titleNumber: '30', title: 'День России', url: 'https://nextjs-boilerplate-i6pd-git-main-ds-projects-d772f088.vercel.app/День%20Рoссии%20готов%20.mp3' },
    { date: '22.06.2025', titleNumber: '31', title: 'Чёрная дата', url: 'https://nextjs-boilerplate-i6pd-git-main-ds-projects-d772f088.vercel.app/Черная%20дата%20(1).mp3' },
    { date: '23.06.2025', titleNumber: '32', title: 'Волны бьются о борт крутой', url: 'https://nextjs-boilerplate-i6pd.vercel.app/Волны%20бьются%20о%20борт%20крутой.mp3' },
    { date: '25.06.2025', titleNumber: '33', title: 'Гимн славян', url: 'https://nextjs-boilerplate-i6pd.vercel.app/Русская%20душа%20-%20Гимн%20славян%20.mp3' },
    { date: '28.06.2025', titleNumber: '34', title: 'День молодежи', url: 'https://nextjs-boilerplate-i6pd.vercel.app/День%20молодёжи.mp3' },
    { date: '21.03.2025', titleNumber: '35', title: 'Поэты', url: 'https://nextjs-boilerplate-i6pd.vercel.app/Поэты%202.0%20(3).mp3' },
    { date: '01.04.2025', titleNumber: '36', title: 'Первое апреля', url: 'https://nextjs-boilerplate-i6pd.vercel.app/1%20апрелч%20.mp3' },
    { date: '05.04.2025', titleNumber: '37', title: 'Витязи', url: 'https://nextjs-boilerplate-i6pd.vercel.app/витя3и.mp3' },
    { date: '12.04.2025', titleNumber: '38', title: 'Юрий Гагарин', url: 'https://nextjs-boilerplate-i6pd.vercel.app/Гагарин%20(1).mp3' },
    { date: '13.04.2025', titleNumber: '39', title: 'ПВО', url: 'https://nextjs-boilerplate-i6pd.vercel.app/Наш%20мирный%20сон%20оберегают%20во́ины,.mp3' },
    { date: '15.04.2025', titleNumber: '40', title: 'Служителям искусства', url: 'https://nextjs-boilerplate-i6pd.vercel.app/служителям%20искусства.mp3' },
    { date: '17.04.2025', titleNumber: '41', title: 'Чистый четверг', url: 'https://nextjs-boilerplate-i6pd.vercel.app/Чистый%20четверг.mp3' },
    { date: '22.04.2025', titleNumber: '42', title: 'Русская земля', url: 'https://nextjs-boilerplate-i6pd.vercel.app/русский.mp3' },
    { date: '29.05.2025', titleNumber: '43', title: 'Радоница', url: 'https://nextjs-boilerplate-i6pd.vercel.app/Русская%20душа%20-%20Радоница.MP3.mp3' },
    { date: '30.04.2025', titleNumber: '44', title: 'Пожарным', url: 'https://nextjs-boilerplate-i6pd.vercel.app/Не%20важно%20им,%20кто%20там%20попал%20в%20беду.mp3' },
    { date: '01.05.2025', titleNumber: '45', title: 'Первое мая', url: 'https://nextjs-boilerplate-i6pd.vercel.app/Русская%20душа%20-%20Без%20труда%20ты%20земли%20не%20вскопаешь%20.mp3' },
    { date: '08.05.2025', titleNumber: '46', title: 'Красный крест', url: 'https://nextjs-boilerplate-i6pd.vercel.app/На%20поле%20боя,%20в%20вихре%20огня%20(1).mp3' },
    { date: '12.03.2025', titleNumber: '47', title: 'Ивана Купала', url: 'https://nextjs-boilerplate-i6pd.vercel.app/Русская душа - Ивана Купала (1).mp3' },
    { date: '13.02.2025', titleNumber: '48', title: 'Ну, здравствуй, мама', url: 'https://nextjs-boilerplate-i6pd.vercel.app/Ну, здравствуй, мама!.mp3' },
    { date: '10.03.2025', titleNumber: '49', title: 'Романс', url: 'https://nextjs-boilerplate-i6pd.vercel.app/Русская душа - Романс .mp3' },
    { date: '27.03.2025', titleNumber: '50', title: 'Не оставляй меня весной', url: 'https://nextjs-boilerplate-i6pd.vercel.app/Русская душа - Не оставляй меня весной .mp3' },
    { date: '10.04.2025', titleNumber: '51', title: 'Встало солнце на рассвете', url: 'https://nextjs-boilerplate-i6pd.vercel.app/Русская душа - Встало солнце на рассвете.mp3' },
    { date: '20.04.2025', titleNumber: '52', title: 'Пасха', url: 'https://nextjs-boilerplate-i6pd.vercel.app/Русская душа - Пасха.mp3' },
    { date: '24.06.2024', titleNumber: '53', title: 'Городской маршрут', url: 'https://nextjs-boilerplate-i6pd.vercel.app/Русская душа - Городской маршрут.mp3' },
    { date: '24.06.2024', titleNumber: '54', title: 'Неважно', url: 'https://nextjs-boilerplate-lemon-pi-53.vercel.app/tagmp3_2.-Русская-душа---Неважно.mp3' },
    { date: '24.06.2024', titleNumber: '55', title: 'Здесь лапы у ели', url: 'https://nextjs-boilerplate-lemon-pi-53.vercel.app/tagmp3_3.-Русская-душа---Здесь-лапы-у-ели.mp3' },
    { date: '24.06.2024', titleNumber: '56', title: 'Булгаков', url: 'https://nextjs-boilerplate-lemon-pi-53.vercel.app/tagmp3_4.-Русская-душа---Булгаков.mp3' },
    { date: '24.06.2024', titleNumber: '57', title: 'В чем сила, брат', url: 'https://nextjs-boilerplate-lemon-pi-53.vercel.app/5.%20Русская%20душа%20-%20В%20чем%20сила,%20брат.mp3' },
    { date: '24.06.2024', titleNumber: '58', title: 'Дерзкий вечер', url: 'https://nextjs-boilerplate-lemon-pi-53.vercel.app/tagmp3_6.-Русская-душа---Дерзкий-вечер.mp3' },
    { date: '24.06.2024', titleNumber: '59', title: 'Пушкин', url: 'https://nextjs-boilerplate-lemon-pi-53.vercel.app/tagmp3_7.-Русская-душа---Пушкин.mp3' },
    { date: '24.06.2024', titleNumber: '60', title: 'Санкции', url: 'https://nextjs-boilerplate-lemon-pi-53.vercel.app/tagmp3_8_Русская-душа_Новости_смотрю_и_плачу.mp3' },
    { date: '24.06.2024', titleNumber: '61', title: 'Здесь лапы у ели 2', url: 'https://nextjs-boilerplate-lemon-pi-53.vercel.app/tagmp3_9.-Русская-душа---Здесь-лапы-у-ели.mp3' },
    { date: '24.06.2024', titleNumber: '62', title: 'Очень', url: 'https://nextjs-boil-delta.vercel.app/2. Русская душа - Очень.wav--online-audio-convert.com.mp3' },
    { date: '24.06.2024', titleNumber: '63', title: 'Воронье', url: 'https://nextjs-boilerplate-i6pd.vercel.app/воронье.mp3' },
    { date: '24.06.2024', titleNumber: '64', title: 'Тишина', url: 'https://nextjs-boilerplate-i6pd.vercel.app/тишина.mp3' },
    { date: '24.06.2024', titleNumber: '65', title: 'Туман', url: 'https://nextjs-boilerplate-i6pd.vercel.app/5.%20Русская%20душа%20-%20Туман.wav--online-audio-convert.com.mp3' },
    { date: '24.06.2024', titleNumber: '66', title: 'Дети 20-го века', url: 'https://nextjs-boilerplate-i6pd.vercel.app/6.%20Русская%20душа%20-%20Дети%2020-го%20века.wav--online-audio-convert.com.mp3' },
    { date: '24.06.2024', titleNumber: '67', title: 'Застава', url: 'https://nextjs-boilerplate-i6pd.vercel.app/7.%20Русская%20душа%20-%20Застава.wav--online-audio-convert.com.mp3' },
    { date: '24.06.2024', titleNumber: '68', title: 'Гафт', url: 'https://nextjs-boil-delta.vercel.app/гафт.mp3' },
    { date: '24.06.2024', titleNumber: '69', title: 'Читаю строки ветхого завета', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Читаю строки ветхого завета.mp3'},
    { date: '24.06.2024', titleNumber: '70', title: 'Женщина до утра', url: 'https://nextjs-boil-delta.vercel.app/женщина%20до%20утра.mp3' },
    { date: '24.06.2024', titleNumber: '71', title: 'Одесса', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Одесса.mp3'},
    { date: '24.06.2024', titleNumber: '72', title: 'Трепещет сердце от безумства', url: 'https://nextjs-boil-delta.vercel.app/5_Русская_душа_Трепещет_сердце_от_безумства.mp3' },
    { date: '24.06.2024', titleNumber: '73', title: 'Мой город', url: 'https://nextjs-boilerplate-i6pd.vercel.app/мой-город.mp3' },
    { date: '24.06.2024', titleNumber: '74', title: 'За деньги', url: 'https://nextjs-boilerplate-i6pd.vercel.app/за-деньги.mp3' },
    { date: '24.06.2024', titleNumber: '75', title: 'Не стыдно', url: 'https://nextjs-boilerplate-i6pd.vercel.app/Не-стыдно.mp3' },
    { date: '17.02.2025', titleNumber: '76', title: 'Блокада Ленинграда', url: 'https://nextjs-boil-delta.vercel.app/tagmp3_Блокада-Ленинграда-(2).mp3' },
    { date: '17.02.2025', titleNumber: '77', title: 'Вагнера', url: 'https://nextjs-boil-delta.vercel.app/tagmp3_РД-Вагнера.mp3' },
    { date: '17.02.2025', titleNumber: '78', title: 'Стрелок', url: 'https://nextjs-boil-delta.vercel.app/tagmp3_стрелок.mp3' },
    { date: '17.02.2025', titleNumber: '79', title: 'Мать', url: 'https://nextjs-boil-delta.vercel.app/tagmp3_Русская-душа---мать.mp3' },
    { date: '17.02.2025', titleNumber: '80', title: 'Как заставить молчать', url: 'https://nextjs-boil-delta.vercel.app/3_Русская_Душа_Как_заставить_молчать.mp3' },
    { date: '17.02.2025', titleNumber: '81', title: 'Горит свеча', url: 'https://nextjs-boil-delta.vercel.app/tagmp3_Свеча-(2).mp3' },
    { date: '10.03.2025', titleNumber: '82', title: 'Венчание', url: 'https://nextjs-boil-delta.vercel.app/Венчание%20(4).mp3' },
    { date: '10.03.2025', titleNumber: '83', title: 'Случайно встретились глазами', url: 'https://nextjs-boil-delta.vercel.app/tagmp3_Случайно-встретились-глазами.mp3' },
    { date: '10.03.2025', titleNumber: '84', title: 'Люди бывают разными', url: 'https://nextjs-boil-delta.vercel.app/tagmp3_Русская-душа-Люди-бывают-разные.mp3' },
    { date: '10.03.2025', titleNumber: '85', title: 'Брат', url: 'https://nextjs-boil-delta.vercel.app/tagmp3_Брат-версия.mp3' },
    { date: '22.04.2025', titleNumber: '86', title: 'Путник', url: 'https://nextjs-boil-delta.vercel.app/tagmp3_Русская-душа---Путник.mp3' },
    { date: '10.03.2025', titleNumber: '87', title: 'Недописанный стих', url: 'https://nextjs-boil-delta.vercel.app/tagmp3_Русская_душа_Недописанный_стих_.mp3' },
    { date: '10.03.2025', titleNumber: '88', title: 'Испачканной карандашом', url: 'https://nextjs-boil-delta.vercel.app/tagmp3_Русская_душа_Испачканной_карандашом_.mp3' },
    { date: '10.03.2025', titleNumber: '89', title: 'Одни и те же имена', url: 'https://nextjs-boil-delta.vercel.app/tagmp3_Русская-душа-–-Одни-и-те-же-имена.mp3' },
    { date: '10.03.2025', titleNumber: '90', title: 'Пройдусь по парку', url: 'https://nextjs-boil-delta.vercel.app/tagmp3_Русская-душа---Пройдусь-по-парку.mp3' },
    { date: '09.05.2025', titleNumber: '91', title: 'Слезы кончились', url: 'https://nextjs-boil-delta.vercel.app/Слезы%20кончились.mp3' },
    { date: '09.05.2025', titleNumber: '92', title: 'Не прячь, слезу мой друг', url: 'https://nextjs-boil-delta.vercel.app/Не прячь, мой друг слезу.mp3' },
    { date: '09.05.2025', titleNumber: '93', title: 'Там на обычном и завьюженном холме', url: 'https://nextjs-boil-delta.vercel.app/Там_на_обычном_и_завьюженном_холме.mp3' },
    { date: '09.05.2025', titleNumber: '94', title: 'Вечная память героям', url: 'https://nextjs-boil-delta.vercel.app/Вечная%20память%20героям!%20(2).mp3' },
    { date: '09.05.2025', titleNumber: '95', title: 'Вы слышите?', url: 'https://nextjs-boil-delta.vercel.app/cromulentarrangements461%20–%20Вы%20слышите_.mp3' },
    { date: '09.05.2025', titleNumber: '96', title: 'Уже не стало ветеранов', url: 'https://nextjs-boil-delta.vercel.app/Уже%20не%20стало%20ветеранов.mp3' },
    { date: '09.05.2025', titleNumber: '97', title: 'Мы часто о героях говорим', url: 'https://nextjs-boil-delta.vercel.app/Мы%20часто%20о%20героях%20говорим%20(2).mp3' },
    { date: '09.05.2025', titleNumber: '98', title: 'Война дошла до Сталинграда', url: 'https://nextjs-boil-delta.vercel.app/Война%20дошла%20до%20Сталинграда%20(2).mp3' },
    { date: '09.05.2025', titleNumber: '99', title: 'На выжженой земле', url: 'https://nextjs-boil-delta.vercel.app/На%20выжженной%20земле.mp3' },
    { date: '09.05.2025', titleNumber: '100', title: 'Девятый десяток', url: 'https://nextjs-boil-delta.vercel.app/Девятый_десяток_для_вечности_миг_1.mp3' },
    { date: '17.02.2025', titleNumber: '101', title: 'Там где маки лютуют', url: 'https://nextjs-boil-delta.vercel.app/Там,%20где%20маки%20лютуют.mp3' },
    { date: '24.06.2024', titleNumber: '102', title: 'Великая держава', url: 'https://nextjs-boil-delta.vercel.app/1. Русская душа - Великая держава.mp3' },
    { date: '10.07.2025', titleNumber: '103', title: 'Уходят на войну', url: 'https://nextjs-boil-delta.vercel.app/Русская+душа+-+Уходят+на+войну++%281%29.mp3' },
    { date: '07.08.2025', titleNumber: '104', title: 'Александр Блок', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Александр Блок.mp3' },
    { date: '11.05.2025', titleNumber: '105', title: 'Ну что пришла', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Ну что пришла.mp3' },
    { date: '12.05.2025', titleNumber: '106', title: 'Остановите землю', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Остановите земле .mp3' },
    { date: '13.05.2025', titleNumber: '107', title: 'Бродяге', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Бродяга.mp3' },
    { date: '14.05.2025', titleNumber: '108', title: 'Ну что застыл', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Ну что застыл.mp3' },
    { date: '15.05.2025', titleNumber: '109', title: 'Налетает грусть', url: 'https://nextjs-boil-delta.vercel.app/Русская%20душа%20-%20Налетает%20грусть%20.mp3' },
    { date: '16.05.2025', titleNumber: '110', title: 'Мой мир таков, каким он мне открылся', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Мой мир таков, каким он мне открылся .mp3' },
    { date: '17.05.2025', titleNumber: '111', title: 'Плачу два счетчика', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Плачу два счетчика.mp3 '},
    { date: '18.05.2025', titleNumber: '112', title: 'Про СВО', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Про СВО.mp3' },
    { date: '26.08.2025', titleNumber: '113', title: 'Пять лет назад', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Пять лет назад.mp3' },
    { date: '20.05.2025', titleNumber: '114', title: 'Русский язык 2.0', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Русский язык .mp3' },
    { date: '21.05.2025', titleNumber: '115', title: 'Скрипач', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Скрипач .mp3' },
    { date: '22.05.2025', titleNumber: '116', title: 'Я же вам говорил', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Я же вам говорил .mp3' },
    { date: '23.05.2025', titleNumber: '117', title: 'Я уже не спешу', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Я уже не спешу .mp3'},
    { date: '28.07.2025', titleNumber: '118', title: 'Крещение руси', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Крещение Руси.mp3'},
    { date: '15.07.2025', titleNumber: '119', title: 'Июль зеленый', url: 'https://nextjs-boil-delta.vercel.app/Июль зеленый.mp3'},
    { date: '21.07.2025', titleNumber: '120', title: 'Жизнь - это опыт, но никак не бремя', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Жизнь это опыт, но никак не бремя.mp3'},
    { date: '27.07.2025', titleNumber: '121', title: 'Лермонтов', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Лермонтов.mp3'},
    { date: '16.08.2025', titleNumber: '122', title: 'Когда уходит гений', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Когда уходит гений.mp3'},
    { date: '12.08.2025', titleNumber: '123', title: 'Море не ответит', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Море не ответит.mp3'},
    { date: '22.08.2025', titleNumber: '124', title: 'Наш русский флаг', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Наш русский флаг.mp3'},
    { date: '02.08.2025', titleNumber: '125', title: 'Под куполом неба', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Под куполом неба.mp3'},
    { date: '09.08.2025', titleNumber: '126', title: 'Хочу я жить в глуши', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Хочу я жить в глуши.mp3'},
    { date: '20.07.2025', titleNumber: '127', title: 'Эх, лето красное', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Эх, лето красное,.mp3'},
    { date: '04.08.2025', titleNumber: '128', title: 'Спряталось солнце в дымке заката', url: 'https://nextjs-boil-delta.vercel.app/Спряталось_солнце,_в_дымке_заката.mp3'},
    { date: '30.07.2025', titleNumber: '129', title: 'Не забывайте значение слово друг (рок)', url: 'https://nextjs-boil-delta.vercel.app/Не забывайте Рок (1).mp3'},
    { date: '30.07.2025', titleNumber: '130', title: 'Не забывайте значение слово друг', url: 'https://nextjs-boil-delta.vercel.app/Не забывайте.mp3'},
    { date: '18.08.2025', titleNumber: '131', title: 'Во славу русского солдата', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Во славу русского солдата.mp3'},
    { date: '08.06.2025', titleNumber: '132', title: 'Дaльнобой', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Дальнобой.mp3'},
    { date: '10.06.2025', titleNumber: '133', title: 'С днем рождения, Олеся Михайловна', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - С днем рождения!.mp3'},
    { date: '03.08.2025', titleNumber: '134', title: 'Тридцать девять еще не дата', url: 'https://nextjs-boil-delta.vercel.app/Русская_душа_Тридцать_девять,_ещё_не_дата.mp3'},
    { date: '20.08.2025', titleNumber: '135', title: 'Четвероногому другу', url: 'https://nextjs-boil-delta.vercel.app/Четвероногому другу.mp3'},
    { date: '14.06.2025', titleNumber: '136', title: 'Честь пацана', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Честь пацана.mp3'},
    { date: '15.06.2025', titleNumber: '137', title: 'Пять лет я учился на инженера', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Пять лет учился я на инженера.mp3'},
    { date: '17.06.2025', titleNumber: '138', title: 'Новости смотрю и плачу (частушки)', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Новости смотрю и плачу (частушки).mp3'},
    { date: '08.07.2025', titleNumber: '139', title: 'День семьи, любви и верности', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - День семьи, любви и верности .mp3'},
    { date: '18.06.2025', titleNumber: '140', title: 'Врач от Бога', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Врач от Бога.MP3'},
    { date: '06.08.2025', titleNumber: '141', title: 'Над Курском взрывы', url: 'https://nextjs-boil-delta.vercel.app/Над Курском взрывы.mp3'},
    { date: '08.06.2025', titleNumber: '142', title: 'Cтроителям', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Строителям.mp3'},
    { date: '23.08.2025', titleNumber: '143', title: 'Курская битва', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Курская битва.mp3'},
    { date: '30.08.2025', titleNumber: '144', title: 'Дальнобойные страдания', url: 'https://nextjs-boil-delta.vercel.app/Дальнобольные страдания .mp3'},
    { date: '30.08.2025', titleNumber: '145', title: 'Дальнобойщикам', url: 'https://nextjs-boil-delta.vercel.app/Дальнобольщикам.mp3'},
    { date: '31.08.2025', titleNumber: '146', title: 'Передай привет сентябрю', url: 'https://nextjs-boil-delta.vercel.app/Русская%20душа%20-%20Передай%20привет%20сентябрю.mp3'},
    { date: '02.09.2025', titleNumber: '147', title: 'Пуля, Танк и Верный', url: 'https://nextjs-boil-delta.vercel.app/Пуля, Танк и Верный.mp3'},
    { date: '03.09.2025', titleNumber: '148', title: 'Беслан', url: 'https://nextjs-boil-delta.vercel.app/Беслан.mp3'},
    { date: '14.09.2025', titleNumber: '149', title: 'Танкистам', url: 'https://nextjs-boil-delta.vercel.app/Танкистам.mp3'},
    { date: '19.09.2025', titleNumber: '150', title: 'Осень', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Осень .mp3'},
    { date: '25.09.2025', titleNumber: '151', title: 'С днем рождения, Курск!', url: 'https://nextjs-boil-delta.vercel.app/Русская_душа_С_Днем_Рождения,_Курск!_.mp3'},
    { date: '30.09.2025', titleNumber: '152', title: 'Донбасс', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Донбасс.MP3'},
    { date: '30.09.2025', titleNumber: '153', title: 'Жемчужная свадьба', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Жемчужная свадьба..mp3'},
    { date: '01.10.2025', titleNumber: '154', title: 'Посмотри мне в глаза', url: 'https://nextjs-boil-delta.vercel.app/Русская_душа_Посмотри_мне_в_глаза.MP3'},    
    { date: '05.10.2025', titleNumber: '155', title: 'Учителям', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Учителям.MP3'},    
    { date: '07.10.2025', titleNumber: '156', title: 'С днём рождения, Президент!', url: 'https://nextjs-boil-delta.vercel.app/Русская_душа_С_днём_рождения,_наш_Президент!.MP3'},    
    { date: '13.10.2025', titleNumber: '157', title: 'Ложь и правда', url: 'https://nextjs-boil-delta.vercel.app/Ложь и правда.mp3'},    
    { date: '24.10.2025', titleNumber: '158', title: 'В чистом поле васильки', url: 'https://nextjs-boil-delta.vercel.app/В чистом поле васильки.mp3'},
    { date: '22.10.2025', titleNumber: '159', title: 'Ах, эта осень', url: 'https://nextjs-boil-delta.vercel.app/Ах, эта осень, эта чудо-осень!.mp3'},      
    { date: '15.08.2025', titleNumber: '160', title: 'Легенда', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Легенда.mp3'},   
    { date: '27.07.2025', titleNumber: '161', title: 'Морякам', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Морякам.mp3'}, 
    { date: '19.10.2025', titleNumber: '162', title: 'Папа', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Папа.MP3'}, 
    { date: '20.10.2025', titleNumber: '163', title: 'Связист', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Связист.MP3'}, 
    { date: '22.10.2025', titleNumber: '164', title: 'Бунин', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Бунин.MP3'}, 
    { date: '27.10.2025', titleNumber: '165', title: 'Жёлтый лист', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Жёлтый лист.MP3'}, 
    { date: '28.10.2025', titleNumber: '166', title: 'Родителям', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Родителям.MP3'}, 
    { date: '04.11.2025', titleNumber: '167', title: 'Единство', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Единство.MP3'}, 
    { date: '05.11.2025', titleNumber: '168', title: 'Разведчик', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Разведчик.mp3'}, 
    { date: '07.11.2025', titleNumber: '169', title: 'Детство золотое', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Детство золотое.MP3'}, 
    { date: '09.11.2025', titleNumber: '170', title: 'Тургенев', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Тургенев.MP3'}, 
    { date: '14.11.2025', titleNumber: '171', title: 'Не для себя', url: 'https://nextjs-boil-delta.vercel.app/Два сильных актёра, но разные роли.mp3'}, 
    { date: '18.11.2025', titleNumber: '172', title: 'Колыбельная', url: 'https://nextjs-boil-delta.vercel.app/Колыбельная (0.94x).mp3'}, 
    { date: '18.11.2025', titleNumber: '173', title: 'Дед мороз', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Дед Мороз.MP3'}, 
    { date: '19.11.2025', titleNumber: '174', title: 'Ракетные войска', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Ракетные войска.MP3'},    
    { date: '19.11.2025', titleNumber: '175', title: 'На паперти душа стояла', url: 'https://nextjs-boil-delta.vercel.app/На паперти душа стояла, (Extend) (1).mp3'},
    { date: '21.11.2025', titleNumber: '176', title: 'Присяга воина', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Присяга воина.MP3'},
    { date: '21.11.2025', titleNumber: '177', title: 'Бухгалтер', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Бухгалтер.MP3'},   
    { date: '25.11.2025', titleNumber: '178', title: 'Русская и точка', url: 'https://nextjs-boil-delta.vercel.app/Русская и точка.mp3'},
    { date: '26.11.2025', titleNumber: '179', title: 'Под шёпот листопада', url: 'https://nextjs-boil-delta.vercel.app/Русская_душа_Под_шёпот_листопада.MP3'},
    { date: '30.11.2025', titleNumber: '180', title: 'Милая мама', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Милая мама.MP3'},
    { date: '01.12.2025', titleNumber: '181', title: 'Когда падает снег', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Когда падает снег.MP3'},
    { date: '03.12.2025', titleNumber: '182', title: 'Неизвестный солдат', url: 'https://nextjs-boil-delta.vercel.app/Русская_душа_Неизвестный_солдат.MP3'},
    { date: '04.12.2025', titleNumber: '183', title: 'Помолись за наших', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Помолись за наших.MP3'},
    { date: '06.12.2025', titleNumber: '184', title: 'Держать святую землю', url: 'https://nextjs-boil-delta.vercel.app/Русская_душа_Держать_святую_землю.MP3'},
    { date: '07.12.2025', titleNumber: '185', title: 'Моя тихая вера', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Моя тихая вера.MP3'},
    { date: '09.12.2025', titleNumber: '186', title: 'За тех, кто не вернулся', url: 'https://nextjs-boil-delta.vercel.app/Русская_душа_За_тех,_кто_не_вернулся.MP3'},
    { date: '20.12.2025', titleNumber: '187', title: 'На боевом посту', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - На боевом посту.MP3'},
    { date: '31.12.2025', titleNumber: '188', title: 'Новый год', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Новый год.MP3'},
    { date: '02.01.2026', titleNumber: '189', title: 'Голос надорвёшь, Европа!', url: 'https://nextjs-boil-delta.vercel.app/Русская_душа_Голос_надорвёшь,_Европа.MP3'},
    { date: '04.01.2026', titleNumber: '190', title: 'Белая сказка', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Белая сказка.MP3'},
    { date: '07.01.2026', titleNumber: '191', title: 'Свет Вифелеемской звезды', url: 'https://nextjs-boil-delta.vercel.app/Русская_душа_Свет_Вифлеемской_звезды.MP3'},
    { date: '07.01.2026', titleNumber: '192', title: 'Христос Родился!', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Христос Родился!.MP3'},
    { date: '13.01.2026', titleNumber: '193', title: 'Эх ты, русская душа!', url: 'https://nextjs-boil-delta.vercel.app/Русская_душа_Эх_ты,_русская_душа!.MP3'},
    { date: '19.01.2026', titleNumber: '194', title: 'В крещенскую воду', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - В крещенскую воду.MP3'},
    { date: '25.01.2026', titleNumber: '195', title: 'Ода студенческой юности', url: 'https://nextjs-boil-delta.vercel.app/Русская_душа_Ода_студенческой_юности.MP3'},
    { date: '25.01.2026', titleNumber: '196', title: 'Голос, что не умрёт', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Голос, что не умрёт.MP3'},
    { date: '27.01.2026', titleNumber: '197', title: 'В кольце блокады', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - В кольце блокады.MP3'},
    { date: '28.01.2026', titleNumber: '198', title: 'Старушка на вокзале', url: 'https://nextjs-boil-delta.vercel.app/Русская_душа_Старушка_на_вокзале.MP3'},
    { date: '31.01.2026', titleNumber: '199', title: 'Мнимая радость', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Мнимая радость.MP3'},
    { date: '02.02.2026', titleNumber: '200', title: 'Жена солдата', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Жена солдата.MP3'},
    { date: '06.02.2026', titleNumber: '201', title: 'Я свободен', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Я свободен.MP3'},
    { date: '10.02.2026', titleNumber: '202', title: 'Теорема боли', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Теорема боли.MP3'},
];

function stopPing() {
    if (pingInterval) {
      clearInterval(pingInterval);
      pingInterval = null;
    }
  }
    
function sendPing(userId) {
  fetch(BACKEND_URL.trim(), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ user_id: userId })
  }).catch(() => {});
}


const CACHE_NAME = 'audio-cache-v190';


async function cacheAudioFile(url) {
    try {
        const cache = await caches.open(CACHE_NAME);
        const cachedResponse = await cache.match(url);
        if (cachedResponse) {
            return false; 
        } else {
            const response = await fetch(url);
            if (response.ok) {
                await cache.put(url, response.clone());
                return true;
            } else {
                return false;
            }
        }
    } catch (error) {
        return false;
    }
}



async function getAudioFile(url) {
    try {
        const cache = await caches.open(CACHE_NAME);
        let cachedResponse = await cache.match(url);

        if (cachedResponse) {
            return cachedResponse;
        } else {
            const networkResponse = await fetch(url);
            if (networkResponse.ok) {
                return networkResponse;
            } else {
                throw new Error(`Сеть ответила с ошибкой`);
            }
        }
    } catch (error) {
        throw error;
    }
}







async function DmanuallyRecacheAll() {
    const loadingIndicator = document.getElementById('loading-indicator');
    const progressBar = document.getElementById('progress-bar');
    loadingIndicator.style.display = 'block';

    try {

        const favoriteTitlesRaw = localStorage.getItem('trek') || '';
        const favoriteTitles = favoriteTitlesRaw.split('\n').map(s => s.trim()).filter(s => s.length > 0);
        const favoriteTracks = favoriteTitles
            .map(title => tracks.find(t => t.title === title))
            .filter(t => t && t.url);

 
        const albomTitlesRaw = localStorage.getItem('trekA') || '';
        const AlbomTitles = albomTitlesRaw.split('\n').map(s => s.trim()).filter(s => s.length > 0);
        const allAlbumTracks = [];
        AlbomTitles.forEach(albomTitle => {
            const album = albomsBaze.find(a => a.title === albomTitle);
            if (album && album.album) {
                allAlbumTracks.push(...album.album);
            }
        });


        const allUrls = [
            ...favoriteTracks.map(t => t.url),
            ...allAlbumTracks.map(t => t.url)
        ];


        for (let i = 0; i < allUrls.length; i++) {
            await cacheAudioFile(allUrls[i]);

            if (progressBar) {
                progressBar.style.width = `${((i + 1) / allUrls.length) * 100}%`;
            }
        }

       await cacheAudioFile(window.location.origin + '/bababab/');
        await cacheAudioFile(window.location.origin + '/bababab/script.js'); 
        await cacheAudioFile(window.location.origin + '/bababab/izbran.html'); 
       await cacheAudioFile(window.location.origin + '/bababab/cash.html'); 
       await cacheAudioFile(window.location.origin + '/bababab/albom.html'); 
       await cacheAudioFile(window.location.origin + '/bababab/index.html');
       await cacheAudioFile(window.location.origin + '/bababab/trek.html'); 

    } catch (error) {
        console.error('Ошибка при ручном кэшировании:');
    } finally {
        loadingIndicator.style.display = 'none';
    }
}







async function manuallyRecacheAll() {
    const loadingIndicator = document.getElementById('loading-indicator');
    const progressBar = document.getElementById('progress-bar');
    loadingIndicator.style.display = 'block';

    try {

        const favoriteTitlesRaw = localStorage.getItem('trek') || '';
        const favoriteTitles = favoriteTitlesRaw.split('\n').map(s => s.trim()).filter(s => s.length > 0);
        const favoriteTracks = favoriteTitles
            .map(title => tracks.find(t => t.title === title))
            .filter(t => t && t.url);

 
        const albomTitlesRaw = localStorage.getItem('trekA') || '';
        const AlbomTitles = albomTitlesRaw.split('\n').map(s => s.trim()).filter(s => s.length > 0);
        const allAlbumTracks = [];
        AlbomTitles.forEach(albomTitle => {
            const album = albomsBaze.find(a => a.title === albomTitle);
            if (album && album.album) {
                allAlbumTracks.push(...album.album);
            }
        });


        const allUrls = [
            ...favoriteTracks.map(t => t.url),
            ...allAlbumTracks.map(t => t.url)
        ];


        for (let i = 0; i < allUrls.length; i++) {
            await cacheAudioFile(allUrls[i]);

            if (progressBar) {
                progressBar.style.width = `${((i + 1) / allUrls.length) * 100}%`;
            }
        }

       await cacheAudioFile(window.location.origin + '/bababab/');
        await cacheAudioFile(window.location.origin + '/bababab/script.js'); 
        await cacheAudioFile(window.location.origin + '/bababab/izbran.html'); 
       await cacheAudioFile(window.location.origin + '/bababab/cash.html'); 
       await cacheAudioFile(window.location.origin + '/bababab/albom.html'); 
       await cacheAudioFile(window.location.origin + '/bababab/index.html');
       await cacheAudioFile(window.location.origin + '/bababab/trek.html'); 


    } catch (error) {
        console.error('Ошибка при ручном кэшировании:');
    } finally {
        loadingIndicator.style.display = 'none';
    }
}











let peremesh = false;

let isSortedAlphabetically = false;
let isSortedByDate = false;

AboutTrackIndex = -1;

let currentHighlightedElement = null;





async function playTrack(index) {
  if (currentHighlightedElement) {
        currentHighlightedElement.classList.remove('highlight');
    }
        AboutTrackIndex = index;
        const track = tracks[index];

        try {
           const cachedResponse = await caches.open(CACHE_NAME).then(cache => cache.match(track.url));
        if (cachedResponse) {
            const audioBlob = await cachedResponse.blob();
            const audioUrl = URL.createObjectURL(audioBlob);
            audioPlayer.src = audioUrl;
            console.log('Ф');
           } else {
           
           if (navigator.onLine) {
                audioPlayer.src = track.url;
                audioPlayer.preload = 'auto';
                audioPlayer.load();
                console.log('');
            } else {
                throw new Error('Ф');
            }
            
      }

            

           


            await audioPlayer.play();
        } catch (error) {
            if (error.name === 'NotAllowedError') {
                console.log('ап');
            }
        }

        if (peremesh && shuffledFavorites.length > 0) {
            const currentTitle = track.title;
            currentShuffledIndex = shuffledFavorites.indexOf(currentTitle);
        }
        currentTrackIndex = { albumIndex: -1, trackIndex: index }
        const trackElements = Array.from(favoritesContainer.children);
        const currentTrackElement = trackElements.find(el => 
            el.querySelector('.track-button').textContent === track.title
        );
        if (currentTrackElement) {
          currentTrackElement.classList.add('highlight');
          currentHighlightedElement = currentTrackElement;
        }


   if (window.Telegram?.WebApp) {
  const user = Telegram.WebApp.initDataUnsafe?.user;
  if (user?.id) {
    sendPing(user.id);
    if (window.pingInterval) clearInterval(window.pingInterval);
    window.pingInterval = setInterval(() => sendPing(user.id), 25_000);
  }
}
   
    }


let currentTrackIndex = { albumIndex: -1, trackIndex: -1 };


async function playAlbomTrack(albumIndex, trackIndex) {
    const album = albomsBaze[albumIndex];
    if (!album || !album.album) {
        console.error("А");
        return;
    }
    let trackList = album.album;
    if (peremesh && shuffledAlbumTracks[album.title]) {
        trackList = shuffledAlbumTracks[album.title];
    } else if (isSortedAlphabetically) {
        trackList = [...album.album].sort((a, b) => a.title.localeCompare(b.title));
    } else if (isSortedByDate) {
        trackList = [...album.album].sort((a, b) => parseDate(a.titleDate) - parseDate(b.titleDate));
    }
    let track = trackList[trackIndex];
    const disabledTitlesRaw = localStorage.getItem('disabled') || '';
    const disabledTitles = disabledTitlesRaw.split('\n').map(s => s.trim()).filter(s => s.length > 0);
    while (track && disabledTitles.map(title => title.toLowerCase()).includes(track.title.toLowerCase())) {
        trackIndex++;
        if (trackIndex >= trackList.length) {
            trackIndex = 0; 
        }
        track = trackList[trackIndex];
    }
    if (track) {
        if (currentHighlightedElement) {
            currentHighlightedElement.classList.remove('highlight');
        }
        currentTrackIndex = { albumIndex, trackIndex };

        try {
          const cachedResponse = await caches.open(CACHE_NAME).then(cache => cache.match(track.url));
            if (cachedResponse) {
                const audioBlob = await cachedResponse.blob();
                const audioUrl = URL.createObjectURL(audioBlob);
                audioPlayer.src = audioUrl;
            } else {
                if (navigator.onLine) {
                    audioPlayer.src = track.url;
                    audioPlayer.preload = 'auto';
                    audioPlayer.load();
                } else {
                    throw new Error('Ф');
                }
            }
           await  audioPlayer.play();
        } catch (error) {
            console.error("Ошибка воспроизведения");
        }

        const albumElements = Array.from(albomContainer.querySelectorAll('.album-title'));
        let albumElement = null;
        for (let i = 0; i < albumElements.length; i++) {
            const titleElement = albumElements[i].querySelector('.title-text');
            if (titleElement && titleElement.textContent === album.title) {
                albumElement = albumElements[i];
                break;
            }
        }
        if (albumElement) {
            const tracksContainer = albumElement.nextElementSibling;
            if (tracksContainer && (tracksContainer.style.maxHeight === '0px' || tracksContainer.style.maxHeight === '')) {
                albumElement.click();
            }
            const trackButtons = Array.from(tracksContainer.querySelectorAll('.track-button'));
            let trackButton = null;
            for (let i = 0; i < trackButtons.length; i++) {
                if (trackButtons[i].textContent === track.title) {
                    trackButton = trackButtons[i];
                    break;
                }
            }
            if (trackButton) {
                trackButton.classList.add('highlight');
                currentHighlightedElement = trackButton;
                trackButton.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    } else {
        console.error("Т");
    }

    if (window.Telegram?.WebApp) {
  const user = Telegram.WebApp.initDataUnsafe?.user;
  if (user?.id) {
    sendPing(user.id);
    if (window.pingInterval) clearInterval(window.pingInterval);
    window.pingInterval = setInterval(() => sendPing(user.id), 25_000);
  }
}
   
}




const favoritesContainer = document.getElementById('favorites-container');
const albomContainer = document.getElementById('albom-container');
const audioPlayer = document.getElementById('audio-player');
function createAlbumToggleHandler(albumButton, tracksContainer) {
    return function() {

        const allAlbums = document.querySelectorAll('.album-title');
        allAlbums.forEach(element => {
            if (element !== albumButton) {
                const otherTracksContainer = element.nextElementSibling;
                if (otherTracksContainer && otherTracksContainer.classList.contains('tracks-container')) {
                    otherTracksContainer.style.maxHeight = '0px';
                    element.setAttribute('aria-expanded', 'false');
                }
            }
        });

        const isHidden = tracksContainer.style.maxHeight === '0px' || tracksContainer.style.maxHeight === '';
        tracksContainer.style.maxHeight = isHidden ? '1000px' : '0px';
        tracksContainer.style.transition = 'max-height 0.3s ease';
        albumButton.setAttribute('aria-expanded', isHidden ? 'true' : 'false');
    };
}

function UpdateFunction() {
    favoritesContainer.innerHTML = '';
    albomContainer.innerHTML = '';
    
    let GLOABALS = 0

    const favoriteTitlesRaw = localStorage.getItem('trek') || '';
    const favoriteTitles = favoriteTitlesRaw.split('\n').map(s => s.trim()).filter(s => s.length > 0);

    

    const favoriteTracks = favoriteTitles
        .map(title => tracks.find(t => t.title === title))
        .filter(t => t && t.url);

    const albomTitlesRaw = localStorage.getItem('trekA') || '';
    const AlbomTitles = albomTitlesRaw.split('\n').map(s => s.trim()).filter(s => s.length > 0)


let favoriteIndex = favoriteTracks.length;
let albumIndex = AlbomTitles.length;







AlbomTitles.forEach((albom, index) => {
        const albomMass = albomsBaze.find(a => a.title === albom);
        if (!albomMass) return;

        const albumDiv = document.createElement('div');
        albumDiv.style.marginBottom = '16px';
        albumDiv.style.display = 'flex';
        albumDiv.style.flexDirection = 'column';

        const titleText = document.createElement('span');
        titleText.className = 'title-text';
        titleText.textContent = albomMass.title;

        const albumNumber = document.createElement('span');
  albumNumber.textContent = `${albumIndex--}`;
  albumNumber.style.fontWeight = 'bold';
  albumNumber.className = 'num-btn09'
  albumNumber.style.marginRight = '10px'; 

        const deleteBtn2 = document.createElement('button');
        deleteBtn2.textContent = '-';
        deleteBtn2.className = 'delete-button';
        deleteBtn2.setAttribute('aria-label', `Удалить ${albomMass.title}`);

        deleteBtn2.addEventListener('click', () => {
            const rawFilter = albomTitlesRaw.split('\n').map(s => s.trim()).filter(s => s.length > 0);
            const updatedFavorites = rawFilter.filter(fav => fav !== albomMass.title);
            localStorage.setItem('trekA', updatedFavorites.join('\n'));
            UpdateFunction();
        });

        const albumButton = document.createElement('button');
        albumButton.className = 'album-title';
        albumButton.setAttribute('aria-expanded', 'false');
        albumButton.style.width = '100%';
        albumButton.style.textAlign = 'left';

        albumButton.appendChild(albumNumber)

        albumButton.appendChild(deleteBtn2);
        albumButton.appendChild(titleText);

        const tracksContainer = document.createElement('div');
        tracksContainer.className = 'tracks-container';
        tracksContainer.style.maxHeight = '0';
        tracksContainer.style.overflow = 'hidden';



let trackIndex = albomMass.album.length;

        albomMass.album.forEach(vf => {

            const trackContainer = document.createElement('div');
            trackContainer.style.display = 'flex';
            trackContainer.style.alignItems = 'center';
            trackContainer.style.justifyContent = 'space-between';
            trackContainer.style.marginBottom = '10px';

            const trackNumberBtn = document.createElement('span');
trackNumberBtn.textContent = `${trackIndex--}`;
trackNumberBtn.className = 'num-btn';
trackNumberBtn.style.marginRight = '10px';
trackContainer.appendChild(trackNumberBtn);
 

            const btnf = document.createElement('button');
            btnf.textContent = vf.title;
            btnf.className = 'track-button';
            btnf.title = `Воспроизвести ${vf.title}`;
            btnf.setAttribute('aria-label', `Воспроизвести ${vf.title}`);

            btnf.onclick = () => {
              console.log(albomMass)
    const albumIndex = albomsBaze.indexOf(albomMass);
    const trackIndex = albomMass.album.indexOf(vf);
    playAlbomTrack(albumIndex, trackIndex);
};

            const deleteBtn22 = document.createElement('button');
            deleteBtn22.textContent = '-';
            deleteBtn22.className = 'delete-button12';
            deleteBtn22.setAttribute('aria-label', `Удалить ${vf.title}`);

              const buttonContainer = document.createElement('div');
            buttonContainer.style.display = 'flex';
            buttonContainer.style.gap = '10px';

            const btnfDisabled = btnf.textContent;
            const disabledTitlesRaw = localStorage.getItem('disabled') || '';
            const disabledTitles = disabledTitlesRaw.split('\n').map(s => s.trim()).filter(s => s.length > 0);

            if (disabledTitles.map(title => title.toLowerCase()).includes(vf.title.toLowerCase())) {
              trackContainer.appendChild(trackNumberBtn);
              trackContainer.appendChild(btnf);
              deleteBtn22.remove()

              btnf.disabled = true;

              const restoreBtn89 = document.createElement('button');
              restoreBtn89.textContent = '+';
              restoreBtn89.className = 'restore-button';
              restoreBtn89.setAttribute('aria-label', `Восстановить ${vf.title}`);
              restoreBtn89.disabled = false; 

              restoreBtn89.addEventListener('click', (event) => {
                  event.preventDefault();
                  const disabledTitlesRaw09 = localStorage.getItem('disabled') || '';
            const disabledTitles09 = disabledTitlesRaw09.split('\n').map(s => s.trim()).filter(s => s.length > 0);
                  const updatedDisabledTitles = disabledTitles09.filter(title => title.toLowerCase() !== vf.title.toLowerCase());
                  localStorage.setItem('disabled', updatedDisabledTitles.join('\n'));
                  btnf.disabled = false; 
                  restoreBtn89.remove(); 
                  const disabledTitlesRaw3 = localStorage.getItem('disabled') || '';
                  const disabledTitles3 = disabledTitlesRaw3.split('\n').map(s => s.trim()).filter(s => s.length > 0);
                  buttonContainer.appendChild(deleteBtn22)

          
                
              } );

             trackContainer.appendChild(trackNumberBtn);
              trackContainer.appendChild(btnf);
              buttonContainer.appendChild(restoreBtn89);
      } else {
    
              buttonContainer.appendChild(deleteBtn22);

    trackContainer.appendChild(trackNumberBtn);
    trackContainer.appendChild(btnf);
}
 

            deleteBtn22.addEventListener('click', (event) => {
                event.stopPropagation();
                btnf.disabled = true; 
                const btnfDisabled = btnf.textContent;
                const disabledTitlesRaw = localStorage.getItem('disabled') || '';
                const disabledTitles = disabledTitlesRaw.split('\n').map(s => s.trim()).filter(s => s.length > 0);
                localStorage.setItem('disabled', btnfDisabled + '\n' + disabledTitles.join('\n'));
                console.log(`Трек "${btnfDisabled}" отключен.`);
              deleteBtn22.remove();

                const restoreBtn89 = document.createElement('button');
              restoreBtn89.textContent = '+';
              restoreBtn89.className = 'restore-button';
              restoreBtn89.setAttribute('aria-label', `Восстановить ${vf.title}`);
              restoreBtn89.disabled = false; 

              restoreBtn89.addEventListener('click', (event) => {
                  event.preventDefault();
                  const disabledTitlesRaw09 = localStorage.getItem('disabled') || '';
            const disabledTitles09 = disabledTitlesRaw09.split('\n').map(s => s.trim()).filter(s => s.length > 0);
                  const updatedDisabledTitles = disabledTitles09.filter(title => title.toLowerCase() !== vf.title.toLowerCase());
                  localStorage.setItem('disabled', updatedDisabledTitles.join('\n'));
                  btnf.disabled = false; 
                  buttonContainer.appendChild(deleteBtn22)
                  restoreBtn89.remove(); 

      
                
              })
              
              buttonContainer.appendChild(restoreBtn89);
            });




            
            if (disabledTitles.map(title => title.toLowerCase()).includes(vf.title.toLowerCase())) {
              deleteBtn22.remove();
            } 
            
            trackContainer.appendChild(btnf);
            trackContainer.appendChild(buttonContainer);
            tracksContainer.appendChild(trackContainer);
        });


albumButton.addEventListener('click', createAlbumToggleHandler(albumButton, tracksContainer));


        
        albumDiv.appendChild(albumButton);
        albumDiv.appendChild(tracksContainer);
        albomContainer.appendChild(albumDiv);
    });






    if (favoriteTracks.length === 0) {
        favoritesContainer.style.color = '#363E6B';
        favoritesContainer.style.padding = '10px';
        favoritesContainer.style.fontWeight = '600';
        favoritesContainer.style.userSelect = 'none';
    } else {
        favoriteTracks.forEach((track, index) => {
            const trackContainer = document.createElement('div');
            trackContainer.style.display = 'flex';
            trackContainer.style.alignItems = 'center';
            trackContainer.style.justifyContent = 'space-between';

            const btn = document.createElement('button');
            btn.textContent = track.title;
            btn.className = 'track-button';
            btn.disabled = !track.url;
            btn.title = `Воспроизвести ${track.title}`;
            btn.setAttribute('aria-label', `Воспроизвести ${track.title}`);

            const numberBtn = document.createElement('button');
            numberBtn.className = 'num-btn';
            numberBtn.textContent = favoriteIndex--;
            numberBtn.style.marginRight = '5px'

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = '-';
            deleteBtn.className = 'delete-button';
            deleteBtn.setAttribute('aria-label', `Удалить ${track.title}`);



            deleteBtn.addEventListener('click', (event) => {
                event.stopPropagation();
                const rawFilter = favoriteTitlesRaw.split('\n').map(s => s.trim()).filter(s => s.length > 0);
                const updatedFavorites = rawFilter.filter(fav => fav !== track.title);
                localStorage.setItem('trek', updatedFavorites.join('\n'));
                UpdateFunction();
            });

            btn.onclick = () => {
               playTrack(tracks.indexOf(track));
            };


            const buttonContainer = document.createElement('div');
            buttonContainer.style.display = 'flex';
            buttonContainer.style.gap = '10px';
            buttonContainer.appendChild(deleteBtn);

            trackContainer.appendChild(numberBtn)

            trackContainer.appendChild(btn);
            trackContainer.appendChild(buttonContainer);
            favoritesContainer.appendChild(trackContainer);
      }); 
    }

    




}



function ABCUpdateFunction() {
  favoritesContainer.innerHTML = '';
  albomContainer.innerHTML = '';

  const favoriteTitlesRaw = localStorage.getItem('trek') || '';
  const favoriteTitles = favoriteTitlesRaw.split('\n').map(s => s.trim()).filter(s => s.length > 0);

  const favoriteTracks = favoriteTitles
    .map(title => tracks.find(t => t.title === title))
    .filter(t => t && t.url);

  console.log(favoriteTracks)
  favoriteTracks.sort((a, b) => a.title.localeCompare(b.title));
  console.log(favoriteTracks)

  let favoriteIndex = favoriteTracks.length;



  if (favoriteTracks.length === 0) {
    favoritesContainer.style.color = '#363E6B';
    favoritesContainer.style.padding = '10px';
    favoritesContainer.style.fontWeight = '600';
    favoritesContainer.style.userSelect = 'none';
  } else {
    favoriteTracks.forEach((track, index) => {
      const trackContainer = document.createElement('div');
      trackContainer.style.display = 'flex';
      trackContainer.style.alignItems = 'center';
      trackContainer.style.justifyContent = 'space-between';

      const btn = document.createElement('button');
      btn.textContent = track.title;
      btn.className = 'track-button';
      btn.disabled = !track.url;
      btn.title = `Воспроизвести ${track.title}`;
      btn.setAttribute('aria-label', `Воспроизвести ${track.title}`);

      const numberBtn = document.createElement('button');
            numberBtn.className = 'num-btn';
            numberBtn.textContent = favoriteTracks.length - index;
            numberBtn.style.marginRight = '5px'

      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = '-';
      deleteBtn.className = 'delete-button';
      deleteBtn.setAttribute('aria-label', `Удалить ${track.title}`);

      deleteBtn.addEventListener('click', (event) => {
        event.stopPropagation();
        const rawFilter = favoriteTitlesRaw.split('\n').map(s => s.trim()).filter(s => s.length > 0);
        const updatedFavorites = rawFilter.filter(fav => fav !== track.title);
        localStorage.setItem('trek', updatedFavorites.join('\n'));
        ABCUpdateFunction();
      });

      btn.onclick = () => {
               playTrack(tracks.indexOf(track));
            };

      trackContainer.appendChild(numberBtn)

      trackContainer.appendChild(deleteBtn);
      trackContainer.appendChild(btn);
      favoritesContainer.appendChild(trackContainer);
    });
  }

  const albomTitlesRaw = localStorage.getItem('trekA') || '';
  const AlbomTitles = albomTitlesRaw.split('\n').map(s => s.trim()).filter(s => s.length > 0);
  get = []
  AlbomTitles.forEach(trackBearReat => {
    const derA = albomsBaze.find(a => a.title === trackBearReat);
    get.push(derA)
  })
  const getUpdate = get.sort((a, b) => a.title.localeCompare(b.title))


  let albumIndex = AlbomTitles.length;





  AlbomTitles.forEach((albom, index) => {


    const albomMass = getUpdate[index].album.sort((a, b) => a.title.localeCompare(b.title))



    if (getUpdate.length > index) {
      console.log(getUpdate.length)
      console.log('Конец')
    }


    if (!albomMass) return;


           const albumNumber = document.createElement('span');
            albumNumber.textContent = `${albumIndex--}.`;
            albumNumber.style.fontWeight = 'bold';
            albumNumber.className = 'num-btn09'
            albumNumber.style.marginRight = '10px'; 

     const trackContainer = document.createElement('div');
        trackContainer.style.display = 'flex'; 
        trackContainer.style.alignItems = 'center';
        trackContainer.style.justifyContent = 'space-between';
        trackContainer.style.width = '100%'; 
        trackContainer.style.marginBottom = '8px';

    const albumDiv = document.createElement('div');
    albumDiv.style.marginBottom = '16px';
    albumDiv.style.display = 'flex';
    albumDiv.style.flexDirection = 'column';

    const titleText = document.createElement('span');
    titleText.className = 'title-text';
    titleText.textContent = getUpdate[index].title;

    const deleteBtn2 = document.createElement('button');
    deleteBtn2.textContent = '-';
    deleteBtn2.className = 'delete-button';
    deleteBtn2.setAttribute('aria-label', `Удалить ${albomMass.title}`);

    deleteBtn2.addEventListener('click', () => {
      const rawFilter = albomTitlesRaw.split('\n').map(s => s.trim()).filter(s => s.length > 0);
      const updatedFavorites = rawFilter.filter(fav => fav !== getUpdate[index].title);
      localStorage.setItem('trekA', updatedFavorites.join('\n'));
      ABCUpdateFunction();
    });

    const albumButton = document.createElement('button');
    albumButton.className = 'album-title';
    albumButton.setAttribute('aria-expanded', 'false');
    albumButton.style.width = '100%';
    albumButton.style.textAlign = 'left';
    albumButton.appendChild(albumNumber)

    albumButton.appendChild(deleteBtn2);
    albumButton.appendChild(titleText);

    const tracksContainer = document.createElement('div');
    tracksContainer.className = 'tracks-container'; 
    tracksContainer.style.maxHeight = '0'; 
    tracksContainer.style.overflow = 'hidden';
    tracksContainer.style.display = 'flex'; 
    tracksContainer.style.flexDirection = 'column';

    let trackIndexA = albomMass.length;

    albomMass.forEach(vf => {
      
      const btnf = document.createElement('button');
      btnf.textContent = vf.title;
      btnf.className = 'track-button';
      btnf.title = `Воспроизвести ${vf.title}`;
      btnf.setAttribute('aria-label', `Воспроизвести ${vf.title}`);

       const trackContainer = document.createElement('div');
        trackContainer.style.display = 'flex'; 
        trackContainer.style.alignItems = 'center';
        trackContainer.style.justifyContent = 'space-between';
        trackContainer.style.width = '100%'; 
        trackContainer.style.marginBottom = '8px';

      const buttonContainer = document.createElement('div');
     buttonContainer.style.display = 'flex';
     buttonContainer.style.gap = '10px';

     const trackNumberBtn = document.createElement('span');
      trackNumberBtn.textContent = `${trackIndexA--}`;
      trackNumberBtn.className = 'num-btn';
      trackNumberBtn.style.marginRight = '10px';
      trackContainer.appendChild(trackNumberBtn);

      const disabledTitlesRaw = localStorage.getItem('disabled') || '';
      const disabledTitles = disabledTitlesRaw.split('\n').map(s => s.trim()).filter(s => s.length > 0);
      if (disabledTitles.map(title => title.toLowerCase()).includes(vf.title.toLowerCase())) {
        btnf.disabled = true;

        const restoreBtn = document.createElement('button');
        restoreBtn.textContent = '+';
        restoreBtn.className = 'restore-button';
        restoreBtn.setAttribute('aria-label', `Восстановить ${vf.title}`);
        restoreBtn.disabled = false; 

        restoreBtn.addEventListener('click', (event) => {
            event.preventDefault();
            const disabledTitlesRaw09 = localStorage.getItem('disabled') || '';
      const disabledTitles09 = disabledTitlesRaw09.split('\n').map(s => s.trim()).filter(s => s.length > 0);
            const updatedDisabledTitles = disabledTitles09.filter(title => title.toLowerCase() !== vf.title.toLowerCase());
            localStorage.setItem('disabled', updatedDisabledTitles.join('\n'));
            btnf.disabled = false; 
            restoreBtn.remove(); 
            const disabledTitlesRaw3 = localStorage.getItem('disabled') || '';
            const disabledTitles3 = disabledTitlesRaw3.split('\n').map(s => s.trim()).filter(s => s.length > 0);
            console.log(disabledTitles3); 
        });

        buttonContainer.appendChild(restoreBtn);
      }

      btnf.onclick = () => {
        const albumIndex = albomsBaze.indexOf(getUpdate[index]);
        const trackIndex = getUpdate[index].album.indexOf(vf);
        playAlbomTrack(albumIndex, trackIndex);
      };

      const deleteBtn22 = document.createElement('button');
      deleteBtn22.textContent = '-';
      deleteBtn22.className = 'delete-button';
      deleteBtn22.setAttribute('aria-label', `Удалить ${albomMass.title}`);

      deleteBtn22.addEventListener('click', (event) => {
        event.stopPropagation(); 
        btnf.disabled = true;
        const btnfDisabled = btnf.textContent;
        const disabledTitlesRaw = localStorage.getItem('disabled') || '';
        const disabledTitles = disabledTitlesRaw.split('\n').map(s => s.trim()).filter(s => s.length > 0);
        localStorage.setItem('disabled', btnfDisabled + '\n' + disabledTitles.join('\n'));
        const restoreBtn = document.createElement('button');
        restoreBtn.textContent = '+';
        restoreBtn.className = 'restore-button';
        restoreBtn.setAttribute('aria-label', `Восстановить ${vf.title}`);
        restoreBtn.disabled = false; 

        restoreBtn.addEventListener('click', () => {
          event.stopPropagation(); 
          const disabledTitlesRaw091 = localStorage.getItem('disabled') || '';
      const disabledTitles091 = disabledTitlesRaw091.split('\n').map(s => s.trim()).filter(s => s.length > 0);
            const updatedDisabledTitles1 = disabledTitles091.filter(title => title.toLowerCase() !== vf.title.toLowerCase());
            localStorage.setItem('disabled', updatedDisabledTitles1.join('\n'));
            btnf.disabled = false; 
            restoreBtn.remove(); 
            const disabledTitlesRaw3 = localStorage.getItem('disabled') || '';
            const disabledTitles3 = disabledTitlesRaw3.split('\n').map(s => s.trim()).filter(s => s.length > 0);
            console.log(disabledTitles3); 

    
          
        });

        buttonContainer.appendChild(restoreBtn);


      });
       buttonContainer.appendChild(deleteBtn22);

       trackContainer.appendChild(btnf);
       trackContainer.appendChild(buttonContainer);
       tracksContainer.appendChild(trackContainer);
   } 
);


albumButton.addEventListener('click', createAlbumToggleHandler(albumButton, tracksContainer));


    albumDiv.appendChild(albumButton);
    albumDiv.appendChild(tracksContainer);
    albomContainer.appendChild(albumDiv);
  });
}

function DateUpdateFunction() {
  favoritesContainer.innerHTML = '';
  albomContainer.innerHTML = '';
   console.log('есть')

    isSortedAlphabetically = false;
  isSortedByDate = true;
  peremesh = false;

  const favoriteTitlesRaw = localStorage.getItem('trek') || '';
  const favoriteTitles = favoriteTitlesRaw.split('\n').map(s => s.trim()).filter(s => s.length > 0);

  const favoriteTracks = favoriteTitles
    .map(title => tracks.find(t => t.title === title))
    .filter(t => t && t.url);


  favoriteTracks.sort((a, b) => parseDate(a.date) - parseDate(b.date));

  if (favoriteTracks.length === 0) {
    favoritesContainer.style.color = '#363E6B';
    favoritesContainer.style.padding = '10px';
    favoritesContainer.style.fontWeight = '600';
    favoritesContainer.style.userSelect = 'none';
  } else {
    favoriteTracks.forEach((track, index) => {
      const trackContainer = document.createElement('div');
      trackContainer.style.display = 'flex';
      trackContainer.style.alignItems = 'center';
      trackContainer.style.justifyContent = 'space-between';

      const btn = document.createElement('button');
      btn.textContent = track.title;
      btn.className = 'track-button';
      btn.disabled = !track.url;
      btn.title = `Воспроизвести ${track.title}`;
      btn.setAttribute('aria-label', `Воспроизвести ${track.title}`);

      const numberBtn = document.createElement('button');
            numberBtn.className = 'num-btn';
            numberBtn.textContent = favoriteTracks.length - index;
            numberBtn.style.marginRight = '5px'



      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = '-';
      deleteBtn.className = 'delete-button';
      deleteBtn.setAttribute('aria-label', `Удалить ${track.title}`);

      

      deleteBtn.addEventListener('click', (event) => {
        event.stopPropagation();
        const rawFilter = favoriteTitlesRaw.split('\n').map(s => s.trim()).filter(s => s.length > 0);
        const updatedFavorites = rawFilter.filter(fav => fav !== track.title);
        localStorage.setItem('trek', updatedFavorites.join('\n'));
        DateUpdateFunction();
      });

     btn.onclick = () => {
          playTrack(tracks.indexOf(track));
      };
      trackContainer.appendChild(numberBtn)

      trackContainer.appendChild(btn);
      trackContainer.appendChild(deleteBtn);
      favoritesContainer.appendChild(trackContainer);
    });
  }

  const albomTitlesRaw = localStorage.getItem('trekA') || '';
  const AlbomTitles = albomTitlesRaw.split('\n').map(s => s.trim()).filter(s => s.length > 0);

   AlbomTitles.sort((titleA, titleB) => {
  const albomA = albomsBaze.find(album => album.title === titleA);
  const albomB = albomsBaze.find(album => album.title === titleB);
  if (!albomA || !albomB) return 0;
  return new Date(albomB.titleDate) - new Date(albomA.titleDate);
});


albumIndex = AlbomTitles.length
  AlbomTitles.forEach(albom => {
    const albumNumber = document.createElement('span');
            albumNumber.textContent = `${albumIndex--}`;
            albumNumber.style.fontWeight = 'bold';
            albumNumber.className = 'num-btn09'
            albumNumber.style.marginRight = '10px'; 
          

    
    const albomMass = albomsBaze.find(a => a.title === albom);
     albomMass.album.sort((a, b) => parseDate(a.titleDate) - parseDate(b.titleDate));
    if (!albomMass) return;
    

    const albumDiv = document.createElement('div');
    albumDiv.style.marginBottom = '16px';
    albumDiv.style.display = 'flex';
    albumDiv.style.flexDirection = 'column';

     const albomRowDate = document.createElement('div');
    albomRowDate.style.display = 'flex';
    albomRowDate.style.gap = '16px';

    const titleText = document.createElement('span');
    titleText.className = 'title-text';
    titleText.textContent = albomMass.title;

    const deleteBtn2 = document.createElement('button');
    deleteBtn2.textContent = '-';
    deleteBtn2.className = 'delete-button';
    deleteBtn2.setAttribute('aria-label', `Удалить ${albomMass.title}`);

    deleteBtn2.addEventListener('click', () => {
      const rawFilter = albomTitlesRaw.split('\n').map(s => s.trim()).filter(s => s.length > 0);
      const updatedFavorites = rawFilter.filter(fav => fav !== albomMass.title);
      localStorage.setItem('trekA', updatedFavorites.join('\n'));
      DateUpdateFunction();
    });

    const albumButton = document.createElement('button');
    albumButton.className = 'album-title';
    albumButton.setAttribute('aria-expanded', 'false');
    albumButton.style.width = '100%';
    albumButton.style.textAlign = 'left';
    albumButton.appendChild(albumNumber)



    albumButton.appendChild(deleteBtn2);
    albumButton.appendChild(titleText);

     const tracksContainer = document.createElement('div');
    tracksContainer.className = 'tracks-container'; 
    tracksContainer.style.maxHeight = '0'; 
    tracksContainer.style.overflow = 'hidden';
    tracksContainer.style.display = 'flex'; 
    tracksContainer.style.flexDirection = 'column';

    const trackContainer = document.createElement('div');
        trackContainer.style.display = 'flex'; 
        trackContainer.style.alignItems = 'center';
        trackContainer.style.justifyContent = 'space-between';
        trackContainer.style.width = '100%'; 
        trackContainer.style.marginBottom = '8px';

    albomMass.album.forEach((vf, index) => {

      const trackContainer = document.createElement('div');
  trackContainer.style.display = 'flex'; 
  trackContainer.style.alignItems = 'center';
  trackContainer.style.justifyContent = 'space-between';
  trackContainer.style.width = '100%'; 
  trackContainer.style.marginBottom = '8px';

      const trackNumberBtn = document.createElement('span');
trackNumberBtn.textContent = `${albomMass.album.length - index}`;
trackNumberBtn.className = 'num-btn';
trackNumberBtn.style.marginRight = '10px';
trackContainer.appendChild(trackNumberBtn);

  



  const btnf = document.createElement('button');
  btnf.textContent = vf.title;
  btnf.className = 'track-button';
  btnf.title = `Воспроизвести ${vf.title}`;
  btnf.setAttribute('aria-label', `Воспроизвести ${vf.title}`);

   const buttonContainer = document.createElement('div');
  buttonContainer.style.display = 'flex';
  buttonContainer.style.gap = '10px';


  trackContainer.appendChild(btnf);



      

      const disabledTitlesRaw = localStorage.getItem('disabled') || '';
      const disabledTitles = disabledTitlesRaw.split('\n').map(s => s.trim()).filter(s => s.length > 0);
      console.log(disabledTitles)
      if (disabledTitles.map(title => title.toLowerCase()).includes(vf.title.toLowerCase())) {
        btnf.disabled = true;

        const restoreBtn = document.createElement('button');
        restoreBtn.textContent = '+';
        restoreBtn.className = 'restore-button';
        restoreBtn.setAttribute('aria-label', `Восстановить ${vf.title}`);
        restoreBtn.disabled = false; 

        restoreBtn.addEventListener('click', (event) => {
            event.preventDefault();
            const disabledTitlesRaw09 = localStorage.getItem('disabled') || '';
      const disabledTitles09 = disabledTitlesRaw09.split('\n').map(s => s.trim()).filter(s => s.length > 0);
            const updatedDisabledTitles = disabledTitles09.filter(title => title.toLowerCase() !== vf.title.toLowerCase());
            localStorage.setItem('disabled', updatedDisabledTitles.join('\n'));
            btnf.disabled = false; 
            restoreBtn.remove(); 
            const disabledTitlesRaw3 = localStorage.getItem('disabled') || '';
            const disabledTitles3 = disabledTitlesRaw3.split('\n').map(s => s.trim()).filter(s => s.length > 0);
        
          
        });

        buttonContainer.appendChild(restoreBtn);
      }

      btnf.onclick = () => {
    
    const albumIndex = albomsBaze.indexOf(albomMass);
    const trackIndex = albomMass.album.indexOf(vf);
    playAlbomTrack(albumIndex, trackIndex);
};

      const deleteBtn22 = document.createElement('button');
      deleteBtn22.textContent = '-';
      deleteBtn22.className = 'delete-button';
      deleteBtn22.setAttribute('aria-label', `Удалить ${albomMass.title}`);


      deleteBtn22.addEventListener('click', (event) => {
        event.stopPropagation(); 
        btnf.disabled = true;
        const btnfDisabled = btnf.textContent;
        const disabledTitlesRaw = localStorage.getItem('disabled') || '';
        const disabledTitles = disabledTitlesRaw.split('\n').map(s => s.trim()).filter(s => s.length > 0);
        localStorage.setItem('disabled', btnfDisabled + '\n' + disabledTitles.join('\n'));



        const restoreBtn = document.createElement('button');
        restoreBtn.textContent = '+';
        restoreBtn.className = 'restore-button';
        restoreBtn.setAttribute('aria-label', `Восстановить ${vf.title}`);
        restoreBtn.disabled = false; 

        restoreBtn.addEventListener('click', () => {
          event.stopPropagation(); 
          const disabledTitlesRaw091 = localStorage.getItem('disabled') || '';
      const disabledTitles091 = disabledTitlesRaw091.split('\n').map(s => s.trim()).filter(s => s.length > 0);
            const updatedDisabledTitles1 = disabledTitles091.filter(title => title.toLowerCase() !== vf.title.toLowerCase());
            localStorage.setItem('disabled', updatedDisabledTitles1.join('\n'));
            btnf.disabled = false; 
            restoreBtn.remove();  
            const disabledTitlesRaw3 = localStorage.getItem('disabled') || '';
            const disabledTitles3 = disabledTitlesRaw3.split('\n').map(s => s.trim()).filter(s => s.length > 0);
        });

        buttonContainer.appendChild(restoreBtn);


      });
      buttonContainer.appendChild(deleteBtn22);

       trackContainer.appendChild(btnf);
       trackContainer.appendChild(buttonContainer);
       tracksContainer.appendChild(trackContainer);
   } 
);


albumButton.addEventListener('click', createAlbumToggleHandler(albumButton, tracksContainer));

    albumDiv.appendChild(albumButton);
    albumDiv.appendChild(tracksContainer);
    albomContainer.appendChild(albumDiv);
  });
}

const searchInput = document.querySelector('.searchL input[type="text"]');
const searchForm = document.querySelector('.searchL');

searchForm.addEventListener('submit', (event) => {
  event.preventDefault(); 

   const allAlbumButtons = document.querySelectorAll('.album-title');
const allTrackContainers = document.querySelectorAll('.tracks-container');
allAlbumButtons.forEach(btn => btn.setAttribute('aria-expanded', 'false'));
allTrackContainers.forEach(container => {
  container.style.maxHeight = '0px';
});

  const query = searchInput.value.toLowerCase();

  const favoriteTitlesRaw = localStorage.getItem('trek') || '';
  const favoriteTitles = favoriteTitlesRaw.split('\n').map(s => s.trim()).filter(s => s.length > 0);

  const albomTitlesRaw = localStorage.getItem('trekA') || '';
  const albomTitles = albomTitlesRaw.split('\n').map(s => s.trim()).filter(s => s.length > 0);

  const albomToScrollTo = albomTitles.find(title => title.toLowerCase().includes(query));
  const trackToScrollTo = favoriteTitles.find(title => title.toLowerCase().includes(query));

  const ver = Array.from(favoritesContainer.children);
  const verA = Array.from(albomContainer.children);

  if (trackToScrollTo) {
    const Element = ver.find(child => child.textContent.includes(trackToScrollTo));
    if (Element) {
      Element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      Element.classList.add('highlight');
      setTimeout(() => {
        Element.classList.remove('highlight');
      }, 2000);
    }
  }

  if (albomToScrollTo) {
    const ElementA = verA.find(child => child.querySelector('.title-text').textContent.includes(albomToScrollTo));
    if (ElementA) {
      ElementA.scrollIntoView({ behavior: 'smooth', block: 'center' });
      ElementA.classList.add('highlight');
      setTimeout(() => {
        ElementA.classList.remove('highlight');
      }, 2000);
    }
  } 
  else {
    let trackFound = false; 
    albomsT.forEach(titleTracks => {
      const filteredAlbomTitle = titleTracks.album;
      const FeAlbomTitle = filteredAlbomTitle.find(title12 => title12.title.toLowerCase().includes(query));

      if (FeAlbomTitle) {
        const albumElement = verA.find(child => child.querySelector(".title-text").textContent.includes(titleTracks.title));
        if (albumElement) {
          const TC = Array.from(albumElement.querySelectorAll(".tracks-container button"));
          const lement = TC.find(child => child.textContent.includes(FeAlbomTitle.title));
          const allAlbums = document.querySelectorAll('.tracks-container');
          allAlbums.forEach(container => {
            if (container !== albumElement.querySelector('.tracks-container')) {
              container.style.maxHeight = '0'; 
              container.parentElement.querySelector('.album-title').setAttribute('aria-expanded', 'false');
            }
          });
          albumElement.querySelector('.album-title').click();
          if (lement) { 
            albumElement.scrollIntoView({behavior: 'smooth', block: 'center'})
            setTimeout(() => {
              lement.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 500)

            setTimeout(() => {
              lement.classList.add('highlight');
              setTimeout(() => {
                lement.classList.remove('highlight');
                lement.classList.add('fade-out'); 
                setTimeout(() => {
                  lement.classList.remove('fade-out'); 
                }, 750);
              }, 3000);
            }, 300); 

            trackFound = true;
          }
        }
      }
    });
  }



});

  function NumbercreateTrackRow(track, index, totalTrack) {
      const row = document.createElement('div');
      row.className = 'track-row';
      const favoriteTitlesRaw = localStorage.getItem('trek') || '';

      const trackBtn = document.createElement('button');
      trackBtn.className = 'track-button';
      trackBtn.textContent = track.title;
      trackBtn.title = `Воспроизвести ${track.title}`;
      trackBtn.disabled = !track.url;
      trackBtn.onclick = () => {
               playTrack(tracks.indexOf(track));
            };

      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = '-';
      deleteBtn.className = 'delete-button';
      deleteBtn.setAttribute('aria-label', `Удалить ${track.title}`);

      deleteBtn.addEventListener('click', (event) => {
        event.stopPropagation();
        const rawFilter = favoriteTitlesRaw.split('\n').map(s => s.trim()).filter(s => s.length > 0);
        const updatedFavorites = rawFilter.filter(fav => fav !== track.title);
        localStorage.setItem('trek', updatedFavorites.join('\n'));
        ABCUpdateFunction();
      });

      const numberBtn = document.createElement('button');
            numberBtn.className = 'num-btn';
            numberBtn.textContent = totalTrack.length - index;
            numberBtn.style.marginRight = '5px'


      row.appendChild(numberBtn);
      row.appendChild(trackBtn);
row.appendChild(deleteBtn);

      return row;
    }

  function ANumbercreateTrackRow(track ,index, totalTrack) {
    const AlbomTitlesRaw = localStorage.getItem('trekA') || '';
    



    const albumDiv = document.createElement('div');
    albumDiv.style.marginBottom = '16px';
    albumDiv.style.display = 'flex';
    albumDiv.style.flexDirection = 'column';

    const titleText = document.createElement('span');
    titleText.className = 'title-text';
    titleText.textContent = track.title;

    const albumButton = document.createElement('button');
    albumButton.className = 'album-title';
    albumButton.setAttribute('aria-expanded', 'false');
    albumButton.style.width = '100%';
    albumButton.style.textAlign = 'left';

    const deleteBtn212 = document.createElement('button');
    deleteBtn212.textContent = '-';
    deleteBtn212.className = 'delete-button';
    deleteBtn212.setAttribute('aria-label', `Удалить ${track.title}`);

    deleteBtn212.addEventListener('click', () => {
        const rawFilter = AlbomTitlesRaw.split('\n').map(s => s.trim()).filter(s => s.length > 0);
        const updatedFavorites = rawFilter.filter(fav => fav !== track.title);
        localStorage.setItem('trekA', updatedFavorites.join('\n'));
        ABCUpdateFunction();
    });

    const numberBtn = document.createElement('button');
            numberBtn.className = 'num-btn09';
            numberBtn.textContent = totalTrack.length - index;
            numberBtn.style.marginRight = '5px'

    albumButton.appendChild(numberBtn)
    albumButton.appendChild(titleText);
    albumButton.appendChild(deleteBtn212);

    const tracksContainer = document.createElement('div');
    tracksContainer.className = 'tracks-container'; 
    tracksContainer.style.maxHeight = '0'; 
    tracksContainer.style.overflow = 'hidden';
    tracksContainer.style.display = 'flex'; 
    tracksContainer.style.flexDirection = 'column'; 

    const der = track.album.sort((a, b) => a.title.localeCompare(b.title));

    let trackIndex9 = track.album.length;
    der.forEach(albom => {
        const trackContainer = document.createElement('div');
        trackContainer.style.display = 'flex'; 
        trackContainer.style.alignItems = 'center';
        trackContainer.style.justifyContent = 'space-between';
        trackContainer.style.width = '100%'; 
        trackContainer.style.marginBottom = '8px';

        const buttonContainer = document.createElement('div');
    buttonContainer.style.display = 'flex';
    buttonContainer.style.gap = '10px';

                const trackNumberBtn = document.createElement('span');
trackNumberBtn.textContent = `${trackIndex9--}`;
trackNumberBtn.className = 'num-btn';
trackNumberBtn.style.marginRight = '10px';
trackContainer.appendChild(trackNumberBtn);



      const deleteBtn221 = document.createElement('button');
        deleteBtn221.textContent = '-';
        deleteBtn221.className = 'delete-button';
        deleteBtn221.setAttribute('aria-label', `Удалить ${albom.title}`);

        const restoreBtn0 = document.createElement('button');
        restoreBtn0.className = 'restore-button';
        restoreBtn0.setAttribute('aria-label', `Восстановить ${albom.title}`);
        restoreBtn0.disabled = false; 
        restoreBtn0.textContent = '+'; 

        restoreBtn0.addEventListener('click', (event) => {
            event.stopPropagation(); 
            const disabledTitlesRaw0911 = localStorage.getItem('disabled') || '';
            const disabledTitles0911 = disabledTitlesRaw0911.split('\n').map(s => s.trim()).filter(s => s.length > 0);
            const updatedDisabledTitles13 = disabledTitles0911.filter(title => title.toLowerCase() !== albom.title.toLowerCase());
            localStorage.setItem('disabled', updatedDisabledTitles13.join('\n'));
            btnf2.disabled = false;
            restoreBtn0.remove();
          buttonContainer.appendChild(deleteBtn221);

            

         
          
        });

        const btnf2 = document.createElement('button');
        btnf2.textContent = albom.title;
        btnf2.className = 'track-button';
        btnf2.title = `Воспроизвести ${albom.title}`;
        btnf2.setAttribute('aria-label', `Воспроизвести ${albom.title}`);
        btnf2.onclick = () => {
          playAlbomTrack(albomsBaze.indexOf(track), track.album.indexOf(albom));
       };

        

        const disabledTitlesRaw67 = localStorage.getItem('disabled') || '';
        const disabledTitles67 = disabledTitlesRaw67.split('\n').map(s => s.trim()).filter(s => s.length > 0);
        if (disabledTitles67.map(title => title.toLowerCase()).includes(albom.title.toLowerCase())) {
            btnf2.disabled = true;
            buttonContainer.appendChild(restoreBtn0);
        }

        

        
        deleteBtn221.addEventListener('click', (event) => {
            event.stopPropagation(); 
            btnf2.disabled = true;
            const btnfDisabled = btnf2.textContent;
            const disabledTitlesRaw = localStorage.getItem('disabled') || '';
            const disabledTitles = disabledTitlesRaw.split('\n').map(s => s.trim()).filter(s => s.length > 0);
            localStorage.setItem('disabled', btnfDisabled + '\n' + disabledTitles.join('\n')); 
            buttonContainer.appendChild(restoreBtn0);
            deleteBtn221.remove()
        });


      buttonContainer.appendChild(deleteBtn221);
        trackContainer.appendChild(btnf2);
        trackContainer.appendChild(buttonContainer);
        tracksContainer.appendChild(trackContainer);
    });

albumButton.addEventListener('click', createAlbumToggleHandler(albumButton, tracksContainer));

    albumDiv.append(albumButton);
    albumDiv.appendChild(tracksContainer);

    return albumDiv;
}

  document.getElementById('sort-button').addEventListener('click', (event) => {
   event.preventDefault();  
   favoritesContainer.innerHTML = '';
   const favoriteTitlesRaw = localStorage.getItem('trek') || '';
   const favoriteTitles = favoriteTitlesRaw.split('\n').map(s => s.trim()).filter(s => s.length > 0);

   favoriteTitles.sort((a, b) => a.localeCompare(b));

   favoriteTitles.forEach((trackSort, index) => {
       const track = tracks.find(t => t.title === trackSort);
       const clearTrackRowToSort = NumbercreateTrackRow(track, index, favoriteTitles);
       favoritesContainer.appendChild(clearTrackRowToSort);
   });

   albomContainer.innerHTML = '';

   const albomTitlesRaw = localStorage.getItem('trekA') || '';
   const AlbomTitles = albomTitlesRaw.split('\n').map(s => s.trim()).filter(s => s.length > 0);

   AlbomTitles.sort((a, b) => a.localeCompare(b));

    const albumObjects = AlbomTitles.map(title => albomsBaze.find(a => a.title === title)).filter(a => a);

   albumObjects.sort((a, b) => a.title.localeCompare(b.title));

   AlbomTitles.forEach((AlbomSort, index) => {
       const AlbomTrack = albomsT.find(t => t.title === AlbomSort);
       const AclearTrackRowToSort = ANumbercreateTrackRow(AlbomTrack , index, albumObjects);
       albomContainer.appendChild(AclearTrackRowToSort);
   });

  })

    function DateNumbercreateTrackRow(track, index, totalTrack) {
      const row = document.createElement('div');
      row.className = 'track-row';

      const albomTitlesRaw = localStorage.getItem('trekA') || '';
   const AlbomTitles = albomTitlesRaw.split('\n').map(s => s.trim()).filter(s => s.length > 0);




      

      const trackBtn = document.createElement('button');
      trackBtn.className = 'track-button';
      trackBtn.textContent = track.title;
      trackBtn.title = `Воспроизвести ${track.title}`;
      trackBtn.disabled = !track.url;
      trackBtn.onclick = () => {
          playTrack(tracks.indexOf(track));
      };
      const deleteBtn56 = document.createElement('button');
      deleteBtn56.textContent = '-';
      deleteBtn56.className = 'delete-button';
      deleteBtn56.setAttribute('aria-label', `Удалить ${track.title}`);

      deleteBtn56.addEventListener('click', (event) => {
        event.stopPropagation();
        const favoriteTitlesRawUpdate = localStorage.getItem('trek') || '';
        const rawFilterDate = favoriteTitlesRawUpdate.split('\n').map(s => s.trim()).filter(s => s.length > 0);
        const updatedFavorites = rawFilterDate.filter(fav => fav !== track.title);
        localStorage.setItem('trek', updatedFavorites.join('\n'));
        DateUpdateFunction();
      });

      const numberBtn = document.createElement('button');
            numberBtn.className = 'num-btn';
            numberBtn.textContent = totalTrack.length - index;
            numberBtn.style.marginRight = '5px'




      row.appendChild(numberBtn)
      row.appendChild(trackBtn);
      row.appendChild(deleteBtn56);

      return row;

    }




    function DateAlbom(track, index, trackFull) {
      const albomTitlesRaw = localStorage.getItem('trekA') || '';
   const AlbomTitles = albomTitlesRaw.split('\n').map(s => s.trim()).filter(s => s.length > 0);
  console.log('стоп')





      monthDay = {
        '01': 'янв',
        '02': 'фев',
        '03': 'мар',
        '04': 'апр',
        '05': 'май',
        '06': 'июн',
        '07': 'июл',
        '08': 'авг',
        '09': 'сен',
        '10': 'окт',
        '11': 'нояб',
        '12': 'дек',


      }

       const albumDiv = document.createElement('div');
    albumDiv.style.marginBottom = '16px';
    albumDiv.style.display = 'flex';
    albumDiv.style.flexDirection = 'column';


      const numberBtn = document.createElement('button');
            numberBtn.className = 'num-btn09';
            numberBtn.textContent = trackFull.length - index;
            numberBtn.style.marginRight = '5px'


      const titleText = document.createElement('span');
    titleText.className = 'title-text';
    titleText.textContent = track.title;

    const albomRowDate = document.createElement('div');
    albomRowDate.style.display = 'flex';
    albomRowDate.style.gap = '16px';

    const albumButton = document.createElement('button');
    albumButton.className = 'album-title';
    albumButton.setAttribute('aria-expanded', 'false');
    albumButton.style.width = '100%';
    albumButton.style.textAlign = 'left';
    albumButton.appendChild(numberBtn)




const deleteBtn2124 = document.createElement('button');
    deleteBtn2124.textContent = '-';
    deleteBtn2124.className = 'delete-button';
    deleteBtn2124.setAttribute('aria-label', `Удалить ${track.title}`);

    deleteBtn2124.addEventListener('click', () => {
        const updatedFavorites = AlbomTitles.filter(fav => fav !== track.title);
        localStorage.setItem('trekA', updatedFavorites.join('\n'));
        DateUpdateFunction();
    });

    albumButton.appendChild(deleteBtn2124)





    const tracksContainer = document.createElement('div');
    tracksContainer.className = 'tracks-container'; 
    tracksContainer.style.maxHeight = '0'; 
    tracksContainer.style.overflow = 'hidden';

   const sortedTracks = [...track.album].sort((a, b) => parseDate(a.titleDate) - parseDate(b.titleDate));
   const s = [...track.album]


    sortedTracks.forEach((albom, albomIndex) => {
      const albomRow = document.createElement('div');
    albomRow.style.display = 'flex';
    albomRow.style.gap = '16px'




    const trackNumberBtn = document.createElement('span');
trackNumberBtn.textContent = `${sortedTracks.length - albomIndex}`;
trackNumberBtn.className = 'num-btn';
trackNumberBtn.style.marginRight = '10px';
albomRow.appendChild(trackNumberBtn);

    





     

      const btnf290 = document.createElement('button');
      btnf290.textContent = albom.title;
      btnf290.className = 'track-button';
      btnf290.title = `Воспроизвести ${albom.title}`;
      btnf290.setAttribute('aria-label', `Воспроизвести ${albom.title}`);
       btnf290.onclick = () => {
    
    const albumIndex = albomsBaze.indexOf(track);
    const trackIndex = sortedTracks.indexOf(albom);
    playAlbomTrack(albumIndex, trackIndex);
};



      const restoreBtn0 = document.createElement('button');
        restoreBtn0.className = 'restore-button';
        restoreBtn0.setAttribute('aria-label', `Восстановить ${albom.title}`);
        restoreBtn0.disabled = false; 
        restoreBtn0.textContent = '+'; 

        const deleteBtn2210 = document.createElement('button');
      deleteBtn2210.textContent = '-';
      deleteBtn2210.className = 'delete-button';
      deleteBtn2210.setAttribute('aria-label', `Удалить ${albom.title}`);

      deleteBtn2210.addEventListener('click', (event) => {
        event.stopPropagation(); 
        btnf290.disabled = true;
        const btnfDisabled = btnf290.textContent;
        const disabledTitlesRaw = localStorage.getItem('disabled') || '';
        const disabledTitles = disabledTitlesRaw.split('\n').map(s => s.trim()).filter(s => s.length > 0);
        localStorage.setItem('disabled', btnfDisabled + '\n' + disabledTitles.join('\n'));
        deleteBtn2210.remove()
        albomRow.appendChild(restoreBtn0)


      });

        restoreBtn0.addEventListener('click', (event) => {
          event.stopPropagation(); 
          const disabledTitlesRaw0911 = localStorage.getItem('disabled') || '';
      const disabledTitles0911 = disabledTitlesRaw0911.split('\n').map(s => s.trim()).filter(s => s.length > 0);
            const updatedDisabledTitles13 = disabledTitles0911.filter(title => title.toLowerCase() !== albom.title.toLowerCase());
            localStorage.setItem('disabled', updatedDisabledTitles13.join('\n'));
            btnf290.disabled = false;
            albomRow.appendChild(deleteBtn2210)
            restoreBtn0.remove()

    
        })



        const disabledTitlesRaw67 = localStorage.getItem('disabled') || '';
      const disabledTitles67 = disabledTitlesRaw67.split('\n').map(s => s.trim()).filter(s => s.length > 0);

      
      albomRow.appendChild(btnf290)

      tracksContainer.appendChild(albomRow)

      if (disabledTitles67.map(title => title.toLowerCase()).includes(albom.title.toLowerCase())) {
        btnf290.disabled = true;
         deleteBtn2210.remove()
        albomRow.appendChild(restoreBtn0)
      } else {
        albomRow.appendChild(deleteBtn2210)
      }

    })
    albomRowDate.appendChild(titleText)
    albumButton.appendChild(albomRowDate)


albumButton.addEventListener('click', createAlbumToggleHandler(albumButton, tracksContainer));


      albumDiv.appendChild(albumButton)
      albumDiv.appendChild(tracksContainer)

      return albumDiv
    }




  document.getElementById('sort-button').addEventListener('click', (event) => {
   event.preventDefault();  

   isSortedAlphabetically = true;
  isSortedByDate = false;
    peremesh = false;

   favoritesContainer.innerHTML = '';
   const favoriteTitlesRaw = localStorage.getItem('trek') || '';
   const favoriteTitles = favoriteTitlesRaw.split('\n').map(s => s.trim()).filter(s => s.length > 0);

   favoriteTitles.sort((a, b) => a.localeCompare(b));

   favoriteTitles.forEach((trackSort, index) => {
       const track = tracks.find(t => t.title === trackSort);
       const clearTrackRowToSort = NumbercreateTrackRow(track, index, favoriteTitles);
       favoritesContainer.appendChild(clearTrackRowToSort);
   });

   albomContainer.innerHTML = '';

   const albomTitlesRaw = localStorage.getItem('trekA') || '';
   const AlbomTitles = albomTitlesRaw.split('\n').map(s => s.trim()).filter(s => s.length > 0);

   AlbomTitles.sort((a, b) => a.localeCompare(b));

   AlbomTitles.forEach((AlbomSort, index) => {
       const AlbomTrack = albomsBaze.find(t => t.title === AlbomSort);
       const AclearTrackRowToSort = ANumbercreateTrackRow(AlbomTrack, index, AlbomTitles);
       albomContainer.appendChild(AclearTrackRowToSort);
   });

});

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}





document.getElementById('sort-button-baze').addEventListener('click', () => {
    peremesh = true;
  isSortedAlphabetically = false;
  isSortedByDate = false;

    favoritesContainer.innerHTML = '';
    albomContainer.innerHTML = '';
    
    const favoriteTitlesRaw = localStorage.getItem('trek') || '';
    const favoriteTitles = favoriteTitlesRaw.split('\n').map(s => s.trim()).filter(s => s.length > 0);

    if (Array.isArray(favoriteTitles)) {
        shuffledFavorites = shuffleArray(favoriteTitles);
    } else {
        shuffledFavorites = []; 
    }

    const favoriteTracks = shuffledFavorites
        .map(title => tracks.find(t => t.title === title))
        .filter(t => t && t.url);

    const albomTitlesRaw = localStorage.getItem('trekA') || '';
    const AlbomTitles = albomTitlesRaw.split('\n').map(s => s.trim()).filter(s => s.length > 0);

    shuffledAlbums = shuffleArray(AlbomTitles);
    shuffledAlbumTracks = {};
  
    let favoriteIndex = favoriteTracks.length;
    let albumIndex = AlbomTitles.length;

    shuffledAlbums.forEach((albom) => {
        const albomMass = albomsBaze.find(a => a.title === albom);
        if (!albomMass) return;

        const shuffledAlbumTracksList = shuffleArray([...albomMass.album]);
        shuffledAlbumTracks[albom] = shuffledAlbumTracksList;

        const albumDiv = document.createElement('div');
        albumDiv.style.marginBottom = '16px';
        albumDiv.style.display = 'flex';
        albumDiv.style.flexDirection = 'column';

        const titleText = document.createElement('span');
        titleText.className = 'title-text';
        titleText.textContent = albomMass.title;

        const albumNumber = document.createElement('span');
        albumNumber.textContent = `${albumIndex--}`;
        albumNumber.style.fontWeight = 'bold';
        albumNumber.className = 'num-btn09';
        albumNumber.style.marginRight = '10px';

        const deleteBtn2 = document.createElement('button');
        deleteBtn2.textContent = '-';
        deleteBtn2.className = 'delete-button';
        deleteBtn2.setAttribute('aria-label', `Удалить ${albomMass.title}`);

        deleteBtn2.addEventListener('click', () => {
            const rawFilter = albomTitlesRaw.split('\n').map(s => s.trim()).filter(s => s.length > 0);
            const updatedFavorites = rawFilter.filter(fav => fav !== albomMass.title);
            localStorage.setItem('trekA', updatedFavorites.join('\n'));
            UpdateFunction();
        });

        const albumButton = document.createElement('button');
        albumButton.className = 'album-title';
        albumButton.setAttribute('aria-expanded', 'false');
        albumButton.style.width = '100%';
        albumButton.style.textAlign = 'left';
        albumButton.appendChild(albumNumber);
        albumButton.appendChild(deleteBtn2);
        albumButton.appendChild(titleText);

        const tracksContainer = document.createElement('div');
        tracksContainer.className = 'tracks-container';
        tracksContainer.style.maxHeight = '0';
        tracksContainer.style.overflow = 'hidden';

        let trackIndex = shuffledAlbumTracksList.length;

        shuffledAlbumTracksList.forEach(vf => {
            const trackContainer = document.createElement('div');
            trackContainer.style.display = 'flex';
            trackContainer.style.alignItems = 'center';
            trackContainer.style.justifyContent = 'space-between';
            trackContainer.style.marginBottom = '10px';

            const trackNumberBtn = document.createElement('span');
            trackNumberBtn.textContent = `${trackIndex--}`;
            trackNumberBtn.className = 'num-btn';
            trackNumberBtn.style.marginRight = '10px';
            trackContainer.appendChild(trackNumberBtn);

            const btnf = document.createElement('button');
            btnf.textContent = vf.title;
            btnf.className = 'track-button';
            btnf.title = `Воспроизвести ${vf.title}`;
            btnf.setAttribute('aria-label', `Воспроизвести ${vf.title}`);

            btnf.onclick = () => {
                const albumIndex = albomsBaze.indexOf(albomMass);
                const trackIndex = shuffledAlbumTracksList.indexOf(vf);
                playAlbomTrack(albumIndex, trackIndex);
            };

            const deleteBtn22 = document.createElement('button');
            deleteBtn22.textContent = '-';
            deleteBtn22.className = 'delete-button12';
            deleteBtn22.setAttribute('aria-label', `Удалить ${vf.title}`);

            const buttonContainer = document.createElement('div');
            buttonContainer.style.display = 'flex';
            buttonContainer.style.gap = '10px';

            const disabledTitlesRaw = localStorage.getItem('disabled') || '';
            const disabledTitles = disabledTitlesRaw.split('\n').map(s => s.trim()).filter(s => s.length > 0);

            if (disabledTitles.map(title => title.toLowerCase()).includes(vf.title.toLowerCase())) {
                btnf.disabled = true;
                
                const restoreBtn89 = document.createElement('button');
                restoreBtn89.textContent = '+';
                restoreBtn89.className = 'restore-button';
                restoreBtn89.setAttribute('aria-label', `Восстановить ${vf.title}`);
                
                restoreBtn89.addEventListener('click', (event) => {
                    event.preventDefault();
                    const disabledTitlesRaw09 = localStorage.getItem('disabled') || '';
                    const disabledTitles09 = disabledTitlesRaw09.split('\n').map(s => s.trim()).filter(s => s.length > 0);
                    const updatedDisabledTitles = disabledTitles09.filter(title => title.toLowerCase() !== vf.title.toLowerCase());
                    localStorage.setItem('disabled', updatedDisabledTitles.join('\n'));
                    btnf.disabled = false;
                    restoreBtn89.remove();
                    buttonContainer.appendChild(deleteBtn22);
                });

                buttonContainer.appendChild(restoreBtn89);
            } else {
                buttonContainer.appendChild(deleteBtn22);
            }

            deleteBtn22.addEventListener('click', (event) => {
                event.stopPropagation();
                btnf.disabled = true;
                const btnfDisabled = btnf.textContent;
                const disabledTitlesRaw = localStorage.getItem('disabled') || '';
                const disabledTitles = disabledTitlesRaw.split('\n').map(s => s.trim()).filter(s => s.length > 0);
                localStorage.setItem('disabled', btnfDisabled + '\n' + disabledTitles.join('\n'));
                
                const restoreBtn89 = document.createElement('button');
                restoreBtn89.textContent = '+';
                restoreBtn89.className = 'restore-button';
                restoreBtn89.setAttribute('aria-label', `Восстановить ${vf.title}`);
                
                restoreBtn89.addEventListener('click', (event) => {
                    event.preventDefault();
                    const disabledTitlesRaw09 = localStorage.getItem('disabled') || '';
                    const disabledTitles09 = disabledTitlesRaw09.split('\n').map(s => s.trim()).filter(s => s.length > 0);
                    const updatedDisabledTitles = disabledTitles09.filter(title => title.toLowerCase() !== vf.title.toLowerCase());
                    localStorage.setItem('disabled', updatedDisabledTitles.join('\n'));
                    btnf.disabled = false;
                    restoreBtn89.remove();
                });
                
                buttonContainer.appendChild(restoreBtn89);
            });

            trackContainer.appendChild(btnf);
            trackContainer.appendChild(buttonContainer);
            tracksContainer.appendChild(trackContainer);
        });

        albumButton.addEventListener('click', createAlbumToggleHandler(albumButton, tracksContainer));
        albumDiv.appendChild(albumButton);
        albumDiv.appendChild(tracksContainer);
        albomContainer.appendChild(albumDiv);
    });

    if (favoriteTracks.length === 0) {
        favoritesContainer.style.color = '#363E6B';
        favoritesContainer.style.padding = '10px';
        favoritesContainer.style.fontWeight = '600';
        favoritesContainer.style.userSelect = 'none';
    } else {
        favoriteTracks.forEach((track, index) => {
            const trackContainer = document.createElement('div');
            trackContainer.style.display = 'flex';
            trackContainer.style.alignItems = 'center';
            trackContainer.style.justifyContent = 'space-between';

            const btn = document.createElement('button');
            btn.textContent = track.title;
            btn.className = 'track-button';
            btn.disabled = !track.url;
            btn.title = `Воспроизвести ${track.title}`;
            btn.setAttribute('aria-label', `Воспроизвести ${track.title}`);

            const numberBtn = document.createElement('button');
            numberBtn.className = 'num-btn';
            numberBtn.textContent = favoriteIndex--;
            numberBtn.style.marginRight = '5px';

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = '-';
            deleteBtn.className = 'delete-button';
            deleteBtn.setAttribute('aria-label', `Удалить ${track.title}`);

            deleteBtn.addEventListener('click', (event) => {
                event.stopPropagation();
                const rawFilter = favoriteTitlesRaw.split('\n').map(s => s.trim()).filter(s => s.length > 0);
                const updatedFavorites = rawFilter.filter(fav => fav !== track.title);
                localStorage.setItem('trek', updatedFavorites.join('\n'));
                UpdateFunction();
            });

            btn.onclick = () => {
                const trackIndex = tracks.findIndex(t => t.title === track.title);
                playTrack(trackIndex);
            };

            const buttonContainer = document.createElement('div');
            buttonContainer.style.display = 'flex';
            buttonContainer.style.gap = '10px';
            buttonContainer.appendChild(deleteBtn);

            trackContainer.appendChild(numberBtn);
            trackContainer.appendChild(btn);
            trackContainer.appendChild(buttonContainer);
            favoritesContainer.appendChild(trackContainer);
        });
    }
});





window.addEventListener('load', async function() {
   await DmanuallyRecacheAll();
    UpdateFunction();
});





document.getElementById('sort-button-data').addEventListener('click', (event) => {
   event.preventDefault();
   favoritesContainer.innerHTML = '';
   albomContainer.innerHTML = '';

   isSortedAlphabetically = false;
  isSortedByDate = true;
  peremesh = false;

   const filteredUpdatedFavorites = [];
   const aTitlesRaw = localStorage.getItem('trek') || '';
   const ATitles = aTitlesRaw.split('\n').map(s => s.trim()).filter(s => s.length > 0);
   ATitles.forEach(trackBear => {
      const foundTrack = tracks.find(t => t.title === trackBear);
      if (foundTrack) {
          filteredUpdatedFavorites.push(foundTrack);
      }
   });


   filteredUpdatedFavorites.sort((a, b) => parseDate(a.date) - parseDate(b.date));


   filteredUpdatedFavorites.forEach((favoritesTrek, index) => {
      console.log(favoritesTrek)
      veu = DateNumbercreateTrackRow(favoritesTrek, index, filteredUpdatedFavorites)
      favoritesContainer.appendChild(veu)

   })

   albomContainer.innerHTML = '';

   const AlbomfilteredUpdatedFavorites = [];
   const AlbomTitlesRaw = localStorage.getItem('trekA') || '';
   const AlbomTitles = AlbomTitlesRaw.split('\n').map(s => s.trim()).filter(s => s.length > 0);

   AlbomTitles.forEach(trackBearA => {
      const foundAlbom = albomsBaze.find(t => t.title === trackBearA);
      if (foundAlbom) {
          AlbomfilteredUpdatedFavorites.push(foundAlbom);
      }
   });

   AlbomfilteredUpdatedFavorites.sort((a, b) => parseDate(a.titleDate) - parseDate(b.titleDate));

   AlbomfilteredUpdatedFavorites.forEach((filteredAlbom, index) => {
    tea = DateAlbom(filteredAlbom, index, AlbomfilteredUpdatedFavorites)
    albomContainer.appendChild(tea)
   })

});

UpdateFunction();

audioPlayer.addEventListener('ended', () => {
    const { albumIndex, trackIndex } = currentTrackIndex;

    if (currentHighlightedElement) {
        currentHighlightedElement.classList.remove('highlight');
        currentHighlightedElement = null;
    }

    if (albumIndex !== -1) {
        const album = albomsBaze[albumIndex];
        let trackList = album.album;
        
        if (peremesh && shuffledAlbumTracks[album.title]) {
            trackList = shuffledAlbumTracks[album.title];
        }
        
        const nextTrackIndex = (trackIndex + 1) % trackList.length;
        playAlbomTrack(albumIndex, nextTrackIndex);
    } else {
        let trackList = [];
        
        if (peremesh && shuffledFavorites.length > 0) {
            trackList = shuffledFavorites.map(title => 
                tracks.find(t => t.title === title)
            ).filter(t => t);
        } else {
            const TitlesRaw = localStorage.getItem('trek') || '';
            const Titles = TitlesRaw.split('\n').map(s => s.trim()).filter(s => s.length > 0);
            trackList = Titles.map(title => 
                tracks.find(t => t.title === title)
            ).filter(t => t);
            
            if (isSortedAlphabetically) {
                trackList.sort((a, b) => a.title.localeCompare(b.title));
            } else if (isSortedByDate) {
                trackList.sort((a, b) => parseDate(a.date) - parseDate(b.date));
            }
        }
        
        const currentTrack = tracks[AboutTrackIndex];
        const currentIndex = trackList.findIndex(t => t.title === currentTrack.title);
        const nextIndex = (currentIndex + 1) % trackList.length;
        
        if (trackList[nextIndex]) {
            const nextTrackIndex = tracks.findIndex(t => t.title === trackList[nextIndex].title);
            playTrack(nextTrackIndex);
        }
    }
});


const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;

  if (localStorage.getItem('theme') == 'dark') {
      body.classList.add('dark-theme');
      body.classList.remove('ligth-theme');
      themeToggle.textContent = "🌙";
  } else {
    body.classList.remove('dark-theme');
    body.classList.add('ligth-theme');
    themeToggle.textContent = "☀️";
  }

  
  function theme() {
    them = localStorage.getItem('theme')
    if (them == 'dark') {
      body.classList.remove('dark-theme');
      body.classList.add('ligth-theme');
      themeToggle.textContent = "☀️";
      localStorage.setItem('theme', 'ligth')
    } else {
      body.classList.add('dark-theme');
      body.classList.remove('ligth-theme');
      themeToggle.textContent = "🌙";
      localStorage.setItem('theme', 'dark')
    }
  }

  themeToggle.addEventListener('click', theme)


