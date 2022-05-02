import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieLists from "./components/MovieLists";

function App(){

  return (
      <>
        <div  className="container"> </div>
        <div className="row">
          <div className="col-12">
            <h3 className="display-4 page-title text-center m-3">Now Playing</h3>
            <hr/>
            <MovieLists/>
          </div>
        </div>
      </>
  );

}
export default App;
