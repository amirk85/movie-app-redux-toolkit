import { Button } from "@mui/material";
import * as React from "react";
import { Form, FormControl } from "react-bootstrap";
import SearchIcon from "@mui/icons-material/Search";
import "./SearchBox.css";
import { useDispatch } from "react-redux";
import { getSearchedMoviesAsync } from "../../../store/movie-slice";
import { getSearchedShowsAsync } from "../../../store/show-slice";

export default function SearchBox() {
  const [input, setInput] = React.useState("");
  const dispatch = useDispatch();

  function submitHandler(e) {
    e.preventDefault();
    dispatch(getSearchedMoviesAsync(input));
    dispatch(getSearchedShowsAsync(input));
    setInput("");
  }

  return (
    <Form className="d-flex" onSubmit={submitHandler}>
      <FormControl
        type="search"
        placeholder={`Search...`}
        className="me-2 search_input"
        aria-label="Search"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button
        style={{ marginRight: "1rem", backgroundColor: "#221F1F" }}
        variant="contained"
      >
        <SearchIcon />
      </Button>
    </Form>
  );
}
