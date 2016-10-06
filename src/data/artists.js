"use strict";

const artists = [
  {
    'id': 'jay-z',
    'name': 'Jay Z',
    'country': 'USA',
    'birth': '1969',
    'image': 'jay-z.jpg',
    'cover': 'jay-z-cover.jpg',
    'link': 'https://en.wikipedia.org/wiki/Jay_Z',
    'albums': [
      {'name': 'Reasonable Doubt', 'year': '1996' },
      {'name': 'In My Lifetime, Vol.1', 'year': '1997' },
      {'name': 'Vol. 2... Hard Knock Life', 'year': '1998' },
      {'name': 'Vol. 3...  Life and Times of S.Carter', 'year': '1999' },
      {'name': 'The Dynasty: Roc La Familia', 'year': '2000' },
      {'name': 'The Blueprint', 'year': '2001' },
      {'name': 'The Best of Both Worlds (with R. Kelly)', 'year': '2002' },
      {'name': 'The Blueprint 2: The Gift & The Curse', 'year': '2002' },
      {'name': 'The Black Album', 'year': '2003' },
      {'name': 'Unfinished Business (with R.Kelly)', 'year': '2004' },
      {'name': 'Kingdom Come', 'year': '2006' },
      {'name': 'American Gangster', 'year': '2007' },
      {'name': 'The Blueprint 3', 'year': '2009' },
      {'name': 'Watch the Throne (with Kanye West)', 'year': '2011' },
      {'name': 'Magna Carta Holy Grail', 'year': '2013' }
    ],
  },
  {
    'id': 'tupac',
    'name': 'Tupac Shakur',
    'country': 'USA',
    'birth': '1971',
    'image': 'tupac.jpg',
    'cover': 'tupac-cover.jpg',
    'link': 'https://en.wikipedia.org/wiki/Tupac_Shakur',
    'albums': [
      {'name': 'Strictly 4 My N****Z', 'year': '1993' },
      {'name': 'Me Against the World', 'year': '1995' },
      {'name': 'All Eyez on Me', 'year': '1996' },
      {'name': 'The Don Killuminati: The 7 Day Theory', 'year': '1996' },
      {'name': 'R U Still Down? (Remember Me)', 'year': '1997' },
      {'name': 'Greatest Hits', 'year': '1998' },
      {'name': 'Still I Rise', 'year': '1999' },
      {'name': 'Until the End of Time', 'year': '2001' },
      {'name': 'Better Dayz', 'year': '2002' },
      {'name': 'Tupac: Resurrection', 'year': '2003' },
      {'name': 'Loyal to the Game', 'year': '2004' },
      {'name': 'Live at the House of Blues', 'year': '2005' }
    ],
  },
  {
    'id': 'eminem',
    'name': 'Eminem (Marshall Mathers)',
    'country': 'USA',
    'birth': '1972',
    'image': 'eminem.jpg',
    'cover': 'eminem-cover.jpg',
    'link': 'https://en.wikipedia.org/wiki/Eminem',
    'albums': [
      {'name': 'The Slim Shady LP', 'year': '1999' },
      {'name': 'The Marshall Mathers LP', 'year': '2000' },
      {'name': 'The Eminem Show', 'year': '2002' },
      {'name': 'Encore', 'year': '2004' },
      {'name': 'Curtain Call: The Hits', 'year': '2005' },
      {'name': 'Eminem Presents: The Re-Up', 'year': '2006' },
      {'name': 'Relapse', 'year': '2009' },
      {'name': 'Recovery', 'year': '2010' },
      {'name': 'The Marshall Mathers LP 2', 'year': '2013' }
    ],
  },
  {
    'id': 'outkast',
    'name': 'Outkast',
    'country': 'USA',
    'birth': 'Various',
    'image': 'outkast.jpg',
    'cover': 'outkast-cover.jpg',
    'link': 'https://en.wikipedia.org/wiki/Outkast',
    'albums': [
      {'name': 'Southernplayalisticadillacmuzik', 'year': '1994' },
      {'name': "ATLiens", 'year': '1996' },
      {'name': 'Aquemini', 'year': '1998' },
      {'name': 'Stankonia', 'year': '2000' },
      {'name': 'Speakerboxxx/The Love Below', 'year': '2003' },
      {'name': 'The Videos', 'year': '2003' },
      {'name': "Big Boi and Dre Present... Outkast", 'year': '2001' },
      {'name': "Idlewild", 'year': '2006' }
    ],
  },
  {
    'id': 'snoop-dogg',
    'name': 'Snoop Dogg (Cordozar Calvin Broadus, Jr.)',
    'country': 'USA',
    'birth': '1971',
    'image': 'snoop-dogg.jpg',
    'cover': 'snoop-dogg-cover.jpg',
    'link': 'https://en.wikipedia.org/wiki/Snoop_Dogg',
    'albums': [
      {'name': 'Doggystyle', 'year': '1993' },
      {'name': 'Murder Was the Case', 'year': '1994' },
      {'name': 'Tha Doggfather', 'year': '1996' },
      {'name': 'Da Game Is to Be Sold, Not to Be Told', 'year': '1998' },
      {'name': 'No Limit Top Dogg', 'year': '1999' },
      {'name': 'Tha Last Meal', 'year': '2000' },
      {'name': 'Paid tha Cost to Be da Boss', 'year': '2002' },
      {'name': 'R&G (Rhythm & Gangsta): The Masterpiece', 'year': '2004' }
    ],
  },
  {
    'id': 'll-cool-j',
    'name': 'LL Cool J',
    'country': 'USA',
    'birth': '1968',
    'image': 'll-cool-j.jpg',
    'cover': 'll-cool-j-cover.jpg',
    'link': 'https://en.wikipedia.org/wiki/LL_Cool_J',
    'albums': [
      {'name': 'Radio', 'year': '1985' },
      {'name': "Bigger and Deffer", 'year': '1987' },
      {'name': 'Walking with a Panther', 'year': '1989' },
      {'name': 'Mama Said Knock You Out', 'year': '1990' },
      {'name': 'Mr. Smith', 'year': '1995' },
      {'name': 'All World: Greatest Hits', 'year': '1996' },
      {'name': 'Phenomenon', 'year': '1997' },
      {'name': 'G.O.A.T. (Greatest Of All Time)', 'year': '2000' }
    ],
  },
  {
    'id': 'kanye-west',
    'name': 'Kanye West',
    'country': 'USA',
    'birth': '1977',
    'image': 'kanye-west.jpg',
    'cover': 'kanye-west-cover.jpg',
    'link': 'https://en.wikipedia.org/wiki/Kanye_West',
    'albums': [
      {'name': 'The College Dropout', 'year': '2004' },
      {'name': 'Late Registration', 'year': '2005' },
      {'name': 'Graduation', 'year': '2007' },
      {'name': '808s & Heartbreak', 'year': '2008' },
      {'name': 'My Beautiful Dark Twisted Fantasy', 'year': '2010' },
      {'name': 'Watch the Throne (with Jay Z)', 'year': '2011' },
      {'name': 'Yeezus', 'year': '2013' }
    ],
  },
  {
    'id': 'nas',
    'name': 'Nasir bin Olu Dara Jones',
    'country': 'USA',
    'birth': '1973',
    'image': 'nas.jpg',
    'cover': 'nas-cover.jpg',
    'link': 'https://en.wikipedia.org/wiki/Nas',
    'albums': [
      {'name': 'Illmatic', 'year': '1994' },
      {'name': "It Was Written", 'year': '1996' },
      {'name': 'I Am...', 'year': '1999' },
      {'name': 'Nastradamus', 'year': '2001' },
      {'name': 'Stillmatic', 'year': '2002' },
      {'name': "God's Son", 'year': '2004' },
      {'name': "Street's Disciple", 'year': '2004' }
    ],
  },
  {
    'id': 'beastie-boys',
    'name': 'Beastie Boys',
    'country': 'USA',
    'birth': 'Various',
    'image': 'beastie-boys.jpg',
    'cover': 'beastie-boys-cover.jpg',
    'link': 'https://en.wikipedia.org/wiki/Beastie_Boys',
    'albums': [
      {'name': 'Licensed to Ill', 'year': '1986' },
      {'name': "Paul's Boutique", 'year': '1989' },
      {'name': 'Check Your Head', 'year': '1992' },
      {'name': 'Ill Communication', 'year': '1994' },
      {'name': 'Hello Nasty', 'year': '1998' },
      {'name': 'Beastie Boys Anthology: The Sounds of Science', 'year': '1999' },
      {'name': 'To the 5 Boroughs', 'year': '2004' }
    ],
  },
];
