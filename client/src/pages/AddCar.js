import { Col, Row, Form, Input, Select } from "antd";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import DefaultLayout from "../components/DefaultLayout";
import Spinner from "../components/Spinner";
import { addCar } from "../redux/actions/carsActions";
const { Option } = Select;
function AddCar() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.alertsReducer);
  const [city, setcity] = React.useState("");
  function onFinish(values) {
    const user = JSON.parse(localStorage.getItem("user"));

    values.bookedTimeSlots = [];
    values.createdBy = user._id;
    values.city = city;
    dispatch(addCar(values));
    console.log(values);
  }

  return (
    <DefaultLayout>
      {loading && <Spinner />}
      <Row justify="center mt-5">
        <Col lg={12} sm={24} xs={24} className="p-2">
          <Form className="bs1 p-2" layout="vertical" onFinish={onFinish}>
            <h3>Add New Car</h3>
            <hr />
            <Form.Item
              name="name"
              label="Car name"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="image"
              label="Image url"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="rentPerHour"
              label="Rent per hour"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="capacity"
              label="Capacity"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="fuelType"
              label="Fuel Type"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>

            <Form.Item label="city">
              <Select
                onChange={(value) => {
                  //   alert(value);
                  setcity(value);
                }}
                name="city"
                placeholder="Please select a city"
              >
                <Option value="Scarborough">Scarborough</Option>
                <Option value="Toronto">Toronto</Option>
                <Option value="Brampton">Brampton</Option>
                <Option value="london">london</Option>
                <Option value="ottawa">ottawa</Option>
              </Select>
            </Form.Item>

            <div className="text-right">
              <button className="btn1">ADD CAR</button>
            </div>
          </Form>
        </Col>
      </Row>
    </DefaultLayout>
  );
}

export default AddCar;
