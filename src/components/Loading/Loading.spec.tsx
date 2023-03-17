import "@testing-library/jest-dom";
import { render, screen } from "../../__test__/utils/customRender";
import Loading from "./index";

describe("<Loading />", () => {
  it("Should show the Loading with message of welcome", () => {
    render(<Loading isWelcome />);

    expect(screen.getByAltText("loading")).toBeInTheDocument();
    expect(screen.getByAltText("loading")).toHaveAttribute(
      "src",
      "loading.gif"
    );
    expect(
      screen.getByText("Bienvenido a Ricky & Morty game")
    ).toBeInTheDocument();
  });

  it("Should show the Loading", () => {
    render(<Loading />);

    expect(screen.getByAltText("loading")).toBeInTheDocument();
    expect(screen.getByAltText("loading")).toHaveAttribute(
      "src",
      "loading.gif"
    );
    expect(
      screen.queryByText("Bienvenido a Ricky & Morty game")
    ).not.toBeInTheDocument();
  });
});
