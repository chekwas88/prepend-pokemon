import * as React from "react";
import { render, screen } from "@testing-library/react";
import { Home } from "../../components";
import { mockedPokemons } from "../../__mocks__/mocks";

test("Home component rendered properly", () => {
  render(<Home data={mockedPokemons.data} />);
  const lists = screen.getByRole("list");
  const img = screen.getAllByRole("img");
  const p = screen.getByText(mockedPokemons.data[0].name);
  expect(img.length).toBeGreaterThanOrEqual(1);
  expect(img[0]).toBeInTheDocument();
  expect(p).toBeInTheDocument();
  expect(lists).toBeInTheDocument();
});
