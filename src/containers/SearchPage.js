import React, { useMemo } from "react";
import HomeTemplate from "../components/HomeTemplate";
import Header from "../components/Header";
import RoomTable from "../components/RoomTable";
import faker from "faker/locale/ko";

faker.seed(100);

function RoomSearch() {
  const columns = useMemo(
    () => [
      {
        accessor: "title",
        Header: "제목",
      },
      {
        accessor: "subject",
        Header: "주제",
      },
      {
        accessor: "thema",
        Header: "테마",
      },
      {
        accessor: "count",
        Header: "인원",
      },
      {
        accessor: "private",
        Header: "구분",
      },
    ],
    []
  );

  const data = useMemo(
    () => 
      Array(53)
        .fill()
        .map(() => ({
          id: faker.datatype.number({ 'min': 0, 'max':100000 }),
          title: faker.lorem.sentence(),
          subject: faker.datatype.number({ 'min': 0, 'max':3 }), //0:일반, 1:게임, 2:연예인, 3:취미
          thema: faker.datatype.number({ 'min': 0, 'max':3 }), //0:일반, 1:생일, 2:할로윈, 3:크리스마스
          count: faker.datatype.number({ 'min': 1, 'max':4 }), //1-4
          private: faker.datatype.number({ 'min': 0, 'max':1 }), //0:public, 1:private
        })),
      []
  );

  return (
    <HomeTemplate>
      <Header>파티룸 탐색</Header>
      <RoomTable columns={columns} data={data} />
    </HomeTemplate>
  );
}

export default RoomSearch;
