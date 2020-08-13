import React, { Component } from 'react'
import Button from '../../../components/button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {withFormik} from 'formik'
import * as Yup from 'yup'

class FormAjout extends Component {
    /*
    ** BEFORE USING FORMIK
    state = {
        title: '',
        author: '',
        pages: 0,
    }

    handleValidationForm(event) {
        event.preventDefault()
        this.props.validation(this.state.title, this.state.author, this.state.pages)
        this.setState({
            title: '',
            author: '',
            pages: 0,
        })
    }
    */
    render() {
        return (
            <>
                <div className='card'>
                    <div className='card-header bg-info'>
                        <h2 className='text-center text-white'>*FORMULAIRE D'AJOUT*</h2>
                    </div>
                    <div class='card-body'>
                        <form>
                            <div className='form-group'>
                                <label htmlFor='titleInput'>Titre du livre</label>
                                <input 
                                    type='text' 
                                    className='form-control' 
                                    id='titleInput'
                                    name='title'
                                    value={this.props.values.title}
                                    onChange={this.props.handleChange} 
                                    onBlur={this.props.handleBlur}
                                    // BEFORE FORMIK
                                    // value={this.state.title}
                                    // onChange={(event) => this.setState({title: event.target.value})} 
                                />     
                                {this.props.touched.title && this.props.errors.title && <span className='text-danger'>{this.props.errors.title}</span>}                 
                            </div>
                            <div className='form-group'>
                                <label htmlFor='authorInput'>Auteur</label>
                                <input 
                                    type='text' 
                                    className='form-control' 
                                    id='authorInput' 
                                    name='author'
                                    value={this.props.values.author}
                                    onChange={(event) => this.props.setFieldValue('pages', parseInt(event.target.value))}  
                                    onBlur={this.props.handleBlur}
                                    // BEFORE FORMIK
                                    // value={this.state.author}
                                    // onChange={(event) => this.setState({author: event.target.value})} 
                                />
                                {this.props.touched.author && this.props.errors.author && <span className='text-danger'>{this.props.errors.author}</span>}                 
                            </div>
                            <div className='form-group'>
                                <label htmlFor='pageInput'>Nombre de pages</label>
                                <input 
                                    type='number' 
                                    className='form-control'
                                    id='pageInput'
                                    name='pages'
                                    value={this.props.values.pages}
                                    onChange={this.props.handleChange} 
                                    onBlur={this.props.handleBlur}                                
                                    // BEFORE FORMIK
                                    // value={this.state.pages}
                                    // onChange={(event) => this.setState({pages: event.target.value})} 
                                />
                                {this.props.touched.pages && this.props.errors.pages && <span className='text-danger'>{this.props.errors.pages}</span>}                                                 
                            </div>
                            <Button btnType='btn-success' click={this.props.handleSubmit}>
                                Enregistrer <FontAwesomeIcon className='ml-2' icon={['fas', 'book-medical']} />
                            </Button>
                        </form>
                    </div>
                </div>
                
            </>
        )
    }
}

export default withFormik({
    mapPropsToValues: () => ({
        /*
        ** Referes to the 'name' attribute of our inputs
        */
        title: '',
        author: '',
        pages: 0,
    }),
    validationSchema: Yup.object().shape({
        title: Yup.string()
                    .min(3, 'Le titre doit avoir plus de 3 lettres !')
                    .max(30, 'Le titre doit avoir au maximum 30 lettres !')
                    .required('Le titre doit être indiqué !'),
        author: Yup.string()
                    .min(3, "L'auteur doit avoir plus de 3 lettres !")
                    .required("L'auteur doit être indiqué !"),
        pages: Yup.number()
                    .lessThan(500, 'Le livre doit contenir moins de 500 pages !')
                    .moreThan(30, 'Le livre doit contenir au moins 30 pages !'),
    }),
    /*
    ** BEFORE YUP
    validate: values => {
        const errors = {};
        if(values.title.length < 3) {
            errors.title = 'Le titre doit contenir au moins 3 lettres !'
        }
        if(values.title.length > 30) {
            errors.title = 'Le titre doit contenir moins de 30 lettres !'
        }
        if(values.author.length < 5) {
            errors.author = "L'auteur doit être indiqué !"
        }
        if(values.pages < 1) {
            errors.pages = "Le livre doit contenir au moins 1 page !"
        }
        return errors;
    },
    */
    handleSubmit: (values, {props}) => {
        props.validation(values.title, values.author, values.pages)
    }
})(FormAjout)