import React, { useMemo, useEffect, useState } from "react";
import HomeTemplate from "../components/HomeTemplate";
import Header from "../components/Header";
import RoomTable from "../components/RoomTable";
import faker from "faker/locale/ko";
import axios from "axios";

faker.seed(100);

function RoomSearch() {

      const [inputData, setInputData] = useState([{
        room_id: '',
        room_title: '',
        room_subject: '',
        room_private: '',
        room_pw: '',
        room_count: '',
        room_theme: ''
      }])
    
 
    useEffect(async() => {
        try{
            const res = await axios.get("http://localhost:3001/search")
            const _inputData = await res.data.map((rowData) => (
                {
                  room_id: rowData.room_id,
                  room_title: rowData.room_title,
                  room_subject: rowData.room_subject,
                  room_private: rowData.room_private,
                  room_pw: rowData.room_pw,
                  room_count: rowData.room_count,
                  room_theme: rowData.room_theme
                })
            )
            setInputData(inputData.concat(_inputData))
        } catch(e){
            console.error(e.message)
        }
    },[])

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
    inputData.map(rowData => ({
      id: rowData.room_id,
      title: rowData.room_title,
      subject: rowData.room_subject,
      thema: rowData.room_theme,
      count: rowData.room_count,
      private: rowData.room_private
    }))
  )

  return (
    <HomeTemplate>
      <Header>파티룸 탐색</Header>
      <RoomTable columns={columns} data={data} />
    </HomeTemplate>
  );
}

export default RoomSearch;
