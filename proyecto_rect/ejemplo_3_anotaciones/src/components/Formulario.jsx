import { useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import Button  from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Swal from 'sweetalert2';
import {Editor} from '@tinymce/tinymce-react'
import { addAnotaciones } from '../service/ApiRest';

const Formulario = () => {
    const navigate = useNavigate();
    const [titulo, setTitulo] = useState('');
    const editorRef = useRef(null);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSubmit = async (e) => {
        if(titulo==0 || titulo==''){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'El campo Titulo es obligatorio!',
            })
            return;
        }
       if(editorRef.current.getContent()=='' || editorRef.current.getContent()==0){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'El campo Descripcion es obligatorio!',
            })
            return;
        }
    
        const AddAnotacion = await addAnotaciones({titulo: titulo, descripcion: editorRef.current.getContent()});
        Swal.fire({
            icon: 'success',
            title: 'Exito!',
            text: 'Se ha creado la anotacion!',
        })
        if(AddAnotacion.estado == 'ok'){
            navigate(0);
        }
    }
  return (
    <div>
        <p>
            <button className='btn btn-warning' onClick={handleShow}>Crear</button>
        </p>
        <Modal show={show} onHide={handleClose} dialogClassName='modal-490w'>
            <Modal.Header closeButton>
                <Modal.Title>Crear Nueva Anotacion</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <div className='form-group'>
                        <label htmlFor="titulo">Titulo</label>
                        <input type="text" id='titulo' name='titulo' className='form-control' value={titulo} onChange={(e)=> setTitulo(e.target.value)}/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="descripcion">Descripcion</label>
                        <Editor
                            apiKey={import.meta.env.VITE_API_TINYTOKEN}
                            onInit={(_evt, editor) => editorRef.current = editor}
                            initialValue="<p>This is the initial content of the editor.</p>"
                            init={{
                            height: 500,
                            menubar: false,
                            plugins: [
                                 'link'
                            ],
                            toolbar: 'undo redo | blocks | ' +
                                'bold italic forecolor | alignleft aligncenter ' +
                                'alignright alignjustify | bullist numlist outdent indent | ' +
                                'removeformat | help',
                            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                            }}
                        />
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='secondary' onClick={handleClose}>Cerrar</Button>
                <Button variant='primary' onClick={handleSubmit}>Enviar</Button>
            </Modal.Footer>
        </Modal>
    </div>
  )
}

export default Formulario  