import "@testing-library/jest-dom";
import { render, screen } from "../../__test__/utils/customRender";
import Header from "./index";

describe("<Header />", () => {
  it("Should show the Header", () => {
    render(<Header />);

    expect(
      screen.getByRole("heading", { name: "Juego de memoria" })
    ).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute("src", "title.png");
  });
});
