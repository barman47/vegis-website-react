import React, { useState , useEffect} from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addProject } from '../../actions/projectActions';
import isEmpty from '../../validation/is-empty';

import TextInputGroup from '../inputGroups/TextInputGroup';

const AddProject = (props) => {
    const [department, setDepartment] = useState('');
    const [topic, setTopic] = useState('');
    const [abstract, setAbstract] = useState('');
    const [chapters, setChapters] = useState('');
    const [pages, setPages] = useState('');
    const [price, setPrice] = useState('');
    const [introduction, setIntroduction] = useState('');
    const [errors, setErrors] = useState({});

    // componentDidUodate
    useEffect(() => {
        if (!isEmpty(props.errors)) {
            setErrors(props.errors);
        } else if (isEmpty(props.errors) && !isEmpty(props.project)) {
            document.getElementById('add-project-form').reset();
            setDepartment('');
            setTopic('');
            setAbstract('');
            setChapters('');
            setPages('');
            setPrice('');
            setIntroduction('');
            setErrors({});
        }
    }, [props.errors, props.project]);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const project = {
            department,
            topic,
            abstract,
            chapters,
            pages,
            price,
            introduction
        };

        props.addProject(project);
    }

    return (
        <>
            <Helmet><title>Add Project : : vegistech.com</title></Helmet>
            <form id="add-project-form" noValidate onSubmit={handleFormSubmit} className="add-project-form">
                <h3>Add Project Material</h3>
                <TextInputGroup 
                    icon="mdi mdi-account"
                    label="Department"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    inputErrorMessage={errors.department}
                />
                <TextInputGroup 
                    id="topic"
                    icon="mdi mdi-account"
                    label="Enter Topic"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    inputErrorMessage={errors.topic}
                />
                <TextInputGroup 
                    id="abstract"
                    icon="mdi mdi-account"
                    label="Enter Abstract"
                    value={abstract}
                    onChange={(e) => setAbstract(e.target.value)}
                    inputErrorMessage={errors.abstract}
                />
                <TextInputGroup
                    id="chapters"
                    icon="mdi mdi-account"
                    label="Number of Chapters"
                    value={chapters}
                    onChange={(e) => setChapters(e.target.value)}
                    inputErrorMessage={errors.chapters}
                />
                <TextInputGroup 
                    id="pages"
                    icon="mdi mdi-account"
                    label="Number of Pages"
                    value={pages}
                    onChange={(e) => setPages(e.target.value)}
                    inputErrorMessage={errors.pages}
                />
                <TextInputGroup 
                    id="price"
                    icon="mdi mdi-account"
                    label="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    inputErrorMessage={errors.price}
                />
                <div className="col s12 m6 l6 input-field">
                    <textarea 
                        id="introduction"
                        className="materialize-textarea"
                        value={introduction}
                        onChange={(e) => setIntroduction(e.target.value)}
                    >

                    </textarea>
                    <label htmlFor="introduction">Project Introduction</label>
                    <span className="helper-text invalid">{errors.introduction}</span>
                </div>
                <button>Add Material</button>
            </form>
            
        </>
    );
}

AddProject.propTypes = {
    addProject: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    errors: state.errors,
    project: state.project
});

export default connect(mapStateToProps, { addProject })(AddProject);