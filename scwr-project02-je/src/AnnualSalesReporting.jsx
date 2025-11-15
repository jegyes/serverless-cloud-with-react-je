import './App.css';
import './SalesReport.css';
import AnnualSales from './salesReport';

const SalesReport = ({sales}) => {

    return (
        <>
            {sales.map(annualSales => (
                <AnnualSales key={annualSales.year} annualSales={annualSales}/>

            ))}
        
        
        </>
    )
}

export default SalesReport