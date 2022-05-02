import Box from "@mui/material/Box";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllShowsAsync, SHOW_DATA } from "../../context/show-slice";
import { v4 as uuidv4 } from "uuid";
import ShowCard from "./ShowCard";

export default function ShowList() {
  const showsData = useSelector(SHOW_DATA);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllShowsAsync());
  }, [dispatch]);

  const renderShows = showsData.map((show) => (
    <ShowCard key={uuidv4()} show={show} />
  ));

  return (
    <section>
      <h1 style={{ marginLeft: "1rem", marginTop: "1rem" }}>Shows</h1>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))",
          gap: "1rem",
          marginTop: "1rem",
          padding: "0px 12px",
        }}
      >
        {renderShows}
      </Box>
    </section>
  );
}
