import AnnualSalesReport from './AnnualSalesReporting';
import './App.css'
import './SalesReport.css';

const AnnualSales = ({annualSales}) => {

    const {year, yearFirstHalf, yearSecondHalf} = annualSales;
    const totalSales = yearFirstHalf + yearSecondHalf;
    const yearFirstHalfUsd = yearFirstHalf.toLocaleString('en-US');
    const yearSecondHalfUsd = yearSecondHalf.toLocaleString('en-US');
    const totalSalesUsd = totalSales.toLocaleString('en-US');
    

    return (
      <div className='salesReport'>
        <h2>Sales for Year {year}</h2>
        <ul>
        <li>Sales Subtotal for Qs 1 and 2: $ {yearFirstHalfUsd}</li>
        <li>Sales Subtotal for Qs 3 and 4: $ {yearSecondHalfUsd}</li>
        <h3>Total Sales for Year {year}: ${totalSalesUsd}</h3>
        </ul>
      </div>
    )
};

export default AnnualSales



