import "./App.css";
function Catatan1(props) {
  return (
    <>
      <div class="row row-cols-1 row-cols-md-3 g-4 ">
        <div class="col">
          <div class="card h-100">
            <div class="card-body ">
              <h5 class="card-title fs-3 text-success ">
                Tugas Web Replication
              </h5>
              <p class="card-text card-text fs-4">
                Clone, Style, and Replicate html
              </p>
            </div>
            <div class="card-footer" id="tanggal">
              <small class="text-body-secondary card-text fs-5">
                {props.createdAt}
              </small>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-text fs-3 text-success">
                Mengerjakan course codeCademy
              </h5>
              <p class="card-text card-text fs-4">
                Selesaikan course pada url
                https://www.codecademy.com/enrolled/courses/learn-css
              </p>
            </div>
            <div class="card-footer" id="tanggal">
              <small class="text-body-secondary card-text fs-5">
                {props.createdAt}
              </small>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-text fs-3 text-success ">
                Web Portofolio Continuation
              </h5>
              <p class="card-text card-text fs-4">
                Menghias CV masing masing dengan CSS
              </p>
            </div>
            <div class="card-footer" id="tanggal">
              <small class="text-body-secondary card-text fs-5">
                {props.createdAt}
              </small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Catatan2(props) {
  return <></>;
}

function Catatan3(props) {
  return <></>;
}
function App() {
  const name = "Ainun Dea";
  return (
    <div className="App App-header">
      <h1>Todo List {name}</h1>
      <div class="layout">
        <Catatan1 createdAt="05/11/2023" />
        <Catatan2 createdAt="05/11/2023" />
        <Catatan3 createdAt="05/11/2023" />
      </div>
    </div>
  );
}

export default App;
