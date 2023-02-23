import React, { useState } from "react";
import CoinItem from "./CoinItem";
const SearchBar = ({ coins }) => {
  const [search_text, setSearch_text] = useState("");
  return (
    <div className="section-div">
      <div className="flex flex-col md:flex-row justify-center p-3 text-center md:text-right items-center gap-8">
        <h1 className="text-xl font-semibold">搜尋貨幣</h1>
        <form>
          <input
            className="w-full bg-primary border border-primary px-4 py-2 rounded-md shadow-md font-semibold"
            onChange={(e) => {
              setSearch_text(e.target.value);
            }}
            type="text"
            placeholder="Search a coin"
          />
        </form>
      </div>

      <table className="w-full border-collapse text-center my-6 text-sm">
        <thead>
          <tr className="border-b">
            <th className="p-2"></th>
            <th className="p-2">#</th>
            <th className="text-left">Coin</th>
            <th></th>
            <th>
              匯率 <span className="text-sm text-gray-400">(USD)</span>
            </th>
            <th>1h</th>
            <th>24h</th>
            <th className="hidden md:table-cell">7天</th>
            <th className="hidden md:table-cell w-[180px]">
              24h交易量 <span className="text-sm text-gray-400">(USD)</span>
            </th>
            <th className="hidden md:table-cell w-[180px]">
              總市值 <span className="text-sm text-gray-400">(USD)</span>
            </th>
            <th className="w-[160px] hidden md:table-cell">最近 7 天</th>
          </tr>
        </thead>
        <tbody>
          {coins?.filter((value) =>
            value.name.toLowerCase().includes(search_text.toLowerCase())
          ).length > 0
            ? coins
                ?.filter((value) => {
                  return value.name
                    .toLowerCase()
                    .includes(search_text.toLowerCase());
                })
                .map((coin) => {
                  return <CoinItem coin={coin} key={coin?.id} />;
                })
            : coins?.map((coin) => {
                return <CoinItem coin={coin} key={coin?.id} />;
              })}
        </tbody>
      </table>
    </div>
  );
};

export default SearchBar;
