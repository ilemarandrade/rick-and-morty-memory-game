import { useCharactersState } from "../../contexts/CharactersContext";
import { KEYSHOWINTRUCTIONS, setKey } from "../../utils/localStorage";
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
  it("should render without errors and game board", async () => {
    setKey({ key: KEYSHOWINTRUCTIONS, value: "not" });

    const WrapperToWaitCharacters = ({ children }) => {
      const { characters } = useCharactersState();
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
