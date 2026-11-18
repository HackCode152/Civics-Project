// All content for the Eisenhower "Rotten Tomatoes" review page.
// Photos are public-domain images from Wikimedia Commons (U.S. government works),
// saved locally in /static/img.

export type Video = { id: string; title: string; length: string; source: string };

export const videos: Video[] = [
	{ id: '2DxeLeginUQ', title: 'Atoms for Peace Speech (1953)', length: '10:31', source: 'Eisenhower Library' },
	{ id: 'OyBNmecVtdU', title: 'Farewell Address: "Military-Industrial Complex"', length: '16:15', source: 'Archive footage' },
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

export type News = { kind: string; source: string; headline: string; img: string; url: string };

export const news: News[] = [
	{
		kind: 'Article',
		source: 'Gale In Context: U.S. History',
		headline: 'Interstate Highway Act',
		img: 'img/interstate-plan.jpg',
		url: 'https://go.gale.com/ps/retrieve.do?tabID=Reference&resultListType=RESULT_LIST&searchResultsType=MultiTab&retrievalId=9bd5043b-8534-46f5-a9bf-7fe7793d4a3a&hitCount=8&gtmSearchId=20ac5b3f-9b88-497f-bf11-31c4f6cab2ab&searchType=BasicSearchForm&currentPosition=1&docId=GALE%7CEJ1667500336&docType=Topic+overview&sort=Relevance&contentSegment=ZXAA-MOD1&prodId=UHIC&pageNum=1&contentSet=GALE%7CEJ1667500336&searchId=R1&userGroupName=wiltonhs&inPS=true'
	},
	{
		kind: 'Biography',
		source: 'The White House',
		headline: 'Dwight D. Eisenhower',
		img: 'img/ike-portrait.jpg',
		url: 'https://www.whitehouse.gov/presidents/dwight-d-eisenhower/'
	},
	{
		kind: 'Spotlight',
		source: 'Smithsonian Institution',
		headline: 'Dwight Eisenhower',
		img: 'img/atoms-for-peace.jpg',
		url: 'https://www.si.edu/spotlight/dwight-eisenhower'
	},
	{
		kind: 'Article',
		source: 'National Archives — Prologue Magazine',
		headline: 'Eisenhower and McCarthy',
		img: 'img/mccarthy-archives.jpg',
		url: 'https://www.archives.gov/publications/prologue/2015/fall/ike-mccarthy'
	},
	{
		kind: 'Chronology',
		source: 'Eisenhower Presidential Library',
		headline: 'The Eisenhowers: Dwight David Eisenhower Chronology',
		img: 'img/ike-dday.jpg',
		url: 'https://www.eisenhowerlibrary.gov/eisenhowers'
	},
	{
		kind: 'Interview',
		source: 'Sept 24, 1957',
		headline: 'Ike Addresses the Nation on Little Rock, Sends the 101st Airborne',
		img: 'img/little-rock.jpg',
		url: 'https://www.archives.gov/milestone-documents/executive-order-10730'
	}
];

export type Review = {
	critic: string;
	fresh: boolean;
	topic: string;
	quote: string;
	score?: string;
};

// The critics section — this is where the rating is justified.
export const reviews: Review[] = [
	{
		critic: 'Kaeleigh',
		fresh: true,
		topic: 'Interstate Highway System',
		quote: "Critics praised Eisenhower's Interstate Highway System for improving transportation and boosting the economy. However, some criticized its high costs and the destruction of neighborhoods. Overall, it was a major achievement that also had negative effects on some communities.",
		score: '4.5/5'
	},
	{
		critic: 'Hunter',
		fresh: true,
		topic: 'Little Rock Crisis (1957)',
		quote: "President Eisenhower ordered federal troops to enforce school desegregation in Little Rock, Arkansas, in 1957. President Dwight D. Eisenhower stepped in when nine African American students, known as the Little Rock Nine, were prevented from attending an all-white high school in Little Rock, Arkansas. Governor Orval Faubus used the National Guard to block the students from entering Central High School. Eisenhower responded by taking control of the Arkansas National Guard and sending 1,000 U.S. Army soldiers. Eisenhower's actions helped enforce school desegregation and showed that the federal government would step in when states refused to follow federal law. Eisenhower receives 4.75/5 stars for the Little Rock crisis of 1957.",
		score: '4.75/5'
	},
	{
		critic: 'Hunter',
		fresh: true,
		topic: 'Chief of Party',
		quote: "As President, Dwight D. Eisenhower served as the leader of the Republican Party. He helped strengthen the party by supporting Republican candidates, campaigning for other Republicans, and improving the party's organization. He worked to make the Republican Party more modern and appeal to a wider range of voters, including moderates and independents. He also helped Republicans win the 1956 presidential election, winning 457 electoral votes against Democrat Adlai Stevenson. Eisenhower receives 4/5 stars for the chief of party role.",
		score: '4/5'
	},
	{
		critic: 'Colin',
		fresh: true,
		topic: 'Foreign Affairs & Commander in Chief',
		quote: "President Eisenhower ended multiple foreign affairs, including the Korean War, the moment he took office. Eisenhower guided the US through the Cold War with Russia, never risked national security, and held the best interests of the US military. However, Eisenhower loses some points for the number of coups he was a part of, including Guatemala and Iran. Overall, Eisenhower's handling as Commander in Chief was a strong suit of his presidency, even being a main reason why he was re-elected.",
		score: '4.5/5'
	}
];

export const elections = [
	{
		year: 1952,
		ike: { ev: 442, pv: '55.2%', states: 39 },
		opp: { name: 'Adlai Stevenson II (D)', ev: 89, pv: '44.3%', states: 9 }
	},
	{
		year: 1956,
		ike: { ev: 457, pv: '57.4%', states: 41 },
		opp: { name: 'Adlai Stevenson II (D)', ev: 73, pv: '42.0%', states: 7 }
	}
];

// Sidebar ("What to Watch" -> "Ike's Top Moments"): Eisenhower-only highlights, scored.
export const ikeMoments: { name: string; score: number }[] = [
	{ name: 'Interstate Highway System', score: 96 },
	{ name: 'Korean War Armistice', score: 88 },
	{ name: 'Creating NASA', score: 90 },
	{ name: 'Little Rock Nine', score: 80 },
	{ name: 'Farewell Address', score: 94 }
];
