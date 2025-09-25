"use client";

const nonFictionBooksDetailed = [
  {
    id: 13,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    price: "£3.90",
    image: "/images/Sapiens.webp",
    genre: "History",
    description: "A brief history of humankind from ancient times to the present.",
    summary: "Sapiens: A Brief History of Humankind is a book by Yuval Noah Harari that explores the history of our species from the Stone Age to the modern age, covering topics like cognitive revolution, agricultural revolution, and scientific revolution.",
    reviews: [
      "Insightful and thought-provoking.",
      "A must-read for understanding human history.",
      "Well-researched and engaging."
    ],
    authorBio: "Yuval Noah Harari is an Israeli historian and author, known for his books on human history and the future of humanity.",
    ISBN: "978-0-123456-13-3",
    publicationDate: "2011-01-01",
    publisher: "Harvill Secker"
  },
  {
    id: 14,
    title: "Prisoners of Geography",
    author: "Tim Marshall",
    price: "£3.50",
    image: "/images/prisoners.jpg",
    genre: "History",
    description: "How geography shapes the fate of nations and their politics.",
    summary: "Prisoners of Geography is a book by Tim Marshall that explains how geographical features like mountains, rivers, and deserts have influenced the course of history and continue to shape international relations.",
    reviews: [
      "Eye-opening perspective on geopolitics.",
      "Makes geography relevant to current events.",
      "Accessible and informative."
    ],
    authorBio: "Tim Marshall is a British journalist and author specializing in foreign affairs and geopolitics.",
    ISBN: "978-0-123456-14-0",
    publicationDate: "2015-10-06",
    publisher: "Elliott & Thompson"
  },
  {
    id: 15,
    title: "Why We Sleep",
    author: "Matthew Walker",
    price: "£4.20",
    image: "/images/non-fiction1.jpg",
    genre: "Science",
    description: "The science behind sleep and its importance for our health.",
    summary: "Why We Sleep is a book by Matthew Walker that explores the science of sleep, explaining why we need it, what happens when we don't get enough, and how sleep affects every aspect of our physical and mental health.",
    reviews: [
      "Essential reading on sleep science.",
      "Convincing and well-supported arguments.",
      "Changed how I think about sleep."
    ],
    authorBio: "Matthew Walker is a British-American neuroscientist and professor of neuroscience and psychology at UC Berkeley.",
    ISBN: "978-0-123456-15-7",
    publicationDate: "2017-10-03",
    publisher: "Allen Lane"
  },
  {
    id: 16,
    title: "The Body",
    author: "Bill Bryson",
    price: "£3.80",
    image: "/images/non-fiction2.webp",
    genre: "Science",
    description: "A comprehensive guide to how the human body works.",
    summary: "The Body: A Guide for Occupants is a book by Bill Bryson that takes readers on a head-to-toe tour of the human body, explaining how each system works and what happens when things go wrong.",
    reviews: [
      "Fascinating and humorous exploration.",
      "Makes complex science accessible.",
      "Bryson's best work yet."
    ],
    authorBio: "Bill Bryson is an American-British author known for his popular science books and travelogues.",
    ISBN: "978-0-123456-16-4",
    publicationDate: "2019-10-15",
    publisher: "Doubleday"
  },
  {
    id: 17,
    title: "How They Broke Britain",
    author: "James O'Brien",
    price: "£7.00",
    image: "/images/non-fiction4.jpg",
    genre: "Biography",
    description: "An examination of how Britain has been systematically broken by those in power.",
    summary: "How They Broke Britain is a book by James O'Brien that investigates the political and economic decisions that have led to Britain's current state of crisis, from austerity to Brexit.",
    reviews: [
      "Passionate and incisive analysis.",
      "Highlights important social issues.",
      "A call to action for change."
    ],
    authorBio: "James O'Brien is a British radio presenter and author known for his work on LBC radio.",
    ISBN: "978-0-123456-17-1",
    publicationDate: "2023-10-05",
    publisher: "WH Allen"
  },
  {
    id: 18,
    title: "Educated",
    author: "Tara Westover",
    price: "£3.90",
    image: "/images/fiction5.jpg",
    genre: "Biography",
    description: "A memoir about education, family, and the struggle for self-invention.",
    summary: "Educated is a memoir by Tara Westover that recounts her journey from growing up in a survivalist Mormon family in rural Idaho to earning a PhD from Cambridge University.",
    reviews: [
      "Inspiring and harrowing story.",
      "Beautifully written memoir.",
      "A testament to the power of education."
    ],
    authorBio: "Tara Westover is an American memoirist and historian, known for her bestselling memoir Educated.",
    ISBN: "978-0-123456-18-8",
    publicationDate: "2018-02-20",
    publisher: "Random House"
  },
  {
    id: 19,
    title: "The Shepherd's Life",
    author: "James Rebanks",
    price: "£3.90",
    image: "/images/non-fiction3.webp",
    genre: "Self-Help",
    description: "A tale of the Lake District and the universal search for a place to call home.",
    summary: "The Shepherd's Life is a memoir by James Rebanks that celebrates the traditional farming life in England's Lake District, offering insights into finding purpose and belonging in a modern world.",
    reviews: [
      "Poetic and reflective.",
      "Celebrates rural life and traditions.",
      "Thoughtful exploration of identity."
    ],
    authorBio: "James Rebanks is a British shepherd and author, known for his books on rural life and farming.",
    ISBN: "978-0-123456-19-5",
    publicationDate: "2015-04-02",
    publisher: "Allen Lane"
  },
  {
    id: 20,
    title: "Ikigai",
    author: "Héctor García and Francesc Miralles",
    price: "£5.30",
    image: "/images/non-fiction6.webp",
    genre: "Self-Help",
    description: "The Japanese secret to a long and happy life.",
    summary: "Ikigai is a book by Héctor García and Francesc Miralles that explores the Japanese concept of finding one's purpose in life, combining philosophy, psychology, and practical advice for living a meaningful life.",
    reviews: [
      "Inspiring guide to finding purpose.",
      "Combines wisdom and practicality.",
      "Eye-opening cultural insights."
    ],
    authorBio: "Héctor García and Francesc Miralles are Spanish authors known for their books on Japanese culture and philosophy.",
    ISBN: "978-0-123456-20-1",
    publicationDate: "2016-06-01",
    publisher: "Hutchinson"
  },
  {
    id: 21,
    title: "Start With Why",
    author: "Simon Sinek",
    price: "£4.50",
    image: "/images/non-fiction7.jpg",
    genre: "Business",
    description: "How great leaders inspire everyone to take action.",
    summary: "Start With Why is a book by Simon Sinek that explains how successful leaders and organizations think, act, and communicate, emphasizing the importance of starting with purpose rather than products or profits.",
    reviews: [
      "Transformative leadership principles.",
      "Clear and compelling message.",
      "Essential for entrepreneurs."
    ],
    authorBio: "Simon Sinek is a British-American author, motivational speaker, and organizational consultant.",
    ISBN: "978-0-123456-21-8",
    publicationDate: "2009-10-29",
    publisher: "Portfolio"
  },
  {
    id: 22,
    title: "Atomic Habits",
    author: "James Clear",
    price: "£4.80",
    image: "/images/non-fiction8.webp",
    genre: "Business",
    description: "An easy and proven way to build good habits and break bad ones.",
    summary: "Atomic Habits is a book by James Clear that provides a comprehensive guide to habit formation, explaining how small changes can make a big difference in personal and professional growth.",
    reviews: [
      "Practical and actionable advice.",
      "Changed my approach to habits.",
      "Highly recommended for self-improvement."
    ],
    authorBio: "James Clear is an American author and speaker known for his work on habits and decision-making.",
    ISBN: "978-0-123456-22-5",
    publicationDate: "2018-10-16",
    publisher: "Avery"
  },
  {
    id: 23,
    title: "Surrounded by Idiots",
    author: "Thomas Erikson",
    price: "£7.10",
    image: "/images/non-fiction11.jpg",
    genre: "Philosophy",
    description: "The four types of human behavior and how to understand them.",
    summary: "Surrounded by Idiots is a book by Thomas Erikson that uses a simple color-coded system to categorize human behavior types, helping readers understand themselves and others better for improved communication and relationships.",
    reviews: [
      "Helpful framework for understanding people.",
      "Practical insights into behavior.",
      "Easy to apply in daily life."
    ],
    authorBio: "Thomas Erikson is a Swedish behavioral expert and author known for his books on human behavior.",
    ISBN: "978-0-123456-23-2",
    publicationDate: "2014-10-01",
    publisher: "St Martin's Press"
  },
  {
    id: 24,
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    price: "£4.20",
    image: "/images/non-fiction12.webp",
    genre: "Philosophy",
    description: "A counterintuitive approach to living a good life.",
    summary: "The Subtle Art of Not Giving a F*ck is a self-help book by Mark Manson that challenges conventional wisdom about happiness and success, arguing that we should focus on what truly matters and let go of what doesn't.",
    reviews: [
      "Refreshing take on self-help.",
      "Honest and straightforward.",
      "Encourages critical thinking."
    ],
    authorBio: "Mark Manson is an American author and blogger known for his unconventional advice on relationships and life.",
    ISBN: "978-0-123456-24-9",
    publicationDate: "2016-09-13",
    publisher: "Harper"
  }
];

export default function NonFictionBooksDocument() {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-4xl font-bold mb-8 text-purple-900 text-center">Detailed Non-Fiction Books Collection</h1>
      {nonFictionBooksDetailed.map((book) => (
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
