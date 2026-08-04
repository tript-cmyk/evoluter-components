import { Button } from "./components/Button";
import { GoPlus } from "react-icons/go";

function App() {
  return (
    <div className="bg-[#141414] min-h-screen flex items-center justify-center">
      <Button
        variant="primaryWhite"
        size="small"
        processing
        iconOnly
        icon={<GoPlus />}
        // iconPosition="left"
      >
        Button Text
      </Button>
    </div>
  );
}

export default App;
