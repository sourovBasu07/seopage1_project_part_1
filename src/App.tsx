import VerticalListCard from "./components/VerticalListCard";
import { categories } from "./constants";

const App = () => {
  return (
    <div className="h-screen flex gap-10 bg-[#fff] px-7 py-10 overflow-scroll">
      {categories.map((category) => (
        <VerticalListCard key={category.text} category={category} />
      ))}
    </div>
  );
};
export default App;
