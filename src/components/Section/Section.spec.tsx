import "@testing-library/jest-dom";
import { render, screen } from "../../__test__/utils/customRender";
import Section from "./index";

describe("<Section />", () => {
  it("Should show the Section", () => {
    render(
      <Section>
        <div>I am a children</div>
      </Section>
    );

    expect(screen.getByText("I am a children")).toBeInTheDocument();
  });
});
