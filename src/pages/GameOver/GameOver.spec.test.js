import { render, screen, waitFor } from "../../__test__/utils/customRender";
import GameOver from "./index";

describe("GameOver", () => {
  beforeEach(() => {
    jest.resetModules();
  });
  it("should render without errors", async () => {
    const { container } = render(<GameOver />);
    // snapshot testing
    await waitFor(() => {
      screen.getByText("¡Felicitaciones!");
    });
    expect(container).toMatchSnapshot();
  });
});
