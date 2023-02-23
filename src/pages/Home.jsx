import React from "react";
import SearchBar from "../components/SearchBar";
import { useQuery } from "react-query";
import axios from "axios";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Trending from "../components/Trending";
const Home = () => {
  const fetchData = async () => {
    let res = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d"
    );
    return res.data;
  };

  const { isLoading, isError, data, error } = useQuery("allCoins", fetchData);

  if (isLoading) {
    return (
      <div className="section-div flex justify-center items-center">
        <AiOutlineLoading3Quarters className="animate-spin" />
      </div>
    );
  }
  if (isError) {
    return (
      <div className="section-div flex justify-center items-center">
        <h1>{error.message}</h1>
      </div>
    );
  }

  return (
    <div>
      <SearchBar coins={data} />
      <Trending />
    </div>
  );
};

export default Home;
