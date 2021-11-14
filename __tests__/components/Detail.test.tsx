import * as React from "react";
import { render, screen } from "@testing-library/react";
import { Detail } from "../../components";
import { mockedDetailPokemons } from "../../__mocks__/mocks";

test("Detail component rendered properly", () => {
  render(<Detail data={mockedDetailPokemons} />);
  const nameElems = screen.getAllByText(mockedDetailPokemons.name);
  const [typeElems] = screen.getAllByTestId("pok-types");
  const [moveElems] = screen.getAllByTestId("pok-moves");
  const [statElems] = screen.getAllByTestId("pok-stats");

  expect(moveElems.childNodes.length).toBeGreaterThanOrEqual(1);
  expect(nameElems.length).toBeGreaterThanOrEqual(1);
  expect(typeElems.childNodes.length).toBeGreaterThanOrEqual(1);
  expect(statElems.childNodes.length).toBeGreaterThanOrEqual(1);
  expect(moveElems.firstChild).toBeInTheDocument();
  expect(typeElems.firstChild).toBeInTheDocument();
  expect(statElems.firstChild).toBeInTheDocument();
  expect(nameElems[0]).toBeInTheDocument();
});
