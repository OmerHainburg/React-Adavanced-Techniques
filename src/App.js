import './App.css';

function App() {
  const h1Inline = <h1>Inline Styles</h1>  
  const styleMe = <h2 style={{ background: 'lightblue', color: 'darkred' }}>Please style me! I am so bland!</h2>;
  //
  const h1ObjectVariable = <h1>Make A Style Object Variable</h1>  
  const styles = {
    background: 'blue',
    color: 'darkred'
  };
  const stylesObject = <h2 style={styles}>Please style me! I am so bland!</h2>;
  //
  const h1StyleNameText = <h1>Style Name Syntax</h1>
  const stylesNameText = {
    background: 'lightblue',
    color:      'darkred',
    marginTop: '100px',
    fontSize: '50px'
  };
  const h2StylesNameText = <h2 style={stylesNameText}>Please style me! I am so bland!</h2>;
  //
  const h1StyleValueSyntax = <h1>Style Value Syntax</h1>
  // const stylesValueSyntax = {
  //   background: 'lightblue',
  //   color:      'darkred',
  //   marginTop: 100px,
  //   fontSize: 50px
  // };
  //
  return (
    <div className="App">
      <header className="App-header">
        {h1Inline}
        {styleMe}
        {h1ObjectVariable}
        {stylesObject}
        {h1StyleNameText}
        {h2StylesNameText}
        {h1StyleValueSyntax}
      </header>
    </div>
  );
}

export default App;
