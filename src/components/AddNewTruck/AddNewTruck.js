import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";

import "../Forms.css";

const AddNewTruck = () => {

    const navigate = useNavigate();

    const validate = values => {
        const errors = {};
        if (!values.brand) {
            errors.brand = 'Field must be filled !';
        } 

        if (!values.model) {
            errors.model = 'Field must be filled !';
        } else if (values.model.length > 50) {
            errors.model = 'Invalid model!';
        }

        if (!values.price) {
            errors.price = 'Field must be filled !';
        } else if (values.price.length > 7) {
            errors.price = 'Too expensive!';
        }

        if (!values.year) {
            errors.year = 'Field must be filled !';
        } else if (values.year.length > 2025 || values.year.length < 1940  ) {
            errors.year = 'Invalid year!';
        }

        if (!values.information) {
            errors.information = 'Field must be filled !';
        }

        if (!values.image) {
            errors.image = 'You need to upload image!';
        }


        return errors;
    }

    const formik = useFormik({
        initialValues: {
            brand: "",
            model: "",
            price: "",
            year: "",
            information: "",
            ownerName: "",
            image: "",
        },
        validate,
        onSubmit: values => {
            // const getLogin = async () => {


            // }
            // getLogin();
            navigate("/");
        }
    });


    return (
        <section className="form-wapper">
            <h2 className="form-title">add new truck</h2>
            <form className="form" onSubmit={formik.handleSubmit}>
                <article className="form-label-input-wrapper" >
                    <label className="form-label" htmlFor="brand">Brand:</label>
                    <input className="form-input"
                        type="text"
                        id="brand"
                        name="brand"
                        placeholder="Jeep"
                        value={formik.values.brand}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        required
                    />
                </article>
                {
                    formik.touched.brand && formik.errors.brand
                        ? <div className="form-error">{formik.errors.brand}</div>
                        : null
                }

                <article className="form-label-input-wrapper" >
                    <label className="form-label" htmlFor="model">Model:</label>
                    <input className="form-input"
                        type="text"
                        id="model"
                        name="model"
                        placeholder="Wrangler "
                        value={formik.values.model}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        required
                    />
                </article>
                {
                    formik.touched.model && formik.errors.model
                        ? <div className="form-error">{formik.errors.model}</div>
                        : null
                }

                <article className="form-label-input-wrapper" >
                    <label className="form-label" htmlFor="price">Price:</label>
                    <input className="form-input"
                        type="number"
                        id="price"
                        name="price"
                        placeholder="77800"
                        value={formik.values.price}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        required
                    />
                </article>
                {
                    formik.touched.price && formik.errors.price
                        ? <div className="form-error">{formik.errors.price}</div>
                        : null
                }

                <article className="form-label-input-wrapper" >
                    <label className="form-label" htmlFor="year">Year:</label>
                    <input className="form-input"
                        type="number"
                        id="year"
                        name="year"
                        placeholder="2017"
                        value={formik.values.year}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        required
                    />
                </article>
                {
                    formik.touched.year && formik.errors.year
                        ? <div className="form-error">{formik.errors.year}</div>
                        : null
                }


                <article className="form-label-input-wrapper" >
                    <label className="form-label" htmlFor="information">Information:</label>
                    <textarea className="form-input form-textarea"
                        name="information"
                        id="information"
                        placeholder="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum nulla odio, distinctio odit impedit."
                        value={formik.values.information}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        required
                    >

                    </textarea>
                </article>
                {
                    formik.touched.information && formik.errors.information
                        ? <div className="form-error">{formik.errors.information}</div>
                        : null
                }




                <article className="form-label-input-wrapper add-file" >
                    <label className="form-label-image" htmlFor="image">
                        <i className="fa-solid fa-upload"></i>{`Upload image`}
                        <input className="add-image-input"
                            type="file"
                            id="image"
                            name="image"
                            placeholder="Add image here"
                            value={formik.values.image}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            required
                        />
                    </label>
                </article>
                {
                    formik.touched.image && formik.errors.image
                        ? <div className="form-error">{formik.errors.image}</div>
                        : null
                }


                <article className="form-label-input-wrapper" >
                    <input className="form-submit-btn" type="submit" value={"Add truck"} />
                </article>
            </form>
        </section>
    )

}

export default AddNewTruck;