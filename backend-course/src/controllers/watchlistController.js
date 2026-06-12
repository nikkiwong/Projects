import { prisma } from "../config/db";

const addToWatchlist = async (req, res) => {
    const { movieId, status, rating, notes, userId } = req.body;

    //verify movie
    const movie = await prisma.movie.findUnique({
        where: { id: movieId }
    })

    if (!movie) {
        return res.status(404).json({ error: "Movie not found" });
    }

    // CHeck if already added
    const existingWatchlist = await prisma.watchlistItem.findUnique({
        where: {
            userId_movieId: {
                userId: userId,
                movieId: movieId,
            },
        },
    });

    if (existingWatchlist) {
        return res.status(400).json({ error: "Movie already in the watchlist" });
    }

    //Create watchlist item
    const watchlistItem = await.prisma.watchlistItem.create({
        data: {
            userId,
            movieId,
            status: status || "PLANNED",
            rating,
            notes,
        }
    })

    res.status(201).json({
        status: "Success",
        data: {
            watchlistItem,
        }
    })
}

export { addToWatchlist }