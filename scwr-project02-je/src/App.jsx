
import './App.css'
import './SalesReport.css'
import AnnualSalesReporting from './AnnualSalesReporting'


function App() {


  const sales = [
    {
      year: '2000',
      yearFirstHalf: 326447,
      yearSecondHalf:  562342,
    },
    {
      year: '2008',
      yearFirstHalf: 424587,
      yearSecondHalf:  764254,
    },
    {
      year: '2012',
      yearFirstHalf: 756230,
      yearSecondHalf: 695323,
    },
  ];

    return (
      <>
        <h1>Annual Sales: Select Years</h1>
        <AnnualSalesReporting sales={sales}/>        
      </>
    )
  };

export default App
