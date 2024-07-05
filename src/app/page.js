import Axioscallapi from "./components/axiosapi/axiosfunction";
import Sectiontitle from "./components/layouts/sectiontitle";
import { Testapi } from "./components/layouts/testcall";

export default function Home() {
  return (
    <div>
      <Sectiontitle />
      <Axioscallapi />
    </div>
  );
}
