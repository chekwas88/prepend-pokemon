import * as React from "react";
import { render, screen } from "@testing-library/react";
import { Layout } from "../../components";

test("Layout component rendered properly", () => {
  render(
    <Layout>
      <p>Layout</p>
    </Layout>
  );
  const lists = screen.getByRole("navigation");
  const children = screen.getAllByTestId("layout-children");
  const p = screen.getByText("Layout");
  expect(children.length).toBeGreaterThanOrEqual(1);
  expect(children[0]).toBeInTheDocument();
  expect(p).toBeInTheDocument();
  expect(lists).toBeInTheDocument();
});
