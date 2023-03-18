import { render, screen, waitFor } from "../../__test__/utils/customRender";
import Home from "./index";

describe("Home", () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it("should render without errors", async () => {
    const { container } = render(<Home />);
    // snapshot testing
    await waitFor(() => {
      screen.getAllByText("Rick Sanchez");
    });
    expect(container).toMatchSnapshot();
  });
});
