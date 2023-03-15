import "../App.scss";
import Section from "../components/Section";
import MainLayout from "../layout/MainLayout";
import Providers from "./Providers";
import Routes from "./Routes";

function App() {
  return (
    <Providers>
      <MainLayout>
        <Section>
          <Routes />
        </Section>
      </MainLayout>
    </Providers>
  );
}

export default App;
