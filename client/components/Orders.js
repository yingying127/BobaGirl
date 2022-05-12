import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchOrders } from "../store";

class Orders extends Component {
  componentDidMount() {
     this.props.fetchOrders(this.props.auth.id);
  }

  render() {
    const { orders } = this.props;
    return (
      <div className="ordersinfo">
        <h2 className='product2'>Order History</h2>
          <table className='panel'>
            <tbody>
              <tr>
                <th>Purchase Date</th>
                <th>Order No.</th>
                <th>Items</th>
              </tr>
                {orders.map((order) => {
                  return (
                    <tr key= {order.id }>
                      <td> {order.createdAt.slice(0, 10)}</td>
                      <td>
                        <Link to={`/order/${order.id}`}>
                          {order.id}0
                        </Link>
                      </td>
                      <td>{order.lineitems.length}</td>
                    </tr>
                  )
                })}
            </tbody>
          </table>
      </div>
    );
  }
}

const mapState = ({ orders, auth }) => {
  return {
    orders,
    auth,
  };
};

const mapDispatch = (dispatch) => ({
  fetchOrders: (userId) => dispatch(fetchOrders(userId)),
});

export default connect(mapState, mapDispatch)(Orders);