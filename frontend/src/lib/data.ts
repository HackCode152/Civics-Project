// All content for the Eisenhower "Rotten Tomatoes" review page.
// Photos are public-domain images from Wikimedia Commons (U.S. government works),
// saved locally in /static/img.

export type Video = { id: string; title: string; length: string; source: string };

export const videos: Video[] = [
	{ id: 'fQ7IKM-jiJI', title: "Official Trailer: Ike's D-Day Message", length: '1:48', source: 'The U.S. Army' },
	{ id: 'YP7WaUPACuY', title: '"I Like Ike" — 1952 Campaign Ad', length: '1:01', source: 'New-York Historical Society' },
	{ id: '2DxeLeginUQ', title: 'Atoms for Peace Speech (1953)', length: '10:31', source: 'Eisenhower Library' },
	{ id: 'ZzT5v_ICU6I', title: 'Address on Little Rock Integration (1957)', length: '13:35', source: 'C-SPAN' },
	{ id: 'OyBNmecVtdU', title: 'Farewell Address: "Military-Industrial Complex"', length: '16:15', source: 'Archive footage' },
	{ id: 'XNPS4lzLXQ8', title: 'Behind the Scenes: Supreme Commander to President', length: '42:16', source: 'Biography' }
];

export const info: [string, string][] = [
	['Office', '34th President of the United States'],
	['Party (Rating)', 'Republican (R)'],
	['Term (Release Date)', 'Jan 20, 1953 – Jan 20, 1961'],
	['Runtime', '2 terms · 8 years · 2,922 days'],
	['Genre', 'War Hero / Cold War Political Drama'],
	['Vice President (Co-Star)', 'Richard M. Nixon'],
	['Born', 'October 14, 1890 — Denison, Texas'],
	['Raised', 'Abilene, Kansas'],
	['Died', 'March 28, 1969 — Washington, D.C. (age 78)'],
	['Education', 'U.S. Military Academy, West Point (Class of 1915)'],
	['Spouse', 'Mamie Geneva Doud (m. 1916)'],
	['Nickname', '"Ike"'],
	['Prequels', 'Supreme Allied Commander, WWII (1943–45) · Army Chief of Staff (1945–48) · President of Columbia University (1948–53) · First Supreme Commander of NATO (1951–52)'],
	['Preceded by', 'Harry S. Truman'],
	['Succeeded by', 'John F. Kennedy'],
	['Elections Won', '1952 and 1956 (both landslides)']
];

export type CastMember = { name: string; role: string; img?: string };

export const cast: CastMember[] = [
	{ name: 'Dwight D. Eisenhower', role: 'President (Lead)', img: 'img/ike-portrait.jpg' },
	{ name: 'Richard Nixon', role: 'Vice President', img: 'img/nixon.jpg' },
	{ name: 'Mamie Eisenhower', role: 'First Lady', img: 'img/mamie.jpg' },
	{ name: 'John Foster Dulles', role: 'Secretary of State', img: 'img/dulles.jpg' },
	{ name: 'Allen Dulles', role: 'CIA Director', img: 'img/allen-dulles.jpg' },
	{ name: 'Sherman Adams', role: 'White House Chief of Staff', img: 'img/adams.png' },
	{ name: 'Oveta Culp Hobby', role: 'First Secretary of Health, Education & Welfare', img: 'img/hobby.jpg' },
	{ name: 'Earl Warren', role: 'Chief Justice (appointed 1953)', img: 'img/warren.jpg' },
	{ name: 'Adlai Stevenson II', role: 'Opponent (1952 & 1956)', img: 'img/stevenson.jpg' },
	{ name: 'Nikita Khrushchev', role: 'Cold War Rival', img: 'img/khrushchev.jpg' },
	{ name: 'Joseph McCarthy', role: 'Antagonist', img: 'img/mccarthy.jpg' },
	{ name: 'Bernard Montgomery', role: 'WWII Co-Star (Prequel)', img: 'img/montgomery.jpg' }
];

export type Photo = { src: string; caption: string };

