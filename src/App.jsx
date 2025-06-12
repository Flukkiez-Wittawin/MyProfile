import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import FadeContent from "./components/FadeContent/FadeContent";
import Main from "./components/Main/Main";
import CopyRight from "./components/CopyRight/CopyRight";
import MyContact from "./components/MyContact/MyContact";
import MyExperience from "./components/MyExperience/MyExperience";

function App() {
  return (
    <>
      <FadeContent
        blur={true}
        duration={1.7 * 1000}
        easing="ease-in-out"
        initialOpacity={0}
      >
        <Navbar></Navbar>
        <Banner></Banner>
        <Main></Main>

        <MyContact></MyContact>
        <MyExperience></MyExperience>

        <CopyRight></CopyRight>
      </FadeContent>
    </>
  );
}

export default App;
