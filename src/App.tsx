import "./App.css";
import Button from "./components/button/button";
import Card from "./components/card/card";
import List from "./components/lists/list";
import Navbar from "./components/navBar/navbar";
import Footer from "./footer/footer";
import {
  littleCard,
  littleCard2,
  littleCard3,
  mainCard,
  mainCard2,
  sideCard,
  sideCard2,
  sideCard3,
  sideCard4,
  sideCard5,
  sideCard6,
} from "./mock";

function App() {
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-b bg-fixed from-cyan-700 to-cyan-100 min-h-screen">
        <div className="container mx-auto py-10 ">
          <div className="">
            <div className="grid grid-cols-5">
              <div className="col-span-4 ">
                <div className="grid grid-cols-3 overflow-hidden bg-white rounded-md mb-2">
                  <div className="col-span-2">
                    <Card {...mainCard} />
                    <List
                      url="/"
                      children="▶ For 3rd Year, This County Is Country's Healthiest Community"
                    />
                    <List
                      url="/"
                      children="▶ Village Runs Out of Water in Drought Due to Leak"
                    />
                    <List
                      url="/"
                      children="▶ Severe Weather Possible In The Plains Today"
                    />
                    <List
                      url="/"
                      children="▶ Aerial View: Homes Flattened In Catastrophic Quake"
                    />
                    <div className="mt-40 ml-10">
                      <Button url="/" children="More Stories" />
                    </div>
                  </div>
                  <div className="col-span-1">
                    <Card {...littleCard} />
                    <Card {...littleCard2} />
                    <Card {...littleCard3} />
                  </div>
                </div>
                <div className="bg-white grid grid-cols-4 rounded-md overflow-hidden mb-2">
                  <Card {...littleCard} />
                  <Card {...littleCard2} />
                  <Card {...littleCard3} />
                  <Card {...littleCard} />
                  <div className=" ml-10 pb-5">
                    <Button url="/" children="More News" />
                  </div>
                </div>
                <div className="rounded-md overflow-hidden">
                  <Card {...mainCard2} children="Read More" />
                </div>
              </div>
              <div className="col-span-1 ml-3 ">
                <Card {...sideCard} />
                <Card {...sideCard2} children="Track Storm" />
                <Card {...sideCard3} />
                <Card {...sideCard4} children="See More" />
                <Card {...sideCard5} children="Go to Survey" />
                <Card {...sideCard6} children="Track COVID-19" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="container mx-auto py-10">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
