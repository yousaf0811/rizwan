import "./App.css";
import Box from "./components/box";
import Box2 from "./components/box2";
import Footer from "./components/footer";
import Navbarh from "./components/navbar";
function App() {
  return (
    <div className="App">
      <Navbarh />
      <div className="home-background">
        <div className="firstCard"></div>
        <div className="secondCard">
          <div className="secondCard1" >
          <div className="secondCardItem1">
            <Box/>
            <Box/>
            <Box/>
            <Box/>
            <Box/>
            <Box/>
            <Box/>
            <Box/>
            <Box/>
          </div>
          <div className="secondCardItem2">
            <Box/>
            <Box/>
            <Box/>
            <Box/>
            <Box/>
            <Box/>
            <Box/>
            <Box/>
            <Box/>
          </div>
          </div>
        </div>
        <Box2/>
        <Box2/>
        <Box2/>
        <Box2/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
