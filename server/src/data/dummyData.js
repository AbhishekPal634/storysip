const dummyData = [
  {
    "Book Title": "Dune",
    Author: "Frank Herbert",
    ISBN: "978-0-441-17271-9",
    Description:
      "Set on the desert planet Arrakis, Dune is a sweeping sci-fi epic that follows young Paul Atreides as his noble family navigates political intrigue, betrayal, and a struggle for control over the valuable spice melange. Blending themes of ecology, religion, and human potential, this richly imagined saga explores destiny and power in a vast interstellar empire.",
    Publisher: "Ace Books",
    "Published Year": 1965,
    "Page Count": 412,
    Language: "English",
    "Cover Image URL":
      "https://images-na.ssl-images-amazon.com/images/I/81O9-LkW3fL.jpg",
    Genres: {
      Fiction: true,
      "Non-Fiction": false,
      Mystery: false,
      Fantasy: false,
      "Sci-Fi": true,
      Romance: false,
      Horror: false,
      Adventure: true,
    },
    "Featured Book": true,
  },
  {
    "Book Title": "The Hobbit",
    Author: "J.R.R. Tolkien",
    ISBN: "978-0-345-33968-3",
    Description:
      "Bilbo Baggins, a hobbit, is whisked away on an adventure by the wizard Gandalf and a group of dwarves led by Thorin Oakenshield. Their quest to reclaim a stolen treasure from the dragon Smaug is filled with trolls, goblins, and magical encounters, setting the stage for Tolkien's epic Middle-earth saga.",
    Publisher: "Houghton Mifflin",
    "Published Year": 1937,
    "Page Count": 310,
    Language: "English",
    "Cover Image URL":
      "https://images-na.ssl-images-amazon.com/images/I/81+6V5l7ZXL.jpg",
    Genres: {
      Fiction: true,
      "Non-Fiction": false,
      Mystery: false,
      Fantasy: true,
      "Sci-Fi": false,
      Romance: false,
      Horror: false,
      Adventure: true,
    },
    "Featured Book": true,
  },
  {
    "Book Title": "Pride and Prejudice",
    Author: "Jane Austen",
    ISBN: "978-0-14-143951-8",
    Description:
      "Elizabeth Bennet's sharp wit and independent spirit clash with the wealthy, reserved Mr. Darcy in this timeless romance. Through misunderstandings, personal growth, and revelations, Austen weaves a witty tale of love, societal expectations, and family pressures in 19th-century England.",
    Publisher: "Penguin Classics",
    "Published Year": 1813,
    "Page Count": 432,
    Language: "English",
    "Cover Image URL":
      "https://images-na.ssl-images-amazon.com/images/I/71qY2Ox+9vL.jpg",
    Genres: {
      Fiction: true,
      "Non-Fiction": false,
      Mystery: false,
      Fantasy: false,
      "Sci-Fi": false,
      Romance: true,
      Horror: false,
      Adventure: false,
    },
    "Featured Book": true,
  },
  {
    "Book Title": "The Shining",
    Author: "Stephen King",
    ISBN: "978-0-385-12167-5",
    Description:
      "Jack Torrance, a struggling writer and recovering alcoholic, takes a job as the winter caretaker of the isolated Overlook Hotel. As supernatural forces and his own demons take hold, Jack's descent into madness threatens his family in this chilling horror classic.",
    Publisher: "Doubleday",
    "Published Year": 1977,
    "Page Count": 447,
    Language: "English",
    "Cover Image URL":
      "https://images-na.ssl-images-amazon.com/images/I/81j2xRD4l3L.jpg",
    Genres: {
      Fiction: true,
      "Non-Fiction": false,
      Mystery: false,
      Fantasy: false,
      "Sci-Fi": false,
      Romance: false,
      Horror: true,
      Adventure: false,
    },
    "Featured Book": true,
  },
  {
    "Book Title": "Sapiens: A Brief History of Humankind",
    Author: "Yuval Noah Harari",
    ISBN: "978-0-06-231609-7",
    Description:
      "This sweeping non-fiction work traces the history of Homo sapiens from the Stone Age to the modern era, exploring how biology, culture, and ideas like money and religion shaped humanity's development. Harari offers bold insights into our past and future.",
    Publisher: "Harper",
    "Published Year": 2015,
    "Page Count": 464,
    Language: "English",
    "Cover Image URL":
      "https://images-na.ssl-images-amazon.com/images/I/71Q1tPupJPL.jpg",
    Genres: {
      Fiction: false,
      "Non-Fiction": true,
      Mystery: false,
      Fantasy: false,
      "Sci-Fi": false,
      Romance: false,
      Horror: false,
      Adventure: false,
    },
    "Featured Book": true,
  },
  {
    "Book Title": "The Da Vinci Code",
    Author: "Dan Brown",
    ISBN: "978-0-385-50420-1",
    Description:
      "Symbologist Robert Langdon and cryptologist Sophie Neveu unravel a trail of clues hidden in art and history to uncover a secret that could shake the foundations of Christianity. This fast-paced mystery thriller blends codes, conspiracies, and historical intrigue.",
    Publisher: "Doubleday",
    "Published Year": 2003,
    "Page Count": 454,
    Language: "English",
    "Cover Image URL":
      "https://images-na.ssl-images-amazon.com/images/I/81V2s4rQf9L.jpg",
    Genres: {
      Fiction: true,
      "Non-Fiction": false,
      Mystery: true,
      Fantasy: false,
      "Sci-Fi": false,
      Romance: false,
      Horror: false,
      Adventure: true,
    },
    "Featured Book": true,
  },
  {
    "Book Title": "Neuromancer",
    Author: "William Gibson",
    ISBN: "978-0-441-56956-4",
    Description:
      "In a dystopian future, hacker Case is hired to pull off a dangerous data heist in cyberspace. Gibson's groundbreaking cyberpunk novel explores artificial intelligence, corporate power, and the blurred line between human and machine in a neon-lit underworld.",
    Publisher: "Ace Books",
    "Published Year": 1984,
    "Page Count": 271,
    Language: "English",
    "Cover Image URL":
      "https://images-na.ssl-images-amazon.com/images/I/81Qz7+2b3vL.jpg",
    Genres: {
      Fiction: true,
      "Non-Fiction": false,
      Mystery: false,
      Fantasy: false,
      "Sci-Fi": true,
      Romance: false,
      Horror: false,
      Adventure: true,
    },
    "Featured Book": true,
  },
  {
    "Book Title": "The Alchemist",
    Author: "Paulo Coelho",
    ISBN: "978-0-06-112241-5",
    Description:
      "Santiago, an Andalusian shepherd, embarks on a journey to find a treasure hidden near the pyramids in Egypt, guided by omens and his dreams. Coelho's allegorical tale explores destiny, courage, and the pursuit of one's Personal Legend.",
    Publisher: "HarperOne",
    "Published Year": 1988,
    "Page Count": 208,
    Language: "English",
    "Cover Image URL":
      "https://images-na.ssl-images-amazon.com/images/I/71zHDXu1TaL.jpg",
    Genres: {
      Fiction: true,
      "Non-Fiction": false,
      Mystery: false,
      Fantasy: true,
      "Sci-Fi": false,
      Romance: false,
      Horror: false,
      Adventure: true,
    },
    "Featured Book": true,
  },
  {
    "Book Title": "Circe",
    Author: "Madeline Miller",
    ISBN: "978-0-316-55634-7",
    Description:
      "Circe, a lesser goddess in Greek mythology, discovers her powers of witchcraft and navigates a world of gods, mortals, and monsters. Miller reimagines her story as a feminist epic of exile, love, and self-discovery in a vividly crafted mythological world.",
    Publisher: "Little, Brown and Company",
    "Published Year": 2018,
    "Page Count": 400,
    Language: "English",
    "Cover Image URL":
      "https://images-na.ssl-images-amazon.com/images/I/71hLwno44bL.jpg",
    Genres: {
      Fiction: true,
      "Non-Fiction": false,
      Mystery: false,
      Fantasy: true,
      "Sci-Fi": false,
      Romance: true,
      Horror: false,
      Adventure: false,
    },
    "Featured Book": true,
  },
  {
    "Book Title": "Becoming",
    Author: "Michelle Obama",
    ISBN: "978-1-524-76131-8",
    Description:
      "Michelle Obama's memoir chronicles her life from her childhood in Chicago to her years as First Lady of the United States. With candor and warmth, she reflects on family, identity, and her role in shaping history alongside Barack Obama.",
    Publisher: "Crown Publishing Group",
    "Published Year": 2018,
    "Page Count": 448,
    Language: "English",
    "Cover Image URL":
      "https://images-na.ssl-images-amazon.com/images/I/81h6vHbpzEL.jpg",
    Genres: {
      Fiction: false,
      "Non-Fiction": true,
      Mystery: false,
      Fantasy: false,
      "Sci-Fi": false,
      Romance: false,
      Horror: false,
      Adventure: false,
    },
    "Featured Book": true,
  },
  {
    "Book Title": "And Then There Were None",
    Author: "Agatha Christie",
    ISBN: "978-0-06-207347-1",
    Description:
      "Ten strangers are lured to an isolated island mansion, where they are accused of past crimes and begin to die one by one. Christie's masterful mystery keeps readers guessing as tension and suspicion mount in this iconic whodunit.",
    Publisher: "HarperCollins",
    "Published Year": 1939,
    "Page Count": 272,
    Language: "English",
    "Cover Image URL":
      "https://images-na.ssl-images-amazon.com/images/I/81G0N4p6fPL.jpg",
    Genres: {
      Fiction: true,
      "Non-Fiction": false,
      Mystery: true,
      Fantasy: false,
      "Sci-Fi": false,
      Romance: false,
      Horror: false,
      Adventure: false,
    },
    "Featured Book": true,
  },
  {
    "Book Title": "Outlander",
    Author: "Diana Gabaldon",
    ISBN: "978-0-385-30230-2",
    Description:
      "Claire Randall, a former WWII nurse, is mysteriously transported to 18th-century Scotland, where she falls for Jamie Fraser, a Highland warrior. This epic blends romance, history, and time travel in a saga of love and survival.",
    Publisher: "Delacorte Press",
    "Published Year": 1991,
    "Page Count": 640,
    Language: "English",
    "Cover Image URL":
      "https://images-na.ssl-images-amazon.com/images/I/81q2r1-+NWL.jpg",
    Genres: {
      Fiction: true,
      "Non-Fiction": false,
      Mystery: false,
      Fantasy: true,
      "Sci-Fi": false,
      Romance: true,
      Horror: false,
      Adventure: true,
    },
    "Featured Book": true,
  },
  {
    "Book Title": "Dracula",
    Author: "Bram Stoker",
    ISBN: "978-0-14-143984-6",
    Description:
      "Count Dracula, a mysterious nobleman, spreads terror as he preys on victims in Victorian England. Told through letters and diaries, Stoker's gothic horror novel pits a group of allies against the seductive and terrifying vampire.",
    Publisher: "Penguin Classics",
    "Published Year": 1897,
    "Page Count": 512,
    Language: "English",
    "Cover Image URL":
      "https://images-na.ssl-images-amazon.com/images/I/71e4P1vC5aL.jpg",
    Genres: {
      Fiction: true,
      "Non-Fiction": false,
      Mystery: false,
      Fantasy: false,
      "Sci-Fi": false,
      Romance: false,
      Horror: true,
      Adventure: true,
    },
    "Featured Book": true,
  },
  {
    "Book Title": "The Martian",
    Author: "Andy Weir",
    ISBN: "978-0-804-13902-1",
    Description:
      "Astronaut Mark Watney is stranded on Mars after a mission goes awry. Using ingenuity, science, and humor, he struggles to survive against impossible odds in this gripping tale of human resilience and problem-solving.",
    Publisher: "Crown Publishing Group",
    "Published Year": 2014,
    "Page Count": 384,
    Language: "English",
    "Cover Image URL":
      "https://images-na.ssl-images-amazon.com/images/I/81L4f2b1rRL.jpg",
    Genres: {
      Fiction: true,
      "Non-Fiction": false,
      Mystery: false,
      Fantasy: false,
      "Sci-Fi": true,
      Romance: false,
      Horror: false,
      Adventure: true,
    },
    "Featured Book": true,
  },
  {
    "Book Title": "Born a Crime",
    Author: "Trevor Noah",
    ISBN: "978-0-399-58817-4",
    Description:
      "Trevor Noah's memoir recounts his childhood in apartheid-era South Africa, born to a Black mother and White father. With humor and heart, he explores identity, race, and resilience in a divided society.",
    Publisher: "Spiegel & Grau",
    "Published Year": 2016,
    "Page Count": 304,
    Language: "English",
    "Cover Image URL":
      "https://images-na.ssl-images-amazon.com/images/I/71w4+1uT4nL.jpg",
    Genres: {
      Fiction: false,
      "Non-Fiction": true,
      Mystery: false,
      Fantasy: false,
      "Sci-Fi": false,
      Romance: false,
      Horror: false,
      Adventure: false,
    },
    "Featured Book": true,
  },
];

module.exports = dummyData;
