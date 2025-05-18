import { Breadcrumb, Carousel } from 'antd'
import { Link } from 'react-router'

const CarouselPagina = () => {
  return (
    <>
    <Breadcrumb items={[
            {
                title:<Link to='/'>Home</Link>
            },
            {
                title:"Carousel"
            }
        ]}/>
    <h1>Carousel</h1>
     <Carousel infinite={true} arrows={true}>
        <div>
            <img src="/public/civiv.jpg" alt="" />
        </div>
        <div>
            <img src="/public/fc.jpg" alt="" />
        </div>
        <div>
            <img src="/public/ae86vsfd.jpg" alt="" />
        </div>
        <div>
            <img src="/public/aa.jpg" alt="" />
        </div>
     </Carousel>
    </>
  )
}

export default CarouselPagina
