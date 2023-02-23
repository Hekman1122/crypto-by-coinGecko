import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
const Trending = () => {
  const fetchData = async () => {
    let res = await axios.get(
      "https://api.coingecko.com/api/v3/search/trending"
    );
    return res.data.coins;
  };
  const { data, isLoading } = useQuery("trending", fetchData);
  if (isLoading) {
    return (
      <div className="section-div flex justify-center items-center">
        <AiOutlineLoading3Quarters className="animate-spin" />
      </div>
    );
  }
  return (
    <div className="section-div my-10 py-4 text-primary">
      <h1 className="text-lg font-semibold my-4 text-center">市場趨勢</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data?.map((coin) => {
          return (
            <div
              className="border flex justify-between items-center p-4 w-full cursor-pointer ease-in-out duration-200 rounded-md"
              key={coin?.item.id}
            >
              <div className="flex ">
                <img
                  src={coin?.item.small}
                  className="rounded-full mr-4"
                  alt={coin?.item.coin_id}
                />
                <div>
                  <p className="font-semibold">{coin.item.name}</p>
                  <p>{coin?.item.symbol}</p>
                </div>
              </div>
              <div>
                <img
                  src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
                  alt="/"
                  className="w-4 mr-2"
                />
                <p>{coin?.item.price_btc.toFixed(7)}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Trending;
