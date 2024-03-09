import Image from "next/image";
import { useFormik } from "formik";
import formImage from "../public/form.png";
import * as Yup from "yup";
import { useRouter } from "next/router";
import { motion as m } from "framer-motion";
export default function Home() {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      country: "",
      terms: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, "Name must be 20 characters or less.")
        .required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      terms: Yup.array().required("Terms of service must be checked"),
    }),

    onSubmit: (values) => {
      console.log("form submitted");
      console.log(values);
      router.push({ pathname: "/success", query: values });
    },
  });

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <main className="h-screen flex items-center justify-center">
        <form
          onSubmit={formik.handleSubmit}
          className="bg-white flex rounded-lg w-1/2 font-latoRegular"
        >
          <div className="flex-1 text-gray-700 p-20">
            <h1 className="text-3xl pb-2 font-latoRegular">Lets Get Started</h1>
            <p className="text-lg text-gray-500">
              Enter your details to get started
            </p>
            <div className="mt-6">
              <div className="pb-4">
                <label
                  className={`block font-latoRegular text-sm pb-2 ${
                    formik.touched.name && formik.errors.name && "text-red-500"
                  }`}
                  htmlFor="name"
                >
                  {formik.touched.name && formik.errors.name
                    ? formik.errors.name
                    : "Name"}
                </label>
                <input
                  className="border-2 border-gray-200 rounded p-2 w-1/2 focus:border-teal-500 focus:ring-teal-50"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              <div className="pb-4">
                <label
                  className={`block font-latoRegular text-sm pb-2 ${
                    formik.touched.email &&
                    formik.errors.email &&
                    "text-red-500"
                  }`}
                  htmlFor="email"
                >
                  {formik.touched.email && formik.errors.email
                    ? formik.errors.email
                    : "Email"}
                </label>
                <input
                  className="border-2 border-gray-200 rounded p-2 w-1/2 focus:border-teal-500 focus:ring-teal-50"
                  type="text"
                  name="email"
                  placeholder="Enter your Email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              <div className="pb-4">
                <label
                  className="block font-latoRegular text-sm pb-2"
                  htmlFor="country"
                >
                  Country
                </label>
                <select
                  value={formik.values.country}
                  onChange={formik.handleChange}
                  name="country"
                  className="border-2 border-gray-200 rounded p-2 w-1/2 focus:border-teal-500 focus:ring-teal-50"
                >
                  <option>Trinidad & Tobago</option>
                  <option>United Kingdom</option>
                  <option>United States</option>
                  <option>India</option>
                  <option>China</option>
                </select>
              </div>
              <div className="pb-4">
                <label
                  className={`block font-latoRegular text-sm pb-2 ${
                    formik.touched.terms &&
                    formik.errors.terms &&
                    "text-red-500"
                  }`}
                  htmlFor="terms"
                >
                  {formik.touched.terms && formik.errors.terms
                    ? formik.errors.terms
                    : "Terms of service"}
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="terms"
                    value="checked"
                    onChange={formik.handleChange}
                    className="size-5 text-teal-500 border-2 focus:border-teal-500 focus:ring-teal-500"
                  />
                  <p className="text-sm font-latoBold text-gray-500">
                    I agree to the terms and service that my data will be taken
                    and sold
                  </p>
                </div>
              </div>
              <button
                type="submit"
                className="bg-teal-500 font-latoBold py-3 mt-6 text-white rounded-lg w-full p-2"
              >
                {" "}
                Start Learning Today{" "}
              </button>
            </div>
          </div>
          <div className="flex-1 relative">
            <Image
              src={formImage}
              alt="form image"
           fill
              priority
              className="object-cover rounded-lg"
            />
          </div>
        </form>
      </main>
    </m.div>
  );
}
