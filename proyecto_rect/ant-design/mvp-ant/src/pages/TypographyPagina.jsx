import { Breadcrumb, Typography, Space  } from 'antd'
import { Link } from 'react-router'

const TypographyPagina = () => {
    const {Text, Title, Paragraph} = Typography
  return (
    <>
     <Breadcrumb items={[
            {
                title:<Link to='/'>Home</Link>
            },
            {
                title:"Typography"
            }
        ]}/>
        <h1>Typography</h1>
        {/* <Typography.Title>Titulo h1</Typography.Title>
        <Typography.Title level={2}>Titulo h2</Typography.Title>
        <Typography.Title level={3}>Titulo h3</Typography.Title>
        <Typography.Title level={4}>Titulo h4</Typography.Title>
        <Typography.Title level={5}>Titulo h5</Typography.Title> */}
        <Title>Titulo h1</Title>
        <Title level={2}>Titulo h2</Title>
        <Title level={3}>Titulo h3</Title>
        <Title level={4}>Titulo h4</Title>
        <Title level={5}>Titulo h5</Title>
        <Space direction='vertical'>
            <Text>Default</Text>
            <Text type="success">Succes</Text>
            <Text type='warning'>Warning</Text>
            <Text type='danger'>Danger</Text>
            <Text type='secondary'>Secondary</Text>
            <Text disabled={true}>Disable</Text>
            <Text mark={true}>Mark</Text>
            <Text code={true}>CODE: echo "Hola Mundo";</Text>
            <Text keyboard={true}>Keyboard</Text>
            <Text underline={true}>Underline</Text>
            <Text strong={true}>Underline</Text>
            <Text delete={true}>Delete</Text>
        </Space>
        {/* <Typography.Paragraph>Es confuso verdad? sin embargo sabes perfectamente cuando estás mal, todo tu cuerpo física y mentalmente te lo hace saber, te notas flojo con pensamientos fatalistas esa sensación que todo está perdido, qué ya nada será como antes, te torturas recordando una vivencia pasada aleatoria en aquel momento ni siquiera parecía un buen momento pero comparado como te sientes ahora podría incluso decirse que... Fuiste feliz sin saberlo</Typography.Paragraph>
        <Typography.Paragraph copyable={true}> texto para copiar</Typography.Paragraph>
        <Typography.Paragraph editable={true}> texto para editar</Typography.Paragraph> */}
        <Paragraph>Es confuso verdad? sin embargo sabes perfectamente cuando estás mal, todo tu cuerpo física y mentalmente te lo hace saber, te notas flojo con pensamientos fatalistas esa sensación que todo está perdido, qué ya nada será como antes, te torturas recordando una vivencia pasada aleatoria en aquel momento ni siquiera parecía un buen momento pero comparado como te sientes ahora podría incluso decirse que... Fuiste feliz sin saberlo</Paragraph>
        <Paragraph copyable={true}> texto para copiar</Paragraph>
        <Paragraph editable={true}> texto para editar</Paragraph>
    </>
  )
}

export default TypographyPagina
