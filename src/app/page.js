import Image from "next/image";
import Counter from "./components/useState/counter";
import Timer from "./components/timer"
import ResourceTypeChanger from "./components/useEffect/resourceTypeChanger";
import RealTimeWindowSize from "./components/useEffect/realTimeWindowSize";
import NumberDouble from "./components/useMemo/numberDouble";
import ToggleButton from "./components/useState/ToggleButton";
import AgeCalculator from "./components/useState/AgeCalculator";

export default function Home() {
  return (
    <div>
      <main>
        <div>
          <AgeCalculator/>
          {/* <ToggleButton/> */}
          {/* <NumberDouble/> */}
          {/* <Counter/> */}
          {/* <Timer/> */}
          {/* <RealTimeWindowSize/> */}
          {/* <ResourceTypeChanger/> */}
        </div>
      </main>
    </div>
  );
}
