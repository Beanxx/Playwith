import React, { useMemo, useEffect, useState } from "react";
import HomeTemplate from "../components/HomeTemplate";
import Header from "../components/Header";
import RoomTable from "../components/RoomTable";
import axios from "axios";

function RoomSearch() {
  const [inputData, setInputData] = useState([]);

  useEffect(async () => {
    try {
      const res = await axios.get("http://localhost:3001/api/search");
      const _inputData = await res.data.map((rowData) => ({
        room_id: rowData.room_id,
        room_title: rowData.room_title,
        room_subject: rowData.room_subject,
        room_private: rowData.room_private,
        room_pw: rowData.room_pw,
        room_count: rowData.room_count,
        room_theme: rowData.room_theme,
      }));

      setInputData(inputData.concat(_inputData));

    } catch (e) {
      console.error(e.message);
    }
  }, []);

  const columns = useMemo(
    () => [
      {
        accessor: "id",
        Header: "순번",
      },
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

  const data = useMemo(() =>
    inputData.map((rowData) => ({
      id: rowData.room_id,
      title: rowData.room_title,
      subject: rowData.room_subject,
      thema: (rowData.room_theme == 1 ? "일반" : 
      (rowData.room_theme == 2 ? "생일" : 
      (rowData.room_theme == 3 ? "할로윈" : "크리스마스"))),
      count: rowData.room_count + "/4",
      private: (rowData.room_private == 0 ? "공개방" : "비밀방"),
    }))
  );

  return (
    <HomeTemplate>
      <Header>파티룸 탐색</Header>
      <RoomTable columns={columns} data={data} />
    </HomeTemplate>
  );
}

export default RoomSearch;
