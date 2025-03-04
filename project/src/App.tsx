import { Profile } from "./components/body/profile";
import { Settings } from "./components/body/settings";
import { Header } from "./components/header";
import { Content } from "./style";

export function App() {
  return (
    <>
      {/* <Header/> */}
      <Content>
        <Profile/>
        <Settings/>
      </Content>

    </>
  )
}
