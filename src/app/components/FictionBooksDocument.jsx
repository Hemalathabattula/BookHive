"use client";

const fictionBooksDetailed = [
  {
    id: 1,
    title: "A Court of Thorns and Roses",
    author: "Sarah J. Maas",
    price: "£4.20",
    image: "/images/fiction12.jfif",
    genre: "Fantasy",
    description: "A young huntress is captured by a faerie lord in this fantasy romance.",
    summary: "A Court of Thorns and Roses is a fantasy novel by Sarah J. Maas that follows Feyre, a huntress who kills a faerie and is forced to live in the faerie lands as punishment.",
    reviews: [
      "A captivating fantasy romance.",
      "Intricate world-building and compelling characters.",
      "Perfect for fans of magical adventures."
    ],
    authorBio: "Sarah J. Maas is an American author known for her fantasy novels, including the Throne of Glass and A Court of Thorns and Roses series.",
    ISBN: "978-0-123456-01-0",
    publicationDate: "2015-05-05",
    publisher: "Bloomsbury Publishing"
  },
  {
    id: 2,
    title: "The Midnight Library",
    author: "Matt Haig",
    price: "£3.70",
    image: "/images/fiction7.jpg",
    genre: "Modern Fiction",
    description: "A woman discovers the library of all possible lives she could have lived.",
    summary: "The Midnight Library is a novel by Matt Haig that follows a woman who, after attempting suicide, finds herself in a library between life and death, where she can try different versions of her life.",
    reviews: [
      "Thought-provoking and emotional.",
      "Explores the concept of alternate lives beautifully.",
      "A must-read for introspection."
    ],
    authorBio: "Matt Haig is a British author known for his works on mental health and philosophy, including Reasons to Stay Alive.",
    ISBN: "978-0-123456-02-7",
    publicationDate: "2020-08-13",
    publisher: "Canongate Books"
  },
  {
    id: 3,
    title: "The Pumpkin Spice Café",
    author: "Laurie Gilmore",
    price: "£3.50",
    image: "/images/fiction11.jfif",
    genre: "Romance",
    description: "A heartwarming romance set in a cozy café.",
    summary: "The Pumpkin Spice Café is a romance novel by Laurie Gilmore that follows a woman who inherits a café and finds love in a small town.",
    reviews: [
      "Cozy and romantic.",
      "Perfect autumn read.",
      "Charming small-town story."
    ],
    authorBio: "Laurie Gilmore is an author known for her cozy romance novels set in charming small towns.",
    ISBN: "978-0-123456-03-4",
    publicationDate: "2023-09-01",
    publisher: "HarperCollins"
  },
  {
    id: 4,
    title: "The Housemaid",
    author: "Freida McFadden",
    price: "£3.90",
    image: "/images/fiction8.jfif",
    genre: "Thriller & Suspense",
    description: "A psychological thriller about a housekeeper with dark secrets.",
    summary: "The Housemaid is a thriller by Freida McFadden that follows a woman who takes a job as a housekeeper and uncovers terrifying secrets.",
    reviews: [
      "Gripping and suspenseful.",
      "Twists you won't see coming.",
      "Perfect for thriller fans."
    ],
    authorBio: "Freida McFadden is an author known for her psychological thrillers and suspense novels.",
    ISBN: "978-0-123456-04-1",
    publicationDate: "2023-02-21",
    publisher: "Hollywood Upstairs Press"
  },
  {
    id: 5,
    title: "No One Saw a Thing",
    author: "Andrea Mara",
    price: "£3.90",
    image: "/images/fiction6.jpg",
    genre: "Thriller & Suspense",
    description: "A gripping tale of secrets and lies in a quiet neighborhood.",
    summary: "No One Saw a Thing is a thriller by Andrea Mara that follows a woman who suspects her neighbor of a crime, but no one believes her.",
    reviews: [
      "Chilling and realistic.",
      "Keeps you on the edge of your seat.",
      "Explores themes of trust and suspicion."
    ],
    authorBio: "Andrea Mara is an Irish author known for her psychological thrillers.",
    ISBN: "978-0-123456-05-8",
    publicationDate: "2023-06-01",
    publisher: "Bantam Press"
  },
  {
    id: 6,
    title: "The Whalebone Theatre",
    author: "Joanna Quinn",
    price: "£4.10",
    image: "/images/fiction12.jfif",
    genre: "Adventure Books",
    description: "A sweeping adventure spanning decades and continents.",
    summary: "The Whalebone Theatre is an adventure novel by Joanna Quinn that follows three siblings who grow up during World War II and beyond.",
    reviews: [
      "Epic and beautifully written.",
      "A story of resilience and family.",
      "Captures the spirit of adventure."
    ],
    authorBio: "Joanna Quinn is a British author known for her historical fiction and adventure stories.",
    ISBN: "978-0-123456-06-5",
    publicationDate: "2022-02-03",
    publisher: "Vintage Publishing"
  },
  {
    id: 7,
    title: "Mary Jones and Her Bible",
    author: "Mary Jones",
    price: "£3.20",
    image: "/images/fiction2.jpg",
    genre: "Classic Fiction",
    description: "The inspiring true story of Mary Jones and her quest for a Bible.",
    summary: "Mary Jones and Her Bible is a classic story about a young Welsh girl's determination to own her own Bible in the early 19th century.",
    reviews: [
      "Inspiring and historical.",
      "A tale of faith and perseverance.",
      "Educational and moving."
    ],
    authorBio: "Mary Jones was a Welsh girl whose story inspired the formation of the British and Foreign Bible Society.",
    ISBN: "978-0-123456-07-2",
    publicationDate: "1800-01-01",
    publisher: "British and Foreign Bible Society"
  },
  {
    id: 8,
    title: "Tomorrow, and Tomorrow, and Tomorrow",
    author: "Gabrielle Zevin",
    price: "£3.90",
    image: "/images/fiction1.jpg",
    genre: "Modern Fiction",
    description: "A story of friendship, love, and video game creation.",
    summary: "Tomorrow, and Tomorrow, and Tomorrow is a novel by Gabrielle Zevin that follows two friends who create video games over decades.",
    reviews: [
      "Brilliant and heartfelt.",
      "Explores creativity and relationships.",
      "A modern classic in the making."
    ],
    authorBio: "Gabrielle Zevin is an American author known for her novels on art, friendship, and human connection.",
    ISBN: "978-0-123456-08-9",
    publicationDate: "2022-07-05",
    publisher: "Alfred A. Knopf"
  },
  {
    id: 9,
    title: "The Seven Husbands of Evelyn Hugo",
    author: "Taylor Jenkins Reid",
    price: "£3.90",
    image: "/images/the-authenticity-project.jpg",
    genre: "Modern Fiction",
    description: "The life story of a Hollywood icon and her seven marriages.",
    summary: "The Seven Husbands of Evelyn Hugo is a novel by Taylor Jenkins Reid that follows the life of a reclusive Hollywood icon who reveals her secrets to a young journalist.",
    reviews: [
      "Glamorous and emotional.",
      "A story of fame and secrets.",
      "Unputdownable."
    ],
    authorBio: "Taylor Jenkins Reid is an American author known for her bestselling novels about Hollywood and relationships.",
    ISBN: "978-0-123456-09-6",
    publicationDate: "2017-06-13",
    publisher: "Washington Square Press"
  },
  {
    id: 10,
    title: "Normal People",
    author: "Sally Rooney",
    price: "£3.70",
    image: "/images/fiction4.jfif",
    genre: "Romance",
    description: "The complex relationship between two young people over the years.",
    summary: "Normal People is a novel by Sally Rooney that follows the relationship between two Irish teenagers from different social classes.",
    reviews: [
      "Raw and honest.",
      "Captures young love perfectly.",
      "Thoughtful and poignant."
    ],
    authorBio: "Sally Rooney is an Irish author known for her novels on millennial relationships and social issues.",
    ISBN: "978-0-123456-10-2",
    publicationDate: "2018-08-28",
    publisher: "Faber & Faber"
  },
  {
    id: 11,
    title: "Then She Was Gone",
    author: "Lisa Jewell",
    price: "£3.90",
    image: "/images/fiction9.jpg",
    genre: "Mystery",
    description: "A mother's search for her missing daughter uncovers dark secrets.",
    summary: "Then She Was Gone is a mystery novel by Lisa Jewell that follows a mother who, after her daughter goes missing, meets a man who seems too good to be true.",
    reviews: [
      "Twisty and suspenseful.",
      "Emotional family drama.",
      "Keeps you guessing."
    ],
    authorBio: "Lisa Jewell is a British author known for her psychological thrillers and family sagas.",
    ISBN: "978-0-123456-11-9",
    publicationDate: "2017-08-24",
    publisher: "Atria Books"
  },
  {
    id: 12,
    title: "The White Tiger",
    author: "Aravind Adiga",
    price: "£2.90",
    image: "/images/fiction12.jfif",
    genre: "Fantasy",
    description: "A story of a poor Indian driver who dreams of a better life.",
    summary: "The White Tiger is a novel by Aravind Adiga that tells the story of Balram Halwai, a poor Indian driver who becomes an entrepreneur. It explores themes of class, corruption, and ambition in modern India.",
    reviews: [
      "Sharp and satirical.",
      "Exposes social inequalities.",
      "Powerful storytelling."
    ],
    authorBio: "Aravind Adiga is an Indian author known for his debut novel The White Tiger, which won the Man Booker Prize.",
    ISBN: "978-0-123456-12-6",
    publicationDate: "2008-04-22",
    publisher: "Atlantic Books"
  }
];

