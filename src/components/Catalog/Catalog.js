import CatalogCard from '../CatalogCard/CatalogCard';
import  Loading  from "../common/Loading/Loading";
import { useSelector } from 'react-redux';
import { selectAllTrucks,getTrucksStatus } from '../../redux/features/trucksSlice';
import './Catalog.css';

const Catalog = () => {
    const trucks = useSelector(selectAllTrucks);
    const isloaded = useSelector(getTrucksStatus)
    return (
        <>
            <h1 className='catalog-title'>all off-road trucks</h1>
            {console.log(trucks)}
                {isloaded === 'succeeded'
           ? <section className='catalog'>
                {trucks.map(x => <CatalogCard key={x.objectId} truck={x}/>)}
            </section>
                :<Loading/>}
        </>
    )
}

export default Catalog;