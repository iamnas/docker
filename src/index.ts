import { PrismaClient } from "@prisma/client";
import express, { Request, Response } from "express";

const app = express();
app.use(express.json());

const client = new PrismaClient();

app.get("/", (req, res) => {
  res.json({
    message: "Healthy server",
  });
});

app.post("/", async (req: Request, res: Response) => {
  await client.user.create({
    data: {
      email: req.body.email,
      name: req.body.name,
    },
  });

  res.json({
    message: "Done signing up!",
  });
});

app.listen(3000);
