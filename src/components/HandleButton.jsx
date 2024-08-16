import React from "react";
import Card from "./Card";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useState } from "react";

const HandleButton = ({ movies }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 20;
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies && movies.slice(indexOfFirstMovie, indexOfLastMovie);

  const handleNext = () => {
    if (currentPage * moviesPerPage < movies.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <>
      <div className="container">
        {currentMovies && currentMovies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>

      <div>
        <Stack spacing={2} direction="row" className="bottom-Navbar">
          <Button
            variant="contained"
            onClick={handlePrev}
            disabled={currentPage === 1}
          >
            Prev
          </Button>
          <div>Page {currentPage}</div>
          <Button
            variant="contained"
            onClick={handleNext}
            disabled={currentPage * moviesPerPage >= movies && movies.length}
          >
            Next
          </Button>
        </Stack>
      </div>
    </>
  );
};

export default HandleButton;
