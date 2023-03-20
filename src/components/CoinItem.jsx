import React from "react";
import { Link } from "react-router-dom";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { AiOutlineStar } from "react-icons/ai";
const CoinItem = ({ coin }) => {
  return (
    <tr className="h-20 border-b overflow-hidden">
      <td className="cursor-pointer">
        <AiOutlineStar />
      </td>
      <td>{coin?.market_cap_rank}</td>
      <td>
        <Link>
          <div className="flex items-center ">
            <img
              className="w-6 rounded-full mr-3"
              src={coin?.image}
              alt={coin?.market_cap_rank}
            />
            <p className="hidden sm:table-cell">{coin?.name}</p>
          </div>
        </Link>
      </td>
      <td className="text-sm sm:text-base">{coin?.symbol.toUpperCase()}</td>
      {/* 匯率 */}
      <td className="text-sm sm:text-base">
        {coin?.current_price.toLocaleString()}
      </td>
      <td>
        {
          <p
            className={
              coin?.price_change_percentage_1h_in_currency > 0
                ? "text-green-600"
                : "text-red-600"
            }
          >
            {coin?.price_change_percentage_1h_in_currency?.toFixed(2)}%
          </p>
        }
      </td>
      <td>
        {
          <p
            className={
              coin?.price_change_percentage_24h_in_currency > 0
                ? "text-green-600"
                : "text-red-600"
            }
          >
            {coin?.price_change_percentage_24h?.toFixed(2)}%
          </p>
        }
      </td>
      <td className=" hidden md:table-cell">
        {
          <p
            className={
              coin?.price_change_percentage_7d_in_currency > 0
                ? "text-green-600"
                : "text-red-600"
            }
          >
            {coin?.price_change_percentage_7d_in_currency?.toFixed(2)}%
          </p>
        }
      </td>
      <td className="w-[100px] hidden md:table-cell">
        {coin?.total_volume.toLocaleString()}
      </td>
      <td className="w-[100px] hidden md:table-cell">
        {coin?.market_cap.toLocaleString()}
      </td>
      <td className="hidden md:table-cell">
        <Sparklines data={coin?.sparkline_in_7d.price}>
          {coin?.price_change_percentage_7d_in_currency > 0 ? (
            <SparklinesLine color="#16a085" />
          ) : (
            <SparklinesLine color="#c0392b" />
          )}
        </Sparklines>
      </td>
    </tr>
  );
};

export default CoinItem;
