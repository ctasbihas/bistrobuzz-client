import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import { useAxiosSecure } from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AddItem = () => {
    const ImgUploadToken = import.meta.env.VITE_IMGBB_UPLOAD_TOKEN;
    const imageHostingURL = `https://api.imgbb.com/1/upload?key=${ImgUploadToken}`
    const { register, handleSubmit, reset } = useForm();
    const [axiosSecure] = useAxiosSecure();

    const onSubmit = data => {
        const formData = new FormData();
        formData.append("image", data.image[0]);
        fetch(imageHostingURL, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const imgURL = imgData.data.display_url;
                    const { name, recipe, category, price } = data;
                    const newMenuFood = { name, recipe, image: imgURL, category, price: parseFloat(price) };
                    axiosSecure.post('/menu', newMenuFood)
                        .then(postData => {
                            if (postData.data.insertedId) {
                                reset();
                                Swal.fire({
                                    position: "center",
                                    icon: "success",
                                    title: "Food Item Successfully Added.",
                                    showConfirmButton: false,
                                    timer: 2000
                                })
                            }
                        })
                }
            })
    };

    return (
        <section className="bg-white">
            <Helmet><title>Bistro Buzz Restaurant | Add Item</title></Helmet>
            <SectionTitle subHeading={"What's New?"} heading={"Add An Item"} />
            <form onSubmit={handleSubmit(onSubmit)} className="bg-[#F3F3F3] p-5 rounded-lg space-y-5">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Recipe Name*</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Recipe Name"
                        className="input border-0 w-full bg-white"
                        {...register("name", { required: true })}
                    />
                </div>
                <div className="flex space-x-5">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Category*</span>
                        </label>
                        <select defaultValue={"Category"} {...register("category", { required: true })} className="select border-0 bg-white">
                            <option disabled>Category</option>
                            <option>Salad</option>
                            <option>Pizza</option>
                            <option>Soup</option>
                            <option>Dessert</option>
                            <option>Drink</option>
                            <option>Others</option>
                        </select>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Price*</span>
                        </label>
                        <input
                            type="number"
                            placeholder="Price"
                            className="input border-0 bg-white w-full"
                            {...register("price", { required: true })}
                        />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Food Image*</span>
                        </label>
                        <input
                            type="file"
                            className="file-input border-0 bg-white w-full"
                            {...register("image", { required: true })}
                            accept="image/*"
                            multiple={false}
                        />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Recipe Details*</span>
                    </label>
                    <textarea
                        className="textarea border-0 bg-white h-48"
                        placeholder="Recipe Details"
                        {...register("recipe", { required: true })}
                    ></textarea>
                </div>
                <input style={{ background: "linear-gradient(90deg, #835D23 0%, #B58130 100%)" }} type="submit" value="Add Item" className="btn border-0 px-5 " />
            </form>
        </section>
    );
};

export default AddItem;