export const photos: Photo[] = [
	{ src: 'img/ike-portrait.jpg', caption: 'Official presidential portrait, 1959' },
	{ src: 'img/ike-dday.jpg', caption: 'General Eisenhower speaks with paratroopers before D-Day, June 5, 1944' },
	{ src: 'img/election-1952.png', caption: '1952 Electoral College map — Eisenhower wins 442 electoral votes' },
	{ src: 'img/armistice.jpg', caption: 'Korean War Armistice Agreement, signed July 27, 1953' },
	{ src: 'img/atoms-for-peace.jpg', caption: '"Atoms for Peace" commemorative stamp' },
	{ src: 'img/interstate-plan.jpg', caption: 'The 1955 plan for the National System of Interstate Highways' },
	{ src: 'img/little-rock.jpg', caption: 'Protest against school integration in Little Rock, Arkansas, 1959' },
	{ src: 'img/sputnik.jpg', caption: 'Sputnik 1 — the Soviet satellite that launched the Space Race in 1957' },
	{ src: 'img/u2.jpg', caption: 'Wreckage of a U-2 spy plane — the 1960 U-2 incident embarrassed the administration' },
	{ src: 'img/farewell.jpg', caption: 'Farewell Address, January 17, 1961' }
];

export type News = { date: string; kind: string; headline: string; blurb: string; img: string };

export const news: News[] = [
	{
		date: 'Nov 4, 1952',
		kind: 'Box Office',
		headline: 'Ike Opens Big: Wins 39 States and 442 Electoral Votes',
		blurb: 'Running on "Korea, Communism, and Corruption," the war hero ends 20 straight years of Democratic control of the White House, beating Adlai Stevenson with 55% of the popular vote.',
		img: 'img/election-1952.png'
	},
	{
		date: 'July 27, 1953',
		kind: 'News',
		headline: 'Korean War Armistice Signed Six Months Into Ike’s Term',
		blurb: 'Keeping his campaign promise to "go to Korea," Eisenhower pushes for an armistice that stops the fighting, though no permanent peace treaty is ever signed.',
		img: 'img/armistice.jpg'
	},
	{
		date: 'Jan 19, 1955',
		kind: 'Interview',
		headline: 'First Televised Presidential Press Conference',
		blurb: 'Eisenhower becomes the first president to allow TV cameras into his press conferences, opening the presidency to millions of viewers at home.',
		img: 'img/ike-portrait.jpg'
	},
	{
		date: 'June 29, 1956',
		kind: 'News',
		headline: 'Federal-Aid Highway Act Signed: 41,000 Miles of Interstate',
		blurb: 'Inspired by Germany’s autobahns and his 1919 Army convoy across the country, Ike launches the biggest public works project in American history.',
		img: 'img/interstate-plan.jpg'
	},
	{
		date: 'Sept 24, 1957',
		kind: 'Interview',
		headline: 'Ike Addresses the Nation on Little Rock, Sends the 101st Airborne',
		blurb: 'After Gov. Orval Faubus blocks nine Black students from Central High School, Eisenhower federalizes the Arkansas National Guard to enforce Brown v. Board.',
		img: 'img/little-rock.jpg'
	},
	{
		date: 'July 29, 1958',
		kind: 'News',
		headline: 'Responding to Sputnik, Ike Signs Law Creating NASA',
		blurb: 'Months later the National Defense Education Act pours money into science, math, and foreign-language education.',
		img: 'img/sputnik.jpg'
	},
	{
		date: 'May 1960',
		kind: 'News',
		headline: 'U-2 Spy Plane Shot Down; Cover Story Collapses',
		blurb: 'The administration claims a lost "weather plane" — until Khrushchev reveals the pilot is alive. The Paris peace summit falls apart.',
		img: 'img/u2.jpg'
	},
	{
		date: 'Jan 17, 1961',
		kind: 'Interview',
		headline: 'Farewell Address Warns of the "Military-Industrial Complex"',
		blurb: 'In one of the most famous presidential farewells ever, the five-star general warns Americans against the unchecked power of the defense industry.',
		img: 'img/farewell.jpg'
	}
];

export type Review = {
	critic: string;
	outlet: string;
	fresh: boolean;
	topic: string;
	quote: string;
	score: string;
};

