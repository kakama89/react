import * as React from "react";
import { Form, Input, Button, Select, Avatar } from "antd";
import { useParams } from "react-router-dom";
import { ProfileModel } from "../../model/profile";
import request from "../../request";
import TextArea from "antd/lib/input/TextArea";
import { layout, tailLayout } from "../../constant";

const ProfileEdit: React.SFC<{}> = () => {
  let { id } = useParams();
  const [profile, setProfile] = React.useState<ProfileModel>();
  const [form] = Form.useForm();
  const { Option } = Select;

  React.useEffect(() => {
    request
      .get(`profiles/${id}`)
      .then((resp) => {
        setProfile(resp.data);
        form.resetFields();
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const onFinish = (values) => {
    request.patch(`profiles/${id}`, values).then(() => {
      alert("Update success");
    });
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    alert("Update failed");
  };
  return (
    <Form
      {...layout}
      name="basic"
      initialValues={profile}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      form={form}
    >
      <Form.Item
        label="Avatar"
        name="avatar"
        rules={[{ required: true, message: "Please input your avatar!" }]}
      >
        <Input value={profile?.avatar} />
      </Form.Item>

      <Form.Item
        label="Full Name "
        name="fullName"
        rules={[{ required: true, message: "Please input your full name!" }]}
      >
        <Input value={profile?.fullName} />
      </Form.Item>

      <Form.Item
        label="Position "
        name="desc"
        rules={[{ required: true, message: "Please input your full name!" }]}
      >
        <Input value={profile?.desc} />
      </Form.Item>

      <Form.Item
        label="Role"
        name="role"
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Select
          mode="multiple"
          style={{ width: "100%" }}
          placeholder="Please select"
        >
          <Option value="Administrator">Administrator</Option>
          <Option value="Moderator">Moderator</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input value={profile?.email} />
      </Form.Item>

      <Form.Item
        label="Phone"
        name="phone"
        rules={[{ required: true, message: "Please input your phone!" }]}
      >
        <Input value={profile?.phone} />
      </Form.Item>

      <Form.Item
        label="Twitter"
        name="twitter"
        rules={[{ required: true, message: "Please input your twitter!" }]}
      >
        <Input value={profile?.twitter} />
      </Form.Item>

      <Form.Item
        label="Location"
        name="location"
        rules={[{ required: true, message: "Please input your twitter!" }]}
      >
        <Input value={profile?.location} />
      </Form.Item>

      <Form.Item
        label="Bio"
        name="Bio"
        rules={[{ required: true, message: "Please input your twitter!" }]}
      >
        <TextArea value={profile?.Bio} />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ProfileEdit;
