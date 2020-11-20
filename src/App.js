import { useState, useEffect } from 'react';
import 'lazysizes';


const App = ({value}) => {
  const [data, setData] = useState([]);
 
  useEffect(() => {
    const fetchData = async () => {
      const json = await fetch('products.json').then((response) => response.json());
      setData(json);
    };
 
    fetchData();
  }, []);

  console.log(value, data.length);

  const Card = () => {
    return data.map((item, i) => (
      <div className="col-md-4" key={i}>
        <div className="card mb-4 box-shadow">
          <picture>
            <source media="(max-width:768px)" data-srcset="https://via.placeholder.com/480x360?text=480x360" />
            <img data-sizes="auto" data-src={item.filename} alt={item.title} className="lazyload card-img-top" />
            <span className="badge badge-secondary">{item.type}</span>
          </picture>
          <div className="card-body">
            <h4 className="card-title"><a href="/" title={item.title}>{item.title}</a></h4>
            <p className="card-text">{item.description}</p>
            <span>£</span>{item.price}
            <div className="ratings">
              { Array.from(Array(5), (e, i) => (
                <i className={`fa fa-star ${item.rating <= i && 'fa-unfilled'}`} data-key={i} key={i}></i>
              )) }
            </div>
            <button type="button" className="btn btn-sm btn-outline-secondary btn-block btn-add-to-cart disabled">Add to Cart</button>
          </div>
        </div>
      </div>
    ))
  }

  return (
    <div id="plp-app">
      <section className="jumbotron text-center">
        <div className="container">
          <h1 className="jumbotron-heading">Album example</h1>
          <p className="lead text-muted">Something short and leading about the collection below.</p>
          <button href="/" className="btn btn-primary">Click here</button>
        </div>
      </section>

      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row">
            
            {/* Interaction */}
            <div className="interaction col-12 d-flex justify-content-between align-items-center">

              {/* Sorting */}
              <div className="page-sort mr-4 d-flex justify-content-between align-items-center">
                <label htmlFor="sort" className="mr-1">Sort by</label>
                <select id="sort" name="sort" className="btn btn-primary dropdown-toggle">
                  <option value="az">A to Z</option>
                  <option value="za">Z to A</option>
                  <option value="high">Price High to Low</option>
                  <option value="low">Price Low to High</option>
                  <option value="newest">Newest</option>
                  <option value="oldest">Oldest</option>
                </select>
              </div>

              {/* Page size */}
              <div className="page-size mr-auto d-flex justify-content-between align-items-center">
                <label htmlFor="size" className="mr-1">Page size</label>
                <select id="size" name="size" className="btn btn-primary dropdown-toggle">
                  <option value="9" selected>9</option>
                  <option value="18">18</option>
                  <option value="36">36</option>
                  <option value="all">All</option>
                </select>
              </div>

              {/* Pagination */}
              <nav aria-label="pagination">
                <ul className="pagination">
                  <li className="page-item disabled"><button className="page-link" type="button" data-value="-1"
                      tabIndex="-1">Previous</button>
                  </li>
                  <li className="page-item active"><button className="page-link" type="button" data-value="1">1</button></li>
                  <li className="page-item"><button className="page-link" type="button" data-value="2">2</button></li>
                  <li className="page-item"><button className="page-link" type="button" data-value="3">3</button></li>
                  <li className="page-item"><button className="page-link" type="button" data-value="4">4</button></li>
                  <li className="page-item"><button className="page-link" type="button" data-value="5">5</button></li>
                  <li className="page-item"><button className="page-link" type="button" data-value="next">Next</button></li>
                </ul>
              </nav>
            </div>
          </div>

          <div className="row">

            {/* Facets */}
            <div className="d-sm-none d-md-block col-sm-3 col__facets">
            <div className="card bg-light mb-3">
              <div className="card-header bg-info text-white d-flex justify-content-between align-items-center">
                <div className="facets"><i className="fa fa-list"></i> Facets</div>
                <small>9 of {data.length}</small>
              </div>
              <ul className="list-group category_block">
                <li className="list-group-item">
                  <button type="button" className="btn btn-block" data-value="bakery">Bakery<span className="badge badge-info">10</span></button>
                </li>
                <li className="list-group-item">
                  <button type="button" className="btn btn-block" data-value="dairy">Dairy<span className="badge badge-info">10</span></button>
                </li>
                <li className="list-group-item">
                  <button type="button" className="btn btn-block" data-value="fruit">Fruit<span className="badge badge-info">10</span></button>
                </li>
                <li className="list-group-item">
                  <button type="button" className="btn btn-block" data-value="vegan">Vegan<span className="badge badge-info">10</span></button>
                </li>
                <li className="list-group-item">
                  <button type="button" className="btn btn-block" data-value="vegetable">Vegetable<span className="badge badge-info">10</span></button>
                </li>
              </ul>
            </div>
          </div>

            {/* Album list */}
            <div className="col col__cards">
              <div className="row">
                <Card />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
