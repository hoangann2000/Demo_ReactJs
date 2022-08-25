import React, { Component } from 'react'

export default class RenderArray extends Component {
    cars = [
        { id: 1, name: "car black", img: "./img/products/black-car.jpg", price: 3000 },
        { id: 2, name: "car red", img: "./img/products/red-car.jpg", price: 2000 },
    ]

    //return các hàng car => let content = "<tr></tr>" => let content =""
    // đối tương tr => let content = [<tr></tr>, <tr></tr>] => let content =[]

    renderCar = () => {
        let trArray = [];
        // forof
        // for (const car of this.cars) {
        //     let trObj = <tr key={car.id}>
        //         <td>{car.name}</td>
        //         <td>
        //             <img style={{ width: "500px" }} src={car.img} alt="" />
        //         </td>
        //         <td>
        //             {car.price}
        //         </td>
        //     </tr>

        //     trArray.push(trObj)
        // }

        // return trArray;


        // map(): duyệt mảng, trả về 1 mảng mới 
        //=> return không dừng hàm map mà chỉ dừng khi hết mảng => trả về mảng mới

        //? trả kết quả cuối cùng ra khỏi method renderCar
       return this.cars.map((car) => {
            //? trả về mảng mới chứa các đối tượng thẻ tr
            return <tr key={car.id}>
                <td>{car.name}</td>
                <td>
                    <img style={{ width: "500px" }} src={car.img} alt="" />
                </td>
                <td>
                    {car.price}
                </td>
            </tr>
            // trArray.push(trObj)
        });
        // return trArray;

    }
    render() {
        console.log(<div></div>);//div là đối tương JSX
        // return [<div></div>,<div></div>]
        return (
            <div className='container'>
                <table>
                    <thead></thead>
                    <tbody>
                        {/* chứa các hàng car (các tr) */}
                        {this.renderCar()}
                    </tbody>
                </table>
            </div>
        )
    }
}

// car1
// car2
// return car1 //Lệnh return chỉ trả về 1 giá trị biến
// return [car1,car2] // muốn trả về nhiều giá trị biến thì cần trả về mảng/object chứa các giá trị đó