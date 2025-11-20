//even better and more clear 
function ItemsDisplay(props) {
    const showItem = (item) => {
    return (
        <tr>
       
        <th scope="row">{item.id}</th>
        <td>{item.name}</td>
        <td>{item.price}</td>
        <td> {item.type}</td>
        <td>{item.brand}</td>
  
        </tr>



    );
    };

    return <div className="container"><div className="row"><h2>Items</h2></div>
    <div className="row">
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Type</th>
                    <th scope="col">Brand</th>
                </tr>
            </thead>
            <tbody>
 {props.items.map(showItem)}
            </tbody>
        </table>
    </div>
   </div>;

}




/*function ItemsDisplay (props){
    return(
        <div>
            {props.items.map((item)=> {
                return( 
                <div> 
                    <p>Id: {item.id}</p>
                    <p> Name:{item.name}</p> 
                    <p> Price:{item.price}</p> 
                    <p> Type:{item.type}</p> 
                    <p> Brand:{item.brand}</p> 
                
                
                
                </div> 
                );
            })}
            
        </div>
    )

}*/


export default ItemsDisplay ;