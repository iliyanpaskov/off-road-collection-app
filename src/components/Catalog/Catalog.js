import CatalogCard from '../CatalogCard/CatalogCard';
import './Catalog.css';


const Catalog = () => {
    return (
        <>
            <h1 className='catalog-title'>all off-road trucks</h1>
            <section className='catalog'>
                <CatalogCard />
                <CatalogCard />
                <CatalogCard />
                <CatalogCard />
                <CatalogCard />
                <CatalogCard />
                <CatalogCard />
                <CatalogCard />
                <CatalogCard />
            </section>
        </>
    )
}

export default Catalog;