import "@testing-library/jest-dom";
import { render, screen } from "../../__test__/utils/customRender";
import MainLayout from "./index";

describe("<MainLayout />", () => {
  it("Should show the MainLayout", () => {
    render(
      <MainLayout>
        <div>I am a children</div>
      </MainLayout>
    );

    expect(screen.getByText("I am a children")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Juego de memoria" })
    ).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute("src", "title.png");
  });
});
