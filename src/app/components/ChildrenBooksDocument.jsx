"use client";

const childrenBooksDetailed = [
  {
    id: 25,
    title: "The Detective Dog",
    author: "Julia Donaldson",
    price: "£3.90",
    image: "/images/children1.webp",
    genre: "Children",
    description: "A fun adventure with a clever dog detective. Offer: Buy 3 Get Another Free.",
    summary: "The Detective Dog is a children's book by Julia Donaldson that follows a dog who solves mysteries in a playful way.",
    reviews: [
      "A delightful mystery for young readers.",
      "Engaging and fun illustrations.",
      "Perfect for early readers."
    ],
    authorBio: "Julia Donaldson is a renowned British author known for her children's books filled with rhyme and rhythm.",
    ISBN: "978-0-123456-25-0",
    publicationDate: "2015-06-01",
    publisher: "Macmillan Children's Books"
  },
  {
    id: 26,
    title: "The Very Hungry Caterpillar",
    author: "Eric Carle",
    price: "£4.50",
    image: "/images/children2.webp",
    genre: "Children",
    description: "A classic tale of a caterpillar's journey to becoming a butterfly. Offer: Buy 3 Get Another Free.",
    summary: "The Very Hungry Caterpillar is a children's book by Eric Carle that teaches counting and the life cycle of a butterfly through colorful illustrations.",
    reviews: [
      "A timeless classic loved by generations.",
      "Beautiful and vibrant artwork.",
      "Educational and entertaining."
    ],
    authorBio: "Eric Carle was an American designer, illustrator, and writer of children's books, famous for his distinctive collage illustrations.",
    ISBN: "978-0-123456-26-7",
    publicationDate: "1969-03-01",
    publisher: "World Publishing Company"
  },
  {
    id: 27,
    title: "Elmer",
    author: "David McKee",
    price: "£3.90",
    image: "/images/children3.jpg",
    genre: "Children",
    description: "The story of a colorful elephant who learns to be himself. Offer: Buy 3 Get Another Free.",
    summary: "Elmer is a children's book by David McKee about a patchwork elephant who stands out from the crowd and learns about individuality.",
    reviews: [
      "A heartwarming story about diversity.",
      "Bright and cheerful illustrations.",
      "Great message for kids."
    ],
    authorBio: "David McKee was a British writer and illustrator of children's books, best known for the Elmer series.",
    ISBN: "978-0-123456-27-4",
    publicationDate: "1989-09-01",
    publisher: "Andersen Press"
  },
  {
    id: 28,
    title: "The Wonky Donkey",
    author: "Craig Smith",
    price: "£3.80",
    image: "/images/children4.jpg",
    genre: "Children",
    description: "A silly song about a donkey with many adjectives. Offer: Buy 3 Get Another Free.",
    summary: "The Wonky Donkey is a children's book by Craig Smith that tells the story of a donkey with various silly characteristics through a cumulative song.",
    reviews: [
      "Hilarious and fun to read aloud.",
      "Kids love the repetitive rhymes.",
      "Great for building vocabulary."
    ],
    authorBio: "Craig Smith is a New Zealand author known for his humorous children's books.",
    ISBN: "978-0-123456-28-1",
    publicationDate: "2009-04-01",
    publisher: "Penguin Random House"
  },
  {
    id: 29,
    title: "We’re Going on a Bear Hunt",
    author: "Michael Rosen",
    price: "£4.10",
    image: "/images/children5.webp",
    genre: "Children",
    description: "An exciting adventure through different terrains to find a bear. Offer: Buy 3 Get Another Free.",
    summary: "We’re Going on a Bear Hunt is a children's book by Michael Rosen that follows a family on a bear hunt, encountering various obstacles along the way.",
    reviews: [
      "Captivating story with rhythmic text.",
      "Perfect for interactive reading.",
      "Beautiful illustrations."
    ],
    authorBio: "Michael Rosen is a British children's author and poet, known for his engaging storytelling.",
    ISBN: "978-0-123456-29-8",
    publicationDate: "1989-07-01",
    publisher: "Walker Books"
  },
  {
    id: 30,
    title: "The Gruffalo",
    author: "Julia Donaldson",
    price: "£4.00",
    image: "/images/children6.webp",
    genre: "Children",
    description: "A mouse outsmarts predators with tales of a scary creature. Offer: Buy 3 Get Another Free.",
    summary: "The Gruffalo is a children's book by Julia Donaldson about a clever mouse who invents a monster to scare away predators.",
    reviews: [
      "A clever and funny story.",
      "Loved by children and adults alike.",
      "Engaging rhymes and illustrations."
    ],
    authorBio: "Julia Donaldson is a renowned British author known for her children's books filled with rhyme and rhythm.",
    ISBN: "978-0-123456-30-4",
    publicationDate: "1999-09-01",
    publisher: "Macmillan Children's Books"
  },
  {
    id: 31,
    title: "Guess How Much I Love You",
    author: "Sam McBratney",
    price: "£3.50",
    image: "/images/children7.webp",
    genre: "Children",
    description: "A heartwarming story of a parent's love for their child. Offer: Buy 3 Get Another Free.",
    summary: "Guess How Much I Love You is a children's book by Sam McBratney that explores the depth of parental love through a conversation between a big and little nutbrown hare.",
    reviews: [
      "Touching and tender story.",
      "Beautifully illustrated.",
      "Perfect bedtime read."
    ],
    authorBio: "Sam McBratney was an Irish author of children's books, best known for this classic.",
    ISBN: "978-0-123456-31-1",
    publicationDate: "1994-10-01",
    publisher: "Walker Books"
  },
  {
    id: 32,
    title: "The Boy Who Grew Dragons (Book 1)",
    author: "Andy Shepherd",
    price: "£3.90",
    image: "/images/children8.jpg",
    genre: "Children",
    description: "A boy discovers he can grow dragons from seeds. Offer: Buy 3 Get Another Free.",
    summary: "The Boy Who Grew Dragons is a children's book by Andy Shepherd about a boy who finds magical dragon seeds and embarks on an adventure.",
    reviews: [
      "Imaginative and exciting story.",
      "Great for young fantasy lovers.",
      "Well-paced and engaging."
    ],
    authorBio: "Andy Shepherd is a British author known for his children's fantasy books.",
    ISBN: "978-0-123456-32-8",
    publicationDate: "2016-03-01",
    publisher: "Simon & Schuster"
  },
  {
    id: 33,
    title: "Giraffes Can’t Dance",
    author: "Giles Andreae",
    price: "£3.90",
    image: "/images/children9.jpg",
    genre: "Children",
    description: "Gerald the giraffe learns that anyone can dance. Offer: Buy 3 Get Another Free.",
    summary: "Giraffes Can’t Dance is a children's book by Giles Andreae that encourages self-expression and believing in oneself through the story of Gerald the giraffe.",
    reviews: [
      "Uplifting and positive message.",
      "Colorful and lively illustrations.",
      "Great for building confidence."
    ],
    authorBio: "Giles Andreae is a British poet and author of children's books.",
    ISBN: "978-0-123456-33-5",
    publicationDate: "1999-05-01",
    publisher: "Orchard Books"
  },
  {
    id: 34,
    title: "The Tiger Who Came to Tea",
    author: "Judith Kerr",
    price: "£3.90",
    image: "/images/children10.jpg",
    genre: "Children",
    description: "A tiger visits a little girl and her family for tea. Offer: Buy 3 Get Another Free.",
    summary: "The Tiger Who Came to Tea is a children's book by Judith Kerr about a polite tiger who visits a family and eats everything in sight.",
    reviews: [
      "Charming and whimsical story.",
      "Classic children's literature.",
      "Loved by generations."
    ],
    authorBio: "Judith Kerr was a British writer and illustrator of children's books.",
    ISBN: "978-0-123456-34-2",
    publicationDate: "1968-10-01",
    publisher: "HarperCollins"
  }
];

export default function ChildrenBooksDocument() {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-4xl font-bold mb-8 text-purple-900 text-center">Detailed Children Books Collection</h1>
      {childrenBooksDetailed.map((book) => (
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
