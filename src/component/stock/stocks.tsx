import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Table } from "antd";
import { StockModel } from "../../model/stock";
import request from "../../request";
import "antd/dist/antd.css";
const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Request Date",
    dataIndex: "requestDate",
    key: "requestDate",
  },
  {
    title: "Update Date",
    dataIndex: "updateDate",
    key: "updateDate",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Action",
    render: (text, record) => <Link to={`/stocks/${record.id}`}>Open</Link>,
    key: "action",
  },
];

const Stocks: React.FC<{}> = () => {
  const [stocks, setStocks] = useState<Array<StockModel>>([]);
  useEffect(() => {
    request
      .get("stocks")
      .then((stocks) => setStocks(stocks.data))
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return <Table rowKey="id" dataSource={stocks} columns={columns} />;
};
export default Stocks;
