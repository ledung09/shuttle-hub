import { Request, Response, Router } from "express";
import { Player } from "../model/player";
import { PlayerType } from "../types/interface";

export const getAll = async (req: Request, res: Response) => {
  try {
    const player: PlayerType[] = await Player.find().select("-__v");
    res.status(200).send(player);
  } catch (error) {
    res.status(404).send(`Error: ${error}`);
  }
};

export const addOne = async (req: Request, res: Response) => {
  const body: PlayerType = req.body;
  const { name, gender, potential } = body;
  console.log(body);
  try {
    const player = new Player({
      name,
      gender,
      potential,
    });
    await player.save();
    res.status(201).send(`A new player added!`);
  } catch (error) {
    res.status(404).send(`Error: ${error}`);
  }
};

export const getPaymentStats = async (req: Request, res: Response) => {
  const month: string = req.params.month;
  if (!month) res.status(404).send(`Please provide month in the param!`);
  const response = {};

  try {
    var totalMoney = 0;
    var payCount = 0;

    const monthString = `payment.${parseInt(month) - 1}`;
    let query: { [key: string]: any } = {};
    query[monthString] = true;
    const quer = await Player.find(query).select("gender");

    console.log(quer);

    quer.forEach((item) => {
      totalMoney += item.gender === "M" ? 160 : 80;
      payCount++;
    });

    const rowCountQuer = await Player.countDocuments();
    const unpayCount = rowCountQuer - payCount;

    const addDateQuer = await Player.find({
      $expr: {
        $eq: [
          { $month: "$addDate" }, // Extract the month from addDate
          { $month: new Date() }, // Current month
        ],
      },
    });

    console.log(addDateQuer);

    res
      .status(200)
      .send({ totalMoney, payCount, unpayCount, newly: addDateQuer.length });
  } catch (error) {
    res.status(404).send(`Error: ${error}`);
  }
};
