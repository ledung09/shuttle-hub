import { Request, Response, Router } from "express";
import { addOne, getAll, getPaymentStats } from "../controller/playerController";

const playerRouter = Router();

//  Get statistic
playerRouter.get("/players/payment/:month", getPaymentStats);

// Get all players.
playerRouter.get("/players", getAll);

// Get a single book by ID.
playerRouter.get("/players/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  var exist = true; // verify id existence
  if (exist) {
    res.status(200).send(`Book with id ${id} retrieved!`);
  } else res.status(404).json({ error: "Book does not exist!" });
});

// Add a new book.
playerRouter.post("/players", addOne);

// Update a book by ID.
playerRouter.patch("/players/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const body = req.body;
  var exist = true; // verify id existence
  if (exist) {
    res.status(200).send(`Book with id ${id} updated!`);
  } else res.status(404).json({ error: "Book does not exist!" });
});

// Delete a book by ID.
playerRouter.delete("/players/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  var exist = true; // verify id existence
  if (exist) {
    res.status(204).send(`Book with id ${id} deleted`);
  } else res.status(404).json({ error: "Book does not exist!" });
});

export { playerRouter };
