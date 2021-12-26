import style from "./app.module.scss"
import projects from "./store/projects.json"

function App() {

  let projectList = projects.map(item => item.Id)

  return (
    <>
      {projectList}
    </>
  );
}

export default App;
