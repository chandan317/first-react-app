import { Display } from "./Display";
function App() {
  return (
    <div>
      <Display
        name="john"
        image="https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
        description="he is a good boy"
      />
      <Display
        name="mary"
        image="https://static.vecteezy.com/system/resources/thumbnails/002/002/300/small_2x/beautiful-woman-avatar-character-icon-free-vector.jpg"
        description="she is a good girl"
      />
      <Display
        name="virat"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz4nsQqjqp3izpBSk-wxQzz1_TK03Eg5wD8Di6sFWLduhRMCpju-oHcdhnB6vK9jeNMeI&usqp=CAU"
        description="he is a innocent boy"
      />
    </div>
  );
}
export default App;