// The critics section — this is where the rating is justified.
// Each review weighs one major part of the presidency. Fresh = success, Rotten = failure.
export const reviews: Review[] = [
	{
		critic: 'The Infrastructure Desk',
		outlet: 'Civics Review',
		fresh: true,
		topic: 'Interstate Highway System',
		quote: 'The Federal-Aid Highway Act of 1956 built 41,000 miles of interstate that still carry the American economy. Few presidential decisions have changed everyday life this much — trucking, suburbs, and road trips all trace back to Ike.',
		score: '5/5'
	},
	{
		critic: 'Foreign Affairs Critic',
		outlet: 'Civics Review',
		fresh: true,
		topic: 'Ending the Korean War',
		quote: 'He promised to end the war and he did, reaching an armistice within six months. The peninsula stayed divided, but the killing stopped — a promise kept.',
		score: '4.5/5'
	},
	{
		critic: 'Science & Space Critic',
		outlet: 'Civics Review',
		fresh: true,
		topic: 'Sputnik, NASA & Education',
		quote: 'After Sputnik shocked the nation in 1957, Ike calmly created NASA (1958) and signed the National Defense Education Act, funding science and math in schools. The plot twist turned into a strong second act.',
		score: '4/5'
	},
	{
		critic: 'Civil Rights Critic',
		outlet: 'Civics Review',
		fresh: true,
		topic: 'Little Rock (1957)',
		quote: 'When Governor Faubus defied the Supreme Court, Eisenhower sent the 101st Airborne to escort the Little Rock Nine into Central High. It was the first time since Reconstruction federal troops protected Black citizens in the South — a powerful scene, even if he waited too long to act.',
		score: '4/5'
	},
	{
		critic: 'Legislation Critic',
		outlet: 'Civics Review',
		fresh: true,
		topic: 'Civil Rights Acts of 1957 & 1960',
		quote: 'The first civil rights laws passed by Congress since 1875, plus a new Civil Rights Division at the Justice Department. Watered down by Southern senators, yes — but they opened the door for the bigger laws of the 1960s.',
		score: '3.5/5'
	},
	{
		critic: 'Courts Critic',
		outlet: 'Civics Review',
		fresh: true,
		topic: 'Supreme Court Appointments',
		quote: 'Appointing Earl Warren as Chief Justice led directly to Brown v. Board of Education (1954). Ike reportedly regretted the pick later, but history rates it as one of the most important appointments ever.',
		score: '4/5'
	},
	{
		critic: 'Cold War Critic',
		outlet: 'Civics Review',
		fresh: true,
		topic: 'Suez Crisis (1956)',
		quote: 'Eisenhower pressured Britain, France, and Israel to withdraw from Egypt, refusing to back an invasion even by close allies. A rare moment where a superpower chose the rules over its friends.',
		score: '4/5'
	},
	{
		critic: 'Peace & Diplomacy Critic',
		outlet: 'Civics Review',
		fresh: true,
		topic: 'Atoms for Peace & Restraint',
		quote: 'His "Atoms for Peace" speech helped lead to the International Atomic Energy Agency. Through eight tense Cold War years, he kept America out of a major new war — no small feat for a general.',
		score: '4/5'
	},
	{
		critic: 'Economy Critic',
		outlet: 'Civics Review',
		fresh: true,
		topic: 'Economy & Budgets',
		quote: 'Steady growth, low inflation, and three balanced budgets. Ike also expanded Social Security and raised the minimum wage instead of dismantling the New Deal. Three recessions keep it from a perfect score.',
		score: '3.5/5'
	},
	{
		critic: 'Public Works Critic',
		outlet: 'Civics Review',
		fresh: true,
		topic: 'St. Lawrence Seaway',
		quote: 'Built with Canada and opened in 1959, the Seaway connected the Great Lakes to the Atlantic Ocean. Another solid infrastructure sequel.',
		score: '3.5/5'
	},
	{
		critic: 'Speechwriting Critic',
		outlet: 'Civics Review',
		fresh: true,
		topic: 'Farewell Address (1961)',
		quote: 'The "military-industrial complex" warning is one of the most quoted speeches in American history — a five-star general telling the country not to trust the war machine too much. A perfect ending.',
		score: '5/5'
	},
	{
		critic: 'Leadership Critic',
		outlet: 'Civics Review',
		fresh: true,
		topic: 'Leadership Style',
		quote: 'Critics in the 1950s called him a golf-playing grandpa, but his "hidden-hand" style got results quietly behind the scenes. The character is far smarter than he first appears.',
		score: '4/5'
	},
	{
		critic: 'Covert Ops Critic',
		outlet: 'Civics Review',
		fresh: false,
		topic: 'CIA Coups in Iran & Guatemala',
		quote: 'The CIA helped overthrow elected leaders in Iran (1953) and Guatemala (1954). These secret plots created anger and instability that haunted U.S. foreign policy for decades.',
		score: '1.5/5'
	},
	{
		critic: 'Civil Liberties Critic',
		outlet: 'Civics Review',
		fresh: false,
		topic: 'McCarthyism & the Lavender Scare',
		quote: 'Ike refused to publicly confront Senator McCarthy for far too long, and his Executive Order 10450 (1953) led to thousands of gay federal workers being fired. A dark subplot.',
		score: '1.5/5'
	},
	{
		critic: 'Honesty Critic',
		outlet: 'Civics Review',
		fresh: false,
		topic: 'The U-2 Incident (1960)',
		quote: 'The administration lied about the downed spy plane and got caught when the Soviets produced the pilot. It wrecked the Paris Summit and hurt trust in the presidency.',
		score: '2/5'
	},
	{
		critic: 'Southeast Asia Critic',
		outlet: 'Civics Review',
		fresh: false,
		topic: 'The Domino Theory & Vietnam',
		quote: 'His "falling dominoes" logic led the U.S. to back South Vietnam with money and military advisers, setting up the much bigger war his successors would fight.',
		score: '2/5'
	}
];

