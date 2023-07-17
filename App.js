import React, { Component, useState } from "react";
import styled from "styled-components";

function Untitled() {
  const [data, setData] = useState([]);
  const [inputData, setInputData] = useState({
    placeholder5: "",
    placeholder: "",
    placeholder4: "",
    placeholder3: "",
    placeholder2: "",
    placeholder1: ""
  });

  const handleChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = () => {
    const newData = {
      ...inputData
    };
    setData([...data, newData]);
    setInputData({
      placeholder5: "",
      placeholder: "",
      placeholder4: "",
      placeholder3: "",
      placeholder2: "",
      placeholder1: ""
    });
  };

  return (
    <Container>
      <LeftColumn>
        <Input
          type="text"
          name="placeholder5"
          placeholder="Duran Varlık"
          value={inputData.placeholder5}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="placeholder"
          placeholder="Tanımı"
          value={inputData.placeholder}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="placeholder4"
          placeholder="Msf. Yeri"
          value={inputData.placeholder4}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="placeholder3"
          placeholder="Yrt. Tarihi"
          value={inputData.placeholder3}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="placeholder2"
          placeholder="Pers. No"
          value={inputData.placeholder2}
          onChange={handleChange}
        />
          <Input
          type="text"
          name="placeholder1"
          placeholder="Seri Numarası"
          value={inputData.placeholder1}
          onChange={handleChange}
        />
        <ButtonRow>
          <Button onClick={handleSave}>KAYDET</Button>
        </ButtonRow>
      </LeftColumn>
      <RightColumn>
        <Table>
          <thead>
            <tr>
              <th>Duran Varlık</th>
              <th>Tanımı</th>
              <th>Msf. Yeri</th>
              <th>Yrt. Tarihi</th>
              <th>Pers. No</th>
              <th>Seri Numarası</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.placeholder5}</td>
                <td>{item.placeholder}</td>
                <td>{item.placeholder4}</td>
                <td>{item.placeholder3}</td>
                <td>{item.placeholder2}</td>
                <td>{item.placeholder1}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </RightColumn>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

const LeftColumn = styled.div`
  width: 740px;
  height: 100%;
  background-color: #e6e6e6;
  flex-direction: column;
  display: flex;
  margin-top: 2px;
  border: none;
`;

const RightColumn = styled.div`
  width: 761px;
  height: 100%;
  background-color: #e6e6e6;
  margin-left: 19px;
  border: none;
`;

const Input = styled.input`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 79px;
  width: 368px;
  border-width: 1px;
  border-color: #000000;
  border-radius: 46px;
  border-style: solid;
  background: transparent;
  margin-top: 26px;
  margin-left: 80px;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
`;

const Button = styled.button`
  width: 183px;
  height: 59px;
  background-color: rgba(155, 152, 152, 1);
  border-width: 1px;
  border-color: #000000;
  border-radius: 57px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 20px;
  border-style: solid;
  cursor: pointer;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  th {
    background-color: #f2f2f2;
  }
`;

export default Untitled;
