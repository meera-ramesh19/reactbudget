import NewTransaction from '../Components/NewTransaction';

const New = () => {
  return (
    <div style={{backgroundColor:'#96DED1', height: '100vh'}}>
      <h2 style={{textAlign:'center',marginTop:'2rem'}}>New Transaction</h2>
      <NewTransaction />
    </div>
  );
};

export default New;
