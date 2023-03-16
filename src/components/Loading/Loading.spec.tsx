import "@testing-library/jest-dom";
import { render, screen } from "../../__test__/utils/customRender";
import Loading from "./index";

describe("<Loading />", () => {
  it("Should show the Loading", () => {
    render(<Loading />);
    expect(screen.getByAltText("loading")).toBeInTheDocument();
    expect(screen.getByAltText("loading")).toHaveAttribute(
      "src",
      "loading.gif"
    );
  });
});
