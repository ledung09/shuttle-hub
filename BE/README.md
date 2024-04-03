# Express.ts

## Project setup

Follow these steps to setup:

1. Initialize npm: `npm init -y`. The `-y` flag tells npm to use default options without prompting for any inputs.
2. Installs TypeScript as a dependency for the project, along with type definitions for Node.js and Express. `npm install typescript @types/node @types/express`.
3. Installs **ts-node** as a development dependency `npm install --save-dev ts-node`. **ts-node** is a TypeScript execution environment for Node.js, which allows running TypeScript files directly without the need for compilation to JavaScript first.
4. `npm i express nodemon` command installs both Express, a web framework, and nodemon, a utility for automatic server restarts, for Node.js development.
5. Initializes a TypeScript project by generating a `tsconfig.json` file with default settings by `npx tsc --init`. Copy and paste the settings from `tsconfig.json` file in the root directory!

In `package.json`, for the script, add "dev" script. Run this script by `npm run dev` 
```
...
  "scripts": {
    ...
    "dev": "nodemon index.ts"
    ...
  },
  ...
```
## Port config and run the app

Select a suitable port (i.e: 3000, 8000, 8080,...) and then call the following method to run the app: `app.listen(port_number, callback_function)`
Example usage:

```
const port = 3000; using port 3000, notice that it is http (not https)!
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});


```
## Common usage

Simply call `app.method()` to access the corresponding method (get, post, patch, delete,...)\
\
Example usage:

```
import express, { Request, Response } from "express";
const app = express();
app.get("/books", (req: Request, res: Response) => {
  res.send("This is list of all books!");
});
```

However, for method that provide a `request body`, in order to extract the body of the request, we first have to initialize the middleware to parse the request body to JSON format:

```
app.use(express.json())
```

Only then, we can access the request body:

```
app.post("/add/books", (req: Request, res: Response) => {
  const body = req.body
  ...
  res.send("A new book added!");
});
```

### Handling chain route

To cleanly call the chain route, use `app.route(route_name)` follow by the chain route (i.e: `.get(callback_func), .post(callback_func)`) \
Example usage:

```
app
  .route("/book")
  .get((req: Request, res: Response) => {
    res.send("Get a random book");
  })
  .post((req: Request, res: Response) => {
    res.send("Add a book");
  })
  .put((req: Request, res: Response) => {
    res.send("Update the book");
  });
```

## Router

In order to share the api route or split the route for cleaner code, `router` is used to do the job. Initialize the router and use middleware to parse request body:

```
import { Router } from "express";
const bookRouter = Router();
bookRouter.use(express.json());
```

Now you can define the route desired:

```
// Route to get all books
bookRouter.get("/books", (req: Request, res: Response) => {
  res.status(200).send("This is list of all books!");
});

// Route to get a single book by ID
bookRouter.get("/books/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  var exist = true; // verify id existence
  if (exist) {
    res.status(200).send(`Book with id ${id} retrieved!`);
  } else res.status(404).json({ error: "Book does not exist!" });
});

// Route to create a new book
bookRouter.post("/books", (req: Request, res: Response) => {
  const body = req.body;
  // Do something with body information
  res.status(201).send(`A new book created!`);
});
```

To use the route, use `app.use(command_route, router)`. For the give code, to use `bookRouter`, we call the following command:

```
app.use('/', bookRouter)
// common route here is /, initialize it with anything you want!
```
