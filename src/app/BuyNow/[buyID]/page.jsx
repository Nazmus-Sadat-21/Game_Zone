import BuyNowCard from "@/Components/BuyNowCard";

const GameData = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/GameData.json`,
    {
      cache: "no-store", // Prevents stale caching during development
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch game data");
  }

  return res.json();
};

const CheckoutPage = async ({ params }) => {
  const { buyID } = await params;
  const data = await GameData();

  const game = data.find((e) => String(e.gameId) === String(buyID));

  return (
    <div>
      <BuyNowCard game={game}></BuyNowCard>
    </div>
  );
};

export default CheckoutPage;



