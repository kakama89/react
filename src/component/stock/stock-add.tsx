import * as React from "react";
import { useParams } from "react-router-dom";
import { Form, Input, DatePicker, Select, Button } from "antd";
import { StockModelEdit } from "../../model/stock";
import request from "../../request";
import { layout, tailLayout } from "../../constant";
import moment from "moment";
const { Option } = Select;
const dateFormat = "DD/MM/YYYY";

const onFinish = (values) => {
  const stockUpdate = {
    ...values,
    requestDate: values.requestDate.format(dateFormat),
    updateDate: values.updateDate.format(dateFormat),
  };

  request.post(`stocks`, stockUpdate).then(() => {
    alert("Create success");
  });
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo) => {
  alert("Create failed");
};

const StockAdd: React.SFC<{}> = () => {
  const [stock, setStock] = React.useState<StockModelEdit>();
  const [form] = Form.useForm();
  return (
    <Form
      {...layout}
      name="basic"
      initialValues={stock!}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      form={form}
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: "Please input  Name!" }]}
      >
        <Input value={stock?.name} />
      </Form.Item>

      <Form.Item
        label="Request Date"
        name="requestDate"
        rules={[{ required: true, message: "Please input  Request Date!" }]}
      >
        <DatePicker
          format={dateFormat}
          value={moment(stock?.requestDate, dateFormat)}
        />
      </Form.Item>

      <Form.Item
        label="Update Date"
        name="updateDate"
        rules={[{ required: true, message: "Please input  Update Date!" }]}
      >
        <DatePicker
          format={dateFormat}
          value={moment(stock?.updateDate, dateFormat)}
        />
      </Form.Item>

      <Form.Item
        label="Status"
        name="status"
        rules={[{ required: true, message: "Please input  Status!" }]}
      >
        <Select style={{ width: 120 }}>
          <Option value="Active">Active</Option>
          <Option value="Cancelled">Cancelled</Option>
          <Option value="Resolved">Resolved</Option>
          <Option value="Paused">Paused</Option>
        </Select>
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default StockAdd;
