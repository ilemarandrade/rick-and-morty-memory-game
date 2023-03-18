import { useGameControlState } from "../../contexts/GameControlContext";
import { KEY_SHOW_INTRUCTIONS, setKey } from "../../utils/localStorage";
import { render, screen, waitFor } from "../../__test__/utils/customRender";
import Play from "./index";

describe("Play", () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it("should render without errors and show the instructions", async () => {
    const { container } = render(<Play />);
    // snapshot testing
    await waitFor(() => {
      screen.getByText("Empezar");
    });

    expect(container).toMatchSnapshot();
  });
  it("should render without errors and show game board", async () => {
    setKey({ key: KEY_SHOW_INTRUCTIONS, value: "not" });

    const WrapperToWaitCharacters = ({ children }) => {
      const { characters } = useGameControlState();
      return <>{characters && children}</>;
    };

    const { container } = render(
      <WrapperToWaitCharacters>
        <Play />
      </WrapperToWaitCharacters>
    );

    // snapshot testing
    await waitFor(() => {
      screen.getAllByText("Rick Sanchez");
    });

    expect(container).toMatchSnapshot();
  });
});
