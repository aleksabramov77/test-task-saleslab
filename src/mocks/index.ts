import { CardProps } from "../components/cards/components/card";
import Purple1 from "../shares/icons/purple1.svg";
import Purple2 from "../shares/icons/purple2.svg";
import Green1 from "../shares/icons/green1.svg";
import Green2 from "../shares/icons/green2.svg";
import Red1 from "../shares/icons/red1.svg";
import Red2 from "../shares/icons/red2.svg";
import Blue1 from "../shares/icons/blue1.svg";
import Blue2 from "../shares/icons/blue2.svg";

export const cardsData: CardProps[] = [
  {
    color: "purple",
    icon: Purple1,
    title: "Total Leads and Deals",
    count: 1600,
    amount: 132000999,
  },
  {
    color: "green",
    icon: Green1,
    title: "Won",
    count: 45,
    amount: 108000,
  },
  {
    color: "red",
    icon: Red1,
    title: "Lost",
    count: 15,
    amount: 24000,
  },
  {
    color: "blue",
    icon: Blue1,
    title: "New leads",
    count: 115,
  },
  {
    color: "purple",
    icon: Purple2,
    title: "Total tasks",
    count: 269,
  },
  {
    color: "green",
    icon: Green2,
    title: "Completed tasks",
    count: 115,
  },
  {
    color: "red",
    icon: Red2,
    title: "Expired tasks",
    count: 45,
  },
  {
    color: "blue",
    icon: Blue2,
    title: "No tasks",
    count: 10,
  },
];