export const audience: { name: string; text: string; stars: number }[] = [
	{ name: 'Factory worker, Detroit (1956)', text: 'Steady job, new car, new highway outside town. I like Ike!', stars: 5 },
	{ name: 'Korean War veteran (1953)', text: 'He said he would go to Korea and he did. My unit came home.', stars: 5 },
	{ name: 'Student, Little Rock (1957)', text: 'He finally sent the troops, but it took weeks of us being turned away before he acted.', stars: 3 },
	{ name: 'Federal employee (1954)', text: 'Lost my State Department job in the purges. Ike stayed quiet while McCarthy ran wild.', stars: 1 },
	{ name: 'Suburban mom, Ohio (1958)', text: 'After Sputnik my kids are getting real science classes now. Good call.', stars: 4 }
];

export const elections = [
	{
		year: 1952,
		ike: { ev: 442, pv: '55.2%', states: 39 },
		opp: { name: 'Adlai Stevenson II (D)', ev: 89, pv: '44.3%', states: 9 },
		note: 'Ended 20 years of Democratic presidents. Running mate: Richard Nixon.'
	},
	{
		year: 1956,
		ike: { ev: 457, pv: '57.4%', states: 41 },
		opp: { name: 'Adlai Stevenson II (D)', ev: 73, pv: '42.0%', states: 7 },
		note: 'A rematch — and an even bigger landslide, despite Ike’s 1955 heart attack.'
	}
];

export const explore = [
	{ name: 'Eisenhower Presidential Library', url: 'https://www.eisenhowerlibrary.gov/', tag: 'Official Archive' },
	{ name: 'White House Biography', url: 'https://www.whitehouse.gov/about-the-white-house/presidents/dwight-d-eisenhower/', tag: 'WhiteHouse.gov' },
	{ name: 'Miller Center — UVA', url: 'https://millercenter.org/president/eisenhower', tag: 'Presidential Scholars' },
	{ name: 'Farewell Address Transcript', url: 'https://www.archives.gov/milestone-documents/president-dwight-d-eisenhowers-farewell-address', tag: 'National Archives' },
	{ name: 'Dwight D. Eisenhower Memorial', url: 'https://www.nps.gov/ddem/index.htm', tag: 'National Park Service' },
	{ name: 'Eisenhower — Wikipedia', url: 'https://en.wikipedia.org/wiki/Dwight_D._Eisenhower', tag: 'Encyclopedia' }
];

// Sidebar ("What to Watch" -> "Ike's Top Moments"): Eisenhower-only highlights, scored.
export const ikeMoments = {
	'Presidency': [
		{ name: 'Interstate Highway System', score: 96 },
		{ name: 'Korean War Armistice', score: 88 },
		{ name: 'Creating NASA', score: 90 },
		{ name: 'Little Rock Nine', score: 80 },
		{ name: 'Farewell Address', score: 94 }
	],
	'Controversies': [
		{ name: 'CIA Coup in Iran', score: 18 },
		{ name: 'U-2 Cover Story', score: 25 },
		{ name: 'Lavender Scare (EO 10450)', score: 12 },
		{ name: 'Slow to Confront McCarthy', score: 30 },
		{ name: 'Vietnam Commitment', score: 28 }
	],
	'Before Office': [
		{ name: 'D-Day Invasion (1944)', score: 98 },
		{ name: 'Supreme Allied Commander', score: 95 },
		{ name: 'Army Chief of Staff', score: 78 },
		{ name: 'Columbia University President', score: 62 },
		{ name: 'First NATO Commander', score: 85 }
	]
} as Record<string, { name: string; score: number }[]>;