export default function FictionBooksDocument() {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-4xl font-bold mb-8 text-purple-900 text-center">Detailed Fiction Books Collection</h1>
      {fictionBooksDetailed.map((book) => (
        <div key={book.id} className="mb-12 border-b border-gray-300 pb-6">
          <div className="flex flex-col md:flex-row gap-6">
            <img src={book.image} alt={book.title} className="w-48 h-64 object-cover rounded-md shadow-md" />
            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-purple-800">{book.title}</h2>
              <p className="text-sm text-gray-600 mb-2">by {book.author}</p>
              <p className="text-lg font-semibold text-green-700 mb-2">{book.price}</p>
              <p className="mb-2">{book.description}</p>
              <p className="italic mb-2">{book.summary}</p>
              <div className="mb-2">
                <h3 className="font-semibold text-purple-700">Reviews:</h3>
                <ul className="list-disc list-inside">
                  {book.reviews.map((review, index) => (
                    <li key={index} className="text-gray-700">{review}</li>
                  ))}
                </ul>
              </div>
              <p className="mb-1"><span className="font-semibold">Author Bio:</span> {book.authorBio}</p>
              <p className="mb-1"><span className="font-semibold">ISBN:</span> {book.ISBN}</p>
              <p className="mb-1"><span className="font-semibold">Publication Date:</span> {book.publicationDate}</p>
              <p className="mb-1"><span className="font-semibold">Publisher:</span> {book.publisher}</p>
              <a href={`/products/${book.id}`} className="inline-block mt-4 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors">View More</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
