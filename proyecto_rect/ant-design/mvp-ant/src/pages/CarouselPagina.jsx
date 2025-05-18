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
            <img src="/images/civiv.jpg" alt="" />
        </div>
        <div>
            <img src="/images/fc.jpg" alt="" />
        </div>
        <div>
            <img src="/images/ae86vsfd.jpg" alt="" />
        </div>
        <div>
            <img src="/images/aa.jpg" alt="" />
        </div>
     </Carousel>
    </>
  )
}

export default CarouselPagina
