import { PrismaClient } from "@prisma/client";

//not part of our API. script we run when we want to seed our database

const prisma = new PrismaClient()


const userId = process.env.CREATOR_ID;

const movies = [
  {
    "title": "Echoes of Tomorrow",
    "overview": "A scientist discovers messages from her future self warning of an impending global disaster.",
    "releaseYear": "2024",
    "genres": ["Sci-Fi", "Thriller"],
    "runtime": 118,
    "posterUrl": "https://example.com/posters/echoes-of-tomorrow.jpg",
    "createdBy": userId
  },
  {
    "title": "Midnight in Verona",
    "overview": "Two strangers meet in Italy and uncover a hidden past that binds them together.",
    "releaseYear": "2022",
    "genres": ["Romance", "Drama"],
    "runtime": 105,
    "posterUrl": "https://example.com/posters/midnight-in-verona.jpg",
    "createdBy": userId
  },
  {
    "title": "Neon Shadows",
    "overview": "A detective navigates a cyberpunk city to track down a rogue AI.",
    "releaseYear": "2025",
    "genres": ["Action", "Sci-Fi"],
    "runtime": 130,
    "posterUrl": "https://example.com/posters/neon-shadows.jpg",
    "createdBy": userId
  },
  {
    "title": "The Last Orchard",
    "overview": "A family fights to preserve their ancestral land amid corporate expansion.",
    "releaseYear": "2021",
    "genres": ["Drama"],
    "runtime": 112,
    "posterUrl": "https://example.com/posters/the-last-orchard.jpg",
    "createdBy": userId
  },
  {
    "title": "Crimson Tidefall",
    "overview": "A coastal town faces a mysterious red tide that alters marine life and humans alike.",
    "releaseYear": "2023",
    "genres": ["Horror", "Mystery"],
    "runtime": 99,
    "posterUrl": "https://example.com/posters/crimson-tidefall.jpg",
    "createdBy": userId
  },
  {
    "title": "Skybound",
    "overview": "A group of passengers must survive after their plane is stranded above the clouds.",
    "releaseYear": "2024",
    "genres": ["Adventure", "Thriller"],
    "runtime": 121,
    "posterUrl": "https://example.com/posters/skybound.jpg",
    "createdBy": userId
  },
  {
    "title": "Fragments of Us",
    "overview": "A nonlinear story of a couple piecing together their fractured relationship.",
    "releaseYear": "2020",
    "genres": ["Romance", "Drama"],
    "runtime": 97,
    "posterUrl": "https://example.com/posters/fragments-of-us.jpg",
    "createdBy": userId
  },
  {
    "title": "Quantum Heist",
    "overview": "Thieves use quantum tunneling technology to pull off impossible robberies.",
    "releaseYear": "2025",
    "genres": ["Action", "Sci-Fi"],
    "runtime": 115,
    "posterUrl": "https://example.com/posters/quantum-heist.jpg",
    "createdBy": userId
  },
  {
    "title": "The Silent Forest",
    "overview": "Campers encounter an eerie silence that hides a terrifying secret.",
    "releaseYear": "2022",
    "genres": ["Horror"],
    "runtime": 102,
    "posterUrl": "https://example.com/posters/the-silent-forest.jpg",
    "createdBy": userId
  },
  {
    "title": "Golden Hour",
    "overview": "A photographer captures moments that seem to alter reality itself.",
    "releaseYear": "2023",
    "genres": ["Fantasy", "Drama"],
    "runtime": 110,
    "posterUrl": "https://example.com/posters/golden-hour.jpg",
    "createdBy": userId
  },
  {
    "title": "Iron Pulse",
    "overview": "An underground fighter rises to fame while battling personal demons.",
    "releaseYear": "2021",
    "genres": ["Action", "Drama"],
    "runtime": 108,
    "posterUrl": "https://example.com/posters/iron-pulse.jpg",
    "createdBy": userId
  },
  {
    "title": "Aurora Skies",
    "overview": "Scientists in the Arctic uncover signals from an unknown origin.",
    "releaseYear": "2024",
    "genres": ["Sci-Fi", "Mystery"],
    "runtime": 119,
    "posterUrl": "https://example.com/posters/aurora-skies.jpg",
    "createdBy": userId
  },
  {
    "title": "Paper Kingdom",
    "overview": "A young writer’s fictional world begins to merge with reality.",
    "releaseYear": "2020",
    "genres": ["Fantasy"],
    "runtime": 95,
    "posterUrl": "https://example.com/posters/paper-kingdom.jpg",
    "createdBy": userId
  },
  {
    "title": "Broken Signals",
    "overview": "A journalist investigates strange radio transmissions linked to disappearances.",
    "releaseYear": "2022",
    "genres": ["Thriller", "Mystery"],
    "runtime": 107,
    "posterUrl": "https://example.com/posters/broken-signals.jpg",
    "createdBy": userId
  },
  {
    "title": "Velvet Run",
    "overview": "A courier in a futuristic city delivers secrets that could topple governments.",
    "releaseYear": "2025",
    "genres": ["Action", "Sci-Fi"],
    "runtime": 123,
    "posterUrl": "https://example.com/posters/velvet-run.jpg",
    "createdBy": userId
  },
  {
    "title": "Sunset Letters",
    "overview": "A series of letters reveals a decades-old love story.",
    "releaseYear": "2021",
    "genres": ["Romance"],
    "runtime": 101,
    "posterUrl": "https://example.com/posters/sunset-letters.jpg",
    "createdBy": userId
  },
  {
    "title": "The Hollow Deep",
    "overview": "Divers explore an underwater cave that distorts time and memory.",
    "releaseYear": "2023",
    "genres": ["Adventure", "Sci-Fi"],
    "runtime": 114,
    "posterUrl": "https://example.com/posters/the-hollow-deep.jpg",
    "createdBy": userId
  },
  {
    "title": "City of Ashes",
    "overview": "After a volcanic eruption, survivors rebuild while facing hidden threats.",
    "releaseYear": "2024",
    "genres": ["Drama", "Thriller"],
    "runtime": 109,
    "posterUrl": "https://example.com/posters/city-of-ashes.jpg",
    "createdBy": userId
  },
  {
    "title": "Parallel Hearts",
    "overview": "Two people in parallel universes try to connect across dimensions.",
    "releaseYear": "2025",
    "genres": ["Romance", "Sci-Fi"],
    "runtime": 117,
    "posterUrl": "https://example.com/posters/parallel-hearts.jpg",
    "createdBy": userId
  },
  {
    "title": "The Glass Maze",
    "overview": "Contestants trapped in a shifting maze must outwit each other to survive.",
    "releaseYear": "2022",
    "genres": ["Thriller"],
    "runtime": 103,
    "posterUrl": "https://example.com/posters/the-glass-maze.jpg",
    "createdBy": userId
  }
];

const main = async () => {
    console.log("Seeding movies...");

    for (const movie of movies) {
        await prisma.movie.create({
            data: movie,
        });
        console.log(`Created movie: ${movie.title}`);
    }

    console.log("Seeding completed!");
}


main().catch((err)=>{
    console.error(err)
    process.exit(1)
}).finally(async()=>{
    await prisma.$disconnect();
})